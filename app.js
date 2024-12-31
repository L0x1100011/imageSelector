function goForward() {
    if (btnForward.addEventListener("click", function() {
        if (count === imgCollection.length) {
            count = 0;
        }
        img.src = imgCollection[count]
        console.log(img.src)
        console.log('Forward')
        count++;
        console.log(count)
    }));
}

function goBackward() {
    if (btnBack.addEventListener('click', function() {
        if (countBackwards === -1) {
            countBackwards = imgCollection.length - 1;
        }
        img.src = imgCollection[countBackwards];
        console.log('Back')
        console.log(img.src)
        countBackwards--;
        console.log(countBackwards)
    }));
}

function reset() {
    if (btnReset.addEventListener('click', function() {
        img.src = imgCollection[0];
        console.log('Reset')
    }));
}

let imgCollection = [
    "/natureImg/img1.jpg",
    "/natureImg/img2.jpg",
    "/natureImg/img3.jpg",
    "/natureImg/img4.jpg",
    "/natureImg/img5.jpg",
    "/natureImg/img6.jpg",
    "/natureImg/img7.jpg"
];

const btnBack = document.querySelector("#back")
const btnReset = document.querySelector("#reset")
const btnForward = document.querySelector("#forward")
const img = document.querySelector('img')
let count = 1;
let countBackwards = imgCollection.length - 1;

goForward()
goBackward() 
reset()