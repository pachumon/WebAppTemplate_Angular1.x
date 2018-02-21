(function () {

    app.run(function ($httpBackend) {

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


        var apiUrl = 'kudosApi/';

        $httpBackend.whenGET(apiUrl + 'GetInitialData').respond(function (method, url, data) {
            return [200, response, {}];
        });

        $httpBackend.whenPOST(apiUrl + 'UpdateRewardInfo').respond(function (method, url, data) {

            var modalData = JSON.parse(data);

            //the below approach is to remove the object refference and trigger $onChanges on components even when a property alone is modified
            //var users = angular.copy(response.Users);
            //debugger;
            updateUserReward(modalData);
            updateRewardComments(modalData);
            //response.Users = users;
            return [200, response, {}];
        });

        var updateUserReward = function (modalData) {
            var rewardedUserId = modalData.currentuser.Id;
            var rewardingUserId = modalData.selecteduser;
            var modifiedUser = _.find(response.Users, function (input) {
                return input.Id == rewardedUserId;
            });
            var modifiedUserIndex = _.findIndex(response.Users, { Id: rewardedUserId });
            if (modifiedUser != undefined) {
                modifiedUser.KudosCount += modalData.selectedkudos;
            }
            response.Users[modifiedUserIndex] = modifiedUser;
        }

        var updateRewardComments = function (modalData) {
            var rewardedUserId = modalData.currentuser.Id;
            var rewardedUserName = modalData.currentuser.Name;
            var rewardingUserId = modalData.selecteduser;
            var rewardingUser = _.find(response.Users, function (input) {
                return input.Id == rewardingUserId;
            });
            response.Comments.push({
                ProviderId: rewardingUserId,
                ReceiverId: rewardedUserId,
                Comment: modalData.comment,
                ProviderName: rewardingUser.Name,
                ReceiverName: rewardedUserName
            });
        }


        $httpBackend.whenPOST(apiUrl + 'UpdateRedeemInfo').respond(function (method, url, data) {
            
            var modalData = JSON.parse(data);

            //the below approach is to remove the object refference and trigger $onChanges on components even when a property alone is modified
            //var users = angular.copy(response.Users);
            //debugger;
            updateUserRedeemInfo(modalData);
            //updateComments(modalData);
            //response.Users = users;
            return [200, response, {}];
        });

        var updateUserRedeemInfo = function (modalData) {
            var redeemingUserId = modalData.currentuser.Id;
            var modifiedUser = _.find(response.Users, function (input) {
                return input.Id == redeemingUserId;
            });
            var modifiedUserIndex = _.findIndex(response.Users, { Id: redeemingUserId });
            if (modifiedUser != undefined) {
                modifiedUser.KudosCount -= modalData.selectedkudos;
            }
            response.Users[modifiedUserIndex] = modifiedUser;
        }

        // Pass through any requests for application files
        $httpBackend.whenGET(/js\/app/).passThrough();

    });

})();