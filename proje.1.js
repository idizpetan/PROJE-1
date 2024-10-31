const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        alert('Şifreler eşleşmiyor!');
        event.preventDefault(); // Form gönderimini engelle
    }
});
