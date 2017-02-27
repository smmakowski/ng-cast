angular.module('video-player')

.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyAv2El96rUXNt4jR6--90AMgHyKoLkMniY',
        videoEmbeddable: 'true'
      }
    })
    .then(function({data}) {
      if (callback) {
        callback(data.items);
      }
    })
    .catch(function({data}) {
      data.error.errors.forEach(function(err) {
        console.error(err.message);
      });
    });
  };
});
