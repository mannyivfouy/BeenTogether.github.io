document.addEventListener('DOMContentLoaded', function () {
    const timerContainer = document.getElementById('together');
    timerContainer.style.opacity = '1';
    timerContainer.style.transform = 'translateY(0)';

    const anniversaryDate = new Date();
    anniversaryDate.setMonth(4);
    anniversaryDate.setDate(14);
    anniversaryDate.setHours(0, 0, 0, 0,);

    const now = new Date();
    if (now < anniversaryDate) {
        anniversaryDate.setFullYear(anniversaryDate.getFullYear() - 1);
    }

    function updateTogetherTimer() {
        const now = new Date();
        const diff = Math.floor((new Date() - anniversaryDate) / 1000);

        const days = Math.floor(diff / 86400);
        const hours = Math.floor((diff % 86400) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = Math.floor(diff % 60);

        document.getElementById('d').textContent = days;
        document.getElementById('h').textContent = hours;
        document.getElementById('m').textContent = minutes;
        document.getElementById('s').textContent = seconds;
    }

    // updateTogetherTimer();
    setTimeout(updateTogetherTimer, 100);
    setInterval(updateTogetherTimer, 1000);

    window.counterAnimationComplete = true;
});