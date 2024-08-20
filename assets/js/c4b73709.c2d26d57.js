"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[91384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:1},s="Server Groups",l={unversionedId:"docs/waf/server_group/server_groups",id:"docs/waf/server_group/server_groups",title:"Server Groups",description:"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen",source:"@site/professional/docs/waf/server_group/server_groups.md",sourceDirName:"docs/waf/server_group",slug:"/docs/waf/server_group/server_groups",permalink:"/professional/docs/waf/server_group/server_groups",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"professional_sidebar",previous:{title:"Compression",permalink:"/professional/docs/waf/performance/compression"},next:{title:"Servers",permalink:"/professional/docs/waf/server_group/servers"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Group Name</strong>",id:"group-name",level:5},{value:"<strong>Monitor</strong>",id:"monitor",level:5},{value:"<strong>Connect Timeout</strong>",id:"connect-timeout",level:5},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:5},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:5}],c={toc:u},m="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(m,o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"server-groups"}),"Server Groups"),(0,n.kt)("p",null,"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the Servers page. To pass requests to a server group, use Upstream Rules."),(0,n.kt)("p",null,"This is useful for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Autoscaling, when you need to add more servers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Backup Server, When all active servers breach the failure ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Monitoring, when you get the state of the server or server group with one command."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"server_groups",src:r(26921).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"server_groups",src:r(98375).Z,width:"1888",height:"990"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,n.kt)("li",{parentName:"ol"},"Then go to ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Groups")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Server Group")," and Configure details."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Group Name"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Monitor"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Select from existing monitors"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Connect Timeout"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer (Seconds)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Send Timeout"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer (Seconds)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Read Timeout"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Integer (Seconds)"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"100")))),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("h5",o({},{id:"group-name"}),(0,n.kt)("strong",{parentName:"h5"},"Group Name")),(0,n.kt)("p",null,"Specify a user-friendly name to identify the server group. The group name takes alpha-numeric input.  "),(0,n.kt)("h5",o({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor")),(0,n.kt)("p",null,"Attach any existing monitor to the server group."),(0,n.kt)("h5",o({},{id:"connect-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Connect Timeout")),(0,n.kt)("p",null,"Defines a timeout for establishing a connection with a proxied server."),(0,n.kt)("h5",o({},{id:"send-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Send Timeout")),(0,n.kt)("p",null,"Sets a timeout for transmitting a request to the proxied server. The timeout is set only between two successive write operations, not for the transmission of the whole request. If the proxied server does not receive anything within this time, the connection is closed."),(0,n.kt)("h5",o({},{id:"read-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Read Timeout")),(0,n.kt)("p",null,"Defines a timeout for reading a response from the proxied server. The timeout is set only between two successive read operations, not for the transmission of the whole response. If the proxied server does not transmit anything within this time, the connection is closed."))}d.isMDXComponent=!0},26921:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server_group1-bd88afcf6bb92c227803b0cddc5a9c98.png"},98375:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server_group2-c82bfc69118524a8696f8d32d2876654.png"}}]);