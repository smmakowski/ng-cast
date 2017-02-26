angular.module('video-player', [])

.controller('AppController', function() {
  this.videos = window.exampleVideoData; // this is array
  this.currentVideo = window.exampleVideoData[0];
  console.log(this.currentVideo, 'tryyyy');

  this.selectVideo = function(video) {
    console.log(this);
    this.currentVideo = video;
    console.log(this);
    console.log(this.currentVideo, '!!!!!');
  }.bind(this); // pass in video

  this.searchResults = function(results) {
    //results from YouTube API
  };

  // this.getSearchBarInput = function(query) {
  //   console.log(query)
  // };

})

.directive('app', function() {
  return {
    scope: {},
    // restrict: 'E',
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