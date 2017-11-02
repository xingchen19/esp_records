(function() {
	'use strict';
	angular.module('espAPP.constants')
		.constant('ngConstants',
			function() {
				var constants = {};
				constants.VERSION = '0.0.1';
				constants.ESURL = "http://9.111.252.120:9200"
				return constants;
			});
}());
