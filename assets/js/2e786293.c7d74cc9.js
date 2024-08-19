"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[77847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},a="Global Whitelisting",s={unversionedId:"troubleshooting/case-9006",id:"troubleshooting/case-9006",title:"Global Whitelisting",description:"---",source:"@site/docs/troubleshooting/case-9006.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/case-9006",permalink:"/troubleshooting/case-9006",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Managing Internal Gateway Error",permalink:"/troubleshooting/case-9005"},next:{title:"Fine-tuning WAF",permalink:"/troubleshooting/case-9007"}},c={},u=[{value:"Case: 9006",id:"case-9006",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],p={toc:u},d="wrapper";function f(e){var{components:t}=e,i=l(e,["components"]);return(0,r.kt)(d,o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"global-whitelisting"}),"Global Whitelisting"),(0,r.kt)("hr",null),(0,r.kt)("h2",o({},{id:"case-9006"}),"Case: 9006"),(0,r.kt)("h3",o({},{id:"problem-statement"}),"Problem Statement"),(0,r.kt)("p",null,"The client requires to whitelist a built-in signature for all the applications configured on Haltdos WAF."),(0,r.kt)("h3",o({},{id:"solution"}),"Solution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to Global Whitelist page to add a global whitelist for all applications configured on Haltdos WAF.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(33050).Z,width:"1920",height:"995"})),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Click on Add Rule to start creating a global whitelist rule. ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93503).Z,width:"1920",height:"995"})),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Fill in the details and the URI and Rule Id. Rule Ids can be obtained from incident page or FP Finder.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(23523).Z,width:"1920",height:"995"})),(0,r.kt)("p",null,"4.Click on Save Changes to add the Global Whitelist rule applicable for all applications configured on Haltdos WAF."))}f.isMDXComponent=!0},33050:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1_troubleshooting_global_whitelist-d99a9f23e32c451fb48b79c8c534370c.png"},93503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2_troubleshooting_add_global_whitelist-62fc209b06d435021d770a45f534e57f.png"},23523:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/3_troubleshooting_addwhitelist-ff5f65bd205dfb99f212256d948eadec.png"}}]);