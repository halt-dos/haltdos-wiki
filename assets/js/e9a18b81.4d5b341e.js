"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[41525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_position:3},s="Monitors",l={unversionedId:"enterprise/gslb/listener/monitors",id:"version-7.0/enterprise/gslb/listener/monitors",title:"Monitors",description:"DNS Monitoring in Haltdos GSLB.",source:"@site/versioned_docs/version-7.0/enterprise/gslb/listener/monitors.md",sourceDirName:"enterprise/gslb/listener",slug:"/enterprise/gslb/listener/monitors",permalink:"/v7/enterprise/gslb/listener/monitors",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gslb_sidebar",previous:{title:"Zones",permalink:"/v7/enterprise/gslb/listener/zones"},next:{title:"Rules",permalink:"/v7/enterprise/gslb/listener/rules"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:c},m="wrapper";function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(m,o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"monitors"}),"Monitors"),(0,n.kt)("p",null,"DNS Monitoring in Haltdos GSLB."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos allows users to configure custom monitoring that can monitor the server. These monitors check the health of the server to assist in efficient way to distribute all queries as per server set-up.  "),(0,n.kt)("p",null,"If any of the server are monitored and marked as down, the traffic will not redirect to the same server unless the server comes up and complete the pass threshold meanwhile all the queries will be directed to another server."),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to  ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Monitors")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Monitor")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),"."),(0,n.kt)("li",{parentName:"ol"},"Now go to ",(0,n.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Zones")," > Click on ",(0,n.kt)("strong",{parentName:"li"},"Zone")),(0,n.kt)("li",{parentName:"ol"},"Add the monitor to the Zone Server as required")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"monitors",src:r(20278).Z,width:"1840",height:"789"})),(0,n.kt)("h4",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Monitor Name"),(0,n.kt)("br",{parentName:"p"}),"\n","This option allows the user to set a name for his monitoring rule."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Health Check Interval"),(0,n.kt)("br",{parentName:"p"}),"\n","This option allows the user to set a health check interval for monitoring the services in seconds. After the mentioned time period, defined monitor settings will be checked.  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 10\n\nMetrics: Seconds \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fail Threshold"),(0,n.kt)("br",{parentName:"p"}),"\n","This option allows the user to set the integer values for the fail threshold limit. When an already set monitor threshold reaches the specified threshold, it will be marked down. Users can set the threshold on network activities like latency, packet drop, and jitter."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: 1\n\nMetrics: Seconds \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pass Threshold"),(0,n.kt)("br",{parentName:"p"}),"\n","This option allows the user to set the integer values for the pass threshold limit. When the set monitor threshold reaches the specified threshold, it will be marked up.  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1 \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Monitor Timeout"),(0,n.kt)("br",{parentName:"p"}),"\n","It specifies the timeout after which the monitoring will be marked failed. Users can specify the timeout in seconds."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1 \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Health Check Type"),(0,n.kt)("br",{parentName:"p"}),"\n","It specifies the health check type for monitoring. Users need to select the appropriate type of protocol to monitor the interfaces. By default, TCP is selected."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: TCP / HTTP / HTTPS / SSL HELLO / ICMP / SCRIPT\n\nDefault: TCP \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check Port"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify the URI on which request will be send."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: 0\n")))}d.isMDXComponent=!0},20278:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor-fbfc006a9736a731d6598c71de266889.png"}}]);