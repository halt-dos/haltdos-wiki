"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[74814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||i;return n?o.createElement(u,a(a({ref:t},c),{},{components:n})):o.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={sidebar_position:2},s="Compression",p={unversionedId:"professional/waf/performance/compression",id:"version-7.0/professional/waf/performance/compression",title:"Compression",description:"Configure compression or decompression of responses",source:"@site/versioned_docs/version-7.0/professional/waf/performance/compression.md",sourceDirName:"professional/waf/performance",slug:"/professional/waf/performance/compression",permalink:"/professional/waf/performance/compression",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"professional_sidebar",previous:{title:"Caching",permalink:"/professional/waf/performance/caching"},next:{title:"Server Groups",permalink:"/professional/waf/server_group/"}},l={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use :",id:"how-to-use-",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable Compression</strong>",id:"enable-compression",level:5},{value:"<strong>Enable Decompression</strong>",id:"enable-decompression",level:5},{value:"<strong>Compression Level</strong>",id:"compression-level",level:5},{value:"<strong>Min Length Compression</strong>",id:"min-length-compression",level:5},{value:"<strong>Disable Compression</strong>",id:"disable-compression",level:5},{value:"<strong>Minimum HTTP Version</strong>",id:"minimum-http-version",level:5},{value:"<strong>URI Filter</strong>",id:"uri-filter",level:5},{value:"<strong>Proxy Response Filter</strong>",id:"proxy-response-filter",level:5},{value:"<strong>Mime Type Filter</strong>",id:"mime-type-filter",level:5}],m={toc:c},d="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,o.kt)(d,r({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",r({},{id:"compression"}),"Compression"),(0,o.kt)("p",null,"Configure compression or decompression of responses"),(0,o.kt)("hr",null),(0,o.kt)("h3",r({},{id:"overview"}),"Overview"),(0,o.kt)("p",null,"Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"compression",src:n(99307).Z,width:"1888",height:"990"}),"\n",(0,o.kt)("img",{alt:"compression",src:n(54902).Z,width:"1888",height:"990"})),(0,o.kt)("h3",r({},{id:"how-to-use-"}),"How to Use :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console. "),(0,o.kt)("li",{parentName:"ol"},"Then go to ",(0,o.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,o.kt)("strong",{parentName:"li"},"Performance")," > ",(0,o.kt)("strong",{parentName:"li"},"Compression")),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Add Compression Configuration ")," "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save Changes"))),(0,o.kt)("h3",r({},{id:"description"}),"Description"),(0,o.kt)("h5",r({},{id:"enable-compression"}),(0,o.kt)("strong",{parentName:"h5"},"Enable Compression")),(0,o.kt)("p",null,"To enable compression, enable the toggle button. It compresses the responses to an extent."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled \n\nDefault: Disabled\n")),(0,o.kt)("h5",r({},{id:"enable-decompression"}),(0,o.kt)("strong",{parentName:"h5"},"Enable Decompression")),(0,o.kt)("p",null,"Some clients do not support responses with the GZIP encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Enabled / Disabled \n\nDefault: Disabled\n")),(0,o.kt)("h5",r({},{id:"compression-level"}),(0,o.kt)("strong",{parentName:"h5"},"Compression Level")),(0,o.kt)("p",null,"The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer(1-9)   \n\nDefault: 1\n")),(0,o.kt)("h5",r({},{id:"min-length-compression"}),(0,o.kt)("strong",{parentName:"h5"},"Min Length Compression")),(0,o.kt)("p",null,"This field specifies the minimum length of the response to be compressed."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Length in bytes    \n\nDefault: 1000\n\nMetric: Bytes\n")),(0,o.kt)("h5",r({},{id:"disable-compression"}),(0,o.kt)("strong",{parentName:"h5"},"Disable Compression")),(0,o.kt)("p",null,"Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Regex  \n\nDefault: Blank\n")),(0,o.kt)("h5",r({},{id:"minimum-http-version"}),(0,o.kt)("strong",{parentName:"h5"},"Minimum HTTP Version")),(0,o.kt)("p",null,"Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Default value set  \n\nDefault: HTTP 1.1\n")),(0,o.kt)("h5",r({},{id:"uri-filter"}),(0,o.kt)("strong",{parentName:"h5"},"URI Filter")),(0,o.kt)("p",null,"This field allows performing compression on the specific URI using one or more regex. If the field is empty then no filter perform."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Regex  \n\nDefault: Blank\n")),(0,o.kt)("h5",r({},{id:"proxy-response-filter"}),(0,o.kt)("strong",{parentName:"h5"},"Proxy Response Filter")),(0,o.kt)("p",null,"This field allows performing compression on the specific type of HTTP requests. "),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: expired / no-cache / no-store / private / no_last_modified / no_etag / any / auth  \n\nDefault: expired / no-cache / no-store / private / no_last_modified / no_etag / any / auth\n")),(0,o.kt)("h5",r({},{id:"mime-type-filter"}),(0,o.kt)("strong",{parentName:"h5"},"Mime Type Filter")),(0,o.kt)("p",null,"By default, WAF compresses responses only with MIME-type text/HTML. To compress responses with other MIME types then include them in this field."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{}),"Accepted values: Any mime type\n\nDefault: text/xml / image/gif / image/jpeg / application/javascript / application/atom+xml / application/rss+xml / text/mathml / text/plain / text/vnd.sun.j2me.app-descriptor / text/vnd.wap.wml / text/x-component / image/png / image/tiff / image/vnd.wap.wbmp / image/x-icon / image/x-jng image/x-ms-bmp image/svg+xml image/webp / application/font-woff / application/java-archive / application/json / application/mac-binhex40 / application/msword / application/pdf / application/postscript / application/rtf / application/vnd.apple.mpegurl / application/vnd.ms-excel / application/vnd.ms-fontobject / application/vnd.ms-powerpoint / application/vnd.wap.wmlc / application/vnd.google-earth.kml+xml / application/vnd.google-earth.kmz / application/x-7z-compressed / application/x-cocoa / application/x-java-archive-diff / application/x-java-jnlp-file / application/x-makeself / application/x-perl / application/x-pilot / application/x-rar-compressed / application/x-redhat-package-manager / application/x-sea / application/x-shockwave-flash / application/x-stuffit application/x-tcl / application/x-x509-ca-cert / application/x-xpinstall / application/xhtml+xml / application/xspf+xml / application/zip / application/octet-stream / application/octet-stream / application/octet-stream / application/octet-stream / application/octet-stream / application/vnd.openxmlformats-officedocument.wordprocessingml.document / application/vnd.openxmlformats-officedocument.spreadsheetml.sheet / application/vnd.openxmlformats-officedocument.presentationml.presentation audio/midi / audio/mpeg audio/ogg / audio/x-m4a / audio/x-realaudio / video/3gpp / video/mp2t / video/mp4 / video/mpeg / video/quicktime / video/webm / video/x-flv video/x-m4v / video/x-mng / video/x-ms-asf / video/x-ms-wmv / video/x-msvideo\n")))}f.isMDXComponent=!0},99307:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compression1-471a4abb59d2cfef9578f043a1750c18.png"},54902:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compression2-f69c667b6eb71daf65b831e55a222f82.png"}}]);