"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[41620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:6},l="KB: 06",c={unversionedId:"cloud/waf/kb/kb-06",id:"cloud/waf/kb/kb-06",title:"KB: 06",description:"---",source:"@site/docs/cloud/waf/kb/kb-06.md",sourceDirName:"cloud/waf/kb",slug:"/cloud/waf/kb/kb-06",permalink:"/cloud/waf/kb/kb-06",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"cloud_sidebar",previous:{title:"KB: 05",permalink:"/cloud/waf/kb/kb-05"},next:{title:"Anti-DDoS",permalink:"/cloud/anti-ddos"}},p={},s=[{value:"<strong>How to upload SSL certificate for application listener?</strong>",id:"how-to-upload-ssl-certificate-for-application-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:s},f="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(f,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"kb-06"}),"KB: 06"),(0,r.kt)("hr",null),(0,r.kt)("h3",a({},{id:"how-to-upload-ssl-certificate-for-application-listener"}),(0,r.kt)("strong",{parentName:"h3"},"How to upload SSL certificate for application listener?")),(0,r.kt)("h4",a({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"The client wants to upload SSL certificate for their web application"),(0,r.kt)("h4",a({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"Below are the steps to configure the WAF to update the SSL certificate:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to Upload SSL Certificate"),":-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login into Haltdos console.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF")," > ",(0,r.kt)("strong",{parentName:"p"},"Resources")," > ",(0,r.kt)("strong",{parentName:"p"},"SSL Certificates")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-06",src:n(94124).Z,width:"1920",height:"544"})),(0,r.kt)("ol",a({},{start:3}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Upload"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the scope of the resource content and add the name for certificate.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy Paste the public key and private key of the application that you want to update.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-06",src:n(47404).Z,width:"566",height:"388"})),(0,r.kt)("admonition",a({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Ensure that the Public Key uploaded has proper chaining certificate. Missing chaining certificates in an SSL/TLS connection can lead to trust chain issues. Without a complete chain, users may face SSL/TLS errors, and security risks, like man-in-the-middle attacks, are heightened. Ensuring proper configuration by including intermediate certificates is vital for maintaining a secure and trusted connection on websites.")),(0,r.kt)("p",null,"In this way user can update the SSL certificate of their application at Haltdos WAF."))}d.isMDXComponent=!0},47404:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb6-b91058bedcd34ef4620110a0b49bedaa.png"},94124:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb61-6f7729aa2da7dac5ad95978c0f75329f.png"}}]);