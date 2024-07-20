module.exports = (app, db) => {
  app.post('/api/book', (req, res) => {
    const { user_id, train_no, booking_date, journey_date, passenger_name, age, gender, phone, status } = req.body;

    const fetchTrainTimesQuery = 'SELECT Departure_Time, Arrival_Time FROM Train WHERE Train_No = ?';
    db.query(fetchTrainTimesQuery, [train_no], (err, trainResults) => {
      if (err) {
        console.error('Error fetching train times:', err);
        return res.status(500).send({ success: false, message: 'Error fetching train times' });
      }

      if (trainResults.length === 0) {
        return res.status(404).send({ success: false, message: 'Train not found' });
      }

      //const { Departure_Time, Arrival_Time } = trainResults[0];
      const bookingQuery = `
        INSERT INTO Booking (user_id, train_no, booking_date, journey_date, passenger_name, age, gender, phone, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const bookingValues = [user_id, train_no, booking_date, journey_date, passenger_name, age, gender, phone, status];

      db.query(bookingQuery, bookingValues, (err, results) => {
        if (err) {
          console.error('Error booking:', err);
          return res.status(500).send({ success: false, message: 'Error booking the ticket' });
        }

        res.status(200).send({ success: true, booking_id: results.insertId });
      });
    });
  });

  // app.post('/api/pay', (req, res) => {
  //   const { booking_id, amount, payment_date, payment_status } = req.body;

  //   const paymentQuery = `
  //     INSERT INTO Payment (booking_id, amount, payment_date, payment_status)
  //     VALUES (?, ?, ?, ?)
  //   `;

  //   const paymentValues = [booking_id, amount, payment_date, payment_status];

  //   db.query(paymentQuery, paymentValues, (err, results) => {
  //     if (err) {
  //       console.error('Error processing payment:', err);
  //       return res.status(500).send({ success: false, message: 'Error processing payment' });
  //     }

  //     res.status(200).send({ success: true });
  //   });
  // });

  app.get('/api/bookings', (req, res) => {
    const query = 'SELECT * FROM Booking';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching booking history:', err);
        return res.status(500).send('Error fetching booking history');
      }

      res.status(200).json(results);
    });
  });
};
