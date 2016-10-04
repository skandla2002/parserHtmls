/**
 * namespace
 */

	var User = {
			records: [ 'test', 1],
			fetchRemote: function(){
				return this.records;
			},
			destroy: function(){
				console.log('destroy user');
			}
	};
	
//	 오류 발생함: Uncaught TypeError: user is not a constructor(anonymous function)
//	var user = new User;
//	user.destroy; 
	
	var User = function(atts){
		this.attributes = atts || {};
	};
	
	User.prototype.destroy = function(){
		console.log('destroy user');
		
	}
	User.fetchRemote = function(){
		console.log('fetchRemote');
	}
	
	
	
	
	
	