/*! For license information please see e9ed829b.84a0c4c3.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[19765],{30939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"enterprise/llb/security/shaper_rules","title":"Shaper Rules","description":"Shper Rules Settings","source":"@site/docs/enterprise/llb/security/shaper_rules.md","sourceDirName":"enterprise/llb/security","slug":"/enterprise/llb/security/shaper_rules","permalink":"/enterprise/llb/security/shaper_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"llb_sidebar","previous":{"title":"Connection Policy","permalink":"/enterprise/llb/security/connection_policy"},"next":{"title":"Log Rules","permalink":"/enterprise/llb/security/log"}}');var s=n(74848),i=n(28453);const o={sidebar_position:4},l="Shaper Rules",a={},c=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Incoming Group</strong>",id:"incoming-group",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Source Ports</strong>",id:"source-ports",level:5},{value:"<strong>Destination Port</strong>",id:"destination-port",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Traffic Rule</strong>",id:"traffic-rule",level:5},{value:"<strong>Traffic Burst</strong>",id:"traffic-burst",level:5}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"shaper-rules",children:"Shaper Rules"})}),"\n",(0,s.jsx)(t.p,{children:"Shper Rules Settings"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Traffic shaping (also known as packet shaping) is a bandwidth management technique that delays the flow of certain types of network packets in order to ensure network performance for higher priority applications. Traffic shaping essentially limits the amount of bandwidth that can be consumed by certain types of applications. It is primarily used to ensure a high quality of service for business-related network traffic."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"traffic_shaper",src:n(46119).A+"",width:"1842",height:"934"})}),"\n",(0,s.jsx)(t.h3,{id:"how-to-use",children:(0,s.jsx)(t.strong,{children:"How to Use:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Go to ",(0,s.jsx)(t.strong,{children:"Apps > LLB > Security > Shaper Rule"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Click Add Rule button."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.h5,{id:"enabled",children:(0,s.jsx)(t.strong,{children:"Enabled"})}),"\n",(0,s.jsx)(t.p,{children:"It Specify rule is enabled or disabled. By default, this option is enabled."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Enabled / Disabled \n\n    Default: Enabled\n"})}),"\n",(0,s.jsx)(t.h5,{id:"rule-name",children:(0,s.jsx)(t.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to select desired rule name."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: String \n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(t.h5,{id:"rule-message",children:(0,s.jsx)(t.strong,{children:"Rule Message"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows users to use specifies the custom message for the rule."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: String \n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(t.h5,{id:"rule-priority",children:(0,s.jsx)(t.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Integer \n\n    Default: 0\n"})}),"\n",(0,s.jsx)(t.h5,{id:"incoming-group",children:(0,s.jsx)(t.strong,{children:"Incoming Group"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to select the incoming group from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the incoming group. Users can select the Group from the drop-down menu."}),"\n",(0,s.jsx)(t.h5,{id:"outgoing-interface",children:(0,s.jsx)(t.strong,{children:"Outgoing Interface"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to select the outgoing interface from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing Interface. Users can select the Interface from the drop-down menu."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Interface\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(t.h5,{id:"source-ip",children:(0,s.jsx)(t.strong,{children:"Source IP"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: IP\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(t.h5,{id:"destination-ip",children:(0,s.jsx)(t.strong,{children:"Destination IP"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: IP\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(t.h5,{id:"source-ports",children:(0,s.jsx)(t.strong,{children:"Source Ports"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(t.h5,{id:"destination-port",children:(0,s.jsx)(t.strong,{children:"Destination Port"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(t.h5,{id:"protocol",children:(0,s.jsx)(t.strong,{children:"Protocol"})}),"\n",(0,s.jsx)(t.p,{children:"This option allows the user to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned Protocol will only be routed to an outgoing interface which is selected under the Outgoing Interface. By default ANY protocol is set i. e. all protocols are selected for the rule."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: ANY / TCP / UDP / SCTP / CUSTOM\n\n    Default: ANY \n"})}),"\n",(0,s.jsx)(t.h5,{id:"traffic-rule",children:(0,s.jsx)(t.strong,{children:"Traffic Rule"})}),"\n",(0,s.jsx)(t.p,{children:"It specifies the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(t.h5,{id:"traffic-burst",children:(0,s.jsx)(t.strong,{children:"Traffic Burst"})}),"\n",(0,s.jsx)(t.p,{children:"It specifies the traffic burst rate for the page. The burst rate specified will validate the total number of requests received."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 5 \n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"note",children:(0,s.jsx)(t.p,{children:"Always traffic burst must be greater than or equal to traffic rate."})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},46119:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/qos-0c5c73765f1b409f07b6f8572ddb91ed.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);