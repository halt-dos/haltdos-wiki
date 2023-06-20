"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[94079],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={sidebar_position:3},l="SSL Settings",a={unversionedId:"cloud/waf/listener/ssl-settings",id:"version-6.0/cloud/waf/listener/ssl-settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations",source:"@site/versioned_docs/version-6.0/cloud/waf/listener/ssl-settings.md",sourceDirName:"cloud/waf/listener",slug:"/cloud/waf/listener/ssl-settings",permalink:"/v6/cloud/waf/listener/ssl-settings",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"cloud_sidebar",previous:{title:"signatures",permalink:"/v6/cloud/waf/listener/security-profile/rules/signatures"},next:{title:"Performance",permalink:"/v6/cloud/waf/listener/performance/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(f,o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"ssl-settings"}),"SSL Settings"),(0,n.kt)("p",null,"It provides functionality to support SSL offloading based on configurations"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > SSL Settings"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Encrypt Traffic to Upstream")),(0,n.kt)("p",null,"This specifies WAF should re-encrypt traffic before sending it to the backend web application. "),(0,n.kt)("p",null,"Note: We can listen to non-HTTPS traffic and send as HTTPS traffic to the backend server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enable SSL Offloading")),(0,n.kt)("p",null,"This specifies if the WAF should enable HTTPS traffic for the configured website."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SSL Certificate")),(0,n.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the dropdown or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SSL Cipher Suites")),(0,n.kt)("p",null,"In order to secure or make ssl compatible with specific web browsers. Users can select from the dropdown i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SSL Ciphers")),(0,n.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web server they're connecting to (your website). Users can select respective ciphers from the dropdown."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SSL Protocols")),(0,n.kt)("p",null,"This field specifies the protocol to be used for selected custom ssl cipher."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SSL Session Caching")),(0,n.kt)("p",null,"This field allows users to specify the number of SSL session cache for HTTPS requests on the listener. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SSL Session Timeout")),(0,n.kt)("p",null,"This field allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."))}d.isMDXComponent=!0}}]);