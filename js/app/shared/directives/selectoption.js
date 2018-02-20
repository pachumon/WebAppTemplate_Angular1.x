app.directive("selectoption", function () {
    return {
        restrict: "A",

        require: "ngModel",

        link: function (scope, element, attributes, ngModel) {            
            ngModel.$validators.selectoption = function (modelValue) {
                return modelValue > 0;
            }
        }
    };
});