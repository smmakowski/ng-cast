angular.module('video-player')

.controller('searchController', function(youTube) {
  this.getSearchBarQuery = function(query) {
    query = query || '';

    youTube.search('dog meat', function(data) {
      console.log(data);
    });
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
