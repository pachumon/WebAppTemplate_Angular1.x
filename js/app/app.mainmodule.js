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
            template: "<home></home>"
        })
        .otherwise({ redirectTo: "/" });
}
]);