"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[89556],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=p(r),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(d,l(l({ref:e},c),{},{components:r})):n.createElement(d,l({ref:e},c))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[g]="string"==typeof t?t:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52427:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const l={sidebar_position:1},i="Syslog",s={unversionedId:"enterprise/platform/stacks/integrations/syslog",id:"enterprise/platform/stacks/integrations/syslog",title:"Syslog",description:"Integration with Syslog Server for monitoring Haltdos appliances",source:"@site/docs/enterprise/platform/stacks/integrations/syslog.md",sourceDirName:"enterprise/platform/stacks/integrations",slug:"/enterprise/platform/stacks/integrations/syslog",permalink:"/enterprise/platform/stacks/integrations/syslog",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Integrations",permalink:"/enterprise/platform/stacks/integrations/"},next:{title:"API Tokens",permalink:"/enterprise/platform/stacks/integrations/api_tokens"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}],g={toc:c},u="wrapper";function m(t){var{components:e}=t,l=a(t,["components"]);return(0,n.kt)(u,o({},g,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"syslog"}),"Syslog"),(0,n.kt)("p",null,"Integration with Syslog Server for monitoring Haltdos appliances"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syslog")," stands for ",(0,n.kt)("strong",{parentName:"p"},"System Logging Protocol")," and is a standard protocol used to send system log or event messages to a specific server, called a ",(0,n.kt)("strong",{parentName:"p"},"Syslog server"),". It is primarily used to collect various device logs from several different machines in a central location for monitoring and review."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Haltdos")," supports integration with 3rd party Syslog service for sending real-time alerts. All logs in ",(0,n.kt)("strong",{parentName:"p"},"Haltdos")," are written in CEF format. The body of the log entry itself is JSON format. This allows simple integration with monitoring tools such as SIEM solutions without the need for writing custom parsers."),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"It is recommended to configure Syslog (if available) for centralized monitoring of all Haltdos appliances")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"syslog",src:r(41078).Z,width:"1820",height:"693"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stack > Settings > Integration > Syslog"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Syslog Export Enabled"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Protocol"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Dropdown"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"UDP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Host Name"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Syslog Server Port"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",o({},{id:"description"}),"Description:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syslog Export Enabled")),(0,n.kt)("p",null,"This option allows users to enable or disable exporting Syslog to an external server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Protocol")),(0,n.kt)("p",null,"This option allows the user to select the protocol type on which the Syslog server is running. Users can select either TCP or UDP."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Host Name")),(0,n.kt)("p",null,"This option helps the user to mention the IP address or the hostname of the external backup server on which the Syslog service is exporting the log details."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Syslog Server Port")),(0,n.kt)("p",null,"This option allows the users to mention the port number to communicate with Syslog server."))}m.isMDXComponent=!0},41078:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/syslog_new_ui-3f1d1b734bbf0a427c7725a3ba2d7813.png"}}]);