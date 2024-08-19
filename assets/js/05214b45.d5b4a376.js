"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[33082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},s="KB-7004",l={unversionedId:"professional/kb/kb-7004",id:"professional/kb/kb-7004",title:"KB-7004",description:"How to enable Compression using WAF PE?",source:"@site/docs/professional/kb/kb-7004.md",sourceDirName:"professional/kb",slug:"/professional/kb/kb-7004",permalink:"/professional/kb/kb-7004",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"professional_sidebar",previous:{title:"KB-7003",permalink:"/professional/kb/kb-7003"},next:{title:"KB-7005",permalink:"/professional/kb/kb-7005"}},p={},c=[{value:"How to enable Compression using WAF PE?",id:"how-to-enable-compression-using-waf-pe",level:3},{value:"Solution",id:"solution",level:3}],u={toc:c},f="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-7004"}),"KB-7004"),(0,r.kt)("h3",o({},{id:"how-to-enable-compression-using-waf-pe"}),"How to enable Compression using WAF PE?"),(0,r.kt)("p",null,"Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance."),(0,r.kt)("h3",o({},{id:"solution"}),"Solution"),(0,r.kt)("p",null,"For enabling the Compression of the application customer needs to follow certain steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to Haltdos Console."),(0,r.kt)("li",{parentName:"ol"},"Now go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > click on ",(0,r.kt)("strong",{parentName:"li"},"Add listener"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"listener",src:n(68194).Z,width:"1916",height:"954"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Then go to ",(0,r.kt)("strong",{parentName:"li"},"Performance")," and select ",(0,r.kt)("strong",{parentName:"li"},"Compression"),"  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"compression",src:n(77023).Z,width:"1899",height:"953"})),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add Compression")," Configuration")),(0,r.kt)("admonition",o({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"To enable compression, enable the toggle button. It compresses the responses to an extent.")),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Change")," after configuring compression for specific listener.")))}m.isMDXComponent=!0},77023:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compressionpro-6a14556828bfacbf3741c97522a5f3e7.png"},68194:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listenpro-cb6e4ac7804d6d14fa49f19d346a0734.png"}}]);