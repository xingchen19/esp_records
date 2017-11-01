(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('moreController', [
			'$scope',
			function($scope) {
				$scope.title = "Dependencies";
			}
		]);
}());