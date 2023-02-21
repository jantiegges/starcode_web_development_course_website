"use strict";(self.webpackChunkstarcode_web_development_course_website=self.webpackChunkstarcode_web_development_course_website||[]).push([[6149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,p=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(p,l(l({ref:t},b),{},{components:n})):r.createElement(p,l({ref:t},b))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=m;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={},l="Aufgabe 3: Hobbies-Seite erstellen",a={unversionedId:"vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",id:"vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",title:"Aufgabe 3: Hobbies-Seite erstellen",description:"In Aufgabe 1 haben wir ja bereits unsere Hobbies zu unserer Website hinzugef\xfcgt. Allerdings befinden sich die Hobbies noch auf der Startseite. In dieser Aufgabe wollen wir eine eigene Seite f\xfcr unsere Hobbies erstellen.",source:"@site/docs/3-vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen.md",sourceDirName:"3-vertiefung-html-und-css",slug:"/vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",permalink:"/starcode_web_development_course_website/docs/vertiefung-html-und-css/aufgabe-3-hobbies-seite-erstellen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 2: Link zur Lieblingssehensw\xfcrdigkeit",permalink:"/starcode_web_development_course_website/docs/vertiefung-html-und-css/aufgabe-2-link-zur-lieblingssehensw\xfcrdigkeit"},next:{title:"Aufgabe 4: Divs Unterteilung",permalink:"/starcode_web_development_course_website/docs/vertiefung-html-und-css/aufgabe-4-divs-unterteilung"}},o={},u=[],b={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aufgabe-3-hobbies-seite-erstellen"},"Aufgabe 3: Hobbies-Seite erstellen"),(0,i.kt)("p",null,"In Aufgabe 1 haben wir ja bereits unsere Hobbies zu unserer Website hinzugef\xfcgt. Allerdings befinden sich die Hobbies noch auf der Startseite. In dieser Aufgabe wollen wir eine eigene Seite f\xfcr unsere Hobbies erstellen."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Erstelle eine neue Datei mit dem Namen ",(0,i.kt)("inlineCode",{parentName:"li"},"hobbies.html")," im Ordner deines Projektes."),(0,i.kt)("li",{parentName:"ol"},"Kopiere den Inhalt von index.html in die neue Datei."),(0,i.kt)("li",{parentName:"ol"},'\xc4ndere den Titel der Website in "Meine Hobbies".'),(0,i.kt)("li",{parentName:"ol"},"L\xf6sche alles au\xdfer den Absatz mit den Hobbies und dem Bild.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Meine Hobbies</title>\n  </head>\n  <body>\n    <p>Meine Hobbies sind:\n    <ul>\n        <li>Programmieren</li>\n        <li>Fu\xdfball</li>\n        <li>Zeichnen</li>\n    </ul>\n    </p>\n    <img src="https://cms.sachsen.schule/fileadmin/_migrated/pics/Informatik.gif"/>\n  </body>\n</html>\n'))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},'L\xf6sche den Absatz mit dem Text "Meine Hobbies sind:" auf der Seite ',(0,i.kt)("inlineCode",{parentName:"li"},"index.html"),"."),(0,i.kt)("li",{parentName:"ol"},'Erstelle einen neuen Absatz auf der Startseite mit dem Text "Meine Hobbies findest du hier". F\xfcge einen Link zu der Hobbies-Seite ein. (Tipp: Du kannst den Link mit dem Text "hier" erstellen.)')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"L\xf6sung"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<p>Meine Hobbies findest du <a href="hobbies.html">hier</a>.</p>\n'))))}d.isMDXComponent=!0}}]);