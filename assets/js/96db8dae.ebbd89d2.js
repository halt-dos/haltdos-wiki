"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[49528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(n),m=i,d=g["".concat(l,".").concat(m)]||g[m]||c[m]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={sidebar_position:2},s="Rule Staging",l={unversionedId:"enterprise/waf/listener/Setting/ruleStaging",id:"enterprise/waf/listener/Setting/ruleStaging",title:"Rule Staging",description:"Rule Stagging allow WAF to stage for the record purposes of the signatures.",source:"@site/docs/enterprise/waf/listener/Setting/ruleStaging.md",sourceDirName:"enterprise/waf/listener/Setting",slug:"/enterprise/waf/listener/Setting/ruleStaging",permalink:"/enterprise/waf/listener/Setting/ruleStaging",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"Operational",permalink:"/enterprise/waf/listener/Setting/operational"},next:{title:"Learning Setting",permalink:"/enterprise/waf/listener/Setting/learningSetting"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"<strong>Automatic Updates and Staging Process</strong>",id:"automatic-updates-and-staging-process",level:4},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Staging Policy</strong>",id:"staging-policy",level:5},{value:"<strong>Minimum Staging Requests</strong>",id:"minimum-staging-requests",level:5},{value:"<strong>Minimum Staging Duration</strong>",id:"minimum-staging-duration",level:5},{value:"<strong>Maximum Match Threshold</strong>",id:"maximum-match-threshold",level:5}],g={toc:p},c="wrapper";function m(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)(c,i({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"rule-staging"}),"Rule Staging"),(0,r.kt)("p",null,"Rule Stagging allow WAF to stage for the record purposes of the signatures."),(0,r.kt)("hr",null),(0,r.kt)("h3",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Users can configure below rule staging settings for Listener."),(0,r.kt)("h4",i({},{id:"automatic-updates-and-staging-process"}),(0,r.kt)("strong",{parentName:"h4"},"Automatic Updates and Staging Process")),(0,r.kt)("p",null,"All updates are automatically pushed to the system. These rules are initially placed in staging mode before being deployed to production. This process ensures that if any disruptions occur in the production environment, the system can easily roll back to the previous staging mode, minimizing potential impacts.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener Rule Stagging",src:n(17461).Z,width:"1907",height:"884"}),"  "),(0,r.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Rule Staging"),".  "),(0,r.kt)("li",{parentName:"ol"},"Configure the settings."),(0,r.kt)("li",{parentName:"ol"},"Click on Save changes.  ")),(0,r.kt)("h3",i({},{id:"description"}),"Description"),(0,r.kt)("h5",i({},{id:"staging-policy"}),(0,r.kt)("strong",{parentName:"h5"},"Staging Policy")),(0,r.kt)("p",null,"Users can specify the staging policy and auto-deployment of new signatures."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Manual / Minimal Request / Minimal Duration / Minimal Request & Duration / Minimal Request or Duration / Learning Window\n\nDefault: Manual \n")),(0,r.kt)("h5",i({},{id:"minimum-staging-requests"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Staging Requests")),(0,r.kt)("p",null,"Users can specify minimum requests before deploying new signatures. By default, it is 10000 requests."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 1000 \n")),(0,r.kt)("h5",i({},{id:"minimum-staging-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Staging Duration")),(0,r.kt)("p",null,"Users can specify minimum duration before deploying new signatures. By default, it is 4 days."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 4 \n")),(0,r.kt)("h5",i({},{id:"maximum-match-threshold"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Match Threshold")),(0,r.kt)("p",null,"Users can specify maximum acceptable match for auto deploying new signatures."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 10\n")))}m.isMDXComponent=!0},17461:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/WAFruleStagginf-95f16f29d455950f51401f772aa12121.png"}}]);