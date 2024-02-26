"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[35848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},17041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:1},s="Servers",i={unversionedId:"enterprise/adc/listeners/server_groups/servers",id:"version-7.0/enterprise/adc/listeners/server_groups/servers",title:"Servers",description:"servers",source:"@site/versioned_docs/version-7.0/enterprise/adc/listeners/server_groups/servers.md",sourceDirName:"enterprise/adc/listeners/server_groups",slug:"/enterprise/adc/listeners/server_groups/servers",permalink:"/enterprise/adc/listeners/server_groups/servers",draft:!1,tags:[],version:"7.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"adc_sidebar",previous:{title:"Server Groups",permalink:"/enterprise/adc/listeners/server_groups/"},next:{title:"Load Balancing",permalink:"/enterprise/adc/listeners/server_groups/load_balancing"}},p={},u=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Server ID</strong>",id:"server-id",level:5},{value:"<strong>Server</strong>",id:"server",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Weight</strong>",id:"weight",level:5},{value:"<strong>Back up</strong>",id:"back-up",level:5},{value:"<strong>Mode</strong>",id:"mode",level:5},{value:"Forwarded HTTP Version",id:"forwarded-http-version",level:5},{value:"<strong>Slow Start</strong>",id:"slow-start",level:5},{value:"<strong>Max Connection</strong>",id:"max-connection",level:5}],d={toc:u},c="wrapper";function g(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(c,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"servers"}),"Servers"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"servers",src:r(91738).Z,width:"1831",height:"415"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Stack > ",(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/adc"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/adc/listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"p"},"Server Groups"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Group name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("strong",{parentName:"p"},"Add Server")," option.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTING"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Server ID"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"--"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Server"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Port"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Weight"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Back up"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mode"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Ready")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Forwarded HTTP Version"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"any")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Slow Start"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Max Connection"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"servers2",src:r(61664).Z,width:"1828",height:"607"})),(0,n.kt)("h3",a({},{id:"description"}),"Description:"),(0,n.kt)("h5",a({},{id:"server-id"}),(0,n.kt)("strong",{parentName:"h5"},"Server ID")),(0,n.kt)("p",null,"Server ID is used to identify the upstream servers. It will be always unique for every original/upstream server."),(0,n.kt)("h5",a({},{id:"server"}),(0,n.kt)("strong",{parentName:"h5"},"Server")),(0,n.kt)("p",null,"This option allows users to add the server domain name/IPv4/IPv6 address of the server."),(0,n.kt)("h5",a({},{id:"port"}),(0,n.kt)("strong",{parentName:"h5"},"Port")),(0,n.kt)("p",null,"This option allows users to set the port number that is being used for the server."),(0,n.kt)("h5",a({},{id:"weight"}),(0,n.kt)("strong",{parentName:"h5"},"Weight")),(0,n.kt)("p",null,"This option allows users to set the weight value for the server. Server with a higher weight value will get more requests than servers with less weight value."),(0,n.kt)("h5",a({},{id:"back-up"}),(0,n.kt)("strong",{parentName:"h5"},"Back up")),(0,n.kt)("p",null,"This option allows users to enable or disable the backup server. If the user enables this option, that server will act as a backup server and after the set threshold limit this backup server will start. If the user disabled this option, that server will act as a normal server in the server group."),(0,n.kt)("h5",a({},{id:"mode"}),(0,n.kt)("strong",{parentName:"h5"},"Mode")),(0,n.kt)("p",null,"This option allows users to configure the server ready or down setting. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ready")," - If the user has set the Ready value in this option then server will take part actively in handling the client requests."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Down")," - If the user has set the Down value in this option then server will not take part actively in handling the client requests. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Gracefully Down")," - Gracefully Down option will ensure no active connection will be break during the server down activity, server will be handling the old connection until con-current connection count reach to 0. Once con-current connection will be 0 then server will be marked as down at SLB level. Hence, with the help this option, user can gracefully down any server.")),(0,n.kt)("h5",a({},{id:"forwarded-http-version"}),"Forwarded HTTP Version"),(0,n.kt)("p",null,"This option allows user to select HTTP version while forwarding request to the backend server."),(0,n.kt)("h5",a({},{id:"slow-start"}),(0,n.kt)("strong",{parentName:"h5"},"Slow Start")),(0,n.kt)("p",null," This option allows users to select the graceful start time for newly added servers."),(0,n.kt)("h5",a({},{id:"max-connection"}),(0,n.kt)("strong",{parentName:"h5"},"Max Connection")),(0,n.kt)("p",null,"The user can define how many maximum connections can be made on this particular server."))}g.isMDXComponent=!0},91738:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-c37ec7213f94c8086518182d1558dbfe.png"},61664:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server1-ec5e7fce50f6aaebebfe9bf8507d755e.png"}}]);