"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[39150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},s="Compression",l={unversionedId:"enterprise/waf/listener/performance/compression",id:"version-6.0/enterprise/waf/listener/performance/compression",title:"Compression",description:"Configure compression or decompression of responses",source:"@site/versioned_docs/version-6.0/enterprise/waf/listener/performance/compression.md",sourceDirName:"enterprise/waf/listener/performance",slug:"/enterprise/waf/listener/performance/compression",permalink:"/v6/enterprise/waf/listener/performance/compression",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Caching",permalink:"/v6/enterprise/waf/listener/performance/caching"},next:{title:"RUM Metric",permalink:"/v6/enterprise/waf/listener/performance/rum"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Description",id:"description",level:2}],c={toc:m},u="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(u,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"compression"}),"Compression"),(0,r.kt)("p",null,"Configure compression or decompression of responses"),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Caching",src:n(53705).Z,width:"1503",height:"845"})),(0,r.kt)("h1",a({},{id:"how-to-use-"}),"How to Use :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF")," > ",(0,r.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"p"},"Performance")," > ",(0,r.kt)("strong",{parentName:"p"},"Compression"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add Compression Configuration ")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable Compression"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Compression Level"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer (1-9)"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Min Length Compression"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Length in bytes"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Disable Compression"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Regex"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Minimum HTTP version"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"HTTP 1.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"URI Filter"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"URI Regex"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Proxy Response Filter"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"expired/no-cache/no-store/private/no_last_modified/no_etag/any/auth"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"expired, no-cache, no-store, private, no_last_modified, no_etag, any, auth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mime Type Filter"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Any mime type"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"text/xml , text/plain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"De-Compression"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compression",src:n(21798).Z,width:"1478",height:"896"})),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"1.",(0,r.kt)("strong",{parentName:"p"},"Enable Compression")),(0,r.kt)("p",null,"To enable compression, enable the toggle button. It compresses the responses to an extent."),(0,r.kt)("p",null,"2.",(0,r.kt)("strong",{parentName:"p"},"Compression Level")),(0,r.kt)("p",null,"The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9."),(0,r.kt)("p",null,"3.",(0,r.kt)("strong",{parentName:"p"},"Min Length Compression")),(0,r.kt)("p",null,"This field specifies the minimum length of the response to be compressed."),(0,r.kt)("p",null,"4.",(0,r.kt)("strong",{parentName:"p"},"Disable Compression")),(0,r.kt)("p",null,"Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests."),(0,r.kt)("p",null,"5.",(0,r.kt)("strong",{parentName:"p"},"Minimum HTTP Version")),(0,r.kt)("p",null,"Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed."),(0,r.kt)("p",null,"6.",(0,r.kt)("strong",{parentName:"p"},"URI Filter")),(0,r.kt)("p",null,"This field allows to perform compression on the specific URI using one or more regex. If the field is empty then no filter perform."),(0,r.kt)("p",null,"7.",(0,r.kt)("strong",{parentName:"p"},"Proxy Response Filter")),(0,r.kt)("p",null,"This field allows to perform compression on the specific type of HTTP requests. "),(0,r.kt)("p",null,"8.",(0,r.kt)("strong",{parentName:"p"},"Mime Type Filter")),(0,r.kt)("p",null,"By default, WAF compresses responses only with MIME-type text/HTML. To compress responses with other MIME types then include them in this field."),(0,r.kt)("p",null,"9.",(0,r.kt)("strong",{parentName:"p"},"De-Compression")),(0,r.kt)("p",null,"Some clients do not support responses with the GZIP encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client."))}d.isMDXComponent=!0},53705:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compression-3a68f250adbe91670897ec6ce4492d4e.png"},21798:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compression_cont-771496c3ae5aa19fc609d221b9f83128.png"}}]);