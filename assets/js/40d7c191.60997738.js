"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[69125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:0,sidebar_label:"Introduction"},s="Introduction",l={unversionedId:"community/introduction",id:"version-7.0/community/introduction",title:"Introduction",description:"Web Application Firewall (WAF/ WAAP) is a reverse proxy solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secure company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.",source:"@site/versioned_docs/version-7.0/community/introduction.md",sourceDirName:"community",slug:"/community/introduction",permalink:"/v7/community/introduction",draft:!1,tags:[],version:"7.0",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Introduction"},sidebar:"community_sidebar",previous:{title:"Haltdos Community WAF",permalink:"/v7/community"},next:{title:"Overview",permalink:"/v7/community/overview"}},c={},p=[],u={toc:p},f="wrapper";function m(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(f,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"introduction"}),"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web Application Firewall (WAF/ WAAP)")," is a ",(0,r.kt)("a",a({parentName:"p"},{href:"/glossary#reverse-proxy"}),(0,r.kt)("strong",{parentName:"a"},"reverse proxy"))," solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secure company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WAF")," works as the intermediary as well as shield between the user and the app itself, analyzing and securing all communications before they reach the app or the user. A ",(0,r.kt)("strong",{parentName:"p"},"WAF")," operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic.  "),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"WAF")," analyzes ",(0,r.kt)("strong",{parentName:"p"},"Hypertext Transfer Protocol (HTTP)")," requests and applies a set of rules that define what parts of that conversation are begin and what parts are malicious. The main parts of HTTP conversations that a WAF analyzes are ",(0,r.kt)("strong",{parentName:"p"},"GET")," and ",(0,r.kt)("strong",{parentName:"p"},"POST")," requests. GET requests are used to retrieve data from the server, and POST requests are used to send data to a server to change its state.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"haltdos",src:n(56281).Z,width:"1920",height:"1080"}),"  "),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"WAF")," can take two approaches to analyzing and filtering the content contained in these HTTP requests or a hybrid combination of the two:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Whitelisting"),": A whitelisting approach means that the WAF will deny all requests by default and allow only requests that are known to be trusted. It provides a list of what IP addresses are known to be safe.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blacklisting"),": A blacklisting approach defaults to letting packets through and uses preset signatures to block malicious web traffic and protect vulnerabilities of websites or web applications."))))}m.isMDXComponent=!0},56281:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/waf-2b9a8cd3caf79d596f4178f175364c47.png"}}]);