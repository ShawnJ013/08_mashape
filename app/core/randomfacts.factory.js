(function() {
    'use strict';

    angular
        .module('random-memes')
        .factory('randomFactsFactory', randomFactsFactory);

    randomFactsFactory.$inject = ['$http'];

    /* @ngInject */
    function randomFactsFactory($http) {
        var service = {
        	generateRandomFact: generateRandomFact
        };

        return service;

        ////////////////

        function generateRandomFact(sentence) {

        	return $http.post('https://andruxnet-random-famous-quotes.p.mashape.com/', null, {
        		headers: {
        			'X-Mashape-Key': 'gGoDBiwW3NmshocQFfi6cLfG3o36p1loBj2jsnCpWb9Km625az'
        	}
        		
        	});
        }
	}
})();