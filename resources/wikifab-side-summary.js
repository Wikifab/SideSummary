
(function() {
	
	$(document).ready(function() {
		$('body').attr("data-spy","scroll");
		$('body').attr("data-target","#toc");
		$('body').attr("data-offset","20");
		
		
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
			
		// Bouton pour ouvrir le menu avec un effet de push sur la droite 
		$('.openNav').click(function(){
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
		

		$('#toc ul').addClass("nav nav-pills nav-stacked");

		// Permet de suivre avec le menu là où on en est dans la page 
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