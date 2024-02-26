"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[79774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},s="KB-9013",l={unversionedId:"community/kb/kb-9013",id:"version-7.0/community/kb/kb-9013",title:"KB-9013",description:"How to configure WAF CE when it is running on the application server?",source:"@site/versioned_docs/version-7.0/community/kb/kb-9013.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9013",permalink:"/community/kb/kb-9013",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"community_sidebar",previous:{title:"KB-9012",permalink:"/community/kb/kb-9012"},next:{title:"KB-9014",permalink:"/community/kb/kb-9014"}},c={},p=[{value:"<strong>How to configure WAF CE when it is running on the application server?</strong>",id:"how-to-configure-waf-ce-when-it-is-running-on-the-application-server",level:3},{value:"<strong>Problem statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:p},m="wrapper";function h(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(m,o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-9013"}),"KB-9013"),(0,r.kt)("h3",o({},{id:"how-to-configure-waf-ce-when-it-is-running-on-the-application-server"}),(0,r.kt)("strong",{parentName:"h3"},"How to configure WAF CE when it is running on the application server?")),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem statement")),(0,r.kt)("p",null,"User wants to use Haltdos WAF CE while being installed on application server."),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"In Haltdos WAF CE, Users can install the solution on the same server on which application is handling the requests. In order to make a proper flow, user need to follow below-mentioned steps;"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the first step users need to install the Haltdos Community WAF, Users can follow our guided document to install the Haltdos WAF CE.\nDoc - ",(0,r.kt)("a",o({parentName:"p"},{href:"/v8/community/getting-started/installation"}),"link"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Post installation, users need to log in to the Haltdos WAF CE Web UI console using below-mentioned URL."))),(0,r.kt)("p",null,"(https://<\\managementIP>:9000)"),(0,r.kt)("admonition",o({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(40705).Z,width:"1920",height:"972"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"In order to achieve the desired outcome, user need to add listening port on Haltdos WAF (like 80 or 443) so that all the requests coming from clients are first serve by the WAF CE solution.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(81309).Z,width:"1873",height:"896"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Post WAF inspection, user requests need to be forward to the backend application which is hosted on the same server. To achieve this outcome, we need to make two changes in our configuration:")),(0,r.kt)("p",null,"a. User need to change the backend server listening port (other than 80 or 443, example 8443) in the backend application code."),(0,r.kt)("p",null,"b. Now, post WAF security inspection, user need forward the requests to the backend server which is hosted in the same machine but on different port number. So user need to go to following path: ",(0,r.kt)("strong",{parentName:"p"},"Home > WAF > server Farm > Servers")," and change the backend server IP to 127.0.0.1 and port to the application listening port (which we have changed in last step)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63382).Z,width:"1892",height:"629"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(12151).Z,width:"1884",height:"811"})),(0,r.kt)("p",null,"In this way, we can achieve the required outcome. The flow of request will be mentioned below;"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"User request will first come on server IP with WAF listening port numbers,")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Post WAF security inspection, user request will be forwarded to localhost with the port number mentioned in server farm.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The application will listen the user request and respond back to the local host machine.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WAF CE solution will forward the request back to the user's machine."))),(0,r.kt)("p",null,"In this way, we can configure the Haltdos WAF CE solution in the same application server."))}h.isMDXComponent=!0},63382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add_server5-b418777a984b236594e5b2487715ea6c.png"},12151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add_server6-565b8493153752bac9dca6ec5835ada9.png"},81309:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listen_port-87d2c3856c92ea9a32cc41b6ee897a3a.png"},40705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"}}]);