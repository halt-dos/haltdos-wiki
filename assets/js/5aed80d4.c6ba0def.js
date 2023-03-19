"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[88883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:3},i="SNMP",s={unversionedId:"enterprise/adc/listeners/server_groups/snmp",id:"enterprise/adc/listeners/server_groups/snmp",title:"SNMP",description:"---",source:"@site/docs/enterprise/adc/listeners/server_groups/snmp.md",sourceDirName:"enterprise/adc/listeners/server_groups",slug:"/enterprise/adc/listeners/server_groups/snmp",permalink:"/haltdos-wiki/enterprise/adc/listeners/server_groups/snmp",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adc_sidebar",previous:{title:"Load Balancing",permalink:"/haltdos-wiki/enterprise/adc/listeners/server_groups/load_balancing"},next:{title:"Monitors",permalink:"/haltdos-wiki/enterprise/adc/listeners/monitors"}},p={},u=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Enable Monitoring</strong>",id:"enable-monitoring",level:5},{value:"<strong>SNMP port</strong>",id:"snmp-port",level:5},{value:"<strong>SNMP Version</strong>",id:"snmp-version",level:5},{value:"<strong>SNMP Username</strong>",id:"snmp-username",level:5},{value:"<strong>SNMP Community</strong>",id:"snmp-community",level:5},{value:"<strong>SNMP Security level </strong>",id:"snmp-security-level-",level:5},{value:"<strong>SNMP Check Type</strong>",id:"snmp-check-type",level:5}],m={toc:u},c="wrapper";function d(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(c,a({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"snmp"}),"SNMP"),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,n.kt)("a",a({parentName:"li"},{href:"/adc/docs"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",a({parentName:"li"},{href:"../../listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("a",a({parentName:"li"},{href:"../server_groups/"}),(0,n.kt)("strong",{parentName:"a"}," Server Groups")),"."),(0,n.kt)("li",{parentName:"ol"},"Select the group name."),(0,n.kt)("li",{parentName:"ol"},"Select the Add Server option."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snmp",src:r(20316).Z,width:"1830",height:"749"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enable Monitoring"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SNMP port"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"161")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SNMP Version"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SNMP v2c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SNMP Username"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SNMP Community"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"public")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SNMP Security level"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"No Auth & privacy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SNMP Check Type"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"CPU Measurement")))),(0,n.kt)("h3",a({},{id:"description"}),"Description:"),(0,n.kt)("h5",a({},{id:"enable-monitoring"}),(0,n.kt)("strong",{parentName:"h5"},"Enable Monitoring")),(0,n.kt)("p",null,"This option allows users to specify enabling SNMP monitoring."),(0,n.kt)("h5",a({},{id:"snmp-port"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP port")),(0,n.kt)("p",null,"This option allows users to specify the SNMP port."),(0,n.kt)("h5",a({},{id:"snmp-version"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Version")),(0,n.kt)("p",null,"This option allows users to specify the SNMP version for monitoring."),(0,n.kt)("h5",a({},{id:"snmp-username"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Username")),(0,n.kt)("p",null,"This option allows users to specify SNMP usernames."),(0,n.kt)("h5",a({},{id:"snmp-community"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Community")),(0,n.kt)("p",null,"This option allows users to specify SNMP Community."),(0,n.kt)("h5",a({},{id:"snmp-security-level-"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Security level ")),(0,n.kt)("p",null,"This option allows users to specify the SNMP security level."),(0,n.kt)("h5",a({},{id:"snmp-check-type"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Check Type")),(0,n.kt)("p",null,"This option allows users to specify SNMP checks."))}d.isMDXComponent=!0},20316:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/snmp-d8565beb2b823d36aa50e220dae2d09f.png"}}]);