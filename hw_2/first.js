// первое
let veget = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(veget.join('|'));


// второе
let name_s = 'Вася;Петя;Вова;Олег';
const newArr = name_s.split(';');
console.log(newArr);


// третье
function hello2(name_2='гость'){
    console.log('Привет', name_2);
}
hello2('Vlad');
hello2();


// четвертое
const arr_1 = ['яблоко', 'ананас', 'груша'];
const arr_2 = arr_1.map(function(item, i, arr){
    return item.toUpperCase();  
});
console.log(arr_2);


//пятое
function addOneForAll(...i){
    return i.map(x=> x+1);
};
const val = addOneForAll(1, 2, 3, 4);
console.log(val); 


//шестое
var summa = 0;
function getSum(...args){
    args.map(i=> summa += i);
    return summa;
}
const val_1 = getSum(1, 2, 3, 4);
console.log(val_1); 


//седьмое
var arr_7 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = arr_7.filter(el => typeof(el) == typeof(1))
console.log(numberArray);


//восьмое
function arrayTesting(...items){
    if (items.some(i => i == true)){
        console.log('Нашли true значение');
    }
    else{
        console.log('Ничего нет');
    }
};
const haveTrueValue = arrayTesting(0, false, null, 1); 
const dontHaveTrueValue = arrayTesting(0, false, null, 0);