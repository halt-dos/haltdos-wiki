"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[88307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,b=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:61},l="KB: 1061",p={unversionedId:"kb/waf/kb-1061",id:"version-6.0/kb/waf/kb-1061",title:"KB: 1061",description:"Problem Statement",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1061.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1061",permalink:"/v6/kb/waf/kb-1061",draft:!1,tags:[],version:"6.0",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"kb_sidebar",previous:{title:"KB: 1060",permalink:"/v6/kb/waf/kb-1060"},next:{title:"KB: 1062",permalink:"/v6/kb/waf/kb-1062"}},s={},c=[],u={toc:c},f="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1061"}),"KB: 1061"),(0,n.kt)("h1",o({},{id:"how-to-prevent-sites-from-json-injection"}),"How to prevent sites from JSON injection?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Statement")),(0,n.kt)("p",null,"Client wants to protect their sites from JSON injection attack which are protected by Haltdos solutions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SOLUTION")),(0,n.kt)("p",null,"The client can achieve the above requirement by configuring JSON policies."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1061",src:r(84973).Z,width:"1809",height:"870"})),(0,n.kt)("p",null,"2.Go to ",(0,n.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listener")," > ",(0,n.kt)("strong",{parentName:"p"},"Profile")," > ",(0,n.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,n.kt)("strong",{parentName:"p"},"Policy")," > ",(0,n.kt)("strong",{parentName:"p"},"JSON Policy")," >",(0,n.kt)("strong",{parentName:"p"},"Configure the Policy > "),"Save Changes**."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1061",src:r(95115).Z,width:"1827",height:"823"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now inject malicious JSON data to the respective listener.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Haltdos solutions take action on the malicious JSON data as per the configuration saved."))))}m.isMDXComponent=!0},95115:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jsonpol-767fa5db93e77e4e142d784b710aa689.png"},84973:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"}}]);