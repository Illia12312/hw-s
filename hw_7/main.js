//first
let span = document.querySelector('.TodoText');
let button = document.querySelector('button');
let check = document.querySelector('.DoneCheckbox');
let alertStr = prompt('Добавить желание')
span.innerHTML = alertStr;
button.onclick = function(){
    span.innerHTML = '';
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