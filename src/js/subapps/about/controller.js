(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('aboutController', [
			'$scope', 'ngService', 'ngConstants',
			function($scope, ngService, ngConstants) {
				$scope.title = "About";
				$scope.version = ngConstants().VERSION;
				$scope.addRecord = ngService.postRecordData;
				ngService.getRecordsData().then(function(data) {
					console.log("get result is:");
					console.log(data);
					$scope.id = data[0]._source.id;
				});
			}
		]);
}());