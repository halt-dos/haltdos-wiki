/*! For license information please see 599fa316.62bc7e40.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50909],{82778:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"docs/waf/rules/behavior_rules","title":"Behavior Rules","description":"Overview","source":"@site/community/docs/waf/rules/behavior_rules.md","sourceDirName":"docs/waf/rules","slug":"/docs/waf/rules/behavior_rules","permalink":"/community/docs/waf/rules/behavior_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"community_sidebar","previous":{"title":"Whitelist Rules","permalink":"/community/docs/waf/rules/whitelist_rules"},"next":{"title":"Variable Rules","permalink":"/community/docs/waf/rules/variable_rules"}}');var l=t(74848),r=t(28453);const s={sidebar_position:6},a="Behavior Rules",d={},o=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Variable Name",id:"variable-name",level:4},{value:"Condition",id:"condition",level:4},{value:"Pattern Exists",id:"pattern-exists",level:5},{value:"Pattern Not Exists",id:"pattern-not-exists",level:5},{value:"Min Value",id:"min-value",level:5},{value:"Max Value",id:"max-value",level:5},{value:"Min Length",id:"min-length",level:5},{value:"Max Length",id:"max-length",level:5},{value:"Equals",id:"equals",level:5},{value:"Not Equals",id:"not-equals",level:5},{value:"Less Than",id:"less-than",level:5},{value:"Greater Than",id:"greater-than",level:5},{value:"Condition Value",id:"condition-value",level:4}];function c(e){const i={h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"behavior-rules",children:"Behavior Rules"})}),"\n",(0,l.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(i.p,{children:"The Behavior rule is a feature of Haltdos WAF that that allows application owners to identify the malicious user intent with the help of the behavioral engine."}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"behaviour Rule",src:t(31631).A+"",width:"1642",height:"982"})}),"\n",(0,l.jsx)(i.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:"Log onto the Haltdos Community WAF portal."}),"\n",(0,l.jsxs)(i.li,{children:["Go to ",(0,l.jsx)(i.strong,{children:"WAF"})," > ",(0,l.jsx)(i.strong,{children:"Rules"})," > ",(0,l.jsx)(i.strong,{children:"Behavior Rules"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:["Click on the ",(0,l.jsx)(i.strong,{children:"Add Rule"})]}),"\n",(0,l.jsx)(i.li,{children:"Configure the fields that are present."}),"\n",(0,l.jsxs)(i.li,{children:["Click on ",(0,l.jsx)(i.strong,{children:"Save Changes"})," and the rule will be reflected."]}),"\n"]}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Parameters"}),(0,l.jsx)(i.th,{children:"Accepted value"}),(0,l.jsx)(i.th,{children:"Default"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Rule Name"}),(0,l.jsx)(i.td,{children:"String"}),(0,l.jsx)(i.td,{children:"Blank"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Rule Message"}),(0,l.jsx)(i.td,{children:"String"}),(0,l.jsx)(i.td,{children:"Blank"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Rule Priority"}),(0,l.jsx)(i.td,{children:"Integer"}),(0,l.jsx)(i.td,{children:"0"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Rule Action"}),(0,l.jsx)(i.td,{children:"Drop-down"}),(0,l.jsx)(i.td,{children:"Record-request"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Redirection URL"}),(0,l.jsx)(i.td,{children:"String"}),(0,l.jsx)(i.td,{children:"/"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Variable Name"}),(0,l.jsx)(i.td,{children:"Drop-down"}),(0,l.jsx)(i.td,{children:"Blank"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Condition"}),(0,l.jsx)(i.td,{children:"Drop-down"}),(0,l.jsx)(i.td,{children:"Pattern exist"})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"Condition Value"}),(0,l.jsx)(i.td,{children:"String"}),(0,l.jsx)(i.td,{children:"Blank"})]})]})]}),"\n",(0,l.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.h4,{id:"rule-name",children:"Rule Name"}),"\n",(0,l.jsx)(i.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,l.jsx)(i.h4,{id:"rule-message",children:"Rule Message"}),"\n",(0,l.jsx)(i.p,{children:"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,l.jsx)(i.h4,{id:"rule-priority",children:"Rule Priority"}),"\n",(0,l.jsx)(i.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,l.jsx)(i.h4,{id:"rule-action",children:"Rule Action"}),"\n",(0,l.jsx)(i.p,{children:"Users are allowed to specify the action to be taken for the request matched i.e. no action, drop & record request, record request, bypass request, redirect."}),"\n",(0,l.jsx)(i.h4,{id:"variable-name",children:"Variable Name"}),"\n",(0,l.jsx)(i.p,{children:"Users are allowed to select specify the variable from the drop down."}),"\n",(0,l.jsx)(i.h4,{id:"condition",children:"Condition"}),"\n",(0,l.jsx)(i.p,{children:"Users are allowed to specify the condition from the drop-down menu."}),"\n",(0,l.jsx)(i.h5,{id:"pattern-exists",children:"Pattern Exists"}),"\n",(0,l.jsx)(i.p,{children:"This is selected if condition value pattern exist."}),"\n",(0,l.jsx)(i.h5,{id:"pattern-not-exists",children:"Pattern Not Exists"}),"\n",(0,l.jsx)(i.p,{children:"This is selected if condition value pattern doesn't exist."}),"\n",(0,l.jsx)(i.h5,{id:"min-value",children:"Min Value"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition minimum value matches for selected variable."}),"\n",(0,l.jsx)(i.h5,{id:"max-value",children:"Max Value"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition maximum value matches for selected variable."}),"\n",(0,l.jsx)(i.h5,{id:"min-length",children:"Min Length"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition minimum length matches for selected variable."}),"\n",(0,l.jsx)(i.h5,{id:"max-length",children:"Max Length"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition maximum length matches for selected variable."}),"\n",(0,l.jsx)(i.h5,{id:"equals",children:"Equals"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition value equal value matches for selected variable."}),"\n",(0,l.jsx)(i.h5,{id:"not-equals",children:"Not Equals"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition value is not equal for selected variable."}),"\n",(0,l.jsx)(i.h5,{id:"less-than",children:"Less Than"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition value is less than for selected variable."}),"\n",(0,l.jsx)(i.h5,{id:"greater-than",children:"Greater Than"}),"\n",(0,l.jsx)(i.p,{children:"Select if condition value is greater than for selected variable."}),"\n",(0,l.jsx)(i.h4,{id:"condition-value",children:"Condition Value"}),"\n",(0,l.jsx)(i.p,{children:"Users are allowed to specify the condition value for the rule."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},21020:(e,i,t)=>{var n=t(96540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,i,t){var n,r={},o=null,c=null;for(n in void 0!==t&&(o=""+t),void 0!==i.key&&(o=""+i.key),void 0!==i.ref&&(c=i.ref),i)s.call(i,n)&&!d.hasOwnProperty(n)&&(r[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===r[n]&&(r[n]=i[n]);return{$$typeof:l,type:e,key:o,ref:c,props:r,_owner:a.current}}i.Fragment=r,i.jsx=o,i.jsxs=o},74848:(e,i,t)=>{e.exports=t(21020)},31631:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/behavior_rule_2-c014bde21e6072ac18fdca810ff6d536.png"},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(96540);const l={},r=n.createContext(l);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);