// creating all my variables
var express   = require('express'),
  app         = express(),
  bodyParser  = require('body-parser'),
  logger      = require('morgan'),
  cors        = require('cors'),
  path        = require('path'),
  port        = process.env.PORT || 8080,
  apiRoutes   = require('./api_routes'),
  mongoose    = require('mongoose'),
  databaseURL = "mongodb://localhost:27017/testUsers"

// Connecting to the mongoose database
  mongoose.connect(databaseURL, function(err){
    if(err) console.log(err)
    console.log("connected to THE MONGODS")
  })
// Setting up all the middleware.
app.use(logger('dev')) // <-- logger variable used to log issues to the terminal
app.use(bodyParser.json()) // <-- bodyParser variable used to read through and make json format readable
app.use(bodyParser.urlencoded({extended: true})) // <-- bodyParser variable used to turn the gobbledeegook urls into coherant words
app.use(cors()) // <-- IDK for sure?
app.use('/api/v1', apiRoutes)
app.use(express.static(path.join(__dirname, './public')))

// http://localhost:3000/api/v1/cars
app.listen(port, function (err) {
  if(err)  console.log(err) // if there is in error connecting to the port, than it will log the error
  console.log('Server running on port: ' + port) // if there is no error, we will get this response
})
