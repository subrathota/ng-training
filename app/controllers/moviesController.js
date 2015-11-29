angular
	  	.module("synechronModule")
	  	.controller("moviesController", function($scope, $routeParams){
	  		$scope.heroid = $routeParams.id;
	  		$scope.moviesList = [];
	  		
	  		var getMovies = function(val){
	  			// for( hero in $scope.heros ){
	  			for(var i = 0; i < $scope.heros.length ; i++){
	  				if($scope.heros[i].id == val){
	  					$scope.moviesList = $scope.heros[i].movieslist;
	  				}
	  			}
	  		};

	  		$scope.heros = [ { "city" : "Gothem",
					    "id" : 1,
					    "movies" : 3,
					    "movieslist" : [ { "poster" : "images/bat1_tn.jpg",
					          "sl" : 1,
					          "title" : "Batman Begins"
					        },
					        { "poster" : "images/bat2_tn.jpg",
					          "sl" : 2,
					          "title" : "Dark Knight"
					        },
					        { "poster" : "images/bat3_tn.jpg",
					          "sl" : 3,
					          "title" : "Dark Knight Raises"
					        }
					      ],
					    "photo" : "images/batman.jpg",
					    "power" : 8,
					    "title" : "Batman"
					  },
					  { "city" : "Metropolis",
					    "id" : 2,
					    "movies" : 3,
					    "movieslist" : [ { "poster" : "images/super1_tn.jpg",
					          "sl" : 1,
					          "title" : "Superman The Movie"
					        },
					        { "poster" : "images/super2_tn.jpg",
					          "sl" : 2,
					          "title" : "Superman Returns"
					        },
					        { "poster" : "images/super3_tn.jpg",
					          "sl" : 3,
					          "title" : "Superman Man of Steel"
					        }
					      ],
					    "photo" : "images/superman.jpg",
					    "power" : 8,
					    "title" : "Superman"
					  },
					  { "city" : "New York",
					    "id" : 3,
					    "movies" : 3,
					    "movieslist" : [ { "poster" : "images/iron1_tn.jpg",
					          "sl" : 1,
					          "title" : "Ironman"
					        },
					        { "poster" : "images/iron2_tn.jpg",
					          "sl" : 2,
					          "title" : "Ironman 2"
					        },
					        { "poster" : "images/iron3_tn.jpg",
					          "sl" : 3,
					          "title" : "Ironman 3"
					        }
					      ],
					    "photo" : "images/ironman.jpg",
					    "power" : 3,
					    "title" : "Ironman"
					  },
					  { "city" : "Bhangala",
					    "id" : 4,
					    "movies" : 1,
					    "movieslist" : [ { "poster" : "images/phantom1_tn.jpg",
					          "sl" : 1,
					          "title" : "The Phantom Slam Evil"
					        } ],
					    "photo" : "images/phantom.jpg",
					    "power" : 6,
					    "title" : "Phantom"
					  },
					  { "city" : "New York",
					    "id" : 5,
					    "movies" : 3,
					    "movieslist" : [ { "poster" : "images/spider1_tn.jpg",
					          "sl" : 1,
					          "title" : "Spiderman"
					        },
					        { "poster" : "images/spider2_tn.jpg",
					          "sl" : 2,
					          "title" : "Spiderman 2"
					        },
					        { "poster" : "images/spider3_tn.jpg",
					          "sl" : 3,
					          "title" : "Spiderman 3"
					        }
					      ],
					    "photo" : "images/spiderman.jpg",
					    "power" : 8,
					    "title" : "Spiderman"
					  }
					];
					
			getMovies($scope.heroid);
			
			$scope.prop = 'title';
			$scope.rev = false;
			$scope.fil = '';
			$scope.sortMe = function(field){
				$scope.prop = field;
				$scope.rev = !$scope.rev;
			}
	  	});