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

    public static function onSkinTemplateNavigation( &$page, &$content_navigation ) {
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
    }
}

?>
