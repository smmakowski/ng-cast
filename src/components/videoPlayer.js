angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
