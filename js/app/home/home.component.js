(function () {
    'use strict';

    app.component('home', {
        templateUrl: 'js/app/home/home.component.html',
        controllerAs: 'vm',
        controller: [
            'toastrService', homeController
        ]
    });


    function homeController(toastrService) {
        var vm = this;
        

        vm.$onInit = function () {
            
        }

        

    }
})();