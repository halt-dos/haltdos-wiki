"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[83784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:3},a="Session Table",l={unversionedId:"enterprise/adc/sessiontable",id:"enterprise/adc/sessiontable",title:"Session Table",description:"The session table show the connection details for the listener configured on the Haltdos SLB. Users can get details for the connection made to the application with the help of filters like date range filter, session ID filter & listener filter. User can get details like src IP, src port, country, request type, status, etc.",source:"@site/docs/enterprise/adc/sessiontable.md",sourceDirName:"enterprise/adc",slug:"/enterprise/adc/sessiontable",permalink:"/enterprise/adc/sessiontable",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adc_sidebar",previous:{title:"Incidents",permalink:"/enterprise/adc/incidents"},next:{title:"Haltdos ADC Deployment Scenarios",permalink:"/scenarios/adc"}},c={},p=[{value:"<strong>How to reach</strong>",id:"how-to-reach",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Date Range</strong>",id:"date-range",level:5},{value:"<strong>Search</strong>",id:"search",level:5},{value:"<strong>Listener</strong>",id:"listener",level:5}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"session-table"}),"Session Table"),(0,n.kt)("p",null,"The session table show the connection details for the listener configured on the Haltdos SLB. Users can get details for the connection made to the application with the help of filters like date range filter, session ID filter & listener filter. User can get details like src IP, src port, country, request type, status, etc."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(74768).Z,width:"1813",height:"866"})),(0,n.kt)("h3",o({},{id:"how-to-reach"}),(0,n.kt)("strong",{parentName:"h3"},"How to reach")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"SLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Session Table"))),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("h5",o({},{id:"date-range"}),(0,n.kt)("strong",{parentName:"h5"},"Date Range")),(0,n.kt)("p",null,"In this section you can select date range for which user wants to see the logs."),(0,n.kt)("h5",o({},{id:"search"}),(0,n.kt)("strong",{parentName:"h5"},"Search")),(0,n.kt)("p",null,"In this section user can search the session ID according to the requirement."),(0,n.kt)("h5",o({},{id:"listener"}),(0,n.kt)("strong",{parentName:"h5"},"Listener")),(0,n.kt)("p",null,"In this section user can select the Listener for which logs are required."))}f.isMDXComponent=!0},74768:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sessional_table_2-9489dcd7f2b95cc6834dee5bb2d0a60b.png"}}]);