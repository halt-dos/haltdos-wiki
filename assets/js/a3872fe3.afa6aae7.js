"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[64221],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},32545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_position:1},s="Error Rules",i={unversionedId:"enterprise/waf/listener/rules/errorrules",id:"enterprise/waf/listener/rules/errorrules",title:"Error Rules",description:"These rules mask application exceptions and errors with custom pages.",source:"@site/docs/enterprise/waf/listener/rules/errorrules.md",sourceDirName:"enterprise/waf/listener/rules",slug:"/enterprise/waf/listener/rules/errorrules",permalink:"/v8/enterprise/waf/listener/rules/errorrules",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"waf_sidebar",previous:{title:"Rules",permalink:"/v8/enterprise/waf/listener/rules/"},next:{title:"Header Rules",permalink:"/v8/enterprise/waf/listener/rules/headerrules"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>HTTP Response Codes</strong>",id:"http-response-codes",level:5},{value:"<strong>Error Handling</strong>",id:"error-handling",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page",level:5},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>HTTP Response Codes</strong>",id:"http-response-codes-1",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5}],c={toc:u},d="wrapper";function h(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(d,o({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"error-rules"}),"Error Rules"),(0,n.kt)("p",null,"These rules mask application exceptions and errors with custom pages."),(0,n.kt)("hr",null),(0,n.kt)("h3",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"error rules",src:r(53414).Z,width:"1900",height:"972"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Error Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("h5",o({},{id:"http-response-codes"}),(0,n.kt)("strong",{parentName:"h5"},"HTTP Response Codes")),(0,n.kt)("p",null,"HTTP error codes for which the custom error page needs to be shown. These are the response codes that the back-end sends in returns."),(0,n.kt)("h5",o({},{id:"error-handling"}),(0,n.kt)("strong",{parentName:"h5"},"Error Handling")),(0,n.kt)("p",null,"If this field is enabled, then the custom error page will be displayed. If it is disabled, then the default server error page will be displayed."),(0,n.kt)("h5",o({},{id:"custom-error-page"}),(0,n.kt)("strong",{parentName:"h5"},"Custom Error Page")),(0,n.kt)("p",null,"Select the desired custom error page which will be displayed when the specified error occurs. Or click the ",(0,n.kt)("strong",{parentName:"p"},"Add")," button which redirects to the custom pages screen to create a custom page and add HTML content and then select it from the drop-down list."),(0,n.kt)("admonition",o({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"We can globally disable error handling from WAF in the operational settings under advanced settings that we will learn later in Operational Settings.")),(0,n.kt)("h5",o({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",o({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",o({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"Specify the priority for the rule for execution when matched with the request."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0  \n")),(0,n.kt)("h5",o({},{id:"uri"}),(0,n.kt)("strong",{parentName:"h5"},"URI")),(0,n.kt)("p",null,"Specify the URI on which the tamper rule will be applied."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: URI\n\nDefault: Blank  \n")),(0,n.kt)("p",null,"<<<<<<< HEAD\nAccepted values: URI"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Default: Blank  \n")),(0,n.kt)("p",null,"======="),(0,n.kt)("blockquote",null,(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("p",{parentName:"blockquote"},"2298461a8e4645af310150ac2e6458d8cdd54073\nExample /login")))))))),(0,n.kt)("h5",o({},{id:"method"}),(0,n.kt)("strong",{parentName:"h5"},"Method")),(0,n.kt)("p",null,"Select the HTTP method for the rule to extract when matched with the request."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\nDefault: ALL  \n")),(0,n.kt)("h5",o({},{id:"http-response-codes-1"}),(0,n.kt)("strong",{parentName:"h5"},"HTTP Response Codes")),(0,n.kt)("p",null,"User can mention the HTTP response code based on the custom error rule name."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530\n\nDefault: Blank  \n")),(0,n.kt)("h5",o({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"Specifies the action to be executed when this is gets triggered"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: No Action / Send Custom Response\n\nDefault: No Action\n")))}h.isMDXComponent=!0},53414:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/waf_error-cf0fd36d708d274119ae2aa680d237f1.png"}}]);