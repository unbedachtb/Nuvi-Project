angular.module("app").controller("mainCtrl", function($scope, mainService){
  $scope.show = false;
  $scope.showData = function() {
    mainService.getData()
      .then(function(results) {
          $scope.data = results;
      })
  }
  $scope.showData();
  $scope.text = '';
  $scope.submit = function() {
      scope.text = '';
    }
  $scope.clicked = function(likes) {
    mainService.click(likes).then(function(response) {
      $scope.likes = response;
    });
  }
});
