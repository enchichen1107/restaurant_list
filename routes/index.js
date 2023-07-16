// init Express and Express router
const express = require('express')
const router = express.Router()

// init router modules
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')  // 掛載 middleware

// use router
router.use('/restaurants', authenticator, restaurants)
router.use('/users', users)
router.use('/', authenticator, home)

// export router
module.exports = router
