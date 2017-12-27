(function() {
	
	$(document).ready(function() {
		// Seulemnent pour sidePageSummary
	
		if($('.sidePageSummary').length > 0 ){
			
			// Bouton pour ouvrir le menu avec un effet de push sur la droite 
			$('.openNav').click(function(){
				$('.closebtn').show();
				if (window.matchMedia("(max-width: 600px)").matches) {
					$('.sidePageSummary').css('width', '80%');
					$('#PushOverlay').addClass("active");
				}
				$('.sidePageSummary').css('width', '250px');
				$('body').addClass("pushBodyLeft");
				$('body').removeClass("pushBodyRight");
				
				$('.openNav').hide();

			
			});
			
			
			//Bouton pour fermer le menu
			$('.closebtn').click(function(){
				$('.sidePageSummary').css('width', '0px');
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
	
	
	
	