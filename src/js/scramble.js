const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

    setTimeout(scramble, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.scramble');
    elements.forEach((element) => {
        scrambleText(element, element.innerText);
    });
});