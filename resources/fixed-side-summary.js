
$(document).ready(function() {
	
	var initialPosition = 135;
	
	
	function refreshPosition() {

		var h = $('.fixedSideSummary').height() ;
		var H = $(document).height();

		if ($(window).scrollTop() > (H -h)) {
	        $('.fixedSideSummary').removeClass('ss-fixed-top');
	        $('.fixedSideSummary').addClass('ss-fixed-bottom');
	        $('.fixedSideSummary').removeClass('ss-unfixed');
		} else if ($(window).scrollTop() > initialPosition) {
	        $('.fixedSideSummary').addClass('ss-fixed-top');
	        $('.fixedSideSummary').removeClass('ss-fixed-bottom');
	        $('.fixedSideSummary').removeClass('ss-unfixed');
	    } else {
	        $('.fixedSideSummary').removeClass('ss-fixed-top');
	        $('.fixedSideSummary').removeClass('ss-fixed-bottom');
	        $('.fixedSideSummary').addClass('ss-unfixed');
	    }
	}

	if( $('.fixedSideSummary').length) {
		initialPosition = $('.fixedSideSummary').offset().top;
        $('.fixedSideSummary').addClass('ss-unfixed');

    	$(window).scroll(function(){
    		refreshPosition();
    	});
    	refreshPosition();
	}

	$('.fixedSideSummary #toc ul').addClass('nav');
	
	
	$('body').mwscrollspy({target: "#toc"});
});