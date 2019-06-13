import "angular";
import "angular-route";
import "angular-sanitize";
import "angular-animate";
import "angular-messages";
import "angular-ui-bootstrap";
import "angular-toastr";
import "angular-mocks";

import toastrService from "./shared/toastr-service/toastr-service";
import selectOption from "./shared/directives/selectoption";
import backendMock from "./shared/backendmock/backendmock";
import appDataService from "./shared/app-data-service/app-data-service";
import home from "./home/home.component";
import comments from "./home/comments.component";
import rewardInfo from "./home/rewardinfo.component";
import rewardsSummary from "./home/rewardssummary.component";
import rewardsModal from "./home/modals/rewardsmodal.component";
import redeemModal from "./home/modals/redeemmodal.component";

var app = angular.module("sampleapp", [
  "ngRoute",
  "ngSanitize",
  "ngAnimate",
  "ngMessages",
  "ui.bootstrap",
  "toastr",
  "ngMockE2E"
]);

toastrService(app);
selectOption(app);
backendMock(app);
appDataService(app);
home(app);
comments(app);
rewardInfo(app);
rewardsSummary(app);
rewardsModal(app);
redeemModal(app);

app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<home viewdata='$resolve.viewdata.data'></home>",
        resolve: {
          viewdata: function(appDataService) {
            return appDataService.GetAppInitialData();
          }
        }
      })
      .otherwise({ redirectTo: "/" });
  }
]);
