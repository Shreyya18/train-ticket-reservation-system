// index.js

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
//const cors = require('cors');
const bcrypt = require('bcryptjs'); // Use bcryptjs for hashing
const db = require('./db'); // Database module
const session=require('express-session');

// Middlewares
app.use(bodyParser.json());
//app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Serve static files and HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/signup.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/admin-dashboard.html'));
});

// Import routes
require('./signup-login')(app, db, bcrypt);
require('./searchTrain')(app, db);
require('./bookticket')(app, db);
require('./pay-ment')(app, db);
require('./booking-detail')(app,db);
require('./booking-history')(app,db);
require('./admin-auth')(app,db);
// Define the endpoint to get available train classes
app.get('/api/train-classes', (req, res) => {
  const query = 'SELECT DISTINCT Class_Type FROM Train';

  db.query(query, (err, results) => {
      if (err) {
          console.error(err);
          return res.status(500).send({ message: 'Error retrieving class types', error: err });
      }
      res.send(results);
  });
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
