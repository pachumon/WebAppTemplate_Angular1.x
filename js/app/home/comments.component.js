(function () {
    'use strict';

    app.component('comments', {
        templateUrl: 'js/app/home/comments.component.html',
        controller: [commentsController],
        controllerAs: 'vm',
        bindings: {
            comments: '='            
        },
    });

    commentsController.$inject = [];
    function commentsController() {
        var vm = this;

        vm.$onInit = function () {                        
        };        

    }
})();