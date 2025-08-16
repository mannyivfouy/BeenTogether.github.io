document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('typing-text');
    const messages = [
        "First I want to say sorry for being late to letting you see this.",
        "It is not even perfect, but I did my best for you.",
        "And I want to see your reaction when you see this in front of me.",
        "I hope this message brings a smile to your face the same way you bring happiness to my life every single day.",
        "Do you know how deeply I love you? From the very first day, the love I've given you has been pure, real and from the deepest part of my heart. Every moment with you feels special, every smile of yours lights up my day, every time you hold my hand, I feel like I'm the luckiest person in the world. I'm sorry for sometime I may be strict with you but it's only because I love you, I care about you and I worry about you. I'm scared of what might happen to you and I'm really scared of losing you. You're not just my love you're my happiness and my favorite part of everyday. You're not my first love but I promise you're going to be my last. You mean so much to me more than words can describe. No matter what happens, my heart will always choose you, over and over again for the rest of my life❤️❤️❤️❤️❤️❤️❤️.",
        "And now I've got something for you. It's just a little thing, but I hope it makes you happy.",
        "I think you already know what that thing is.",
        "Now open your phone case and you will see it, I hid it in your phone case"
    ];

    const config = {
        typeSpeed: 80,
        pauseAfter: 3000, // 3 seconds pause after finishing a sentence
        fadeOutDuration: 1000 // fade out duration in ms
    }

    let messageIndex = 0;
    let text = '';

    function typeMessage(message, callback) {
        let i = 0;
        function type() {
            if (i <= message.length) {
                container.innerHTML = message.substring(0, i) + `<span class="cursor"></span>`;
                i++;
                setTimeout(type, config.typeSpeed);
            } else {
                // Pause after finishing typing
                setTimeout(() => {
                    // Fade out the message
                    container.style.transition = `opacity ${config.fadeOutDuration}ms ease`;
                    container.style.opacity = 0;
                    setTimeout(callback, config.fadeOutDuration);
                }, config.pauseAfter);
            }
        }
        type();
    }

    function showNextMessage() {
        container.style.opacity = 1;
        typeMessage(messages[messageIndex], () => {
            messageIndex++;
            if(messageIndex < messages.length){
                showNextMessage();
            }            
        });
    }

    container.style.opacity = 0;
    container.style.transition = 'opacity 1s ease'
    setTimeout(() => {
    container.style.opacity = 1; // start fade in
    // wait until fade-in is done before typing
    setTimeout(() => {
        showNextMessage();
    }, 1000); // match the transition duration
}, 100);
});