// script.js

// Registration form handler
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Save user data to localStorage (for demo purposes)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now login.');
});

// Login form handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if login credentials match
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        document.getElementById('userDetails').style.display = 'block';
        document.getElementById('userInfo').textContent = `Welcome, ${storedUsername}! Email: ${localStorage.getItem('email')}`;
    } else {
        alert('Invalid username or password.');
    }
});
