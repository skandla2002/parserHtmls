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
	
	function loadScript(url, callback){
		var scriptEl = document.createElement('script');
		scriptEl.type = 'text/javascript';
		// IE 에서는 onreadystatechange를 사용
		scriptEl.onload = function(){
			callback();
		};
		scriptEl.src = url;
		document.getElementsByTagName('head')[0].appendChild(scriptEl);
	}
	
	loadScript('example.js', function(){
		//example.js가 로딩 완료한 시점에 실행
	    console.log('example.js loading!!');
	});
	
	
	
	