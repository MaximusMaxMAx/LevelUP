/*Подсказки*/
const inputName = document.getElementById('formName');
const inputTel = document.getElementById('formTel');

inputName.addEventListener('focus',helpName);
inputName.addEventListener('focusout',helpName);

inputTel.addEventListener('focus',helpTel);
inputTel.addEventListener('focusout',helpTel);


function helpName(){
    const helpNameEL = document.querySelector('.form__name__help');
    helpNameEL.classList.toggle('_hidden');
}

function helpTel(){
    const helpNameEL = document.querySelector('.form__tel__help');
    helpNameEL.classList.toggle('_hidden');
}