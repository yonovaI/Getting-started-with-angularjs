musicApp.controller('EditArtistController', function EditArtistController($scope, artistData) {

    // $scope.saveAritist = function(artist, newArtistForm){
    //     if(newArtistForm.$valid) {
    //         alert(artist.name);
    //     }else {
    //         alert("Please fill required fields");
    //     }
    //
    // }

    $scope.saveArtist = function(artist, newArtistForm){
        if(newArtistForm.$valid) {
            artistData.saveArtist(artist);
            console.log(artist);
        }

    }
});