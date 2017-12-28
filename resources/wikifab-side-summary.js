
(function() {
	
	$(document).ready(function() {
		
		// Seulement pour SideSummary
		if ($('.SideSummary').length > 0){
			$('.containerBodyWithoutSS').addClass('HasSideSummary');
			//Quand on est à moins de 768px (portables jusqu'à l'ipad)                
			if (window.matchMedia("(max-width: 768px)").matches) {
				// Ajout d'un span avec le overlay
				$('.containerBodyWithoutSS').before("<span class=\"PushOverlay\"></span>");

				// Menu fermé de base
				$('.buttonOpen').show();
				$('.SideSummary').css('width', '0px');
				$('.containerBodyWithoutSS').removeClass("positionFixed");
				$('.PushOverlay').removeClass("active");

				// Bouton pour ouvrir le menu avec un effet de push sur la droite 
				$('.buttonOpen').click(function(){
					$('.SideSummary').css('width', '80%');
					$('.buttonOpen').hide();
					$('.HasSideSummary').addClass("positionFixed");
					$('.PushOverlay').addClass("active");
					console.log("after" + positionPX);

				
				});
				$('.PushOverlay').click(function(){
					$('.buttonOpen').show();
					$('.SideSummary').css('width', '0px');
					$('.HasSideSummary').removeClass("positionFixed");
					$('.PushOverlay').removeClass("active");


				});							
			}
			
				
			if(window.matchMedia("(min-width: 769px)").matches){
				
				$('.buttonClose').show();
				$('.buttonOpen').hide();
				$('.SideSummary').css('width', '250px');
				$('.containerBodyWithoutSS').addClass("pushBodyLeft");
				$('.containerBodyWithoutSS').removeClass("pushBodyRight");
				
				$('.buttonClose').click(function(){
					$('.buttonOpen').show();
					$('.buttonClose').hide();
					$('.SideSummary').css('width', '0px');
					$('.containerBodyWithoutSS').addClass("pushBodyRight");
					$('.containerBodyWithoutSS').removeClass("pushBodyLeft");
					
				});
				
				$('.buttonOpen').click(function(){
					$('.buttonClose').show();
					$('.buttonOpen').hide();
					$('.SideSummary').css('width', '250px');
					$('.containerBodyWithoutSS').addClass("pushBodyLeft");
					$('.containerBodyWithoutSS').removeClass("pushBodyRight");
				});
				
				$(window).scroll(function() {    			
					
					var scroll = $(window).scrollTop();
					if (scroll >= 54) {		    	
				        $('.SideSummary').addClass('hookMenuTop');
				        $('.buttonOpen').addClass('hookButtonTop');
				        $('.buttonClose').addClass('hookButtonTop');

					}
					else {
						$('.SideSummary').removeClass('hookMenuTop');
						$('.buttonOpen').removeClass('hookButtonTop');
						$('.buttonClose').removeClass('hookButtonTop');

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