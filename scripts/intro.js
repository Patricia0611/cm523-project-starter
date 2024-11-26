document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.header');
    const details = document.querySelectorAll('.detail');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const targetDetailId = this.dataset.detail;

            
            details.forEach(detail => {
                detail.classList.remove('active');
            });

            
            const targetDetail = document.getElementById(targetDetailId);
            if (targetDetail) {
                targetDetail.classList.add('active');
            }
        });
    });
});
