/*Скрол*/
const button_1 = document.querySelector('.block-1__button');
const button_2 = document.querySelector('.block-2__button');
const button_3 = document.querySelector('.block-4__button');
button_1.addEventListener('click', scrollToOrder)
button_2.addEventListener('click', scrollToOrder)
button_3.addEventListener('click', scrollToOrder)

function scrollToOrder(){
    const order = document.querySelector('.block-5');
    order.scrollIntoView({
        block:'start',
        inline:"nearest",
        behavior: 'smooth',
    })
}
