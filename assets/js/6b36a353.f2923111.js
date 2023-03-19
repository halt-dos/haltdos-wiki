"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[89835],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=s,v=c["".concat(i,".").concat(m)]||c[m]||f[m]||a;return t?n.createElement(v,l(l({ref:r},p),{},{components:t})):n.createElement(v,l({ref:r},p))}));function v(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[c]="string"==typeof e?e:s,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76625:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});t(67294);var n=t(3905);function s(){return s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const l={},o="Rules",i={unversionedId:"enterprise/waf/listener/rules/rules",id:"version-6.0/enterprise/waf/listener/rules/rules",title:"Rules",description:"Haltdos WAF supports various types of rules for users to configure WAF as per their network requirements. Users can set error rules, redirection as well as upstream rules. Here we have mentioned the list of rules users can create in listeners.",source:"@site/versioned_docs/version-6.0/enterprise/waf/listener/rules/rules.md",sourceDirName:"enterprise/waf/listener/rules",slug:"/enterprise/waf/listener/rules/",permalink:"/v6/enterprise/waf/listener/rules/",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Monitors",permalink:"/v6/enterprise/waf/listener/monitor"},next:{title:"Error Rules",permalink:"/v6/enterprise/waf/listener/rules/errorrules"}},u={},p=[],c={toc:p},f="wrapper";function m(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)(f,s({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"rules"}),"Rules"),(0,n.kt)("p",null,"Haltdos WAF supports various types of rules for users to configure WAF as per their network requirements. Users can set error rules, redirection as well as upstream rules. Here we have mentioned the list of rules users can create in listeners."),(0,n.kt)("p",null,"1.",(0,n.kt)("a",s({parentName:"p"},{href:"/v6/enterprise/waf/listener/rules/errorrules"}),(0,n.kt)("strong",{parentName:"a"},"Error rules"))),(0,n.kt)("p",null,"2.",(0,n.kt)("a",s({parentName:"p"},{href:"/v6/enterprise/waf/listener/rules/headerrules"}),(0,n.kt)("strong",{parentName:"a"},"Header rules"))),(0,n.kt)("p",null,"3.",(0,n.kt)("a",s({parentName:"p"},{href:"/v6/enterprise/waf/listener/rules/redirectionalrules"}),(0,n.kt)("strong",{parentName:"a"},"Redirectional rules"))),(0,n.kt)("p",null,"4.",(0,n.kt)("a",s({parentName:"p"},{href:"/v6/enterprise/waf/listener/rules/upstreamrules"}),(0,n.kt)("strong",{parentName:"a"},"Upstream rules"))),(0,n.kt)("p",null,"5.",(0,n.kt)("a",s({parentName:"p"},{href:"/v6/enterprise/waf/listener/rules/variablerule"}),(0,n.kt)("strong",{parentName:"a"},"Variable rules"))))}m.isMDXComponent=!0}}]);