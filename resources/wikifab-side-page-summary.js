(function() {

	$(document).ready(function() {

		// Seulemnent pour sidePageSummary
		if($('.sidePageSummary').length > 0 ){

			// Permet de mettre toute la div entre le header et le body
			$('.vertical-sidebar-page').insertAfter("#bodyContent");

			//Quand on est à moins de 992px
			if (window.matchMedia("(max-width: 992px)").matches) {
				$('.sidePageSummary').css('width', '100%');
				$('#bodyContent').addClass('bodyPushBottom');
				$('.sidePageSummary').addClass('verticalMobile');
				$('#firstHeading').css('margin-top','20px');

			}
			if (window.matchMedia("(min-width: 993px)").matches) {

				$('#bodyContent').addClass('bodyPushWhenSidePage');

				$(window).scroll(function() {
					if ($('.sidePageSummary').length) {
						var hStart = $('#bodyContent').offset().top;
						var hEnd = $('.footer-main').offset().top;
						var scroll =  $(window).scrollTop();
						var wH = $(window).height();

						if (scroll <= hStart) {
							// en debut de page : position 'normale'
							$('.sidePageSummary').removeClass('hookMenu');
							$('.sidePageSummary').removeClass('AlwaysSeeMenu');
						} else if (scroll + wH > hEnd) {
							// en fin de page : on colle le sommaire en bas :
							$('.sidePageSummary').removeClass('hookMenu');
							$('.sidePageSummary').addClass('AlwaysSeeMenu');
						} else {
							// en milieu de page : sommaire collé en haut de la fenetre
							$('.sidePageSummary').addClass('hookMenu');
							$('.sidePageSummary').removeClass('AlwaysSeeMenu');
						}
					}
				});

				// Permet de suivre avec le menu là où on en est dans la page
//				$('body').css('position', 'relative');
//				$('body').attr("data-offset","20");
//				$('body').scrollspy({target: "#toc"});
				$('body').css("position","relative");
				$('body').attr("data-spy","scroll");
				$('body').attr("data-target","#toc");
				$('body').attr("data-offset","20");

				$('body').mwscrollspy({target: "#toc"});

				$('#toc ul').addClass("nav nav-pills nav-stacked");
			}

		}
	});
//
})();



//