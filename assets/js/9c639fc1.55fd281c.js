"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[9352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},27763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={},i="Server Groups",s={unversionedId:"enterprise/waf/listener/server_groups/servergroup",id:"version-7.0/enterprise/waf/listener/server_groups/servergroup",title:"Server Groups",description:"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/server_groups/servergroup.md",sourceDirName:"enterprise/waf/listener/server_groups",slug:"/enterprise/waf/listener/server_groups/servergroup",permalink:"/enterprise/waf/listener/server_groups/servergroup",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Compression",permalink:"/enterprise/waf/listener/performance/compression"},next:{title:"Load Balancing",permalink:"/enterprise/waf/listener/server_groups/loadbalancing"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Group Name</strong>",id:"group-name",level:5},{value:"<strong>Monitor</strong>",id:"monitor",level:5},{value:"<strong>SSL</strong>",id:"ssl",level:5},{value:"<strong>Max Connection</strong>",id:"max-connection",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:5},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:5}],c={toc:u},m="wrapper";function g(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(m,a({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"server-groups"}),"Server Groups"),(0,n.kt)("p",null,"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen"),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the ",(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/waf/listener/server_groups/servers"}),(0,n.kt)("strong",{parentName:"a"},"servers"))," page. To pass requests to a server group, use ",(0,n.kt)("strong",{parentName:"p"},"Upstream Rules"),"."),(0,n.kt)("p",null,"This is useful for:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Auto-scaling, when you need to add more servers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Backup Server, When all active servers breach the failure threshold then the backup server will be up and inline to handle the traffic.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts."))),(0,n.kt)("p",null,"Monitoring, when you get the state of the server or server group with one command."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server Group",src:r(4078).Z,width:"1836",height:"763"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Groups")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Server Group")," and Configure details."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Group Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Monitor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Select from existing monitors"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SSL"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Max Connection"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Connection Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Send Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Read Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"group-name"}),(0,n.kt)("strong",{parentName:"h5"},"Group Name")),(0,n.kt)("p",null,"Specify a user-friendly name to identify the server group. The group name takes alphanumeric input.  "),(0,n.kt)("h5",a({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor")),(0,n.kt)("p",null,"This option allows user to attach any existing monitor to the server group."),(0,n.kt)("h5",a({},{id:"ssl"}),(0,n.kt)("strong",{parentName:"h5"},"SSL")),(0,n.kt)("p",null,"This option allows user to enable or disable SSL for the server group."),(0,n.kt)("h5",a({},{id:"max-connection"}),(0,n.kt)("strong",{parentName:"h5"},"Max Connection")),(0,n.kt)("p",null,"This option allows user to specify the number of maximum connections allowed to the specific server."),(0,n.kt)("h5",a({},{id:"connection-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Connection Timeout")),(0,n.kt)("p",null,"This option allows user to specify the connection timeout for the server."),(0,n.kt)("h5",a({},{id:"send-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Send Timeout")),(0,n.kt)("p",null,"This option allows user to specify to send timeout for the server. "),(0,n.kt)("h5",a({},{id:"read-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Read Timeout")),(0,n.kt)("p",null,"This option allows user to specify the read timeout for the server."))}g.isMDXComponent=!0},4078:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servergroup-115c5755033914ae6302919ef17e75e0.png"}}]);