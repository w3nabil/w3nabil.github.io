/*************************************************
*                   @W3NABIL                     *
* ***********************************************/

// Role typewriting 

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

const skillPage = document.querySelector('.skill-page');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillPage.classList.add("active");
            startAllProgressBars();
            observer.disconnect();
        }
    });
}, { threshold: 0.3 }); 

observer.observe(skillPage);

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

// Nav burger 

function toggleMenu() {
    document.getElementById("navlist").classList.toggle("active");
}

function navActive(button) {
    document.querySelectorAll('.navbar li').forEach(li => li.classList.remove("active"));
    button.parentElement.classList.add("active");

    document.getElementById("navlist").classList.remove("active");
}

// Cer & EDU slide in 

function handleScroll() {
    const elements = document.querySelectorAll('.education, .certificate, .award-table, .research-table, .employment-table, .socialactivities-table, .hobby-list');
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
        const divPosition = el.getBoundingClientRect().top;

        if (divPosition < windowHeight * 0.8) { 
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", handleScroll);
