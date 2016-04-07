var db = require('../models/restaurants')

module.exports = {
  restaurantController: {
    getAll: function(req, res) {
      db.Restaurant.find({}, function(err, restaurants) {
        if (err) {
          res.json(err)
        } else {
          res.json(restaurants)
        }
      })
    },
    getSingle: function(req, res) {
      var id = req.params.id
        // var restaurant = restaurants.filter(function(r) {
        //   return r._id == id
        // })
      db.Restaurant.findOne({
        _id: id
      }, function(err, rest) {
        if (err) {
          res.json(err)
        } else {
          console.log("Getting a single Restaurant");
          res.json(rest)
        }
      })
    },
    update: function(req, res) {
      console.log('this is req', req.body)
      var id = req.params.id
      db.Restaurant.findOne({_id: id}, function(err, rest) {
        console.log("this is rest", rest)
        if (req.body.name) {
          rest.name = req.body.name
        }
        if (req.body.address) {
          rest.address = req.body.address
        }
        if (req.body.rating) {
          rest.rating = req.body.rating
        }
        if (req.body.type) {
          rest.type = req.body.type
        }
        rest.save(function(err, r) {
          console.log(err)
          console.log(r)
          res.json(r)
        })
      })
    },
    create: function(req, res) {
      console.log('3 - serverSide: running inside the restaurants_controller.js file', req)
      var restaurant = new db.Restaurant(req.body)
      restaurant.save(function(err, rest) {
        if (err) res.json(err)
        console.log("4 - serverSide: running inside the restaurants_controller.js file --- Restaurant Created!!!", rest)
        res.json(rest)
      })
    },
    destroy: function(req, res) {
      console.log('3 - serverSide: running inside the restaurants_controller.js file')
      var id = req.params.id
      db.Restaurant.remove({_id: id}, function(err) {
        if (err) res.json(err)
        console.log("4 - serverSide: running inside the restaurants_controller.js file --- Restaurant Deleted!!!")
        res.json({
          message: "Deleted User!"
        })
      })

    }
  }
}
