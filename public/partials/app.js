;(function () {
  'use strict'
  angular.module('myRestaurantApp', ['myControllers', 'ui.router','myFactory'])
    .config(routerConfig)
    .directive('repeatDone',repeatDone)

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']

  function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'clientRestController as restCtrl'
      })
      .state('newForm', {
        url: '/addRestaurant',
        templateUrl: 'partials/form.html',
        controller: 'clientRestController as restCtrl'
      })
      $urlRouterProvider.otherwise('/')
  }

  function repeatDone (){
    return function(scope, element, attrs) {
        if (scope.$last) { // all are rendered
            scope.$eval(attrs.repeatDone);
        }
    }
  }
}())
