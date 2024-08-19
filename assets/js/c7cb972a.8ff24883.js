"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[17366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),v=o,f=u["".concat(i,".").concat(v)]||u[v]||d[v]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=v;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},76243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={sidebar_position:1},s="Servers",i={unversionedId:"cloud/waf/listener/loadBalancing/serverGroup/servers",id:"cloud/waf/listener/loadBalancing/serverGroup/servers",title:"Servers",description:"Configure the application servers",source:"@site/docs/cloud/waf/listener/loadBalancing/serverGroup/servers.md",sourceDirName:"cloud/waf/listener/loadBalancing/serverGroup",slug:"/cloud/waf/listener/loadBalancing/serverGroup/servers",permalink:"/cloud/waf/listener/loadBalancing/serverGroup/servers",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cloud_sidebar",previous:{title:"Server Groups",permalink:"/cloud/waf/listener/loadBalancing/serverGroup/"},next:{title:"Load Balancing",permalink:"/cloud/waf/listener/loadBalancing/serverGroup/loadbalancing"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description:",id:"description",level:3},{value:"<strong>Server</strong>",id:"server",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>DNS Record Type</strong>",id:"dns-record-type",level:5},{value:"<strong>Weight</strong>",id:"weight",level:5},{value:"<strong>Remote</strong>",id:"remote",level:5},{value:"<strong>Monitor</strong>",id:"monitor",level:5},{value:"<strong>Backup</strong>",id:"backup",level:5},{value:"<strong>Mode</strong>",id:"mode",level:5},{value:"<strong>Slow Start</strong>",id:"slow-start",level:5},{value:"<strong>Max Connection</strong>",id:"max-connection",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:5},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:5}],u={toc:c},d="wrapper";function v(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(d,o({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"servers"}),"Servers"),(0,n.kt)("p",null,"Configure the application servers"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Configuration of upstream servers in a server group can be modified on-the-fly by using Servers."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Servers",src:r(85346).Z,width:"1910",height:"900"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Servers",src:r(57861).Z,width:"1910",height:"900"})),(0,n.kt)("h2",o({},{id:"how-to-use-"}),"How to Use :"),(0,n.kt)("p",null,"1.Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"p"},"Server Groups")," > ",(0,n.kt)("strong",{parentName:"p"},"Servers")),(0,n.kt)("p",null,"2.Click ",(0,n.kt)("strong",{parentName:"p"},"Add Server")," and configure it with basic and advanced configuration."),(0,n.kt)("p",null,"3.Set the configurations and ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")),(0,n.kt)("h3",o({},{id:"description"}),"Description:"),(0,n.kt)("h5",o({},{id:"server"}),(0,n.kt)("strong",{parentName:"h5"},"Server")),(0,n.kt)("p",null,"This option allows user to specify the IP address for the server for serving the request for the application."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank\n")),(0,n.kt)("h5",o({},{id:"port"}),(0,n.kt)("strong",{parentName:"h5"},"Port")),(0,n.kt)("p",null,"This option allows user to set the port for the back-end application server for communication."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 65535\n\nMin: 0\n\nDefault: 80\n")),(0,n.kt)("h5",o({},{id:"dns-record-type"}),(0,n.kt)("strong",{parentName:"h5"},"DNS Record Type")),(0,n.kt)("p",null,"It is used to map domain names to various types of data such as IP addresses and services."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: ANY / A Record / AAAA Record\n\nDefault: ANY\n")),(0,n.kt)("h5",o({},{id:"weight"}),(0,n.kt)("strong",{parentName:"h5"},"Weight")),(0,n.kt)("p",null,"This option allows user to specify the weight of the server. Higher the weight more requests will be served by that server. "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 100\n\nMin:  1\n\nDefault: 1 \n")),(0,n.kt)("h5",o({},{id:"remote"}),(0,n.kt)("strong",{parentName:"h5"},"Remote")),(0,n.kt)("p",null,"This option allows user to specify if the server can be accessed remotely or not."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: True / False\n\nDefault: False\n")),(0,n.kt)("h5",o({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor")),(0,n.kt)("p",null,"This option allows user to select from the monitors created. Monitors help in monitoring the health of the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select Existing monitor\n\nDefault: None\n")),(0,n.kt)("h5",o({},{id:"backup"}),(0,n.kt)("strong",{parentName:"h5"},"Backup")),(0,n.kt)("p",null,"This option allows user to specify if backup is allowed for the server. In case of primary failure, the backup will be up and running."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: True / False\n\nDefault: False\n")),(0,n.kt)("h5",o({},{id:"mode"}),(0,n.kt)("strong",{parentName:"h5"},"Mode")),(0,n.kt)("p",null,"This option allows user to make the server active/inactive. When marked Down the server will not be able to serve requests."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Ready / Down\n\nDefault: Ready\n")),(0,n.kt)("h5",o({},{id:"slow-start"}),(0,n.kt)("strong",{parentName:"h5"},"Slow Start")),(0,n.kt)("p",null,"This option allows user to specify the Slow Start for the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("h5",o({},{id:"max-connection"}),(0,n.kt)("strong",{parentName:"h5"},"Max Connection")),(0,n.kt)("p",null,"This option allows user to specify the number of maximum connections allowed to the specific server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("h5",o({},{id:"connection-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Connection Timeout")),(0,n.kt)("p",null,"This option allows user to specify the connection timeout for the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0 \n\nDefault: 0 \n\nMetrics: Seconds \n")),(0,n.kt)("h5",o({},{id:"send-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Send Timeout")),(0,n.kt)("p",null,"This option allows user to specify to send timeout for the server. "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0 \n\nDefault: 0 \n\nMetrics: Seconds \n")),(0,n.kt)("h5",o({},{id:"read-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Read Timeout")),(0,n.kt)("p",null,"This option allows user to specify the read timeout for the server."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000000\n\nMin: 0\n\nDefault: 0 \n\nMetrics: Seconds\n")))}v.isMDXComponent=!0},85346:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers1-a5cc0bc10bd13f807855ce585cc97c2f.png"},57861:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servers2-c5a12f73faad3c7a4ab03745153a9b01.png"}}]);