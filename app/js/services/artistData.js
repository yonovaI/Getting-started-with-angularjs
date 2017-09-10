"use strict";

musicApp.factory("artistData", function ($resource) {
    var resource = $resource('/data/artist/:id'+'.json', {id: '@id'});

    return {
        // getArtist: function(id, callbc){
        //     $http({method: 'GET', url: 'data/artist/'+id+'.json'})
        //         .success(function (data, status, headers, config) {
        //             callbc(data);
        //         })
        //         .error(function (data, status, headers, config) {
        //             $log.error(data);
        //         });
        // }
        // getArtist: function(id){
        //     var defer = $q.defer();
        //     $http({method: 'GET', url: 'data/artist/'+id+'.json'})
        //         .success(function (data) {
        //             defer.resolve(data);
        //             })
        //           .error(function (data, status, headers, config) {
        //               defer.reject(data);
        //          });
        //     return defer.promise;
        // }
        
        getArtist: function (id) {
            return resource.get({id: id});
        },
        saveArtist: function(artist){
            artist.id = 999;
            resource.save(artist);
        }
    }
});
