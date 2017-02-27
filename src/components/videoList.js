angular.module('video-player')
.directive('videoList', function() {
  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      // nothing here
    },
    templateUrl: 'src/templates/videoList.html'
  };
});
