;(function () {
  'use strict'
  angular.module('myFactory', [])
    .factory('restaurantsFactory', restaurantsFactory)

  restaurantsFactory.$inject = ['$http']

  function restaurantsFactory ($http) {
    var restaurantData = {},
        apiUrl = 'http://localhost:8080/api/v1/restaurants'

    restaurantData.getAll = function () {
      console.log('getting all restaurants')
      return $http.get(apiUrl)
    }

    restaurantData.create = function (restaurant) {
      console.log('2 - client: Calling the http verb \'post\', and as a result is crossing the divide over to the server side. More specifically, it is looking at where I defined the api_routes, and where this specific route is pointing within the restaurants_controller!')
      var result = $http.post(apiUrl, restaurant)
      console.log('5 - client: running inside the factory.js file')
      return result
    }

    restaurantData.getSingle = function(id){
      console.log('getting single restaurant data:',id)
      return $http.get(apiUrl + '/' + id)
    }

    restaurantData.destroy = function(id){
      console.log('2 - client: Calling the http verb \'delete\', and as a result is crossing the divide over to the server side. More specifically, it is looking at where I defined the api_routes, and where this specific route is pointing within the restaurants_controller!')
      var result = $http.delete(apiUrl + '/' + id)
      console.log('5 - client: running inside the factory.js file')
      return result
    }

    restaurantData.update = function(id, restaurant){
      console.log('2 - client: Calling the http verb \'put\', and as a result is crossing the divide over to the server side. More specifically, it is looking at where I defined the api_routes, and where this specific route is pointing within the restaurants_controller!')
      var result = $http.put(apiUrl + '/' + id, restaurant)
      console.log('6 - recieving the response from the res.send in the restaurants_controller');
      return result
    }
    return restaurantData
  }
}())
