<?php

namespace SideSummary;

class SideSummary {
	static $summaryName;
	// Register any render callbacks with the parser
	public static function onParserSetup( &$parser ) {


		// Create a function hook associating the "example" magic word with renderExample()
		$parser->setFunctionHook( 'sideSummary', 'SideSummary\\SideSummary::renderSideSummary' );
		$parser->setFunctionHook( 'sidePageSummary', 'SideSummary\\SideSummary::renderSidePageSummary' );

	}

	/**
	 * is sidePageSummary is enabled for namespace, we add call to the parser function
	 *
	 * @param \Article $article
	 * @param \Content $content
	 */
	public static function onArticleAfterFetchContentObject( &$article, \Content &$content = null ) {
		global $wgSidePageSummaryNamespace;
		if (! isset($wgSidePageSummaryNamespace) && $wgSidePageSummaryNamespace) {
			return;
		}

		if (! $content instanceof \WikitextContent || ! $article instanceof \Article) {
			return;
		}
		$text = $content->getNativeData();
		if(strpos($text, '__TOC__') !== false) {
			// do not insert TOC if already present
			return;
		}
		$title = $article->getTitle();
		if ( ! $title) {
			return;
		}
		if ( $title->getNamespace() != -1 && in_array($title->getNamespace(), $wgSidePageSummaryNamespace)) {
			$content = new \WikitextContent('{{#sidePageSummary: __TOC__ }}' . $text);
		}

	}

	public static function renderSideSummary(\Parser $parser, $param1) {
		static $isRecursion = false;

		if (!($isRecursion)){
			$isRecursion = true;
			$param1 = $parser->internalParse($param1, false);
			$isRecursion = false;
		}
		self::$summaryName = $param1;
		return '' ;

	}
	public static function renderSidePageSummary( \Parser $parser, $param1) {
		if ((!$param1)){
			$param1 = '__TOC__';
		}
		$out ="<div class=\"vertical-sidebar-page sidePageSummary\">\n";
		$out .= $param1;
		$out .= "</div>";

		return array( $out, 'noparse' => false );

	}

	public static function onSkinTemplateNavigation(\SkinTemplate  &$skin, &$content_navigation ) {



		if (!(self::$summaryName)){
			return true;
		}

		$content_navigation ["SideSummary"]=array (
			"summary" => array (
				"name" => wfMessage(self::$summaryName),
				"redundant"=>true
			)
		);


		return true;
	}
	public static function onBeforePageDisplay( \OutputPage &$out, \Skin &$skin ) {

		$out->addModules('ext.sidesummary.js');
		$out->addModuleStyles('ext.sidesummary.css');

		$title = $out->getTitle();
		if(!$title || $title->getNamespace() < 0 ){
			return true;
		}

		$contentWikiPage = $out->getWikiPage();
		if(!($contentWikiPage)){
			return true;
		}
		$content = $contentWikiPage ->getContent();
		if(!($content)){
			return true;
		}
		$contentData = $content ->getNativeData();
		if(!($contentData)){
			return true;
		}
		$pattern = "{{\#sideSummary:\s+([a-zA-Z]+)\s+}}";
		if (preg_match($pattern, $contentData, $matches)){
			self::$summaryName = $matches[1];

		}

		var_dump($out->getHTML());
	}
}

?>
