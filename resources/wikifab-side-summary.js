
(function() {
	
	$(document).ready(function() {
		
		
		$('.vertical-sidebar .selflink').parents(".vertical-sidebar li").addClass('summarycollapse');
	
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
		
		if(window.matchMedia("(min-width: 1200px)").matches){
			$('.openNav').hide();
			$('.vertical-sidebar').css('width','250px');
			$('.vertical-sidebar').css('transition','.01s');
			$('body').addClass("pushBodyLeft");
			$('body').removeClass("pushBodyRight");
		}	
			// Bouton pour ouvrir le menu avec un effet de push sur la droite 
			$('.openNav').click(function(){
				$('.closebtn').show();
				if (window.matchMedia("(max-width: 600px)").matches) {
					$('.vertical-sidebar').css('width', '100%');
				}
				
				else {
					$('.vertical-sidebar').css('width', '250px');
					$('body').addClass("pushBodyLeft");
					$('body').removeClass("pushBodyRight");
				}
				
				
				$('.openNav').hide();
			});
		
		
		//Bouton pour fermer le menu
		$('.closebtn').click(function(){
			$('.vertical-sidebar').css('width', '0px');
			$('body').removeClass("pushBodyLeft");
			$('body').addClass("pushBodyRight");
			$('.openNav').show();
		});
		


		// Permet de suivre avec le menu là où on en est dans la page 
		
		$('body').attr("data-spy","scroll");
		$('body').attr("data-target","#toc");
		$('body').attr("data-offset","20");
		
		$('#toc ul').addClass("nav nav-pills nav-stacked");
		
		$(window).scroll(function() {    

		    var scroll = $(window).scrollTop();

		    if (scroll >= 52) {
		    	
		        $(".openNav").addClass("positionChanged");
		    }
		    else {
		    	$(".openNav").removeClass("positionChanged");
		    }
		});

		
	});
	
})();