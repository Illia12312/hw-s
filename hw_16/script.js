import {DOM} from '/DOM.js';
// 1:35 lection
class Circle extends DOM{
    constructor(mainDocument, width, height){
        super(mainDocument);
        this.width = width;
        this.height = height;
    }
    spawnCircle(color){
        let mainCircle = this.mainDocument.createElement('div');
        mainCircle.id = 'documentCircle';
        let body = this.mainDocument.body;
        mainCircle.style.width = this.width;
        mainCircle.style.height = this.height;
        mainCircle.style.backgroundColor = color;
        mainCircle.style.borderRadius = '50%';
        body.append(mainCircle);
    }
    setClickAction(){
        documentCircle.addEventListener('click', function(e){
            let i = 0;
            let timer = setInterval(function() {
                if (i>100){
                    clearInterval(timer);
                    console.log('vse');
                }else{
                    console.log(i);
                    i+=1;
                    documentCircle.style.marginLeft = `${i}px`;
                } 
              }, 5);
        });
    }
}

const circle = new Circle(document, '100px', '100px');
circle.spawnCircle('red');
circle.setClickAction();