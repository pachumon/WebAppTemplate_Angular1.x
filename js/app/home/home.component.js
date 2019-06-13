const home = function(app) {
  "use strict";

  app.component("home", {
    transclude: true,
    templateUrl: "js/app/home/home.component.html",
    controllerAs: "vm",
    controller: ["toastrService", "appDataService", homeController],
    bindings: {
      viewdata: "<"
    }
  });

  homeController.$inject = ["toastrService", "appDataService"];

  function homeController(toastrService, appDataService) {
    var vm = this;

    vm.$onInit = function() {
      console.log(vm.viewdata);
    };

    vm.$onChanges = function(changes) {};

    vm.updateUserRewardData = function(modalData) {
      appDataService
        .UpdateRewardInfo(modalData)
        .then(function(response, status, headers, config) {
          vm.viewdata = response.data;
        });
    };

    vm.updateUserRedeemData = function(modalData) {
      appDataService
        .UpdateRedeemInfo(modalData)
        .then(function(response, status, headers, config) {
          vm.viewdata = response.data;
        });
    };
  }
};

export default home;
