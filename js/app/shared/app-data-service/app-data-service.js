(function () {
    'use strict';

    app.factory('appDataService', appDataService);

    appDataService.$inject = ['$http', '$log'];
    function appDataService($http, $log) {
        var response = { Users: [], Comments: [] };
        response.Users.push({ Id: 1, Name: "Jason", KudosCount: 6 });
        response.Users.push({ Id: 2, Name: "Sabuj", KudosCount: 9 });
        response.Users.push({ Id: 3, Name: "James", KudosCount: 8 });
        response.Users.push({ Id: 4, Name: "Eric", KudosCount: 9 });
        response.Users.push({ Id: 5, Name: "Hilary", KudosCount: 7 });
        response.Users.push({ Id: 6, Name: "Khalid", KudosCount: 3 });
        response.Users.push({ Id: 7, Name: "Charles", KudosCount: 9 });
        response.Users.push({ Id: 8, Name: "Deepa", KudosCount: 10 });
        response.Users.push({ Id: 9, Name: "Mathews", KudosCount: 5 });
        response.Users.push({ Id: 10, Name: "Karthik", KudosCount: 9 });
        response.Users.push({ Id: 11, Name: "Prasanth", KudosCount: 3 });

        response.Comments.push({ ProviderId: 2, ReceiverId: 4, Comment: "Good Support for Production Tickets", ProviderName: "Sabuj", ReceiverName: "Eric" });
        response.Comments.push({ ProviderId: 3, ReceiverId: 6, Comment: "Good job in application devlopment", ProviderName: "James", ReceiverName: "Khalid" });
        response.Comments.push({ ProviderId: 1, ReceiverId: 8, Comment: "Great commitement to tasks", ProviderName: "Jason", ReceiverName: "Deepa" });

        var service = {
            GetAppInitialData: GetAppInitialData,
            UpdateRewardInfo: UpdateRewardInfo
        };

        return service;


        ////////////////response.
        function GetAppInitialData() {
            return response;
        }

        function UpdateRewardInfo() {
            var id = 2;
            //the below approach is to remove the object refference and trigger $onChanges on components even when a property alone is modified
            var users=angular.copy(response.Users);
            debugger;
            var modifiedUser = _.find(users, function (input) {
                return input.Id == id;
            });
            var modifiedUserIndex = _.findIndex(users, { Id: id });
            if (modifiedUser != undefined) {
                modifiedUser.KudosCount += 4;
            }            
            users[modifiedUserIndex] = modifiedUser;
            response.Users=users;
        }


    }


})();



