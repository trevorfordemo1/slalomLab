(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$resource'];

    /* @ngInject */
    function dataservice($resource) {
        
        return {
        	product: product
        };

        function product() {
        	return $resource('/rest/product/lookup/grill');
        }
    }
})();