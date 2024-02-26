"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[9779],{3905:(t,e,r)=>{r.d(e,{Zo:()=>h,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},h=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),c=p(r),d=a,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(m,o(o({ref:e},h),{},{components:r})):n.createElement(m,o({ref:e},h))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51061:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const o={sidebar_position:5},i="Monitors",s={unversionedId:"enterprise/adc/listeners/monitors",id:"enterprise/adc/listeners/monitors",title:"Monitors",description:"---",source:"@site/docs/enterprise/adc/listeners/monitors.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/monitors",permalink:"/v8/enterprise/adc/listeners/monitors",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"adc_sidebar",previous:{title:"SNMP",permalink:"/v8/enterprise/adc/listeners/server_groups/snmp"},next:{title:"Performance",permalink:"/v8/enterprise/adc/listeners/performance"}},p={},h=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Monitor Name</strong>",id:"monitor-name",level:5},{value:"<strong>Health Check Interval</strong>",id:"health-check-interval",level:5},{value:"<strong>Fail Threshold</strong>",id:"fail-threshold",level:5},{value:"<strong>Pass Threshold</strong>",id:"pass-threshold",level:5},{value:"<strong>Monitor Timeout</strong>",id:"monitor-timeout",level:5},{value:"<strong>Health Check Type</strong>",id:"health-check-type",level:5},{value:"<strong>Check Port</strong>",id:"check-port",level:5},{value:"<strong>HTTP Method</strong>",id:"http-method",level:5},{value:"<strong>Check URI</strong>",id:"check-uri",level:5},{value:"<strong>Match Status</strong>",id:"match-status",level:5},{value:"<strong>Match Content</strong>",id:"match-content",level:5},{value:"<strong>Health Script</strong>",id:"health-script",level:5}],c={toc:h},u="wrapper";function d(t){var{components:e}=t,o=l(t,["components"]);return(0,n.kt)(u,a({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"monitors"}),"Monitors"),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Monitoring provides a comprehensive overview of the status and performance of the Server Group  and/or individual real servers inside the server group. If a monitor is attached to a server group, then it will get applied to all the servers inside that group automatically. If a monitor is attached to a particular server then it will override the configuration of the server-group monitor. Health Checks computes an overall health state for each upstream server in the listener. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy."),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stack")," > ",(0,n.kt)("a",a({parentName:"li"},{href:"/enterprise/adc"}),(0,n.kt)("strong",{parentName:"a"},"SLB")),"  > ",(0,n.kt)("a",a({parentName:"li"},{href:"/v8/enterprise/adc/listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"li"},"Monitors"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Add Monitor"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"monitor1",src:r(35544).Z,width:"1436",height:"910"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Monitor Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Health Check Interval"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Fail Threshold"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Pass Threshold"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Monitor Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Health Check Type"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TCP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check Port"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"HTTP Method"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"GET")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Status"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"200")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Content"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Health Script"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"monitor-name"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor Name")),(0,n.kt)("p",null,"This option allows users to specify a user-friendly name to monitor."),(0,n.kt)("h5",a({},{id:"health-check-interval"}),(0,n.kt)("strong",{parentName:"h5"},"Health Check Interval")),(0,n.kt)("p",null,"This option allows users to specify the health check interval in seconds."),(0,n.kt)("h5",a({},{id:"fail-threshold"}),(0,n.kt)("strong",{parentName:"h5"},"Fail Threshold")),(0,n.kt)("p",null,"This option allows users to specify the fail threshold."),(0,n.kt)("h5",a({},{id:"pass-threshold"}),(0,n.kt)("strong",{parentName:"h5"},"Pass Threshold")),(0,n.kt)("p",null,"This option allows users to specify the pass threshold."),(0,n.kt)("h5",a({},{id:"monitor-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor Timeout")),(0,n.kt)("p",null,"This option allows users to specify the timeout interval in seconds."),(0,n.kt)("h5",a({},{id:"health-check-type"}),(0,n.kt)("strong",{parentName:"h5"},"Health Check Type")),(0,n.kt)("p",null,"This option allows users to specify the health check type for the load balancer."),(0,n.kt)("h5",a({},{id:"check-port"}),(0,n.kt)("strong",{parentName:"h5"},"Check Port")),(0,n.kt)("p",null,"This option allows users to specify port on which the health check will be carried out. "),(0,n.kt)("h5",a({},{id:"http-method"}),(0,n.kt)("strong",{parentName:"h5"},"HTTP Method")),(0,n.kt)("p",null,"This option allows users to specify the health check type HTTP monitoring. This option will only be visible when HTTP is selected in Health Check Type."),(0,n.kt)("h5",a({},{id:"check-uri"}),(0,n.kt)("strong",{parentName:"h5"},"Check URI")),(0,n.kt)("p",null,"This option allows users to specify the check URI. This option will only be visible when HTTP is selected in Health Check Type."),(0,n.kt)("h5",a({},{id:"match-status"}),(0,n.kt)("strong",{parentName:"h5"},"Match Status")),(0,n.kt)("p",null,"This option allows users to specify the response HTTP status to verify. This option will only be visible when HTTP is selected in Health Check Type."),(0,n.kt)("h5",a({},{id:"match-content"}),(0,n.kt)("strong",{parentName:"h5"},"Match Content")),(0,n.kt)("p",null,"This option allows users to specify the content to match in the response. This option will only be visible when HTTP, HTTPS, & POP is selected in Health Check Type."),(0,n.kt)("h5",a({},{id:"health-script"}),(0,n.kt)("strong",{parentName:"h5"},"Health Script")),(0,n.kt)("p",null,"This option allows users to select your custom health check script. This option will only be visible when HTTP is selected in Health Check Type."))}d.isMDXComponent=!0},35544:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/monitor-46c4d5d2b8bf356c396dc0b59f6f1114.png"}}]);