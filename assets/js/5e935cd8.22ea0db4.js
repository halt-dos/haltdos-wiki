"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[4908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={sidebar_position:3},o="Geo Filtering",s={unversionedId:"enterprise/adc/listeners/geo_filtering",id:"version-6.0/enterprise/adc/listeners/geo_filtering",title:"Geo Filtering",description:"Geo-filtering is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.",source:"@site/versioned_docs/version-6.0/enterprise/adc/listeners/geo_filtering.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/geo_filtering",permalink:"/haltdos-wiki/v6/enterprise/adc/listeners/geo_filtering",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adc_sidebar",previous:{title:"SSL Settings",permalink:"/haltdos-wiki/v6/enterprise/adc/listeners/ssl_settings"},next:{title:"Server Groups",permalink:"/haltdos-wiki/v6/enterprise/adc/listeners/server_groups/"}},c={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"BlackListed Countries",id:"blacklisted-countries",level:4},{value:"WhiteListed IP Prefixes",id:"whitelisted-ip-prefixes",level:4},{value:"BlackListed IP Prefixes",id:"blacklisted-ip-prefixes",level:4},{value:"Bad Reputation Traffic",id:"bad-reputation-traffic",level:4}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)(d,i({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"geo-filtering"}),"Geo Filtering"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Geo-filtering")," is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them."),(0,n.kt)("p",null,"Our solution restricts user's based upon BlackListed IP Prefixes and Countries. It also allows permanently to access website through WhiteListed IP Prefixes."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Geo Filtering",src:r(93271).Z,width:"1558",height:"441"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Stack")," > ",(0,n.kt)("strong",{parentName:"p"},"SLB")," > ",(0,n.kt)("strong",{parentName:"p"},"listener")," > ",(0,n.kt)("strong",{parentName:"p"},"Geo Filtering")," ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save")," ."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Accepted value"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blacklisted Countries"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Whitelisted IP Prefixes"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"IP address with CIDR"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blacklisted IP Prefixes"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"IP address with CIDR"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Bad Reputution Traffic"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"No Action")))),(0,n.kt)("h4",i({},{id:"description"}),"Description:"),(0,n.kt)("h4",i({},{id:"blacklisted-countries"}),"BlackListed Countries"),(0,n.kt)("p",null,"This section specify the list of countries that will be permanently disallowed from accessing the website."),(0,n.kt)("h4",i({},{id:"whitelisted-ip-prefixes"}),"WhiteListed IP Prefixes"),(0,n.kt)("p",null,"This section specify the list of IPs that will be permanently allowed for accessing the website."),(0,n.kt)("h4",i({},{id:"blacklisted-ip-prefixes"}),"BlackListed IP Prefixes"),(0,n.kt)("p",null,"This section specify the list of IPs that will be permanently disallowed from accessing the website."),(0,n.kt)("h4",i({},{id:"bad-reputation-traffic"}),"Bad Reputation Traffic"),(0,n.kt)("p",null,"Users can specifies the action to be performed on traffic from suspicious IPs."))}f.isMDXComponent=!0},93271:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geofiltering-35514375616c805abca1448bc2753bfa.png"}}]);