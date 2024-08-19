"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[79757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,b=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:10},l="KB: 1010",p={unversionedId:"kb/waf/kb-1010",id:"kb/waf/kb-1010",title:"KB: 1010",description:"-----------",source:"@site/docs/kb/waf/kb-1010.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1010",permalink:"/kb/waf/kb-1010",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"kb_sidebar",previous:{title:"KB: 1009",permalink:"/kb/waf/kb-1009"},next:{title:"KB: 1011",permalink:"/kb/waf/kb-1011"}},s={},c=[{value:"<strong>Configuring Anti-virus scanner for an application</strong>",id:"configuring-anti-virus-scanner-for-an-application",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},f="wrapper";function m(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(f,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1010"}),"KB: 1010"),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"configuring-anti-virus-scanner-for-an-application"}),(0,n.kt)("strong",{parentName:"h3"},"Configuring Anti-virus scanner for an application")),(0,n.kt)("h4",a({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"The client requires to configure AV scanner for a specific web application that is already behind WAF. The client also requires that their AV scanner to be integrated with Haltdos WAF for the application."),(0,n.kt)("h4",a({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Login into Haltdos console.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then, Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps")," > ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listener")," > ",(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/waf/listener/profiles/settings"}),(0,n.kt)("strong",{parentName:"a"},"Profile Setting"))," > ",(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/waf/listener/profiles/anti_virus"}),(0,n.kt)("strong",{parentName:"a"},"Anti Virus")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select Antivirus mode to External.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After that one need to furnish the appropriate ICAP details."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1010",src:r(453).Z,width:"1816",height:"924"})))}m.isMDXComponent=!0},453:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/antivirus_kb_1010_1-8492752db79cc17e348d94d72ffdefc8.png"}}]);