"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[83326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,m=u["".concat(l,".").concat(b)]||u[b]||f[b]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_position:31},s="KB: 1031",l={unversionedId:"kb/waf/kb-1031",id:"kb/waf/kb-1031",title:"KB: 1031",description:"-----------",source:"@site/docs/kb/waf/kb-1031.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1031",permalink:"/kb/waf/kb-1031",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"kb_sidebar",previous:{title:"KB: 1030",permalink:"/kb/waf/kb-1030"},next:{title:"KB: 1032",permalink:"/kb/waf/kb-1032"}},c={},p=[{value:"<strong>How to whitelist any IP or IP segment for a listener?</strong>",id:"how-to-whitelist-any-ip-or-ip-segment-for-a-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},f="wrapper";function b(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(f,o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-1031"}),"KB: 1031"),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"how-to-whitelist-any-ip-or-ip-segment-for-a-listener"}),(0,n.kt)("strong",{parentName:"h3"},"How to whitelist any IP or IP segment for a listener?")),(0,n.kt)("h4",o({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"The user wants to whitelist any particular IP address which is getting blocked by some rules or policy."),(0,n.kt)("h4",o({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("p",null,"The user can use the geo whitelisting option to whitelist any IP address or IP  addresses for a listener only."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > click on listener name > ",(0,n.kt)("strong",{parentName:"li"},"Profile")," > click on setting icon on profile > ",(0,n.kt)("strong",{parentName:"li"},"Geo Filtering"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1031",src:r(52083).Z,width:"1805",height:"962"})),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},'User can see the option named "WhiteListed IP Prefixes". by using this option user can add IPs which need to be whitelisted. after mentioning the IPs click on save changes.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1031",src:r(76873).Z,width:"1805",height:"962"})))}b.isMDXComponent=!0},76873:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_kb_1031_2-20337e6de368cc861aeeed45c8ab74ee.png"},52083:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/setting_kb_1031_1-f666a689df167c6ec0d2f65537a61420.png"}}]);