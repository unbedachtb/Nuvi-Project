angular.module("app").controller("mainCtrl", function($scope, mainService){
  $scope.show = false;
  $scope.showData = function() {
    mainService.getData()
      .then(function(results) {
          $scope.data = results;
      })
  }
  $scope.showData();
});
