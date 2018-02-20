(function () {
    'use strict';

    app.component('home', {
        transclude: true,
        templateUrl: 'js/app/home/home.component.html',
        controllerAs: 'vm',
        controller: [
            'toastrService', 'appDataService', homeController
        ],
        bindings: {
            viewdata: '<',
            viewdata1: '<'
        },
    });

    homeController.$inject = ['toastrService', 'appDataService'];

    function homeController(toastrService, appDataService) {
        var vm = this;


        vm.$onInit = function () {
            console.log(vm.viewdata1);
        }

        vm.$onChanges = function (changes) {

        }

        vm.updateUserRewardData = function () {
            appDataService.UpdateRewardInfo();
        };

        vm.updateUserRedeemData = function () {

        }

    }
})();