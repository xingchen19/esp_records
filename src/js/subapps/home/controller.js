(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('homeController', [
			'$scope', 'ngService', 
			function($scope, ngService) {
				$scope.title = "Welcome";
					$scope.search = function(){
						console.log($scope.keywords);
						ngService.getRecordsData($scope.keywords).then(function(data) {					
						$scope.records = data;
					});	
				};
				ngService.getRecordsData("*").then(function(data) {					
					$scope.records = data;
				});				
			}
		]);
}());