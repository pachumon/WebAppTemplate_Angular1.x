const appDataService = function(app) {
  "use strict";

  app.factory("appDataService", appDataService);

  appDataService.$inject = ["$http", "$q", "$log"];
  function appDataService($http, $q, $log) {
    var service = {
      GetAppInitialData: GetAppInitialData,
      UpdateRewardInfo: UpdateRewardInfo,
      UpdateRedeemInfo: UpdateRedeemInfo
    };

    return service;

    function GetAppInitialData() {
      return $http({ method: "GET", url: "kudosApi/GetInitialData" })
        .then(function successcb(response, status, headers, config) {
          return response;
        })
        .catch(function errorcb(response, status, headers, config) {
          var val = $q.reject(response);
          return val;
        });
    }

    function UpdateRewardInfo(modalData) {
      return $http({
        method: "POST",
        url: "kudosApi/UpdateRewardInfo",
        data: modalData
      })
        .then(function successcb(response, status, headers, config) {
          return response;
        })
        .catch(function errorcb(response, status, headers, config) {
          var val = $q.reject(response);
          return val;
        });
    }

    function UpdateRedeemInfo(modalData) {
      return $http({
        method: "POST",
        url: "kudosApi/UpdateRedeemInfo",
        data: modalData
      })
        .then(function successcb(response, status, headers, config) {
          return response;
        })
        .catch(function errorcb(response, status, headers, config) {
          var val = $q.reject(response);
          return val;
        });
    }
  }
};

export default appDataService;
