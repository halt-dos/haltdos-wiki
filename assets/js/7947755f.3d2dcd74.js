"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[81828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:1},l="Server Groups",s={unversionedId:"cloud/waf/listener/server-groups/server-groups",id:"cloud/waf/listener/server-groups/server-groups",title:"Server Groups",description:"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen",source:"@site/docs/cloud/waf/listener/server-groups/server-groups.md",sourceDirName:"cloud/waf/listener/server-groups",slug:"/cloud/waf/listener/server-groups/",permalink:"/cloud/waf/listener/server-groups/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cloud_sidebar",previous:{title:"Upstream rules",permalink:"/cloud/waf/listener/rules/upstream_rules"},next:{title:"Servers",permalink:"/cloud/waf/listener/server-groups/servers"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],c={toc:u},m="wrapper";function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(m,a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"server-groups"}),"Server Groups"),(0,n.kt)("p",null,"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen"),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the Servers page. To pass requests to a server group, use Upstream Rules."),(0,n.kt)("p",null,"This is useful for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Autoscaling, when you need to add more servers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Backup Server, When all active servers breach the failure ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Monitoring, when you get the state of the server or server group with one command."))),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Server Groups"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Server Group")," and configure details.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Group Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Monitor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Select from existing monitors"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Connect Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer (Seconds)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Send Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer (Seconds)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Read Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer (Seconds)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"100")))),(0,n.kt)("h4",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Group Name")),(0,n.kt)("p",null,"Specify a user-friendly name to identify the server group. The group name takes alpha-numeric input.  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Monitor")),(0,n.kt)("p",null,"Attach any existing monitor to the server group."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Connect Timeout")," "),(0,n.kt)("p",null,"Defines a timeout for establishing a connection with a proxied server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Send Timeout")," "),(0,n.kt)("p",null,"Sets a timeout for transmitting a request to the proxied server. The timeout is set only between two successive write operations, not for the transmission of the whole request. If the proxied server does not receive anything within this time, the connection is closed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Read Timeout")," "),(0,n.kt)("p",null,"Defines a timeout for reading a response from the proxied server. The timeout is set only between two successive read operations, not for the transmission of the whole response. If the proxied server does not transmit anything within this time, the connection is closed."))}d.isMDXComponent=!0}}]);