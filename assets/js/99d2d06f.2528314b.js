"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[27814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,g=c["".concat(s,".").concat(f)]||c[f]||u[f]||l;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={sidebar_position:2},o="Geo Filtering",s={unversionedId:"enterprise/ddos/geo_inspection",id:"enterprise/ddos/geo_inspection",title:"Geo Filtering",description:"---",source:"@site/docs/enterprise/ddos/geo_inspection.md",sourceDirName:"enterprise/ddos",slug:"/enterprise/ddos/geo_inspection",permalink:"/enterprise/ddos/geo_inspection",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ddos_sidebar",previous:{title:"Network Rules",permalink:"/enterprise/ddos/profile/network_rules"},next:{title:"Bot Protection",permalink:"/enterprise/ddos/bot_protection"}},p={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Blacklisted Countries</strong>",id:"blacklisted-countries",level:5},{value:"<strong>Blacklisted IP Prefixes</strong>",id:"blacklisted-ip-prefixes",level:5},{value:"<strong>Whitelisted IP Prefixes</strong>",id:"whitelisted-ip-prefixes",level:5},{value:"<strong>Blacklist Intel Feed</strong>",id:"blacklist-intel-feed",level:5},{value:"<strong>Whitelist Intel Feed</strong>",id:"whitelist-intel-feed",level:5}],c={toc:d},u="wrapper";function f(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(u,i({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"geo-filtering"}),"Geo Filtering"),(0,n.kt)("hr",null),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Geo Filtering is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required. In the Geo-filtering settings, we can configure Blacklisted Countries, Blacklisted IP Prefixes, and Whitelisted IP Prefixes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"geo_filtering",src:r(7887).Z,width:"1447",height:"456"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > DDoS > Geo Filtering"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the settings as per requirement.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blacklisted Countries"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Countries"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Drop Down")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blacklisted IP Prefixes"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"IP Address with CIDR"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Whitelisted IP Prefixes"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"IP Address with CIDR"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blacklist Intel Feed"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Whitelisted Intel Feed"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("h5",i({},{id:"blacklisted-countries"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklisted Countries")),(0,n.kt)("p",null,"This option allows users to select the list of countries from the drop-down list that will be permanently disallowed. The geo traffic blocking can be performed globally or per profile based. User need to check ",(0,n.kt)("a",i({parentName:"p"},{href:"/enterprise/ddos/profile/general_settings"}),"Profile")," documents to configure profile based geo-blocking. "),(0,n.kt)("h5",i({},{id:"blacklisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklisted IP Prefixes")),(0,n.kt)("p",null,"This option allows users to specify multiple IP prefixes or IP address (With CIDR /32) that will be permanently disallowed."),(0,n.kt)("h5",i({},{id:"whitelisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelisted IP Prefixes")),(0,n.kt)("p",null,"This option allows users to specify multiple IP prefixes or IP address (With CIDR /32). Traffic to / from these IPs will permanently bypass all configured mitigation."),(0,n.kt)("h5",i({},{id:"blacklist-intel-feed"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklist Intel Feed")),(0,n.kt)("p",null,"This option allows users to configure and add custom threat intel to blacklist traffic generated from the IP addresses or prefixed. Users can use ",(0,n.kt)("a",i({parentName:"p"},{href:"/enterprise/platform/stacks/resource_content/custom_scripts"}),"IP feeds")," option to add the IP feed later that can be added under this field using drop-down."),(0,n.kt)("h5",i({},{id:"whitelist-intel-feed"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelist Intel Feed")),(0,n.kt)("p",null,"This option allows users to configure and add custom threat intel to whitelist traffic coming from those IP addresses or IP prefixes. Users can use ",(0,n.kt)("a",i({parentName:"p"},{href:"/enterprise/platform/stacks/resource_content/custom_scripts"}),"IP feeds")," option to add the IP feed later that can be added under this field using drop-down."))}f.isMDXComponent=!0},7887:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geofiltering-c2ca1bd4477b49726fa36c448e1d5ecd.png"}}]);