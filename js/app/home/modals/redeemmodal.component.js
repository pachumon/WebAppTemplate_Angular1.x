(function () {
    
      app.component('redeemmodal', {
        templateUrl: 'js/app/home/modals/redeemmodal.component.html',
        controller: ['$log', redeemmodalController],
        controllerAs: 'vm',
        bindings: {
          resolve: '<',
          close: '&',
          dismiss: '&'
        },
    
      });
    
      redeemmodalController.$inject = ['$log'];
    
      function redeemmodalController($log) {
        var vm = this;
    
        vm.$onInit = function () {
          vm.users =vm.resolve.users;
         
          vm.redeemform={
            currentuser:vm.resolve.user,
            comment:'',            
            selectedkudos:0
          };
          
        };

        vm.submit = function (isvalid) {
          //handle the form data
          vm.ok();
        };
    
        vm.ok = function () {
          
          vm.close({ $value: vm.redeemform });
        };
    
        vm.cancel = function () {
          vm.dismiss({ $value: 'cancel' });
        };
      }
    
    })();