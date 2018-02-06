(function() {
	
	$(document).ready(function() {
		
		// Seulemnent pour sidePageSummary
		if($('.sidePageSummary').length > 0 ){
			
			// Permet de mettre toute la div entre le header et le body
			$('.vertical-sidebar-page').insertBefore("#bodyContent");
		
			//Quand on est à moins de 992px 				
			if (window.matchMedia("(max-width: 992px)").matches) {
				$('.sidePageSummary').css('width', '100%');
				$('#bodyContent').addClass('bodyPushBottom');
				$('.sidePageSummary').addClass('verticalMobile');
				$('#firstHeading').css('margin-top','20px');
				
			}
			if (window.matchMedia("(min-width: 993px)").matches) {

				$('#bodyContent').addClass('bodyPushWhenSidePage');

				// Quand on scroll sur la page on fixe le bouton du menu en haut de la page et le menu
				$(window).scroll(function() {    
	
				    var scroll = $(window).scrollTop();
				    if (scroll >= 210) {			    	
				    	$('.sidePageSummary').addClass('hookMenu');
				    	$('.sidePageSummary').removeClass('AlwaysSeeMenu');

				    }			   			   			    
				    else {
				    	$('.sidePageSummary').removeClass('hookMenu');
				    }
				});

				// Quand on scroll et qu'on arrive à l'élément footer, on remet la position absolute. 
				$(window).scroll(function() {
					if ($('.footerdata').length) {
						  var hT = $('.footerdata').offset().top;
						  var hH = $('.footerdata').outerHeight() - 110;
						  var wH = $(window).height();
						  var wS = $(this).scrollTop();
					      if (wS > hT+hH-wH){
					    	  $('.sidePageSummary').removeClass('hookMenu');
					    	  $('.sidePageSummary').addClass('AlwaysSeeMenu');
						   }
					}
				});
				
				// Permet de suivre avec le menu là où on en est dans la page 
				$('body').attr("data-offset","20");
				$('body').scrollspy({target: "#toc"});
				//$('body').css("position","relative");
				//$('body').attr("data-spy","scroll");
				//$('body').attr("data-target","#toc");
				//$('body').attr("data-offset","20");
				
				$('#toc ul').addClass("nav nav-pills nav-stacked");
			}
					
		}
	});
//	
})();
	
	
	
//	