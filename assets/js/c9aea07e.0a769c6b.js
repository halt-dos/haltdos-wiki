"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[15962],{3905:(A,g,C)=>{C.d(g,{Zo:()=>i,kt:()=>c});var I=C(67294);function e(A,g,C){return g in A?Object.defineProperty(A,g,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[g]=C,A}function t(A,g){var C=Object.keys(A);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(A);g&&(I=I.filter((function(g){return Object.getOwnPropertyDescriptor(A,g).enumerable}))),C.push.apply(C,I)}return C}function r(A){for(var g=1;g<arguments.length;g++){var C=null!=arguments[g]?arguments[g]:{};g%2?t(Object(C),!0).forEach((function(g){e(A,g,C[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(C)):t(Object(C)).forEach((function(g){Object.defineProperty(A,g,Object.getOwnPropertyDescriptor(C,g))}))}return A}function n(A,g){if(null==A)return{};var C,I,e=function(A,g){if(null==A)return{};var C,I,e={},t=Object.keys(A);for(I=0;I<t.length;I++)C=t[I],g.indexOf(C)>=0||(e[C]=A[C]);return e}(A,g);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);for(I=0;I<t.length;I++)C=t[I],g.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(A,C)&&(e[C]=A[C])}return e}var o=I.createContext({}),a=function(A){var g=I.useContext(o),C=g;return A&&(C="function"==typeof A?A(g):r(r({},g),A)),C},i=function(A){var g=a(A.components);return I.createElement(o.Provider,{value:g},A.children)},l="mdxType",s={inlineCode:"code",wrapper:function(A){var g=A.children;return I.createElement(I.Fragment,{},g)}},p=I.forwardRef((function(A,g){var C=A.components,e=A.mdxType,t=A.originalType,o=A.parentName,i=n(A,["components","mdxType","originalType","parentName"]),l=a(C),p=e,c=l["".concat(o,".").concat(p)]||l[p]||s[p]||t;return C?I.createElement(c,r(r({ref:g},i),{},{components:C})):I.createElement(c,r({ref:g},i))}));function c(A,g){var C=arguments,e=g&&g.mdxType;if("string"==typeof A||e){var t=C.length,r=new Array(t);r[0]=p;var n={};for(var o in g)hasOwnProperty.call(g,o)&&(n[o]=g[o]);n.originalType=A,n[l]="string"==typeof A?A:e,r[1]=n;for(var a=2;a<t;a++)r[a]=C[a];return I.createElement.apply(null,r)}return I.createElement.apply(null,C)}p.displayName="MDXCreateElement"},56512:(A,g,C)=>{C.r(g),C.d(g,{assets:()=>a,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>i});C(67294);var I=C(3905);function e(){return e=Object.assign||function(A){for(var g=1;g<arguments.length;g++){var C=arguments[g];for(var I in C)Object.prototype.hasOwnProperty.call(C,I)&&(A[I]=C[I])}return A},e.apply(this,arguments)}function t(A,g){if(null==A)return{};var C,I,e=function(A,g){if(null==A)return{};var C,I,e={},t=Object.keys(A);for(I=0;I<t.length;I++)C=t[I],g.indexOf(C)>=0||(e[C]=A[C]);return e}(A,g);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);for(I=0;I<t.length;I++)C=t[I],g.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(A,C)&&(e[C]=A[C])}return e}const r={sidebar_position:50},n="KB: 1050",o={unversionedId:"kb/waf/kb-1050",id:"version-6.0/kb/waf/kb-1050",title:"KB: 1050",description:"Problem Statement",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1050.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1050",permalink:"/v6/kb/waf/kb-1050",draft:!1,tags:[],version:"6.0",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"kb_sidebar",previous:{title:"KB: 1049",permalink:"/v6/kb/waf/kb-1049"},next:{title:"KB: 1051",permalink:"/v6/kb/waf/kb-1051"}},a={},i=[],l={toc:i},s="wrapper";function p(A){var{components:g}=A,r=t(A,["components"]);return(0,I.kt)(s,e({},l,r,{components:g,mdxType:"MDXLayout"}),(0,I.kt)("h1",e({},{id:"kb-1050"}),"KB: 1050"),(0,I.kt)("h1",e({},{id:"how-a-user-extract-or-set-a-custom-variable-by-using-variable-rules-in-haltdos-waf"}),"How a user extract or set a custom variable by using Variable Rules in Haltdos WAF?"),(0,I.kt)("p",null,(0,I.kt)("strong",{parentName:"p"},"Problem Statement")),(0,I.kt)("p",null,"Client wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped"),(0,I.kt)("p",null,(0,I.kt)("strong",{parentName:"p"},"Solution")),(0,I.kt)("p",null,"The user can make use of Haltdos WAF Variable rule features."),(0,I.kt)("ol",null,(0,I.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"kb-1050",src:C(65391).Z,width:"1822",height:"607"})),(0,I.kt)("ol",e({},{start:2}),(0,I.kt)("li",{parentName:"ol"},"Go to Stack > WAF > Listener > Variables > Add Variables > Save changes.")),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"kb-1050",src:C(73459).Z,width:"1818",height:"869"})),(0,I.kt)("p",null,"3.After configuring, ",(0,I.kt)("strong",{parentName:"p"},"Variable Rule")," go to the Profiles > Default setting > Click on rules > Behaviour rules."),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"kb-1050",src:C(38530).Z,width:"1824",height:"872"})),(0,I.kt)("ol",e({},{start:4}),(0,I.kt)("li",{parentName:"ol"},"Configure ",(0,I.kt)("strong",{parentName:"li"},"Behavior Rule")," > Click on Save Changes")),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"kb-1050",src:C(96619).Z,width:"1822",height:"934"})),(0,I.kt)("p",null,"5.We have to open listener in the browser and refresh the page to check whether the rule is working or not."),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"kb-1050",src:C(25488).Z,width:"1573",height:"456"})),(0,I.kt)("p",null,"As you can see that from above picture request is dropped because we set the condition and value for the listener if the condition gets modify than our request will be drooped and we had also set the custom error page when our request gets drooped and also our drooped request will be recorded in the Incidents because in rule action we choose drop and record request from drop-down box."),(0,I.kt)("p",null,"6.Now return to the WAF and click on incident report on real-time alerts for various types of incidents from attacks to accounting/audit incidents through Events. "),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"kb-1049",src:C(76033).Z,width:"1838",height:"949"})))}p.isMDXComponent=!0},25488:(A,g,C)=>{C.d(g,{Z:()=>I});const I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABiUAAAHICAYAAAAhhumoAAAAi3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjaVY7ZDcNACET/qcIlcC1HOdHKltJByjdrrFh+HzAgNAzsv+8B24JQQYeHpRkWmpr8KRHYCCIx0upVm7sLleIa7xmEW1iGoz6HqvhiiIUdru42bNrkcudd5KokCNfVMltR8jHigdav3/sZ/2yd5AT5TS0c7hcyrgAACghpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4KIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIxNTczIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNDU2IgogICB0aWZmOkltYWdlV2lkdGg9IjE1NzMiCiAgIHRpZmY6SW1hZ2VIZWlnaHQ9IjQ1NiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIvPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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"},96619:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/behave1-7c541c8a585b8b9b9c0068f71accb0c2.png"},76033:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/behave11-f3918a8d3a2d652c20ae39cc794c5436.png"},38530:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/behavior-eadcfc89b770d06822047865a228646a.png"},65391:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/professionalconsole-00c4f5a00bd2b755e31bcab3d1a4de71.png"},73459:(A,g,C)=>{C.d(g,{Z:()=>I});const I=C.p+"assets/images/vari-674c9a29b9a0df9d0e064834afa56103.png"}}]);