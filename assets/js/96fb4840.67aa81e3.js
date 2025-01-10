/*! For license information please see 96fb4840.67aa81e3.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11338],{33814:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/waf/listener/rules/variable","title":"Variable Rules","description":"Variables are dynamic values that can affect the behaviour of current request of the application.","source":"@site/docs/enterprise/waf/listener/rules/variable.md","sourceDirName":"enterprise/waf/listener/rules","slug":"/enterprise/waf/listener/rules/variable","permalink":"/enterprise/waf/listener/rules/variable","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"waf_sidebar","previous":{"title":"Redirectional Rules","permalink":"/enterprise/waf/listener/rules/redirectionalrules"},"next":{"title":"Transform Rules","permalink":"/enterprise/waf/listener/rules/transformrule"}}');var i=n(74848),t=n(28453);const a={sidebar_position:5},l="Variable Rules",o={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Variable Scope</strong>",id:"variable-scope",level:5},{value:"<strong>Variable Name</strong>",id:"variable-name",level:5},{value:"<strong>Variable Type</strong>",id:"variable-type",level:5},{value:"<strong>Default Value</strong>",id:"default-value",level:5}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"variable-rules",children:"Variable Rules"})}),"\n",(0,i.jsx)(r.p,{children:"Variables are dynamic values that can affect the behaviour of current request of the application."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Listener Operational Settings",src:n(77193).A+"",width:"1910",height:"900"})}),"\n",(0,i.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Go to ",(0,i.jsx)(r.strong,{children:"WAF"})," > ",(0,i.jsx)(r.strong,{children:"Listener"})," > ",(0,i.jsx)(r.strong,{children:"Settings"})," > ",(0,i.jsx)(r.strong,{children:"Variables"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Configure the settings."}),"\n",(0,i.jsx)(r.li,{children:"Click on Save changes."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.h5,{id:"variable-scope",children:(0,i.jsx)(r.strong,{children:"Variable Scope"})}),"\n",(0,i.jsx)(r.p,{children:"Users can specify the scope of the variable. Users can select any of the following: GLOBAL, TRANSACTION, SESSION, CUSTOM."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: GLOBAL / TRANSACTION / SESSION / CUSTOM\n\n    Default: GLOBAL\n"})}),"\n",(0,i.jsx)(r.h5,{id:"variable-name",children:(0,i.jsx)(r.strong,{children:"Variable Name"})}),"\n",(0,i.jsx)(r.p,{children:"Users can specify the user-friendly variable name."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(r.h5,{id:"variable-type",children:(0,i.jsx)(r.strong,{children:"Variable Type"})}),"\n",(0,i.jsx)(r.p,{children:"Users can specify the variable type either it is string or Integer."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String / Integer\n\n    Default: String \n"})}),"\n",(0,i.jsx)(r.h5,{id:"default-value",children:(0,i.jsx)(r.strong,{children:"Default Value"})}),"\n",(0,i.jsx)(r.p,{children:"Users can specify the default value for the variable."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,r,n)=>{var s=n(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,t={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,s)&&!o.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:i,type:e,key:c,ref:d,props:t,_owner:l.current}}r.Fragment=t,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},77193:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/variable-c4a406f551d82983f839c955117a8ee4.png"},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var s=n(96540);const i={},t=s.createContext(i);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);