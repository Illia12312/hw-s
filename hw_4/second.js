// first
function bindFunc(func1, ctx, ...args){
    return function(){
        func1.apply(ctx, args);
    };
};

function professionFunc(a, b){
    console.log(this.profession, a**b);
}

const applyFunc = bindFunc(professionFunc, {profession: "developer"}, 4, 2)

applyFunc();


//second
Object.prototype.func = function() {
    let sum = 0, arrVal = Object.values(this);
    arrVal.forEach(function(item, i, arr){
        sum+=item;
    });
    console.log(`Сумма элементов: ${sum}`);
}

const objectA = {
    a: 1,
    b: 20,
    c: 3,
}

objectA.func();


// third
function getNewArray() {
    if (this.values){
        return this.values.filter(el => el % 2 == 0 && el > 2 && el < 10);
    }
    else{
        console.log("Не найдено");
    }
};

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

const result_3 = getNewArray.call(valObject0);
console.log(result_3)


//fourth
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const getCity = function(){
    let intoArr = [];
    for (const [key, value] of Object.entries(this)) {
        intoArr += `${key} - это ${value} `;}
    console.log(intoArr);
};

const ret = getCity.call(citiesAndCountries);


//fifth
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturady', 'Sunday'],
};

function getNameOfDay(lang, datNumber){
    if(lang == 'ru'){
        console.log(namesOfDays.ru[datNumber-1]);
    }
    else if(lang == 'en'){
        console.log(namesOfDays.ru[datNumber-1]);
    };
};

getNameOfDay('en', 7);
getNameOfDay('ru', 3);

//sixth
const person = {
    name: 'Vlad'
};

const person1 = {
    age: 1
};

function setProto (currentObj, protoObj) {
    currentObj.__proto__ = protoObj;
}

setProto(person1, person);
console.log(person1);


//seventh седьмое вообще не понял
function Person(setName, getName, setAge, getAge) {
    this.setName = setName;
    this.getName = setName;
    this.setAge = setAge;
    this.getAge = setAge;
    ageValidation = function (){
            if(this.setAge<18){
                this.setAge = 'Error'
            };
        };
};

const user = new Person('Vova', 25);
console.log(user);
