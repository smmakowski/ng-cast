angular.module('video-player')

.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    $http.get('http://www.googleapis.com/youtube/vs/search', {
    	params: {
    		part: 'snippet',
    		q: query,
    		type: 'video',
    		maxResults: 5,
    		key = $window.YOUTUBE_API_KEY,
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
			console.log(err.message);
		});
	});
  };
});
