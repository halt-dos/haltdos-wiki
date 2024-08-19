"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[27814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,k=d["".concat(a,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>a,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={sidebar_position:2},s="Geo Filtering",a={unversionedId:"enterprise/ddos/geo_inspection",id:"enterprise/ddos/geo_inspection",title:"Geo Filtering",description:"Overview",source:"@site/docs/enterprise/ddos/geo_inspection.md",sourceDirName:"enterprise/ddos",slug:"/enterprise/ddos/geo_inspection",permalink:"/enterprise/ddos/geo_inspection",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ddos_sidebar",previous:{title:"Network Rules",permalink:"/enterprise/ddos/profile/network_rules"},next:{title:"Bot Protection",permalink:"/enterprise/ddos/bot_protection"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Blacklisted Countries</strong>",id:"blacklisted-countries",level:5},{value:"<strong>Blacklisted IP Prefixes</strong>",id:"blacklisted-ip-prefixes",level:5},{value:"<strong>Whitelisted IP Prefixes</strong>",id:"whitelisted-ip-prefixes",level:5},{value:"<strong>Blacklist Intel Feed</strong>",id:"blacklist-intel-feed",level:5},{value:"<strong>Whitelist Intel Feed</strong>",id:"whitelist-intel-feed",level:5}],d={toc:c},u="wrapper";function f(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(u,i({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"geo-filtering"}),"Geo Filtering"),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Geo Filtering is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required. In the Geo-filtering settings, we can configure Blacklisted Countries, Blacklisted IP Prefixes, and Whitelisted IP Prefixes."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"geo_filtering",src:r(21857).Z,width:"1433",height:"571"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > DDoS > Geo Filtering"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the settings as per requirement.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("h5",i({},{id:"blacklisted-countries"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklisted Countries")),(0,n.kt)("p",null,"This option allows users to select the list of countries from the drop-down list that will be permanently disallowed. The geo traffic blocking can be performed globally or per profile based. User need to check ",(0,n.kt)("a",i({parentName:"p"},{href:"/enterprise/ddos/profile/general_settings"}),"Profile")," documents to configure profile based geo-blocking."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.\n\nDefault: Blank\n")),(0,n.kt)("p",null,"For more information about ISO 3166-1 alpha-2, please refer to this site: ",(0,n.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}),(0,n.kt)("strong",{parentName:"a"},"ISO 3166-1 alpha-2"))," "),(0,n.kt)("h5",i({},{id:"blacklisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklisted IP Prefixes")),(0,n.kt)("p",null,"This option allows users to specify multiple IP prefixes or IP address (With CIDR /32) that will be permanently disallowed."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP Prefixes\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"whitelisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelisted IP Prefixes")),(0,n.kt)("p",null,"This option allows users to specify multiple IP prefixes or IP address (With CIDR /32). Traffic to / from these IPs will permanently bypass all configured mitigation."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP Prefixes\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"blacklist-intel-feed"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklist Intel Feed")),(0,n.kt)("p",null,"This option allows users to configure and add custom threat intel to blacklist traffic generated from the IP addresses or prefixed. Users can use ",(0,n.kt)("a",i({parentName:"p"},{href:"/enterprise/platform/stacks/resource_content/custom_scripts"}),"IP feeds")," option to add the IP feed later that can be added under this field using drop-down."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select list of threat intel\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"whitelist-intel-feed"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelist Intel Feed")),(0,n.kt)("p",null,"This option allows users to configure and add custom threat intel to whitelist traffic coming from those IP addresses or IP prefixes. Users can use ",(0,n.kt)("a",i({parentName:"p"},{href:"/enterprise/platform/stacks/resource_content/custom_scripts"}),"IP feeds")," option to add the IP feed later that can be added under this field using drop-down."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select list of threat intel\n\nDefault: Blank\n")))}f.isMDXComponent=!0},21857:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ddos_geo_filtering-6467438b22549968bed26333b36c2b88.png"}}]);