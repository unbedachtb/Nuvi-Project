angular.module("app").service("mainService", function($http){
  this.getData = function() {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      console.log(results.data[0].provider);
      console.log(results.data);
      return results.data;

    })
  }
  this.getItem = function(index) {
    return $http({
      method: 'GET',
      url: "https://nuvi-challenge.herokuapp.com/activities"
    }).then(function(results) {
      return results.data[index];
    })
  }
//   this.makeHttpObject = function() {
//   try {return new XMLHttpRequest();}
//   catch (error) {}
//   try {return new ActiveXObject("Msxml2.XMLHTTP");}
//   catch (error) {}
//   try {return new ActiveXObject("Microsoft.XMLHTTP");}
//   catch (error) {}
//
//   throw new Error("Could not create HTTP request object.");
// }
})
