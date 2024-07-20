document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const trainNo = urlParams.get('trainNo');
    const bookingId = urlParams.get('bookingId');
  
    if (!trainNo || !bookingId) {
      alert('Missing train number or booking ID.');
      return;
    }
  
    fetch(`/api/train-amount/${trainNo}`)
      .then(response => response.json())
      .then(data => {
        if (data.amount !== undefined) {
          document.getElementById('amount').value = data.amount;
        } else {
          alert('Error fetching train amount');
        }
      })
      .catch(error => {
        console.error('Error fetching train amount:', error);
        alert('Error fetching train amount');
      });
  
    const paymentForm = document.getElementById('payment-form');
  
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const paymentData = {
        booking_id: bookingId,
        amount: document.getElementById('amount').value,
        payment_date: new Date().toISOString().split('T')[0],
        payment_status: 'Completed',
      };
  
      fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          //alert('Payment successful!');
          const bookingId=data.booking_id;
          window.location.href = `payment-successful.html?bookingId=${bookingId}`;
        } else {
          alert('Error processing payment');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error processing payment');
      });
    });
  });
  