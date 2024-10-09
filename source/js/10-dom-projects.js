function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'ПОДПИСАТЬСЯ') {
        buttonElement.innerText = 'ПОДПИСАН';
        buttonElement.classList.add('is-subscribed');
    }
    else {
        buttonElement.innerText = 'ПОДПИСАТЬСЯ';
        buttonElement.classList.remove('is-subscribed');
    }
}

function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    if ((cost > 0) && (cost < 40)) {
        cost = cost + 10;
        document.querySelector('.js-total-cost').innerText = `Общая сумма с доставкой: $${cost}`
    } else {
        if (cost >= 40) { document.querySelector('.js-total-cost').innerText = `Общая сумма с доставкой: $${cost}` }
            else { document.querySelector('.js-total-cost').innerText = `Неверный ввод. Повторите.`;}  
    }
}
//function handleCostKeydown() { if (event.key === 'Enter') { calculateTotal() } }