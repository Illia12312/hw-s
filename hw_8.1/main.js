const bigBox = document.querySelector('div.big-box');
counter = true;
const ourArr = document.getElementsByClassName('box');
const winnerArr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const button = document.querySelector('.button');
const popup = document.querySelector('.popup');
const popupCloser = document.querySelector('.popup-close');
const popupTitle = document.querySelector('.popup-title');
const popupButton = document.querySelector('.popup-button');


var arrCounter = 0;

bigBox.onclick = function(event){
    if(counter === true){
        event.target.innerHTML = 'x',
        counter = false;
    }
    else{
        event.target.innerHTML = 'o',
        counter = true;
    };
    arrCounter++;
    if (arrCounter == 9){
        popup.style.display = 'block';
        popupTitle.innerHTML = 'draw';
        counter = true;
    }; 
    for(let i of winnerArr){
        if(ourArr[i[0]].innerHTML == 'x' && ourArr[i[1]].innerHTML == 'x' && ourArr[i[2]].innerHTML == 'x'){
            popup.style.display = 'block';
            popupTitle.innerHTML = 'x - winner';
            counter = true;
        }
        else if (ourArr[i[0]].innerHTML == 'o' && ourArr[i[1]].innerHTML == 'o' && ourArr[i[2]].innerHTML == 'o'){
            popup.style.display = 'block';
            popupTitle.innerHTML = 'o - winner';
        } 
    }; 
};

popupCloser.onclick = () => {
    popup.style.display = 'none';
}

popupButton.onclick = () => {
    for(let i of ourArr){
        i.innerHTML = '';
    }
    arrCounter = 0;
    popup.style.display = 'none';
}

button.onclick = function(){
    for(let i of ourArr){
        i.innerHTML = '';
    }
    arrCounter = 0;
};