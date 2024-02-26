"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[74192],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72950:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:11},l="KB: 1011",s={unversionedId:"kb/waf/kb-1011",id:"version-7.0/kb/waf/kb-1011",title:"KB: 1011",description:"-----------",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1011.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1011",permalink:"/kb/waf/kb-1011",draft:!1,tags:[],version:"7.0",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"kb_sidebar",previous:{title:"KB: 1010",permalink:"/kb/waf/kb-1010"},next:{title:"KB: 1012",permalink:"/kb/waf/kb-1012"}},p={},c=[{value:"<strong>Masking login credentials for applications that are behind Haltdos WAF.</strong>",id:"masking-login-credentials-for-applications-that-are-behind-haltdos-waf",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c},m="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(m,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1011"}),"KB: 1011"),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"masking-login-credentials-for-applications-that-are-behind-haltdos-waf"}),(0,n.kt)("strong",{parentName:"h3"},"Masking login credentials for applications that are behind Haltdos WAF.")),(0,n.kt)("h4",a({},{id:"problem-statement"}),(0,n.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,n.kt)("p",null,"The client requires to mask the login credentials. This means that wehn any user is logging in, the login credentials can be accessed via access logs. Hence, Haltdos WAF needs to ensure masking of sensitive information / Login credentials for the websites that are behind WAF."),(0,n.kt)("h4",a({},{id:"solution"}),(0,n.kt)("strong",{parentName:"h4"},"Solution")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps")," > ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listener")," > ",(0,n.kt)("strong",{parentName:"p"},"Profile")," > ",(0,n.kt)("strong",{parentName:"p"},"Rules")," > ",(0,n.kt)("strong",{parentName:"p"},"Log Rules"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new Log rule"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enter rule name and rule message along with rule priority."),(0,n.kt)("li",{parentName:"ul"},"Enter URI (PCRE Regex) - to filter URI"),(0,n.kt)("li",{parentName:"ul"},"Enter Method")),(0,n.kt)("ol",a({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Adding attributes to be masked.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add location"),(0,n.kt)("li",{parentName:"ul"},"Mention parameter"),(0,n.kt)("li",{parentName:"ul"},"Enter match condition and value"),(0,n.kt)("li",{parentName:"ul"},"Add attribute")),(0,n.kt)("ol",a({},{start:4}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Repeat step 3 for multiple attributes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save changes."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb1011",src:r(70465).Z,width:"1816",height:"961"})),(0,n.kt)("p",null,"As per entered log rule details, the password should be hidden with Asterisk (*) sign"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kn1011",src:r(84963).Z,width:"1495",height:"949"})),(0,n.kt)("p",null,"As passwords can be extracted from the access log, but after deploying log rules in WAF, the password value is masked with Asterisk sign (*)."))}d.isMDXComponent=!0},84963:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/logruleresult-3159fc5b2599ec72718be92531c7aa9c.png"},70465:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/log_rules_kb_1011_1-c5926bf913b129ff20fca4912f51cbfd.png"}}]);