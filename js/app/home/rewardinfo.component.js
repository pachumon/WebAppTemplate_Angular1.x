const rewardInfo = function(app) {
  "use strict";

  app.component("rewardinfo", {
    templateUrl: "js/app/home/rewardinfo.component.html",
    controller: [rewardinfoController],
    controllerAs: "vm"
  });

  rewardinfoController.$inject = [];
  function rewardinfoController() {
    var vm = this;

    vm.$onInit = function() {};
  }
};
export default rewardInfo;
