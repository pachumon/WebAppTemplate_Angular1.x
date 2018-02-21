var app = angular.module("sampleapp", [
    "ngRoute",
    "ngSanitize",
    "ngAnimate",
    "ngMessages",
    "ui.bootstrap",
    "toastr",
    "ngMockE2E"
]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<home viewdata='$resolve.viewdata.data'></home>",
            resolve: {               
                viewdata: function (appDataService) {
                    return appDataService.GetAppInitialData();
                }
            }
        })
        .otherwise({ redirectTo: "/" });
}
]);