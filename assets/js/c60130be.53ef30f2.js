"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[25657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:1},s="KB-7001",l={unversionedId:"kb/kb-7001",id:"kb/kb-7001",title:"KB-7001",description:"How to onboard a Listener in Haltdos WAF PE?",source:"@site/professional/kb/kb-7001.md",sourceDirName:"kb",slug:"/kb/kb-7001",permalink:"/professional/kb/kb-7001",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"professional_sidebar",previous:{title:"WAF PE Knowledge Base",permalink:"/professional/kb"},next:{title:"KB-7002",permalink:"/professional/kb/kb-7002"}},p={},c=[{value:"How to onboard a Listener in Haltdos WAF PE?",id:"how-to-onboard-a-listener-in-haltdos-waf-pe",level:3},{value:"Solution",id:"solution",level:3}],d={toc:c},u="wrapper";function f(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(u,o({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"kb-7001"}),"KB-7001"),(0,n.kt)("h3",o({},{id:"how-to-onboard-a-listener-in-haltdos-waf-pe"}),"How to onboard a Listener in Haltdos WAF PE?"),(0,n.kt)("p",null,"The given problem statement of a user is concerned with onboard of a new listener.\nListeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource.\nWhen we add a website to WAF, we must include our backend server and its port number."),(0,n.kt)("h3",o({},{id:"solution"}),"Solution"),(0,n.kt)("p",null,"The user can add a listener from the WAF application.  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to Haltdos Console.  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"WAF",src:r(93680).Z,width:"1906",height:"923"}),"  "),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Now go to ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > click on ",(0,n.kt)("strong",{parentName:"li"},"Add Listener"),".  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"listener",src:r(68194).Z,width:"1916",height:"954"}),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"listener",src:r(50803).Z,width:"1911",height:"956"}),"  "),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"User need to mention the domain and the back-end server IP address along with listening port in the mentioned manner, and then click on ",(0,n.kt)("strong",{parentName:"p"},"Save"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the listener has been added, click on the specific listener, and go to Server Groups to configure backend server."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"servergrp",src:r(13176).Z,width:"1911",height:"948"})," "),(0,n.kt)("ol",o({},{start:5}),(0,n.kt)("li",{parentName:"ol"},"To configure application server, Click on the ",(0,n.kt)("strong",{parentName:"li"},"DEFAULT")," server group, and then click on ",(0,n.kt)("strong",{parentName:"li"},"Add Server"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"servers",src:r(26553).Z,width:"1912",height:"956"})," "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"server",src:r(48682).Z,width:"1915",height:"953"})," "),(0,n.kt)("ol",o({},{start:7}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"User needs to mention Server IP or FQDN (Fully Qualified Domain Name) and the Port on which the web application is running. The user can also configure various types of timeout and modes for the server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),", once server configuration has been done."))))}f.isMDXComponent=!0},50803:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/listener2pro-8be4cf6c91e384409bf620d7936c0416.png"},68194:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/listenpro-cb6e4ac7804d6d14fa49f19d346a0734.png"},48682:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-e8239cefa917a739ef108f0baced5e47.png"},13176:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servergrp-b4fede76c2a1a2628b20edc79f9edf37.png"},26553:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/serverspro-553aafebd7605e490131342f0840f3b7.png"},93680:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/wafpro-8826a6967bbb64a62d8a8fec6f96da03.png"}}]);