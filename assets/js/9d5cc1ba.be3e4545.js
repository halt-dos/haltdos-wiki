"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[44193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={"sidebar position":4},i="Session Table",l={unversionedId:"enterprise/waf/session_table",id:"enterprise/waf/session_table",title:"Session Table",description:"Overview",source:"@site/docs/enterprise/waf/session_table.md",sourceDirName:"enterprise/waf",slug:"/enterprise/waf/session_table",permalink:"/enterprise/waf/session_table",draft:!1,tags:[],version:"current",frontMatter:{"sidebar position":4},sidebar:"waf_sidebar",previous:{title:"Access Log Exporter",permalink:"/enterprise/waf/tools/access_log"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],u={toc:c},f="wrapper";function d(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(f,o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"session-table"}),"Session Table"),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"The session table records the connection status of on boarded listeners. It plays an important role  to understand the traffic flow and to identify which request has forwarded to which upstream."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"session_table",src:r(93253).Z,width:"1848",height:"690"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"WAF"),"  > Click ",(0,n.kt)("strong",{parentName:"li"},"Session Table")),(0,n.kt)("li",{parentName:"ol"},"Here User can view all the connections that has been establish and also about the status of connection and timestamp as well."),(0,n.kt)("li",{parentName:"ol"},"From ",(0,n.kt)("strong",{parentName:"li"},"Resources"),", User can select desired resource of listed listener."),(0,n.kt)("li",{parentName:"ol"},"From ",(0,n.kt)("strong",{parentName:"li"},"Date Range")," User can select customize date to view Incidents.")),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"TIMESTAMP"),(0,n.kt)("br",{parentName:"p"}),"\n","In the time stamp column user can get details about the connection intialization time for that particular session, for each session time session can be different."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SOURCE"),(0,n.kt)("br",{parentName:"p"}),"\n","In source column user can get details about the client source ip from which the request has been generated."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PROXY"),(0,n.kt)("br",{parentName:"p"}),"\n","In proxy column the user can see the ip address that has been NAT for the client request. As the waf is working as a reverse proxy, hence requests forwarded to backend sever should be NAT with waf ip addresss."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CLIENT NAT"),(0,n.kt)("br",{parentName:"p"}),"\n","If user has configured client ip pool and server groups then requests forwarded to backend sever will be NAT with cllient ip pool address."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"UPSTREAM"),(0,n.kt)("br",{parentName:"p"}),"\n","In upstream column user can see the ip of backend server."))}d.isMDXComponent=!0},93253:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sessiontable-9a2762a5f0b3d8d58a7058c4a8e6b5f0.png"}}]);