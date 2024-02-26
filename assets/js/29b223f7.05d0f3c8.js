"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[55755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,g=d["".concat(s,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},29064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},l="Fingerprint",s={unversionedId:"enterprise/waf/listener/advance-settings/fingerprint",id:"version-7.0/enterprise/waf/listener/advance-settings/fingerprint",title:"Fingerprint",description:"User can specify fingerprint settings on this page for Listener",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/advance-settings/fingerprint.md",sourceDirName:"enterprise/waf/listener/advance-settings",slug:"/enterprise/waf/listener/advance-settings/fingerprint",permalink:"/enterprise/waf/listener/advance-settings/fingerprint",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Challenge",permalink:"/enterprise/waf/listener/advance-settings/challenge"},next:{title:"Web Security",permalink:"/enterprise/waf/listener/advance-settings/websec"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Token Request URI</strong>",id:"token-request-uri",level:5},{value:"<strong>Token Rotation Duration</strong>",id:"token-rotation-duration",level:5},{value:"<strong>Token Error Margin Duration</strong>",id:"token-error-margin-duration",level:5},{value:"<strong>Token Name</strong>",id:"token-name",level:5},{value:"<strong>Allow Rooted Devices</strong>",id:"allow-rooted-devices",level:5},{value:"<strong>Allow Emulator</strong>",id:"allow-emulator",level:5},{value:"<strong>Bot Token Location</strong>",id:"bot-token-location",level:5},{value:"<strong>Token Encryption Key</strong>",id:"token-encryption-key",level:5},{value:"<strong>Fingerprint Expiry</strong>",id:"fingerprint-expiry",level:5}],d={toc:u},c="wrapper";function k(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(c,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"fingerprint"}),"Fingerprint"),(0,r.kt)("p",null,"User can specify fingerprint settings on this page for Listener"),(0,r.kt)("hr",null),(0,r.kt)("h3",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Fingerprint Protection helps you quickly determine, manage, and mitigate automated requests. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fingerprint",src:n(52658).Z,width:"1914",height:"1009"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Advanced Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Fingerprint")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Token Request URI"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"/__verify/token/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Token Rotation Duration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Token Error Margin Duration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Token Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"X-Bot-Token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Allow Rooted Devices"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable it to allow rooted devices.Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Allow Emulator"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable it to allow emulator devices. Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u200bBot Token Location"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"HEADER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Token Encryption Key"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Fingerprint Expiry"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"86400")))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"token-request-uri"}),(0,r.kt)("strong",{parentName:"h5"},"Token Request URI")),(0,r.kt)("p",null,"Users can specify the URI for requesting a token. By default, it is /__verify/token/."),(0,r.kt)("h5",a({},{id:"token-rotation-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Token Rotation Duration")),(0,r.kt)("p",null,"Users can specify the duration after which the token should be rotated. By default, it is 86400 seconds."),(0,r.kt)("h5",a({},{id:"token-error-margin-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Token Error Margin Duration")),(0,r.kt)("p",null,"Users can specify the duration for error margin for validating token. By default, it is 60 seconds."),(0,r.kt)("h5",a({},{id:"token-name"}),(0,r.kt)("strong",{parentName:"h5"},"Token Name")),(0,r.kt)("p",null,"Users can specify the name of the token to be validated. By default, it is X-Bot-Token."),(0,r.kt)("h5",a({},{id:"allow-rooted-devices"}),(0,r.kt)("strong",{parentName:"h5"},"Allow Rooted Devices")),(0,r.kt)("p",null,"Users can specify enable it to allow rooted devices."),(0,r.kt)("h5",a({},{id:"allow-emulator"}),(0,r.kt)("strong",{parentName:"h5"},"Allow Emulator")),(0,r.kt)("p",null,"Enable it to allow emulator devices."),(0,r.kt)("h5",a({},{id:"bot-token-location"}),(0,r.kt)("strong",{parentName:"h5"},"Bot Token Location")),(0,r.kt)("p",null,"Users can specify the location where the token is expected. By default, it is HEADER."),(0,r.kt)("h5",a({},{id:"token-encryption-key"}),(0,r.kt)("strong",{parentName:"h5"},"Token Encryption Key")),(0,r.kt)("p",null,"Users can specify the encryption key which will be used for token validation. By default, it is blank. To generate, click on Generate button and To download, click on the Download button."),(0,r.kt)("h5",a({},{id:"fingerprint-expiry"}),(0,r.kt)("strong",{parentName:"h5"},"Fingerprint Expiry")),(0,r.kt)("p",null,"Specify the duration after which fingerprinting will be re-evaluated. By default, it is 86400 seconds."))}k.isMDXComponent=!0},52658:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/fingerprint-180fa8dc4e2b3548f751c8892fc81ded.png"}}]);