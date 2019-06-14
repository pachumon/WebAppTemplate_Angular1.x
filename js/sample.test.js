
import "./app/app.mainmodule"

describe('application test',()=>{
    it('should add two number',()=>{
        expect(2+2).toBe(4);
    })
})

describe("sample angular test", () => {
    var $componentController;
    
    beforeEach(angular.mock.module("sampleapp"));
    beforeEach(angular.mock.inject(function(_$log_) {
     console.log(_$log_);    
    }));
    // beforeEach(
    //   angular.mock.inject(function(_$rootscope_) {
    //     console.log('kumbidi');
    //     $componentController = _$rootScope_;
    //   })
    // );
  
    //beforeEach(() => console.log(angular.mock.module("sampleapp")));
  
    it("should behave...", () => {
      expect(4).toEqual(4);
    });
  });