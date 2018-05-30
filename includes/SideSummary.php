<?php
namespace Skins\Chameleon\Components;

use Action;
use MWNamespace;
use Skins\Chameleon\ChameleonTemplate;
use Skins\Chameleon\IdRegistry;


class SideSummary extends Component {


    public function __construct( $template, \DOMElement $domElement = null, $indent = 0 , $html='') {

        parent::__construct( $template, $domElement, $indent );

        // add classes for the normal case where the page tools are displayed as a first class element;
        // these classes should be removed if the page tools are part of another element, e.g. nav bar
        $this->addClasses( 'list-inline text-center' );
    }

    /**
     * Builds the HTML code for this component
     *
     * @return string the HTML code
     */
    public function getHtml() {

        $summary_name = $this->getSkinTemplate()->getSkin()->getOutput()->getProperty( 'SummaryName');

        if(!$summary_name) {
            return '';
        }
        $ret = $this->indent() . '<div id="SideSummary" class="SideSummary">';
        $ret .= $this->indent(). " <span class=\"toggle active\"> <i class=\"fa fa-times\"> </i></span>";
        $this->indent(+1);
        $ret .= $this->indent() ."<div class=\"vertical-sidebar-parent\">";
        $this->indent(+1);
        $ret .= $this->indent() ."<div id=\"vertical-sidebar\" class=\"vertical-sidebar\">";
        $ret .= $this->indent() . wfMessage($summary_name);
        $ret .= $this->indent() . "</div>";
        $this->indent(-1);
        $ret .= $this->indent() . "</div>"; 
        $this->indent(-1);
        $ret .= $this->indent() . "</div>";
        return $ret;
    }
}
