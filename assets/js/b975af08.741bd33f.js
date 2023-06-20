"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:1},l="General Settings",s={unversionedId:"enterprise/ddos/profile/general_settings",id:"version-6.0/enterprise/ddos/profile/general_settings",title:"General Settings",description:"For inspect the packet",source:"@site/versioned_docs/version-6.0/enterprise/ddos/profile/general_settings.md",sourceDirName:"enterprise/ddos/profile",slug:"/enterprise/ddos/profile/general_settings",permalink:"/v6/enterprise/ddos/profile/general_settings",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ddos_sidebar",previous:{title:"Profile",permalink:"/v6/enterprise/ddos/profile/"},next:{title:"Detection",permalink:"/v6/enterprise/ddos/profile/detection"}},p={},c=[{value:"<strong>How to Go:</strong>",id:"how-to-go",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Graceful Startup Period</strong>",id:"graceful-startup-period",level:5},{value:"<strong>SSL Renegotiation Threshold</strong>",id:"ssl-renegotiation-threshold",level:5},{value:"<strong>Anti-Scanning Threshold</strong>",id:"anti-scanning-threshold",level:5}],d={toc:c},u="wrapper";function g(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(u,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"general-settings"}),"General Settings"),(0,r.kt)("p",null,"For inspect the packet"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"General settings evaluates the data part and the header of a packet that is transmitted through an inspection point, weeding out any non-compliance to protocol, spam, viruses, intrusions, and any other defined criteria to block the packet from passing through the inspection point."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"general_setting",src:n(23909).Z,width:"1278",height:"427"})),(0,r.kt)("h3",a({},{id:"how-to-go"}),(0,r.kt)("strong",{parentName:"h3"},"How to Go:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stack > Resource > DDoS > Profile > General Settings"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable/Disable the settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Save Changes."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Settings"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Protocols"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Graceful Startup Period"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"SSL Renegotiation Threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Anti-Scanning Threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"5")))),(0,r.kt)("h3",a({},{id:"description"}),(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",a({},{id:"protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Protocol")),(0,r.kt)("p",null,"Select the protocol name for inspection of the packets"),(0,r.kt)("h5",a({},{id:"graceful-startup-period"}),(0,r.kt)("strong",{parentName:"h5"},"Graceful Startup Period")),(0,r.kt)("p",null,"Specify the time till which Connection mitigations trigger will wait before starting mitigation on startup (in seconds)"),(0,r.kt)("h5",a({},{id:"ssl-renegotiation-threshold"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Renegotiation Threshold")),(0,r.kt)("p",null,"Users can specify the maximum allowed SSL negotiations in a connection."),(0,r.kt)("h5",a({},{id:"anti-scanning-threshold"}),(0,r.kt)("strong",{parentName:"h5"},"Anti-Scanning Threshold")),(0,r.kt)("p",null,"Users can specify thresholds in pps to block network scanning attempts."))}g.isMDXComponent=!0},23909:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ddos4-bfa78dee13dd5389eec14638f78f1faa.png"}}]);