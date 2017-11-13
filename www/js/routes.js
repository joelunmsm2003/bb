angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

    .state('login', {
      url: '/page1',
      templateUrl: 'templates/login.html',
      controller:'loginCtrl'
    })
        .state('menu', {
      url: '/side-menu21',
      templateUrl: 'templates/menu.html'
    })
        .state('detalleDelServicio', {
      url: '/detalleservicio',
      templateUrl: 'templates/detalleDelServicio.html'
    })
        .state('maquillaje', {
      url: '/maquillaje',
      templateUrl: 'templates/maquillaje.html',
      controller:'homeCtrl'
    })
        .state('pies', {
      url: '/pies',
      templateUrl: 'templates/pies.html',
      controller:'homeCtrl'
    })
        .state('manos', {
      url: '/manos',
      templateUrl: 'templates/manos.html',
      controller:'homeCtrl'
    })
        .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller:'homeCtrl'

    })
        .state('intro', {
      url: '/page9',
      templateUrl: 'templates/intro.html'
    })
        .state('resultados', {
      url: '/resultados',
      templateUrl: 'templates/resultados.html'
    })
        .state('reservar', {
      url: '/page22',
      templateUrl: 'templates/reservar.html'
    })
        .state('detalleDeLaOpcion', {
      url: '/page13',
      templateUrl: 'templates/detalleDeLaOpcion.html'
    })
        .state('inicio', {
      url: '/page30',
      templateUrl: 'templates/inicio.html'
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

  host='http://192.168.1.42:8000'

});