/*Таймер обратного отсчета*/
let time = 1800;
const countdownEl = document.querySelector('.countdown');

setInterval(countdown,1000);

function countdown (){
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}