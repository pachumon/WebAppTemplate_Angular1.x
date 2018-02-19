(function () {
    'use strict';

    app.component('rewardssummary', {
        templateUrl: 'js/app/home/rewardssummary.component.html',
        controller: ['$uibModal', 'appDataService', rewardssummaryController],
        controllerAs: 'vm',
        bindings: {
            users: '='
        },
    });

    rewardssummaryController.$inject = ['$uibModal', 'appDataService'];
    function rewardssummaryController($uibModal, appDataService) {
        var vm = this;

        vm.$onInit = function () {

        };



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
                updateUserRewardData();
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

            modalInstance.result.then(function (selectedItem) {
                //this handles the ok button click of modal dialogue             
                vm.selected = selectedItem;
            }, function () {
                //this handles the cancel button click of modal dialogue

            });

        };

        let updateUserRewardData = function () {
            debugger;
            var id = 2;
            var userIndex = _.findIndex(vm.users, function (input) {
                return input.Id == id;
            });
            
        };

    }


})();