angular.module("app").service("mainService", function($http){
  this.getData = function() {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      return results.data;
    })
  }
  this.getItem = function(index) {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      // console.log(results.data[index].activity_attachment_type);
      // if(results.data[index].activity_attachment_type === null) {
      //   delete results.data[index].activity_attachment;
      //   delete results.data[index].activity_message;
      //   console.log(results.data[index]);
      return results.data[index];
    })
  }
})
