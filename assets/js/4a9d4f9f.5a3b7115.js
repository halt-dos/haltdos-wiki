"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[14432],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(i,".").concat(m)]||c[m]||f[m]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={},s="Rules",i={unversionedId:"enterprise/llb/rules/rules",id:"enterprise/llb/rules/rules",title:"Rules",description:"Custom Rules for NAT, Static & Policy-based routing, QoS",source:"@site/docs/enterprise/llb/rules/rules.md",sourceDirName:"enterprise/llb/rules",slug:"/enterprise/llb/rules/",permalink:"/enterprise/llb/rules/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"llb_sidebar",previous:{title:"Session Table",permalink:"/enterprise/llb/session_table"},next:{title:"Load Balancing",permalink:"/enterprise/llb/rules/load_balancing"}},p={},u=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Types of Rules</strong>",id:"types-of-rules",level:3}],c={toc:u},f="wrapper";function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(f,a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"rules"}),"Rules"),(0,n.kt)("p",null,"Custom Rules for NAT, Static & Policy-based routing, QoS"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos LLB supports various types of rules for users to configure LLB as per their network requirements. Users can set Load Balancing rules, fixed as well as policy-based routing & traffic shaper rules."),(0,n.kt)("h3",a({},{id:"how-to-use"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Stack > LLB > Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the appropriate rule.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("h3",a({},{id:"types-of-rules"}),(0,n.kt)("strong",{parentName:"h3"},"Types of Rules")),(0,n.kt)("p",null,"In Haltdos LLB, users can set multiple types of rules based on their requirements. This feature allows users to set the following rules on the inbound as well as outbound traffic."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/llb/rules/load_balancing"}),(0,n.kt)("strong",{parentName:"a"},"Load Balancing")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/llb/rules/snat"}),(0,n.kt)("strong",{parentName:"a"},"Source NAT")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/llb/rules/dnat"}),(0,n.kt)("strong",{parentName:"a"},"Destination NAT")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/llb/rules/fixed_routing"}),(0,n.kt)("strong",{parentName:"a"},"Fixed Route")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/llb/rules/policy_routing"}),(0,n.kt)("strong",{parentName:"a"},"Policy Route")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",a({parentName:"p"},{href:"/enterprise/llb/rules/QoS"}),(0,n.kt)("strong",{parentName:"a"},"Traffic Shaper"))))))}m.isMDXComponent=!0}}]);