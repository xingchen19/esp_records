(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('homeController', [
			'$scope',
			function($scope) {
				$scope.title = "Welcome";
			}
		]);
}());