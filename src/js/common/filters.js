(function() {
	'use strict';
	angular.module('espAPP.filters')
		.filter('makeUppercase', function() {
			return function(item) {
				return item.toUpperCase();
			};
		});
}());