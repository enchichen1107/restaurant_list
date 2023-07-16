//init setting
const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')

//show login page
router.get('/login', (req, res) => {
  res.render('login')
})

//post login info
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

//show register page
router.get('/register', (req, res) => {
  res.render('register')
})

//register new user
router.post('/register', (req, res) => {
  // get register form params
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (!name || !email || !password || !confirmPassword) {
    errors.push({ message: '所有欄位都是必填。' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '密碼與確認密碼不相符！' })
  }
  if (errors.length) {
    return res.render('register', {
      errors,
      name,
      email,
      password,
      confirmPassword
    })
  }
  // check whether user is registered
  User.findOne({ email }).then(user => {
    // if registered back to login page
    if (user) {
      errors.push({ message: '這個 Email 已經註冊過了。' })
      //console.log('User already exists.')
      res.render('register', {
        errors,
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
        .then(() => req.flash('success_msg', '你已成功註冊，請重新登入。'))
        .then(() => res.redirect('/users/login'))
        .catch(err => console.log(err))
    }
  })
    .catch(err => console.log(err))
})

//show logout
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已經成功登出。')
  res.redirect('/users/login')
})

module.exports = router