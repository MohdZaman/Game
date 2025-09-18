let random = parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const result = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
let numGuess = 0
let p = document.createElement('p')
let prevGuess = []
let playGame = true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        displayMessage('Please Enter a valid number');
    }
    else if(guess<1){
        displayMessage('Please Enter a valid number');
    }
    else if(guess>100){
        displayMessage('Please Enter a valid number');
    }
    else{
        prevGuess.push(guess)
        // if(numGuess===10){
        //     displayGuess(guess)
        //     displayMessage(`Game Over. Number was ${random}`);
        //     endGame()
        // }
       // else{
            displayGuess(guess)
            if(numGuess<10){
                  checkGuess(guess)
            }
          
      //  }
    }
    }
    function checkGuess(guess){
        if(guess === random){
            displayMessage(`You Win`)
            endGame()

        }
        else if(guess<random){
            displayMessage(`Number is TOOO low`)
        }
        else if(guess>random){
            displayMessage(`Number is TOOO high`)
        }
    }
    function displayGuess(guess){
        userInput.value = ''
        guessSlot.innerHTML += `${guess}, `
        numGuess++
        result.innerHTML = `${10-numGuess} `
        if(numGuess===10){
            displayMessage(`Game Over. Number was ${random}`);
            endGame()
        }
    }
    function displayMessage(message){
        lowOrHi.innerHTML = `<h2>${message}</h2>`
    }
    function endGame(){
        userInput.value = ``
        userInput.setAttribute('disabled',true)
        p.classList.add('button')
        p.innerHTML = `<button id="newGame">Start New Game</button>`
        startOver.appendChild(p)
        playGame = false
        newgame()
    }
    function newgame(){
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('clicl',function(e){
            random = parseInt(Math.random()*100+1)
            prevGuess = []
            numGuess = 0
            guessSlot.innerHTML = ``
            result.innerHTML = `${10-numGuess}`
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            playGame = true
        })
    }
   
