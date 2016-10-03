angular.module("app").controller("homeCtrl", function($scope, mainService) {
  $scope.dataCircle = true;
	$scope.dataBox = true;
	$scope.commentHide = true;
	$scope.showData = function() {
		mainService.getData().then(function(results) {
			$scope.data = results;
		})
	}
	$scope.showData();
  $scope.dataCircleClick = function($index) {
    $scope.dataBox = false;
    $scope.dataCircle = false;
  }
  $scope.dataBoxClick = function($index) {
    $scope.dataBox = true;
    $scope.dataCircle = false;
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
