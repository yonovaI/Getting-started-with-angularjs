"use strict";

musicApp.factory("artistData", function ($http) {

);
    return {
        getArtist: function(callbc){
            $http({method: 'GET', url: 'data/artist/1'})
                .success(function (data, status, headers, config) {
                    callbc(data);
                })
                .error(function (data, status, headers, config) {

                });
        }
    }
})
