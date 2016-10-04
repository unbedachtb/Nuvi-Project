angular.module("app").controller("homeCtrl", function($scope, mainService) {
  $scope.dataCircle = true;
  $scope.likeStart = true;
  $scope.shareStart = true;
  $scope.commentStart = true;
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
      console.log(results.provider);
        $scope.data2 = results;
        console.log(results);
        $scope.dataCircle = false;
        $scope.dataBox = false;


    })
  }
  $scope.countLikes = function(likes) {
    $scope.likeStart = false;
    $scope.total = likes + 1;
  }
  $scope.countShares = function(shares) {
    $scope.shareStart = false;
    $scope.totalShares = shares + 1;
  }
  $scope.countComments = function() {
    mainService
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
