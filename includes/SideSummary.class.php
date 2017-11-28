<?php

class SideSummary {
    // Register any render callbacks with the parser
    public static function onParserSetup( &$parser ) {

        // Create a function hook associating the "example" magic word with renderExample()
        $parser->setFunctionHook( 'sideSummary', 'SideSummary::renderSideSummary' );
    }

    //
    public static function renderSideSummary( $parser, $param1) {
        if ((!$param1)){
            $param1 = '__TOC__';
        }
            $out ="<div class=\"vertical-sidebar\">\n";
            $out .= $param1;
            $out .=" <span class=\"closebtn\" >x</span>";
            $out .= "</div>";
            $out .=" <span class=\"openNav\"> <i class=\"fa fa-bars\"> </i></span>";

            return array( $out, 'noparse' => false );

    }


    public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
        $out->addModules('ext.sidesummary.js');
        $out->addModuleStyles('ext.sidesummary.css');
    }
}

?>

