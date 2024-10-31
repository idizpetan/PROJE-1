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
let currentEvent; // Seçilen etkinlik değişkeni

    $(document).ready(function() {
        // Takvim oluşturma
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            events: [
                {
                    title: 'Ahmet Yılmaz - Matematik',
                    start: '2024-11-01T14:00:00',
                    end: '2024-11-01T15:00:00',
                    description: 'Öğrenci: Ahmet Demir',
                    id: 1
                },
                {
                    title: 'Elif Kaya - Fizik',
                    start: '2024-11-02T16:00:00',
                    end: '2024-11-02T17:00:00',
                    description: 'Öğrenci: Zeynep Yılmaz',
                    id: 2
                },
                {
                    title: 'Mehmet Demir - Tarih',
                    start: '2024-11-03T10:00:00',
                    end: '2024-11-03T11:00:00',
                    description: 'Öğrenci: Merve Kızıl',
                    id: 3
                }
            ],
            eventRender: function(event, element) {
                element.bind('click', function() {
                    currentEvent = event; // Seçilen etkinliği sakla
                    $('#modalDescription').text(event.title + '\n' + event.description);
                    $('#appointmentModal').modal('show');
                });
            }
        });

        // Yeni randevu alma
        $('#appointmentForm').on('submit', function(event) {
            event.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

            const teacherName = $('#teacherName').val();
            const appointmentDate = $('#appointmentDate').val();
            const appointmentTime = $('#appointmentTime').val();
            const eventStart = appointmentDate + 'T' + appointmentTime + ':00';
            const eventEnd = appointmentDate + 'T' + (parseInt(appointmentTime.split(':')[0]) + 1) + ':00:00'; // 1 saatlik randevu

            // Randevuyu takvime ekleme
            $('#calendar').fullCalendar('renderEvent', {
                title: teacherName,
                start: eventStart,
                end: eventEnd,
                description: 'Öğrenci: Belirtilmemiş',
                id: Date.now() // Benzersiz bir ID oluştur
            });

            // Randevu isteği alındı mesajı
            alert("Randevu isteğiniz alınmıştır!");

            // Formu sıfırla
            this.reset();
        });

        // Randevu onaylama
        $('#confirmAppointment').on('click', function() {
            alert(currentEvent.title + ' onaylandı!');
            $('#appointmentModal').modal('hide');
        });

        // Randevu iptal etme
        $('#cancelAppointment').on('click', function() {
            $('#calendar').fullCalendar('removeEvents', currentEvent.id); // Randevuyu takvimden kaldır
            alert(currentEvent.title + ' iptal edildi!');
            $('#appointmentModal').modal('hide');
        });
    });