"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[30800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(d,l(l({ref:t},g),{},{components:n})):r.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:10},s="Rule Staging",o={unversionedId:"enterprise/waf/listener/rulestaging",id:"enterprise/waf/listener/rulestaging",title:"Rule Staging",description:"User can specify rule staging settings on this page for Listener",source:"@site/docs/enterprise/waf/listener/rulestaging.md",sourceDirName:"enterprise/waf/listener",slug:"/enterprise/waf/listener/rulestaging",permalink:"/enterprise/waf/listener/rulestaging",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"waf_sidebar",previous:{title:"Advanced Bot",permalink:"/enterprise/waf/listener/advancedbot"},next:{title:"Learning",permalink:"/enterprise/waf/listener/learning"}},u={},g=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:3},{value:"<strong>Staging Policy</strong>",id:"staging-policy",level:5},{value:"<strong>Minimum Staging Requests</strong>",id:"minimum-staging-requests",level:5},{value:"<strong>Minimum Staging Duration</strong>",id:"minimum-staging-duration",level:5},{value:"<strong>Maximum Staging Threshold</strong>",id:"maximum-staging-threshold",level:5}],p={toc:g},c="wrapper";function m(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)(c,a({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"rule-staging"}),"Rule Staging"),(0,r.kt)("p",null,"User can specify rule staging settings on this page for Listener"),(0,r.kt)("hr",null),(0,r.kt)("h3",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Users can configure below rule staging settings for Listener."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rule Staging",src:n(83464).Z,width:"1838",height:"655"})),(0,r.kt)("h2",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Advanced Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Staging Settings")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted  Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Staging Policy"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the Staging policy and auto-deployment of new signatures Accepted values: Dropdown"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Manual")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Minimum Staging Requests"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify minimum requests before deploying new signatures.Accepted values: Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Minimum Staging Duration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify the minimum duration before deploying new signatures Accepted values:Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Maximum Staging Threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify maximum acceptable match for auto-deploying new signatures.Accepted values :Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"staging-policy"}),(0,r.kt)("strong",{parentName:"h5"},"Staging Policy")),(0,r.kt)("p",null,"Users can specify the staging policy and auto-deployment of new signatures. Accepted values: MANUAL / REQUEST/ DURATION/ REQUEST AND DURATION/ REQUEST OR DURATION. By default, it is MANUAL."),(0,r.kt)("h5",a({},{id:"minimum-staging-requests"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Staging Requests")),(0,r.kt)("p",null,"Users can specify minimum requests before deploying new signatures. By default, it is 10000 requests."),(0,r.kt)("h5",a({},{id:"minimum-staging-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Staging Duration")),(0,r.kt)("p",null,"Users can specify minimum duration before deploying new signatures. By default, it is 7 days."),(0,r.kt)("h5",a({},{id:"maximum-staging-threshold"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Staging Threshold")),(0,r.kt)("p",null,"Users can specify the maximum acceptable match for auto-deploying new signatures. By default, it is 0."))}m.isMDXComponent=!0},83464:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rulestaging-56b76380aaca002f34b61b6ef086488f.png"}}]);