var
  apiRouter = require('express').Router(),// setting the apiRouter variable to express.Router()
  ctrl      = require('./controllers/restaurants_controller') // requiring the restaurants_controller and setting it to the variable ctrl

  apiRouter.route('/restaurants')
    .get(ctrl.restaurantController.getAll)
    .post(ctrl.restaurantController.create)

   apiRouter.route('/restaurants/:id')
  //http://localhost:3000/api/v1/restaurants/valueHere
    .get(ctrl.restaurantController.getSingle)
    .put(ctrl.restaurantController.update)
    .delete(ctrl.restaurantController.destroy)


module.exports  = apiRouter
