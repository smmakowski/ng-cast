angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
      url: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      //nothing here
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
