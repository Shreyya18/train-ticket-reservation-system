// bookdetail.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('bookingId');
  
    if (!bookingId) {
      alert('Missing booking ID.');
      return;
    }
  
    // Fetch booking details
    fetch(`/api/booking-detail/${bookingId}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const booking = data.booking;
          document.getElementById('bookingId').textContent = booking.booking_id;
          document.getElementById('trainNo').textContent = booking.train_no;
          document.getElementById('trainName').textContent = booking.Train_Name;
          document.getElementById('sourceStation').textContent = booking.Source_Station;
          document.getElementById('destinationStation').textContent = booking.Destination_Station;
          document.getElementById('journeyDate').textContent = booking.journey_date;
          document.getElementById('departureTime').textContent = booking.Departure_Time;
          document.getElementById('arrivalTime').textContent = booking.Arrival_Time;
          document.getElementById('amount').textContent = `₹${booking.amount}`;
          document.getElementById('paymentDate').textContent = booking.payment_date;
          document.getElementById('classType').textContent = booking.Class_Type;
          document.getElementById('route').textContent = booking.Route;
          document.getElementById('status').textContent = booking.status;
          document.getElementById('passengerName').textContent = booking.passenger_name;
          document.getElementById('gender').textContent = booking.gender;
          document.getElementById('phone').textContent = booking.phone;
          document.getElementById('age').textContent = booking.age;

        } else {
          alert('Error fetching booking details.');
        }
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
        alert('Error fetching booking details.');
      });
  });
  
  function printReceipt() {
    window.print();
  }
  