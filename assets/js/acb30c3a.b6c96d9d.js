"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[72571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||b[f]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={sidebar_position:7},i="KB:1007",l={unversionedId:"kb/waf/kb-1007",id:"version-6.0/kb/waf/kb-1007",title:"KB:1007",description:"----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1007.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1007",permalink:"/v6/kb/waf/kb-1007",draft:!1,tags:[],version:"6.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"kb_sidebar",previous:{title:"KB:1006",permalink:"/v6/kb/waf/kb-1006"},next:{title:"KB:1008",permalink:"/v6/kb/waf/kb-1008"}},p={},c=[],u={toc:c},b="wrapper";function f(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)(b,a({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb1007"}),"KB:1007"),(0,n.kt)("hr",null),(0,n.kt)("h1",a({},{id:"how-to-choose-server-groups-based-on-http-request-"}),"How to choose server groups based on HTTP request ?"),(0,n.kt)("p",null,"Haltdos WAF supports the upstream rule. The upstream rule can help the user to forward the request to desired backend server/server group. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1007",src:r(73443).Z,width:"1566",height:"651"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Statement")),(0,n.kt)("p",null,"The client wants some requests to be served by one particular server group or DC and other requests to be served by another DC or a different server group."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("p",null,"To achieve the above scenario, we can use the upstream rules. Start by simply creating different server groups and servers inside them. No one has to go inside the upstream rule section and create the rule such that one chooses which server group will serve the request and also mentions the condition for the same."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to Solve")),(0,n.kt)("p",null,"1: First of all we create a server group with desired backend IP. for example our backend."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1007",src:r(38380).Z,width:"1642",height:"801"})),(0,n.kt)("p",null,"2: We need to make an upstream rule so that desired server will serve the request."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1007",src:r(6821).Z,width:"1635",height:"806"})),(0,n.kt)("p",null,"3: Now as the website is bound with the false backend server. It'll not be served properly."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1007",src:r(90092).Z,width:"1913",height:"956"})),(0,n.kt)("p",null,"4: Now if we set the upstream rule upstream to default real server."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1007",src:r(27758).Z,width:"1638",height:"835"})),(0,n.kt)("p",null,"5: As a result, now we are able to reach the website as its served by a real backend server/server group"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1007",src:r(58040).Z,width:"1911",height:"931"})),(0,n.kt)("p",null,"Here, we are not able to get the response from the actual server because the end-user request has been served by the correct server group."))}f.isMDXComponent=!0},73443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb7-740fb7f971a660855727c175597784a1.png"},38380:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb72-3ef51b0fc007b77be31a47ea428a8113.png"},6821:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb73-f63c3e7a9acd2d1d6f89a857bdc38cf0.png"},90092:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb74-3b55c7b9c34b71fbaa72be67b87a2cf8.png"},27758:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb75-197a96a59a6e41c49f78b9444bfdfaf2.png"},58040:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb76-6c6bbfce68a2680fb6c2ddc9b7201e86.png"}}]);