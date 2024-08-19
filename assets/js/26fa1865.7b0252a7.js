"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[93711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},h),{},{components:r})):n.createElement(m,l({ref:t},h))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>h});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:3},i="Server Monitors",s={unversionedId:"community/waf/server_farm/monitors",id:"version-7.0/community/waf/server_farm/monitors",title:"Server Monitors",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/server_farm/monitors.md",sourceDirName:"community/waf/server_farm",slug:"/community/waf/server_farm/monitors",permalink:"/v7/community/waf/server_farm/monitors",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"community_sidebar",previous:{title:"Load Balancing",permalink:"/v7/community/waf/server_farm/load_balancing"},next:{title:"WEB Policy",permalink:"/v7/community/waf/policy/web_policy"}},c={},h=[{value:"Overview",id:"overview",level:3},{value:"How to you Use:",id:"how-to-you-use",level:3},{value:"Description",id:"description",level:3},{value:"Monitor Name",id:"monitor-name",level:4},{value:"Enable Health Check",id:"enable-health-check",level:4},{value:"Health Check Interval",id:"health-check-interval",level:4},{value:"Fail Threshold",id:"fail-threshold",level:4},{value:"Pass Threshold",id:"pass-threshold",level:4},{value:"Health Check Type:",id:"health-check-type",level:4},{value:"Match Content",id:"match-content",level:4},{value:"Check URI",id:"check-uri",level:4},{value:"Match Status",id:"match-status",level:4},{value:"Match Content",id:"match-content-1",level:4}],p={toc:h},u="wrapper";function d(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(u,a({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"server-monitors"}),"Server Monitors"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Monitoring provides a comprehensive overview of the status and performance of the individual real servers. If a monitor is attached to a server, then it will get applied to the server for monitoring purposes as per the health check specified in the monitor. Health Checks computes an overall health state for upstream server in the WAF. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Monitors",src:r(2534).Z,width:"1918",height:"976"})),(0,n.kt)("h3",a({},{id:"how-to-you-use"}),"How to you Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Farm")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Monitors")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Monitor")),(0,n.kt)("li",{parentName:"ol"},"Click on the monitor name to configure the Health Check and click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h4",a({},{id:"monitor-name"}),"Monitor Name"),(0,n.kt)("p",null,"Users are allowed to specify a user friendly name to monitor."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String / Integer\n\nDefault: Blank  \n")),(0,n.kt)("h4",a({},{id:"enable-health-check"}),"Enable Health Check"),(0,n.kt)("p",null,"Users are allowed to enable to periodically check the health of upstream servers by sending special health\u2011check requests to each server and verifying the correct response."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable \n\nDefault: Disable  \n")),(0,n.kt)("h4",a({},{id:"health-check-interval"}),"Health Check Interval"),(0,n.kt)("p",null,"Set the seconds, say 10, then every 10 seconds WAF sends a request for \u201c/\u201d to each server. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 10  \n\nMetrics: Second\n")),(0,n.kt)("h4",a({},{id:"fail-threshold"}),"Fail Threshold"),(0,n.kt)("p",null,"Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt)."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 1  \n")),(0,n.kt)("h4",a({},{id:"pass-threshold"}),"Pass Threshold"),(0,n.kt)("p",null,"Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 1  \n")),(0,n.kt)("h4",a({},{id:"health-check-type"}),"Health Check Type:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"TCP"),":\nHealth check attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"SSL HELLO"),":\nHealth check sends SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"HTTP"),":\nHealth check sends HTTP request, if unable to receive response, then we make that server unhealthy."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"HTTPS"),":\nHealth check sends HTTPS request, if unable to receive response, then we make that server as unhealthy")),(0,n.kt)("h4",a({},{id:"match-content"}),"Match Content"),(0,n.kt)("p",null,"This option is only visible when ",(0,n.kt)("strong",{parentName:"p"},"Health Check Type")," is set to HTTP/HTTPs. This option allows users to specify the content to match in the response."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: TCP / SSL HELLO / HTTP / HTTPS\n\nDefault: TCP\n")),(0,n.kt)("h4",a({},{id:"check-uri"}),"Check URI"),(0,n.kt)("p",null,"This option is only visible when ",(0,n.kt)("strong",{parentName:"p"},"Health Check Type")," is set to HTTP/HTTPs. This option allows user to specify the URI for the health check."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: URI for health check\n\nDefault: GET /\n")),(0,n.kt)("h4",a({},{id:"match-status"}),"Match Status"),(0,n.kt)("p",null,"This option is only visible when ",(0,n.kt)("strong",{parentName:"p"},"Health Check Type")," is set to HTTP/HTTPs. This option allows user to specify the HTTP status code that need to be checked during the health check."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 200\n")),(0,n.kt)("h4",a({},{id:"match-content-1"}),"Match Content"),(0,n.kt)("p",null,"This option is only visible when ",(0,n.kt)("strong",{parentName:"p"},"Health Check Type")," is set to HTTP/HTTPs. This option allows user to specify the content to match in the response."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}d.isMDXComponent=!0},2534:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor2-e9925e9c11d611196908f7b5ee23ff1a.png"}}]);