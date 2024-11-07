/*! For license information please see 17877f55.37f13753.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[6325],{82170:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"cloud/waf/listener/rules/error_rules","title":"Error Rules","description":"These rules mask application exceptions and errors with custom pages","source":"@site/versioned_docs/version-6.0/cloud/waf/listener/rules/error_rules.md","sourceDirName":"cloud/waf/listener/rules","slug":"/cloud/waf/listener/rules/error_rules","permalink":"/v6/cloud/waf/listener/rules/error_rules","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"cloud_sidebar","previous":{"title":"Rules","permalink":"/v6/cloud/waf/listener/rules/"},"next":{"title":"Header Rules","permalink":"/v6/cloud/waf/listener/rules/header_rules"}}');var t=s(74848),o=s(28453);const i={sidebar_position:2},l="Error Rules",d={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function a(e){const r={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"error-rules",children:"Error Rules"})}),"\n",(0,t.jsx)(r.p,{children:"These rules mask application exceptions and errors with custom pages"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Follow the links: ",(0,t.jsx)(r.strong,{children:"WAF > Zones > Listeners > Rules > Error Rules"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Click on Save Changes."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"PARAMETERS"}),(0,t.jsx)(r.th,{children:"ACCEPTED VALUES"}),(0,t.jsx)(r.th,{children:"DEFAULT"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"HTTP Response Code"}),(0,t.jsx)(r.td,{children:"400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Error Handling"}),(0,t.jsx)(r.td,{children:"ENABLED/DISABLED"}),(0,t.jsx)(r.td,{children:"ENABLED"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Custom Error Page"}),(0,t.jsx)(r.td,{children:"Select from Custom Pages added"}),(0,t.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"HTTP Response Codes"})}),"\n",(0,t.jsx)(r.p,{children:"HTTP error codes for which the custom error page needs to be shown. These are the response codes that the backend sends in returns."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Error Handling"})}),"\n",(0,t.jsx)(r.p,{children:"If this field is enabled, then the custom error page will be displayed. If it is disabled, then the default server error page will be displayed."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Custom Error Page"})}),"\n",(0,t.jsxs)(r.p,{children:["Select the desired custom error page which will be displayed when the specified error occurs. Or click the ",(0,t.jsx)(r.strong,{children:"Add"})," button which redirects to the custom pages screen to create a custom page and add HTML content and then select it from the dropdown list."]}),"\n",(0,t.jsxs)(r.p,{children:["Note: We can globally disable error handling from WAF in the operational settings under advanced settings that we will learn later in ",(0,t.jsx)(r.strong,{children:"Operational Settings"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,r,s)=>{var n=s(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var n,o={},c=null,a=null;for(n in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:t,type:e,key:c,ref:a,props:o,_owner:l.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var n=s(96540);const t={},o=n.createContext(t);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);