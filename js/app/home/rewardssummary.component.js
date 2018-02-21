(function () {
    'use strict';

    app.component('rewardssummary', {
        templateUrl: 'js/app/home/rewardssummary.component.html',
        controller: ['$uibModal', 'appDataService', rewardssummaryController],
        controllerAs: 'vm',
        bindings: {
            users: '<',
            updaterewards: '&',
            updateredeem: '&'
        },
    });

    rewardssummaryController.$inject = ['$uibModal', 'appDataService'];
    function rewardssummaryController($uibModal, appDataService) {
        var vm = this;

        vm.$onInit = function () {

        };

        vm.$onChanges = function (changes) {

        }


        vm.openRewardsModal = function (user) {
            console.log(user);
            var modalInstance = $uibModal.open({
                animation: true,
                component: 'rewardsmodal',
                resolve: {
                    users: function () {
                        return vm.users;
                    },
                    user: function () {
                        return user;
                    }
                }
            });

            modalInstance.result.then(function (modalData) {
                //this handles the ok button click of modal dialogue                             
                vm.updaterewards({ $event: modalData });
            }, function () {
                //this handles the cancel button click of modal dialogue clean up logic

            });

        };

        vm.openRedeemModal = function (user) {
            console.log(user);
            var modalInstance = $uibModal.open({
                animation: true,
                component: 'redeemmodal',
                resolve: {
                    users: function () {
                        return vm.users;
                    },
                    user: function () {
                        return user;
                    }
                }
            });

            modalInstance.result.then(function (modalData) {
                
                //this handles the ok button click of modal dialogue             
                vm.updateredeem({ $event: modalData });
            }, function () {
                //this handles the cancel button click of modal dialogue

            });

        };

    }


})();