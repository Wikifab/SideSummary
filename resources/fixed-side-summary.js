
$(document).ready(function() {
	
	var initialPosition = 135;
	
	if( $('.fixedSideSummary').length) {
		var initialPosition = $('.fixedSideSummary').offset().top;
        $('.fixedSideSummary').addClass('ss-unfixed');
	}
	
	function refreshPosition() {
		if ($(window).scrollTop() > initialPosition) {
	        $('.fixedSideSummary').addClass('ss-fixed-top');
	        $('.fixedSideSummary').removeClass('ss-unfixed');
	        console.log('fixed');
	    } else {
	        $('.fixedSideSummary').removeClass('ss-fixed-top');
	        $('.fixedSideSummary').addClass('ss-unfixed');
	    }
	}
	
	$(window).scroll(function(){
		refreshPosition();
	});
	refreshPosition();
	$('.fixedSideSummary #toc ul').addClass('nav');
	
	
	$('body').mwscrollspy({target: "#toc"});
});