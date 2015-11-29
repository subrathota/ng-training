angular
	  	.module("synechronModule")
	  	.controller("batController", function($scope){
	  		$scope.title = 'Batman';
	  		$scope.photo ='images/batman.jpg';
			$scope.price = 123.45678;
			$scope.releaseDate = '2015-11-28';
			$scope.city = 'Gothem';
	  	});