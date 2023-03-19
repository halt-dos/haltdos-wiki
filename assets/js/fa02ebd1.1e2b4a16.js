"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[74027],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=p(r),u=o,g=f["".concat(s,".").concat(u)]||f[u]||c[u]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92017:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:4},l="SSL Offloading",s={unversionedId:"enterprise/ddos/ssl_offloading",id:"version-6.0/enterprise/ddos/ssl_offloading",title:"SSL Offloading",description:"---",source:"@site/versioned_docs/version-6.0/enterprise/ddos/ssl_offloading.md",sourceDirName:"enterprise/ddos",slug:"/enterprise/ddos/ssl_offloading",permalink:"/v6/enterprise/ddos/ssl_offloading",draft:!1,tags:[],version:"6.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ddos_sidebar",previous:{title:"Bot Protection",permalink:"/v6/enterprise/ddos/bot_protection"},next:{title:"Cloud Signaling",permalink:"/v6/enterprise/ddos/cloud_signaling"}},p={},d=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Server IP</strong>",id:"server-ip",level:5},{value:"<strong>Listening Port</strong>",id:"listening-port",level:5},{value:"<strong>Forwarding Port</strong>",id:"forwarding-port",level:5}],f={toc:d},c="wrapper";function u(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(c,o({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"ssl-offloading"}),"SSL Offloading"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In addition to DDoS mitigation, the Offload mechanism can be used for features like SSL offloading, WAF, DNS Server Protection, just add the TCP/UDP stream specifying the server IP, Source port and Destination port."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"offload_stream",src:r(1200).Z,width:"1861",height:"543"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Stack > Resource > DDoS > Profile > Offload"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add Offload with specific configuration required.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Server IP"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Listening IP"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Forwarding IP"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",o({},{id:"description"}),(0,n.kt)("strong",{parentName:"h3"},"Description:")),(0,n.kt)("h5",o({},{id:"server-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Server IP")),(0,n.kt)("p",null,"Specify the IP address"),(0,n.kt)("h5",o({},{id:"listening-port"}),(0,n.kt)("strong",{parentName:"h5"},"Listening Port")),(0,n.kt)("p",null,"Specify listening port for offloading"),(0,n.kt)("h5",o({},{id:"forwarding-port"}),(0,n.kt)("strong",{parentName:"h5"},"Forwarding Port")),(0,n.kt)("p",null,"Specify forwarding port for offloading"))}u.isMDXComponent=!0},1200:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ddos23-c0a210786f6f4942c2f507df056f9def.png"}}]);