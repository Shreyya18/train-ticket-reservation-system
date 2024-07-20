const session = require('express-session');
const path = require('path');

module.exports = (app, db) => {
  // Configure session middleware
  app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));

  // Hard-coded admin credentials
  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  // Admin login route
  app.post('/api/admin-login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.username && password === adminCredentials.password) {
      req.session.admin = true; // Set admin status in session
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });

  // Middleware to check if admin is authenticated
  function checkAdminAuth(req, res, next) {
    if (req.session.admin) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }

  // Protect admin routes
  app.get('/admin-dashboard.html', checkAdminAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/admin-dashboard.html'));
  });

  app.get('/booking-history.html', checkAdminAuth, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/booking-history.html'));
  });

  // Define endpoint to get registered users
  app.get('/api/users', checkAdminAuth, (req, res) => {
    const query = 'SELECT username, email, created_at FROM signup';
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error retrieving users' });
      }
      res.json(results);
    });
  });

  // Protect admin routes
  app.use('/admin-dashboard.html', checkAdminAuth);
  app.use('/booking-history.html', checkAdminAuth);
};
