# SideSummary

## Description : 
This extension allow you to create two different summaries :
-A menu which use the __TOC__ and when you scroll on a page using this summary, the menu will "follow" users.
- Or an "accordeon" menu which contains all pages of the website, like a bookmenu, and allows users to surf on. 

## Installation 
Firstly, the extension "SideSummary" depends of the skin "Chameleon", without it you can't use "SideSummary".
Download and extract the extension file inside your "extension" repository. The extension's repository must be called :"SideSummary".

Once you load the extension, at the end of your LocalSettings.php file add the following line :

	wfLoadExtension('SideSummary');

## Use

### A page summary
If you want a page summary which contains titles and subtitles parts and follows users when they scroll down or top of the page, you need to add this line in your page or template. 

	{{#sideSummary:{{__TOC__}}}}


### Website map 
On the other hand, if you need a kind of map for your website you can use this summary. 
First of all, add this component in your layout, where you need summary :

	<component type="SideSummary"> 
	</component>
	
Then, create a Mediawiki:PageName page with bullet points, and each item is page's title.  

 * [[Level 1]]
 ** [[SubLevel 1.1]]
 ** [[SubLevel 1.2]]
 * [[Level2]]
 ** [[SubLevel 2.1]]
 *** [[SubSubLevel 2.1.1]]
 *** [[SubSubLevel 2.1.2]]
 ** [[SubLevel 2.2]]
 *** [[SubSubLevel 2.2.1]]
 *** [[SubSubLevel 2.2.2]]
	


After that, at the beggining of each page add this line, the summary will appear only on this pages.

	{{#sideSummary:NomDeLaPageMediawiki}}
	
	

