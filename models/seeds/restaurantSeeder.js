const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json')

db.once('open', () => {
  restaurantList.results.forEach(store => {
    Restaurant.create({
      name: `${store.name}`,
      category: `${store.category}`,
      image: `${store.image}`,
      location: `${store.location}`,
      phone: `${store.phone}`,
      google_map: `${store.google_map}`,
      rating: `${store.rating}`,
      description: `${store.description}`
    })
  })
  console.log('seeder!')
})
