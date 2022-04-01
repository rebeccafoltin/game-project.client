'use strict'

const store = require('./store.js')
const config = require('grunt')

const onSignUp = function (data) {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
        data
    })
}

const onSignIn = function(data) {
    return $.ajax({
        method: 'POST',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
        data
    })
}

const onSignOut = function () {
    return $.ajax({
        method: 'DELETE',
        url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
        headers: {
          Authorization: 'Bearer ' + store.user.token
    }
})
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut
  }