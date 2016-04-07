;
(function() {
  'use strict'
  angular.module('myControllers', [])
    .controller('clientRestController', clientRestController)

  clientRestController.$inject = ['restaurantsFactory']

  function clientRestController(restaurantsFactory) {
    var restCtrl = this
    restCtrl.newRestaurant = {}

    restaurantsFactory.getAll()
      .then(function(response) {
        console.log('Array of restaurants from api', response.data)
        restCtrl.restaurants = response.data

      })

    restCtrl.addRestaurant = function(restaurant) {
      console.log('1 - Client: ng-click for adding a restaurant: running inside the controller.js file')
      restaurantsFactory.create(restaurant)
        .then(function(res) {
          console.log('6 - client: running inside the controller.js file --- end communication between client and server', res)
        })
    }

    restCtrl.showRestaurantDetail = function(id) {
      restaurantsFactory.getSingle(id)
        .then(function(res) {
          console.log("grabbed single record", res)
        })
    }

    restCtrl.deleteDetail = function(id) {
      console.log('1 - Client: ng-click for deleting a restaurant: running inside the controller.js file')
      restaurantsFactory.destroy(id)
        .then(function(res) {
          console.log("Deleted Restaurant")
        })
      restaurantsFactory.getAll()
        .then(function(response) {
          console.log('6 - client: running inside the controller.js file --- end communication between client and server')
          restCtrl.restaurants = response.data
        })
    }

    restCtrl.updateDetail = function(restaurant) {
      console.log(restaurant)
      restaurantsFactory.update(restaurant._id,restaurant)
        .then(function(res) {
          console.log("Updated Restaurant", res)
        })
    }

    restCtrl.initModals = function() {
      $('.modal-trigger').leanModal() // Initialize the modals
    }
    restCtrl.setCurrentR = function(restaurant) {
      restCtrl.currentR = restaurant// Initialize the modals
    }

    // restCtrl.editDetail = function(id){
    //   restaurantsFactory.edit(id)
    //     .then(function (res) {
    //       console.log("Updated Restaurant",res)
    //     })
    //     restaurantsFactory.getAll()
    //       .then(function (response) {
    //         console.log('Array of restaurants from api', response.data)
    //         restCtrl.restaurants = response.data
    //       })
    // }

  }


}())
