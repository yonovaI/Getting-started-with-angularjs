musicApp.filter('status', function(){
    "use strict";
    return function(input){
        switch (input){
            case 1: return "Sold out"; break;
            case 2: return "Released"; break;
            case 3: return "Unreleased"; break;

        }
    }
});