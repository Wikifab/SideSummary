
$(document).ready(function() {


	var initialPosition = 135;

	var H = $(document).height();
	var h = 150 ;

	function refreshPosition() {

        //console.log('ss-fixed-top ' + $(document).height() + ':' + H + ' ' + $(document).height() +':' + h + ' ' + (H -h) + ' > ' +$(window).scrollTop() + ' ' + initialPosition);

		if ($(window).scrollTop() > (H -h)) {
	        $('.fixedSideSummary').css('top',(H -h));
	        $('.fixedSideSummary').removeClass('ss-fixed-top');
	        $('.fixedSideSummary').addClass('ss-fixed-bottom');
	        $('.fixedSideSummary').removeClass('ss-unfixed');
		} else if ($(window).scrollTop() > initialPosition) {
	        $('.fixedSideSummary').css('top',"");
	        $('.fixedSideSummary').addClass('ss-fixed-top');
	        $('.fixedSideSummary').removeClass('ss-fixed-bottom');
	        $('.fixedSideSummary').removeClass('ss-unfixed');
	    } else {
	        $('.fixedSideSummary').css('top',"");
	        $('.fixedSideSummary').removeClass('ss-fixed-top');
	        $('.fixedSideSummary').removeClass('ss-fixed-bottom');
	        $('.fixedSideSummary').addClass('ss-unfixed');
	    }
	}

	if( $('.fixedSideSummary').length) {

		H = $(document).height();
		h = $('.fixedSideSummary').height() ;

		$('.fixedSideSummary #toc ul').addClass('nav');

        $('.fixedSideSummary').addClass('ss-unfixed');

		initialPosition = $('.fixedSideSummary').offset().top;

    	$(window).scroll(function(){
    		refreshPosition();
    	});
    	refreshPosition();
	}

	$('body').mwscrollspy({target: "#toc"});
});