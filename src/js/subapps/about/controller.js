(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('aboutController', [
			'$scope', '$state', '$stateParams', 'ngService', 'ngConstants',
			function($scope, $state, $stateParams, ngService, ngConstants) {
				$scope.title = "ESP Record Operations";
				$scope.version = ngConstants().VERSION;

				$scope.receivedID = $stateParams.ID;

				ngService.getRecordData($scope.receivedID).then(function(data){
					$scope.getRecord = data;
					$scope.indexRecord = function(){
						console.log("$scope.getRecord is");
						console.log($scope.getRecord);
						ngService.indexRecordData($scope.getRecord);
						$state.go("home");
					};
				});
				let indexBody = {"id":"10005","name":"Name-5"};
			}
		]);
}());