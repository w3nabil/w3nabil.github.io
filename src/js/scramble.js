const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function scrambleText(element, targetText) {
    let iteration = 0;

    function scramble() {
        const interval = setInterval(() => {
            element.innerText = targetText
                .split('')
                .map((char, index) => {
                    if (index < iteration) {
                        return char;
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join('');

            iteration += 1 / 3;

            if (iteration >= targetText.length) {
                clearInterval(interval);
            }
        }, 50);
    }

    setTimeout(scramble, 150);
}

function startScrambleEffect(container) {
    const elements = container.querySelectorAll('.scramble');
    elements.forEach((element) => {
        scrambleText(element, element.innerText);
    });
}

function observeVisibility(targetId) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const observer = new MutationObserver(() => {
        if (getComputedStyle(targetElement).display === 'block') {
            observer.disconnect(); 
            startScrambleEffect(targetElement); 
        }
    });

    observer.observe(targetElement, { attributes: true, attributeFilter: ['style'] });
}

document.addEventListener("DOMContentLoaded", () => {
    observeVisibility('webContent');
});
