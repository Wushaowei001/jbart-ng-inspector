angular.module('jbartIntercept').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('studio/html/auto-complete-popup.html',
    "<div class=\"studio-auto-complete-popup\" style=\"top:{{top}};left:{{left}}\" ng-show=\"autoCompleteOn\">\r" +
    "\n" +
    "\t<table>\r" +
    "\n" +
    "\t\t<tr class=\"item\" ng-repeat=\"(name,value) in scope\" ng-click=\"itemClick(name)\">\r" +
    "\n" +
    "\t\t\t<td class=\"name\"><span>{{name}}</span></td>\r" +
    "\n" +
    "\t\t\t<td class=\"value\" ng-attr-title=\"{{value}}\"><span>{{value}}</span></td>\r" +
    "\n" +
    "\t\t</tr>\r" +
    "\n" +
    "\t</table>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('studio/html/code-mirror-templates.html',
    "<section class=\"ng-code-mirror\">\r" +
    "\n" +
    "\t<select id=\"templates-list\" ng-model=\"currentTemplate\" >\r" +
    "\n" +
    "\t\t<option ng-repeat=\"template in templates\">{{template}}</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "\t<br/>\r" +
    "\n" +
    "\t<codemirror ng-model=\"currentTemplateText\" cursor-pos=\"{{cursorPos}}\" on-ctrl-enter=\"update(value)\"/>\r" +
    "\n" +
    "</section>\r" +
    "\n"
  );


  $templateCache.put('studio/html/insert-in-toolbar.html',
    "<select class=\"insert-in-toolbar\" ng-model=\"newTag\" ng-change=\"insert(newTag)\">\r" +
    "\n" +
    "\t<option>Insert ...</option>\r" +
    "\n" +
    "\t<option ng-repeat=\"tag in htmlTags\">{{tag}}</option>\r" +
    "\n" +
    "</select>\r" +
    "\n"
  );


  $templateCache.put('studio/html/main-window.html',
    "<div class=\"jbart-inspector-toolbar\">\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-select\" ng-click=\"select()\" title=\"select\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-templates\" ng-click=\"showTemplates()\" title=\"show templates\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button jbart-show-scope\" ng-click=\"showScope()\" ng-show=\"scope()\" title=\"show scope\"><span/></button>\r" +
    "\n" +
    "\t<button class=\"jbart-toolbar-button\" ng-click=\"save()\" title=\"Save\">S</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('studio/html/outline.html',
    "<section class=\"studio-outline\">\r" +
    "\n" +
    "\t<section class=\"toolbar\">\r" +
    "\n" +
    "\t\t<button title=\"Edit html\" class=\"toolbar-btn edit-html-btn\" ng-click=\"editHtml()\" />\r" +
    "\n" +
    "\t</section>\r" +
    "\n" +
    "\t<jbart component=\"studio-ng.outlineTree\" data=\"{{templateElem}}\" />\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('studio/html/properties.html',
    "<section class=\"studio-properties-in-dialog\">\r" +
    "\n" +
    "\t<div class=\"studio-propertySheet\">\r" +
    "\n" +
    "\t\t<div class=\"property innerText\" ng-show=\"innerText\">\r" +
    "\n" +
    "\t\t\t<label class=\"property-title\">text:</label>\r" +
    "\n" +
    "\t\t\t<input class=\"property-content jb-studio-primitive-textbox\" ng-model=\"innerText\" ng-keydown=\"propertyKeyDown($event,true)\"/>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"property\" ng-repeat=\"attr in attributes\">\r" +
    "\n" +
    "\t\t\t<label class=\"property-title\">{{attr.name}}:</label>\r" +
    "\n" +
    "\t\t\t<input class=\"propertty-content jb-studio-primitive-textbox\" ng-model=\"attr.value\" ng-keydown=\"propertyKeyDown($event)\"/>\r" +
    "\n" +
    "\t\t\t<button class=\"delete\" ng-click=\"deleteDirective(attr.name)\">&#10006;</button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<select id=\"newDirective\" ng-model=\"newDirective\" ng-change=\"addDirective(newDirective)\">\r" +
    "\n" +
    "\t\t<option selected>+</option>\r" +
    "\n" +
    "\t\t<option ng-repeat=\"dir in directives\">{{dir}}</option>\r" +
    "\n" +
    "\t</select>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('studio/html/templates.html',
    "<section class=\"studio-ng-templates\">\r" +
    "\n" +
    "\t<input ng-model=\"search\" placeholder=\"search template\" jb-selection-search ng-show=\"templates.length > 20\"/>\r" +
    "\n" +
    "\t<ul>\r" +
    "\n" +
    "\t\t<li ng-repeat=\"template in templates | filter:search\" ng-click=\"openTemplate()\" jb-selection>\r" +
    "\n" +
    "\t\t\t<div>{{template}}</div>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</section>"
  );

}]);
