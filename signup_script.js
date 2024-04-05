 document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const createPassword = document.getElementById('create-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        
        if (createPassword !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        
        localStorage.setItem('email', email);
        localStorage.setItem('password', createPassword);

        
        window.location.href = 'login.html';
    });
 });