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
            template: "<home viewdata='$resolve.viewdata' viewdata1='$resolve.viewdata1'></home>",
            resolve: {
                viewdata: function (appDataService) {

                    return appDataService.GetAppInitialData();
                },
                viewdata1: function (appDataService) {
                    appDataService.GetAppInitialData1();
                }
            }
        })
        .otherwise({ redirectTo: "/" });
}
]);