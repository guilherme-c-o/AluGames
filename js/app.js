let jogosAlugados = 0;

function imprimirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id){
    let item = document.getElementById(`game-${id}`);
    let imgDiv = item.querySelector('.dashboard__item__img');
    let button = item.querySelector('.dashboard__item__button');


    if (imgDiv.classList.contains('dashboard__item__img--rented')){

        let confirma = window.confirm('Você tem certeza que deseja devolver o jogo?');
        if (!confirma){
            return;
        }

        imgDiv.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.innerHTML = 'Alugar';
        jogosAlugados--;
    } else {
        imgDiv.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.innerHTML = 'Devolver';
        jogosAlugados++;
    }
    imprimirJogosAlugados();
}

document.addEventListener('DOMComentLoaded', function(){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    imprimirJogosAlugados();
})
