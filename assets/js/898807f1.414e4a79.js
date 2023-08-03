"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[94380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},19959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:0,pagination_prev:null},l="Stacks",s={unversionedId:"enterprise/platform/stacks/stacks",id:"enterprise/platform/stacks/stacks",title:"Stacks",description:"---",source:"@site/docs/enterprise/platform/stacks/stacks.md",sourceDirName:"enterprise/platform/stacks",slug:"/enterprise/platform/stacks/",permalink:"/enterprise/platform/stacks/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,pagination_prev:null},sidebar:"platform_sidebar",next:{title:"Analytics",permalink:"/enterprise/platform/stacks/analytics"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Stack Creation",id:"stack-creation",level:2}],u={toc:p},d="wrapper";function k(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(d,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"stacks"}),"Stacks"),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Think of a Stack as a collection of services and settings that you create for a project or website. Many customers use just one Stack. If you manage multiple web properties that you'd like to track separately or require a different set of tools, then creating multiple stacks is the way to go."),(0,n.kt)("p",null,"Stacks form the basis for creating, enabling, and using all Haltdos services including managing APIs, enabling billing, adding and removing collaborators, and managing permissions for your resources."),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"stack-creation"}),"Stack Creation"),(0,n.kt)("p",null,"A stack is equivalent to a license in the traditional appliance. Based on the provided license on your Haltdos appliance, appropriate stack would be configured. If your license includes virtual ADC, you can create your own vADC stack. If you are using Haltdos Centralized Management solution, you can manage multiple stacks as well."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To create a licensed Stack")),(0,n.kt)("p",null,"Go to ",(0,n.kt)("strong",{parentName:"p"},"Home > Stacks")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on Add Stack"),(0,n.kt)("li",{parentName:"ol"},"Disable virtual ADC option"),(0,n.kt)("li",{parentName:"ol"},"Enter valid license Id provided by Haltdos Support team."),(0,n.kt)("li",{parentName:"ol"},"Click Save Changes. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To create a virtual Stack")),(0,n.kt)("p",null,"Go to ",(0,n.kt)("strong",{parentName:"p"},"Home > Stacks")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on Add Stack"),(0,n.kt)("li",{parentName:"ol"},"Enable virtual ADC option for creating a virtual Stack (vADC)"),(0,n.kt)("li",{parentName:"ol"},"Select an existing license that supports vADC."),(0,n.kt)("li",{parentName:"ol"},"Click Save Changes.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stack Subscriptions")),(0,n.kt)("p",null,"After the creation of the stack, the stack will be subscribed to all Apps issued to the stack. Haltdos provides various Apps like WAF, DDOS, LLB, SCAN, etc. Depending upon the license issued to you, your stack will support the respective features and capabilities. These capabilities may be further restricted based on allowed throughput limit, feature limit depending upon the subscribed license. A stack can support multiple Apps simultaneously. This means that the same stack can support capabilities of DDoS protection (DDoS App), Web Application Firewall (WAF), Server Load Balancer (SLB), etc. - all at the same time."),(0,n.kt)("admonition",a({},{title:"NOTE:",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"The limit on your stack depends upon allotted license. These limits can be increased by upgrading your current license. Contact Haltdos Sales or Support for more information.")))}k.isMDXComponent=!0}}]);