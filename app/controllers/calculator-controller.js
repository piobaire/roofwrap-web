'use strict';

angular.module('roofwrapApp.CalculatorController', [])
.controller('CalculatorController', ['$scope', 'ScreenHelper', 'FileFactory', function($scope, ScreenHelperFactory, FileFactory) {
  $scope.responsiveHelper = ScreenHelperFactory;

  var blackPrice = 1.25;
  var whitePrice = 1.75;
  var tipoutBlackPrice = 1.2;
  var tipoutWhitePrice = 2.4;
  $scope.shippingCost = 195;
  $scope.colorBlack = "Black";
  $scope.colorWhite = "White";
  $scope.formSingle = "Single Wide";
  $scope.formDouble = "Double Wide";
  $scope.windExposureChoices = [];
  $scope.windExposureChoices.push({ name: "Low", mph: "0-40 mph"});
  $scope.windExposureChoices.push({ name: "Medium", mph: "41-59 mph"});
  $scope.windExposureChoices.push({ name: "High", mph: "60+ mph"});
  $scope.roofProfiles = [{}];
  $scope.stateAbbrs = [{}];

  $scope.range = function(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };

  $scope.rangeWithZero = function(min, max) {
    var input = [];
    input.push(0);
    for (var i = min; i <= max; i += 1) {
      input.push(i);
    }
    return input;
  };

  $scope.homeInfo = {
    form: $scope.formSingle,
    length: 20,
    width: 10,
    tipoutLength: 0,
    tipoutWidth: 0,
    color: $scope.colorBlack,
    roofProfile: $scope.roofProfiles[0],
    plumbingPipes: 0,
    kitchenVents: 0,
    bathroomVents: 0,
    weatherheadPowerMasts: 0,
    windExposure: $scope.windExposureChoices[0],
    insulationBoardThickness: 0,
    user: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: $scope.stateAbbrs[0].name,
      zip: "",
      phoneNumber: "",
      email: ""
    }
  };

  $scope.total = function() {
    var total = 0;
    var squareFootage = $scope.homeInfo.length * $scope.homeInfo.width;
    var baseCost = $scope.homeInfo.color == $scope.colorBlack ? blackPrice : whitePrice;
    if ($scope.homeInfo.windExposure != $scope.windExposureChoices[0]) {
      baseCost += $scope.homeInfo.windExposure == $scope.windExposureChoices[1] ? 0.1 : 0.2;
    }
    //Base roof cost
    total += baseCost * squareFootage;

    //Tipout cost
    squareFootage = $scope.homeInfo.tipoutLength * $scope.homeInfo.tipoutWidth;
    baseCost = $scope.homeInfo.color == $scope.colorBlack ? tipoutBlackPrice : tipoutWhitePrice;
    total += baseCost * squareFootage;

    //Shipping cost
    total += $scope.shippingCost;

    //Additional cost based on roof profile
    total += $scope.homeInfo.roofProfile.price;

    return total;
  };

  FileFactory.getFile('roof-profiles.json').then( function (promise) {
    $scope.roofProfiles = promise.data.profiles;
    $scope.homeInfo.roofProfile = promise.data.profiles[0];
    $scope.errorMessage = "";
  })
  .catch( function (promise, status) {
    $scope.roofProfiles = { "profiles" : [{ name: "Something went south while loading the roof profiles.", image: "", price: 0 }]}
    $scope.errorMessage = "Well, this is embarrassing, but this might help us figure things out: " + status;
  });

  FileFactory.getFile('states.json').then( function (promise) {
    $scope.stateAbbrs = promise.data.states;
    $scope.homeInfo.user.state = $scope.stateAbbrs[0];
    $scope.errorMessage = "";
  })
  .catch( function (promise, status) {
    $scope.stateAbbrs = { "states" : [{ "abbr" : "OOPS!", "name" : "Something went wrong while trying to get all the states... Sorry. Try reloading?"}]}
    $scope.errorMessage = "Well, this is embarrassing, but this might help us figure things out: " + status;
  });
}]);
