const bgColorBtn = document.querySelector('#bgBtn');
const h1 = document.querySelector('h1');
// const style1 = document.getElementById("#styleBtn").classList.add("btnStyle1");
// const style2 = document.getElementById("#styleBtn").classList.add("btnStyle2");
// const style3 = document.getElementById("#styleBtn").classList.add("btnStyle3");

bgColorBtn.addEventListener('click', function() {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
})


bgColorBtn.addEventListener('click', function () {
    //styleBtn.classList.remove('btnStyle1', 'btnStyle2', 'btnStyle3');
    // document.getElementById("styleBtn").classList.add("btnStyle1");
    // document.getElementById("styleBtn").classList.add("btnStyle2");
    // document.getElementById("styleBtn").classList.add("btnStyle3");
    // document.querySelector('#styleBtn').classList.add(randomizedStyle);
    const randomizedStyle = oneToThree();

        function oneToThree(){
            let num1to3 = Math.floor(Math.random() * 3 + 1);
            if (num1to3 === 1) {
                return 'btnStyle1';
            } else if (num1to3 === 2) {
                return 'btnStyle2';
            } else {
                return 'btnStyle3';    
            }
        }

        bgColorBtn.setAttribute('class', randomizedStyle);
})

// function randomizedStyle() {
//     //  let style1 = document.querySelector('.btnStyle1');
//     //  let style2 = document.querySelector('.btnStyle2');
//     //  let style3 = document.querySelector('.btnStyle3');
//     let styleNumber = oneToThree();
//     function oneToThree(){
//         let num1to3 = Math.floor(Math.random() * 3 + 1);
//         if (num1to3 === 1) {
//             return document.querySelector('.btnStyle1');
//          } else if (num1to3 === 2) {
//             return document.querySelector('.btnStyle2');
//          } else {
//             return document.querySelector('.btnStyle3');
//          }
//      }
//      return styleNumber;
// }
// const randomizedStyle = oneToThree();

// function oneToThree(){
//     let num1to3 = Math.floor(Math.random() * 3 + 1);
//     if (num1to3 === 1) {
//         return 'btnStyle1';
//      } else if (num1to3 === 2) {
//         return 'btnStyle2';
//      } else {
//         return 'btnStyle3';    
//      }
//  }

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    } 
    return `rgb(${r}, ${g}, ${b})`;
}