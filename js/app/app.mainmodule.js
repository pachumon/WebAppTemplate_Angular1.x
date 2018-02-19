var app = angular.module("sampleapp", [
    "ngRoute",
    "ngSanitize",
    "ngAnimate",
    "ui.bootstrap",
    "toastr"
]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<home viewdata='$resolve.viewdata'></home>",
            resolve:{
                viewdata:function(appDataService){                                  
                    return appDataService.GetAppInitialData();
                } 
            }
        })
        .otherwise({ redirectTo: "/" });
}
]);