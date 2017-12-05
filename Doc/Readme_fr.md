# SideSummary

## Description : 

Cette extension permet de mettre en place deux types de menus : 
- Soit un menu à base du TOC, qui suit le défilement de la page lorsque l'utilisateur scroll,
- Soit un menu qui permet de naviguer dans l'architecture même du site avec un système accordéon.

## Installation 
Premièrement, l'extension "SideSummary" ne peut fonctionner correctement sans la skin "Chameleon". 

Télécharger et extraire l'extension. La placer dans le dossier "extension" de votre projet, et le dossier de l'extension en elle-même doit aussi se nommer : SideSummary.

Une fois l'extension chargée, à la fin du fichier LocalSettings.php de votre site, entrez la ligne suivante : 

	wfLoadExtension('SideSummary');

## Utilisation

### Menu d'une page (sidepageSummary)

Si vous désirez un menu pour une page qui suit l'utilisateur lors du scroll le long de la page,
vous devez ajouter la ligne suivante dans votre page (ou dans le modèle utilisé par votre page)

	{{#sideSummary:{{__TOC__}}}}


### Plan du site sur chaque page sous forme de menu
Il faut tout d'abord ajouter un composant dans le layout là où vous mettez le menu :

	<component type="SideSummary"> 
	</component>
	
Ensuite vous créez une page Mediawiki:NomDeLaPage avec du contenu wikitext en liste à puce qui représente le plan du site . Chaque item est le nom d'une page existante. 

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
	

Ensuite en début de chaque page qui doit posséder ce menu sur le côté vous devez mettre :

	{{#sideSummary:NomDeLaPageMediawiki}}
	
	

