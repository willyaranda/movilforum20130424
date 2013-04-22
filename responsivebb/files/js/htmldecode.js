$(document).ready(function(){

	//get code from view to pre
	$('#example-code').text($('#example-view').html());
	
	//On focus, change code from pre to view
	$('#example-code').bind('focusout',function(){
		$('#example-view').html($('#example-code').text());
	});


});