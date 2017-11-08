(function() {
	'use strict';
	angular.module('espAPP.constants')
		.constant('ngConstants',
			function() {
				var constants = {};
				constants.VERSION = '0.0.1';
				constants.ESHOST = "localhost:9200";
				constants.JSONTEMP = {
					"name": "",
					"picture":"",
					"description":""
				};
				return constants;
			});
}());
