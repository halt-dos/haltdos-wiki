/*! For license information please see 4f20d96e.7444a1c6.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[181],{76895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"enterprise/waf/listener/profiles/rules/firewall_rules","title":"Firewall Rule","description":"Overview","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/rules/firewall_rules.md","sourceDirName":"enterprise/waf/listener/profiles/rules","slug":"/enterprise/waf/listener/profiles/rules/firewall_rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/firewall_rules","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"waf_sidebar","previous":{"title":"Form Rule","permalink":"/v6/enterprise/waf/listener/profiles/rules/form_rules"},"next":{"title":"Rate Limit Rules","permalink":"/v6/enterprise/waf/listener/profiles/rules/ratelimit_rules"}}');var n=r(74848),s=r(28453);const l={sidebar_position:3},d="Firewall Rule",h={},a=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Pattern",id:"match-pattern",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Variable",id:"variable",level:4},{value:"Match Condition",id:"match-condition-1",level:4},{value:"Match Value",id:"match-value",level:4}];function o(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"firewall-rule",children:"Firewall Rule"})}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User.\r\n",(0,n.jsx)(t.img,{alt:"Firewall Rule",src:r(75351).A+"",width:"1254",height:"667"})]}),"\n",(0,n.jsx)(t.p,{children:"The following actions are available to the User :"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"DROP  & RECORD REQUEST"})," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"RECORD REQUEST"})," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"BYPASS REQUEST"})," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"TEMPORARY BLACKLIST SOURCE IP"})," - If the request satisfies the rule, then the user is temporarily blacklisted."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"REDIRECT"})," - If the request satisfies the rule, then the user is redirected to another page."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SEND CAPTCHA CHALLENGE"})," - If the request satisfies the rule, then the user receives a challenge like a captcha."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SEND RESPONSE WITH STATUS CODE"})," - If the request satisfies the rule, a custom HTML response will be returned with a status code."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SEND CUSTOM RESPONSE"})," - If the request satisfies the rule, a custom HTML response will be returned."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"CHANGE RESPONSE CODE"})," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"TARPIT SRC. IP"})," -  If the request satisfies the rule, the end-user IP will be tarpit."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"NO ACTION"})," - If the request satisfies the rule, then no action will be performed on the current request."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SKIP LEARNING"})," - If the request satisfies the rule, then no learning will be performed on the current request."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SEND EMPTY RESPONSE"})," - If the request satisfies the rule, the end-user will get empty response / blank page in return."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Firewall Condition",src:r(12325).A+"",width:"1101",height:"814"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.strong,{children:"WAF"})," > ",(0,n.jsx)(t.strong,{children:"Listener"})," >  ",(0,n.jsx)(t.strong,{children:"Profiles"})," > ",(0,n.jsx)(t.strong,{children:"Rules"})," > ",(0,n.jsx)(t.strong,{children:"Firewall Rules"})]}),"\n",(0,n.jsx)(t.li,{children:"Click on the Add Rule Button and a pop-up box will open."}),"\n",(0,n.jsx)(t.li,{children:"Configure the fields that are present."}),"\n",(0,n.jsx)(t.li,{children:"Click on Save Changes and the rule will be reflected."}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Accepted value"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule Name"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule Message"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule Priority"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"URI"}),(0,n.jsx)(t.td,{children:"Strng"}),(0,n.jsx)(t.td,{children:"1000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method"}),(0,n.jsx)(t.td,{children:"Drop-down"}),(0,n.jsx)(t.td,{children:"All"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rule Action"}),(0,n.jsx)(t.td,{children:"Drop-down"}),(0,n.jsx)(t.td,{children:"Record Request"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Find Location"}),(0,n.jsx)(t.td,{children:"Drop-Down"}),(0,n.jsx)(t.td,{children:"Variable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Find Parameter"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Match Condition"}),(0,n.jsx)(t.td,{children:"Drop-Down"}),(0,n.jsx)(t.td,{children:"Pattern Exists"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Match Value"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.h4,{id:"rule-name",children:"Rule Name"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."}),"\n",(0,n.jsx)(t.h4,{id:"rule-message",children:"Rule Message"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."}),"\n",(0,n.jsx)(t.h4,{id:"rule-priority",children:"Rule Priority"}),"\n",(0,n.jsx)(t.p,{children:"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."}),"\n",(0,n.jsx)(t.h4,{id:"uri",children:"URI"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."}),"\n",(0,n.jsx)(t.h4,{id:"method",children:"Method"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."}),"\n",(0,n.jsx)(t.h4,{id:"rule-action",children:"Rule Action"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."}),"\n",(0,n.jsx)(t.h4,{id:"match-condition",children:"Match Condition"}),"\n",(0,n.jsx)(t.p,{children:"This drop-down allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request."}),"\n",(0,n.jsx)(t.h4,{id:"match-pattern",children:"Match Pattern"}),"\n",(0,n.jsx)(t.p,{children:"Users are allowed to specify the keyword to match when the rule is invoked. The entered value can be a regex pattern."}),"\n",(0,n.jsx)(t.h4,{id:"find-location",children:"Find Location"}),"\n",(0,n.jsx)(t.p,{children:"Users can define the source location where this condition needs to be applied."}),"\n",(0,n.jsx)(t.h4,{id:"variable",children:"Variable"}),"\n",(0,n.jsx)(t.p,{children:"Users can select the variable."}),"\n",(0,n.jsx)(t.h4,{id:"match-condition-1",children:"Match Condition"}),"\n",(0,n.jsx)(t.p,{children:"The user can define the match condition for the parameter and match value."}),"\n",(0,n.jsx)(t.h4,{id:"match-value",children:"Match Value"}),"\n",(0,n.jsx)(t.p,{children:"The user can define what value needs to be matched with the match condition."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},21020:(e,t,r)=>{var i=r(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var i,s={},a=null,o=null;for(i in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(o=t.ref),t)l.call(t,i)&&!h.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:n,type:e,key:a,ref:o,props:s,_owner:d.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},74848:(e,t,r)=>{e.exports=r(21020)},75351:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/firewall_rules-bbc3e174427d3de62dc27aff29341f95.png"},12325:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/firewall_rules_condition-8d4f5f980e88ae11659fe204681d91c4.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>d});var i=r(96540);const n={},s=i.createContext(n);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);