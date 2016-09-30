angular.module("app").controller("mainCtrl", function($scope, mainService){
  $scope.show = false;
  $scope.commentHide = true;
  $scope.showData = function() {
    mainService.getData()
      .then(function(results) {
          $scope.data = results;
      })
  }
  $scope.showData();

  $scope.submit = function(text) {
    if(text !== "") {
      $scope.commentHide = false;
      $scope.yourComment = text;
    }
    }
  $scope.clicked = function(likes) {
    mainService.click(likes).then(function(response) {
      $scope.likes = response;
    });
  }
});
