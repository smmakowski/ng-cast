angular.module('video-player', [])

.controller('AppController', function($scope) {
  $scope.videos = window.exampleVideoData; // this is array
  $scope.currentVideo = window.exampleVideoData[0];
  $scope.clickVideo = function(video) { $scope.currentVideo = video;}; // pass in video

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
});


// app.controller('selectVideo', function($scope) {
//   $scope.ctrl = function() {

//   }
// });