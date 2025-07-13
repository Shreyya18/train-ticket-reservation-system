document.addEventListener('DOMContentLoaded', () => {
  const userId = localStorage.getItem('user_id');
  if(!userId){
    alert('please login to book a ticket');
    window.location.href='login.html';
    return;
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  //const userId = urlParams.get('userId');
  const trainNo = urlParams.get('trainNo');
  const from = urlParams.get('from');
  const to = urlParams.get('to');
  const date = urlParams.get('date');

  if (!trainNo || !from || !to || !date) {
    alert('Please select a train from the search page before booking.');
    window.location.href = 'search-trains.html'; // Redirect to search page
    return;
  }

  // document.getElementById('id').value = userId;
  document.getElementById('train-no').value = trainNo;
  document.getElementById('from').value = from;
  document.getElementById('to').value = to;
  document.getElementById('date').value = date;

  const bookTicketForm = document.getElementById('book-ticket-form');

  bookTicketForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookingData = {
      user_id: userId,
      train_no: trainNo,
      booking_date: new Date().toISOString().split('T')[0],
      journey_date: date,
      passenger_name: document.getElementById('passenger-name').value,
      age: document.getElementById('age').value,
      gender: document.getElementById('gender').value,
      phone: document.getElementById('phone').value,
      status: 'Booked'
    };

    fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
   .then(data => {
  console.log('Booking response:', data); // Inspect full response
  if (data.success) {
    const bookingId = data.booking_id;
    window.location.href = `payment.html?bookingId=${bookingId}&trainNo=${trainNo}`;
  } else {
    alert(`Error: ${data.message || 'Booking failed unexpectedly.'}`);
  }
})
    .catch(error => console.error('Error:', error));
  });
});
