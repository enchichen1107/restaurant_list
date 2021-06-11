// init setting
const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json')
// add seed data
db.once('open', () => {
  restaurantList.results.forEach(restaurant => {
    Restaurant.create(restaurant)
  })
  console.log('seeder added!')
})
