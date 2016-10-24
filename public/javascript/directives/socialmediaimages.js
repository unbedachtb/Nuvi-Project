angular.module('app').directive('socialImagesDirective', function() {
  return {
    link: function(scope, element, attrribute) {
        if(scope.data[scope.$index].provider === 'facebook') {
          element.attr("src", "./public/images/facebook.png")
        }
        if(scope.data[scope.$index].provider === 'twitter') {
          element.attr("src", "./public/images/twitter.png")
        }
        if(scope.data[scope.$index].provider === 'tumblr') {
          element.attr("src", "./public/images/tumblr.svg.png")
        }
        if(scope.data[scope.$index].provider === 'instagram') {
          element.attr("src", "./public/images/instagram.png")
        }
    }
  };
});
