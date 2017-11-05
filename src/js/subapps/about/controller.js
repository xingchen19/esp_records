(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('aboutController', [
			'$scope', 'ngConstants',
			function($scope, ngConstants) {
				$scope.title = "About";
				$scope.version = ngConstants().VERSION;
			}
		]);
}())