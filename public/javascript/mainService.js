angular.module("app").service("mainService", function($http){
  this.getData = function() {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      return results.data;
    })
  }
  // this.submit = function(text) {
  //   console.log(text);
  // }
})
