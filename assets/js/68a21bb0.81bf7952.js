"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[62143],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(k,l(l({ref:e},m),{},{components:n})):r.createElement(k,l({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52080:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={sidebar_position:1},i="SNMP",s={unversionedId:"enterprise/platform/system/instance/integration/snmp",id:"enterprise/platform/system/instance/integration/snmp",title:"SNMP",description:"---",source:"@site/docs/enterprise/platform/system/instance/integration/snmp.md",sourceDirName:"enterprise/platform/system/instance/integration",slug:"/enterprise/platform/system/instance/integration/snmp",permalink:"/enterprise/platform/system/instance/integration/snmp",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"VRRP",permalink:"/enterprise/platform/system/instance/vrrp"},next:{title:"NTP",permalink:"/enterprise/platform/system/instance/integration/ntp"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"How SNMP works",id:"how-snmp-works",level:4},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],c={toc:m},u="wrapper";function d(t){var{components:e}=t,l=o(t,["components"]);return(0,r.kt)(u,a({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"snmp"}),"SNMP"),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Simple Network Management Protocol (SNMP) is an application\u2013layer protocol defined by the Internet Architecture Board (IAB) in RFC1157 for exchanging management information between network devices. It is a part of Transmission Control Protocol\u2044Internet Protocol (TCP\u2044IP) protocol suite."),(0,r.kt)("h4",a({},{id:"how-snmp-works"}),"How SNMP works"),(0,r.kt)("p",null,"SNMP on haltdos devices communicate with a network management system to relay status information and configuration changes. The NMS provides a single interface from which administrators can issue batch commands and receive automatic alerts."),(0,r.kt)("p",null,"SNMP relies on the concept of an MIB to organize how information about device metrics gets exchanged. The MIB is a formal description of a network device's components and status information."),(0,r.kt)("p",null,"SNMP uses a blend of pull and push communications between network devices and the network management system. Haltdos devices that communicate through SNMP respond to it by delivering protocol data units, commonly known as SNMP GET requests. All of these communications are recorded, and network monitoring software uses them to obtain SNMP data. Network admins can track the data value they specify using these queries."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snmp",src:n(90416).Z,width:"1862",height:"953"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > (Select Instance) > Network > SNMP")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save changes"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SNMP  Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"System Description"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"System Location"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"System Contact"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Layer4 Protocol"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Agent Port"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"161")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Agent Address"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable Traps"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Trap Username / Community"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Link Detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Manager Address"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Manager Port"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"162")))),(0,r.kt)("h4",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SNMP Name")," "),(0,r.kt)("p",null,"User can specify the SNMP client name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"System Description")," "),(0,r.kt)("p",null,"User can describe about the SNMP Machine"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"System Location")),(0,r.kt)("p",null,"User can enter the location of the Machine."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"System Contact")),(0,r.kt)("p",null,"User can specify contact information for the machine"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Layer4 Protocol")),(0,r.kt)("p",null,"Users can select underlying protocol for SNMP Communication"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Agent Port")),(0,r.kt)("p",null,"User can select SNMP agent port number for SNMP communication"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Agent Address")),(0,r.kt)("p",null,"User select SNMP agent IP addresses for SNMP communication"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enable Traps")),(0,r.kt)("p",null,"Users can enable or disable SNMP traps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Trap Username / Community")),(0,r.kt)("p",null,"User can select the username / community to use when sending traps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manager Address")),(0,r.kt)("p",null,"Users can enter SNMP monitor IP address."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manager Port")),(0,r.kt)("p",null,"Users can enter SNMP monitor port address."))}d.isMDXComponent=!0},90416:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/snmp-4ec93c579ebbaff849fdf3078f7aacf8.png"}}]);