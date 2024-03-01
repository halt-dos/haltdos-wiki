"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:1},i="LLB Settings",s={unversionedId:"enterprise/llb/llb_settings",id:"enterprise/llb/llb_settings",title:"LLB Settings",description:"Setting for Haltdos LLB",source:"@site/docs/enterprise/llb/llb_settings.md",sourceDirName:"enterprise/llb",slug:"/enterprise/llb/llb_settings",permalink:"/v8/enterprise/llb/llb_settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"llb_sidebar",previous:{title:"Link Load Balancer (LLB)",permalink:"/v8/enterprise/llb"},next:{title:"Group Ports",permalink:"/v8/enterprise/llb/group_ports"}},p={},c=[{value:"<strong>How to Use :</strong>",id:"how-to-use-",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Connection Tuple Expiry</strong>",id:"connection-tuple-expiry",level:5},{value:"<strong>Connectionless Tuple Expiry</strong>",id:"connectionless-tuple-expiry",level:5},{value:"<strong>Graceful Period On Startup</strong>",id:"graceful-period-on-startup",level:5},{value:"<strong>Learning Sampling Percentage</strong>",id:"learning-sampling-percentage",level:5},{value:"<strong>Drop Sampling Percentage</strong>",id:"drop-sampling-percentage",level:5},{value:"<strong>SSL Renegotiation Threshold</strong>",id:"ssl-renegotiation-threshold",level:5},{value:"<strong>Scanning Threshold</strong>",id:"scanning-threshold",level:5}],u={toc:c},g="wrapper";function d(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)(g,a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"llb-settings"}),"LLB Settings"),(0,r.kt)("p",null,"Setting for Haltdos LLB"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Link load balancing is a term that refers to the management of the traffic that is initiated within a local network that is destined to go out through one of a set of WAN connections. The link load balancer sits at the LAN-WAN boundary. It will redirect requests coming from the LAN segment that is destined to go out to the public Internet, by directing the traffic onto one of the various WAN connections."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"llbsettings",src:n(68129).Z,width:"1435",height:"735"})),(0,r.kt)("h3",a({},{id:"how-to-use-"}),(0,r.kt)("strong",{parentName:"h3"},"How to Use :")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Apps > LLB"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your setiings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Connection Tuple Expiry"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Accepted Values: Integer (Seconds)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Connectionless Tuple Expiry"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Accepted Values: Integer (Seconds)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Graceful Period On Startup"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Accepted Values: Integer (Seconds)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Learning Sampling Percentage"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Accepted Values: Integer (Percentage)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Sampling Percentage"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Accepted Values: Integer (Percentage)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SSL Renegotiation Threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Accepted Values: Integer (Seconds)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Scanning Threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Accepted Values: Integer (Seconds)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")))),(0,r.kt)("h3",a({},{id:"description"}),(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",a({},{id:"connection-tuple-expiry"}),(0,r.kt)("strong",{parentName:"h5"},"Connection Tuple Expiry")),(0,r.kt)("p",null,"Tuple refers to a set of five different values that comprise a Transmission Control Protocol/Internet Protocol (TCP/IP) connection. When a tuple is active but is not getting any response we can set ty time for such type of connection tuple. Users can specify the expiry of the connection tuple in seconds."),(0,r.kt)("h5",a({},{id:"connectionless-tuple-expiry"}),(0,r.kt)("strong",{parentName:"h5"},"Connectionless Tuple Expiry")),(0,r.kt)("p",null,"When this Tuple is based on UDP protocol we can consider it a Connection-less tuple. This time specifies after how much time UDP or ICMP-based tuple should be closed. Users can specify the expiry of the connection-less tuple in seconds."),(0,r.kt)("h5",a({},{id:"graceful-period-on-startup"}),(0,r.kt)("strong",{parentName:"h5"},"Graceful Period On Startup")),(0,r.kt)("p",null,"A grace period on startup is the amount of time required to gracefully start an interface or link a session is being closed."),(0,r.kt)("h5",a({},{id:"learning-sampling-percentage"}),(0,r.kt)("strong",{parentName:"h5"},"Learning Sampling Percentage")),(0,r.kt)("p",null,"It will help users to collect Learning packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos LLB solution collects the sample from the network traffic to learn its behavior."),(0,r.kt)("h5",a({},{id:"drop-sampling-percentage"}),(0,r.kt)("strong",{parentName:"h5"},"Drop Sampling Percentage")),(0,r.kt)("p",null,"It will help users to collect Drop packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos LLB solution collects the sample from the network traffic to analyze the dropped packet behavior."),(0,r.kt)("h5",a({},{id:"ssl-renegotiation-threshold"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Renegotiation Threshold")),(0,r.kt)("p",null,"In this field users can specify the maximum connection allowed to be established in a SSL negotiation. SSL renegotiation threshold value allow the number of connection can be made in one session."),(0,r.kt)("h5",a({},{id:"scanning-threshold"}),(0,r.kt)("strong",{parentName:"h5"},"Scanning Threshold")),(0,r.kt)("p",null,"In this field, users can specify the threshold value in seconds of scanning threshold. The Haltdos LLB solution scan the traffic for defined interval of time for identifying active devices on a network."))}d.isMDXComponent=!0},68129:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb_settings-bd265619bdcf81915c4827c6513e3c34.png"}}]);