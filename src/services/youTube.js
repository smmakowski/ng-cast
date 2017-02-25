angular.module('video-player', [])
.service('youTube', function($http) {
  // TODO
  this.getYoutubeVideo = function() {
    return $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        q: this.query, 
        maxResults: '5', 
        key: 'AIzaSyCjslco65Jxkdnpus_pBt_knRCvM8-xlCk', 
        videoEmbeddable: true, 
        part: 'snippet', 
        type: 'video'},
    })
    .success(function(data) {
      console.log('Success', data);
    })
    .error(function(data) {
      console.log('Fail', data);
    });
  };
});