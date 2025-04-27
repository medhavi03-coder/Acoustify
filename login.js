document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.querySelector('.login-btn');

    // Toggle password visibility
    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordToggle.classList.toggle('fa-eye');
        passwordToggle.classList.toggle('fa-eye-slash');
    });

    // Form submission handling
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Show loading state
        loginBtn.classList.add('loading');

        try {
            // Simulate API call (replace with actual authentication)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Validate credentials (replace with actual validation)
            if (username && password) {
                // Successful login
                window.location.href = 'home.html';
            } else {
                throw new Error('Please fill in all fields');
            }
        } catch (error) {
            // Show error message
            alert(error.message);
        } finally {
            // Remove loading state
            loginBtn.classList.remove('loading');
        }
    });

    // Add input focus effects
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
}); 