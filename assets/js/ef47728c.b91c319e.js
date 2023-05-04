"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[18401],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},f="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=c(r),u=a,b=f["".concat(l,".").concat(u)]||f[u]||k[u]||i;return r?n.createElement(b,o(o({ref:e},p),{},{components:r})):n.createElement(b,o({ref:e},p))}));function b(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[f]="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7270:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const o={sidebar_position:46},s="KB: 1046",l={unversionedId:"kb/waf/kb-1046",id:"version-6.0/kb/waf/kb-1046",title:"KB: 1046",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1046.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1046",permalink:"/haltdos-wiki/v6/kb/waf/kb-1046",draft:!1,tags:[],version:"6.0",sidebarPosition:46,frontMatter:{sidebar_position:46},sidebar:"kb_sidebar",previous:{title:"KB: 1045",permalink:"/haltdos-wiki/v6/kb/waf/kb-1045"},next:{title:"KB: 1047",permalink:"/haltdos-wiki/v6/kb/waf/kb-1047"}},c={},p=[],f={toc:p},k="wrapper";function u(t){var{components:e}=t,o=i(t,["components"]);return(0,n.kt)(k,a({},f,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1046"}),"KB: 1046"),(0,n.kt)("hr",null),(0,n.kt)("h1",a({},{id:"how-to-set-mitigation-for-pathdirectory-traversal-attack"}),"How to set mitigation for Path/Directory traversal attack?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Statement")),(0,n.kt)("p",null,"The user wants to set  mitigation for the path traversal attack."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:r(60160).Z,width:"1918",height:"940"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"First log into the Haltdos management portal.\n",(0,n.kt)("img",{alt:"kb-1046",src:r(18599).Z,width:"1887",height:"438"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to stack > WAF > listener > profile > profile settings > signatures."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:r(23161).Z,width:"1879",height:"903"})),(0,n.kt)("ol",a({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Select all signature by select all button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:r(18605).Z,width:"1906",height:"472"})),(0,n.kt)("ol",a({},{start:4}),(0,n.kt)("li",{parentName:"ol"},'Click on update button and select "Prod" and update the status for all the signature.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:r(75570).Z,width:"1910",height:"893"})),(0,n.kt)("ol",a({},{start:5}),(0,n.kt)("li",{parentName:"ol"},"Go to stack > WAF > listener > profile > profile settings >settings.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:r(95049).Z,width:"1913",height:"911"})),(0,n.kt)("ol",a({},{start:6}),(0,n.kt)("li",{parentName:"ol"},"Set operational settings to mitigation to mitigate the attack.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:r(33097).Z,width:"1920",height:"916"})),(0,n.kt)("p",null,"In this way user can set and the mitigation and mitigate the attack."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:r(70850).Z,width:"1918",height:"958"}),"\n",(0,n.kt)("img",{alt:"kb-1046",src:r(55100).Z,width:"1636",height:"793"}),"\n",(0,n.kt)("img",{alt:"kb-1046",src:r(76420).Z,width:"1215",height:"817"})))}u.isMDXComponent=!0},60160:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q1-63ef6cb40cc77e7a7c0349b7e76e0ee0.png"},76420:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q10-03ce0e2fdc83c21d0b5f5143116b3970.png"},18599:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q2-e46989e662afab979f794243530b9e7c.png"},23161:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q3-8e2445ec318c14f328ea14b05477ff7f.png"},18605:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q4-5459e1f4aaf22964fbc9442e9f629dba.png"},75570:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q5-a7cefb5fc067005b03a627e9f42857f8.png"},95049:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q6-7dd3eb85507e86a550794daf5795dbef.png"},33097:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q7-0c0402e61f2c1ba8fb2c6a7cd8bda6de.png"},70850:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q8-5049fa6f468f9e124dc89d5d9eeda8eb.png"},55100:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/q9-0e529b0dccac223f779eae5377a2958a.png"}}]);