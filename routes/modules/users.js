//init setting
const express = require('express')
const router = express.Router()
const User = require('../../models/user')

//show login page
router.get('/login', (req, res) => {
  res.render('login')
})

//show register page
router.get('/register', (req, res) => {
  res.render('register')
})

//register new user
router.post('/register', (req, res) => {
  // get register form params
  const { name, email, password, confirmPassword } = req.body
  // check whether user is registered
  User.findOne({ email }).then(user => {
    // if registered back to login page
    if (user) {
      console.log('User already exists.')
      res.render('register', {
        name,
        email,
        password,
        confirmPassword
      })
    } else {
      // if haven't registered, create user
      return User.create({
        name,
        email,
        password
      })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
  })
    .catch(err => console.log(err))
})
module.exports = router