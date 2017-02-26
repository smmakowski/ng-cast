angular.module('video-player')

.controller('searchController', function() {
  this.getSearchBarQuery = function(query) {
    console.log(query);
  };
})

.directive('search', function() {
  return {
    scope: {

    },
    controller: 'searchController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
