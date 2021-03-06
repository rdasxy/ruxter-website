$(function() {
	// Hide all the content except the first
	$('.accordian li:odd:gt(0)').hide();
	
	// Add a padding to the first link
	$('.accordian li:first').animate( {
		paddingLeft:"0px"
	} );
	
	// Add the dimension class to all the content
	$('.accordian li:odd').addClass('dimension');
	
	// Set the even links with an 'even' class
	$('.accordian li:even:even').addClass('even');
	
	// Set the odd links with a 'odd' class
	$('.accordian li:even:odd').addClass('odd');
	
	// Show the correct cursor for the links
	$('.accordian li:even').css('cursor', 'pointer');
	
	// Handle the click event
	$('.accordian li:even').click( function() {
		// Get the content that needs to be shown
		var cur = $(this).next();
		
		// Get the content that needs to be hidden
		var old = $('.accordian li:odd:visible');

		// Make sure the content that needs to be shown 
		// isn't already visible
		if ( cur.is(':visible') ) {
		        cur.slideToggle(500);
			return false;
		    }
		
		// Show the new content
		cur.stop().slideToggle(500);
	} );
});
