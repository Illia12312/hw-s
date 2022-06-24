//восьмое
const buttons = document.getElementsByTagName('button');

function logDataAttr(col){
    for (let i=0; i < col.length; i++){
        console.log(col[i].getAttribute('dataset'));
    };
}

logDataAttr(buttons);