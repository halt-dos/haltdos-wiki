"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[92099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:20},s="KB: 1020",l={unversionedId:"kb/waf/kb-1020",id:"version-6.0/kb/waf/kb-1020",title:"KB: 1020",description:"Problem Statement",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1020.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1020",permalink:"/v6/kb/waf/kb-1020",draft:!1,tags:[],version:"6.0",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"kb_sidebar",previous:{title:"KB: 1019",permalink:"/v6/kb/waf/kb-1019"},next:{title:"KB: 1021",permalink:"/v6/kb/waf/kb-1021"}},p={},c=[],u={toc:c},d="wrapper";function f(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-1020"}),"KB: 1020"),(0,r.kt)("h1",o({},{id:"how-to-add-custom-listener-ports-post-creating-the-listener"}),"How to add custom listener ports post creating the listener?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem Statement")),(0,r.kt)("p",null,"The user wants to add multiple listener ports on which Haltdos WAF should start listening. Users are allowed to add the listener port at the time of creation of listener. After creating a listener you  can still customize the listening ports."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution")),(0,r.kt)("p",null,"1.First log into the Haltdos management portal."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1020",src:n(84973).Z,width:"1809",height:"870"})),(0,r.kt)("p",null,"2.Go to ",(0,r.kt)("strong",{parentName:"p"},"stack")," > ",(0,r.kt)("strong",{parentName:"p"},"WAF")," > ",(0,r.kt)("strong",{parentName:"p"},"listener")," > ",(0,r.kt)("strong",{parentName:"p"},"listener settings")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1020",src:n(22761).Z,width:"1895",height:"854"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"By scrolling down on listener settings we can see the add port option, by clicking on which we                      can add custom listening port for our web application.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1020",src:n(17237).Z,width:"1880",height:"852"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1020",src:n(35369).Z,width:"555",height:"440"})),(0,r.kt)("p",null,"4.After adding the port click on save changes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1020",src:n(38896).Z,width:"1874",height:"848"})),(0,r.kt)("p",null,"In this way the user can add multiple custom listener ports."))}f.isMDXComponent=!0},22761:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enable-d4dc41d8ab1456290dbac33d28d06ef4.png"},17237:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enablee-e4b36d950baf845d7ce976e06c71f77b.png"},84973:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"},35369:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/qwe-388dbb330429e1142f52860952ba1a70.png"},38896:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/set-1d3084f82c70108ea0fd2e71a0dc7089.png"}}]);