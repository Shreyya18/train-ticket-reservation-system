module.exports = (app, db, bcrypt) => {
  // Handle the /signup route
  app.post('/signup', (req, res) => {
    const { username, email, password, 'confirm-password': confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).send({ message: 'Passwords do not match' });
    }

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error hashing password', error: err });
      } else {
        const query = 'INSERT INTO signup (username, email, password_hash) VALUES (?, ?, ?)';
        const values = [username, email, hash];

        db.query(query, values, (err, results) => {
          if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error storing user data', error: err });
          } else {
            res.send({ message: 'Signup successful!' });
          }
        });
      }
    });
  });

  // Handle the /login route
  app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM signup WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error retrieving user data', error: err });
      } else if (results.length === 0) {
        res.status(400).send({ message: 'Incorrect email or password' });
      } else {
        const user = results[0];
        bcrypt.compare(password, user.password_hash, (err, isMatch) => {
          if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error comparing passwords', error: err });
          } else if (!isMatch) {
            res.status(400).send({ message: 'Incorrect email or password' });
          } else {
            res.send({ message: 'Login successful!', user,user_id: user.id});
          }
        });
      }
    });
  });

  // Retrieve all users
  app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM signup';
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error retrieving users', error: err });
      } else {
        res.send(results);
      }
    });
  });
};
