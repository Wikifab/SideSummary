
(function() {
	
	$(document).ready(function() {
		
		// Seulement pour SideSummary
		if ($('.SideSummary').length > 0){
			
			$('.containerBodyWithoutSS').addClass("HasSideSummary");
			
			//Quand on est à moins de 600px (portables)                
			if (window.matchMedia("(max-width: 600px)").matches) {
				$('.buttonCloseNav').show();
				

				$('.SideSummary').css('width', '80%');
				$('.buttonOpen').hide();
				$('.containerBodyWithoutSS').addClass("positionFixed");
				//$('#PushOverlay').addClass("active");
				// Bouton pour ouvrir le menu avec un effet de push sur la droite 
				$('.buttonOpen').click(function(){
					$('.SideSummary').css('width', '80%');
					$('.buttonOpen').hide();
					$('.containerBodyWithoutSS').addClass("positionFixed");
					$('.containerBodyWithoutSS').removeClass("pushBodyLeft");
					//$('#PushOverlay').addClass("active");
					$('.buttonCloseNav').show();
				});
				
				$('.buttonCloseNav').click(function(){
					$('.buttonOpen').show();
					$('.SideSummary').css('width', '0px');
					$('.containerBodyWithoutSS').removeClass("positionFixed");
					$('.containerBodyWithoutSS').removeClass("pushBodyLeft");
					$('.containerBodyWithoutSS').removeClass("pushBodyRight");
					$('.buttonCloseNav').hide();

				});
						
				// Ajouter une interaction fermer le menu sur la zone grisée (portables)
				$('#PushOverlay').click(function(){ // Ou qu'on appuie sur le boutonCloseNav !!!
					$('.buttonCloseNav').hide();
					$('.SideSummary').css('width', '0px');
					$('.buttonOpen').show();
					$('#PushOverlay').removeClass("active");
				});
								
			}
			
				
			if(window.matchMedia("(min-width: 1200px)").matches){
				
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
				        $('.buttonOpen').addClass('hookButtonOpenTop');
					}
					else {
						$('.SideSummary').removeClass('hookMenuTop');
						$('.buttonOpen').removeClass('hookButtonOpenTop');
					}
				});
				
			}
		
		else {
//			// De base le menu est fermé 
//			$('.buttonClose').click(function(){
//			$('.buttonOpen').show();
//			$('.SideSummary').css('width', '0px');
//			$('.containerBodyWithoutSS').addClass("pushBodyRight");
//			$('.containerBodyWithoutSS').removeClass("pushBodyLeft");
//			
//			});
//		
//			$('.buttonOpen').click(function(){
//				$('.buttonClose').show();
//				$('.buttonOpen').hide();
//				$('.SideSummary').css('width', '250px');
//				$('.containerBodyWithoutSS').addClass("pushBodyLeft");
//				$('.containerBodyWithoutSS').removeClass("pushBodyRight");
//			});
//				
		}
			
		// Permet de faire fonctionner le système des flèches avec les sous-menus (avec tous les tailles d'écran)
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

	});		
		
		
	
})();