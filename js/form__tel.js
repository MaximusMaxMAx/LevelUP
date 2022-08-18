/*Телефонный инпут*/
const tel = document.getElementById('formTel');

tel.addEventListener('keyup',OnlyNumber);
tel.addEventListener('keypress',OnlyNumber);
function OnlyNumber(){
    tel.value = tel.value.replace(/\D/, '');
}