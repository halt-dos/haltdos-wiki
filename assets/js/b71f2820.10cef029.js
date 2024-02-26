"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[33988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73506:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:1},l="Servers",s={unversionedId:"community/docs/waf/server_farm/servers",id:"community/docs/waf/server_farm/servers",title:"Servers",description:"Overview",source:"@site/docs/community/docs/waf/server_farm/servers.md",sourceDirName:"community/docs/waf/server_farm",slug:"/community/docs/waf/server_farm/servers",permalink:"/v8/community/docs/waf/server_farm/servers",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"community_sidebar",previous:{title:"Bot Protection",permalink:"/v8/community/docs/waf/bot_protection"},next:{title:"Load Balancing",permalink:"/v8/community/docs/waf/server_farm/load_balancing"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description:",id:"description",level:3},{value:"<strong>Server</strong>",id:"server",level:4},{value:"<strong>Port</strong>",id:"port",level:4},{value:"<strong>Weight</strong>",id:"weight",level:4},{value:"<strong>Monitor</strong>",id:"monitor",level:4},{value:"<strong>Backup</strong>",id:"backup",level:4},{value:"<strong>Mode</strong>",id:"mode",level:4},{value:"<strong>Max Connection</strong>",id:"max-connection",level:4},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:4},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:4},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:4}],c={toc:u},m="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(m,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"servers"}),"Servers"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Users can add/delete the backend servers. Users are also allowed to modify the server settings like, changing server mode, set the backend port, attach monitor to the backend server, set max concurrent connection etc."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Servers",src:r(10778).Z,width:"1918",height:"976"})),(0,n.kt)("h2",a({},{id:"how-to-use-"}),"How to Use :"),(0,n.kt)("p",null,"1.Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Server Farm")," > ",(0,n.kt)("strong",{parentName:"p"},"Servers")),(0,n.kt)("p",null,"2.Click ",(0,n.kt)("strong",{parentName:"p"},"Add Server")," and configure it with basic and advanced configuration."),(0,n.kt)("p",null,"3.Set the configurations and ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Server"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"IP"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Port"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Weight"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Monitor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Existing monitor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"NONE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Backup"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TRUE/FALSE"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"FALSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mode"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Ready/Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Ready")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Max Connection"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Connection Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Send Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Read Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")))),(0,n.kt)("h3",a({},{id:"description"}),"Description:"),(0,n.kt)("h4",a({},{id:"server"}),(0,n.kt)("strong",{parentName:"h4"},"Server")),(0,n.kt)("p",null,"This option allows user to specify the IP address for the server for serving the request for the application."),(0,n.kt)("h4",a({},{id:"port"}),(0,n.kt)("strong",{parentName:"h4"},"Port")),(0,n.kt)("p",null,"This option allows user to set the port for the back-end application server for communication."),(0,n.kt)("h4",a({},{id:"weight"}),(0,n.kt)("strong",{parentName:"h4"},"Weight")),(0,n.kt)("p",null,"This option allows user to specify the weight of the server. Higher the weight more requests will be served by that server. "),(0,n.kt)("h4",a({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h4"},"Monitor")),(0,n.kt)("p",null,"This option alows user to select from the monitors created. Monitors help in monitoring the health of the server."),(0,n.kt)("h4",a({},{id:"backup"}),(0,n.kt)("strong",{parentName:"h4"},"Backup")),(0,n.kt)("p",null,"This option allows user to specify if backup is allowed for the server. In case of primary failure, the backup will be up and running."),(0,n.kt)("h4",a({},{id:"mode"}),(0,n.kt)("strong",{parentName:"h4"},"Mode")),(0,n.kt)("p",null,"This option allows user to specify the server mode, either it is ready or down."),(0,n.kt)("h4",a({},{id:"max-connection"}),(0,n.kt)("strong",{parentName:"h4"},"Max Connection")),(0,n.kt)("p",null,"This option allows user to specify the number of maximum connections allowed to the specific server."),(0,n.kt)("h4",a({},{id:"connection-timeout"}),(0,n.kt)("strong",{parentName:"h4"},"Connection Timeout")),(0,n.kt)("p",null,"This option allows user to specify the connection timeout for the server."),(0,n.kt)("h4",a({},{id:"send-timeout"}),(0,n.kt)("strong",{parentName:"h4"},"Send Timeout")),(0,n.kt)("p",null,"This option allows user to specify the send timeout for the server. "),(0,n.kt)("h4",a({},{id:"read-timeout"}),(0,n.kt)("strong",{parentName:"h4"},"Read Timeout")),(0,n.kt)("p",null,"This option allows user to specify the read timeout for the server."))}d.isMDXComponent=!0},10778:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/serversettings-8588e1eea717e2f9f217e0094c4839cd.png"}}]);