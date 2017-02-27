angular.module('video-player')

.controller('searchController', function() {
  this.getSearchBarQuery = function() {
    console.log(this.input);
    this.service.search(this.input, function(data){
      this.result(data);
    })
  };
})

.directive('search', function() {
  return {
    scope: {
      service: '<',
      result: '<'
    },
    restrict: 'E',
    controller: 'searchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
