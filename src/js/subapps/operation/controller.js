(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('operationController', [
			'$scope', '$state', '$stateParams', 'ngService', 'ngConstants',
			function($scope, $state, $stateParams, ngService, ngConstants) {
				$scope.title = "ESP Record Operations";
				let receivedID = $stateParams.ID;

				if ($stateParams.ID !== "0") {
					console.log("Start to modifing record...");
					$scope.isModify = true;
					ngService.getRecordData(receivedID).then(function(data){
						$scope.getRecord = data;
					});
				} else {
					console.log("Start to adding record...")
					receivedID = "";
					$scope.isModify = false;
					$scope.getRecord = ngConstants().JSONTEMP;
				};

				$scope.indexRecord = function(){
					ngService.indexRecordData(receivedID,$scope.getRecord).then(function(data){
						console.log("JSON data will be indexed:")
						console.log($scope.getRecord);
						// $state.go("home", {}, {reload: true});
					});
				};

				$scope.addNewLine = function(){
					let newLineName = $scope.newLineName;
					$scope.getRecord[newLineName] = "";
				};
			}
		]);
}());