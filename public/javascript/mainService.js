angular.module("app").service("mainService", function($http){
  this.getData = function() {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      for(var i = 0; i < results.data.length; i++) {
      if(results.data[i].activity_message.includes('jpeg')) {
       
      };
    }
      return results.data;
    })
  }
})
