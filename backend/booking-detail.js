module.exports = (app, db) => {
    app.get('/api/booking-detail/:bookingId', (req, res) => {
    const { bookingId } = req.params;
  
    const bookingQuery = `
      SELECT b.booking_id, b.train_no, b.journey_date, b.passenger_name, b.gender, b.phone, b.status, b.age,
             t.Train_Name, t.Source_Station, t.Destination_Station, t.Departure_Time, t.Arrival_Time, t.Class_Type, t.Route,
             p.amount, p.payment_date
      FROM Booking b
      JOIN Train t ON b.train_no = t.Train_No
      JOIN Payment p ON b.booking_id = p.booking_id
      WHERE b.booking_id = ?
    `;
  
    db.query(bookingQuery, [bookingId], (err, results) => {
      if (err) {
        console.error('Error fetching booking details:', err);
        return res.status(500).send({ success: false, message: 'Error fetching booking details', error: err });
      }
  
      if (results.length === 0) {
        return res.status(404).send({ success: false, message: 'Booking not found' });
      }
  
      res.send({ success: true, booking: results[0] });
    });
  });
};
  