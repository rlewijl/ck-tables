




/*
     FILE ARCHIVED ON 17:58:57 mar 18, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:26:38 cze 20, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var JCaption=new Class({initialize:function(b){this.selector=b;var a=$$(b);a.each(function(c){this.createCaption(c)},this)},createCaption:function(c){var b=document.createTextNode(c.title);var a=document.createElement("div");var e=document.createElement("p");var d=c.getAttribute("width");var f=c.getAttribute("align");if(!d){d=c.width}if(!f){f=c.getStyle("float")}if(!f){f=c.style.styleFloat}if(f==""||!f){f="none"}e.appendChild(b);e.className=this.selector.replace(".","_");c.parentNode.insertBefore(a,c);a.appendChild(c);if(c.title!=""){a.appendChild(e)}a.className=this.selector.replace(".","_");a.className=a.className+" "+f;a.setAttribute("style","float:"+f);a.style.width=d+"px"}});document.caption=null;window.addEvent("load",function(){var a=new JCaption("img.caption");document.caption=a});