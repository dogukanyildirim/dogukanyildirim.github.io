const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const step = document.querySelectorAll('.step');
const progressLine = document.querySelector('.progress-line');
const checkImage = document.querySelector('.check');

let state = 1;

nextBtn.addEventListener('click', NextFunc);

console.log("state..:" + state + " ***** " + "step..:" + step.length);

prevBtn.addEventListener('click', PrevFunc);

console.log("state..:" + state + " ***** " + "step..:" + step.length);

function NextFunc() {

    state++;

    if (state > step.length) {
        state = step.length;
    }
    console.log("state..:" + state + " ***** " + "step..:" + step.length);
    Update();
}

function PrevFunc() {

    state--;

    if (state > step.length) {
        state = 1;
    }
    console.log("state..:" + state + " ***** " + "step..:" + step.length);
    Update();
}

function Update() {
    step.forEach((step, index) => {
        if (index < state) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })

    const activeClass = document.querySelectorAll('.active');
    console.log("activeClass.length" + activeClass.length)
    progressLine.style.width = ((activeClass.length - 1) / (step.length - 1)) * 100 + '%';

    if (state === 1) {
        prevBtn.disabled = true;
    } else if (state === step.length) {
        nextBtn.disabled = true;
    }else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

}