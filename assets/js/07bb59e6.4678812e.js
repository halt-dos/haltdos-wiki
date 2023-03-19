"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[58999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:4},i="Redirection Rules",s={unversionedId:"community/docs/waf/rules/redirection_rules",id:"version-6.0/community/docs/waf/rules/redirection_rules",title:"Redirection Rules",description:"Overview",source:"@site/versioned_docs/version-6.0/community/docs/waf/rules/redirection_rules.md",sourceDirName:"community/docs/waf/rules",slug:"/community/docs/waf/rules/redirection_rules",permalink:"/v6/community/docs/waf/rules/redirection_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"community_sidebar",previous:{title:"Rate Limit Rules",permalink:"/v6/community/docs/waf/rules/rate_limit"},next:{title:"Whitelist Rules",permalink:"/v6/community/docs/waf/rules/whitelist_rules"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Match URL",id:"match-url",level:4},{value:"Forward URL",id:"forward-url",level:4},{value:"Response Code",id:"response-code",level:4}],d={toc:p},c="wrapper";function m(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(c,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"redirection-rules"}),"Redirection Rules"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"redirectional rules",src:r(62179).Z,width:"1644",height:"984"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Redirection Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Description for the rule in String format"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match URL"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Absolute URL path"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Forward URL"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Absolute URL path"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Response Code"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"301, 302"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"302 - Temporary Redirect")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"redirectional rules",src:r(83015).Z,width:"1055",height:"586"})),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h4",a({},{id:"rule-name"}),"Rule Name"),(0,n.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input."),(0,n.kt)("h4",a({},{id:"rule-message"}),"Rule Message"),(0,n.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,n.kt)("h4",a({},{id:"rule-priority"}),"Rule Priority"),(0,n.kt)("p",null,"User can set the priority of the rule."),(0,n.kt)("h4",a({},{id:"match-url"}),"Match URL"),(0,n.kt)("p",null,"Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule.\nThe match URL should follow the format: ","[http(s)://www.(",(0,n.kt)("em",{parentName:"p"},").haltdos.io/("),")]"),(0,n.kt)("h4",a({},{id:"forward-url"}),"Forward URL"),(0,n.kt)("p",null,"The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.\nThe forward URL should follow the format: ","[http(s)://(",(0,n.kt)("em",{parentName:"p"},").haltdos-1.io/("),")]"," "),(0,n.kt)("h4",a({},{id:"response-code"}),"Response Code"),(0,n.kt)("p",null,"In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"301")," - Permanent Redirect "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"302")," - Temporary Redirect"))}m.isMDXComponent=!0},62179:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redirection_rules-cb3d8e4659b7e82daef4e48939383da6.png"},83015:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redirectionrulescondition-30bde475f3cbdc86983c1351225dfa6b.png"}}]);