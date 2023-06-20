"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[14033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:4},l="RUM Metric",c={unversionedId:"cloud/waf/listener/performance/rum_metric",id:"cloud/waf/listener/performance/rum_metric",title:"RUM Metric",description:"Real User Monitoring (RUM) helps in analyzing website performance (till page metrics) on client side.",source:"@site/docs/cloud/waf/listener/performance/rum_metric.md",sourceDirName:"cloud/waf/listener/performance",slug:"/cloud/waf/listener/performance/rum_metric",permalink:"/cloud/waf/listener/performance/rum_metric",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"cloud_sidebar",previous:{title:"Compression",permalink:"/cloud/waf/listener/performance/compression"},next:{title:"Rules",permalink:"/cloud/waf/listener/rules/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],u={toc:p},m="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(m,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"rum-metric"}),"RUM Metric"),(0,n.kt)("p",null,"Real User Monitoring (RUM) helps in analyzing website performance (till page metrics) on client side."),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Haltdos provides the user to monitor performance in real-time on the client-side. When the RUM metric is enabled, WAF monitors performance to a specific URI w.r.t. duration set for collecting information for the request. The performance analysis is displayed in terms of statistics on the Analytics page in Real User Monitoring."),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF > Zones > Listeners > Performance > Rum Metric")),(0,n.kt)("li",{parentName:"ol"},"Add the configuration and ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enable Rum Metric"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enabled/Disabled"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Duration"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"3600")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Add URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h4",a({},{id:"description"}),"Description:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enable RUM Metric"),": To enable RUM metric, enable the toggle button. It starts to monitor the performance for a specific URI at a defined interval."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Duration"),": This field specifies the duration for collecting information for the request recursively. The time duration is specified in seconds."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add URI"),": This field specifies the URI address where the RUM metric will analyze the performance."))}f.isMDXComponent=!0}}]);