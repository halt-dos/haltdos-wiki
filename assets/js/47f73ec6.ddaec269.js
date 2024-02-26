"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[60560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,d=u["".concat(l,".").concat(b)]||u[b]||f[b]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},86824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:3},s="Session Table",l={unversionedId:"enterprise/llb/session_table",id:"version-7.0/enterprise/llb/session_table",title:"Session Table",description:"Setting for Haltdos LLB",source:"@site/versioned_docs/version-7.0/enterprise/llb/session_table.md",sourceDirName:"enterprise/llb",slug:"/enterprise/llb/session_table",permalink:"/enterprise/llb/session_table",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"llb_sidebar",previous:{title:"Monitor",permalink:"/enterprise/llb/monitors/"},next:{title:"Rules",permalink:"/enterprise/llb/rules/"}},p={},c=[{value:"<strong>How to Use :</strong>",id:"how-to-use-",level:3}],u={toc:c},f="wrapper";function b(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"session-table"}),"Session Table"),(0,n.kt)("p",null,"Setting for Haltdos LLB"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Session tables provides us information about the traffic that is being moved over the Haltdos LLB device. This feature helps users to get details about the inbound and outbound traffic details. These details contain the timestamp for the traffic movement. Traffic is either generated from the WAN or LA, both can be filtered here."),(0,n.kt)("p",null,"This tables contain column with timestamp, source IP, source port, destination IP, destination port, type of NAT (SNAT or DNAT) for each and every request."),(0,n.kt)("p",null,"Session table feature is by default configured in disable mode. To enable, we need to go to ",(0,n.kt)("strong",{parentName:"p"},"Rules")," > ",(0,n.kt)("strong",{parentName:"p"},"Log Rules"),". We need to create a new log rule in order to capture packet information. Users can refer ",(0,n.kt)("a",o({parentName:"p"},{href:"/enterprise/llb/rules/snat"}),"Log Rules")," to configure log rule."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"llbsettings",src:r(1606).Z,width:"1656",height:"762"})),(0,n.kt)("h3",o({},{id:"how-to-use-"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use :")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > LLB"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Session Table"),"."))))}b.isMDXComponent=!0},1606:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/session_table-e7780c90e26300541de8798a3026d3f9.png"}}]);