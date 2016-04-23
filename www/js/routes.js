angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController.inicio', {
    url: '/inicio',
    views: {
      'tab1': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('tabsController.porque', {
    url: "/porque",
    views: {
      'tab1': {
        templateUrl: "templates/porque.html",
        controller: 'porqueCtrl'
      }
    }
  })

  .state('tabsController.como', {
    url: "/como",
    views: {
      'tab1': {
        templateUrl: "templates/como.html",
        controller: 'comoCtrl'
      }
    }
  })

  .state('tabsController.donde', {
    url: "/donde",
    views: {
      'tab1': {
        templateUrl: "templates/donde.html",
        controller: 'dondeCtrl'
      }
    }
  })

  .state('tabsController.donde1', {
    url: "/donde1",
    views: {
      'tab1': {
        templateUrl: "templates/donde1.html",
        controller: 'donde1Ctrl'
      }
    }
  })

  .state('tabsController.vos', {
    url: '/vos',
    views: {
      'tab2': {
        templateUrl: 'templates/vos.html',
        controller: 'vosCtrl'
      }
    }
  })

  .state('tabsController.nosotros', {
    url: '/nosotros',
    views: {
      'tab3': {
        templateUrl: 'templates/nosotros.html',
        controller: 'nosotrosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/inicio')

  

});