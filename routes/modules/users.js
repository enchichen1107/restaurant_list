//init setting
const express = require('express')
const router = express.Router()

//show login page
router.get('/login', (req, res) => {
  res.render('login')
})

//show register page
router.get('/register', (req, res) => {
  res.render('register')
})
module.exports = router