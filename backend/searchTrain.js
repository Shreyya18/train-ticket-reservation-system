module.exports = (app, db) => {
  // Handle search train requests
  app.post('/api/search', (req, res) => {
    const { from, to, date, classType } = req.body;
    const query = `
      SELECT t.Train_No, t.Train_Name, t.Source_Station, t.Destination_Station, t.Departure_Time, t.Arrival_Time, t.Journey_Duration, t.Class_Type, t.Route,
             t.Total_Seats - COALESCE(b.Booked_Seats, 0) AS Available_Seats
      FROM Train t
      LEFT JOIN (
        SELECT train_no, COUNT(*) AS Booked_Seats
        FROM Booking
        WHERE journey_date = ? 
        GROUP BY train_no
      ) b ON t.Train_No = b.train_no
      WHERE t.Source_Station = ? 
      AND t.Destination_Station = ? 
      AND t.Class_Type = ?
      ORDER BY t.Departure_Time;
    `;
    const values = [date, from, to, classType];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error searching for trains', error: err });
      } else {
        res.json(results);
      }
    });
  });
};
