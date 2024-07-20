module.exports = (app, db) => {
    // Endpoint to get train amount
    app.get('/api/train-amount/:trainNo', (req, res) => {
      const { trainNo } = req.params;
    
      const query = 'SELECT Amount FROM Train WHERE Train_No = ?';
      db.query(query, [trainNo], (err, results) => {
        if (err) {
          console.error('Error fetching train amount:', err);
          return res.status(500).send({ message: 'Error retrieving train amount', error: err });
        }
    
        if (results.length === 0) {
          return res.status(404).send({ message: 'Train not found' });
        }
    
        res.send({ amount: results[0].Amount });
      });
    });
    
    // Endpoint to handle payment
    app.post('/api/pay', (req, res) => {
      const { booking_id, amount, payment_date, payment_status } = req.body;
    
      const paymentQuery = `
        INSERT INTO Payment (booking_id, amount, payment_date, payment_status)
        VALUES (?, ?, ?, ?)
      `;
    
      const paymentValues = [booking_id, amount, payment_date, payment_status];
    
      db.query(paymentQuery, paymentValues, (err, results) => {
        if (err) {
          console.error('Error processing payment:', err);
          return res.status(500).send({ success: false, message: 'Error processing payment' });
        }
    
        res.status(200).send({ success: true, booking_id });
      });
    });
  };
  