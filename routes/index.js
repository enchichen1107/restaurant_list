// add Express and Express router
const express = require('express')
const router = express.Router()

// add router modules
// add home module
const home = require('./modules/home')

// if request url matches '/', direct to home module
router.use('/', home)

// add restaurants module
const restaurants = require('./modules/restaurants')

// if request url matches '/restaurants' , direct to restaurant module
router.use('/restaurants', restaurants)

// export router
module.exports = router
