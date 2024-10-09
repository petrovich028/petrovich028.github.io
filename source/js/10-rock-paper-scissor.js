const score = {
    wins: 0,
    losses: 0,
    ties: 0
};
//---------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
function vibor() {
    if (resultman==='Камень') {resm='<img src="source/images/rock-emoji.png" class="icon-rez">';}
   
    if (resultman==='Бумага') {resm='<img src="source/images/paper-emoji.png" class="icon-rez">';}
    if (resultman==='Ножницы') {resm='<img src="source/images/scissors-emoji.png" class="icon-rez">';}
    if (resultcomp==='Камень') {resc='<img src="source/images/rock-emoji.png" class="icon-rez">';}
    if (resultcomp==='Бумага') {resc='<img src="source/images/paper-emoji.png" class="icon-rez">';}
    if (resultcomp==='Ножницы') {resc='<img src="source/images/scissors-emoji.png" class="icon-rez">';}
    document.querySelector('.vibor').innerHTML = `Вы выбрали ${resm}. Компьютер выбрал ${resc}. Результат:  ${result}`;
}

function funscore() { document.querySelector('.js-score').innerHTML = `Кол-выграшей - ${score.wins}. Кол-проиграшей - ${score.losses}.\nКо-во ничьейных результатов - ${score.ties}.`; }
//-----------------------------------------------------------------------------------------------------
console.log(localStorage.getItem(score));
h = JSON.parse(localStorage.getItem(score));

if (h != null) { score.wins = h.wins; score.losses = h.losses; score.ties = h.ties; };
console.log(score.wins, score.losses, score.ties);
let resultcomp = '', resultman = '';
//-------------------------------------------------------------
function playGame(resultman, resultcomp) {
    if ((resultman === 'Бумага' && resultcomp === 'Камень') || (resultman === 'Камень' && resultcomp === 'Ножницы') || (resultman === 'Ножницы' && resultcomp === 'Бумага')) { result = 'Вы победили.'; };
    if ((resultman === 'Бумага' && resultcomp === 'Ножницы') || (resultman === 'Камень' && resultcomp === 'Бумага') || (resultman === 'Ножницы' && resultcomp === 'Камень')) { result = 'Вы проиграли.'; };
    if ((resultman === 'Бумага' && resultcomp === 'Бумага') || (resultman === 'Камень' && resultcomp === 'Камень') || (resultman === 'Ножницы' && resultcomp === 'Ножницы')) { result = 'Ничья.'; };

}
//--------------------------------------------------------------------
function randomComputerMove() {
    randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 1 / 3) {
        resultcomp = 'Камень';
    }
    if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        resultcomp = 'Бумага';
    }
    if (randomNumber > 2 / 3 && randomNumber <= 1) {
        resultcomp = 'Ножницы';
    };
    return resultcomp;
}
//-----------------------------------------------------------------------
function pickComputerMove(resultman) {
    resultcomp = randomComputerMove();
    playGame(resultman, resultcomp);
    if (result === 'Вы победили.') {
        score.wins += 1;
    } else if (result === 'Вы проиграли.') { score.losses += 1; } else score.ties += 1;

    localStorage.setItem(score, JSON.stringify(score));
    vibor();
    t = funscore();
    return t;
}

document.querySelector('.js-score').innerHTML = `Кол-выграшей - ${score.wins}. Кол-проиграшей - ${score.losses}.\nКо-во ничьейных результатов - ${score.ties}.`  
