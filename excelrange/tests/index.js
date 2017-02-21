var excelrange = require('../index');
var expect  = require('chai').expect;

describe('excel-range', function() {
	it('should return function', function(done) {
    	expect(excelrange).to.be.a('function');
  	});
  	it('should return range A', function(done) {
    	expect(excelrange(1)).to.equal('A');
	});
	it('should return range Z', function(done) {
    	expect(excelrange(26)).to.equal('Z');
	});
	it('should return range AA', function(done) {
    	expect(excelrange(27)).to.equal('AA');
	});
	it('should return range AAA', function(done) {
    	expect(excelrange(702)).to.equal('AAA');
	});
});