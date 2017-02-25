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
      console.log('dog');
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
