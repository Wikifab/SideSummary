
$(document).ready(function() {
	
	$( '.toc' ).each( function () {
		
		$this = $( this );
		
		$tocToggleLink = $this.find( '.togglelink' );
		$tocList = $this.find( 'ul' ).eq( 0 );
		if ( $tocList.is( ':hidden' ) ) {
			// case where toggle link already added : we show the toc
			$tocList.slideDown( 'fast' );
			$tocToggleLink.text( mw.msg( 'hidetoc' ) );
			$this.removeClass( 'tochidden' );
		} else {
			if( ! $tocToggleLink.length ) {
				// if toogle link not yet added by mw, we add it, and hide it, to avoid mw add it
				$tocTitle = $this.find( '.toctitle, #toctitle' );
				$tocToggleLink = $( '<a role="button" style="display:hidden" tabindex="0" class="togglelink"></a>' );
				$tocTitle.append($tocToggleLink);
			}
			
		}
	});
});