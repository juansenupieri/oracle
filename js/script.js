//----------------Get Elements by ID--------------------
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let boton = document.getElementById('enviar')
let cerrar = document.getElementById('cerrar')
let view_1 = document.getElementById('view-1')
let view_2 = document.getElementById('view-2')
let cards_box = document.getElementById('cards')

//----------------GLOBAL VARIABLES--------------------
var usuarios = new Array()
var partidas = new Array()
var partida 

var cards = new Array (
    {
        name: 'Fuego',
        age: 22
    },{
        name: 'Aire',
        age: 25
    },{
        name: 'Metal',
        age: 25
    },{
        name: 'Madera',
        age: 25
    },{
        name: 'Tierra',
        age: 25
    },{
        name: 'Agua',
        age: 25
    },{
        name: 'Arena',
        age: 25
    },{
        name: 'Sol',
        age: 25
    },{
        name: 'Luna',
        age: 25
    },{
        name: 'Oscuridad',
        age: 25
    }
)

//----------------GLOBAL FUNCTIONS--------------------
function User ( nombre, apellido ){
    this.name = nombre,
    this.lastName = apellido
}

function Partida (player1,player2,n1,n2,n3,n4,n5,n6, match){
    this.player1 = player1,
    this.player2 = player2, 
    this.card1 = n1,
    this.card2 = n2,
    this.card3 = n3,
    this.card4 = n4,
    this.card5 = n5,
    this.card6 = n6,
    this.match = match
}

function random() {
    return (Math.floor(Math.random( ) * (9 - 0) ) )
}

function findNumbers (){
    let numbers = [] 
    while( numbers.length<6){
       let number = random()
       if(!numbers.includes(number)){
        numbers.push(number)
        }
    }
    return numbers
}

function matchearon(unArray){
    let player1 = ( unArray[0]+unArray[1]+unArray[2] )%2
    let player2 = (unArray[3]+unArray[4]+unArray[5])%2
    if(player1==player2){return 'Matchearon!'}else{
        return 'No Matchearon :('
    }
}

function Match(player1,player2){
    let matchNum = findNumbers()
    let newMatch = new Partida(player1,player2,matchNum[0],
        matchNum[1],matchNum[2],matchNum[3],matchNum[4],
        matchNum[5],matchearon(matchNum))
    //partidas.push(newMatch)
    return newMatch
}

function showCards(unArray) {
    let i=0

    if(i==0){
        
        let title = `<h5>CARD ${(i+1)}/3 de ${unArray.player1}</h5>`
        let card_name = `<h5>${cards[i].name}</h5>` ;
        let desc = `<p>Some representative placeholder content for the first slide.</p>`
        let card = `<img src="images/cards/${unArray.card1}.png" class="center">`
        let contenedor = document.createElement('div')
        contenedor.id = 'delete'
        contenedor.className = 'carousel-item active'
        contenedor.innerHTML +=title
        contenedor.innerHTML +=card
        contenedor.innerHTML +=card_name
        contenedor.innerHTML +=desc
        cards_box.appendChild(contenedor)

        i++
    }

    while(i<3){
        let carta = unArray['card'+(i+1)]
        let title = `<h5>CARD ${(i+1)}/3 de ${unArray.player1}</h5>`
        let card_name = `<h5>${cards[i].name}</h5>` ;
        let desc = `<p>Some representative placeholder content for the first slide.</p>`
        let card = `<img src="images/cards/${carta}.png" class="center">`
        let contenedor = document.createElement('div')
        contenedor.id = 'delete'
        contenedor.className = 'carousel-item'
        contenedor.innerHTML +=title
        contenedor.innerHTML +=card
        contenedor.innerHTML +=card_name
        contenedor.innerHTML +=desc
        cards_box.appendChild(contenedor)

        i++
    }
    
    while(i<6){
        let carta = unArray['card'+(i+1)]
        let title = `<h5>CARD ${(i-2)}/3 de ${unArray.player2}</h5>`
        let card_name = `<h5>${cards[i].name}</h5>` ;
        let desc = `<p>Some representative placeholder content for the first slide.</p>`
        let card = `<img src="images/cards/${carta}.png" class="center">`
        let contenedor = document.createElement('div')
        contenedor.id = 'delete'
        contenedor.className = 'carousel-item'
        contenedor.innerHTML +=title
        contenedor.innerHTML +=card
        contenedor.innerHTML +=card_name
        contenedor.innerHTML +=desc
        cards_box.appendChild(contenedor)

        i++
    }
}


console.log(partidas)


//--------------------ACTIONS--------------------------

boton.addEventListener( 'click', () => {
    let user1 = player1.value
    let user2 = player2.value
    if( user1 != '' && user2 != '' ){
        partida = Match(user1,user2)
        showCards(partida)
        console.log(partida)
        view_1.className = 'hide'
        view_2.className = 'view-2'
        alert(partida.match)
    }else{ 
        alert( 'Por favor, ingresá un nombre para el Player 1 y el Player 2.')
    }
    player1.value = ''
    player2.value = ''

})

cerrar.addEventListener( 'click', () => {
    view_1.className = 'view-1'
    view_2.className = 'hide';

    for( let i=0; i<6; i++){
        document.getElementById('delete').remove() 
    }

})
