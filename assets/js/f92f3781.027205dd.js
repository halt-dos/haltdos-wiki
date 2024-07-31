"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[51129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:3},a="Log Retention",l={unversionedId:"enterprise/platform/system/settings/log_retention",id:"enterprise/platform/system/settings/log_retention",title:"Log Retention",description:"Configure the log retention period for the Haltdos appliances",source:"@site/docs/enterprise/platform/system/settings/log_retention.md",sourceDirName:"enterprise/platform/system/settings",slug:"/enterprise/platform/system/settings/log_retention",permalink:"/v8/enterprise/platform/system/settings/log_retention",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"Dashboards",permalink:"/v8/enterprise/platform/system/settings/dashboards"},next:{title:"Forensics",permalink:"/v8/enterprise/platform/system/settings/forensics"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Event Log</strong>",id:"event-log",level:5},{value:"<strong>Incident Log</strong>",id:"incident-log",level:5},{value:"<strong>Session Log</strong>",id:"session-log",level:5},{value:"<strong>Minute Statistics</strong>",id:"minute-statistics",level:5},{value:"<strong>Hourly Statistics</strong>",id:"hourly-statistics",level:5},{value:"<strong>Day Statistics</strong>",id:"day-statistics",level:5}],u={toc:c},g="wrapper";function d(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(g,o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"log-retention"}),"Log Retention"),(0,r.kt)("p",null,"Configure the log retention period for the Haltdos appliances"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This feature allows users to set the log retention period. The log retention period is the time for which the logs the logs will be stored locally on the Haltdos Device."),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Depending upon the organization's policy, we can change or less the dya for logs.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aaa_policy",src:n(14763).Z,width:"1902",height:"900"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > Settings > Log Retention"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")))),(0,r.kt)("h3",o({},{id:"description"}),"Description:"),(0,r.kt)("h5",o({},{id:"event-log"}),(0,r.kt)("strong",{parentName:"h5"},"Event Log")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the event log."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 90 \n")),(0,r.kt)("h5",o({},{id:"incident-log"}),(0,r.kt)("strong",{parentName:"h5"},"Incident Log")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the incident log."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 90 \n")),(0,r.kt)("h5",o({},{id:"session-log"}),(0,r.kt)("strong",{parentName:"h5"},"Session Log")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the session log."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 7\n")),(0,r.kt)("h5",o({},{id:"minute-statistics"}),(0,r.kt)("strong",{parentName:"h5"},"Minute Statistics")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the MINUTE statistics."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 2\n")),(0,r.kt)("h5",o({},{id:"hourly-statistics"}),(0,r.kt)("strong",{parentName:"h5"},"Hourly Statistics")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the HOUR statistics."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 7\n")),(0,r.kt)("h5",o({},{id:"day-statistics"}),(0,r.kt)("strong",{parentName:"h5"},"Day Statistics")),(0,r.kt)("p",null,"This option allows users to specify the retention period of the DAY statistics."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 90\n")))}d.isMDXComponent=!0},14763:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/log_retention-1173bf1a8bdae6f3514ebc42a5235e58.png"}}]);