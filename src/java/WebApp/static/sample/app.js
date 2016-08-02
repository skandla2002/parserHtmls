/**
 * 
 */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListController',function PhoneListController($scope)
{
	 $scope.phones = [
	                  {
	                    name: 'Nexus S',
	                    snippet: 'Fast just got faster with Nexus S.'
	                  }, {
	                    name: 'Motorola XOOM™ with Wi-Fi',
	                    snippet: 'The Next, Next Generation tablet.'
	                  }, {
	                    name: 'MOTOROLA XOOM™',
	                    snippet: 'The Next, Next Generation tablet.'
	                  }
	                 ];
});

/*describe('PhoneListController', function(){
	it('should create a "phones" model with 3 phones', function(){
		var scope = {};
		var ctrl = new PhoneListController(scope);
		
		expect(scope.phone.lenght).toBe(3);
	});
});*/