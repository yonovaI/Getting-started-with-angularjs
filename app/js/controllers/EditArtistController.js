musicApp.controller('EditArtistController', function ($scope) {

    $scope.saveAritst = function(artist, newArtistForm){
        if(newArtistForm.$valid) {
            alert(artist.name);
        }else {
            alert("Please fill required fields");
        }

    }
});