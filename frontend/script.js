// script.js
// Assume you have a signup form with an ID of "signup-form"
document.addEventListener('DOMContentLoaded', () => {
const signupForm = document.getElementById('signup-form');
if(signupForm)
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;

  // Send a POST request to the server to create a new user
  fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email }),
  })
  .then(response => response.json())
      .then(data => {
        const signupMessageDiv = document.getElementById('signupMessage');
        if (data.message === 'Signup successful!') {
          localStorage.setItem('user_id', data.id);
signupMessageDiv.textContent = 'Signup successful! Redirecting to login...';
setTimeout(() => {
  window.location.href = 'login.html';
}, 1500); // Delay for UX feedback        } else {
          signupMessageDiv.textContent = data.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
});

//login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      const messageDiv = document.getElementById('message');
      if (data.message === 'Login successful!') {
        localStorage.setItem('user_id', data.user_id);
        messageDiv.innerHTML = 'Login successful! <a href="index.html">Click here to go to the home page</a>';
        

        // Redirect to index.html or any other page you want
        //window.location.href = 'index.html';
      } else {
        // messageDiv.textContent = data.message;
        alert('Invalid credentials');

      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
