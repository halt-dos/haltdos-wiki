"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[13183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66791:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=()=>n.createElement("div",{className:"badge badge--primary heading-badge"},"Beta Version")},13694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>d});r(67294);var n=r(3905),a=r(66791);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2},s="Servers",p={unversionedId:"professional/docs/waf/server_group/servers",id:"professional/docs/waf/server_group/servers",title:"Servers",description:"Configure the application servers",source:"@site/docs/professional/docs/waf/server_group/servers.md",sourceDirName:"professional/docs/waf/server_group",slug:"/professional/docs/waf/server_group/servers",permalink:"/professional/docs/waf/server_group/servers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"professional_sidebar",previous:{title:"Server Groups",permalink:"/professional/docs/waf/server_group/server_groups"},next:{title:"Load Balancing",permalink:"/professional/docs/waf/server_group/loadbalancing"}},u={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Server</strong>",id:"server",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Weight</strong>",id:"weight",level:5},{value:"<strong>Remote</strong>",id:"remote",level:5},{value:"<strong>Monitor</strong>",id:"monitor",level:5},{value:"<strong>Backup</strong>",id:"backup",level:5},{value:"<strong>Mode</strong>",id:"mode",level:5},{value:"<strong>Slow Start</strong>",id:"slow-start",level:5},{value:"<strong>Max Connection</strong>",id:"max-connection",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:5},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:5}],c={toc:d},m="wrapper";function g(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(m,o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"servers"}),"Servers"),(0,n.kt)(a.Z,{mdxType:"ProductBadge"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Configure the application servers"),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Configuration of upstream servers in a server group can be modified on-the-fly by using Servers."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"servers",src:r(79669).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"servers",src:r(26509).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"servers",src:r(62020).Z,width:"1888",height:"990"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,n.kt)("li",{parentName:"ol"},"Then go to ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Groups")," > ",(0,n.kt)("strong",{parentName:"li"},"Servers")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Server")," and configure it with basic and advanced configuration."),(0,n.kt)("li",{parentName:"ol"},"Set the configurations and ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Server"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"IP"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Port"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Weight"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Remote"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"TRUE/FALSE"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"FALSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Monitor"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Existing monitor"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"NONE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Backup"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"TRUE/FALSE"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"FALSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Mode"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"TRUE/FALSE"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"FALSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Slow Start"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Max Connection"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Connection Timeout"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Send Timeout"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Read Timeout"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"0")))),(0,n.kt)("h3",o({},{id:"description"}),"Description:"),(0,n.kt)("h5",o({},{id:"server"}),(0,n.kt)("strong",{parentName:"h5"},"Server")),(0,n.kt)("p",null,"Specify the IP address for the server. This IP address will be used for serving the requests for the application."),(0,n.kt)("h5",o({},{id:"port"}),(0,n.kt)("strong",{parentName:"h5"},"Port")),(0,n.kt)("p",null,"Set the port for the backend application server will communicate."),(0,n.kt)("h5",o({},{id:"weight"}),(0,n.kt)("strong",{parentName:"h5"},"Weight")),(0,n.kt)("p",null,"Specify the weight of the server. Higher the weight more requests will be served by that server. "),(0,n.kt)("h5",o({},{id:"remote"}),(0,n.kt)("strong",{parentName:"h5"},"Remote")),(0,n.kt)("p",null,"Specify if the server can be accessed remotely or not."),(0,n.kt)("h5",o({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor")),(0,n.kt)("p",null,"Select from the monitors created. Monitors help in monitoring the health of the server."),(0,n.kt)("h5",o({},{id:"backup"}),(0,n.kt)("strong",{parentName:"h5"},"Backup")),(0,n.kt)("p",null,"Specify if backup is allowed for the server. In case of primary failure, the backup will be up and running."),(0,n.kt)("h5",o({},{id:"mode"}),(0,n.kt)("strong",{parentName:"h5"},"Mode")),(0,n.kt)("p",null,"Makes the server active/inactive. When marked Down the server will not be able to serve requests."),(0,n.kt)("h5",o({},{id:"slow-start"}),(0,n.kt)("strong",{parentName:"h5"},"Slow Start")),(0,n.kt)("p",null,"This option allows users to handle client request slowly in start."),(0,n.kt)("h5",o({},{id:"max-connection"}),(0,n.kt)("strong",{parentName:"h5"},"Max Connection")),(0,n.kt)("p",null,"Specify the number of max connections allowed to the specific server."),(0,n.kt)("h5",o({},{id:"connection-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Connection Timeout")),(0,n.kt)("p",null,"Specify the connection timeout for the server."),(0,n.kt)("h5",o({},{id:"send-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Send Timeout")),(0,n.kt)("p",null,"Specify the send timeout for the server. "),(0,n.kt)("h5",o({},{id:"read-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Read Timeout")),(0,n.kt)("p",null,"Specify the read timeout for the server."))}g.isMDXComponent=!0},79669:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers1-e4bac373becc057a105190cb7d033cda.png"},26509:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers2-f606a7293848f38651f996000bf96e20.png"},62020:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers3-7f489b5b8e851bb07bc29d83f06ffd5a.png"}}]);