document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Toggle kelas 'active' pada tombol pertanyaan
            question.classList.toggle('active');
            
            // Toggle kelas 'show' pada jawaban untuk membuka/menutup
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
            } else {
                // Opsional: Tutup semua accordion lain saat satu dibuka
                closeAllAnswers();
                answer.classList.add('show');
            }
        });
    });

    function closeAllAnswers() {
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('show');
        });
    }
});
