
(function() {
	
	$(document).ready(function() {
		$('body').attr("data-spy","scroll");
		$('body').attr("data-target","#toc");
		$('body').attr("data-offset","20");
		
		$('#toc ul').addClass("nav nav-pills nav-stacked");
		
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
		$('.closebtn').click(function(){
			$('.vertical-sidebar').css('width', '0px');
			$('body').removeClass("pushBodyLeft");
			$('body').addClass("pushBodyRight");
			$('.openNav').show();
		});
		
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