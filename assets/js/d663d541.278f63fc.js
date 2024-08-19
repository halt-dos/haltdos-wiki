"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[83570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:6},s="Performance",l={unversionedId:"enterprise/adc/listeners/performance",id:"version-7.0/enterprise/adc/listeners/performance",title:"Performance",description:"---",source:"@site/versioned_docs/version-7.0/enterprise/adc/listeners/performance.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/performance",permalink:"/v7/enterprise/adc/listeners/performance",draft:!1,tags:[],version:"7.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"adc_sidebar",previous:{title:"Monitors",permalink:"/v7/enterprise/adc/listeners/monitors"},next:{title:"Rules",permalink:"/v7/enterprise/adc/listeners/rules/"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable Caching</strong>",id:"enable-caching",level:5},{value:"<strong>Cache Pool</strong>",id:"cache-pool",level:5},{value:"<strong>Enable Caching Unsafe Method</strong>",id:"enable-caching-unsafe-method",level:5},{value:"<strong>Minimum Response To Compress</strong>",id:"minimum-response-to-compress",level:5},{value:"<strong>Maximum Response To Compress</strong>",id:"maximum-response-to-compress",level:5},{value:"<strong>Compression Mime Filter</strong>",id:"compression-mime-filter",level:5}],m={toc:c},u="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(u,o({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"performance"}),"Performance"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Performance settings are designed to increase the performance of the traffic coming from the client-side. Users can enable the caching and compression method to increase the performance of the system."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"performance",src:n(76136).Z,width:"1824",height:"897"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,r.kt)("a",o({parentName:"li"},{href:"/v7/enterprise/adc"}),(0,r.kt)("strong",{parentName:"a"},"SLB")),"  > ",(0,r.kt)("a",o({parentName:"li"},{href:"/v7/enterprise/adc/listeners/"}),(0,r.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,r.kt)("strong",{parentName:"li"},"performance")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,r.kt)("h3",o({},{id:"description"}),"Description"),(0,r.kt)("h5",o({},{id:"enable-caching"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Caching")),(0,r.kt)("p",null,"This option allows users to enable content caching. Content Caching helps to improve solution performance, reduce cost through minimizing resources and increase throughput."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,r.kt)("h5",o({},{id:"cache-pool"}),(0,r.kt)("strong",{parentName:"h5"},"Cache Pool")),(0,r.kt)("p",null,"This option allows users to select a cache pool for content caching. It helps to increase read performance and speed up of solution. User can redirect at ",(0,r.kt)("strong",{parentName:"p"},"Cache Pools")," and add cache."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select Cache pool\n\nDefault: Blank \n")),(0,r.kt)("p",null,"Users can specify supported compression algorithm."),(0,r.kt)("h5",o({},{id:"enable-caching-unsafe-method"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Caching Unsafe Method")),(0,r.kt)("p",null,"Users are allowed to enable extended caching of POST methods."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled \n")),(0,r.kt)("h5",o({},{id:"minimum-response-to-compress"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Response To Compress")),(0,r.kt)("p",null,"Users can specify minimum HTTP response content length to compress. If HTTP response content length is larger than the specified minimum limit, it will be compresses. If HTTP response content length is smaller than the specified minimum limit, it will be skipped for compression."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,r.kt)("h5",o({},{id:"maximum-response-to-compress"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Response To Compress")),(0,r.kt)("p",null,"Users can specify maximum HTTP response content length to compress.If HTTP response content length is smaller than the specified maximum limit, it will be compresses. If HTTP response content length is larger than the specified maximum limit, it will be skipped for compression."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,r.kt)("h5",o({},{id:"compression-mime-filter"}),(0,r.kt)("strong",{parentName:"h5"},"Compression Mime Filter")),(0,r.kt)("p",null,"This option allows users to specify the Disabled selective list of mime-types for content compression."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Any mime type\n\nDefault: text/xml / image/gif / image/jpeg / application/javascript / application/atom+xml / application/rss+xml / text/mathml / text/plain / application/json / application/mac-binhex40 / application/msword / application/pdf / application/postscript / application/rtf / application/vnd.apple.mpegurl / application/vnd.ms-excel / application/vnd.ms-fontobject / application/vnd.ms-powerpoint\n")))}d.isMDXComponent=!0},76136:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/performance-93534aa01282a7b2b8f6e7302d081b6a.png"}}]);