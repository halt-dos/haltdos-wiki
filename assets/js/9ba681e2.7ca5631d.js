"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[69626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:67},l="KB: 1067",s={unversionedId:"kb/waf/kb-1067",id:"version-7.0/kb/waf/kb-1067",title:"KB: 1067",description:"How to configure IP transparency through Haltdos Solution?",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1067.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1067",permalink:"/v7/kb/waf/kb-1067",draft:!1,tags:[],version:"7.0",sidebarPosition:67,frontMatter:{sidebar_position:67},sidebar:"kb_sidebar",previous:{title:"KB: 1066",permalink:"/v7/kb/waf/kb-1066"},next:{title:"KB: 1068",permalink:"/v7/kb/waf/kb-1068"}},c={},p=[{value:"<strong>How to configure IP transparency through Haltdos Solution?</strong>",id:"how-to-configure-ip-transparency-through-haltdos-solution",level:4},{value:"Problem Statement",id:"problem-statement",level:4},{value:"Solution",id:"solution",level:4}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1067"}),"KB: 1067"),(0,n.kt)("h4",o({},{id:"how-to-configure-ip-transparency-through-haltdos-solution"}),(0,n.kt)("strong",{parentName:"h4"},"How to configure IP transparency through Haltdos Solution?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),"Problem Statement"),(0,n.kt)("p",null,"Client wants to conceal the presence of the reverse proxy so that the origin server observes that the IP packets originate from the client\u2019s IP address."),(0,n.kt)("h4",o({},{id:"solution"}),"Solution"),(0,n.kt)("p",null,"The client can achieve the above requirement by utilizing the NTP integration under Haltdos WAF."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ip transperancy",src:r(97894).Z,width:"1809",height:"870"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stacks")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Settings")," > ",(0,n.kt)("strong",{parentName:"li"},"Operational Settings"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ip transperancy",src:r(35380).Z,width:"1814",height:"958"})),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Under operational settings client needs to specify IP Transparency under operational mode field. Configure the setting and click on save changes.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ip transperancy",src:r(87500).Z,width:"1846",height:"952"})))}d.isMDXComponent=!0},97894:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ip1-ef27260554c01615e596a8f4a18f8419.png"},35380:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ip2-c3d3a81a7f864122cac8cdea220eda33.png"},87500:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ip3-07ce93f095cfbd10742640df86ce46fb.png"}}]);