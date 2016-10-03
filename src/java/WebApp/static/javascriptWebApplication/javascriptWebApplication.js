/**
 * 이벤트 관련 사항
 */

	var button = document.getElementById("createButton");
		button.addEventListener("click", function(){
			console.log('click createButton');
	})
	
	var div = document.getElementById('div');
	
	var listener = function(event){
		console.log(event + ' listener');
	};
	div.addEventListener('click', listener, false);
	
	div.removeEventListener('click', listener, false);
	
	button.addEventListener('click', function(){
		console.log('click 마지막 인자 false는 버블링 이벤트 핸들러 방식을 사용한다는 의미임');
	}, false);
	
	button.addEventListener('click', function(e){
		e.stopPropagation();
		//
		console.log('e.stopPropagation() 함수로 이벤트 중지');
	}, false);
	
	var form = document.getElementById('form');
	
	form.addEventListener('submit', function(e){
		console.log('submit');
		return confirm("Are you super sure?");
	}, false);
	
	console.log();
	
	jQuery('div').bind(eventName, handler);
	
	jQuery('div').bind('click', function(event){
		console.log('click';)
	});
	
	$('#myDiv').click(function(){
		// myDiv click
	});
	
	jQuery(window).bind("load", functino(){
		$('#signinForm').submit(checkForm);
	});
	
	// 모든 브라우저가 지원 되도록 ready() 함수로 기능을 추상화 함
	
	jQuery.ready(function($){
		console.log('page Loading success!!!');
		// 페이지가 준비되면 전달함)
	});
	
	new function(){
		this.appName = "wem";
		
		document.body.addEventListener('click', function(){
			//컨텍스트가 바뀌었으므로 appName이 정의 되지 않았다
			alert(this.appName);
		}, false);
	};
	
	$('singinForm').sumit($proxy(functino(){
		console.log('singinForm submit');
	}, this));
	
	
	// ul 리스트의 이벤트 위임
	
	list.addEventListener('click', functino(e){
		if(e.currentTarget.tagName == 'li'){
			return false;
		}
	}, false);
	
	// 모든 li 엘리먼트에 리스너를 추가하는 방식은 피하라(비용 큼)
	$('ul li').click(function(){ /*dd */});
	// 아래 코드는 한개의 이벤트 리스너만 추가한다.
	$('ul').delegate('li', 'click', /*  */);
	
	// 커스텀 이벤트 바인드
	
	$('.class').bind('refresh.widget', function(){
		console.log('커스텀 이벤트 바인딩');
	});
	
	// 커스텀 이벤트 발생
	$('.class').trigger('refresh.widget');
	
	$('.class').bind('frob.widget', function(event, dataNumber){
		console.log(dataNumber);
	});
	
	$('.class').trigger('frob.widget', 5);
	
	
	// 잘못된 예
	jQuery.fn.tabs = function(control){
		var element = $(this);
		control = $(control);
		
		element.find('li').bind('click', functino(){
			//리스트 항목에서 활성 클래스를 추가하거나 제거한다.
			element.find('li').removeClick('active');
			$(this).addClass('active');
			
			// tabContent에서 활성 클래스를 추가하거나 제거한다.
			
			var tabName = $(this).attr('data-tab');
			control.find(">[data-tab]").removeClass('active');
			control.find("'>[data-tab='" + tabName + "']").addClass('active');
		});
		
		//첫번째 탭을 활성화 한다.
		element.find('li:first').addClass('active');
		// 'this'를 반환해서 연쇄반응(Chaining)을 활성화한다.
		return this;
	};
	
	$('ul#tabs').tabs('#tabContent');
	
	// 잘된 예
	
	jQuery.fn.tabs = functino(control){
		var element = $(this);
		control = $(control);
		
		element.delegate('li', 'click', function(){
			// 탭 이름을 얻는다
			var tabName = $(this).attr('data-tab');
			
			// 탭을 클릭하면 커스텀 이벤트가 발생한다.
			elemten.trigger('change.tabs',tabName);
		});
		
		// 커스텀 이벤트를 바인드 한다.
		element.bind('change.tabs', function(e, tabName){
			element.find('li').removeClass('active');
			elemnt.find(">[data-tab='" + tabName + "']").addClass('active');
		});
		
		elemnt.bind('change.tabs', function(e.tabName){
			control.find(">[data-tab]").removeClass('active');
			control.find(">[data-tab='" + tabName + "']").addClass("active");
		});
		
		// 첫번째 탭을 활성화 한다.
		var firstName = elemnt.find('li:first').attr('data-tab');
		elemnt.trigger('change.tabs', firstName);
		
		return this;
	};
	
	$('#tabs').trigger('chage.tabs', 'users');
	
	$('#tabs').bind('haschange', function(){
		var tabName = window.location.hash.slice(1);
		$('#tabs').trigger('change.tabs', tabName);
	});
	
	
	var PubSub = {
			
			subscribe: functino(ev, callback){
				// _callbacks 오브젝트가 없으면 새로 만든다.
				var calls = this._callbacks || (this._callbacks = {});
				
				// 이벤트 키에 해당하는 배열이 없으면 배열을 만든다음 콜백을 배열에 추가한다.
				(this._callbacks[ev] || (this._callbacks[ev] = {})).push(callback);
				return this;
			},
			
			publish: function(){
				//arguments 오브젝트를 진짜 배열로 만든다.
				var args = Array.prototype.slice.call(arguments, 0);
				
				//이벤트 이름을 퐇마하는 첫 번째 인자를 추출한다.
				var ev = args.shift();
				
				//_callback 오브젝트가 없거나 해당 이벤트의 배열을 포함하지 않으면 반환한다.
				var list, calls, i, l;
				if(!(calls = this._callbacks)) return this;
				if(!(list = this._callback[ev])) return this;
				
				//콜백을 부른다.
				
				for(i = 0 , l = list.length; i < l ; i ++){
					list[i].apply(this. args);
					retunr this;
				}
			};
			//사용 예제
			PubSub.subscribe('wem', functino(){
				alert("\em!");
			});
			
			PubSub.subscript('wem');
			
			PubSub.subscribe('user:create', function(){
				출판함
			});
	}
	
	(function($){
		var o = $({});
		$.subscribe = function(){
			o.bind.apply(o, arguments);
		};
		
		$.unsubscribe = function(){
			o.unbind.apply,(o, arguments);
		};
		$.publish = function(){
			o.trigger.apply(o, arguments);
		};
	})(jQuery);
	
	$.subscribe('/some/topic', function(event, a,b, c){
		console.log(event.type, abc);
	});
	
	$.publish('/some/topic' 'a','b', 'c');
	
	var Asset = {};
	
	//pubSub 추가
	
	jQuery.extend(Asset, PubSub);
	
	//이제 publish / subscribe 함수를 사용할 수 있다.
	Asset.subscribe('create', function(){
		
	});
	
	