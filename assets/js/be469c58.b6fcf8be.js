/*! For license information please see be469c58.b6fcf8be.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[32117],{88653:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"enterprise/waf/listener/rules/headerrules","title":"Header Rules","description":"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.","source":"@site/versioned_docs/version-7.0/enterprise/waf/listener/rules/headerrules.md","sourceDirName":"enterprise/waf/listener/rules","slug":"/enterprise/waf/listener/rules/headerrules","permalink":"/v7/enterprise/waf/listener/rules/headerrules","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Error Rules","permalink":"/v7/enterprise/waf/listener/rules/errorrules"},"next":{"title":"Redirectional Rules","permalink":"/v7/enterprise/waf/listener/rules/redirectionalrules"}}');var s=r(74848),i=r(28453);const l={},o="Header Rules",d={},a=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Message</strong>",id:"message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Attribute Name</strong>",id:"attribute-name",level:5},{value:"<strong>Attribute Value</strong>",id:"attribute-value",level:5},{value:"<strong>Add Condition</strong>",id:"add-condition",level:5}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"header-rules",children:"Header Rules"})}),"\n",(0,s.jsx)(n.p,{children:"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"header rules",src:r(83092).A+"",width:"1827",height:"877"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"WAF"})," > ",(0,s.jsx)(n.strong,{children:"Listeners"})," > ",(0,s.jsx)(n.strong,{children:"Rules"})," > ",(0,s.jsx)(n.strong,{children:"Header Rules"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Add Rule"})," and set relevant parameters described below."]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h5,{id:"rule-name",children:(0,s.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(n.p,{children:"Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"message",children:(0,s.jsx)(n.strong,{children:"Message"})}),"\n",(0,s.jsx)(n.p,{children:"Specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-priority",children:(0,s.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(n.p,{children:"User can define the rule's priority among various other custom error rules."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,s.jsx)(n.h5,{id:"uri",children:(0,s.jsx)(n.strong,{children:"URI"})}),"\n",(0,s.jsx)(n.p,{children:"Specify the URI or regex for which rule will be applied."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Regex\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"method",children:(0,s.jsx)(n.strong,{children:"Method"})}),"\n",(0,s.jsx)(n.p,{children:"Select the HTTP method for the rule to validate when matched with the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: ALL \n"})}),"\n",(0,s.jsx)(n.h5,{id:"evaluation-phase",children:(0,s.jsx)(n.strong,{children:"Evaluation Phase"})}),"\n",(0,s.jsx)(n.p,{children:"Select the evaluation phase for the rule i.e. Request or Response."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Request Phase / Response Phase\n\n    Default: Request Phase  \n"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-action",children:(0,s.jsx)(n.strong,{children:"Rule Action"})}),"\n",(0,s.jsx)(n.p,{children:"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: ADD HEADER / ADD COOKIE / OVERWRITE HEADER / OVERWRITE COOKIE / REMOVE HEADER / REMOVE COOKIE\n\n    Default: REMOVE COOKIE \n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ADD:"})," This condition will allow adding a value at the specified location."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"REMOVE:"})," This condition will allow removing a value at the specified location."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OVERWRITE:"})," This condition will allow overwriting a value at the specified location."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If the action is ",(0,s.jsx)(n.strong,{children:"ADD"})," then another field is required I.e., ",(0,s.jsx)(n.strong,{children:"Value"})," that will be added for the specified ",(0,s.jsx)(n.strong,{children:"Parameter"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the action is ",(0,s.jsx)(n.strong,{children:"REMOVE"}),", then the specified parameter is removed."]}),"\n",(0,s.jsxs)(n.p,{children:["If the action is ",(0,s.jsx)(n.strong,{children:"OVERWRITE"}),", then two other fields are required first is ",(0,s.jsx)(n.strong,{children:"Search Pattern"})," (string/regex that should match the existing value) and ",(0,s.jsx)(n.strong,{children:"Replace"})," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsx)(n.p,{children:"In order to escape the dollar($) character in the replace, add the dollar symbol twice."})}),"\n",(0,s.jsx)(n.h5,{id:"attribute-name",children:(0,s.jsx)(n.strong,{children:"Attribute Name"})}),"\n",(0,s.jsx)(n.p,{children:"Specify the attribute name which need to add/delete/overwrite with rule."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank   \n"})}),"\n",(0,s.jsx)(n.h5,{id:"attribute-value",children:(0,s.jsx)(n.strong,{children:"Attribute Value"})}),"\n",(0,s.jsx)(n.p,{children:"Specify the attribute value which will be mentioned in the attribute."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"add-condition",children:(0,s.jsx)(n.strong,{children:"Add Condition"})}),"\n",(0,s.jsx)(n.p,{children:"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."}),"\n",(0,s.jsxs)(n.p,{children:["To configure the parameter of the conditions please refer to the following link: ",(0,s.jsx)(n.a,{href:"/v7/enterprise/waf/listener/profiles/rules/conditions",children:(0,s.jsx)(n.strong,{children:"Conditions"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,i={},a=null,c=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,t)&&!d.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},74848:(e,n,r)=>{e.exports=r(21020)},83092:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/header_rule-d76db24240d65dd4028e9941a12c0e15.png"},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);