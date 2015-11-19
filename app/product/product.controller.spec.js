describe('Product Controller unit tests: ', function() {

	var productCtrl;

	beforeEach(angular.mock.module('app.core'));
	beforeEach(angular.mock.module('app.product'));

	beforeEach(angular.mock.inject(function(_$controller_) {
		productCtrl = _$controller_('productCtrl');
	}));

	it('productCtrl is loaded', function() {
		expect(productCtrl).toBeDefined();
	});

	it('addProduct should add a product object to products array', function() {
		var vmProduct = productCtrl;

		vmProduct.newProduct = 'TestProduct';

		vmProduct.addProduct();

		vmProduct.newProduct = 'TestProduct2';

		vmProduct.addProduct();

		expect(vmProduct.products.length).toEqual(2);
	});

	it('addProduct should not add a product object to products array if newProduct is empty', function() {
		var vmProduct = productCtrl;

		vmProduct.addProduct();
	});

});