<?php
namespace Skins\Chameleon\Components;

use MWNamespace;
use Skins\Chameleon\ChameleonTemplate;
use Skins\Chameleon\IdRegistry;

class SideSummary extends Component {

    /**
     * Builds the HTML code for this component
     *
     * @return string the HTML code
     */
    public function getHtml() {

        $contentNavigation = $this->getSkinTemplate()->data[ 'content_navigation' ];
        if(!isset($contentNavigation['SideSummary'])) {
            return '<div class="sideSummary"></div>';
        }

        $ret = $this->indent() . '<div class="SideSummary">';
        $this->indent(+1);
        $ret .= $this->indent() ."<div class=\"vertical-sidebar\">";
        $ret .= $this->indent() . $contentNavigation['SideSummary']['summary']['name'];
        $ret .=$this->indent() . "<span class=\"closebtn\" >x</span>";
        $ret .= $this->indent() . "</div>";
        $ret .=$this->indent(). " <span class=\"openNav\"> <i class=\"fa fa-bars\"> </i></span>";
        $this->indent(-1);
        $ret .=$this->indent(). "</div>";
        return $ret;
    }
}
