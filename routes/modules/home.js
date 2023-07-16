// add Express and Express router
const express = require('express')
const router = express.Router()

// add Restaurant model
const Restaurant = require('../../models/restaurant')

// define home page router
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

// export router
module.exports = router
