angular.module('video-player')

.controller('searchController', function(youTube) {

  this.getSearchBarQuery = function(query) {
    query = query || '';

    youTube.search(query, this.result);
  };
})

.directive('search', function() {
  return {
    scope: {
      result: '<',
      videos: '<'
    },
    restrict: 'E',
    controller: 'searchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
