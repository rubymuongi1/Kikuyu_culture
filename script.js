const buttons = document.querySelectorAll('.btn');
const qaBoxes = document.querySelectorAll('.qa-box');

buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        qaBoxes[i].classList.toggle('active');
    })
})