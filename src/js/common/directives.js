(function() {
	'use strict';
	angular.module('espAPP.directives')
		.directive('githubUrl', function() {
			return {
				scope: true, // use a child scope that inherits from parent
				restrict: 'AE',
				replace: 'true',
				template: '<h3><a href = "https://github.com/xingchen19">My github</a></h3>'
			};
		});
}());