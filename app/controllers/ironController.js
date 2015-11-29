angular
	  	.module("synechronModule")
	  	.controller("ironController", function($scope){
	  		$scope.title = 'Ironman';
	  		$scope.photo ='images/ironman.jpg';
			$scope.price = 312.56478;
			$scope.releaseDate = '2015-11-29';
			$scope.city = 'New York';
	  	});