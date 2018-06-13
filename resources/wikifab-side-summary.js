
(function() {

	var header_height = $('#mw-navigation').outerHeight();
	var footer_height = $('.footer-main').outerHeight();
	var sidesummary_height = $('.SideSummary').height();

	function checkOffset() {

		var scroll = $(document).scrollTop();

		if(scroll >= header_height){
			$('.SideSummary').css('position','fixed');
			$('.SideSummary').css('top','0px');
		}else{
			$('.SideSummary').css('position', 'absolute');
		}

		var scrollBottom = $(window).scrollTop() + $(window).height();
	    if(scrollBottom > $('.footer-main').offset().top){
	    	$('.SideSummary').addClass("bottom");
	    } else {
	    	$('.SideSummary').removeClass("bottom");
	    }
	}

	$(document).ready(function() {

		if(window.matchMedia("(min-width: 769px)").matches){
			$(document).scroll(function() {
			    checkOffset();
			});
		}
		
		// Seulement pour SideSummary
		if ($('.SideSummary').length > 0){
			$('.containerBodyWithoutSS').addClass('HasSideSummary');
			//Quand on est à moins de 768px (portables jusqu'à l'ipad)                
			if (window.matchMedia("(max-width: 768px)").matches) {
				$('.containerBodyWithoutSS').css('padding-top', header_height);
				$('.SideSummary').css('width', '80%');
				// Ajout d'un span avec le overlay
				$('.containerBodyWithoutSS').before("<span class=\"PushOverlay\"></span>");

				// Menu fermé de base
				$('.SideSummary').css('margin-left', '-80%');
				$('.PushOverlay').removeClass("active");

				$('.toggle.active').removeClass('active');

				// Bouton pour ouvrir le menu avec un effet de push sur la droite 
				$('.toggle .fa-bars').click(function(){
					$('.PushOverlay').addClass("active");
					$('.SideSummary .vertical-sidebar').css('display', 'block');
					$('.SideSummary').css('margin-left', '0');
					$('body').css('overflow', 'hidden');
					$('.toggle').hide();
				});

				$('.PushOverlay').click(function(){
					$('.SideSummary').css('margin-left', '-80%');
					$('.PushOverlay').removeClass("active");
					$('.toggle').show();
					$('body').css('overflow', 'auto');
				});							
			}
				
			if(window.matchMedia("(min-width: 769px)").matches){

				$('.SideSummary').css('margin-left', '0px');
				$('.containerBodyWithoutSS').addClass("pushBodyLeft");
				$('.containerBodyWithoutSS').removeClass("pushBodyRight");
				
				$('body').on('click', '.toggle .fa-times', function(){
					$('.SideSummary').css('margin-left', '-310px');
					$('.containerBodyWithoutSS').addClass("pushBodyRight");
					$('.containerBodyWithoutSS').removeClass("pushBodyLeft");
					$(this).parent().removeClass('active');
					$(this).parent().addClass('not-active');
				});
				
				$('body').on('click', '.toggle .fa-bars', function(){
					$('.SideSummary').css('margin-left', '0px');
					$('.containerBodyWithoutSS').addClass("pushBodyLeft");
					$('.containerBodyWithoutSS').removeClass("pushBodyRight");
					$(this).parent().removeClass('not-active');
					$(this).parent().addClass('active');
				});
				
				$(window).scroll(function() {    			
					
					var scroll = $(window).scrollTop();
					if (scroll >= header_height) {		    	
				       	$('.SideSummary .vertical-sidebar').addClass('scrolling');
					}
					else {
						$('.SideSummary .vertical-sidebar').removeClass('scrolling');
					}
				});
				// Permet de faire fonctionner le système des flèches avec les sous-menus 

				$('.vertical-sidebar .selflink').parents(".vertical-sidebar li").addClass('summarycollapse');
				$('.vertical-sidebar .selflink').parent().addClass('active');
				
				$( '.vertical-sidebar li ' )
					.filter(function( index ) {
						return $( "li", this ).length > 0 ;
					})
				    .prepend("<i class=\"right-arrow fa fa-chevron-right\" aria-hidden=\"true\"></i>")
				    .prepend("<i class=\"down-arrow fa fa-chevron-down\" aria-hidden=\"true\"></i>");

				
				$('.right-arrow').click(function(){
					$(this).parent().addClass('summarycollapse');
				});
				$('.down-arrow').click(function(){
					$(this).parent().removeClass('summarycollapse');
				});
				
			}
					
	}

	});		
		
})();