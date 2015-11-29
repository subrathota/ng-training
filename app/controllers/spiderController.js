angular
	  	.module("synechronModule")
	  	.controller("spiderController", function($scope){
	  		$scope.title = 'Spiderman';
	  		$scope.photo ='images/spiderman.jpg';
			$scope.price = 213.67458;
			$scope.releaseDate = '2015-11-30';
			$scope.city = 'New York';
	  	});