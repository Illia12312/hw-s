//first
let span = document.querySelector('.TodoText');
let button = document.querySelector('.button');
let check = document.querySelector('.DoneCheckbox');
let itemList = document.getElementById('listItem');
let ourList = document.getElementById('list');
let clicker = document.getElementById('clickerBut');
let alertStr = prompt('Добавить желание');
span.innerHTML = alertStr;
button.onclick = function(){
    itemList.remove();
};

clicker.onclick = function(event){
    console.log('New wish');
    let first = document.createElement('li');
    first.style.marginTop = '20px';
    let second = document.createElement('input');
    second.setAttribute('type', 'checkbox');
    let third = document.createElement('span');
    let alertStr = prompt('Добавить желание');
    third.innerText = alertStr;
    let forth = document.createElement('button');
    forth.innerText = 'Remove';
    forth.style.marginLeft = '10px';
    ourList.append(first);
    first.append(second, third, forth);
    forth.onclick = function(){
        first.remove();
    };
};


// second
function secondFunc(n){
    if (n === 1) return 1;
    return n + secondFunc(n-1);
}
console.log(secondFunc(3));

let n = prompt("Введите число");
n = Number(n);
let sum = 0;
for(let i = 0; i<=n; i++){
    sum+=i;
};
console.log(sum);


// third
function printNumbers(from, to){
    setInterval(() => {
        if(from<=to){
            console.log(from),
            from++;}
        else{
            clearInterval();
        }
    }, 1000);
};

function printNumbersTime(from, to){
    setTimeout(function sett(){
        if(from<=to){
            console.log(from),
            from++;}
        else{
            clearTimeout();
        }
        setTimeout(sett, 1000)
    }, 1000);
};

printNumbers(1, 10);
printNumbersTime(1, 10);


// fourth
var i_4 = 0;
let timerId = setInterval(() => {
        i_4++,
        console.log(`прошло ${i_4} секунды`);
        if(i_4 == 5){
            clearInterval(timerId);
        }
    }, 1000);