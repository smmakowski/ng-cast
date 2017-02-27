angular.module('video-player')

.controller('AppController', function($window, youTube) {
  this.searchService = youTube;
  this.videos = window.exampleVideoData; // this is array
  this.currentVideo = window.exampleVideoData[0];

  this.selectVideo = function(video) {
    this.currentVideo = video;
  }.bind(this); // pass in video

  this.searchResults = function(results) {
    this.videos = results
    this.currentVideo = this.videos[0];
  }.bind(this);

  youTube.search('sparky wheres satan', this.searchResults);

})

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppController',
    controllerAs: 'ctrl',
    bindToController: true,
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