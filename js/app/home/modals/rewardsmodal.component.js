(function () {

  app.component('rewardsmodal', {
    templateUrl: 'js/app/home/modals/rewardsmodal.component.html',
    controller: ['$log', rewardsmodalController],
    controllerAs: 'vm',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },

  });

  rewardsmodalController.$inject = ['$log'];

  function rewardsmodalController($log) {
    var vm = this;

    vm.$onInit = function () {
      vm.users = vm.resolve.users;

      vm.rewardsform = {
        currentuser: vm.resolve.user,
        comment: '',
        selecteduser: 0,
        selectedkudos: 0
      };

    };

    vm.submit = function (isvalid) {
      //handle the form data
      vm.ok();
    };

    vm.ok = function () {
      vm.close({ $value: 'kabuki' });
    };

    vm.cancel = function () {
      vm.dismiss({ $value: 'cancel' });
    };
  }

})();