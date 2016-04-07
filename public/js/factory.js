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
      console.log('2 - client: running inside the factory.js file', restaurant)
      var result = $http.post(apiUrl, restaurant)
      console.log('5 - client: running inside the factory.js file')
      return result
    }

    restaurantData.getSingle = function(id){
      console.log('getting single restaurant data:',id)
      return $http.get(apiUrl + '/' + id)
    }

    restaurantData.destroy = function(id){
      console.log('2 - client: running inside the factory.js file')
      var result = $http.delete(apiUrl + '/' + id)
      console.log('5 - client: running inside the factory.js file')
      return result
    }

    restaurantData.update = function(id, restaurant){
      console.log('Updated restaurant data: ', id)
      return $http.put(apiUrl + '/' + id, restaurant)
    }
    return restaurantData
  }
}())
