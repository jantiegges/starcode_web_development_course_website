"use strict";(self.webpackChunkstarcode_web_development_course_website=self.webpackChunkstarcode_web_development_course_website||[]).push([[3359],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,p=d["".concat(u,".").concat(m)]||d[m]||f[m]||i;return t?r.createElement(p,l(l({ref:n},c),{},{components:t})):r.createElement(p,l({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={},l="Aufgabe 4: CSS Datei erstellen und zu HTML Datei hinzuf\xfcgen",s={unversionedId:"einf\xfchrung-in-html-und-css/aufgabe-4-css-datei-erstellen",id:"einf\xfchrung-in-html-und-css/aufgabe-4-css-datei-erstellen",title:"Aufgabe 4: CSS Datei erstellen und zu HTML Datei hinzuf\xfcgen",description:"1. Erstelle eine neue Datei mit dem Namen style.css im Ordner deines Projektes.",source:"@site/docs/2-einf\xfchrung-in-html-und-css/aufgabe-4-css-datei-erstellen.md",sourceDirName:"2-einf\xfchrung-in-html-und-css",slug:"/einf\xfchrung-in-html-und-css/aufgabe-4-css-datei-erstellen",permalink:"/starcode_web_development_course_website/docs/einf\xfchrung-in-html-und-css/aufgabe-4-css-datei-erstellen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Aufgabe 3: Erstelle deine ersten HTML Elemente",permalink:"/starcode_web_development_course_website/docs/einf\xfchrung-in-html-und-css/aufgabe-3-html-elemente"},next:{title:"Aufgabe 5: Farben mit CSS",permalink:"/starcode_web_development_course_website/docs/einf\xfchrung-in-html-und-css/aufgabe-5-farben-mit-css"}},u={},o=[],c={toc:o},d="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aufgabe-4-css-datei-erstellen-und-zu-html-datei-hinzuf\xfcgen"},"Aufgabe 4: CSS Datei erstellen und zu HTML Datei hinzuf\xfcgen"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Erstelle eine neue Datei mit dem Namen ",(0,a.kt)("inlineCode",{parentName:"li"},"style.css")," im Ordner deines Projektes."),(0,a.kt)("li",{parentName:"ol"},"\xd6ffne nun die HTML Datei, die du in der vorherigen Aufgabe erstellt hast."),(0,a.kt)("li",{parentName:"ol"},"F\xfcge den folgenden Code in den Kopfbereich der HTML Datei ein:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="style.css" />\n')),(0,a.kt)("p",null,"Probier erstmal selbst aus, die CSS Datei zu erstellen und zu verlinken. Wenn du Hilfe brauchst, kannst du dir die L\xf6sung anschauen."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"L\xf6sung"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Meine Website</title>\n    <link rel="stylesheet" href="style.css" />\n  </head>\n  <body>\n    <h1>Martina Mustermann</h1>\n    <p>Ich bin in der 8. Klasse und wohne in Berlin.</p>\n  </body>\n</html>\n'))))}f.isMDXComponent=!0}}]);