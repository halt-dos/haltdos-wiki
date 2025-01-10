/*! For license information please see c83f8191.91270ef1.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[78522],{46587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/correlation_rules","title":"Correlation Rules","description":"Overview","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/rules/correlation_rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/correlation_rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/correlation_rules","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"waf_sidebar","previous":{"title":"Tamper Rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/tamper_rules"},"next":{"title":"Deception Rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/deception_rules"}}');var s=r(74848),n=r(28453);const l={sidebar_position:9},d="Correlation Rules",o={},h=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Add Rule Condition",id:"add-rule-condition",level:4},{value:"Rule ID",id:"rule-id",level:4},{value:"Match",id:"match",level:4}];function a(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"correlation-rules",children:"Correlation Rules"})}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Correlation rules support using compounding logic to make more advanced rules that address your security needs. For example, \"(Condition 1 and Condition 2)\" means that if Condition 1 and Condition 2 are met, WAF should take the action that's specified in the correlation rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses and might specify to block traffic from a certain IP address, and only if a certain browser is being used."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Correlation Rule",src:r(81210).A+"",width:"1121",height:"558"})}),"\n",(0,s.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Follow the links: ",(0,s.jsx)(t.strong,{children:"WAF"})," > ",(0,s.jsx)(t.strong,{children:"Listener"})," > ** Profiles** > ",(0,s.jsx)(t.strong,{children:"Rules"})," > ",(0,s.jsx)(t.strong,{children:"Correlation Rules"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Click on Add Rule and set relevant parameters described in the table below."}),"\n",(0,s.jsx)(t.li,{children:"Click on save changes."}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameters"}),(0,s.jsx)(t.th,{children:"Accepted value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rule Name"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Blank"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rule Message"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Blank"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rule Priority"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"URI"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Blank"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Method"}),(0,s.jsx)(t.td,{children:"Drop-down"}),(0,s.jsx)(t.td,{children:"ALL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Action"}),(0,s.jsx)(t.td,{children:"Drop-down"}),(0,s.jsx)(t.td,{children:"Record Request"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Rule ID"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Blank"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Match"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Correlation Rule",src:r(12146).A+"",width:"1115",height:"462"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.h4,{id:"rule-name",children:"Rule Name"}),"\n",(0,s.jsx)(t.p,{children:"Users are allowe to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,s.jsx)(t.h4,{id:"rule-message",children:"Rule Message"}),"\n",(0,s.jsx)(t.p,{children:"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,s.jsx)(t.h4,{id:"rule-priority",children:"Rule Priority"}),"\n",(0,s.jsx)(t.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,s.jsx)(t.h4,{id:"uri",children:"URI"}),"\n",(0,s.jsx)(t.p,{children:"Users are allowed to specify the URI on which the tamper rule will be applied."}),"\n",(0,s.jsx)(t.h4,{id:"method",children:"Method"}),"\n",(0,s.jsx)(t.p,{children:"Users are allowed to select the HTTP method for the rule to extract when matched with the request."}),"\n",(0,s.jsx)(t.h4,{id:"rule-action",children:"Rule Action"}),"\n",(0,s.jsx)(t.p,{children:"The following actions are available to the User-"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"DROP  & RECORD REQUEST - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."}),"\n",(0,s.jsx)(t.li,{children:"RECORD REQUEST - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."}),"\n",(0,s.jsx)(t.li,{children:"BYPASS REQUEST - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."}),"\n",(0,s.jsx)(t.li,{children:"TEMPORARY BLACKLIST SOURCE IP - If the request satisfies the rule, then the user is temporarily blacklisted."}),"\n",(0,s.jsx)(t.li,{children:"REDIRECT - If the request satisfies the rule, then the user is redirected to another page."}),"\n",(0,s.jsx)(t.li,{children:"SEND CAPTCHA CHALLENGE - If the request satisfies the rule, then the user receives a challenge like a captcha."}),"\n",(0,s.jsx)(t.li,{children:"SEND RESPONSE WITH STATUS CODE - If the request satisfies the rule, a custom HTML response will be returned with a status code."}),"\n",(0,s.jsx)(t.li,{children:"SEND CUSTOM RESPONSE - If the request satisfies the rule, a custom HTML response will be returned."}),"\n",(0,s.jsx)(t.li,{children:"CHANGE RESPONSE CODE - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."}),"\n",(0,s.jsx)(t.li,{children:"TARPIT SRC. IP - If the request satisfies the rule, the end-user IP will be tarpit."}),"\n",(0,s.jsx)(t.li,{children:"NO ACTION - If the request satisfies the rule, then no action will be performed on the current request."}),"\n",(0,s.jsx)(t.li,{children:"SKIP LEARNING -If the request satisfies the rule, then no learning will be performed on the current request."}),"\n",(0,s.jsx)(t.li,{children:"SEND EMPTY RESPONSE - If the request satisfies the rule, the end-user will get empty response / blank page in return."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"add-rule-condition",children:"Add Rule Condition"}),"\n",(0,s.jsx)(t.p,{children:"By clicking on Add Rule Condition button, the end-user can add specify the location to be whitelisted. At least, one location is mandatory for this rule."}),"\n",(0,s.jsx)(t.h4,{id:"rule-id",children:"Rule ID"}),"\n",(0,s.jsx)(t.p,{children:"Users can specify the rule Id for which condition should be created."}),"\n",(0,s.jsx)(t.h4,{id:"match",children:"Match"}),"\n",(0,s.jsx)(t.p,{children:"Users can specify whether the rule should be matched or not matched."})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,t,r)=>{var i=r(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var i,n={},h=null,a=null;for(i in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,i)&&!o.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:s,type:e,key:h,ref:a,props:n,_owner:d.current}}t.Fragment=n,t.jsx=h,t.jsxs=h},74848:(e,t,r)=>{e.exports=r(21020)},81210:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/correlation_rule-1c48f90ce04255474bfc95bd4a923797.png"},12146:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/correlation_rule2-097b85adb154539551e3c45190a83d8b.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>d});var i=r(96540);const s={},n=i.createContext(s);function l(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);