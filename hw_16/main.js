import {DOM} from '/DOM.js';

class Circle extends DOM{
    constructor(mainDocument, width, height){
        super(mainDocument);
        this.width = width;
        this.height = height;
        let mainCircle;
    }
    spawnCircle(color){
        this.mainCircle = this.mainDocument.createElement('div');
        this.mainCircle.classList.add('documentCircle');
        let body = this.mainDocument.body;
        this.mainCircle.style.width = this.width;
        this.mainCircle.style.height = this.height;
        this.mainCircle.style.backgroundColor = color;
        this.mainCircle.style.borderRadius = '50%';
        this.mainCircle.style.marginBottom = '50px';
        body.append(this.mainCircle);
    }
    setClickAction(){
        let ourCircle = this.mainCircle;
        ourCircle.addEventListener('click', function(e){
            let i = 0;
            let timer = setInterval(function() {
                if (i>100){
                    clearInterval(timer);
                    console.log('vse');
                }else{
                    console.log(i);
                    i+=1;
                    ourCircle.style.marginLeft = `${i}px`; 
                } 
              }, 5);
        });
    }
}

const redDircle = new Circle(document, '100px', '100px');
redDircle.spawnCircle('red');
redDircle.setClickAction();

const blackDircle = new Circle(document, '100px', '100px');
blackDircle.spawnCircle('black');
blackDircle.setClickAction();

const greenDircle = new Circle(document, '100px', '100px');
greenDircle.spawnCircle('green');
greenDircle.setClickAction();