//first 
let firstCookie = "My name";
let secondCookie  = "Illia";
let ageCookie = "my age";
let secAgeCookie = "18";
document.cookie = firstCookie + '=' + secondCookie;
document.cookie = ageCookie + '=' + secAgeCookie;
console.log(document.cookie);


//second
//функция с интернета для нахождения нужной куки
function readCookie(name) {

	var name_cook = name+"=";
	var spl = document.cookie.split(";");
	
	for(var i=0; i<spl.length; i++) {
	
		var c = spl[i];
		
		while(c.charAt(0) == " ") {
		
			c = c.substring(1, c.length);
			
		}
		
		if(c.indexOf(name_cook) == 0) {
			
			return c.substring(name_cook.length, c.length);
			
		}
		
	}
	
	return null;
	
}

const span = document.querySelector('span');
const input = document.querySelector('input');
var value = readCookie('toBirth');
if(value == null){
  alert('Your birth');
  input.onchange = function(){
  var x = new Date(input.value);
  document.cookie = `toBirth=18; expires=${x} 00:00:00 GMT+0300`;
  input.remove();
  span.style.display = 'none';
  let now = new Date;
  localStorage.setItem('Our Cookie', x.getTime());
  console.log(parseInt((x - now)/(60 * 60 * 24 * 1000 * 30)) +  '- месяцев', parseInt((x - now)/(60 * 60 * 24 * 1000)) + ' - дней', parseInt((x - now)/(60 * 60 * 1000))+ ' - часов', parseInt((x - now)/(60 * 1000 ))+ ' - минут', parseInt((x - now)/1000)+ ' - секунд');
}
}else{
	input.style.display = 'none';
	span.style.display = 'none';
	let now = new Date;
	let local = localStorage.getItem('Our Cookie');
  	alert('до твоего дня рождения ' + parseInt((local-now)/(60 * 60 * 24 * 1000 * 30)) +  ' - месяцев ' + parseInt((local-now)/(60 * 60 * 24 * 1000)) + ' - дней ' + parseInt((local-now)/(60 * 60 * 1000))+ ' - часов ' + parseInt((local-now)/(60 * 1000 ))+ ' - минут ' + parseInt((local-now)/1000) + ' - секунд');
};


//third 
let secondInput = document.getElementById('secondInput');
secondInput.value = localStorage.getItem('second item');
secondInput.onchange = function(){
  localStorage.setItem('second item', this.value);
  console.log(this.value);
};



//fourth 
let fourthArr = [1,2,3,4,5];
fourthArr.splice(5, 0, 'e');
fourthArr.splice(4, 0, 'c');
fourthArr.splice(1, 0, 'a', 'b');
console.log(fourthArr);