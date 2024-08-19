"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[76571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),h=l,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const o={sidebar_position:10},i="Deception Rules",s={unversionedId:"cloud/waf/listener/profiles/rules/deception_rules",id:"cloud/waf/listener/profiles/rules/deception_rules",title:"Deception Rules",description:"Overview",source:"@site/docs/cloud/waf/listener/profiles/rules/deception_rules.md",sourceDirName:"cloud/waf/listener/profiles/rules",slug:"/cloud/waf/listener/profiles/rules/deception_rules",permalink:"/cloud/waf/listener/profiles/rules/deception_rules",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"cloud_sidebar",previous:{title:"Correlation Rules",permalink:"/cloud/waf/listener/profiles/rules/correlation_rules"},next:{title:"Script Rule",permalink:"/cloud/waf/listener/profiles/rules/script_rules"}},u={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Decoy URI</strong>",id:"decoy-uri",level:5},{value:"<strong>Decoy Methods</strong>",id:"decoy-methods",level:5},{value:"<strong>Fields</strong>",id:"fields",level:5}],c={toc:p},d="wrapper";function h(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(d,l({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"deception-rules"}),"Deception Rules"),(0,n.kt)("h3",l({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Deception strategies will be implemented as a deception rule. This rule is capable of generating and injecting deception data automatically into HTTP traffic.\nThe goal of deception is to deceive and manipulate attackers inducing them to take actions that result in blocking the requests coming from them.\nThe attacker should believe that fake parameters are genuine and really belong to the real application and should try to modify them in a malicious way."),(0,n.kt)("p",null,"The rule will have to do the following :\nIntercept HTTP responses of the original application and inject fake parameters before delivering the response to the client. The possible fake parameter values will try to have attractive names and values."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"For GET requests, the parameters will be added to existing ",(0,n.kt)("inlineCode",{parentName:"li"},"<a href>")," link values."),(0,n.kt)("li",{parentName:"ol"},"For POST requests, the parameters will be added as hidden input type parameters of existing forms.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deception Rule",src:r(1414).Z,width:"1910",height:"900"})),(0,n.kt)("h3",l({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Deception Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on save changes")),(0,n.kt)("h3",l({},{id:"description"}),"Description"),(0,n.kt)("h5",l({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank  \n")),(0,n.kt)("h5",l({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: Description for the rule in String format\n\nDefault: Blank  \n")),(0,n.kt)("h5",l({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0  \n")),(0,n.kt)("h5",l({},{id:"uri"}),(0,n.kt)("strong",{parentName:"h5"},"URI")),(0,n.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: Regex\n\nDefault: Blank  \n")),(0,n.kt)("h5",l({},{id:"method"}),(0,n.kt)("strong",{parentName:"h5"},"Method")),(0,n.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\nDefault: ALL  \n")),(0,n.kt)("h5",l({},{id:"rule-action"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"The following actions are available to the User-"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: Drop & Record Request / Record Request / Temprorary  Blacklist Src IP / Tarpit Src IP / Redirect / Terminate Connection / Block User Session\n\nDefault: Drop & Record Request  \n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"DROP & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated, but the request will not be allowed through the WAF."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST SOURCE IP")," - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"TARPIT SRC.IP")," - If the request satisfies the rule, the end-user IP will be tarpit.")),(0,n.kt)("h5",l({},{id:"decoy-uri"}),(0,n.kt)("strong",{parentName:"h5"},"Decoy URI")),(0,n.kt)("p",null,"Users can specify the smoke URI for the rule. The smoke URI will be the one that could be used by attackers to attack."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: /login\n\nDefault: Blank  \n")),(0,n.kt)("h5",l({},{id:"decoy-methods"}),(0,n.kt)("strong",{parentName:"h5"},"Decoy Methods")),(0,n.kt)("p",null,"Users can specify the HTTP methods for the rule to be created."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: GET / POST\n\nDefault: GET  \n")),(0,n.kt)("h5",l({},{id:"fields"}),(0,n.kt)("strong",{parentName:"h5"},"Fields")),(0,n.kt)("p",null,"Users can specify the fields for which the rule will be applicable."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}h.isMDXComponent=!0},1414:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/deceptionRules-df31b9a34e8e52aacd64ba25a238372e.png"}}]);