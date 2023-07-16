const mongoose = require('mongoose')
// connect to mongoDB
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
// get db connection status
const db = mongoose.connection
// connection error
db.on('error', () => {
  console.log('mongodb error!')
})
// connection success
db.once('open', () => {
  console.log('mongodb connected!')
})
module.exports = db
