(function() {
    'use strict';
    angular.module('espAPP.services')
    .service(
        "ngService",
        function($http, $q) {

            var API = {

                getData: function() {

                    var request = $http({
                        method: "get",
                        dataType: 'JSON     P',
                        url: "http://localhost:9200/esp-record-201710/_search"
                    });
                    return (request.then(API.handleSuccess, API.handleError));
                },
                handleError: function(response) {
                    return ($q.reject(response.data.message));
                },
                handleSuccess: function(response) {
                    return (response.data.hits.hits);
                }

            };
            // Return public API.
            return ({
                getData: API.getData
            });

        }
    );
}());