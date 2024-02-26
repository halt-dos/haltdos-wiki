"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[46699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,b=u["".concat(s,".").concat(g)]||u[g]||f[g]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},55246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},l="KB-7003",s={unversionedId:"professional/kb/kb-7003",id:"version-7.0/professional/kb/kb-7003",title:"KB-7003",description:"How to enable Caching using WAF PE?",source:"@site/versioned_docs/version-7.0/professional/kb/kb-7003.md",sourceDirName:"professional/kb",slug:"/professional/kb/kb-7003",permalink:"/professional/kb/kb-7003",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"professional_sidebar",previous:{title:"KB-7002",permalink:"/professional/kb/kb-7002"},next:{title:"KB-7004",permalink:"/professional/kb/kb-7004"}},c={},p=[{value:"How to enable Caching using WAF PE?",id:"how-to-enable-caching-using-waf-pe",level:3},{value:"Solution",id:"solution",level:3}],u={toc:p},f="wrapper";function g(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"kb-7003"}),"KB-7003"),(0,r.kt)("h3",o({},{id:"how-to-enable-caching-using-waf-pe"}),"How to enable Caching using WAF PE?"),(0,r.kt)("p",null,"When caching is enabled, WAF saves responses in a directory and uses them to respond to clients without having two proxy requests for the same content every time. Caching is a process of storing and retrieving data locally for scalability and performance of the application."),(0,r.kt)("h3",o({},{id:"solution"}),"Solution"),(0,r.kt)("p",null,"For enabling the caching of the application customer needs to follow certain steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to Haltdos Console."),(0,r.kt)("li",{parentName:"ol"},"Now go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > click on ",(0,r.kt)("strong",{parentName:"li"},"Add listener"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"listener",src:n(68194).Z,width:"1916",height:"954"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Then go to ",(0,r.kt)("strong",{parentName:"li"},"Performance")," and select ",(0,r.kt)("strong",{parentName:"li"},"Caching"),"    "),(0,r.kt)("li",{parentName:"ol"},"Configure the cache settings")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"caching",src:n(50061).Z,width:"1896",height:"952"})),(0,r.kt)("admonition",o({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"In above Caching page client can enable caching along with various settings such as Cache Methods.")),(0,r.kt)("ol",o({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Change")," after configuring cache for specific listener.")))}g.isMDXComponent=!0},50061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cachingpro-7d7a76b549acb01ade82e89484e0a024.png"},68194:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listenpro-cb6e4ac7804d6d14fa49f19d346a0734.png"}}]);