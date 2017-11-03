(function() {
    'use strict';
    var myApp = angular.module('espAPP.services')
    myApp.service("client", 
        function(esFactory,ngConstants){
        return esFactory({
            host: ngConstants().ESHOST,
            log: 'trace'
        });
    });

    myApp.service(
        "ngService",
        function($http, $q, ngConstants, client) {

            function searchRecordsAPI(queryChar){
                var deferred = $q.defer();
                var queryBody = {
                    "query": {
                        "query_string" : {
                            "fields" : ["id","name","family","alias"],
                            "query" : queryChar,
                            "use_dis_max" : true
                        }
                    }
                };
                client.search({
                    index: "esp-record-*",
                    type: "esp",
                    body: queryBody
                }).then(function (response){
                    deferred.resolve(response.hits.hits);
                },function (err){
                    deferred.reject(err);
                });
                return deferred.promise;
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
                searchRecordsData: searchRecordsAPI,
                postRecordData: postRecordAPI.postData,
                putRecordData: putRecordAPI.putData
            });

        }
    );
}());