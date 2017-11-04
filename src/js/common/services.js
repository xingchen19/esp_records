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
                let deferred = $q.defer();
                let queryBody = {
                    "query": {
                        "query_string" : {
                            "fields" : ["id","name","family","alias"],
                            "query" : queryChar,
                            "use_dis_max" : true
                        }
                    }
                };
                client.search({
                    index: "plant-records-*",
                    type: "esp",
                    body: queryBody
                }).then(function (response){
                    deferred.resolve(response.hits.hits);
                },function (err){
                    deferred.reject(err);
                });
                return deferred.promise;
            };

            function getRecordAPI(indexID){
                let deferred = $q.defer();
                client.get({
                    index: "plant-records-esp",
                    type: "esp",
                    id: indexID
                }).then(function(response){
                    deferred.resolve(response._source);
                }, function(err){
                    deferred.reject(err);
                });
                return deferred.promise;
            };

            function indexRecordAPI(bodyJSON){
                client.index({
                    index: "plant-records-esp",
                    type: "esp",
                    id: bodyJSON.id,
                    body: bodyJSON
                },function(error, response){
                   console.log(error);
                   console.log(response);
                });
            };

            function deleteRecordAPI(indexID){
                client.delete({
                    index: "plant-records-esp",
                    type: "esp",
                    id: indexID
                },function(error,response){
                    console.log(error);
                    console.log(response);
                });
            };

            // Return public API.
            return ({
                searchRecordsData: searchRecordsAPI,
                getRecordData: getRecordAPI,
                indexRecordData: indexRecordAPI,
                deleteRecordData: deleteRecordAPI
            });

        }
    );
}());