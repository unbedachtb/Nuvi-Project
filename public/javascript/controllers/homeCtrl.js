angular.module("app").controller("homeCtrl", function($scope, mainService) {
  $scope.dataCircle = true;
	$scope.dataBox = true;
  $scope.messageHide = true;
	$scope.commentHide = true;
	$scope.showData = function() {
		mainService.getData().then(function(results) {
			$scope.data = results;
		})
	}



	$scope.showData();
  $scope.dataCircleClick = function($event) {
    console.log($event);
      $scope.dataCircle = false;
      $scope.dataBox = false;
  }
  $scope.dataBoxClick = function($event) {
      console.log($event);
      $scope.dataCircle = true;
      $scope.dataBox = true;
  }
	// $scope.text = "";
	// $scope.submit = function(text, index) {
	// 	console.log(index);
	// 	if (text !== "") {
	// 		$scope.commentHide = false;
	// 		$scope.yourComment = text;
	// 		$scope.reset.$setPristine();
	// 	}
	// }
});
