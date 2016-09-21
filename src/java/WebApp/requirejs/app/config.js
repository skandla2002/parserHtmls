/**
 * 
 */

requirejs.config(
		{
			baseUrl: '',
			paths: {
				angular: 'lib/angular',
				jquery: [ 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min', 
				          'lib/jquery-3.1.0'],
				main: 'app/main'
			}
		}
		
);

define(['main'],function(){
	alert('11');
});