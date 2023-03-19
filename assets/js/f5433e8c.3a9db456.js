"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[10660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={sidebar_position:0,pagination_prev:null},l="Link Load Balancer (LLB)",s={unversionedId:"enterprise/llb",id:"version-6.0/enterprise/llb",title:"Link Load Balancer (LLB)",description:"For increasing scalability and availability of network resources",source:"@site/versioned_docs/version-6.0/enterprise/llb.md",sourceDirName:"enterprise",slug:"/enterprise/llb",permalink:"/haltdos-wiki/v6/enterprise/llb",draft:!1,tags:[],version:"6.0",sidebarPosition:0,frontMatter:{sidebar_position:0,pagination_prev:null},sidebar:"llb_sidebar",next:{title:"LLB Settings",permalink:"/haltdos-wiki/v6/enterprise/llb/llb_settings"}},c={},p=[{value:"<strong>Benefits</strong>",id:"benefits",level:3},{value:"<strong>Improve Network Utilization</strong>",id:"improve-network-utilization",level:5},{value:"<strong>Optimize WAN Links</strong>",id:"optimize-wan-links",level:5},{value:"<strong>Eliminate Downtime</strong>",id:"eliminate-downtime",level:5},{value:"<strong>Improve Productivity</strong>",id:"improve-productivity",level:5},{value:"<strong>Quality of Service</strong>",id:"quality-of-service",level:5},{value:"<strong>Reduce Cost</strong>",id:"reduce-cost",level:5}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(d,i({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"link-load-balancer-llb"}),"Link Load Balancer (LLB)"),(0,r.kt)("p",null,"For increasing scalability and availability of network resources"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A Link balancing is designed to balance the load between the local area network (LAN) and the Internet. Positioned between the LAN and the WAN (Wide Area Network), a link balancer uses traffic management algorithms to make sure that each link is being used to the best of its ability. It can potentially work out the fastest route for the information by taking into account which ISP link has the most bandwidth available. A typical use would be to combine multiple Internet links to increase the aggregate available bandwidth, performance and redundancy. The link balancer directs traffic by using algorithms to determine which router and ISP has the most available bandwidth."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LLB",src:n(54811).Z,width:"1045",height:"293"})),(0,r.kt)("h3",i({},{id:"benefits"}),(0,r.kt)("strong",{parentName:"h3"},"Benefits")),(0,r.kt)("h5",i({},{id:"improve-network-utilization"}),(0,r.kt)("strong",{parentName:"h5"},"Improve Network Utilization")),(0,r.kt)("p",null,"Hardware accelerated SSL offloading reduces load on firewalls and servers gets you same performance with less devices"),(0,r.kt)("h5",i({},{id:"optimize-wan-links"}),(0,r.kt)("strong",{parentName:"h5"},"Optimize WAN Links")),(0,r.kt)("p",null,"Automatic selecting of the best ISP links for faster, reliable delivery of service & shadow IT management"),(0,r.kt)("h5",i({},{id:"eliminate-downtime"}),(0,r.kt)("strong",{parentName:"h5"},"Eliminate Downtime")),(0,r.kt)("p",null,"Monitor and get notified on health of WAN links, seamless failover across WANs"),(0,r.kt)("h5",i({},{id:"improve-productivity"}),(0,r.kt)("strong",{parentName:"h5"},"Improve Productivity")),(0,r.kt)("p",null,"Improve productivity by implementing fault tolerant WAN with traffic priority as per organization policy"),(0,r.kt)("h5",i({},{id:"quality-of-service"}),(0,r.kt)("strong",{parentName:"h5"},"Quality of Service")),(0,r.kt)("p",null,"Improve Quality of Service (QoS) with priority-based queuing, traffic policing and shaping"),(0,r.kt)("h5",i({},{id:"reduce-cost"}),(0,r.kt)("strong",{parentName:"h5"},"Reduce Cost")),(0,r.kt)("p",null,"Reduce cost by aggregating multiple inexpensive links to control bandwidth costs"))}f.isMDXComponent=!0},54811:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb1-df83f6e5abce34ec662cea08bb282464.jpg"}}]);