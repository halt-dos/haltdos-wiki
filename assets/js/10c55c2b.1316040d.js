"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:13},l="Rule Condition",s={unversionedId:"cloud/waf/listener/profiles/rules/ruleCond",id:"cloud/waf/listener/profiles/rules/ruleCond",title:"Rule Condition",description:"Add Condition",source:"@site/docs/cloud/waf/listener/profiles/rules/ruleCond.md",sourceDirName:"cloud/waf/listener/profiles/rules",slug:"/cloud/waf/listener/profiles/rules/ruleCond",permalink:"/v8/cloud/waf/listener/profiles/rules/ruleCond",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"cloud_sidebar",previous:{title:"Defacement Rules",permalink:"/v8/cloud/waf/listener/profiles/rules/defacementRule"},next:{title:"Signatures",permalink:"/v8/cloud/waf/listener/profiles/signatures"}},c={},u=[{value:"Add Condition",id:"add-condition",level:3},{value:"Condition Phase",id:"condition-phase",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>HTTP Response Code</strong>",id:"http-response-code",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page",level:5},{value:"Variable",id:"variable",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],d={toc:u},p="wrapper";function h(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)(p,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"rule-condition"}),"Rule Condition"),(0,r.kt)("h3",a({},{id:"add-condition"}),"Add Condition"),(0,r.kt)("p",null,"This enables users to define conditions that are directly tied to the rules. These conditions act as prerequisites, mandating that certain condition must be met before a particular rule action can take effect. Essentially, users can establish requirements regarding the interactions between the system and external entities, ensuring that the rule is only enforced when these conditions are satisfied. This feature provides users with a powerful means of fine-tuning the behavior of the system, allowing for precise control over when and how rules are applied based on the context of request and response interactions."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"header rules",src:n(97420).Z,width:"930",height:"401"})),(0,r.kt)("p",null,"For adding a condition, the required fields are:"),(0,r.kt)("h4",a({},{id:"condition-phase"}),"Condition Phase"),(0,r.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Request / Response\n\nDefault: Request \n")),(0,r.kt)("h4",a({},{id:"find-location"}),"Find Location"),(0,r.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL:")," Select this if the specified value has to be searched in the URL part of the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HTTP Scheme:")," Select this if the specified value has to be searched in the\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Country:")," Select if specified value has to be search as source country.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Header Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header variables.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Header Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header values.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Headers:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cookie Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cookie Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cookies:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body Argument Name:")," Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body Argument Value:")," Select this if the specified value has to be searched in the values in the Body part of the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Body:")," Select this if the specified value has to be searched in the Body part of the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Argument Name:")," Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Argument Value:")," Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Arguments:"),"  Select this if the specified value has to be searched in the Arguments section in the HTTP Header.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Variable:")," Users can select the specific variable that has to be find.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SRC IP:"),"  Select if specified value has to be search as source IP.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client Browser:")," Select if specified value has to be search as client browser.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client OS:")," Select if specified value has to be search as client OS.\n"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client Device:"),"  Select if specified value has to be search as client device.")),(0,r.kt)("h4",a({},{id:"find-parameter"}),"Find Parameter"),(0,r.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String \n\nDefault: Blank  \n")),(0,r.kt)("h5",a({},{id:"uri"}),(0,r.kt)("strong",{parentName:"h5"},"URI")),(0,r.kt)("p",null,"Users are allowed to specify the URI."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Regex\n\nDefault: Blank\n")),(0,r.kt)("h5",a({},{id:"method"}),(0,r.kt)("strong",{parentName:"h5"},"Method")),(0,r.kt)("p",null,"Users are allowed to specify the method for the rule."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\nDefault: ALL\n")),(0,r.kt)("p",null,"For more information regarding HTTP method, please refer to this link: ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"}),(0,r.kt)("strong",{parentName:"a"},"HTTP Method"))),(0,r.kt)("h5",a({},{id:"http-response-code"}),(0,r.kt)("strong",{parentName:"h5"},"HTTP Response Code")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530\n\nDefault: NONE \n")),(0,r.kt)("h5",a({},{id:"rule-action"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Action")),(0,r.kt)("p",null,"Users are allowed to specify the rule action. Users can select either to take no action or send custom response."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: NO ACTION / SEND CUSTOM RESPONSE\n\nDefault: NO ACTION \n")),(0,r.kt)("h5",a({},{id:"custom-error-page"}),(0,r.kt)("strong",{parentName:"h5"},"Custom Error Page")),(0,r.kt)("p",null,"Users are allowed to select the custom error page from the drop-down list."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Custom Error Page\n\nDefault: Blank\n")),(0,r.kt)("h4",a({},{id:"variable"}),"Variable"),(0,r.kt)("p",null,"The Request / Responses shared by WAF stored in the form of variable for further uses."),(0,r.kt)("h4",a({},{id:"match-condition"}),"Match Condition"),(0,r.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Pattern Exists / Pattern Not Exists / Variable Expression / Minimum Value / Maximum Value / Minimum Length / Maximum Length / Equals / Not Equals / Less Than / Less Than Equal / Greater Than / Greater Than Equal\n\nDefault: Any from above \n")),(0,r.kt)("h4",a({},{id:"match-value"}),"Match Value"),(0,r.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer / String\n\nDefault: Blank\n")))}h.isMDXComponent=!0},97420:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/headerrulescondition-f21c38af1f66abe1bb89e0d6a6a0d059.png"}}]);