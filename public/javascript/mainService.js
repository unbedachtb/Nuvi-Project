angular.module("app").service("mainService", function($http, $stateParams){
  this.getData = function() {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      return results.data;
    })
  }
  this.getItem = function(item) {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      console.log(results.data);
      console.log(item);
          return results.data;
    })
  }
})
