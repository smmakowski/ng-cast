angular.module('video-player', [])

.controller('AppController', function($scope) {
  $scope.videos = window.exampleVideoData; // this is array
  $scope.currentVideo = window.exampleVideoData[0];
  $scope.currentUrl = 'https://www.youtube.com/embed/' + $scope.currentVideo.id.videoId;
  $scope.clickVideo = function(video) { $scope.currentVideo = video; }; // pass in video

})

.directive('app', function() {
  return {
    // controllerAs: 'props',
    // bindToController: true,
    // controller: function($scope) {
    //   console.log($scope);
    // },
    templateUrl: 'src/templates/app.html'
  };
})

// .filter('trustAsResourceUrl', ['$sce', function($sce) {
//   return function(val) {
//     return $sce.trustAsResourceUrl(val);
//   }
// }]);
.filter('youtubeEmbedUrl', function ($sce) {
  return function(videoId) {
    return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
  };
});

// .filter('youtubeEmbedUrl', function($sce) {
//   return function(videoId) {
//     return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
//   };
// });

// app.controller('selectVideo', function($scope) {
//   $scope.ctrl = function() {

//   }
// });