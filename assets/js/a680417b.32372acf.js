"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[90655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={sidebar_position:3},i="Reports",p={unversionedId:"enterprise/platform/stacks/stack_settings/reports",id:"version-6.0/enterprise/platform/stacks/stack_settings/reports",title:"Reports",description:"Overview of reports",source:"@site/versioned_docs/version-6.0/enterprise/platform/stacks/stack_settings/reports.md",sourceDirName:"enterprise/platform/stacks/stack_settings",slug:"/enterprise/platform/stacks/stack_settings/reports",permalink:"/v6/enterprise/platform/stacks/stack_settings/reports",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"AAA Policy",permalink:"/v6/enterprise/platform/stacks/stack_settings/aaa_policy"},next:{title:"Scheduler",permalink:"/v6/enterprise/platform/stacks/stack_settings/scheduler"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Types of Reports",id:"types-of-reports",level:3}],u={toc:c},f="wrapper";function m(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(f,o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"reports"}),"Reports"),(0,n.kt)("p",null,"Overview of reports"),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Haltdos solutions provides comprehensive reporting via dashboards on GUI or sent as PDF to registered users over email. The report details summary of all activity on your protected asset(s)."),(0,n.kt)("p",null,"To enable reporting use Scheduler (under Stack Settings) to specify report type, duration and scope. The reports can be generated for various durations - Day, Week, Month or Custom time range as desired."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"reports",src:r(84586).Z,width:"1562",height:"735"})),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"types-of-reports"}),"Types of Reports"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WAF / ADC")),(0,n.kt)("p",null,"The following reports are provided by the platform (built-in reports). Custom reports can also be generated. Please refer to Dashboards (under Stack Settings)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"WAF Overview"),(0,n.kt)("li",{parentName:"ul"},"PCI Summary"),(0,n.kt)("li",{parentName:"ul"},"WAF Device Fingerprinting"),(0,n.kt)("li",{parentName:"ul"},"WAF HTTP Summary"),(0,n.kt)("li",{parentName:"ul"},"WAF Attack Overview"),(0,n.kt)("li",{parentName:"ul"},"Attack Device Fingerprinting"),(0,n.kt)("li",{parentName:"ul"},"Attack Categorization"),(0,n.kt)("li",{parentName:"ul"},"Attack HTTP Summary"),(0,n.kt)("li",{parentName:"ul"},"Real User Monitoring"),(0,n.kt)("li",{parentName:"ul"},"Load Balancing Summary")))}m.isMDXComponent=!0},84586:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/reports-d91a13115b4cc9cd3c624ef5d5f593ff.png"}}]);