'use strict'

const store = require('./store.js')
const config = require('grunt')

const onSignUp = function (data) {
    return $.ajax({
        method: 'POST',
        url: 'http://localhost:7165/sign-up',
        data
    })
}

const onSignIn = function(data) {
    return $.ajax({
        method: 'POST',
        url: 'http://localhost:7165/sign-in',
        data
    })
}

const onSignOut = function () {
    return $.ajax({
        method: 'DELETE',
        url: 'http://localhost:7165/sign-out',
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