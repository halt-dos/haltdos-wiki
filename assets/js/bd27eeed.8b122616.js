"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[16405],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={sidebar_position:3},o="Geo Filtering",l={unversionedId:"enterprise/adc/listeners/geo_filtering",id:"enterprise/adc/listeners/geo_filtering",title:"Geo Filtering",description:"Geo-filtering is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against the blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.",source:"@site/docs/enterprise/adc/listeners/geo_filtering.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/geo_filtering",permalink:"/enterprise/adc/listeners/geo_filtering",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adc_sidebar",previous:{title:"SSL Settings",permalink:"/enterprise/adc/listeners/ssl_settings"},next:{title:"Server Groups",permalink:"/enterprise/adc/listeners/server_groups/"}},c={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Blacklisted Countries</strong>",id:"blacklisted-countries",level:5},{value:"<strong>Whitelisted IP Prefixes</strong>",id:"whitelisted-ip-prefixes",level:5},{value:"<strong>Blacklisted IP Prefixes</strong>",id:"blacklisted-ip-prefixes",level:5},{value:"<strong>Bad Reputation Traffic</strong>",id:"bad-reputation-traffic",level:5},{value:"Blacklisted ASN",id:"blacklisted-asn",level:5}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(d,i({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"geo-filtering"}),"Geo Filtering"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Geo-filtering")," is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against the blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them."),(0,n.kt)("p",null,"Our solution restricts user's based upon Blacklisted IP Prefixes and Countries. It also allows permanently to access website through Whitelisted IP Prefixes."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Geo Filtering",src:r(80477).Z,width:"1454",height:"635"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stack")," > ",(0,n.kt)("a",i({parentName:"li"},{href:"/enterprise/adc"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",i({parentName:"li"},{href:"/enterprise/adc/listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"li"},"Geo Filtering")," "),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("h3",i({},{id:"description"}),"Description:"),(0,n.kt)("h5",i({},{id:"blacklisted-countries"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklisted Countries")),(0,n.kt)("p",null,"This section specifies the list of countries that will be permanently disallowed from accessing the website."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.\n\nDefault: Blank \n")),(0,n.kt)("p",null,"For more information about ISO 3166-1 alpha-2, please refer to this site: ",(0,n.kt)("a",i({parentName:"p"},{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"}),"ISO 3166-1 alpha-2")),(0,n.kt)("h5",i({},{id:"whitelisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelisted IP Prefixes")),(0,n.kt)("p",null,"This section specifies the list of IPs that will be permanently allowed for accessing the website."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP prefixes\n\nDefault: Blank   \n")),(0,n.kt)("h5",i({},{id:"blacklisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklisted IP Prefixes")),(0,n.kt)("p",null,"This section specifies the list of IPs that will be permanently disallowed from accessing the website."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP prefixes\n\nDefault: Blank \n")),(0,n.kt)("h5",i({},{id:"bad-reputation-traffic"}),(0,n.kt)("strong",{parentName:"h5"},"Bad Reputation Traffic")),(0,n.kt)("p",null,"Users can specify the action to be performed on traffic from suspicious IPs."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: NO ACTION\n\nDefault: NO ACTION\n")),(0,n.kt)("h5",i({},{id:"blacklisted-asn"}),"Blacklisted ASN"),(0,n.kt)("p",null,"User need to specific Specify the list of Autonomous System Numbers that will be permanently disallowed from accessing the website."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}f.isMDXComponent=!0},80477:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_filtering-a4d3dedbd67139d9909783a10a503976.png"}}]);