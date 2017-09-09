'use strict';

musicApp.controller('ArtistDetailsController',
    function ($scope, artistData) {
        $scope.iza = "iza";

        $scope.artist = artistData.getArtist;

        $scope.showHideAllMemebers = showHideAllMemebers;
        $scope.bandMembersShown = false;
        $scope.showHideText = "Show";

        $scope.updateRatingUp = updateRatingUp;
        $scope.updateRatingDown = updateRatingDown;

        $scope.showHideREcords = showHideREcords;
        $scope.isRecordsVisible = false;
        $scope.infoHideTetx = "Info";

        $scope.sort = "rating";
        function showHideAllMemebers(){
            if ($scope.bandMembersShown == false) {
                $scope.showHideText = 'Hide';
                $scope.bandMembersShown = true;
            }
            else {
                $scope.showHideText = 'Show';
                $scope.bandMembersShown = false;
            }
        }


        function updateRatingUp(album){
            album.rating++;
        }

        function updateRatingDown(album){
            if(album.rating>0)
                 album.rating--;
            return;
        }


        function showHideREcords(){
            if ($scope.isRecordsVisible == false) {
                $scope.infoHideTetx = 'Hide';
                $scope.isRecordsVisible = true;
            }
            else {
                $scope.infoHideTetx = 'Info';
                $scope.isRecordsVisible = false;
            }
        }
    }
);