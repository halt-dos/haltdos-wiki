"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[64342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:3},l="Compression",s={unversionedId:"cloud/waf/listener/performance/compression",id:"version-6.0/cloud/waf/listener/performance/compression",title:"Compression",description:"Configure compression or decompression of responses",source:"@site/versioned_docs/version-6.0/cloud/waf/listener/performance/compression.md",sourceDirName:"cloud/waf/listener/performance",slug:"/cloud/waf/listener/performance/compression",permalink:"/haltdos-wiki/v6/cloud/waf/listener/performance/compression",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"cloud_sidebar",previous:{title:"Caching",permalink:"/haltdos-wiki/v6/cloud/waf/listener/performance/caching"},next:{title:"RUM Metric",permalink:"/haltdos-wiki/v6/cloud/waf/listener/performance/rum_metric"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],c={toc:m},d="wrapper";function u(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(d,o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"compression"}),"Compression"),(0,r.kt)("p",null,"Configure compression or decompression of responses"),(0,r.kt)("hr",null),(0,r.kt)("h2",o({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression."),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Performance > Compression"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the Compression configuration and click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Enable Compression"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Compression Level"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Integer (1-9)"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Min Length Compression"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Length in bytes"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Disable Browser Compression"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Regex"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Minimum HTTP version"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"HTTP 1.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"URI Filter"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"URI Regex"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Proxy Response Filter"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"expired/no-cache/no-store/private/no_last_modified/no_etag/any/auth"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"expired, no-cache, no-store, private, no_last_modified, no_etag, any, auth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Mime Type Filter"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Any mime type"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"text/xml , text/plain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"De-Compression"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"Disabled")))),(0,r.kt)("h4",o({},{id:"description"}),"Description:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enable Compression"),": To enable compression, enable the toggle button. It compresses the responses to an extent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compression Level"),": The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Min Length Compression"),": This field specifies the minimum length of the response to be compressed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disable Compression"),": Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minimum HTTP Version"),": Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Filter"),": This field allows to perform compression on the specific URI using one or more regex. If the field is empty then no filter perform."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proxy Response Filter"),": This field allows to perform compression on the specific type of HTTP requests. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mime Type Filter"),": By default, WAF compresses responses only with MIME-type text/html. To compress responses with other MIME types then include them in this field."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"De-Compression"),": Some clients do not support responses with the gzip encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client."))}u.isMDXComponent=!0}}]);