angular.module("app").controller("homeCtrl", function($scope, mainService) {
  $scope.dataCircle = true;
	$scope.dataBox = true;
	$scope.showData = function() {
		mainService.getData().then(function(results) {
			$scope.data = results;
		})
	}



	$scope.showData();
  $scope.dataCircleClick = function(index) {
    console.log(index);
    mainService.getItem(index).then(function(results) {
        $scope.data2 = results;
        console.log(results);
        $scope.dataCircle = false;
        $scope.dataBox = false;

    })
  }
  $scope.dataBoxClick = function() {
      console.log();
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
