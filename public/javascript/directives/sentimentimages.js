angular.module('app').directive('sentimentDirective', function() {
  return {
    link: function(scope, element, attrribute) {
          if(scope.data[scope.$index].activity_sentiment === 1) {
          element.attr("src", "./public/images/smile.png")
        }
        if(scope.data[scope.$index].activity_sentiment === 0) {
          element.attr("src", "./public/images/neutral.png")
        }
        if(scope.data[scope.$index].activity_sentiment === -1) {
          element.attr("src", "./public/images/sad.png")
        }
    }
  };
});
