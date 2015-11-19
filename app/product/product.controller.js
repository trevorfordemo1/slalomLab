(function() {
    'use strict';
    angular
        .module('app.product')
        .controller('productCtrl', productCtrl);

    /* @ngInject */
    function productCtrl(dataservice) {
        /*jshint validthis: true */
        var vmProduct = this;

        vmProduct.addProduct = addProduct;

        activate();

        function activate() {
            vmProduct.newProduct = '';
            
        	vmProduct.products = [];

        	getProducts();
        }


        function addProduct() {
            if (vmProduct.newProduct.length > 0) {
                vmProduct.products.push({
                    productDescription: vmProduct.newProduct
                });

                vmProduct.newProduct = '';
            }
        }

        /**
         * gets products and exposes them to the ui
         */
        function getProducts() {
        	vmProduct.products = dataservice.product().query();
        }
    }
})();