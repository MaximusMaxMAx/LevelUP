/*Валидатор*/
const form = document.getElementById('form');

form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault();


    let error = formValidate(form);
}

function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (index=0; index < formReq.length; index++){
        const input = formReq[index];
        removeClassError(input);

        if(input.classList.contains('_tel')){
            if(telTest(input)){
                addClassError(input);
                error++;
            }
        }

        if(input.value === ''){
            addClassError(input);
            error++;
            
        }

    }
}

function addClassError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function removeClassError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function telTest(input){
    return !/\d{10}/.test(input.value);
}