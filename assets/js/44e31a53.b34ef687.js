"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:3},l="KB: 3003",s={unversionedId:"kb/platform/kb-3004",id:"kb/platform/kb-3004",title:"KB: 3003",description:"How to configure DNS server IP on an Interface using Haltdos web Console?",source:"@site/docs/kb/platform/kb-3004.md",sourceDirName:"kb/platform",slug:"/kb/platform/kb-3004",permalink:"/kb/platform/kb-3004",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kb_sidebar",previous:{title:"KB: 3002",permalink:"/kb/platform/kb-3003"},next:{title:"KB: 3004",permalink:"/kb/platform/kb-3005"}},c={},p=[{value:"How to configure DNS server IP on an Interface using Haltdos web Console?",id:"how-to-configure-dns-server-ip-on-an-interface-using-haltdos-web-console",level:3},{value:"Problem Statement",id:"problem-statement",level:4},{value:"Solution",id:"solution",level:4}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-3003"}),"KB: 3003"),(0,r.kt)("h3",o({},{id:"how-to-configure-dns-server-ip-on-an-interface-using-haltdos-web-console"}),"How to configure DNS server IP on an Interface using Haltdos web Console?"),(0,r.kt)("h4",o({},{id:"problem-statement"}),"Problem Statement"),(0,r.kt)("p",null,"Client wants to set Domain Name Server (DNS) IP that all the domain related queries can be solved. Users are allowed to set DNS server IP for port basis, i.e. if they wanted to add multiple DNS IP on single port they can add it using following steps."),(0,r.kt)("h4",o({},{id:"solution"}),"Solution"),(0,r.kt)("p",null,"The client can achieve the above requirement by configuring a DNS IP under Haltdos WAF.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(5947).Z,width:"1856",height:"1011"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Now go instances under the respective Stack.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(52778).Z,width:"1843",height:"442"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stacks")," > ",(0,r.kt)("strong",{parentName:"li"},"Instances")," > ",(0,r.kt)("strong",{parentName:"li"},"Network"),"> ",(0,r.kt)("strong",{parentName:"li"},"Ethernet")," > ",(0,r.kt)("strong",{parentName:"li"},"Interface"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(55334).Z,width:"1423",height:"740"}),"  "),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Configure the settings and click on save changes and click on Deploy Configuration button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dns",src:n(48494).Z,width:"1441",height:"732"})))}f.isMDXComponent=!0},52778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dns2-53da253d424771550b169d10a55abc68.png"},55334:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dns3-a16c116961b8337a984ed0f1c60e0bfe.png"},48494:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dns4-2785dadd0ce72088a0fae72ea45bc543.png"},5947:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb8-2509711c674e06d8ec797ebdd0720a01.png"}}]);