(function() {
	'use strict';
	angular.module('espAPP.controllers')
		.controller('homeController', [
			'$scope', '$state', 'ngService', 
			function($scope, $state, ngService) {
				
				ngService.searchRecordsData("*").then(function(data){
					$scope.records = data;
				    console.log($scope.records);
				});

				$scope.title = "Welcome";
				
				$scope.search = function(){
					var queryChar = $scope.keywords;
					if (!queryChar) {
						queryChar = "\*";
					};
					ngService.searchRecordsData(queryChar).then(function(data){					
					$scope.records = data;
					});	
				};
								
				$scope.deleteRecord = function(ESindexID,$index){
					ngService.deleteRecordData(ESindexID);
					var x=document.getElementById("homeTbody");
					x.remove($index);
				};

				$scope.modifyRecord = function(id){
					$state.go("about", {ID: id});
				};
			}
		]);
}());