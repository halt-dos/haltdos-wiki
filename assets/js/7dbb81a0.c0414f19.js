"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[92683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:3},s="Bot Protection",l={unversionedId:"community/waf/bot_protection",id:"version-7.0/community/waf/bot_protection",title:"Bot Protection",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/bot_protection.md",sourceDirName:"community/waf",slug:"/community/waf/bot_protection",permalink:"/community/waf/bot_protection",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"community_sidebar",previous:{title:"Geo Fencing",permalink:"/community/waf/geo_fencing"},next:{title:"Servers",permalink:"/community/waf/server_farm/servers"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"How To Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Allowed Crawlers",id:"allowed-crawlers",level:4},{value:"Bad Crawlers",id:"bad-crawlers",level:4},{value:"Bad Reputation Traffic",id:"bad-reputation-traffic",level:4}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"bot-protection"}),"Bot Protection"),(0,n.kt)("h3",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Bot Protection",src:r(49124).Z,width:"1920",height:"987"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How To Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Bot Protection")),(0,n.kt)("li",{parentName:"ol"},"Configure your setting"),(0,n.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("h4",o({},{id:"allowed-crawlers"}),"Allowed Crawlers"),(0,n.kt)("p",null,"Specify the list of good crawlers by specifying their user agents. Such requests will be allowed.\nUsers are allowed to specify the ssl session caching"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: User Agent \n\nDefault: Blank  \n")),(0,n.kt)("h4",o({},{id:"bad-crawlers"}),"Bad Crawlers"),(0,n.kt)("p",null,"Users are allowed to specify the list of bad crawlers by specifying their user agents. Such requests will be dropped.This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers, their requests will be dropped.\nUsers are allowed to specify the ssl session caching"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: User Agent \n\nDefault: Blank  \n")),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Crawlers")," refer to automated programs or scripts that browse the web to index content, gather information, or perform other automated tasks. "),(0,n.kt)("h4",o({},{id:"bad-reputation-traffic"}),"Bad Reputation Traffic"),(0,n.kt)("p",null,"Users are allowed to specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM.\nUsers are allowed to specify the ssl session caching"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: NO ACTION / DROP\n\nDefault: No Action\n")))}d.isMDXComponent=!0},49124:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bot_protection-d0409f9f4ef6df295c65977a67f98d2b.png"}}]);