// Soru numaraları ve konuları eşleştirmek için bir nesne oluşturuyoruz
const topics = {
    1: "Anatomi",
    2: "Fizyoloji",
    3: "Histoloji",
    4: "Patoloji",
    5: "Biyokimya",
    // Burada 80'e kadar devam edin
    80: "Farmakoloji"
};

// Soru numaralarını sayfaya ekleme
const questionList = document.querySelector('.question-list');
for (let i = 1; i <= 80; i++) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.textContent = i;
    questionDiv.onclick = () => showPopup(i);
    questionList.appendChild(questionDiv);
}

// Popup gösterme fonksiyonu
function showPopup(questionNumber) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popupContent.textContent = `Bu soruyu yanlış yaptıysanız, ${topics[questionNumber]} çalışmalısınız.`;
    popup.style.display = 'block';
}

// Popup kapatma fonksiyonu
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
