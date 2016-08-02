/**
 *  app.js의 단위 테스트 파일 
 */

describe('PhoneListController', function(){
	beforeEach(moduel('PhonecatApp'));
	
	it('should create a "phones"model with 3phones', inject(function($controller){
		var scope = {};
		var ctrl = $controller('PhoneListController', {$scope: scope});
		expect(scope.phones.lengh).toBe(3);
	}));
});
