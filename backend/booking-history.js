module.exports = (app, db) => {
    app.get('/api/booking-history', (req, res) => {
      const bookingQuery = `
        SELECT b.booking_id, b.train_no, b.journey_date, b.passenger_name, b.gender, b.phone, b.status, b.age,
               t.Train_Name, t.Source_Station, t.Destination_Station, t.Departure_Time, t.Arrival_Time, t.Class_Type, t.Route,
               p.amount, p.payment_date
        FROM Booking b
        JOIN Train t ON b.train_no = t.Train_No
        JOIN Payment p ON b.booking_id = p.booking_id
      `;
  
      db.query(bookingQuery, (err, results) => {
        if (err) {
          console.error('Error fetching booking history:', err);
          res.json({ success: false, message: 'Error fetching booking history' });
        } else {
          res.json({ success: true, bookings: results });
        }
      });
    });
  };
  