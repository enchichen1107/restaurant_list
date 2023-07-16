//init setting
const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

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
  if (!email || !password || !confirmPassword) {
    errors.push({ message: 'Email 與 密碼 是必填。' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '密碼與確認密碼不相符！' })
  }
  // check whether registered
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.push({ message: '此 Email 已經註冊過了。' })
      }

      if (errors.length) {
        return res.render('register', {
          errors,
          name,
          email,
          password,
          confirmPassword
        })
      } else {
        return bcrypt
          .genSalt(10)
          .then(salt => bcrypt.hash(password, salt))
          .then(hash => User.create({
            name,
            email,
            password: hash
          }))
          .then(() => req.flash('success_msg', '已成功註冊，請重新登入。'))
          .then(() => res.redirect('/users/login'))
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})

//show logout
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '已成功登出。')
  res.redirect('/users/login')
})

module.exports = router