document.addEventListener('DOMContentLoaded', function () {
    const askForm = document.getElementById('ask-form');
    const summaryForm = document.getElementById('summary-form');

    function showProcessing(loadingId, answerId) {
        const loading = document.getElementById(loadingId);
        const answer = document.getElementById(answerId);

        if (loading) {
            loading.style.display = 'block';
            loading.textContent = 'Processing...';
        }

        if (answer) {
            answer.textContent = '';
            answer.style.display = 'none';
        }
    }

    if (askForm) {
        askForm.addEventListener('submit', function () {
            showProcessing('ask-loading', 'ask-answer');
        });
    }

    if (summaryForm) {
        summaryForm.addEventListener('submit', function () {
            showProcessing('summary-loading', 'summary-answer');
        });
    }
});
