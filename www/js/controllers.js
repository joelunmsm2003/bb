// Initialize the Firebase SDK
  var config = {
    apiKey: 'AIzaSyBqle5HGppkx1RsDbs_WAQD_5rFt9WbJcI',
    authDomain: 'vamo-peru.firebaseapp.com',
    databaseURL: 'https://vamo-peru.firebaseio.com',
    storageBucket: 'gs://vamo-peru.appspot.com'
  };
  firebase.initializeApp(config);





angular.module('app.controllers', ['ionic'])

.run(function($ionicPlatform,$location,$http) {
  $ionicPlatform.ready(function() {


 







    // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {


        data = JSON.stringify(jsonData)
       
        var todo ={

          'data':data
        }


      $http({

            url: host+'/guardanotificacion/',
            data: todo,
            method: 'POST'
            }).
            success(function(data) {

              alert(data)
              $location.url('notificaciondeservicio/'+data)


           })






   //$location.url('detallepeticion')

    


  };

  window.plugins.OneSignal
    .startInit("6d06ccb5-60c3-4a76-83d5-9363fbf6b40a")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();



    
  // Call syncHashedEmail anywhere in your app if you have the user's email.
  // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
  // window.plugins.OneSignal.syncHashedEmail(userEmail);
})
  
})
  
.controller('loginCtrl', ['$scope', '$stateParams','$http','$localStorage','$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$localStorage,$location) {


    if($localStorage.token){

      $location.url('home')


    }


     function urlBase64Decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }

    function getUserFromToken() {
        var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(urlBase64Decode(encoded));
        }
        return user;
    }

    $scope.logeandose=0



    

    $scope.ola ='sjsjs'

    $scope.ingresar = function(data){

               $http({

            url: host+'/api-token-auth/',
            data: data,
            method: 'POST'
            }).
            success(function(data) {

            console.log(data)
            
            $localStorage.token = data.token;

            var currentUser = getUserFromToken();

            if($localStorage.token){

                console.log('ingrese...')

                $location.url('home')

                $scope.logeandose=0

                $scope.errors=''



            }


           })
            .error(function(data){

              console.log(data.errors.__all__)

              $scope.errors = data.errors.__all__

              $scope.logeandose=0


            })

    }




}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('notificaciondeservicioCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {


  $http.get(host+"/detalledeservicio/"+$stateParams.servicio).success(function(response) {$scope.servicio=response[0]});



}])




.controller('detallepeticionCtrl', ['$scope', '$stateParams','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http) {


  console.log($stateParams.servicio)

  $http.get(host+"/servicio/"+$stateParams.servicio).success(function(response) {$scope.servicio=response});



}])

.controller('muestrasociaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   
.controller('detalleDelServicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    


}])
   
.controller('maquillajeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('piesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('confirmacionCtrl', ['$scope','$stateParams','$http','$location','$ionicPopover', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$stateParams,$http,$location) {


$scope.confirmacion = $stateParams

t = new Date(5*60*60*1000)

var x = new Date($scope.confirmacion.reserva.hora-t)

console.log('xxx',x)

$scope.dia =JSON.stringify($scope.confirmacion.reserva.dia).substring(1,11)

$scope.hora =JSON.stringify(x).substring(12,20)

var todo={

    'pedido':$stateParams.pedido,
    'reserva':$stateParams.reserva
}

$http({

  url: host+'/buscasocia/0',
  data: todo,
  method: 'POST'
  }).
  success(function(data) {

  console.log(data)
  


 })

$scope.adicionar = function(data){

  console.log('data...')
  $location.url('manos')


}



}])


.controller('sociaCtrl', ['$scope','$http','$filter',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$http,$filter) {


console.log('socia')


}])

   
.controller('homeCtrl', ['$scope', '$stateParams','$http','$ionicPopover','$filter','$ionicSlideBoxDelegate','$location','$ionicSideMenuDelegate','$localStorage',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$ionicPopover,$filter,$ionicSlideBoxDelegate,$location,$ionicSideMenuDelegate,$localStorage) {

$scope.salir=function(){

  console.log('hdhdh')

  delete $localStorage.token

  $location.path('/login');

}

  $scope.toggleLeft = function() {

    console.log('shhsh')
    $ionicSideMenuDelegate.toggleLeft();
  };

$scope.servicios = $stateParams.servicio



$scope.pedidos=$filter('filter')($scope.servicios,{"check" : true})


console.log('pedidos',$scope.pedidos)


$scope.host = host

///Slider


$scope.options = {
  loop: true,
  effect: 'fade',
  speed: 1000
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.slider.activeIndex;
  $scope.previousIndex = data.slider.previousIndex;
});


// fin Slider


$http.get(host+"/portadaphoto/").success(function(response) {$scope.portadaphoto=response});
    
$http.get(host+"/categoria/").success(function(response) {$scope.categoria=response});

$http.get(host+"/distrito/").success(function(response) {$scope.distrito=response});

$http.get(host+"/subcategoria/1").success(function(response) {$scope.manos=response


if($stateParams.categoria=='manos'){

  $scope.servicios = $scope.manos

}



});

$http.get(host+"/subcategoria/2").success(function(response) {$scope.pies=response

if($stateParams.categoria=='pies'){

  $scope.servicios = $scope.pies

}

});

$http.get(host+"/subcategoria/3").success(function(response) {$scope.maquillaje=response

if($stateParams.categoria=='maquillaje'){

  $scope.servicios = $scope.maquillaje

}

});

$http.get(host+"/subcategoria/4").success(function(response) {$scope.podologia=response

if($stateParams.categoria=='podologia'){

  $scope.servicios = $scope.podologia

}

});


$http.get(host+"/subcategoria/5").success(function(response) {$scope.masajes=response

if($stateParams.categoria=='masajes'){

  $scope.servicios = $scope.masajes

}

});







$scope.descripcion = false

$scope.check=false

$scope.book = 0

$scope.precio =0

$scope.totalpedido =[]

$scope.selec=function(data){

    console.log('hdhdh',data)

    $scope.totalpedido.push(data)

    data.check=true

    $scope.book=$scope.book+1

    $scope.precio =$scope.precio +data.precio

    console.log('selec..',$scope.totalpedido)
}

$scope.deselec=function(data,index){



  for (var i =0; i < $scope.totalpedido.length; i++){

    if($scope.totalpedido[i].nombre === $filter('filter')($scope.totalpedido,{"nombre" : data.nombre})[0].nombre){

       $scope.totalpedido.splice(i,1);
       break;
    }

  }



    data.check=false

    $scope.book=$scope.book-1

    $scope.precio =$scope.precio -data.precio

    console.log($scope.totalpedido)
}



       



}])
   
.controller('introCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('formularioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

   
    console.log('$stateParams',$stateParams)

    $scope.servicio = $stateParams.servicio


}])
   
   
.controller('resultadosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    
    $scope.datas =[
        {
            id:'1'
        },
        {
            id:'2'
        },
        {
            id:'3'
        },
        {
            id:'4'
        }
        ]

}])
   
.controller('reservarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('detalleDeLaOpcionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

