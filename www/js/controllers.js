// Initialize the Firebase SDK
  var config = {
    apiKey: 'AIzaSyBqle5HGppkx1RsDbs_WAQD_5rFt9WbJcI',
    authDomain: 'vamo-peru.firebaseapp.com',
    databaseURL: 'https://vamo-peru.firebaseio.com',
    storageBucket: 'gs://vamo-peru.appspot.com'
  };
  firebase.initializeApp(config);



function onNotification(e) {
  switch(e.event){
    case 'registered':
      if (e.regid.length > 0){
        ref.child("users/" + btoa("martinpeveri@gmail.com")).update({gcm_id: e.regid});
      }
      break;
  }
}


angular.module('app.controllers', ['ionic'])

.constant('SENDER_ID', '36813805845')
  
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.ola ='sjsjs'




}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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
   
.controller('manosCtrl', ['$scope', '$stateParams','$ionicPopover', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {





}])
   
.controller('homeCtrl', ['$scope', '$stateParams','$http','$ionicPopover',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,$ionicPopover) {
    
$http.get(host+"/categoria/").success(function(response) {$scope.categoria=response});

$http.get(host+"/distrito/").success(function(response) {$scope.distrito=response});

$http.get(host+"/subcategoria/1").success(function(response) {$scope.manos=response

$scope.servicios = $scope.manos

});

$http.get(host+"/subcategoria/2").success(function(response) {$scope.pies=response});

$http.get(host+"/subcategoria/3").success(function(response) {$scope.maquillaje=response});

$http.get(host+"/subcategoria/4").success(function(response) {$scope.podologia=response});

$scope.descripcion = false

$scope.check=false

$scope.book = 0

$scope.selec=function(data){

    console.log('hdhdh',data)

    data.check=true

    $scope.book=$scope.book+1
}

$scope.deselec=function(data){

    console.log('hdhdh',data)

    data.check=false

    $scope.book=$scope.book-1
}


///GCM

       
        $scope.register = function(){
           try {
             var pushNotification = window.plugins.pushNotification;
             pushNotification.register(successHandler, errorHandler, {"senderID": SENDER_ID, "ecb":"onNotification"});
          } catch (e){
             console.log(e);
          }
        }


         $scope.send = function(){

                    //Cargo el mensaje
                      var msg = {
                          'message': "Yaeeeee",
                          'title': "MyApp",
                          'vibrate': 1,
                          'sound': 1,
                      };
             
                      var data = {
                          'registration_ids': 1,
                          'data': msg
                      };
             
                      //Envio las notificaciones
                      $http({
                        url: 'http://localhost/gcm.php',
                        method: 'jsonp',
                        params: {data: data}
                      })
                      .then(function(response) {
                         console.log(response);
                      });



            }
 
        /**
        * @name successHandler
        * @desc Success register notification push
        */
        function successHandler (result) {
          console.log(result);
        }
 
        /**
        * @name errorHandler
        * @desc Error register notification push
        */
        function errorHandler (error) {
          console.log(error);
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
 