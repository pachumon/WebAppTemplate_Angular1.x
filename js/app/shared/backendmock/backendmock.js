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


        var apiUrl="kudosApi/getInitialData";

        $httpBackend.whenGET(apiUrl).respond(function (method, url, data) {
            return [200, response, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/js\/app/).passThrough();

    });

})();