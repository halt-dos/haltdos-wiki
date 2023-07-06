"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[71377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66791:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294);const o=()=>r.createElement("div",{className:"badge badge--primary heading-badge"},"Beta Version")},19577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905),o=n(66791);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:6},l="SSL Settings",c={unversionedId:"professional/docs/waf/ssl_settings",id:"professional/docs/waf/ssl_settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations.",source:"@site/docs/professional/docs/waf/ssl_settings.md",sourceDirName:"professional/docs/waf",slug:"/professional/docs/waf/ssl_settings",permalink:"/professional/docs/waf/ssl_settings",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"professional_sidebar",previous:{title:"Bot Protection",permalink:"/professional/docs/waf/bot_protection"},next:{title:"WEB Policy",permalink:"/professional/docs/waf/policy/web_policy"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Description</strong>",id:"description",level:3},{value:"<strong>Enable SSL Offloading</strong>",id:"enable-ssl-offloading",level:5},{value:"<strong>SSL Certificate</strong>",id:"ssl-certificate",level:5},{value:"<strong>SSL Ciphers</strong>",id:"ssl-ciphers",level:5},{value:"<strong>SSL Ciphers Suites</strong>",id:"ssl-ciphers-suites",level:5},{value:"<strong>SSL Session Caching</strong>",id:"ssl-session-caching",level:5},{value:"<strong>SSL Session Timeout</strong>",id:"ssl-session-timeout",level:5}],d={toc:u},f="wrapper";function g(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(f,a({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"ssl-settings"}),"SSL Settings"),(0,r.kt)(o.Z,{mdxType:"ProductBadge"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,r.kt)("hr",null),(0,r.kt)("h3",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Settings",src:n(71951).Z,width:"1888",height:"990"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable SSL Offloading"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SSL Certificate"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SSL Cipher Suites"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Intermediate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SSL Session Caching"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Decimal"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SSL Session Timeout"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Decimal"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5")))),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,r.kt)("li",{parentName:"ol"},"Then go to ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"SSL Settings")," "),(0,r.kt)("li",{parentName:"ol"},"Configure Your Settings "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),". ")),(0,r.kt)("h3",a({},{id:"description"}),(0,r.kt)("strong",{parentName:"h3"},"Description")),(0,r.kt)("h5",a({},{id:"enable-ssl-offloading"}),(0,r.kt)("strong",{parentName:"h5"},"Enable SSL Offloading")),(0,r.kt)("p",null,"This option specifies if the WAF should enable HTTPS traffic for the configured website."),(0,r.kt)("h5",a({},{id:"ssl-certificate"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Certificate")),(0,r.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page"),(0,r.kt)("h5",a({},{id:"ssl-ciphers"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Ciphers")),(0,r.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down."),(0,r.kt)("h5",a({},{id:"ssl-ciphers-suites"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Ciphers Suites")),(0,r.kt)("p",null,"In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,r.kt)("h5",a({},{id:"ssl-session-caching"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Session Caching")),(0,r.kt)("p",null,"This option allows users to specify the number of SSL session cache for HTTPS requests on the listener."),(0,r.kt)("h5",a({},{id:"ssl-session-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Session Timeout")),(0,r.kt)("p",null,"This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."))}g.isMDXComponent=!0},71951:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_settings-487faa6ac9e2b0be92667aee2d05d9b1.png"}}]);