(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('aboutController', [
			'$scope', 'ngConstants',
			function($scope, ngConstants) {
				$scope.title = "About";
				$scope.version = ngConstants().VERSION;
				$scope.markdown = "># Input Your Markdown content here:\n[Click here to view examples](https://www.zybuluo.com/mdeditor)  Or \n[This link](http://www.unexpected-vortices.com/sw/rippledoc/quick-markdown-example.html)";
			}
		]);
}())