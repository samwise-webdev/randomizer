const bgColorBtn = document.querySelector('#bgBtn');
const bgStyleBtn = document.querySelector('#styleBtn');

bgColorBtn.addEventListener('click', function() {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
})


function btnStyle() {

}

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}