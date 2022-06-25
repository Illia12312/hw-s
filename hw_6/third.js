// первое
const par = document.querySelector('p');
const img = document.querySelector('img');
img.style.display = 'none';
img.style.width = '100px';
img.style.height = '100px';
function clicker(event){
    img.style.display = 'inline-block',
    console.log('Image');
};

par.addEventListener('click', clicker);

function mousing(event){
    img.style.width = '200px';
    img.style.height = '200px';
    img.style.transition = `size 0.4 ease`;
    console.log('have changed');
}

img.addEventListener('mouseover', mousing);
img.addEventListener('mouseout', function(){
    img.style.width = '100px';
    img.style.height = '100px';
    console.log('become smaller');
});

img.addEventListener('click', function(){
    img.style.display = 'none';
    console.log('disabled');
});


//second
const arr_2 = [1, 2, 3, 0, 4, 5, 6];
let sum = 0;
for (let i = arr_2.length; i>0; i--){
    if (arr_2[i-1] == 0){
        break;
    }
    else{
        sum+= arr_2[i-1];
    };
};

console.log(sum);

// third
function count(arr){
    let i = 0;
    let sum_3 = 0;
    for(let item of arr){
        if(sum_3>10){
            console.log(`${i} нужно елементов`);
            break;
        }
        else{
            i++;
            sum_3+=item;
        }
    };
};

count(arr_2);


//fourth
const button_4 = document.querySelector("#button");
const input_4 = document.querySelector("input");

function submit(){
    console.log(input_4.value);
};

button_4.addEventListener('click', submit);


//fifth
var links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('mouseover', func_5);
    links[i].addEventListener('mouseout', function(event){links[i].removeEventListener('mouseover', func_5);});
};

function func_5() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
};


//sixth
const button = document.querySelector('button');
button.onclick = function(event){
    button.style.display = 'none';
}

//seventh
const input = document.getElementById('input');
const startBut = document.getElementById('buttonFour');
const circle = document.getElementById('circle');
input.onchange = function(){
    let ourStr = input.value;
    ourStr = Number(ourStr);
    if(ourStr != input.value){
        input.value = '';
        alert('Введите число')
    };
};

let start = Date.now(); 

let timer = setInterval(function() {
  let timePassed = Date.now() - start;
  if (timePassed >= 2000) {
    clearInterval(timer); 
    return;
  }

  draw(timePassed);

}, 20);



startBut.onclick = function(){
    if(Number(input.value) > 600){
        alert('ERROR, слишком большое число');
    }
    else if(Number(input.value) < 0){
        alert('ERROR, слишком маленькое число');
    }
    else{
        circle.style.left = Number(input.value) + 'px';
    };
};