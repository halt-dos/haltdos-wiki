/*! For license information please see 0706321e.76c7a06a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[66883],{12119:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/form_rules","title":"Form Rule","description":"Overview","source":"@site/versioned_docs/version-7.0/enterprise/waf/listener/profiles/rules/form_rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/form_rules","permalink":"/v7/enterprise/waf/listener/profiles/rules/form_rules","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"waf_sidebar","previous":{"title":"Error Rules","permalink":"/v7/enterprise/waf/listener/profiles/rules/error_rules"},"next":{"title":"Firewall Rule","permalink":"/v7/enterprise/waf/listener/profiles/rules/firewall_rules"}}');var l=i(74848),t=i(28453);const s={sidebar_position:2},o="Form Rule",d={},a=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>HTTP Method</strong>",id:"http-method",level:5},{value:"<strong>Request Validation</strong>",id:"request-validation",level:5},{value:"<strong>Field Validation</strong>",id:"field-validation",level:5},{value:"Accepted Values:",id:"accepted-values",level:5}];function c(e){const n={br:"br",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"form-rule",children:"Form Rule"})}),"\n",(0,l.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(n.p,{children:"Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Form Page Screen",src:i(83306).A+"",width:"1840",height:"817"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Form Page Screen",src:i(2713).A+"",width:"1022",height:"370"})}),"\n",(0,l.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Follow the links: ",(0,l.jsx)(n.strong,{children:"WAF"})," > ",(0,l.jsx)(n.strong,{children:"Listener"})," > ",(0,l.jsx)(n.strong,{children:"Profiles"})," > ",(0,l.jsx)(n.strong,{children:"Rules"})," > ",(0,l.jsx)(n.strong,{children:"Form Rules"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,l.jsxs)(n.li,{children:["Click on ",(0,l.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.h5,{id:"rule-name",children:(0,l.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,l.jsx)(n.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: None\n"})}),"\n",(0,l.jsx)(n.h5,{id:"rule-message",children:(0,l.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,l.jsx)(n.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: Description for the rule in String format\n\n    Default: None  \n"})}),"\n",(0,l.jsx)(n.h5,{id:"rule-priority",children:(0,l.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,l.jsx)(n.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0\n"})}),"\n",(0,l.jsx)(n.h5,{id:"uri",children:(0,l.jsx)(n.strong,{children:"URI"})}),"\n",(0,l.jsx)(n.p,{children:"Users are allowed to specify the URI of the form for which the form validation rule will be applied. The request to specified URI will only be validated.\nExample: /login"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: Regex\n\n    Default: None\n"})}),"\n",(0,l.jsx)(n.h5,{id:"http-method",children:(0,l.jsx)(n.strong,{children:"HTTP Method"})}),"\n",(0,l.jsx)(n.p,{children:"Specify the HTTP method on which the rule will be applied. All the HTTP methods are supported like GET, POST, PUT, DELETE, OPTIONS, HEAD.\nBy clicking on the Request Validation and Field Validation tab, the end-user can add the validation according to a particular set value."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\n    Default: GET\n"})}),"\n",(0,l.jsx)(n.h5,{id:"request-validation",children:(0,l.jsx)(n.strong,{children:"Request Validation"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Request Validation"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Specify the type of validation to be implemented by selecting the validation type from the drop-down list."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: MINIMUM REQUEST SIZE / MAXIMUM REQUEST SIZE / MINIMUM HEADER COUNT / MAXIMUM HEADER COUNT / MINIMUM BODY LENGTH / MAXIMUM BODY LENGTH / MINIMUM HEADER LENGTH / MAXIMUM HEADER VALUE LENGTH\n\n    Default: Blank\n"})}),"\n",(0,l.jsx)(n.p,{children:"Accepted Values:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Minimum Request Size"})," - Specify the minimum size of the request."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Maximum Request Size"})," - Specify the maximum size of the request."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Minimum Header Count"})," - Specify the minimum header count of the request."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Maximum Header Count"})," - Specify the maximum header count of the request."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Minimum Body Length"})," - Specify the minimum body length of the request."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Maximum Body length"})," - Specify the maximum body length of the request."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Maximum Header length"})," - Specify the maximum header length of the request."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Maximum Header Value length"})," - Specify the maximum header value length of the request."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Value"}),(0,l.jsx)(n.br,{}),"\n","Mention the value."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,l.jsx)(n.h5,{id:"field-validation",children:(0,l.jsx)(n.strong,{children:"Field Validation"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Field Name"})," - Specify the name of the form field which you want the form validation rule to validate."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Field Validation"})," - Select the type of the form field which you want the form validation rule to validate."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: FIELD_TYPE / MIN_VALUE / MAX_VALUE / MIN_FILE_SIZE / MAX_FILE_SIZE / FILE_EXTENSION / MIN_LENGTH / MAX_LENGTH / PATTERN_EXISTS\n\n    Default: Select\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Validation Parameter"})," - Select the value of the form field which you want the form validation rule to validate."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,l.jsx)(n.h5,{id:"accepted-values",children:"Accepted Values:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Field Type"})," - Users can specify the field type selection in the adjacent drop-down select the required field type (Integer, String, Email, etc)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Min Value"})," - Users can specify the minimum value accepted  by that field. On Selecting Field Type in the adjacent drop-down enter the minimum value of the form field."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Max Value"})," - Users can specify the maximum value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum value of the form field."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Min File Size"})," - Users can specify the minimum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum file size for the form field."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Max File Size"})," - Users can specify the maximum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum file size for the form field."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Allowed File Extension"})," - Users can specify the file extension which will be allowed with a request which could be restricted. On Selecting Field Type in the adjacent drop-down enter the file extensions allowed for the form field."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Min Length"})," - Users can specify the minimum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum length of the value of the form field."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Max Length"})," - Users can specify the maximum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum length of the value of the form field."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},21020:(e,n,i)=>{var r=i(96540),l=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var r,t={},a=null,c=null;for(r in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:l,type:e,key:a,ref:c,props:t,_owner:o.current}}n.Fragment=t,n.jsx=a,n.jsxs=a},74848:(e,n,i)=>{e.exports=i(21020)},83306:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/formrule-0c2214af4fe1bfbe627b39226fd533ce.png"},2713:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/formrule1-86e7148d4322bd8ad97e9357aa74b5a6.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(96540);const l={},t=r.createContext(l);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);