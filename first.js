let my_name="Illia";
let type_of= typeof(my_name)==typeof('Illia')? console.log('Hello', my_name) : console.log('Ошибка, не тот тип данных');

console.log(typeof(123))//number
console.log(typeof('123'))//string
console.log(typeof(true))//Boolean
console.log(typeof(null))//object
let a;
let b = {
    c:12,
    d:'12345'
};
console.log(typeof(b))//object
console.log(typeof(a))//undefined
console.log(typeof(Symbol('fff')))//symbol
console.log(typeof(BigInt(23828238502850823)))//BigInt