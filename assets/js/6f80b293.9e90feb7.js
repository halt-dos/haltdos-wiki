"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[6114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:2},o="Operational",p={unversionedId:"enterprise/platform/system/instance/settings/operational_settings",id:"enterprise/platform/system/instance/settings/operational_settings",title:"Operational",description:"To configure Haltdos appliance in various operational modes",source:"@site/docs/enterprise/platform/system/instance/settings/operational_settings.md",sourceDirName:"enterprise/platform/system/instance/settings",slug:"/enterprise/platform/system/instance/settings/operational_settings",permalink:"/v8/enterprise/platform/system/instance/settings/operational_settings",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"Operational",permalink:"/v8/enterprise/platform/system/instance/operational_settings"},next:{title:"Backup Setting",permalink:"/v8/enterprise/platform/system/instance/settings/backuppolicy"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Management IP</strong>",id:"management-ip",level:5},{value:"<strong>Management Port</strong>",id:"management-port",level:5},{value:"<strong>SSL Engine</strong>",id:"ssl-engine",level:5},{value:"<strong>Operational Mode</strong>",id:"operational-mode",level:5},{value:"<strong>CPU Affinity</strong>",id:"cpu-affinity",level:5},{value:"<strong>Huge Pages</strong>",id:"huge-pages",level:5},{value:"<strong>Public Certificate File</strong>",id:"public-certificate-file",level:5},{value:"<strong>Intermediate Certificate File</strong>",id:"intermediate-certificate-file",level:5},{value:"<strong>CA Bundle File</strong>",id:"ca-bundle-file",level:5},{value:"<strong>Private Key File</strong>",id:"private-key-file",level:5}],c={toc:u},m="wrapper";function d(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)(m,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"operational"}),"Operational"),(0,r.kt)("p",null,"To configure Haltdos appliance in various operational modes"),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos platform supports multiple modes of operations of various Apps depending upon user requirement and deployment strategy. The appliance can be configured in the following modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Layer 2 mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bridge"),(0,r.kt)("li",{parentName:"ul"},"Transparent"))),(0,r.kt)("li",{parentName:"ul"},"Layer 3 mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reverse Proxy"),(0,r.kt)("li",{parentName:"ul"},"Direct Server Return"),(0,r.kt)("li",{parentName:"ul"},"Out-of-Path mode with BGP Flowspec"))),(0,r.kt)("li",{parentName:"ul"},"Offline mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TAP / SPAN interface"),(0,r.kt)("li",{parentName:"ul"},"Netflow / IPFIX / SFlow"),(0,r.kt)("li",{parentName:"ul"},"Parsing access logs")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Operational setting",src:n(32764).Z,width:"1914",height:"891"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances  > Operational")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"High Watermark Threshold")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Resource"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"CPU / RAM / DISK"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Low Watermark"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"No Value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"High Watermark"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"No Value")))),(0,r.kt)("h3",a({},{id:"description"}),"Description:"),(0,r.kt)("h5",a({},{id:"management-ip"}),(0,r.kt)("strong",{parentName:"h5"},"Management IP")),(0,r.kt)("p",null,"Configure instance management IP address"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: 2 \n")),(0,r.kt)("h5",a({},{id:"management-port"}),(0,r.kt)("strong",{parentName:"h5"},"Management Port")),(0,r.kt)("p",null,"Configure instance management port"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 9000 \n")),(0,r.kt)("h5",a({},{id:"ssl-engine"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Engine")),(0,r.kt)("p",null,"Engine to be used for SSL Offloading"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Software Engine / Hardware Engine\n\nDefault: Software Engine \n")),(0,r.kt)("h5",a({},{id:"operational-mode"}),(0,r.kt)("strong",{parentName:"h5"},"Operational Mode")),(0,r.kt)("p",null,"Mode of operation"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Inline Mode / Offline Mode\n\nDefault: Inline Mode \n")),(0,r.kt)("h5",a({},{id:"cpu-affinity"}),(0,r.kt)("strong",{parentName:"h5"},"CPU Affinity")),(0,r.kt)("p",null,"CPU affinity for opimization"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 2 \n")),(0,r.kt)("h5",a({},{id:"huge-pages"}),(0,r.kt)("strong",{parentName:"h5"},"Huge Pages")),(0,r.kt)("p",null,"Configure Huge Pages for optimization"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 2 \n")),(0,r.kt)("h5",a({},{id:"public-certificate-file"}),(0,r.kt)("strong",{parentName:"h5"},"Public Certificate File")),(0,r.kt)("p",null,"Upload public file"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Choose File\n\nDefault: None \n")),(0,r.kt)("h5",a({},{id:"intermediate-certificate-file"}),(0,r.kt)("strong",{parentName:"h5"},"Intermediate Certificate File")),(0,r.kt)("p",null,"Upload intermediate file"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Choose File\n\nDefault: None \n")),(0,r.kt)("h5",a({},{id:"ca-bundle-file"}),(0,r.kt)("strong",{parentName:"h5"},"CA Bundle File")),(0,r.kt)("p",null,"Upload CA bundle"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Choose File\n\nDefault: None \n")),(0,r.kt)("h5",a({},{id:"private-key-file"}),(0,r.kt)("strong",{parentName:"h5"},"Private Key File")),(0,r.kt)("p",null,"Upload private file"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Choose File\n\nDefault: None\n")))}d.isMDXComponent=!0},32764:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/operational-ba4a9c208d46e8eb0b435e6760a999bc.png"}}]);