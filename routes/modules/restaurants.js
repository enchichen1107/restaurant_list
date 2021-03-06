// init setting
const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// search restaurants
router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  return Restaurant.find({ $or: [{ name: { $regex: keyword, $options: 'i' } }, { category: { $regex: keyword, $options: 'i' } }] })
    .lean()
    .then(restaurants => {
      res.render('index', { restaurants, keyword })
    })
    .catch(error => console.log(error))
})

// create new restaurant- show new page
router.get('/new', (req, res) => {
  return res.render('new')
})

// create new restaurant- post data
router.post('/', (req, res) => {
  return Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// show restaurant details
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// edit restaurant- show edit page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// edit restaurant- post data
router.put('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant = Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// delete restaurant
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// sort restaurants
router.post('/sort', (req, res) => {
  const sortMethod = req.body.sort
  return Restaurant.find()
    .lean()
    .sort(sortMethod)
    .then(restaurants => {
      res.render('index', { restaurants, sortMethod })
    })
    .catch(error => console.log(error))
})

module.exports = router
