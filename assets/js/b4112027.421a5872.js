"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[89590],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||g[f]||i;return n?r.createElement(d,s(s({ref:e},c),{},{components:n})):r.createElement(d,s({ref:e},c))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[u]="string"==typeof t?t:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62905:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={sidebar_position:5},a="Log Retention",l={unversionedId:"enterprise/platform/stacks/settings/log_retention",id:"enterprise/platform/stacks/settings/log_retention",title:"Log Retention",description:"Configure the log retention period for the Haltdos appliances",source:"@site/docs/enterprise/platform/stacks/settings/log_retention.md",sourceDirName:"enterprise/platform/stacks/settings",slug:"/enterprise/platform/stacks/settings/log_retention",permalink:"/v8/enterprise/platform/stacks/settings/log_retention",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"platform_sidebar",previous:{title:"Dashboards",permalink:"/v8/enterprise/platform/stacks/settings/dashboards"},next:{title:"Status",permalink:"/v8/enterprise/platform/system/status"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Event Log</strong>",id:"event-log",level:5},{value:"<strong>Incident Log</strong>",id:"incident-log",level:5},{value:"<strong>Session Log</strong>",id:"session-log",level:5},{value:"<strong>Minute Statistics</strong>",id:"minute-statistics",level:5},{value:"<strong>Hourly Statistics</strong>",id:"hourly-statistics",level:5},{value:"<strong>Day Statistics</strong>",id:"day-statistics",level:5}],u={toc:c},g="wrapper";function f(t){var{components:e}=t,s=i(t,["components"]);return(0,r.kt)(g,o({},u,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"log-retention"}),"Log Retention"),(0,r.kt)("p",null,"Configure the log retention period for the Haltdos appliances"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This feature allows users to set the log retention period. The log retention period is the time for which the logs the logs will be stored locally on the Haltdos Device."),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Depending upon the organization's policy, we can change or less the dya for logs.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aaa_policy",src:n(81).Z,width:"1900",height:"738"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > Settings > Log Retention"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")))),(0,r.kt)("h3",o({},{id:"description"}),"Description:"),(0,r.kt)("h5",o({},{id:"event-log"}),(0,r.kt)("strong",{parentName:"h5"},"Event Log")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the event log."),(0,r.kt)("h5",o({},{id:"incident-log"}),(0,r.kt)("strong",{parentName:"h5"},"Incident Log")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the incident log."),(0,r.kt)("h5",o({},{id:"session-log"}),(0,r.kt)("strong",{parentName:"h5"},"Session Log")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the session log."),(0,r.kt)("h5",o({},{id:"minute-statistics"}),(0,r.kt)("strong",{parentName:"h5"},"Minute Statistics")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the MINUTE statistics."),(0,r.kt)("h5",o({},{id:"hourly-statistics"}),(0,r.kt)("strong",{parentName:"h5"},"Hourly Statistics")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the HOUR statistics."),(0,r.kt)("h5",o({},{id:"day-statistics"}),(0,r.kt)("strong",{parentName:"h5"},"Day Statistics")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the DAY statistics."))}f.isMDXComponent=!0},81:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/logr-06e010ca1be7ff454cd5ddbfcc28bdae.png"}}]);