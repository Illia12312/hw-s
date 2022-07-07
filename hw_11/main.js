let button = document.querySelector('button');
let input = document.querySelector('input');
const url = 'https://api.github.com/users';
const buttonpop = document.querySelector('.button');
const popup = document.querySelector('.popup');
const popupCloser = document.querySelector('.popup-close');
const popupTitle = document.querySelector('.popup-title');
const popupImg = document.querySelector('.popupImg');
const score = document.querySelector('.popScore');
console.log(score);
const gitFunc = async () =>{
    try {
        const {value} = input;
        const txt = value.split(" ").join("");
        if(txt.length<=3){
            throw new Error('Недостаточно букв');
        }

        let ourUrl = new URL(`${url}/${txt}`)
        const res = await fetch(ourUrl);
        if (!res.ok){
            throw new Error('Неверный адрес');
        }

        const data = await res.json();
        console.log(data);
        popup.style.display = 'block'
        popupImg.setAttribute('src', data.avatar_url);
        popupTitle.innerHTML = data.login;
        score.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        popupCloser.onclick = () => {
            popup.style.display = 'none';
        }

    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', gitFunc);