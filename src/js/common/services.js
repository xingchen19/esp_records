(function() {
    'use strict';
    angular.module('espAPP.services')
    .service(
        "ngService",
        function($http, $q, ngConstants) {

            var getRecordsAPI = {

                getData: function(queryChar) {

                    console.log(queryChar);

                    var queryBody = {
                        "query": {
                            "query_string" : {
                                "fields" : ["id", "name.*", "family"],
                                "query" : queryChar,
                                "use_dis_max" : true
                            }
                        }
                    };

                    var request = $http({
                        method: "get",
                        data: angular.toJson(queryBody),
                        url: ngConstants().ESURL + "/esp-record-*/_search"
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
                        data: {"id":"10002","name":"NAME-002","family":"景天科"},
                        url: ngConstants().ESURL + "/esp-record-201710/esp/esp-11001"
                    });
                    return (request.then(postRecordAPI.handleSuccess, postRecordAPI.handleError));
                },
                handleError: function(response){
                    return ($q.reject(response.data.message));
                },
                handleSuccess: function(response){
                    return (response.data);
                }
            };

            var putRecordAPI = {
                putData: function() {
                    var request = $http({
                        method: "put",
                        data: {"id":"11001","name":"NAME-11001","family":"Modified"},
                        url: ngConstants().ESURL + "/esp-record-201710/esp/esp-11001"
                    });
                    return (request.then(putRecordAPI.handleSuccess, putRecordAPI.handleError));
                },
                handleError: function(response){
                    return ($q.reject(response.data.message));
                },
                handleSuccess: function(response){
                    return(response.data)
                }
            };

            // Return public API.
            return ({
                getRecordsData: getRecordsAPI.getData,
                postRecordData: postRecordAPI.postData,
                putRecordData: putRecordAPI.putData
            });

        }
    );
}());