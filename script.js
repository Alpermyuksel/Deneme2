document.addEventListener("DOMContentLoaded", function () {
    const questionList = document.querySelector(".question-list");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close");
    const reviewText = document.getElementById("review-text");

    const reviewData = {
        1: "Slayt 1 - Sayfa 5: Anatomi giriş konularını tekrar ediniz.",
        2: "Slayt 3 - Sayfa 12: Sinir sistemi tekrar edilmelidir.",
        // Diğer sorular için çalışma önerileri ekleyin
    };

    for (let i = 1; i <= 50; i++) {
        const question = document.createElement("div");
        question.classList.add("question");
        question.textContent = `${i}. Soru`;
        question.addEventListener("click", function () {
            reviewText.textContent = reviewData[i] || "Bu soruyu yanlış yaptıysanız, ilgili konuları tekrar ediniz!";
            modal.style.display = "block";
        });
        questionList.appendChild(question);
    }

    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
