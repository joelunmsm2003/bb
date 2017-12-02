angular.module('app.routes', ['ngStorage'])

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:'loginCtrl'
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

       .state('prueba', {
      url: '/prueba',
      templateUrl: 'templates/prueba.html',
      controller:'pruebaCtrl'
    })

        .state('pies', {
      url: '/pies',
      templateUrl: 'templates/pies.html',
      controller:'homeCtrl'
    })

         .state('muestrasocia', {
      url: '/muestrasocia',
      templateUrl: 'templates/muestrasocia.html',
      controller:'muestrasociaCtrl'
    })
          .state('detallepeticion', {
      url: '/detallepeticion/:servicio',
      templateUrl: 'templates/detallepeticion.html',
      controller:'detallepeticionCtrl'
    })
        .state('manos', {
      url: '/manos/:categoria',
      templateUrl: 'templates/manos.html',
      controller:'homeCtrl',
      params: {
        categoria: null
      }
    })


    //        .state('menucliente', {
    //   url: '/menucliente',
    //   templateUrl: 'templates/menucliente.html'
    // })

    //        .state('menucliente.manos', {
    //   url: '/manos',
    //   views: {
    //     'menucliente': {
    //       templateUrl: 'templates/manos.html',
    //       controller:'homeCtrl'
    //     }
    //   }
    // })



        .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller:'homeCtrl',
      params: {
        servicio: null
      }

    })
        .state('intro', {
      url: '/page9',
      templateUrl: 'templates/intro.html'
    })
         .state('confirmacion', {
      url: '/confirmacion',
      templateUrl: 'templates/confirmacion.html',
      controller:'confirmacionCtrl',
      params: {
        pedido: null,
        reserva:null
      }
    })
        .state('resultados', {
      url: '/resultados',
      templateUrl: 'templates/resultados.html'
    })
        .state('reservar', {
      url: '/reservar',
      templateUrl: 'templates/reservar.html',
      controller:'homeCtrl',
      params: {
        servicio: null
      }
    })
        .state('detalleDeLaOpcion', {
      url: '/page13',
      templateUrl: 'templates/detalleDeLaOpcion.html'
    })
 


    

        .state('menu', {
      url: '/menu',
      templateUrl: 'templates/menu.html'
    })

        .state('menu.socia', {
      url: '/socia',
      views: {
        'menu': {
          templateUrl: 'templates/socia.html',
          controller:'homeCtrl'
        }
      }
    })

            .state('menu.perfil', {
      url: '/perfil',
      views: {
        'menu': {
          templateUrl: 'templates/perfil.html',
          controller:'homeCtrl'
        }
      }
    })

                .state('formularioservicio', {
      url: '/formularioservicio',
      templateUrl: 'templates/formularioservicio.html',
      controller:'formularioCtrl',
      params: {
        servicio: null
      }
    })
    

    ;

    $urlRouterProvider.otherwise('/login');



  host='http://codigito.com:8000'



  //Django Auth JWT 

  $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript'; 

  $httpProvider.defaults.headers.post['Content-Type'] = 'multipart/form-data; charset=utf-8';



  $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
        return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        }]);



});