/*! For license information please see a560b746.f8efdb6b.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[60896],{41983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>h,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/script_rules","title":"Script Rule","description":"Overview","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/rules/script_rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/script_rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/script_rules","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"waf_sidebar","previous":{"title":"Deception Rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/deception_rules"},"next":{"title":"Log Rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/log_rules"}}');var i=r(74848),n=r(28453);const l={sidebar_position:11},h="Script Rule",o={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Evaluation Phase",id:"evaluation-phase",level:4},{value:"Rule Action",id:"rule-action",level:4}];function d(e){const t={br:"br",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"script-rule",children:"Script Rule"})}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Developer Script strategies will be implemented as a developer script rule. This rule is capable of customizing a script to interpret or managing specific requests. The goal of the developer script is to deceive and manipulate the request on the basis of certain parameters inducing them to take actions that result in blocking the requests coming from them."}),"\n",(0,i.jsx)(t.p,{children:"For the given URI, the developer script will be executed and if the condition matches the rule the appropriate action will be taken as per the rule. User can define their own logic which may not be present in the WAF rules and thus could mitigate the specific attack."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Script Rule",src:r(73153).A+"",width:"1594",height:"823"})}),"\n",(0,i.jsx)(t.p,{children:"The developer script defines two phases:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Request Phase"}),": This developer script is executed before sending the request to web-servers."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Response Phase"}),": This developer script is executed after getting the response from the webservers and before reaching the web client."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Script Rule",src:r(31687).A+"",width:"1115",height:"387"}),"\r\nThe script for this rule is written in Lua scripting language. In this, we define the Lua script which will be executed for the required phase. In order to perform the action, the script must return 1 (Numeric) as a value. We also provide some utility methods such as MD5, Base64 encoding, and much more. We can access the Nginx variable too."]}),"\n",(0,i.jsxs)(t.p,{children:["If somehow the script faces a compilation error, the script will fail to perform an action and the request will be processed.",(0,i.jsx)(t.br,{}),"\n","The behavior of the script may vary for the following configurations:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"If the Temporary Blacklist value is set to 0, then the script will be ignored."}),"\n",(0,i.jsx)(t.li,{children:"If the action is set to No Action, then the script will be ignored."}),"\n",(0,i.jsx)(t.li,{children:"If multiple scripts are matched for the request URI, then the first matched script will be executed and other scripts will be ignored."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.strong,{children:"WAF"})," > ",(0,i.jsx)(t.strong,{children:"Listeners"})," >  ",(0,i.jsx)(t.strong,{children:"Profiles"})," > ",(0,i.jsx)(t.strong,{children:"Rules"})," > ",(0,i.jsx)(t.strong,{children:"Developer Script Rules"})]}),"\n",(0,i.jsx)(t.li,{children:"Click on Add Rule and set relevant parameters."}),"\n",(0,i.jsx)(t.li,{children:"Click on Save Changes."}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameters"}),(0,i.jsx)(t.th,{children:"Accepted value"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rule Name"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Blank"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rule Message"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Blank"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rule Priority"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"URI"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Blank"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Method"}),(0,i.jsx)(t.td,{children:"Drop-down"}),(0,i.jsx)(t.td,{children:"ALL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Evaluation Phase"}),(0,i.jsx)(t.td,{children:"Drop-down"}),(0,i.jsx)(t.td,{children:"Request Phase"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rule Action"}),(0,i.jsx)(t.td,{children:"Drop-down"}),(0,i.jsx)(t.td,{children:"Record"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Script"}),(0,i.jsx)(t.td,{children:"Lua Language"}),(0,i.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.h4,{id:"rule-name",children:"Rule Name"}),"\n",(0,i.jsx)(t.p,{children:"Users are allowe to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,i.jsx)(t.h4,{id:"rule-message",children:"Rule Message"}),"\n",(0,i.jsx)(t.p,{children:"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."}),"\n",(0,i.jsx)(t.h4,{id:"rule-priority",children:"Rule Priority"}),"\n",(0,i.jsx)(t.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,i.jsx)(t.h4,{id:"uri",children:"URI"}),"\n",(0,i.jsx)(t.p,{children:"Users are allowed to specify the URI on which the tamper rule will be applied."}),"\n",(0,i.jsx)(t.h4,{id:"method",children:"Method"}),"\n",(0,i.jsx)(t.p,{children:"Users are allowed to select the HTTP method for the rule to extract when matched with the request."}),"\n",(0,i.jsx)(t.h4,{id:"evaluation-phase",children:"Evaluation Phase"}),"\n",(0,i.jsx)(t.p,{children:"Users are allowed to select the evaluation phase for the rule i.e. Request or Response."}),"\n",(0,i.jsx)(t.h4,{id:"rule-action",children:"Rule Action"}),"\n",(0,i.jsx)(t.p,{children:"The following actions are available to the User:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"NO ACTION"})," - If the request satisfies the rule, then no action will be performed on the current request."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DROP  & RECORD REQUEST"})," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"RECORD REQUEST"})," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"BYPASS REQUEST"})," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"REDIRECT"})," - If the request satisfies the rule, then the user is redirected to another page."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"SEND RESPONSE WITH STATUS CODE"})," - If the request satisfies the rule, a custom HTML response will be returned with a status code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"SEND CUSTOM RESPONSE"})," - If the request satisfies the rule, a custom HTML response will be returned."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"CHANGE RESPONSE CODE"})," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"SEND CAPTCHA CHALLENGE"})," - If the request satisfies the rule, then the user receives a challenge like a captcha."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TARPIT SRC. IP"})," - If the request satisfies the rule, the end-user IP will be tarpit."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TEMPORARY BLACKLIST SRC IP"}),": If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"SKIP LEARNING"})," -If the request satisfies the rule, then no learning will be performed on the current request."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,t,r)=>{var s=r(96540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var s,n={},c=null,d=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,s)&&!o.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:d,props:n,_owner:h.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},73153:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/Script_rule-94976d909df7a9c2b8fe802290c32369.png"},31687:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/script_rule2-f333c4989fd995920ace82066965ce96.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>h});var s=r(96540);const i={},n=s.createContext(i);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);