"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[63390],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92463:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={sidebar_position:2},o="NTP",p={unversionedId:"enterprise/platform/stacks/instance/integration/ntp",id:"enterprise/platform/stacks/instance/integration/ntp",title:"NTP",description:"---",source:"@site/docs/enterprise/platform/stacks/instance/integration/ntp.md",sourceDirName:"enterprise/platform/stacks/instance/integration",slug:"/enterprise/platform/stacks/instance/integration/ntp",permalink:"/haltdos-wiki/enterprise/platform/stacks/instance/integration/ntp",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"SNMP",permalink:"/haltdos-wiki/enterprise/platform/stacks/instance/integration/snmp"},next:{title:"DHCP",permalink:"/haltdos-wiki/enterprise/platform/stacks/instance/dhcp_settings"}},s={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:2}],u={toc:c},m="wrapper";function k(t){var{components:e}=t,i=l(t,["components"]);return(0,r.kt)(m,a({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"ntp"}),"NTP"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Network Time Protocol (NTP) is a protocol that provides a very reliable way of transmitting and receiving an accurate time source over TCP/IP-based networks."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ntp",src:n(28683).Z,width:"1876",height:"650"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > (Select Instance) > Network > NTP")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NTP Servers"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NTP Auth"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NTP Key"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NTP Hash"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"MD5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"NTP Password"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("h2",a({},{id:"description"}),"Description:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NTP Server")),(0,r.kt)("p",null,"User can specify the NTP server details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NTP Auth")),(0,r.kt)("p",null,"Users can specify the NTP authentication type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NTP Key")),(0,r.kt)("p",null,"Users can specify the NTP Key number that is used for NTP authentication"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NTP Hash")),(0,r.kt)("p",null,"User can specify the NTP hash used for authentication."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NTP Password")),(0,r.kt)("p",null,"Users can spcify the password"))}k.isMDXComponent=!0},28683:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ntp-7d9255c6b5ccb5c41585a7945c60a403.png"}}]);