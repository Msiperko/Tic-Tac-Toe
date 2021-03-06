'use strict'

const store = require('../store')






/////////////////////////////////////////////
const success = function(){
    $('.message').removeClass('hidden')
    $('.message').text("Success")
    $('.fields').val('')
}

const failure = function(){
    $('.message').removeClass('hidden')
    $('.message').text('Sorry. Try Again')
    $('.fields').val('')
}
//////////////////////////////////////////////







const signUpSuccess = function(data){
    $('.sign-up').addClass('hidden')
    $('.log-in-link').removeClass('hidden')
    $('.main-nav').addClass('hidden')
    success()

}

const signUpFailure = function(error){
    $('.message').text('Sign up Failed!!!!')
    failure()
    console.log(error)
}

const signInSuccess = function(data){
    $('.sign-in-form').addClass('hidden')
    $('.main-nav').removeClass('hidden')
    $('.sign-up-link').addClass('hidden')
    store.user = data.user 
    success()
}

const signInFailure = function(error){
    console.log(error)
    failure()
}

const changePasswordSuccess = function(data){
    $('.message').text('Password change Successful!')
    $('.main-nav').removeClass('hidden')
    $('.change-password').addClass('hidden')
    success()
}

const changePasswordFailure = function(error){
    $('.message').text('Password change failed!')
    $('.message').addClass('failure')
    failure()
}

const signOutSuccess = function(data){
    $('.game-board').addClass('hidden')
    $('.main-nav').addClass('hidden')
    $('.sign-in-form').removeClass('hidden')
    $('.message').addClass('hidden')
}

const signOutFailure = function(error){
    $('.message').text('Sign Out change failed!')
    $('.message').addClass('failure')
}


module.exports = {
    signUpSuccess,
    signUpFailure,
    signInSuccess,
    signInFailure,
    changePasswordSuccess,
    changePasswordFailure,
    signOutSuccess,
    signOutFailure
}