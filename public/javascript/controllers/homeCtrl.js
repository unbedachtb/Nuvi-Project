angular.module("app").controller("homeCtrl", function($scope, mainService) {

  $scope.subheader = false;
  $scope.dataCircle = true;
	$scope.likeStart = true;
	$scope.shareStart = true;
	$scope.commentStart = true;
	$scope.dataBox = true;
  $scope.comment = $scope.textComment;
	$scope.showData = function() {
		mainService.getData().then(function(results) {
			$scope.data = results;
		})
	}

	$scope.showData();

	$scope.dataCircleClick = function(index) {
		mainService.getItem(index).then(function(results) {
      console.log(index);
			$scope.data2 = results;
			$scope.dataCircle = false;
			$scope.dataBox = false;
      $scope.orderByProvider = results.provider
      $scope.reverseSort = false;
      $scope.subheader = true;
      $scope.likes = results.activity_likes;
      $scope.shares = results.activity_shares;
      $scope.comments = results.activity_comments;

		})
	}

	$scope.countLikes = function(likes) {
		$scope.likes = likes + 1;
	}

	$scope.countShares = function(shares) {
		$scope.shares = shares + 1;
	}

	$scope.dataBoxClick = function() {
		$scope.dataCircle = true;
    $scope.subheader = false;
		$scope.dataBox = true;
	}

	$scope.commentButtonClick = function(comments) {
		$scope.array = [];
		if ($scope.textComment !== '') {
			$scope.textComment = '';
		}
		$scope.comments = comments + 1;
		$scope.array2 = $scope.array.push($scope.textComment)
	}

  $scope.sortBy = function(propertyName) {
    console.log(propertyName);
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
});
