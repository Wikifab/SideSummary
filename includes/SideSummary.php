<?php
namespace Skins\Chameleon\Components;


class SideSummary extends Component {

    /**
     * Builds the HTML code for this component
     *
     * @return string the HTML code
     */
    public function getHtml() {

        $contentNavigation = $this->getSkinTemplate()->data[ 'content_navigation' ];

        if(!isset($contentNavigation['SideSummary'])) {
            return '';
        }
        $ret =$this->indent(). " <span class=\"buttonOpen\"> <i class=\"fa fa-bars\"> </i></span>";
        $ret .=$this->indent() . "<span class=\"buttonClose\" ><i class=\"fa fa-times\"></i></span>";

        $ret .= $this->indent() . '<div class="SideSummary">';
        $this->indent(+1);
        $ret .= $this->indent() ."<div class=\"vertical-sidebar\">";
        $ret .= $this->indent() . $contentNavigation['SideSummary']['summary']['name'];
        $ret .= $this->indent() . "</div>";
        $this->indent(-1);
        $ret .=$this->indent(). "</div>";
        return $ret;
    }
}
