/*! For license information please see 0fe83ea7.87f7ff00.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[18410],{87162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"enterprise/llb/rules/policy_routing","title":"Policy Routing","description":"Policy Based Routing & Settings","source":"@site/versioned_docs/version-6.0/enterprise/llb/rules/policy_routing.md","sourceDirName":"enterprise/llb/rules","slug":"/enterprise/llb/rules/policy_routing","permalink":"/v6/enterprise/llb/rules/policy_routing","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"llb_sidebar","previous":{"title":"Fixed Routing","permalink":"/v6/enterprise/llb/rules/fixed_routing"},"next":{"title":"Traffic Shaper / QoS","permalink":"/v6/enterprise/llb/rules/QoS"}}');var i=n(74848),s=n(28453);const o={sidebar_position:5},l="Policy Routing",d={},a=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Incoming Interfaces</strong>",id:"incoming-interfaces",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Protcol</strong>",id:"protcol",level:5},{value:"<strong>Route Action</strong>",id:"route-action",level:5},{value:"<strong>Source Port Range</strong>",id:"source-port-range",level:5},{value:"<strong>Destination Port Range</strong>",id:"destination-port-range",level:5},{value:"<strong>Outgoing Interfaces</strong>",id:"outgoing-interfaces",level:5},{value:"<strong>Gateway IP</strong>",id:"gateway-ip",level:5},{value:"<strong>Enable NAT</strong>",id:"enable-nat",level:5}];function c(e){const t={h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"policy-routing",children:"Policy Routing"})}),"\n",(0,i.jsx)(t.p,{children:"Policy Based Routing & Settings"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Policy-based routing (PBR) is a technique that forwards and routes data packets based on policies or filters. User can selectively apply policies based on specific parameters such as source and destination IP address, source or destination port, protocols or other criteria and then route the packets on user-defined routes."}),"\n",(0,i.jsx)(t.p,{children:"Policy-based routing  provides flexible, granular traffic-handling capabilities for forwarding packets. In this way, PBR enables users to achieve optimal bandwidth utilization for business-critical applications."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"policy_routing",src:n(47858).A+"",width:"1498",height:"491"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-use",children:(0,i.jsx)(t.strong,{children:"How to Use:"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Stack > LLB > Rules"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Select Policy Route NAT rule."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click Add Rule button."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Click Save."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"policy_routing_rule_condition",src:n(79035).A+"",width:"1101",height:"799"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Setting"}),(0,i.jsx)(t.th,{children:"Accepted Values"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rule Name"}),(0,i.jsx)(t.td,{children:"Specify Rule Name"}),(0,i.jsx)(t.td,{children:"Blank (Mandatory)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rule Message"}),(0,i.jsx)(t.td,{children:"User Friendly Message For Rule"}),(0,i.jsx)(t.td,{children:"Blank (Mandatory)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Rule Priority"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Enabled"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Incoming Interfaces"}),(0,i.jsx)(t.td,{children:"Drop Down"}),(0,i.jsx)(t.td,{children:"None (Mandatory)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Source IP"}),(0,i.jsx)(t.td,{children:"IP address with CIDR"}),(0,i.jsx)(t.td,{children:"None (Mandatory)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Destination IP"}),(0,i.jsx)(t.td,{children:"IP address with CIDR"}),(0,i.jsx)(t.td,{children:"None (Mandatory)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Protocol"}),(0,i.jsx)(t.td,{children:"Select the Protocol"}),(0,i.jsx)(t.td,{children:"Any"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Route Action"}),(0,i.jsx)(t.td,{children:"Drop Down"}),(0,i.jsx)(t.td,{children:"Forwarding Traffic"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Source Port Range"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Destination Port Range"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Outgoing Interface"}),(0,i.jsx)(t.td,{children:"Drop Down"}),(0,i.jsx)(t.td,{children:"None (Mandatory"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Gateway IP"}),(0,i.jsx)(t.td,{children:"IP Address"}),(0,i.jsx)(t.td,{children:"None (Mandatory"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Enable NAT"}),(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"description",children:(0,i.jsx)(t.strong,{children:"Description:"})}),"\n",(0,i.jsx)(t.h5,{id:"rule-name",children:(0,i.jsx)(t.strong,{children:"Rule Name"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to select desired rule name."}),"\n",(0,i.jsx)(t.h5,{id:"rule-message",children:(0,i.jsx)(t.strong,{children:"Rule Message"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to use specifies the custom message for the rule."}),"\n",(0,i.jsx)(t.h5,{id:"rule-priority",children:(0,i.jsx)(t.strong,{children:"Rule Priority"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."}),"\n",(0,i.jsx)(t.h5,{id:"enabled",children:(0,i.jsx)(t.strong,{children:"Enabled"})}),"\n",(0,i.jsx)(t.p,{children:"It specifies rule is enabled or disabled. By default, this option is enabled."}),"\n",(0,i.jsx)(t.h5,{id:"incoming-interfaces",children:(0,i.jsx)(t.strong,{children:"Incoming Interfaces"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to set Incoming Interface. Every data packet which enters from Incoming Interface will be inspected for the policies mentioned below."}),"\n",(0,i.jsx)(t.h5,{id:"source-ip",children:(0,i.jsx)(t.strong,{children:"Source IP"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with mentioned source IP address will only be routed to the outgoing interface which is selected under the Outgoing Interface"}),"\n",(0,i.jsx)(t.h5,{id:"destination-ip",children:(0,i.jsx)(t.strong,{children:"Destination IP"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to outgoing interface which is selected under the Outgoing Interface"}),"\n",(0,i.jsx)(t.h5,{id:"protcol",children:(0,i.jsx)(t.strong,{children:"Protcol"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned Protocol will only be routed to the outgoing interface which is selected under the Outgoing Interface. By default, ANY protocol is set."}),"\n",(0,i.jsx)(t.h5,{id:"route-action",children:(0,i.jsx)(t.strong,{children:"Route Action"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to select either forward the traffic or stop the traffic. If this option is set to forward the traffic, it means packets that match the condition will be forwarded to the specific route which is mentioned under Outgoing Interface. If this is set to stop the traffic It will not forward the packet."}),"\n",(0,i.jsx)(t.h5,{id:"source-port-range",children:(0,i.jsx)(t.strong,{children:"Source Port Range"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to the outgoing interface which is selected under the Outgoing Interface."}),"\n",(0,i.jsx)(t.h5,{id:"destination-port-range",children:(0,i.jsx)(t.strong,{children:"Destination Port Range"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under Outgoing Interface."}),"\n",(0,i.jsx)(t.h5,{id:"outgoing-interfaces",children:(0,i.jsx)(t.strong,{children:"Outgoing Interfaces"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows the user to select the outgoing interface from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing Interface. Users can select the Interface from the drop-down menu."}),"\n",(0,i.jsx)(t.h5,{id:"gateway-ip",children:(0,i.jsx)(t.strong,{children:"Gateway IP"})}),"\n",(0,i.jsx)(t.p,{children:"It species the Gateway IP address through which we want to move traffic."}),"\n",(0,i.jsx)(t.h5,{id:"enable-nat",children:(0,i.jsx)(t.strong,{children:"Enable NAT"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to enable or disable NAT. NAT is a method of mapping an IP address space into another by modifying network address information in the IP header of packets. If there is any NAT rule already configured by the user, the source or destination IPs address will be mapped accordingly. If there is no such NAT rule added by the user, then the user can add a new rule for Network Address Translation."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:c,props:s,_owner:l.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(21020)},47858:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/llb18-d8811772fac74e8c3c043463e3701d82.png"},79035:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/llb19-e8b152b1a4d5951e13a626ef92942afc.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);