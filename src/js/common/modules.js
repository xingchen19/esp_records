(function() {
	'use strict';
	angular.module('espAPP.directives', []);
	angular.module('espAPP.services', []);
	angular.module('espAPP.filters', []);
	angular.module('espAPP.constants', []);
	angular.module('espAPP.controllers', ['espAPP.filters', 'espAPP.services', 'espAPP.directives', 'espAPP.constants']);
}());