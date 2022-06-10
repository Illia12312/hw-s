//первое 
const number = prompt("Введите число");
let sum = 0, numberOne = 0;
while(number >= numberOne){
    sum+=numberOne*numberOne;
    numberOne+=1;
};
console.log(`Число: ${sum}`);

//второе
let secondArr = [3, 5, 12, 9, 23, 93, 17];
let filtersecondArr = secondArr.filter(i => i>2 & i<20);
let filtersum=0;
for (let i of filtersecondArr){
    filtersum+=i;
}
console.log(filtersum);

//третье
const thirdArr = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let thirdSum=0;
for (let i of thirdArr){
    for (let a of i){
        if (typeof(a)=='number' & a%2 == 0){
            thirdSum+=a;
        };
    };
};
console.log(thirdSum);

//четвертое
let fourObj = {
    first : 123,
    second : '123',
    third : '567'
};
let fourFunction = (key, value, obj) => {
    obj[key]=value;
};
const method_1 = prompt("Введите свойство");
const method_2 = prompt("Введите значение свойства");
const result = fourFunction(method_1, method_2, fourObj);
console.log(fourObj, result);

//пятое
for (let i=1; i<=10; i++){
    if(i%3==0){
        console.log('FizBuz');
    }
    else if (i%2 == 0){
        console.log('Fiz');
    }
    else {
        console.log('Buz');
    }
}

//шестое
const numberTen = prompt("Input your number");
let factor = 1;
for(let i=1; i<=numberTen; i++){
    factor*=i;
}
console.log(factor);

//седьмое
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let sheetsFunc = function(sheets, sheetsPerWeek, weeks){
    let amount = weeks*(sheetsPerWeek/sheets);
    let i=0;
    do{
        i++;
    }while(i <= amount);
    console.log(`Нужно минимум ${i} пачек бумаги`);
}
sheetsFunc(sheetsInReamPaper, consumptionPerWeek, weeksAmount);