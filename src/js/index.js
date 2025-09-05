// 6863805c7658e18805c170854cc97616
// Role writing 

document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.role-typewriting');
    const texts = ['Ethical Hacker', 'IT Researcher'];
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
    console.log('[DEBUG] Typewriter effect initialized');
});

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
        console.log(`[DEBUG] Activated ${targetDivId}`);
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

// skills automation - circular style

function animateCircularProgress(ratingId, circleId, stopAt, max = 10) {
    const ratingText = document.getElementById(ratingId);
    const circle = document.getElementById(circleId);

    if (!ratingText || !circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    let progress = 0;
    const target = stopAt;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    const interval = setInterval(() => {
        if (progress >= target) {
            clearInterval(interval);
            ratingText.innerText = `${target}`;
            const offset = circumference - (target / max) * circumference;
            circle.style.strokeDashoffset = offset;
        } else {
            progress++;
            ratingText.innerText = `${progress}`;
            const offset = circumference - (progress / max) * circumference;
            circle.style.strokeDashoffset = offset;
        }
    }, 200);
}

function startAllCircularProgress() {
    animateCircularProgress("skillrating1", "skillcircle1", 10);
    animateCircularProgress("skillrating2", "skillcircle2", 8);
    animateCircularProgress("skillrating3", "skillcircle3", 10);
    animateCircularProgress("skillrating4", "skillcircle4", 9);
    animateCircularProgress("skillrating5", "skillcircle5", 9);
    animateCircularProgress("skillrating6", "skillcircle6", 10);
    animateCircularProgress("skillrating7", "skillcircle7", 10);
    animateCircularProgress("skillrating8", "skillcircle8", 8);
    animateCircularProgress("skillrating9", "skillcircle9", 9);
    animateCircularProgress("skillrating10", "skillcircle10", 10);
    animateCircularProgress("skillrating11", "skillcircle11", 10);
    animateCircularProgress("skillrating12", "skillcircle12", 10);
    animateCircularProgress("skillrating13", "skillcircle13", 10);
    animateCircularProgress("skillrating14", "skillcircle14", 9);
    animateCircularProgress("skillrating15", "skillcircle15", 8);
    animateCircularProgress("skillrating16", "skillcircle16", 9);
}

function checkForActiveClass() {
    const skillPage = document.querySelector(".skill-page");

    if (skillPage && skillPage.classList.contains("active")) {
        startAllCircularProgress();
        clearInterval(checkInterval);
        console.log(`[DEBUG] Progress animation started successfully`);
    }
}

const checkInterval = setInterval(checkForActiveClass, 500);

async function loadCerTableFromJSON(jsonFile, tableSelector) {
    try {
        const response = await fetch(jsonFile);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const tableBody = document.querySelector(`${tableSelector} tbody`);

        tableBody.innerHTML = "";

        let sl = 1;

        data.forEach(item => {
            const row = document.createElement("tr");

            row.innerHTML = `
        <td>${sl++}</td>
        <td><a href="${item.link}" target="_blank" alt="${item.title} | Nabil" rel="noopener noreferrer" aria-label="${item.title} | Nabil">${item.title} <img src="./src/img/icon/newwindow.webp" class="inline-img"></a></td>
        <td>${item.auth}</td>
      `;

            tableBody.appendChild(row);
        });

        console.log("[DEBUG] All certifications loaded from JSON.");
    } catch (error) {
        console.error("Error fetching JSON:", error);
    }
}

loadCerTableFromJSON("./src/json/certification.json", "#certification-table");


async function initGlitchEffect() {
    const targetDiv = document.querySelector(".glitch_layers");

    if (!targetDiv) {
        console.warn("[DEBUG] .glitch_layers not found");
        return;
    }

    setTimeout(() => {
        console.log("[DEBUG] Successfully removed glitch effect.");
        targetDiv.style.display = "none";
    }, 10000);

}

document.addEventListener("DOMContentLoaded", initGlitchEffect);



