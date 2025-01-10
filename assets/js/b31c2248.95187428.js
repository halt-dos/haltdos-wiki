/*! For license information please see b31c2248.95187428.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[34586],{95574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"enterprise/llb/rules/load_balancing","title":"Load Balancing","description":"Load Balancing Rule & Settings","source":"@site/versioned_docs/version-7.0/enterprise/llb/rules/load_balancing.md","sourceDirName":"enterprise/llb/rules","slug":"/enterprise/llb/rules/load_balancing","permalink":"/v7/enterprise/llb/rules/load_balancing","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"llb_sidebar","previous":{"title":"Rules","permalink":"/v7/enterprise/llb/rules/"},"next":{"title":"Source NAT","permalink":"/v7/enterprise/llb/rules/snat"}}');var i=t(74848),s=t(28453);const l={sidebar_position:1},o="Load Balancing",a={},c=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description</strong>:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enable</strong>",id:"enable",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:4},{value:"<strong>Outging Interface</strong>",id:"outging-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Criteria</strong>",id:"criteria",level:5}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"load-balancing",children:"Load Balancing"})}),"\n",(0,i.jsx)(n.p,{children:"Load Balancing Rule & Settings"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"A load balancer rule is used to define how incoming traffic is distributed to all outgoing interfaces.  These rules settings help you to enable/disable the load balancing rule by specifying the rule name, message, priority, Along with various rule conditions such as Outgoing Interface, Source IP, Destination IP, Protocol, and Criteria."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"load_balancing",src:t(90953).A+"",width:"1840",height:"797"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:(0,i.jsx)(n.strong,{children:"How to Use:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Stack > LLB > Rules"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select Load Balancing Rule."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add Rule"})," button."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Comfigure your settings."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"load_balancing_rule_condition",src:t(94938).A+"",width:"1096",height:"459"})}),"\n",(0,i.jsxs)(n.h3,{id:"description",children:[(0,i.jsx)(n.strong,{children:"Description"}),":"]}),"\n",(0,i.jsx)(n.h5,{id:"rule-name",children:(0,i.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows the user to select desired rule name."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-message",children:(0,i.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to use specifies the custom message for the rule."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"rule-priority",children:(0,i.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"enable",children:(0,i.jsx)(n.strong,{children:"Enable"})}),"\n",(0,i.jsx)(n.p,{children:"It specifies rule is enabled or disabled the rule. By default, this option is enabled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,i.jsx)(n.h4,{id:"rule-condition",children:(0,i.jsx)(n.strong,{children:"Rule Condition"})}),"\n",(0,i.jsx)(n.h5,{id:"outging-interface",children:(0,i.jsx)(n.strong,{children:"Outging Interface"})}),"\n",(0,i.jsxs)(n.p,{children:["This option allows the user to select the outgoing interfaces. If any data packet matches the policy mentioned in the rule, will be routed to the ",(0,i.jsx)(n.strong,{children:"Outgoing Interfaces"})," for load balancing."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Selct outgoing Interface\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"source-ip",children:(0,i.jsx)(n.strong,{children:"Source IP"})}),"\n",(0,i.jsx)(n.p,{children:"This option helps users to select the source IP or network for the IP packet on which they want to set the load balancing rule. This option will filter out all packets with mentioned IP range and take action. Source IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: IP\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"destination-ip",children:(0,i.jsx)(n.strong,{children:"Destination IP"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to select the destination IP or network for the IP packet on which they want to set the load balancing rule. This option will filter out all packets with mentioned IP range and take action. Destination IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: IP\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"protocol",children:(0,i.jsx)(n.strong,{children:"Protocol"})}),"\n",(0,i.jsxs)(n.p,{children:["This option allows users to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned ",(0,i.jsx)(n.strong,{children:"Protocol"})," will be routed to an outgoing interface that is selected under ",(0,i.jsx)(n.strong,{children:"Outgoing Interface"}),". By default, ",(0,i.jsx)(n.strong,{children:"ANY"})," protocol is set i. e. all protocols are selected for the rule."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: ANY / TCP / UDP / SCTP / CUSTOM\n\n    Default: ANY \n"})}),"\n",(0,i.jsx)(n.h5,{id:"criteria",children:(0,i.jsx)(n.strong,{children:"Criteria"})}),"\n",(0,i.jsx)(n.p,{children:"It specifies the other network-based conditions for load balancing. Users can select from many options to figure out any network fluctuation in connectivity. Users can set their packet drop, jitter, latency, etc."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: PACKET LOSS / \n\n    Default: Blank \n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var r=t(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},94938:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/llb10-75b92b173ee0d053e3a791dba3ac9c28.png"},90953:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/loadbalancing-fc7e1aa56ae3fc1321312125acff2edc.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);