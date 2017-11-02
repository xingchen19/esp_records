(function() {
    'use strict';
    angular.module('espAPP.services')
    .service(
        "ngService",
        function($http, $q, ngConstants) {

            var getRecordsAPI = {

                getData: function() {

                    var request = $http({
                        method: "get",
                        dataType: "JSON",
                        url: ngConstants().ESURL + "/esp-record-201710/_search"
                    });
                    return (request.then(getRecordsAPI.handleSuccess, getRecordsAPI.handleError));
                },
                handleError: function(response) {
                    return ($q.reject(response.data.message));
                },
                handleSuccess: function(response) {
                    return (response.data.hits.hits);
                }
            };

            var postRecordAPI = {
                postData: function() {
                    var request = $http({
                        method: "post",
                        dataType: "JOSN",
                        data: {"id":"10002","name":"NAME-002","family":"景天科"},
                        url: ngConstants().ESURL + "/esp-record-201710/esp/"
                    });
                    return (request.then(postRecordAPI.handleSuccess, postRecordAPI.handleError));
                },
                handleError: function(response){
                    return ($q.reject(response.data.message));
                },
                handleSuccess: function(response){
                    return (response);
                }
            };

            // Return public API.
            return ({
                getRecordsData: getRecordsAPI.getData,
                postRecordData: postRecordAPI.postData
            });

        }
    );
}());