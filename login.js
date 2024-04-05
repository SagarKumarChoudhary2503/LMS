document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            // Here you can redirect the user to the dashboard or another page
            window.location.href = 'books.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});

document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();

    const storedEmail = localStorage.getItem('email');

    var email = prompt("Please enter your email:");

    if (email === storedEmail) {
        var newPassword = prompt("Please enter your new password:");

        if (newPassword) {
            localStorage.setItem('password', newPassword);
            alert("Password reset successful!");
            window.location.href = 'books.html';
        } else {
            alert("New password not provided. Password reset canceled.");
        }
    } else {
        alert("Invalid email. Password reset canceled.");
    }
});