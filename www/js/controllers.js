angular.module('app.controllers', [])
  
.controller('inicioCtrl', function($scope, $state) {
	$scope.goToPorque = function() {
		$state.go('tabsController.porque');
	}

	$scope.goToComo = function() {
		$state.go('tabsController.como');
	}

	$scope.goToDonde = function() {
		$state.go('tabsController.donde');
	}
})
   
.controller('vosCtrl', function($scope) {

})
   
.controller('nosotrosCtrl', function($scope) {

})

.controller('porqueCtrl', function($scope, $ionicPopup) {
	var alertPopup = $ionicPopup.show({
	    template: '<p>Este mapa muestra el incremento de la temperatura durante los últimos 100 años Costa Rica</p><p>¡Deslice la barra del final de la pantalla!</p>',
	    buttons: [{ text: 'OK', type: 'button-balanced'}]
	});

	$scope.year = 1816;
	$scope.co2 = 10;
})

.controller('comoCtrl', function($scope, $ionicPopup) {
	var alertPopup = $ionicPopup.show({
	    template: '<p>Los árboles tienen la capacidad de contener dentro de sí mismos el CO<sub>2</sub></p><p>¿Qué pasa si aumentamos el numero de árboles?</p><p>¡Deslice la bara del final de la pantalla!</p>',
	    buttons: [{ text: 'OK', type: 'button-balanced'}]
	});
	/*var alertPopup = $ionicPopup.show({
	    template: '<p>El aumento de la temperatura está dada por varias causas humanas y naturales, entre esas la liberación de CO<sub>2</sub> a la atmósfera</p><p>Si plantamos árboles estos atraparán el C0<sub>2</sub> en su tronco</p><p>Además sembrar árboles en zonas aptas para reforestación regenera el hábitat de muchos animales y restaura corredores biólogicos</p>',
	    buttons: [{ text: 'OK', type: 'button-balanced'}]
	});*/
	$scope.trees = 0;
	$scope.co2 = 10;
})

.controller('dondeCtrl', function($scope, $timeout) {
	$scope.finishedLoading = false;
	$timeout(function() {
    	$scope.finishedLoading = true;
   	}, 2000);
})

.controller('donde1Ctrl', function($scope, $timeout) {
	
})
    