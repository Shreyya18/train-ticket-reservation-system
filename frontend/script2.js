const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send a POST request to the server to login
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.message === 'Login successful') {
      // Redirect to protected route
      window.location.href = 'protected.html';
    } else {
      // Display error message or update UI to indicate login failure
      console.log('Login failed!');
    }
  })
  .catch((error) => console.error(error));
});