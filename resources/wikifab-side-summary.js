
(function() {
	
	$(document).ready(function() {
		// Pour les deux cas (SideSummary et PageSummary)
		

		if (window.matchMedia("(max-width: 600px)").matches) {
					$('.sidePageSummary').css('width', '100%');
					$('.SideSummary').css('width', '100%');
					$('.buttonClose').show();
					$('.buttonOpen').hide();
				}
		
		// Seulement pour SideSummary
		if ($('.SideSummary').length > 0){
			$('body').addClass("HasSideSummary");
			
			// Bouton pour ouvrir le menu avec un effet de push sur la droite 
			$('.buttonOpen').click(function(){
				$('.buttonClose').show();
				$('.sidePageSummary').css('width', '250px');
				$('.SideSummary').css('width', '250px');
				$('body').addClass("pushBodyLeft");
				$('body').removeClass("pushBodyRight");
				
				$('.buttonOpen').hide();

			});
			
			
			//Bouton pour fermer le menu
			$('.buttonClose').click(function(){
				$('.buttonClose').hide();
				$('.sidePageSummary').css('width', '0px');
				$('.SideSummary').css('width', '0px');
				$('body').removeClass("pushBodyLeft");
				$('body').addClass("pushBodyRight");
				$('.buttonOpen').show();
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
			
			
			// Si l'écran est plus grand que 1200px on affiche directement le menu
			if(window.matchMedia("(min-width: 1200px)").matches){
				$('.buttonOpen').hide();
				$('.SideSummary').css('width', '250px');
				$('body').addClass("pushBodyLeft");
				$('body').removeClass("pushBodyRight");
			}
			$(window).scroll(function() {    

			    var scroll = $(window).scrollTop();

			    if (scroll >= 54) {
			    	
			        $('.SideSummary').addClass('hookMenuTop');
			    }
			    else {
			        $('.SideSummary').removeClass('hookMenuTop');

			    }
			});
		
		}		
		
		// Seulemnent pour sidePageSummary
		if($('.sidePageSummary').length > 0 ){
			
			// Bouton pour ouvrir le menu avec un effet de push sur la droite 
			$('.openNav').click(function(){
				$('.closebtn').show();
				if (window.matchMedia("(max-width: 600px)").matches) {
					$('.sidePageSummary').css('width', '100%');
					$('.SideSummary').css('width', '100%');

				}
				$('.sidePageSummary').css('width', '250px');
				$('.SideSummary').css('width', '250px');
				$('body').addClass("pushBodyLeft");
				$('body').removeClass("pushBodyRight");
				
				$('.openNav').hide();

			
			});
			
			
			//Bouton pour fermer le menu
			$('.closebtn').click(function(){
				$('.sidePageSummary').css('width', '0px');
				$('.SideSummary').css('width', '0px');
				$('body').removeClass("pushBodyLeft");
				$('body').addClass("pushBodyRight");
				$('.openNav').show();
			});
			
			// Quand on scroll sur la page on fixe le bouton du menu en haut de la page et le menu
			$(window).scroll(function() {    

			    var scroll = $(window).scrollTop();

			    if (scroll >= 52) {
			    	
			        $(".openNav").addClass("positionChanged");
			        $('.vertical-sidebar').addClass('hookMenu');
			    }
			    else {
			    	$(".openNav").removeClass("positionChanged");
			        $('.vertical-sidebar').removeClass('hookMenu');

			    }
			});
			// Permet de suivre avec le menu là où on en est dans la page 
			$('body').attr("data-spy","scroll");
			$('body').attr("data-target","#toc");
			$('body').attr("data-offset","20");
			
			$('#toc ul').addClass("nav nav-pills nav-stacked");
		}
		

		
	});
	
})();