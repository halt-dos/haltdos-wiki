"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[59792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,d=c["".concat(l,".").concat(m)]||c[m]||v[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={},s="Server Groups",l={unversionedId:"enterprise/waf/listener/servergroup/servergroup",id:"version-7.0/enterprise/waf/listener/servergroup/servergroup",title:"Server Groups",description:"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/servergroup/servergroup.md",sourceDirName:"enterprise/waf/listener/servergroup",slug:"/enterprise/waf/listener/servergroup/",permalink:"/v7/enterprise/waf/listener/servergroup/",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Listener",permalink:"/v7/enterprise/waf/listener/"},next:{title:"Load Balancing",permalink:"/v7/enterprise/waf/listener/servergroup/loadbalancing"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Group Name</strong>",id:"group-name",level:5},{value:"<strong>Monitor</strong>",id:"monitor",level:5},{value:"<strong>SSL</strong>",id:"ssl",level:5},{value:"<strong>Max Connection</strong>",id:"max-connection",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:5},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:5}],c={toc:u},v="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(v,o({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"server-groups"}),"Server Groups"),(0,n.kt)("p",null,"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the ",(0,n.kt)("a",o({parentName:"p"},{href:"/v7/enterprise/waf/listener/servergroup/servers"}),(0,n.kt)("strong",{parentName:"a"},"servers"))," page. To pass requests to a server group, use ",(0,n.kt)("strong",{parentName:"p"},"Upstream Rules"),"."),(0,n.kt)("p",null,"This is useful for:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Auto-scaling, when you need to add more servers.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Backup Server, When all active servers breach the failure threshold then the backup server will be up and inline to handle the traffic.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts."))),(0,n.kt)("p",null,"Monitoring, when you get the state of the server or server group with one command."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server Group",src:r(4078).Z,width:"1836",height:"763"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Groups")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Server Group")," and Configure details."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("h5",o({},{id:"group-name"}),(0,n.kt)("strong",{parentName:"h5"},"Group Name")),(0,n.kt)("p",null,"Specify a user-friendly name to identify the server group. The group name takes alphanumeric input.  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",o({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor")),(0,n.kt)("p",null,"This option allows user to attach any existing monitor to the server group."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select from existing monitors\n\nDefault: None \n")),(0,n.kt)("h5",o({},{id:"ssl"}),(0,n.kt)("strong",{parentName:"h5"},"SSL")),(0,n.kt)("p",null,"This option allows user to enable or disable SSL for the server group."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,n.kt)("h5",o({},{id:"max-connection"}),(0,n.kt)("strong",{parentName:"h5"},"Max Connection")),(0,n.kt)("p",null,"This option allows user to specify the number of maximum connections allowed to the specific server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("h5",o({},{id:"connection-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Connection Timeout")),(0,n.kt)("p",null,"This option allows user to specify the connection timeout for the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 100\n\nMetrics: Seconds\n")),(0,n.kt)("h5",o({},{id:"send-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Send Timeout")),(0,n.kt)("p",null,"This option allows user to specify to send timeout for the server. "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 100 \n\nMetrics: Seconds \n")),(0,n.kt)("h5",o({},{id:"read-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Read Timeout")),(0,n.kt)("p",null,"This option allows user to specify the read timeout for the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 100 \n\nMetrics: Seconds\n")))}m.isMDXComponent=!0},4078:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servergroup-115c5755033914ae6302919ef17e75e0.png"}}]);