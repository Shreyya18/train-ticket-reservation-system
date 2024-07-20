document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');

  // Fetch and populate class options
  const classSelect = document.getElementById('class');
  fetch('/api/train-classes')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) {
        data.forEach(row => {
          const option = document.createElement('option');
          option.value = row.Class_Type;
          option.textContent = row.Class_Type;
          classSelect.appendChild(option);
        });
      } else {
        console.error('Unexpected response format:', data);
      }
    })
    .catch(error => {
      console.error('Error fetching class types:', error);
    });

  // Event listener for form submission
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get values from form inputs
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const classType = document.getElementById('class').value; // Get selected class type

    // Prepare data to send to the server
    const searchData = { from, to, date, classType };

    // Send a POST request to the server to search for trains
    fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(searchData)
    })
    .then(response => response.json())
    .then(data => {
      const searchResultsDiv = document.getElementById('search-results');

      // Clear previous search results
      searchResultsDiv.innerHTML = '';

      // Display search results
      if (Array.isArray(data) && data.length > 0) {
        const trainInfo = `
          <table>
            <thead>
              <tr>
                <th>Train No</th>
                <th>Train Name</th>
                <th>From</th>
                <th>To</th>
                <th>Departure Time</th>
                <th>Arrival Time</th>
                <th>Duration</th>
                <th>Class</th>
                <th>Route</th>
                <th>Available Seats</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${data.map(train => `
                <tr>
                  <td>${train.Train_No}</td>
                  <td>${train.Train_Name}</td>
                  <td>${train.Source_Station}</td>
                  <td>${train.Destination_Station}</td>
                  <td>${train.Departure_Time}</td>
                  <td>${train.Arrival_Time}</td>
                  <td>${train.Journey_Duration}</td>
                  <td>${train.Class_Type}</td>
                  <td>${train.Route}</td>
                  <td>${train.Available_Seats}</td>
                  <td><button onclick="bookTrain(${train.Train_No})">Book</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
        searchResultsDiv.insertAdjacentHTML('beforeend', trainInfo);
      } else {
        searchResultsDiv.textContent = 'No trains found.';
      }
    })
    .catch(error => console.error('Error:', error));
  });

  // Placeholder function for booking a train (to be implemented)
  window.bookTrain = function(trainNo) {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;

    window.location.href = `book-ticket.html?trainNo=${trainNo}&from=${from}&to=${to}&date=${date}`;
  };
});
