angular.module("app").controller("homeCtrl", function($scope,$stateParams, mainService) {
  console.log($stateParams);
  $scope.dataCircle = true;
	$scope.dataBox = true;
	$scope.showData = function() {
		mainService.getData().then(function(results) {
      console.log(results);
			$scope.data = results;
		})
	}

console.log($stateParams);

	$scope.showData();
  $scope.getItem = function(item) {
    console.log(item);
    mainService.getItem(item).then(function(results) {
        $scope.data2.item.index = results;
        console.log(item);
        $scope.dataCircle = false;
        $scope.dataBox = false;

    })
  }
  $scope.getItem($stateParams);
  $scope.dataBoxClick = function() {
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
