document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const toggleButtons = document.querySelectorAll('.toggle-password');
    const loadingSpinner = document.querySelector('.loading-spinner');
    const btnText = document.querySelector('.btn-text');

    // Toggle password visibility
    toggleButtons.forEach((toggle, index) => {
        toggle.addEventListener('click', function() {
            const input = passwordInputs[index];
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });

    // Form validation and submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const fullname = document.getElementById('fullname').value;

        // Basic validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }

        // Show loading state
        loadingSpinner.style.display = 'block';
        btnText.style.opacity = '0';

        // Simulate API call (replace with actual API call)
        setTimeout(() => {
            // Here you would typically make an API call to register the user
            console.log('Form submitted with:', {
                username,
                email,
                fullname,
                password: '********' // Don't log actual password
            });

            // Reset loading state
            loadingSpinner.style.display = 'none';
            btnText.style.opacity = '1';

            // Redirect to login page
            window.location.href = 'login1.html';
        }, 1500);
    });

    // Real-time password match validation
    const confirmPasswordInput = document.getElementById('confirm-password');
    confirmPasswordInput.addEventListener('input', function() {
        const password = document.getElementById('password').value;
        if (this.value !== password) {
            this.setCustomValidity('Passwords do not match');
        } else {
            this.setCustomValidity('');
        }
    });
}); 