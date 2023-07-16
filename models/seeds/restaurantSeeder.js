// init setting
const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require('../../restaurant.json')
const seedUsers = require('./user.json')
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// add seed data
db.once('open', () => {
  Promise.all(
    seedUsers.map(seedUser => {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(seedUser.password, salt))
        .then(hash => {
          return User.create({
            name: seedUser.name,
            email: seedUser.email,
            password: hash
          })
            .catch(err => console.log(err))
        })
        .then(user => {
          const userRestaurants = seedUser.userRestaurants.map(item => {
            return Object.assign(restaurantList[item - 1], { userId: user._id })
          })
          return userRestaurants
        })

        .then(userRestaurants => {
          return Restaurant.create(userRestaurants)
            .catch(err => console.log(err))
        })
    })
  )
    .then(() => {
      console.log('done.')
      process.exit()
    })
})