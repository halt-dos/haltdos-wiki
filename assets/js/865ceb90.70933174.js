"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[45682],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},14438:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={sidebar_position:3},l="Link Bonds",s={unversionedId:"enterprise/platform/stacks/instance/network_settings/link_bonds",id:"version-6.0/enterprise/platform/stacks/instance/network_settings/link_bonds",title:"Link Bonds",description:"Link Aggregating of Ethernet NICs for high throughput and reliability",source:"@site/versioned_docs/version-6.0/enterprise/platform/stacks/instance/network_settings/link_bonds.md",sourceDirName:"enterprise/platform/stacks/instance/network_settings",slug:"/enterprise/platform/stacks/instance/network_settings/link_bonds",permalink:"/haltdos-wiki/v6/enterprise/platform/stacks/instance/network_settings/link_bonds",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"Virtual LAN",permalink:"/haltdos-wiki/v6/enterprise/platform/stacks/instance/network_settings/virtual_lan"},next:{title:"Routing",permalink:"/haltdos-wiki/v6/enterprise/platform/stacks/instance/routing/"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:2}],u={toc:c},d="wrapper";function k(t){var{components:e}=t,o=i(t,["components"]);return(0,r.kt)(d,a({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"link-bonds"}),"Link Bonds"),(0,r.kt)("p",null,"Link Aggregating of Ethernet NICs for high throughput and reliability"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Aggregating two or more links to achieve one fat link brings a number of advantages, in short more bandwidth. Haltdos appliances (physical or virtual instanes) support Link bonding that combines multiple NICs that are running in Active-Active or Active-Passive scenarios."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"linkbonds",src:n(76990).Z,width:"1255",height:"664"})),(0,r.kt)("h2",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > Instance > Network > Link Bonds")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click Save")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Addresses"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Route Via"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Route Type"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"UNICAST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Route Scope"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"GLOBAL / LINK / HOST"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"GLOBAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Metric"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")))))}k.isMDXComponent=!0},76990:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/linkbonds1-6a7f6e4e35527e4adeb20ad126326538.png"}}]);