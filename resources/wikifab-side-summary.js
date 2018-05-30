
(function() {

	var header_height = $('#mw-navigation').height();
	var footer_height = $('.footer-main').height();
	var sidesummary_height = $('.SideSummary').height();

	function checkOffset() {
		if($(document).scrollTop() > header_height){
			$('.SideSummary').css('position', 'fixed');
			$('.SideSummary').css('top', '0');
		}else{
			$('.SideSummary').css('position', 'initial');
			$('.SideSummary').css('top', 'initial');
		}

		var scrollBottom = $(window).scrollTop() + $(window).height();
	    if(scrollBottom > $('.footer-main').offset().top){
	    	$('.SideSummary').addClass("bottom");
	    } else {
	    	$('.SideSummary').removeClass("bottom");
	    }
	}

	$(document).ready(function() {

    	$(document).scroll(function() {
		    checkOffset();
		});
		
		// Seulement pour SideSummary
		if ($('.SideSummary').length > 0){
			$('.containerBodyWithoutSS').addClass('HasSideSummary');
			//Quand on est à moins de 768px (portables jusqu'à l'ipad)                
			if (window.matchMedia("(max-width: 768px)").matches) {
				$('.SideSummary').css('width', '80%');
				// Ajout d'un span avec le overlay
				$('.containerBodyWithoutSS').before("<span class=\"PushOverlay\"></span>");

				// Menu fermé de base
				$('.SideSummary').css('margin-left', '-80%');
				$('.containerBodyWithoutSS').removeClass("positionFixed");
				$('.PushOverlay').removeClass("active");

				// Bouton pour ouvrir le menu avec un effet de push sur la droite 
				$('.toggle.active').click(function(){
					$('.HasSideSummary').addClass("positionFixed");
					$('.PushOverlay').addClass("active");
				});
				$('.PushOverlay').click(function(){
					$('.buttonOpen').show();
					$('.SideSummary').css('margin-left', '-80%');
					$('.HasSideSummary').removeClass("positionFixed");
					$('.PushOverlay').removeClass("active");
				});							
			}
			
				
			if(window.matchMedia("(min-width: 769px)").matches){

				$('.SideSummary').css('margin-left', '0px');
				$('.containerBodyWithoutSS').addClass("pushBodyLeft");
				$('.containerBodyWithoutSS').removeClass("pushBodyRight");
				
				$('body').on('click', '.toggle.active', function(){
					$('.SideSummary').css('margin-left', '-310px');
					$('.containerBodyWithoutSS').addClass("pushBodyRight");
					$('.containerBodyWithoutSS').removeClass("pushBodyLeft");
					$(this).removeClass('active');
					$(this).addClass('not-active');
					$(this).find('i.fa-times').removeClass('fa-times').addClass('fa-bars');
				});
				
				$('body').on('click', '.toggle.not-active', function(){
					console.log('it works');
					$('.SideSummary').css('margin-left', '0px');
					$('.containerBodyWithoutSS').addClass("pushBodyLeft");
					$('.containerBodyWithoutSS').removeClass("pushBodyRight");
					$(this).removeClass('not-active');
					$(this).addClass('active');
					$(this).find('i.fa-bars').removeClass('fa-bars').addClass('fa-times');
				});
				
				$(window).scroll(function() {    			
					
					var scroll = $(window).scrollTop();
					if (scroll >= header_height) {		    	
				        $('.containerBodyWithoutSS.pushBodyLeft').css('margin-left', '330px');
				       	$('.SideSummary .vertical-sidebar').addClass('scrolling');
					}
					else {
				        $('.containerBodyWithoutSS').css('margin-left', '0px');
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