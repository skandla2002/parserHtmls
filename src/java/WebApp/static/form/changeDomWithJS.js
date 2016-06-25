require(["htmlparser.js"],function(){
	 
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
});
