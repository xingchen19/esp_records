(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('homeController', [
			'$scope', 'ngService', 
			function($scope, ngService) {
				$scope.title = "Welcome";
					$scope.search = function(){
						var queryChar = $scope.keywords;
						if (!queryChar) {
							queryChar = "\*";
						};
						ngService.getRecordsData(queryChar).then(function(data) {					
						$scope.records = data;
					});	
				};
				
				ngService.getRecordsData("*").then(function(data){
					$scope.records = data;
				    console.log($scope.records);
				});
			}
		]);
}());