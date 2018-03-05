
$(document).ready(function() {
	
	$( '.toc' ).each( function () {
		
		$tocToggleLink = $this.find( '.togglelink' ),
		$tocList = $this.find( 'ul' ).eq( 0 );
		if ( $tocList.is( ':hidden' ) ) {
			$tocList.slideDown( 'fast' );
			$tocToggleLink.text( mw.msg( 'hidetoc' ) );
			$this.removeClass( 'tochidden' );
		}
	});
});