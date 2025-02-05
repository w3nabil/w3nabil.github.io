// 6863805c7658e18805c170854cc97616
// Role writing 

document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.role-typewriting');
    const texts = ['Ethical Hacker', 'Community Administrator'];
    let textIndex = 0;
    let charIndex = 0;

    function updateText() {
        typewriterElement.innerHTML = texts[textIndex].substring(0, charIndex) + '<span class="type-cursor">|</span>';
    }

    function type() {
        if (charIndex <= texts[textIndex].length) {
            updateText();
            charIndex++;
            setTimeout(type, Math.random() * 150 + 50);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex >= 0) {
            updateText();
            charIndex--;
            setTimeout(erase, Math.random() * 100 + 25);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 0);
        }
    }

    type();
});

// Sub box 

function toggleSection(button) {
    const section = button.parentElement;
    const extendedText = section.querySelector('.extended-text');
    const icon = section.querySelector('.icon');

    if (extendedText.style.display === 'none' || extendedText.style.display === '') {
        extendedText.style.display = 'block';
        icon.textContent = '📁 ';
    } else {
        extendedText.style.display = 'none';
        icon.textContent = '📁 ';
    }
}

// Nav Active or Deactive

function navActive(clickedButton) {
    const listItems = document.querySelectorAll('#navlist li');
    const ListDiv = document.querySelectorAll('#content div');

    listItems.forEach(li => {
        li.classList.remove('active');
    });

    ListDiv.forEach(div => {
        div.classList.remove('active');
    });

    const li = clickedButton.parentElement;
    li.classList.add('active');

    const targetDivId = clickedButton.getAttribute('data-target');
    const targetDiv = document.querySelector(`#${targetDivId}`);
    if (targetDiv) {
        targetDiv.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const defaultLi = document.querySelector('#navlist li.active');
    const defaultDiv = document.querySelector('#content div.active');

    if (defaultLi) {
        defaultLi.classList.add('active');
    }

    if (defaultDiv) {
        defaultDiv.classList.add('active');
    }
});

// skills automation

function animateProgressBar(id, ratingId, stopAt) {
    const progressBar = document.getElementById(id);
    const ratingText = document.getElementById(ratingId);
    let width = 0;
    const interval = setInterval(() => {
        if (width >= stopAt * 10) {
            clearInterval(interval);
        } else {
            width += 1;
            progressBar.style.width = width + '%';
            ratingText.innerText = Math.round(width / 10) + ' / 10';
        }
    }, 10);
}

function startAllProgressBars() {
    animateProgressBar('skillprogress1', 'skillrating1', 9);
    animateProgressBar('skillprogress2', 'skillrating2', 8);
    animateProgressBar('skillprogress3', 'skillrating3', 8);
    animateProgressBar('skillprogress4', 'skillrating4', 9);
    animateProgressBar('skillprogress5', 'skillrating5', 9);
    animateProgressBar('skillprogress6', 'skillrating6', 10);
    animateProgressBar('skillprogress7', 'skillrating7', 10);
    animateProgressBar('skillprogress8', 'skillrating8', 10);
    animateProgressBar('skillprogress9', 'skillrating9', 9);
    animateProgressBar('skillprogress10', 'skillrating10', 10);
    animateProgressBar('skillprogress11', 'skillrating11', 8);
    animateProgressBar('skillprogress12', 'skillrating12', 8);
    animateProgressBar('skillprogress13', 'skillrating13', 8);
}

function checkForActiveClass() {
    const skillPage = document.querySelector('.skill-page');

    if (skillPage && skillPage.classList.contains("active")) {
        startAllProgressBars();
        clearInterval(checkInterval);
    }
}

const checkInterval = setInterval(checkForActiveClass, 500);