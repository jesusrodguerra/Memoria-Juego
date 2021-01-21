window.onload = () => {

    // creamos el arreglo de las cartas
    const cardsArray = [
        {
            name: 'cebolla',
            img: 'imagenes/cebolla.png'
        },
        {
            name: 'cebolla',
            img: 'imagenes/cebolla.png'
        },
        {
            name: 'maiz',
            img: 'imagenes/maiz.png'
        },
        {
            name: 'maiz',
            img: 'imagenes/maiz.png'
        },
        {
            name: 'manzana',
            img: 'imagenes/manzana.png'
        },
        {
            name: 'manzana',
            img: 'imagenes/manzana.png'
        },
        {
            name: 'papa',
            img: 'imagenes/papa.png'
        },
        {
            name: 'papa',
            img: 'imagenes/papa.png'
        },
        {
            name: 'repollo',
            img: 'imagenes/repollo.png'
        },
        {
            name: 'repollo',
            img: 'imagenes/repollo.png'
        },
        {
            name: 'tomate',
            img: 'imagenes/tomate.png'
        },
        {
            name: 'tomate',
            img: 'imagenes/tomate.png'
        }
    ];
    
    const mostrarResultado = document.querySelector('#resultado');
    const board = document.querySelector('.contenedor-cartas');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = []

    cardsArray.sort(() => 0.5 - Math.random())

    function createBoard() {
        for(let i = 0; i < cardsArray.length ; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'imagenes/cardMemoria.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            card.classList.add('cursor');

            board.appendChild(card);
        }
    }

    createBoard();

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]) {
            alert('No eres tan tara como creia');
            cards[optionOneId].setAttribute('src', 'imagenes/blank.png')
            cards[optionTwoId].setAttribute('src', 'imagenes/blank.png')
            cardsWon.push(cardsChosen);
        } else {
            alert('Que tara eres, intentalo de nuevo')
            cards[optionOneId].setAttribute('src', 'imagenes/cardMemoria.png')
            cards[optionTwoId].setAttribute('src', 'imagenes/cardMemoria.png')
        }
        
        cardsChosen = [];
        cardsChosenId = [];
        mostrarResultado.textContent = cardsWon.length;

        if(cardsWon.length === cardsArray.length / 2) {
            mostrarResultado.textContent = 'Al fin, lo lograste';
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        console.log(cardId)
        console.log(cardsChosenId)
        console.log(cardsChosen)

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200)
        }
    }
}