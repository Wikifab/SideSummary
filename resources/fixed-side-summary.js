
$(document).ready(function() {


	var initialPosition = 135;

	function refreshPosition() {

		if ($(window).scrollTop() > initialPosition) {
	        $('.fixedSideSummary').css('height',"100%");
	        $('.fixedSideSummary').css('overflow',"auto");
			$('.fixedSideSummary').addClass('ss-fixed-top');
			$('.fixedSideSummary').removeClass('ss-fixed-bottom');
			$('.fixedSideSummary').removeClass('ss-unfixed');
		} else {
	        $('.fixedSideSummary').css('height',"");
	        $('.fixedSideSummary').css('overflow',"");
			$('.fixedSideSummary').removeClass('ss-fixed-top');
			$('.fixedSideSummary').removeClass('ss-fixed-bottom');
			$('.fixedSideSummary').addClass('ss-unfixed');
		}
	}

	if( $('.fixedSideSummary').length) {

		$('.fixedSideSummary').css('clear','both') ;
		
        $('.fixedSideSummary').addClass('ss-unfixed');

		initialPosition = $('.fixedSideSummary').offset().top;

    	$(window).scroll(function(){
    		refreshPosition();
    	});
    	refreshPosition();
	}

	$('body').mwscrollspy({target: "#toc"});
});