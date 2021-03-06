const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
    $('#sign-up-form').on('submit', authEvents.onSignup)
    $('#sign-in-form').on('submit', authEvents.onSignIn1)
    $('#sign-out-button').on('click', authEvents.onSignOut)
    $('#new-game').on('click', authEvents.onNewGame)
    $('#start-game').on('click', authEvents.onStartPlay)
  })
