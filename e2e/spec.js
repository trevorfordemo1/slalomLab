describe('Demo page: ', function() {
	it ('Should have header', function() {
		browser.get('');

		var header = element(by.css('.hd-brand'));

		expect(header.getText()).toEqual('Workflow Demo');
	});

	it ('Should have header', function() {
		browser.get('');

		var textbox = element(by.css('#txtProductAdd')).sendKeys('Electric Drill');
		element(by.css('#btnAddProduct')).click();

		var last = element.all(by.css('.product-row:last-child')).first();

		expect(last.getText()).toEqual('Electric Drill');
	});
});