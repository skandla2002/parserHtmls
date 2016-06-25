require([],function(){
	
});

(function(){
//	alert();
	// 1. MIS Mail Receiver User
//	 if($scope.viewModel.mailParam){
		 
//	 }
	// 2. saveContents
	
	// 3. After editorReady, insert Signiture.
	 
	 
	 // ja parser use
	 
	 var results = "";

	 HTMLParser("hello world", {
	 start: function( tag, attrs, unary ) {
	  results += "<" + tag; for ( var i = 0; i < attrs.length; i++ ) results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
	  results += (unary ? "/" : "") + ">";
	  },
	 end: function( tag ) {
	  results += "";
	  },
	 chars: function( text ) {
	  results += text;
	  },
	 comment: function( text ) {
	  results += "";
	  }
	 });

	 console.log(results == "hello world");

}());