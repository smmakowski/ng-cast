angular.module('video-player', [])

.controller('AppController', function($scope) {
  $scope.videos = window.exampleVideoData; // this is array
  $scope.currentVideo = window.exampleVideoData[0];
  // $scoe.text = '';
  $scope.selectVideo = function(video) { 
    $scope.currentVideo = video; 
  }; // pass in video
  $scope.searchResults = function(query) {
    // $scope.text.concat(query);
    query = query || 'walrus fight';
    console.log(query); // 'test'
  };
})

.directive('app', function() {
  return {
    // controller: function() {
    //   var ctrl = this;
    //   $scope.videos = window.exampleVideoData; // this is array
    // $scope.currentVideo = window.exampleVideoData[0];
    // $scope.clickVideo = function(video) { $scope.currentVideo = video; };
    // }

    // },
    templateUrl: 'src/templates/app.html'
  };
})

.filter('youtubeEmbedUrl', function ($sce) {
  return function(videoId) {
    return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);
  };
});