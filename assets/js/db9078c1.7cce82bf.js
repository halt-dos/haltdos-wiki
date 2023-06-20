"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[18320],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),g=a,f=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37710:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={sidebar_position:6},l="Config Synchronization",p={unversionedId:"enterprise/platform/stacks/integrations/config_sync",id:"enterprise/platform/stacks/integrations/config_sync",title:"Config Synchronization",description:"Synchronizing configurations across peer managements",source:"@site/docs/enterprise/platform/stacks/integrations/config_sync.md",sourceDirName:"enterprise/platform/stacks/integrations",slug:"/enterprise/platform/stacks/integrations/config_sync",permalink:"/enterprise/platform/stacks/integrations/config_sync",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"platform_sidebar",previous:{title:"Webhooks",permalink:"/enterprise/platform/stacks/integrations/webhooks"},next:{title:"Resources",permalink:"/enterprise/platform/stacks/resource_content/"}},s={},c=[{value:"How to Use:",id:"how-to-use",level:3}],u={toc:c},m="wrapper";function g(t){var{components:e}=t,i=o(t,["components"]);return(0,r.kt)(m,a({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"config-synchronization"}),"Config Synchronization"),(0,r.kt)("p",null,"Synchronizing configurations across peer managements"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Haltdos platform supports periodic and on-demand synchronization of configurations across multiple peer managements. "),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"API Token with READ AND WRITE access is required to sync configurations.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"config sync",src:n(45525).Z,width:"1809",height:"843"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Integration > Config Sync")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable Sync"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable configuration sync with peer management"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ENABLED / DISABLED"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"DISABLED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable Accept Remote Connections"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable lo/accept sync with peer management"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ENABLED / DISABLED"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"DISABLED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Peer Host"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the host name or IP address of peer management"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IP / Host Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Peer Host Port"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the peer management port"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Auth Key"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify Auth Key for authentication"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Timeout"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the timeout for API Call in Seconds"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Scope"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the scope for sync configuration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"List of Configured Resoruces"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))))}g.isMDXComponent=!0},45525:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/config_sync_newui-57505ef130d5149271e9da39ff9e9dab.png"}}]);