document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('odin-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    function isValidPassword(pw) {
        // At least 8 chars, at least one upper, one lower, and one digit
        return (
            pw.length >= 8 &&
            /[A-Z]/.test(pw) &&
            /[a-z]/.test(pw) &&
            /\d/.test(pw)
        );
    }

    function setPasswordValidity() {
        if (!isValidPassword(password.value)) {
            password.setCustomValidity('Password must be: \n-at least 8 characters\n-at least one uppercase letter\n-at least one lowercase letter\n-at least one digit.');
        } else if (confirmPassword.value && password.value !== confirmPassword.value) {
            password.setCustomValidity('Passwords do not match.');
        } else {
            password.setCustomValidity('');
        }
    }

    function setConfirmPasswordValidity() {
        if (confirmPassword.value && password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match.');
        } else {
            confirmPassword.setCustomValidity('');
        }
    }

    password.addEventListener('input', function () {
        setPasswordValidity();
        setConfirmPasswordValidity();
    });

    confirmPassword.addEventListener('input', setConfirmPasswordValidity);

    password.addEventListener('blur', function () {
        password.classList.add('touched');
    });

    form.addEventListener('submit', function (e) {
        setPasswordValidity();
        if (!form.checkValidity()) {
            e.preventDefault();
        }
    });
});