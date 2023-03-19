"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[84306],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12730:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const l={sidebar_position:4},i="Threat Feeds",s={unversionedId:"enterprise/platform/stacks/integrations/threat_feeds",id:"version-6.0/enterprise/platform/stacks/integrations/threat_feeds",title:"Threat Feeds",description:"Integration with 3rd party Threat Intelligence feeds",source:"@site/versioned_docs/version-6.0/enterprise/platform/stacks/integrations/threat_feeds.md",sourceDirName:"enterprise/platform/stacks/integrations",slug:"/enterprise/platform/stacks/integrations/threat_feeds",permalink:"/haltdos-wiki/v6/enterprise/platform/stacks/integrations/threat_feeds",draft:!1,tags:[],version:"6.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"platform_sidebar",previous:{title:"Webhooks",permalink:"/haltdos-wiki/v6/enterprise/platform/stacks/integrations/webhooks"},next:{title:"Resource Content",permalink:"/haltdos-wiki/v6/enterprise/platform/stacks/resource_content/"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3}],u={toc:c},d="wrapper";function m(t){var{components:e}=t,l=o(t,["components"]);return(0,n.kt)(d,a({},u,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"threat-feeds"}),"Threat Feeds"),(0,n.kt)("p",null,"Integration with 3rd party Threat Intelligence feeds"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos solutions comes with Haltdos Threat Steam which provides periodic threat intel curated from open and paid sources for valid licensed customers. However, at times, customers may wish to also include custom 3rd party Threat Intel feeds for list of Bad Reputation IP addresses."),(0,n.kt)("p",null,"Custom threat intel can be pulled into Haltdos appliances from three sources: pull APIs, FTP or File upload. This section explains various options to include threat intel feeds into Haltdos products."),(0,n.kt)("admonition",a({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Only IPv4/IPv6 addresses / prefix having poor reputation is currently supported.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"threat_feeds",src:r(19426).Z,width:"1920",height:"966"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Threat Intel")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings"),(0,n.kt)("li",{parentName:"ol"},"Click Save")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enable Telemetry"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enable sending telemetry & attack information (anonymous) to Haltdos"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Threat Source"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Specify how to read threat source"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Dropdown"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Upload Threat Intel"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Click on the button to upload threat intel"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Button"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"NA")))))}m.isMDXComponent=!0},19426:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/threat_feeds1-660fa858d046695c9cf48de5e4777afc.png"}}]);