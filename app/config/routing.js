angular
	  	.module("synechronModule").config(function($routeProvider){
	  		$routeProvider
	  		.when("/",{
	  			controller : "homeController",
	  			templateUrl : "app/views/homeview.html"
	  		})
	  		.when("/heros",{
	  			controller : "synechronController",
	  			templateUrl : "app/views/herosview.html"
	  		})
	  		.when("/movies/:id",{
	  			controller : "moviesController",
	  			templateUrl : "app/views/moviesview.html"
	  		})
	  		.when("/batman",{
	  			controller : "batController",
	  			templateUrl : "app/views/heroview.html"
	  		})
	  		.when("/ironman",{
	  			controller : "ironController",
	  			templateUrl : "app/views/heroview.html"
	  		})
	  		.when("/spiderman",{
	  			controller : "spiderController",
	  			templateUrl : "app/views//heroview.html"
	  		})
	  	});