/*! For license information please see 11d95ccf.36656186.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2203],{827:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"enterprise/waf/listener/rules/errorrules","title":"Error Rules","description":"These rules mask application exceptions and errors with custom pages.","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/rules/errorrules.md","sourceDirName":"enterprise/waf/listener/rules","slug":"/enterprise/waf/listener/rules/errorrules","permalink":"/v6/enterprise/waf/listener/rules/errorrules","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Rules","permalink":"/v6/enterprise/waf/listener/rules/"},"next":{"title":"Header Rules","permalink":"/v6/enterprise/waf/listener/rules/headerrules"}}');var n=s(74848),i=s(28453);const l={},d="Error Rules",o={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:2}];function a(e){const r={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"error-rules",children:"Error Rules"})}),"\n",(0,n.jsx)(r.p,{children:"These rules mask application exceptions and errors with custom pages."}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"error rules",src:s(29801).A+"",width:"1500",height:"409"})}),"\n",(0,n.jsx)(r.h2,{id:"how-to-use-",children:"How to Use :"}),"\n",(0,n.jsxs)(r.p,{children:["1.Go to ",(0,n.jsx)(r.strong,{children:"WAF"})," > ",(0,n.jsx)(r.strong,{children:"Listeners"})," > ",(0,n.jsx)(r.strong,{children:"Rules"})," > ",(0,n.jsx)(r.strong,{children:"Error Rules"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["2.Click on ",(0,n.jsx)(r.strong,{children:"Add Rule"})," and set relevant parameters described in the table below."]}),"\n",(0,n.jsxs)(r.p,{children:["3.Click on ",(0,n.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Accepted Values"}),(0,n.jsx)(r.th,{children:"Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Rule Name"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"Empty"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Rule Message"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"Empty"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Rule Priority"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"URI"}),(0,n.jsx)(r.td,{children:"URI Regex"}),(0,n.jsx)(r.td,{children:"Empty"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Method"}),(0,n.jsx)(r.td,{children:"URL / Headers / Header Name / Header Value / Specific Header Value Data / Cookies / Cookie Name /  Cookie Value / Specific Cookie Value Data / Body / Body Argument Name / Body Argument Value / Specific Body Value Data / Arguments / Argument Name / Argument Value / Specific Argument Value Data / Variable"}),(0,n.jsx)(r.td,{children:"ALL"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"HTTP Response Code"}),(0,n.jsx)(r.td,{children:"400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Rule Action"}),(0,n.jsx)(r.td,{children:"No Action / Send Response"}),(0,n.jsx)(r.td,{children:"No Action"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"error rules",src:s(49020).A+"",width:"1127",height:"363"})}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["1",(0,n.jsx)(r.strong,{children:"HTTP Response Codes:"})]}),"\n",(0,n.jsxs)(r.p,{children:["HTTP error codes for which the custom error page needs to be shown. These are the response codes that the back-end sends in returns.\r\n2",(0,n.jsx)(r.strong,{children:"Error Handling:"})]}),"\n",(0,n.jsx)(r.p,{children:"If this field is enabled, then the custom error page will be displayed. If it is disabled, then the default server error page will be displayed."}),"\n",(0,n.jsxs)(r.p,{children:["3",(0,n.jsx)(r.strong,{children:"Custom Error Page:"})]}),"\n",(0,n.jsxs)(r.p,{children:["Select the desired custom error page which will be displayed when the specified error occurs. Or click the ",(0,n.jsx)(r.strong,{children:"Add"})," button which redirects to the custom pages screen to create a custom page and add HTML content and then select it from the drop-down list."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note:"})," We can globally disable error handling from WAF in the operational settings under advanced settings that we will learn later in Operational Settings."]}),"\n",(0,n.jsxs)(r.p,{children:["4.",(0,n.jsx)(r.strong,{children:"Rule Name:"})]}),"\n",(0,n.jsx)(r.p,{children:"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,n.jsxs)(r.p,{children:["5.",(0,n.jsx)(r.strong,{children:"Rule Message:"})]}),"\n",(0,n.jsx)(r.p,{children:"Specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,n.jsxs)(r.p,{children:["6.",(0,n.jsx)(r.strong,{children:"Rule Priority:"})]}),"\n",(0,n.jsx)(r.p,{children:"Specify the priority for the rule for execution when matched with the request."}),"\n",(0,n.jsxs)(r.p,{children:["7.",(0,n.jsx)(r.strong,{children:"URI:"})]}),"\n",(0,n.jsx)(r.p,{children:"Specify the URI on which the tamper rule will be applied."}),"\n",(0,n.jsx)(r.p,{children:"Example /login"}),"\n",(0,n.jsxs)(r.p,{children:["8.",(0,n.jsx)(r.strong,{children:"Method:"})]}),"\n",(0,n.jsx)(r.p,{children:"Select the HTTP method for the rule to extract when matched with the request."}),"\n",(0,n.jsxs)(r.p,{children:["9.",(0,n.jsx)(r.strong,{children:"HTTP Response Codes:"})]}),"\n",(0,n.jsx)(r.p,{children:"User can mention the HTTP response code based on the custom error rule name."}),"\n",(0,n.jsxs)(r.p,{children:["10.",(0,n.jsx)(r.strong,{children:"Rule Action:"})]}),"\n",(0,n.jsx)(r.p,{children:"Specifies the action to be executed when this is gets triggered"}),"\n",(0,n.jsxs)(r.p,{children:["11.",(0,n.jsx)(r.strong,{children:"Custom Error Page"})]}),"\n",(0,n.jsx)(r.p,{children:"User can add custom error page that will be visible to end-users."})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,r,s)=>{var t=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var t,i={},c=null,a=null;for(t in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:c,ref:a,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,s)=>{e.exports=s(21020)},29801:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/error_Rules-26d248d0e92faa0c27a2f4753ca159a7.png"},49020:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/errorrulesdetails-6f4ba2ecb76feea6c7a19147bcad55d7.png"},28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>d});var t=s(96540);const n={},i=t.createContext(n);function l(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);