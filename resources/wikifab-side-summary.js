
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

	function menuGoToCurrent() {

		if ( typeof menuGoToCurrent.run == 'undefined' ) {
        // It has not... perform the initialization
    	    menuGoToCurrent.run = false;
    	}

    	if (!menuGoToCurrent.run){

    		var divElem = document.getElementById('vertical-sidebar');
    		//make sure it's at the top first
    		divElem.scrollTop = 0;
			var chElem = document.getElementsByClassName('selflink')[0];
			var chElemParents = $(chElem).parents('.vertical-sidebar li');
			var scrollTo = chElem.offsetTop;
			if(chElemParents.length != 0){
				var hightestParent = $(chElem).parents('.vertical-sidebar li').last();
				scrollTo = hightestParent.offset().top;
			}
			if(window.matchMedia("(min-width: 769px)").matches){
				var header = document.getElementById('mw-navigation');
				scrollTo -= $(header).outerHeight();
			}
			divElem.scrollTop = scrollTo;
			menuGoToCurrent.run = true;
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
				$('.SideSummary').css('width', 'auto');
				// Ajout d'un span avec le overlay
				$('.containerBodyWithoutSS').before("<span class=\"PushOverlay\"></span>");

				// Menu fermé de base
				$('.SideSummary').css('margin-left', '-100%');
				$('.PushOverlay').removeClass("active");

				$('.toggle.active').removeClass('active');

				// Bouton pour ouvrir le menu avec un effet de push sur la droite 
				$('.toggle').click(function(){
					$('.PushOverlay').addClass("active");
					$('.SideSummary .vertical-sidebar').css('display', 'block');
					$('.SideSummary').css('margin-left', '0');
					$('body').addClass('noscrollbody');
					$('html').addClass('noscrollbody');
					$('.toggle').hide();
					menuGoToCurrent();
				});

				$('.PushOverlay').click(function(){
					$('.SideSummary').css('margin-left', '-100%');
					$('.PushOverlay').removeClass("active");
					$('.toggle').show();
					$('body').removeClass('noscrollbody');
					$('html').removeClass('noscrollbody');
				});

				$('.vertical-sidebar .selflink').parents(".vertical-sidebar li").addClass('MainCurrentChapter').children('a').css('font-weight', "bold");						
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

				$('.vertical-sidebar .selflink').parents(".vertical-sidebar li").addClass('summarycollapse MainCurrentChapter').children('a').css('font-weight', "bold");
				$('.vertical-sidebar .selflink').parent().addClass('active');
				
				$( '.vertical-sidebar li' )
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

				menuGoToCurrent();
				
			}	
	}

	});		
		
})();