document.addEventListener('DOMContentLoaded', function() {
    // Hàm kiểm tra form đang hiển thị là login hay register
    const isLoginPage = document.getElementById('loginForm') !== null;
    const isRegisterPage = document.getElementById('registerForm') !== null;

    // Hàm toggle password chung cho cả 2 form
    function setupPasswordToggle(inputId, iconId) {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(iconId);
        
        if (passwordInput && toggleIcon) {
            toggleIcon.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Toggle type
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                // Toggle icon
                this.classList.toggle('fa-eye');
                this.classList.toggle('fa-eye-slash');
            });
        }
    }

    // Xử lý form đăng ký
    if (isRegisterPage) {
        // Setup password toggles cho cả 2 trường mật khẩu
        setupPasswordToggle('password', 'toggleIcon');
        setupPasswordToggle('confirmPassword', 'toggleIconConfirm');

        const registerForm = document.getElementById('registerForm');
        
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset trạng thái validation
            this.classList.remove('was-validated');
            let isValid = true;

            // Validate first name
            const firstName = document.getElementById('firstName');
            if (!firstName.value.trim()) {
                firstName.classList.add('is-invalid');
                isValid = false;
            }

            // Validate last name
            const lastName = document.getElementById('lastName');
            if (!lastName.value.trim()) {
                lastName.classList.add('is-invalid');
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            }

            // Validate phone
            const phone = document.getElementById('phone');
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(phone.value.trim())) {
                phone.classList.add('is-invalid');
                isValid = false;
            }

            // Validate password
            const password = document.getElementById('password');
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (!passwordRegex.test(password.value)) {
                password.classList.add('is-invalid');
                isValid = false;
            }

            // Validate confirm password
            const confirmPassword = document.getElementById('confirmPassword');
            if (password.value !== confirmPassword.value) {
                confirmPassword.classList.add('is-invalid');
                isValid = false;
            }

            // Validate terms
            const terms = document.getElementById('terms');
            if (!terms.checked) {
                terms.classList.add('is-invalid');
                isValid = false;
            }

            // Add event listeners để xóa trạng thái invalid khi user nhập lại
            const inputs = registerForm.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    this.classList.remove('is-invalid');
                });
            });

            if (isValid) {
                // Thực hiện đăng ký
                const submitButton = registerForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';

                // Giả lập API call
                setTimeout(() => {
                    alert('Đăng ký thành công!');
                    window.location.href = 'login.html';
                }, 1500);
            } else {
                registerForm.classList.add('was-validated');
            }
        });

        // Thêm validation realtime cho password
        const password = document.getElementById('password');
        password.addEventListener('input', function() {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if (passwordRegex.test(this.value)) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });

        // Thêm validation realtime cho confirm password
        const confirmPassword = document.getElementById('confirmPassword');
        confirmPassword.addEventListener('input', function() {
            const password = document.getElementById('password');
            if (this.value === password.value) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
    }

    // Xử lý form đăng nhập
    if (isLoginPage) {
        setupPasswordToggle('password', 'togglePassword');
        
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const loginButton = this.querySelector('button[type="submit"]');
                if (loginButton) {
                    loginButton.disabled = true;
                    loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang đăng nhập...';
                    
                    // Giả lập API call
                    setTimeout(() => {
                        loginButton.disabled = false;
                        loginButton.innerHTML = 'Đăng nhập';
                        // Thêm xử lý đăng nhập ở đây
                    }, 1500);
                }
            });
        }
    }
});

// Hàm xử lý social login
function handleFacebookLogin() {
    console.log('Facebook login clicked');
    // Thêm code xử lý đăng nhập Facebook
}

function handleGoogleLogin() {
    console.log('Google login clicked');
    // Thêm code xử lý đăng nhập Google
}
