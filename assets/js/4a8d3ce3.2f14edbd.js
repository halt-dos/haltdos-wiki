"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[33e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),v=o,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},90372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:2},s="Servers",l={unversionedId:"professional/waf/server_group/servers",id:"version-7.0/professional/waf/server_group/servers",title:"Servers",description:"Configure the application servers",source:"@site/versioned_docs/version-7.0/professional/waf/server_group/servers.md",sourceDirName:"professional/waf/server_group",slug:"/professional/waf/server_group/servers",permalink:"/professional/waf/server_group/servers",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"professional_sidebar",previous:{title:"Server Groups",permalink:"/professional/waf/server_group/"},next:{title:"Load Balancing",permalink:"/professional/waf/server_group/loadbalancing"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Server</strong>",id:"server",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Weight</strong>",id:"weight",level:5},{value:"<strong>Monitor</strong>",id:"monitor",level:5},{value:"<strong>Backup</strong>",id:"backup",level:5},{value:"<strong>Mode</strong>",id:"mode",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:5},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:5}],u={toc:c},d="wrapper";function v(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"servers"}),"Servers"),(0,n.kt)("p",null,"Configure the application servers"),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Configuration of upstream servers in a server group can be modified on-the-fly by using Servers."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"servers",src:r(79669).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"servers",src:r(26509).Z,width:"1888",height:"990"}),"\n",(0,n.kt)("img",{alt:"servers",src:r(62020).Z,width:"1888",height:"990"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,n.kt)("li",{parentName:"ol"},"Then go to ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Groups")," > ",(0,n.kt)("strong",{parentName:"li"},"Servers")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Server")," and configure it with basic and advanced configuration."),(0,n.kt)("li",{parentName:"ol"},"Set the configurations and ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h3",o({},{id:"description"}),"Description:"),(0,n.kt)("h5",o({},{id:"server"}),(0,n.kt)("strong",{parentName:"h5"},"Server")),(0,n.kt)("p",null,"Specify the IP address for the server. This IP address will be used for serving the requests for the application."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"port"}),(0,n.kt)("strong",{parentName:"h5"},"Port")),(0,n.kt)("p",null,"Set the port for the backend application server will communicate."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 65535\n\nMin: 0\n\nDefault: 80 \n")),(0,n.kt)("h5",o({},{id:"weight"}),(0,n.kt)("strong",{parentName:"h5"},"Weight")),(0,n.kt)("p",null,"Specify the weight of the server. Higher the weight more requests will be served by that server. "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 100\n\nMin:  1\n\nDefault: 1 \n")),(0,n.kt)("h5",o({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor")),(0,n.kt)("p",null,"Select from the monitors created. Monitors help in monitoring the health of the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select Existing monitor\n\nDefault: None \n")),(0,n.kt)("h5",o({},{id:"backup"}),(0,n.kt)("strong",{parentName:"h5"},"Backup")),(0,n.kt)("p",null,"Specify if backup is allowed for the server. In case of primary failure, the backup will be up and running."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: True / False\n\nDefault: False\n")),(0,n.kt)("h5",o({},{id:"mode"}),(0,n.kt)("strong",{parentName:"h5"},"Mode")),(0,n.kt)("p",null,"Makes the server active/inactive. When marked Down the server will not be able to serve requests."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Ready / Down\n\nDefault: Ready \n")),(0,n.kt)("h5",o({},{id:"connection-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Connection Timeout")),(0,n.kt)("p",null,"Specify the connection timeout for the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0 \n\nDefault: 0 \n\nMetrics: Seconds \n")),(0,n.kt)("h5",o({},{id:"send-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Send Timeout")),(0,n.kt)("p",null,"Specify the send timeout for the server. "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0 \n\nDefault: 0 \n\nMetrics: Seconds \n")),(0,n.kt)("h5",o({},{id:"read-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Read Timeout")),(0,n.kt)("p",null,"Specify the read timeout for the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 0 \n\nMetrics: Seconds\n")))}v.isMDXComponent=!0},79669:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers1-e4bac373becc057a105190cb7d033cda.png"},26509:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers2-f606a7293848f38651f996000bf96e20.png"},62020:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers3-7f489b5b8e851bb07bc29d83f06ffd5a.png"}}]);