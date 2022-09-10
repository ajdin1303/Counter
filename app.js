// SELECTORS
let counter = document.querySelector('#counter');
let increaseBtn = document.querySelector('#increase-btn');
let decreaseBtn = document.querySelector('#decrease-btn');
let title = document.querySelector('#title');
//

let count = 0;


// EVENT LISTENERS
increaseBtn.addEventListener('click', () => {

    count++;
    counter.textContent = count;
    counterColor();
});

decreaseBtn.addEventListener('click', () => {

    count--;
    counter.textContent = count;
    counterColor();

});
//


// FUNCTIONS

const counterColor = () => {
    if (count < 0){
        counter.style.color = "red";
        title.style.color = "red";
        } else if (count === 0){
        counter.style.color = "white";
        title.style.color = "white";
    }else{
        counter.style.color = "aqua";
        title.style.color = "aqua";
    }
}
//

