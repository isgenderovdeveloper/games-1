var gameData = ['r', 'p', 's']
var player1Score = 0;
var player2Score = 0;
var player1img = document.querySelector('#Player1RCP')
var player2img = document.querySelector('#Player2RCP')
var player1Scores = document.querySelector('#Player1Score')
var player2Scores = document.querySelector('#Player2Score')
var player1 = document.querySelector('.play1 .h1');
var player2 = document.querySelector('.play2 .h1');

function randomCompAttack(arr) {
    var randomnum = Math.floor(Math.random() * gameData.length);
    return arr[randomnum]
}



function startGame(e) {
    var userAttack = e.key.toLowerCase();
    var computerAttack = randomCompAttack(gameData);
    console.log(userAttack);
    console.log(computerAttack);

    player1img.src = `img/${userAttack}.png`
    player2img.src = `img/${computerAttack}.png`

    if (userAttack == computerAttack) {
        console.log('----------');
        console.log('Draw');
        console.log('-------------')
        player1.classList.remove('text-success')
        player2.classList.remove('text-success')
        player1.classList.remove('text-danger')
        player2.classList.remove('text-danger')
        player1.innerHTML = 'Draw'
        player2.innerHTML = 'Draw'

    } else if (userAttack == 'r' && computerAttack == 's') {
        console.log('-------------')
        console.log('Player 1 win')
        console.log('-------------')
        player1Score++
        player1Scores.innerHTML = `Score:${player1Score}`

        player1.innerHTML = 'WIN'
        player2.innerHTML = 'LOSE'
        player1.classList.add('text-success')
        player2.classList.remove('text-success')
        player1.classList.remove('text-danger')
        player2.classList.add('text-danger')


    } else if (userAttack == 'p' && computerAttack == 'r') {
        console.log('-------------')
        console.log('Player 1 win')
        console.log('-------------')
        player1Score++
        player1Scores.innerHTML = `Score:${player1Score}`
        player1.innerHTML = 'WIN'
        player2.innerHTML = 'LOSE'

        player1.classList.add('text-success')
        player2.classList.remove('text-success')
        player1.classList.remove('text-danger')
        player2.classList.add('text-danger')
    } else if (userAttack == 's' && computerAttack == 'p') {
        console.log('-------------')
        console.log('Player 1 win')
        console.log('-------------')
        player1Score++
        player1Scores.innerHTML = `Score:${player1Score}`

        player1.innerHTML = 'WIN'
        player2.innerHTML = 'LOSE'
        player1.classList.add('text-success')
        player2.classList.remove('text-success')
        player1.classList.remove('text-danger')
        player2.classList.add('text-danger')

    } else {
        console.log('-------------')
        console.log('Player 2 win')
        console.log('-------------')
        player2Score++
        player2Scores.innerHTML = `Score:${player2Score}`
        player1.innerHTML = 'LOSE'
        player2.innerHTML = 'WIN'
        player1.classList.remove('text-success')
        player2.classList.add('text-success')
        player1.classList.add('text-danger')
        player2.classList.remove('text-danger')

    }

    if (gameData.indexOf(userAttack) === -1) {
        alert('Please choose "p r s" keys')
        return
    }


}

window.onkeypress = startGame