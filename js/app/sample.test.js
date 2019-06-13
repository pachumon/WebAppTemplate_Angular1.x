//var expect = chai.expect;
import { expect } from 'chai';
import 'angular';
import 'angular-mocks';
import 'jquery';

describe('sample test', () => {
  it('has a dummy spec to test 2 + 2', function() {
    expect(4).to.be.equals(4);
  });
});

describe("sample angular test", () => {
    var $componentController;
    
    beforeEach(angular.mock.module("sampleapp"));
    beforeEach(angular.mock.inject(function(_$log_) {
     console.log(_$log_);    
    }));   
  
    it("should behave...", () => {
        expect(4).to.be.equals(4);
    });
    
  });
