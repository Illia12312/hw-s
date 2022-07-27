import {log} from '/logger.js';
//first
class ITCompany{
    create(type, name, age) {
        if(type === 'Программист'){
            return new Programmer(name, age);
        }
        if(type === 'Тестер'){
            return new Tester(name, age);
        }
        else{
            throw new Error('такого работника нет');
        }
    }
};

class Human{
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
    getType(){
        return 'человек'
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
};

class Programmer extends Human{
    constructor(name, age){
        const job = 'Programmer';
        super(name, age, job);
    };
    get getJob(){
        console.log(this.job);
    }
};

class Tester extends Human{
    constructor(name, age){
        const job = 'Tester';
        super(name, age, job);
    };
    get getJob(){
        console.log(this.job);
    }
};


const Company = new ITCompany();
const programmer = Company.create('Программист', 'Illia', '20');
log(programmer);
programmer.getJob;
log(programmer.getAge());
log(programmer.getName());


//second
const obj = {
    a: '1',
    b: '2',
    c: '3',
    e: '4',
    o: '5'
};

const letterArr = ['a', 'e', 'i', 'o', 'u', 'y'];

for(let i in obj){
    let trueOrFalse = false;
    for (let j = 0; j < letterArr.length; j++) {
        if (letterArr[j] == i) {
            trueOrFalse = true;
        }
    }
    if(trueOrFalse){
        Object.defineProperty(obj, i, {
            writable: false
        });
    };
};

// obj.a = 10;
log(obj);