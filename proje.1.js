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

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Form verilerini işleme (örneğin, bir sunucuya gönderme)
    console.log('Ad:', name);
    console.log('E-posta:', email);
    console.log('Konu:', subject);
    console.log('Mesaj:', message);

    // Kullanıcıya mesaj gönderildiğine dair bir bildirim
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none'; // 3 saniye sonra mesajı gizle
    }, 3000);
    
    // Form alanlarını temizle
    document.getElementById('contactForm').reset();
});
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

    // Form verilerini al
    const teacherName = document.getElementById('teacherName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    // Randevu bilgilerini göster
    alert(`Randevu Alındı:\nEğitmen: ${teacherName}\nTarih: ${appointmentDate}\nSaat: ${appointmentTime}`);

    // Formu sıfırla
    this.reset();
});