document.addEventListener('DOMContentLoaded', function () {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        const leftPos = 10 + Math.random() * 80;
        heart.style.left = `${leftPos}%`;

        const size = 40 + Math.random() * 50;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        const colors = ['#ff1493', '#ff00ff', '#ff69b4', '#ff007f', '#ff0080', '#ff0090'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        const style = document.createElement('style');
        style.innerHTML = `
        .heart[data-color="${color}"]:before,
        .heart[data-color="${color}"]:after {
            background: ${color};
            }
            `;
        document.head.appendChild(style);
        heart.setAttribute('data-color', color);

        const duration = 1.5 + Math.random();
        heart.style.animationDuration = `${duration}s`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
            style.remove();
        }, duration * 1500);
    }

    let heartInterval = setInterval(createHeart, 300);
    document.addEventListener('click', createHeart);
});