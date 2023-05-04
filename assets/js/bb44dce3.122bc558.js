"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[80085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},91569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:7},i="Monitors",s={unversionedId:"cloud/waf/listener/monitors",id:"version-6.0/cloud/waf/listener/monitors",title:"Monitors",description:"Continually test your upstream servers, avoid the servers that have failed, and gracefully add the recovered servers into the server group.",source:"@site/versioned_docs/version-6.0/cloud/waf/listener/monitors.md",sourceDirName:"cloud/waf/listener",slug:"/cloud/waf/listener/monitors",permalink:"/v6/cloud/waf/listener/monitors",draft:!1,tags:[],version:"6.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"cloud_sidebar",previous:{title:"Load Balancing",permalink:"/v6/cloud/waf/listener/server-groups/load-balancing"},next:{title:"Advanced Settings",permalink:"/v6/cloud/waf/listener/advanced-settings/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:c},d="wrapper";function h(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(d,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"monitors"}),"Monitors"),(0,n.kt)("p",null,"Continually test your upstream servers, avoid the servers that have failed, and gracefully add the recovered servers into the server group."),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Monitoring provides a comprehensive overview of the status and performance of the server group and/or individual servers inside the server group. If a monitor is attached to a server group, then it will get applied to all the servers inside that group automatically. If a monitor is attached to a particular server then it will override the configuration of the server-group monitor. Health Checks computes an overall health state for each upstream server in the listener. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy."),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Monitors"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Monitor"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the monitor name to configure the Health check and click ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Server Groups"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the monitor to the server group and/or server as required."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enable Health Check"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Health Check Interval"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"5000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Health Check Type"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TCP/HTTP/SSL Hello/HTTPS"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TCP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Port"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Port number"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"GET /")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Status"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Response Code"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"200")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Content"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Content to be matched in header/body"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Fail Threshold"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Pass Threshold"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")))),(0,n.kt)("h4",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enable Health Check"),": Enable to periodically check the health of upstream servers by sending special health\u2011check requests to each server and verifying the correct response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Health Check Interval"),": Set the seconds, say 10, then every 10 seconds WAF sends a request for \u201c/\u201d to each server/server group. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Health Check Type:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"HTTP"),": Works for HTTP servers. Health check sends the request, if unable to send request, then we make that server unhealthy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SSL HELLO"),": Works for HTTP servers. Health check tries SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"TCP"),": Works for TCP servers. Health check simply attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"HTTPS"),": Works for HTTPS servers. Health check sends the request, if unable to send request, then we make that server as unhealthy"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Port"),": Specify a new port with the port parameter"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check URI"),": The specified URI is appended to the server domain name or IP address set for the server in the server block."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Match Status"),": Using this directive it is possible to verify whether the status is in a specified range. It contains one status code."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Match Content"),": Using this directive it is possible to verify whether the header or body matches a regular expression. It can contain one status code, one body condition, and multiple header conditions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fail Threshold"),": Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pass Threshold"),": Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one."))}h.isMDXComponent=!0}}]);