

function alterarStatus(id){
    let item = document.getElementById(`game-${id}`);
    let imgDiv = item.querySelector('.dashboard__item__img');
    let button = item.querySelector('.dashboard__item__button');


    if (imgDiv.classList.contains('dashboard__item__img--rented')){
        imgDiv.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.innerHTML = 'Alugar';
    } else {
        imgDiv.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.innerHTML = 'Devolver';
    }
}