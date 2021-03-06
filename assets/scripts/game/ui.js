

'use strict'
const store = require('../store')

const newGameSuccess = (data) => {
    store.game = data.game
    $('.message').addClass('hidden')
    $('.main-nav').addClass('hidden')
    $('.game-board').removeClass('hidden')
}
   
const newGameFailure = (error) => {
    $('.message').removeClass('hidden')
    $('.message').text('Game failed. Try again')
}

const gamePushSuccess = (data) => {
    $('.save-message').removeClass('hidden')
    $('.save-message').text('Game saved!')
    console.log(store.game)
}

const gamePushFailure = (error) => {
    $('.save-message').removeClass('hidden')
    $('.save-message').text('Game save Failure!')
}

const statSuccess = (data) => {
    $('.message').removeClass('hidden')
    $('.message').text(`You have played ${data.games.length} games!`)
    console.log(data)
}

const statFailure = (error) => {
    $('.message').removeClass('hidden')
    $('.message').text('Failed. Try again')
}



const gameWin = () => {
 $('.game-board').addClass('hidden')
 $('.main-nav').removeClass('hidden')
 $('.message').removeClass('hidden')
}

module.exports = {
    newGameSuccess,
    newGameFailure,
    gamePushSuccess,
    gamePushFailure,
    statSuccess,
    statFailure,
    gameWin
}