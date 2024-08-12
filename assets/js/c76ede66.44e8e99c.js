"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:4},o="Caching",s={unversionedId:"enterprise/waf/listener/loadBalancing/caching",id:"enterprise/waf/listener/loadBalancing/caching",title:"Caching",description:"It store data locally in order to speed up the performance",source:"@site/docs/enterprise/waf/listener/loadBalancing/caching.md",sourceDirName:"enterprise/waf/listener/loadBalancing",slug:"/enterprise/waf/listener/loadBalancing/caching",permalink:"/v8/enterprise/waf/listener/loadBalancing/caching",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"waf_sidebar",previous:{title:"Health Monitors",permalink:"/v8/enterprise/waf/listener/loadBalancing/monitor"},next:{title:"Compression",permalink:"/v8/enterprise/waf/listener/loadBalancing/compression"}},c={},p=[{value:"It store data locally in order to speed up the performance",id:"it-store-data-locally-in-order-to-speed-up-the-performance",level:5},{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:3},{value:"<strong>Enable Caching</strong>",id:"enable-caching",level:5},{value:"<strong>Re-validate Cache</strong>",id:"re-validate-cache",level:5},{value:"<strong>Enable Background Update</strong>",id:"enable-background-update",level:5},{value:"<strong>Enable Cache Locking</strong>",id:"enable-cache-locking",level:5},{value:"<strong>Cache Methods</strong>",id:"cache-methods",level:5},{value:"<strong>Maximum Request Cache Size</strong>",id:"maximum-request-cache-size",level:5},{value:"<strong>URI Filter</strong>",id:"uri-filter",level:5},{value:"<strong>Mime Type Filter</strong>",id:"mime-type-filter",level:5},{value:"<strong>Use Stale Cache</strong>",id:"use-stale-cache",level:5},{value:"<strong>Response Codes</strong>",id:"response-codes",level:5},{value:"<strong>Minimum Use Before Caching</strong>",id:"minimum-use-before-caching",level:5},{value:"<strong>Cache Validity</strong>",id:"cache-validity",level:5},{value:"<strong>Browser Cache Expiry</strong>",id:"browser-cache-expiry",level:5}],d={toc:p},h="wrapper";function u(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)(h,a({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"caching"}),"Caching"),(0,r.kt)("h5",a({},{id:"it-store-data-locally-in-order-to-speed-up-the-performance"}),"It store data locally in order to speed up the performance"),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"When caching is enabled, WAF saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Caching",src:n(55820).Z,width:"1910",height:"900"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"caching",src:n(10982).Z,width:"1910",height:"900"}),"  "),(0,r.kt)("h2",a({},{id:"how-to-use-"}),"How to Use :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Performance")," > ",(0,r.kt)("strong",{parentName:"li"},"Caching")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add the Caching Setting")),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"enable-caching"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Caching")),(0,r.kt)("p",null,"To enable caching, enable the toggle button. It stores data so that future requests for that data can be served faster."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("h5",a({},{id:"re-validate-cache"}),(0,r.kt)("strong",{parentName:"h5"},"Re-validate Cache")),(0,r.kt)("p",null,"This toggle button allows the re-validation of expired cache items. It helps in storing the updated data."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("h5",a({},{id:"enable-background-update"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Background Update")),(0,r.kt)("p",null,"This toggle button enables the caching mechanism to update the cache in the background and store the updated data."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("h5",a({},{id:"enable-cache-locking"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Cache Locking")),(0,r.kt)("p",null,"Enable to force caching a resource item to complete before allowing new requests to the same resource item."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("h5",a({},{id:"cache-methods"}),(0,r.kt)("strong",{parentName:"h5"},"Cache Methods")),(0,r.kt)("p",null,"To cache responses to requests with methods other than GET and HEAD, list them along with GET and HEAD as parameters to this field. It specifies the HTTP Methods for which caching will be enforced."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: HTTP Methods\n\nDefault: GET / HEAD\n")),(0,r.kt)("h5",a({},{id:"maximum-request-cache-size"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Request Cache Size")),(0,r.kt)("p",null,"This field specifies the maximum request size allowed for the caching to store data exceeding which will not be cached."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer    \n\nMax: 999\n\nMin: 10\n\nDefault: 500\n\nMetric: mb\n")),(0,r.kt)("h5",a({},{id:"uri-filter"}),(0,r.kt)("strong",{parentName:"h5"},"URI Filter")),(0,r.kt)("p",null,"This field allows performing caching on the specific URI using one or more regex. If the field is empty then no filter perform"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Regex  \n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"mime-type-filter"}),(0,r.kt)("strong",{parentName:"h5"},"Mime Type Filter")),(0,r.kt)("p",null,"This field allows performing caching on the specific Mime type."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"use-stale-cache"}),(0,r.kt)("strong",{parentName:"h5"},"Use Stale Cache")),(0,r.kt)("p",null,"This field allows to specify the use of stale cache for errors when the back-end server is unavailable."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Type of errors to be cached    \n\nDefault: error / invalid_header / updating / timeout / http_500 / http_502 / http_503 / http_504 \n")),(0,r.kt)("h5",a({},{id:"response-codes"}),(0,r.kt)("strong",{parentName:"h5"},"Response Codes")),(0,r.kt)("p",null,"This field specifies the list of HTTP status codes for which response will be cached. "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer    \n\nDefault: 200 / 304\n")),(0,r.kt)("h5",a({},{id:"minimum-use-before-caching"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Use Before Caching")),(0,r.kt)("p",null,"To define the minimum number of times that a request with the same key must be made before the response is cached. It is specified in terms of a number of requests."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 1\n\nDefault: 3\n")),(0,r.kt)("h5",a({},{id:"cache-validity"}),(0,r.kt)("strong",{parentName:"h5"},"Cache Validity")),(0,r.kt)("p",null,"To limit how long cached responses with specific status codes are considered valid. It is specified in terms of minutes."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer    \n\nMax:365\n\nMin:0\n\nDefault: 5\n\nMetric: Minutes\n")),(0,r.kt)("h5",a({},{id:"browser-cache-expiry"}),(0,r.kt)("strong",{parentName:"h5"},"Browser Cache Expiry")),(0,r.kt)("p",null,"Specify the duration of the cached item after which it will be marked in the client's browser. It is specified in terms of days."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 365\n\nMin: 0\n\nDefault: 7\n")))}u.isMDXComponent=!0},55820:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/caching1-e18f7377c1ef619ee36b9bbc1f3354dd.png"},10982:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/caching2-7389abda2678160dd8393e15313e32e7.png"}}]);