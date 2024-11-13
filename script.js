document.addEventListener("DOMContentLoaded", function () {
    const questionList = document.querySelector(".question-list");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close");
    const reviewText = document.getElementById("review-text");

    // Her soru için çalışma önerilerini içeren nesne
    const reviewData = {
        1: "Slayt 1 - Sayfa 5: Anatomi giriş konularını tekrar ediniz.",
        2: "Slayt 3 - Sayfa 12: Sinir sistemi tekrar edilmelidir.",
        3: "Slayt 5 - Sayfa 20: Dolaşım sistemi konuları önemlidir.",
        // Diğer sorular için çalışma önerileri buraya eklenebilir
    };

    // 1'den 50'ye kadar tüm soruları listeye ekleyin
    for (let i = 1; i <= 50; i++) {
        const question = document.createElement("div");
        question.classList.add("question");
        question.textContent = `${i}. Soru`;
        
        // Tıklama olayını her soru için tanımla
        question.addEventListener("click", function () {
            reviewText.textContent = reviewData[i] || "Bu soruyu yanlış yaptıysanız, ilgili konuları tekrar ediniz!";
            modal.style.display = "block";
        });
        
        questionList.appendChild(question);
    }

    // Modal'ı kapatma işlevi
    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
