"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},i="Performance",l={unversionedId:"enterprise/ddos/listeners/performance",id:"enterprise/ddos/listeners/performance",title:"Performance",description:"How to enable and configure caching and compression of responses received?",source:"@site/docs/enterprise/ddos/listeners/performance.md",sourceDirName:"enterprise/ddos/listeners",slug:"/enterprise/ddos/listeners/performance",permalink:"/v8/enterprise/ddos/listeners/performance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ddos_sidebar",previous:{title:"SSL Settings",permalink:"/v8/enterprise/ddos/listeners/ssl_setting"},next:{title:"Rules",permalink:"/v8/enterprise/ddos/listeners/rules/"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable Caching</strong>",id:"enable-caching",level:5},{value:"<strong>Cache Pool</strong>",id:"cache-pool",level:5},{value:"<strong>Enable Caching Unsafe Method</strong>",id:"enable-caching-unsafe-method",level:5},{value:"<strong>Enable Compression</strong>",id:"enable-compression",level:5},{value:"<strong>Minimum Response to Compress</strong>",id:"minimum-response-to-compress",level:5},{value:"<strong>Maximum Response to Compress</strong>",id:"maximum-response-to-compress",level:5},{value:"<strong>Compression Mime Filter</strong>",id:"compression-mime-filter",level:5}],m={toc:c},u="wrapper";function d(e){var{components:t}=e,a=s(e,["components"]);return(0,r.kt)(u,o({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"How to enable and configure caching and compression of responses received?"),(0,r.kt)("h3",o({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"When caching is enabled, DDOS saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time and also when compression is enable it provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"performance",src:n(7106).Z,width:"1416",height:"753"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"DDoS")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Performance")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add the Setting")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h3",o({},{id:"description"}),"Description"),(0,r.kt)("h5",o({},{id:"enable-caching"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Caching")),(0,r.kt)("p",null,"Users can enable the caching using the button. It stores data so that future requests for that data can be served faster."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",o({},{id:"cache-pool"}),(0,r.kt)("strong",{parentName:"h5"},"Cache Pool")),(0,r.kt)("p",null,"This option allows users to select the cache pool which is previously made cache pool from stack settings. User first need to click kn add and go to Resources/Cache Pools and create new cache pool which will be further used in cache pool option under DDoS listeners."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select Cache Pool.\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"enable-caching-unsafe-method"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Caching Unsafe Method")),(0,r.kt)("p",null,"This option allows users to enable extended caching of POST methods."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",o({},{id:"enable-compression"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Compression")),(0,r.kt)("p",null,"This option allows users to enable compression for the mentioned listener."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,r.kt)("h5",o({},{id:"minimum-response-to-compress"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Response to Compress")),(0,r.kt)("p",null,"This option allows users to set minimum content length for HTTP responses. If any request will be bigger than the mentioned length, it will be compressed."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"maximum-response-to-compress"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Response to Compress")),(0,r.kt)("p",null,"This option allows users to set maximum content length for HTTP responses. If any request will be smaller than the mentioned length, it will be compressed."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Specify compression Algorithum\n\nDefault:  GZIP / DEFLATE\n")),(0,r.kt)("h5",o({},{id:"compression-mime-filter"}),(0,r.kt)("strong",{parentName:"h5"},"Compression Mime Filter")),(0,r.kt)("p",null,"Users can configure the MIME types for which compression is enabled. Haltdos solution will compress responses with other MIME types then include them in this field."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Any mime type\n\nDefault: text/xml / text/plain / text/html / image/gif / image/png / application/javascript\n")))}d.isMDXComponent=!0},7106:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/performance-b6d882240545f65237e480503d05ce7d.png"}}]);