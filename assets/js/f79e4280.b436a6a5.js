"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[65322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_position:2},o="Caching",s={unversionedId:"cloud/waf/listener/performance/caching",id:"version-7.0/cloud/waf/listener/performance/caching",title:"Caching",description:"How to enable and configure caching of responses received?",source:"@site/versioned_docs/version-7.0/cloud/waf/listener/performance/caching.md",sourceDirName:"cloud/waf/listener/performance",slug:"/cloud/waf/listener/performance/caching",permalink:"/cloud/waf/listener/performance/caching",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"cloud_sidebar",previous:{title:"Performance",permalink:"/cloud/waf/listener/performance/"},next:{title:"Compression",permalink:"/cloud/waf/listener/performance/compression"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],d={toc:c},u="wrapper";function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(u,r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"caching"}),"Caching"),(0,a.kt)("p",null,"How to enable and configure caching of responses received?"),(0,a.kt)("hr",null),(0,a.kt)("h2",r({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"When caching is enabled, WAF saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time."),(0,a.kt)("h3",r({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Performance > Caching"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the caching settings and ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"PARAMETERS"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enable Caching"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Revalidate Cache"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enable Background Update"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enable Cache Locking"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cache Methods"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"HTTP Methods"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"GET, HEAD")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Request Cache Size"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"URI Filter"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Regex"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Mime Type Filter"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Use Stale Cache"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Type of errors to be cached"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"HTTP 500 Errors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Response Codes"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Response Codes"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Minimum Use Before Caching"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Cache Validity"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Minutes"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Browser Cache Expiry"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Days"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"0")))),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Caching"),": To enable caching, enable the toggle button. It stores data so that future requests for that data can be served faster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Revalidate Cache"),": This toggle button allows the revalidation of expired cache items. It helps in storing the updated data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Background Update"),": This toggle button enables the caching mechanism to update the cache in the background and store the updated data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable Cache Locking"),": Enable to force caching a resource item to complete before allowing new requests to the same resource item."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cache Methods"),": To cache responses to requests with methods other than GET and HEAD, list them along with GET and HEAD as parameters to this field. It specifies the HTTP Methods for which caching will be enforced."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Request Cache Size"),": This field specifies the maximum request size allowed for the caching to store data exceeding which will not be cached."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URI Filter"),": This field allows to perform caching on the specific URI using one or more regex. If the field is empty then no filter perform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mime Type Filter"),": This field allows to perform caching on the specific Mime type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Stale Cache"),": This field allows to specify the use of stale cache for errors when the backend server is unavailable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response Codes"),": This field specifies the list of HTTP status codes for which response will be cached."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Minimum Use Before Caching"),": To define the minimum number of times that a request with the same key must be made before the response is cached. It is specified in terms of a number of requests."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cache Validity"),": To limit how long cached responses with specific status codes are considered valid. It is specified in terms of minutes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Browser Cache Expiry"),": Specify the duration of the cached item after which it will be marked in the client's browser. It is specified in terms of days."))}m.isMDXComponent=!0}}]);