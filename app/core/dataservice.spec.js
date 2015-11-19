describe('Dataservice unit tests: ', function() {
	var dataservice;
	
	beforeEach(angular.mock.module('app.core'));

	beforeEach(angular.mock.inject(function(_dataservice_) {
		dataservice = _dataservice_;
	}));

	it('is loaded', function() {
		expect(dataservice).toBeDefined();
	});

	it('product returns a resource object', function() {
		expect(typeof dataservice.product().get).toBe('function');
	});
});