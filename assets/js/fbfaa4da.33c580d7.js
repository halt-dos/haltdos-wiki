"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[64212],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79929:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={sidebar_position:1},o="Header Rules",s={unversionedId:"community/docs/waf/rules/header_rules",id:"version-7.0/community/docs/waf/rules/header_rules",title:"Header Rules",description:"Overview",source:"@site/versioned_docs/version-7.0/community/docs/waf/rules/header_rules.md",sourceDirName:"community/docs/waf/rules",slug:"/community/docs/waf/rules/header_rules",permalink:"/community/docs/waf/rules/header_rules",draft:!1,tags:[],version:"7.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"community_sidebar",previous:{title:"Variables",permalink:"/community/docs/waf/variable"},next:{title:"Firewall Rules",permalink:"/community/docs/waf/rules/firewall_rules"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Message",id:"message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"HTTP URI",id:"http-uri",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Evaluation Phase",id:"evaluation-phase",level:4},{value:"Attribute Name",id:"attribute-name",level:4},{value:"Attribute Value",id:"attribute-value",level:4},{value:"Parameter",id:"parameter",level:4},{value:"Add Condition",id:"add-condition",level:4},{value:"Condition Phase",id:"condition-phase",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Parameter",id:"parameter-1",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],c={toc:u},d="wrapper";function h(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)(d,n({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"header-rules"}),"Header Rules"),(0,r.kt)("h3",n({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"header rules",src:a(95785).Z,width:"1658",height:"978"})),(0,r.kt)("h3",n({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Rules")," > ",(0,r.kt)("strong",{parentName:"li"},"Header Rules"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described below."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("h3",n({},{id:"description"}),"Description"),(0,r.kt)("h4",n({},{id:"rule-name"}),"Rule Name"),(0,r.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: String / Integer\n\nDefault: Blank  \n")),(0,r.kt)("h4",n({},{id:"message"}),"Message"),(0,r.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: String / Integer\n\nDefault: Blank  \n")),(0,r.kt)("h4",n({},{id:"rule-priority"}),"Rule Priority"),(0,r.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 0  \n")),(0,r.kt)("h4",n({},{id:"http-uri"}),"HTTP URI"),(0,r.kt)("p",null,"Specify the URI or regex for which rule will be applied. "),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: URI \n\nDefault: Blank  \n")),(0,r.kt)("h4",n({},{id:"http-method"}),"HTTP Method"),(0,r.kt)("p",null,"Select the HTTP method for the rule to validate when matched with the request."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: Any, Get, Post, Put, Delete, Patch, Head, Options \n\nDefault: Any\n")),(0,r.kt)("p",null,"For more information regarding HTTP method, please refer to this link: ",(0,r.kt)("a",n({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"}),"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods")," "),(0,r.kt)("h4",n({},{id:"rule-action"}),"Rule Action"),(0,r.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,r.kt)("p",null,"1) ",(0,r.kt)("strong",{parentName:"p"},"ADD:")," This condition will allow adding a value at the specified location."),(0,r.kt)("p",null,"2) ",(0,r.kt)("strong",{parentName:"p"},"REMOVE:")," This condition will allow removing a value at the specified location."),(0,r.kt)("p",null,"3) ",(0,r.kt)("strong",{parentName:"p"},"OVERWRITE:")," This condition will allow overwriting a value at the specified location."),(0,r.kt)("p",null,"If the action is ",(0,r.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,r.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,r.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,r.kt)("p",null,"If the action is ",(0,r.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,r.kt)("p",null,"If the action is ",(0,r.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,r.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and ",(0,r.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In order to escape the dollar($) character in the replace, add the dollar symbol twice."),(0,r.kt)("h4",n({},{id:"evaluation-phase"}),"Evaluation Phase"),(0,r.kt)("p",null,"Select the evaluation phase for the rule i.e. Request or Response."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: Request Phase / Response Phase \n\nDefault: Request Phase  \n")),(0,r.kt)("h4",n({},{id:"attribute-name"}),"Attribute Name"),(0,r.kt)("p",null,"Specify the attribute name which need to add/delete/overwrite with rule."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: String / Integer\n\nDefault: Blank  \n")),(0,r.kt)("h4",n({},{id:"attribute-value"}),"Attribute Value"),(0,r.kt)("p",null,"Specify the attribute value which will be mentioned in the attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: String / Integer\n\nDefault: Blank  \n")),(0,r.kt)("h4",n({},{id:"parameter"}),"Parameter"),(0,r.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which action will be performed."),(0,r.kt)("h4",n({},{id:"add-condition"}),"Add Condition"),(0,r.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"header rules",src:a(97420).Z,width:"930",height:"401"})),(0,r.kt)("p",null,"For adding a condition, the required fields are:"),(0,r.kt)("h4",n({},{id:"condition-phase"}),"Condition Phase"),(0,r.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: Request / Response\n\nDefault: Request \n")),(0,r.kt)("h4",n({},{id:"find-location"}),"Find Location"),(0,r.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL:")," Select this if the specified value has to be searched in the URL part of the HTTP Header."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP Scheme:")," Select this if the specified value has to be searched in the "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Country:")," Select if specified value has to be search as source country."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Header Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header variables."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Header Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Headers:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cookie Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cookie Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cookies:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body Argument Name:")," Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body Argument Value:")," Select this if the specified value has to be searched in the values in the Body part of the HTTP Header."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body:")," Select this if the specified value has to be searched in the Body part of the HTTP Header."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Argument Name:")," Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Argument Value:")," Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments:"),"  Select this if the specified value has to be searched in the Arguments section in the HTTP Header."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Variable:")," Users can select the specific variable that has to be find."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SRC IP:"),"  Select if specified value has to be search as source IP."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client Browser:")," Select if specified value has to be search as client browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client OS:")," Select if specified value has to be search as client OS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client Device:"),"  Select if specified value has to be search as client device."),(0,r.kt)("h4",n({},{id:"parameter-1"}),"Parameter"),(0,r.kt)("p",null,"This field specifies the name of the header/cookie/arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/argument value to satisfy the condition."),(0,r.kt)("h4",n({},{id:"match-condition"}),"Match Condition"),(0,r.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: Equals / Not Equals / Pattern Exist / Pattern Doesn't Exist / File Extension\n\nDefault: Equals   \n")),(0,r.kt)("h4",n({},{id:"match-value"}),"Match Value"),(0,r.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{}),"Accepted values: Integer / String\n\nDefault: Blank\n")))}h.isMDXComponent=!0},95785:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/header_rules-a297f220e494569f889ccd381c5ebcf4.png"},97420:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/headerrulescondition-f21c38af1f66abe1bb89e0d6a6a0d059.png"}}]);