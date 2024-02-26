"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[87873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||h[f]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={sidebar_position:6},o="Global Whitelist",s={unversionedId:"enterprise/waf/global_whitelist",id:"enterprise/waf/global_whitelist",title:"Global Whitelist",description:"---",source:"@site/docs/enterprise/waf/global_whitelist.md",sourceDirName:"enterprise/waf",slug:"/enterprise/waf/global_whitelist",permalink:"/v8/enterprise/waf/global_whitelist",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"waf_sidebar",previous:{title:"Incidents",permalink:"/v8/enterprise/waf/incidents"},next:{title:"Tools",permalink:"/v8/enterprise/waf/tools/"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"Global Whitelist Rules",id:"global-whitelist-rules",level:3},{value:"Description",id:"description",level:2}],u={toc:c},h="wrapper";function f(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(h,i({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"global-whitelist"}),"Global Whitelist"),(0,n.kt)("hr",null),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Global settings help to configure the settings whose scope is global. Here we have Global Whitelist Rules which would whitelist the mitigations globally irrespective of zone or listener."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Global Whitelist Rules",src:r(20929).Z,width:"1836",height:"560"})),(0,n.kt)("h3",i({},{id:"global-whitelist-rules"}),"Global Whitelist Rules"),(0,n.kt)("p",null,"These are the whitelist rule which helps in whitelisting mitigations globally for all the zones and listener in the stack."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Global Whitelist")," > ",(0,n.kt)("strong",{parentName:"li"},"Global Whitelist Rule")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure the Fields"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Global Whitelist Condition ",src:r(89181).Z,width:"972",height:"568"})),(0,n.kt)("h2",i({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Name"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the rule name."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Message"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify a user-friendly message"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Priority"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the priority of the rule. Rule with less priority will be followed first."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the URI ( Uniform Resource Identifier )for the rule as per the requirement."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Method"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the HTTP method which should be followed for the rule."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Custom Rule ID"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the custom rule ID which was triggered or for which rule the user is setting up the whitelist rule."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Find Location"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can define the source location where this condition needs to be applied."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Find Parameter"),(0,n.kt)("br",{parentName:"p"}),"\n","The user can define the parameter based on the location of the condition."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Match Condition"),(0,n.kt)("br",{parentName:"p"}),"\n","The user can define the match condition for the parameter and match value."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Match Value"),(0,n.kt)("br",{parentName:"p"}),"\n","The user can define what value needs to be matched with the match condition."))}f.isMDXComponent=!0},20929:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/global_whitelist-5275303d1513ba56b4bc841be2616bd8.png"},89181:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/global_whitelist_condition-b2d321a430a6e79a07621d3bd16af0ef.png"}}]);