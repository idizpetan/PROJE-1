const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        alert('Şifreler eşleşmiyor!');
        event.preventDefault(); // Form gönderimini engelle
    }
});
document.getElementById("searchInput").addEventListener("keyup", function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var cards = document.getElementsByClassName("card");
    window.location.href =`Teacher.html`

    for (var i = 0; i < cards.length; i++) {
        var cardText = cards[i].innerText.toLowerCase();
        if (cardText.includes(input)) {
            cards[i].parentElement.style.display = "block"; // Kartı göster
        } else {
            cards[i].parentElement.style.display = "none"; // Kartı gizle
        }
    }
});
