angular.module("app").controller("homeCtrl", function($scope, mainService){
  $scope.show = false;
  $scope.textToHideOnClick = false;
  $scope.commentHide = true;
  $scope.showData = function() {
    mainService.getData()
      .then(function(results) {
          $scope.data = results;
      })
  }
  $scope.showData();
  $scope.text = "";
  $scope.submit = function(text, index) {
    console.log(index);
    if(text !== "") {
      // $scope.commentHide = false;
      // $scope.yourComment = text;
      $scope.reset.$setPristine();
    }
    }
    $scope.charts = function() {
      mainService.charts()
      .then(function(results) {
        $scope.chart = results;
      })
    }
   // $scope.clicked = function(likes) {
  //   mainService.click(likes).then(function(response) {
  //     $scope.likes = response;
  //   });
  // }
});
