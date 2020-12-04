const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
    //console.log(currentActive);
})

prevBtn.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progressBar.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; // moves the bar along with circles.

    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}