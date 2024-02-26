"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[4813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:2},i="Servers",p={unversionedId:"cloud/waf/listener/server-groups/servers",id:"cloud/waf/listener/server-groups/servers",title:"Servers",description:"Configure the application servers",source:"@site/docs/cloud/waf/listener/server-groups/servers.md",sourceDirName:"cloud/waf/listener/server-groups",slug:"/cloud/waf/listener/server-groups/servers",permalink:"/v8/cloud/waf/listener/server-groups/servers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"cloud_sidebar",previous:{title:"Server Groups",permalink:"/v8/cloud/waf/listener/server-groups/"},next:{title:"Load Balancing",permalink:"/v8/cloud/waf/listener/server-groups/load-balancing"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],c={toc:s},m="wrapper";function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"servers"}),"Servers"),(0,n.kt)("p",null,"Configure the application servers"),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Configuration of upstream servers in a server group can be modified on-the-fly by using Servers."),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Server Groups > Servers"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Server")," and configure it with basic and advanced configuration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the configurations and ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Server"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"IP"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Port"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Weight"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Remote"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TRUE/FALSE"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"FALSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Monitor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Existing monitor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"NONE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Backup"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TRUE/FALSE"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"FALSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TRUE/FALSE"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"FALSE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Max Connection"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Connection Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Send Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Read Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")))),(0,n.kt)("h4",a({},{id:"description"}),"Description:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Server")),(0,n.kt)("p",null,"Specify the IP address for the server. This IP address will be used for serving the requests for the application."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Port")," "),(0,n.kt)("p",null,"Set the port for the backend application server will communicate."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Weight")," "),(0,n.kt)("p",null,"Specify the weight of the server. Higher the weight more requests will be served by that server. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Remote")," "),(0,n.kt)("p",null,"Specify if the server can be accessed remotely or not."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Monitor")," "),(0,n.kt)("p",null,"Select from the monitors created. Monitors help in monitoring the health of the server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Backup")," "),(0,n.kt)("p",null,"Specify if backup is allowed for the server. In case of primary failure, the backup will be up and running."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Down")," "),(0,n.kt)("p",null,"Makes the server active/inactive. When marked Down the server will not be able to serve requests."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Max Connection")," "),(0,n.kt)("p",null,"Specify the number of max connections allowed to the specific server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Connection Timeout")," "),(0,n.kt)("p",null,"Specify the connection timeout for the server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Send Timeout")," "),(0,n.kt)("p",null,"Specify the send timeout for the server. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Read Timeout")," "),(0,n.kt)("p",null,"Specify the read timeout for the server."))}d.isMDXComponent=!0}}]);