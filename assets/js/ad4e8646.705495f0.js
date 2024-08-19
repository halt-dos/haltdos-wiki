"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[74393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},20618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={},i="Redirectional Rules",s={unversionedId:"enterprise/waf/listener/rules/redirectionalrules",id:"version-7.0/enterprise/waf/listener/rules/redirectionalrules",title:"Redirectional Rules",description:"These rules allow you to configure redirection for your application pages",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/rules/redirectionalrules.md",sourceDirName:"enterprise/waf/listener/rules",slug:"/enterprise/waf/listener/rules/redirectionalrules",permalink:"/v7/enterprise/waf/listener/rules/redirectionalrules",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Header Rules",permalink:"/v7/enterprise/waf/listener/rules/headerrules"},next:{title:"Upstream Rules",permalink:"/v7/enterprise/waf/listener/rules/upstreamrules"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Message</strong>",id:"message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Match URL</strong>",id:"match-url",level:5},{value:"<strong>Forward URL</strong>",id:"forward-url",level:5},{value:"<strong>Response Code</strong>",id:"response-code",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}],c={toc:u},d="wrapper";function h(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(d,o({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"redirectional-rules"}),"Redirectional Rules"),(0,n.kt)("p",null,"These rules allow you to configure redirection for your application pages"),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Redirectional rules",src:r(32633).Z,width:"1836",height:"870"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Redirection Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("h5",o({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alphanumeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"message"}),(0,n.kt)("strong",{parentName:"h5"},"Message")),(0,n.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"User can set the priority of the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"match-url"}),(0,n.kt)("strong",{parentName:"h5"},"Match URL")),(0,n.kt)("p",null,"Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,"The match URL should follow the format: ","[http(s)://www.(",(0,n.kt)("em",{parentName:"p"},").haltdos.io/("),")]"),(0,n.kt)("h5",o({},{id:"forward-url"}),(0,n.kt)("strong",{parentName:"h5"},"Forward URL")),(0,n.kt)("p",null,"The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL.\nThe forward URL should follow the format: ","[http(s)://(",(0,n.kt)("em",{parentName:"p"},").haltdos-1.io/("),")]"," "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"response-code"}),(0,n.kt)("strong",{parentName:"h5"},"Response Code")),(0,n.kt)("p",null,"In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"301 - Permanent Redirect")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"302 - Temporary Redirect")),(0,n.kt)("h5",o({},{id:"add-condition"}),(0,n.kt)("strong",{parentName:"h5"},"Add Condition")),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"To configure the parameter of the conditions please refer to the following link: ",(0,n.kt)("a",o({parentName:"p"},{href:"/v7/enterprise/waf/listener/profiles/rules/conditions"}),(0,n.kt)("strong",{parentName:"a"},"Conditions"))))}h.isMDXComponent=!0},32633:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redirection_rule-7dc3a6b34f1830297a9ad200ac9c41db.png"}}]);