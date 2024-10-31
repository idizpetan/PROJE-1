const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        alert('Şifreler eşleşmiyor!');
        event.preventDefault(); // Form gönderimini engelle
    }
})
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    // Kullanıcıya mesaj gönderildiğine dair bir bildirim
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block'; // Mesajı göster

    // Form alanlarını temizle
    document.getElementById('contactForm').reset();
});
