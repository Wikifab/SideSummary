
$(document).ready(function() {


	var initialPosition = 135;

	var H = $(document).height();
	var h = 150 ;

	function refreshPosition() {
		
		var wh = $(window).height();
		var footerPos = null;
		if ($('.footer-main').length) {
			footerPos = $('.footer-main').offset().top;
		}
		
		if (footerPos && $(window).scrollTop() + wh > footerPos) {
			var pos = footerPos - $(window).scrollTop() - wh;
			$('.fixedSideSummary').css('top',pos);
			$('.fixedSideSummary').css('height',"100%");
			$('.fixedSideSummary').css('overflow',"auto");
			$('.fixedSideSummary').addClass('ss-fixed-top');
			$('.fixedSideSummary').removeClass('ss-fixed-bottom');
			$('.fixedSideSummary').removeClass('ss-unfixed');
			
		} else if ($(window).scrollTop() > initialPosition) {
			$('.fixedSideSummary').css('top',"");
			$('.fixedSideSummary').css('height',"100%");
			$('.fixedSideSummary').css('overflow',"auto");
			$('.fixedSideSummary').addClass('ss-fixed-top');
			$('.fixedSideSummary').removeClass('ss-fixed-bottom');
			$('.fixedSideSummary').removeClass('ss-unfixed');
		} else {
			$('.fixedSideSummary').css('top',"");
			$('.fixedSideSummary').css('height',"");
			$('.fixedSideSummary').css('overflow',"");
			$('.fixedSideSummary').removeClass('ss-fixed-top');
			$('.fixedSideSummary').removeClass('ss-fixed-bottom');
			$('.fixedSideSummary').addClass('ss-unfixed');
		}
	}

	if( $('.fixedSideSummary').length) {

		$('.fixedSideSummary').css('clear','both') ;
		h = $('.fixedSideSummary').height() ;

		$('.fixedSideSummary').addClass('ss-unfixed');

		initialPosition = $('.fixedSideSummary').offset().top;

		$(window).scroll(function(){
			refreshPosition();
		});
		refreshPosition();
	}

	$('body').mwscrollspy({target: "#toc"});
});