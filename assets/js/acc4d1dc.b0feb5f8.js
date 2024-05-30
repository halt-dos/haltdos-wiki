"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[97010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>S});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,S=u["".concat(l,".").concat(d)]||u[d]||f[d]||s;return r?n.createElement(S,i(i({ref:t},c),{},{components:r})):n.createElement(S,i({ref:t},c))}));function S(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:6},a="SSL Settings",l={unversionedId:"professional/waf/ssl_settings",id:"version-7.0/professional/waf/ssl_settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations.",source:"@site/versioned_docs/version-7.0/professional/waf/ssl_settings.md",sourceDirName:"professional/waf",slug:"/professional/waf/ssl_settings",permalink:"/professional/waf/ssl_settings",draft:!1,tags:[],version:"7.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"professional_sidebar",previous:{title:"Bot Protection",permalink:"/professional/waf/bot_protection"},next:{title:"WEB Policy",permalink:"/professional/waf/policy/web_policy"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Description</strong>",id:"description",level:3},{value:"<strong>Upstream SSL Protocols</strong>",id:"upstream-ssl-protocols",level:5},{value:"<strong>Enable SSL Offloading</strong>",id:"enable-ssl-offloading",level:5},{value:"<strong>SSL Certificate</strong>",id:"ssl-certificate",level:5},{value:"<strong>SSL Ciphers</strong>",id:"ssl-ciphers",level:5},{value:"<strong>SSL Ciphers Suites</strong>",id:"ssl-ciphers-suites",level:5},{value:"<strong>SSL Session Caching</strong>",id:"ssl-session-caching",level:5},{value:"<strong>SSL Session Timeout</strong>",id:"ssl-session-timeout",level:5}],u={toc:c},f="wrapper";function d(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"ssl-settings"}),"SSL Settings"),(0,n.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SSL Settings",src:r(71951).Z,width:"1888",height:"990"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,n.kt)("li",{parentName:"ol"},"Then go to ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"SSL Settings")," "),(0,n.kt)("li",{parentName:"ol"},"Configure Your Settings "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),". ")),(0,n.kt)("h3",o({},{id:"description"}),(0,n.kt)("strong",{parentName:"h3"},"Description")),(0,n.kt)("h5",o({},{id:"upstream-ssl-protocols"}),(0,n.kt)("strong",{parentName:"h5"},"Upstream SSL Protocols")),(0,n.kt)("p",null,"Specify the SSL protocols to be used. If left empty, the default SSL protocol will be applied."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: SSLv2 / SSLv3 / TLSv1 / TLSv1.1 / TLSv1.2 / TLSv1.3\n\nDefault: Blank  \n")),(0,n.kt)("p",null,"For more information abt SSL Protocols, please refer to this link: ",(0,n.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security"}),(0,n.kt)("strong",{parentName:"a"},"SSL Protocols"))),(0,n.kt)("h5",o({},{id:"enable-ssl-offloading"}),(0,n.kt)("strong",{parentName:"h5"},"Enable SSL Offloading")),(0,n.kt)("p",null,"This option specifies if the WAF should enable HTTPS traffic for the configured website."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled  \n")),(0,n.kt)("h5",o({},{id:"ssl-certificate"}),(0,n.kt)("strong",{parentName:"h5"},"SSL Certificate")),(0,n.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select the uploaded SSL Certificate \n\nDefault: Blank  \n")),(0,n.kt)("p",null,"For more information about the SSL Certificate, Please refer to this link: ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.digicert.com/what-is-an-ssl-certificate"}),(0,n.kt)("strong",{parentName:"a"},"SSL Certificate"))),(0,n.kt)("h5",o({},{id:"ssl-ciphers"}),(0,n.kt)("strong",{parentName:"h5"},"SSL Ciphers")),(0,n.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down."),(0,n.kt)("h5",o({},{id:"ssl-ciphers-suites"}),(0,n.kt)("strong",{parentName:"h5"},"SSL Ciphers Suites")),(0,n.kt)("p",null,"In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Modern / Intermediate / Old / Custom \n\nDefault: Intermediate  \n")),(0,n.kt)("p",null,"For more information about Security/Server-Side TLS, please refer to this site: ",(0,n.kt)("a",o({parentName:"p"},{href:"https://wiki.mozilla.org/Security/Server_Side_TLS"}),(0,n.kt)("strong",{parentName:"a"},"SSL Cipher Suites"))),(0,n.kt)("h5",o({},{id:"ssl-session-caching"}),(0,n.kt)("strong",{parentName:"h5"},"SSL Session Caching")),(0,n.kt)("p",null,"This option allows users to specify the number of SSL session cache for HTTPS requests on the listener."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000\n\nMin: 0\n\nDefault: 10  \n")),(0,n.kt)("h5",o({},{id:"ssl-session-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"SSL Session Timeout")),(0,n.kt)("p",null,"This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 1\n\nDefault: 5\n")))}d.isMDXComponent=!0},71951:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ssl_settings-487faa6ac9e2b0be92667aee2d05d9b1.png"}}]);