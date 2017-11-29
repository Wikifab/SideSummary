<?php

class SideSummary {
    static $summaryName;
    // Register any render callbacks with the parser
    public static function onParserSetup( &$parser ) {

        // Create a function hook associating the "example" magic word with renderExample()
        $parser->setFunctionHook( 'sideSummary', 'SideSummary::renderSideSummary' );
    }

    public static function renderSideSummary(Parser $parser, $param1) {
        static $isRecursion = false;

        if ((!$param1)){
            $param1 = '__TOC__';
        }
        if (!($isRecursion)){
            $isRecursion = true;
            $param1 = $parser->internalParse($param1, false);
            $isRecursion = false;
        }
        self::$summaryName = $param1;
        return '' ;

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
    public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin ) {
        $out->addModules('ext.sidesummary.js');
        $out->addModuleStyles('ext.sidesummary.css');
    }
}

?>

