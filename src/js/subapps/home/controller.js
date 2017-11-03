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
						ngService.searchRecordsData(queryChar).then(function(data) {					
						$scope.records = data;
					});	
				};
				
				ngService.searchRecordsData("*").then(function(data){
					$scope.records = data;
				    console.log($scope.records);
				});
			}
		]);
}());