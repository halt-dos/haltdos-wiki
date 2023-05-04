"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[23612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},s="KB-9001",l={unversionedId:"community/kb/kb-9001",id:"version-6.0/community/kb/kb-9001",title:"KB-9001",description:"How to configure Website?",source:"@site/versioned_docs/version-6.0/community/kb/kb-9001.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9001",permalink:"/haltdos-wiki/v6/community/kb/kb-9001",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"community_sidebar",previous:{title:"WAF CE Knowledge Base",permalink:"/haltdos-wiki/v6/community/kb/"},next:{title:"KB-9002",permalink:"/haltdos-wiki/v6/community/kb/kb-9002"}},c={},p=[{value:"<strong>How to configure Website?</strong>",id:"how-to-configure-website",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},d="wrapper";function m(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(d,o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-9001"}),"KB-9001"),(0,r.kt)("h3",o({},{id:"how-to-configure-website"}),(0,r.kt)("strong",{parentName:"h3"},"How to configure Website?")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"User wants to configure their application on the Haltdos CE WAF. They have to install community edition of Haltdos WAF using the Installation guide. Post installation they can use below steps to onboard their application on Haltdos WAF CE."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"The user need to follow below steps to configure a new application on the Haltdos WAF CE."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User need to log in to the Haltdos WAF CE Web UI console using following URL in the web browser. (https://<\\machineIP>:9000)")),(0,r.kt)("admonition",o({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(40705).Z,width:"1920",height:"972"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Post login, users need to add their application alias under operational settings using following path: ",(0,r.kt)("strong",{parentName:"li"},"Home > WAF > Operational"),". Users can add their server alias and click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Operational Settings",src:n(47196).Z,width:"1892",height:"928"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Post adding server alias in the operational settings, user need to add the backend server using following path: ",(0,r.kt)("strong",{parentName:"li"},"Home > WAF > Server Farm > Servers"),". User can get details about how to configure a backend server using following link : ",(0,r.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/community/docs/waf/server_farm/servers"}),"Servers"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Servers",src:n(97597).Z,width:"1918",height:"860"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Post adding backend details in server farm, user need to set SSL security using SSL settings option. First user need to add SSL certificate using following path: ",(0,r.kt)("strong",{parentName:"li"},"Home > SSL Certificate"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Certificate",src:n(30521).Z,width:"1906",height:"915"})),(0,r.kt)("p",null,"User can get help of guide of SSL certificate here - ",(0,r.kt)("a",o({parentName:"p"},{href:"/haltdos-wiki/community/docs/ssl_certificates"}),"SSL certificate")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSl settings",src:n(52531).Z,width:"1907",height:"904"})),(0,r.kt)("p",null,"After adding certificate on the above option, User need to go to following path to enable SSL settings : ",(0,r.kt)("strong",{parentName:"p"},"Home > WAF > SSL Settings"),". User can get help of following document to understand how to configure SSL settings on Haltdos WAF CE : ",(0,r.kt)("a",o({parentName:"p"},{href:"/haltdos-wiki/community/docs/waf/ssl_settings"}),"SSL Settings")),(0,r.kt)("ol",o({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"Post enabling the SSL for the website user should enable a redirection rule using following path : ",(0,r.kt)("strong",{parentName:"li"},"Home > WAF > Rules > Redirection Rule"),". To configure the rule, User can take help from the ",(0,r.kt)("a",o({parentName:"li"},{href:"/haltdos-wiki/community/docs/waf/rules/redirection_rules"}),(0,r.kt)("strong",{parentName:"a"},"Redirection rule"))," document.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Redirection rule",src:n(35629).Z,width:"1915",height:"942"})),(0,r.kt)("p",null,"Now, all the HTTP request that are coming on Haltdos WAF CE will be redirected to HTTPs."),(0,r.kt)("p",null,"In this way, users can onboard their application on Haltdos WAF CE."))}m.isMDXComponent=!0},47196:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CE_operational_settings-a90f6a4b3b26a0fb7c021718d1085a84.png"},97597:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CE_servers-cbc3d657653f6e1d39d2ea8b78b0315e.png"},40705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},35629:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redirection_rules-5f9fb50f719e1a201804619527359e24.png"},30521:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_certificates-bb324fb81d3aa6df1dc958849ff29b94.png"},52531:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_settings-0c67d9af26b894350ee47a1e7da8e144.png"}}]);