/*! For license information please see 94166f9e.c9f24633.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[70439],{80939:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"enterprise/ddos/profile/network_rules","title":"Network Rules","description":"Network Rules are user-configured rules performed on network interfaces like IP, Port, Domain, etc in order to take action based on the conditions set in the rule.","source":"@site/docs/enterprise/ddos/profile/network_rules.md","sourceDirName":"enterprise/ddos/profile","slug":"/enterprise/ddos/profile/network_rules","permalink":"/enterprise/ddos/profile/network_rules","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"ddos_sidebar","previous":{"title":"Traffic Shaping","permalink":"/enterprise/ddos/profile/traffic_shaping"},"next":{"title":"Geo Filtering","permalink":"/enterprise/ddos/geo_inspection"}}');var t=r(74848),o=r(28453);const s={sidebar_position:7},l="Network Rules",c={},d=[{value:"How to Use",id:"how-to-use",level:3},{value:"Rule Information",id:"rule-information",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Name</strong>",id:"name",level:5},{value:"<strong>Rule Description</strong>",id:"rule-description",level:5},{value:"<strong>Priority</strong>",id:"priority",level:5},{value:"<strong>Direction</strong>",id:"direction",level:5},{value:"<strong>Action</strong>",id:"action",level:5},{value:"Rule Conditions",id:"rule-conditions",level:3},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Field</strong>",id:"field",level:5},{value:"<strong>Criteria</strong>",id:"criteria",level:5}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"network-rules",children:"Network Rules"})}),"\n",(0,t.jsx)(n.p,{children:"Network Rules are user-configured rules performed on network interfaces like IP, Port, Domain, etc in order to take action based on the conditions set in the rule."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Apps > DDoS > Profile > Network Rules"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add network rules with the specific configuration required."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"network_rules",src:r(65311).A+"",width:"1424",height:"899"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"network_rules",src:r(12100).A+"",width:"957",height:"532"})}),"\n",(0,t.jsx)(n.h3,{id:"rule-information",children:"Rule Information"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h5,{id:"name",children:(0,t.jsx)(n.strong,{children:"Name"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the name of the rule"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.h5,{id:"rule-description",children:(0,t.jsx)(n.strong,{children:"Rule Description"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the description for the rule"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.h5,{id:"priority",children:(0,t.jsx)(n.strong,{children:"Priority"})}),"\n",(0,t.jsx)(n.p,{children:"User can specify the priority of the rule. In case of multiple rules, user can set the priority accordingly"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0\n"})}),"\n",(0,t.jsx)(n.h5,{id:"direction",children:(0,t.jsx)(n.strong,{children:"Direction"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the direction of the rule on which rule can apply i.e. Any, Inbound, Outbound"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Any / Inbound / Outbound\n\n    Default: Any\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Any"}),": Rule is applicable on both Inbound as well as Outbound traffic"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Inbound"}),": Rule is applicable on Inbound traffic only"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Outbound"}),": Rule is applicable on Outbound traffic only"]}),"\n",(0,t.jsx)(n.h5,{id:"action",children:(0,t.jsx)(n.strong,{children:"Action"})}),"\n",(0,t.jsx)(n.p,{children:"In this field user can select the action which should be applicable on the rule"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rule-conditions",children:"Rule Conditions"}),"\n",(0,t.jsx)(n.h5,{id:"protocol",children:(0,t.jsx)(n.strong,{children:"Protocol"})}),"\n",(0,t.jsx)(n.p,{children:"In this field user can specify the Protocol on which rule will be applicable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: IPV4\n\n    Default: IPV4\n"})}),"\n",(0,t.jsx)(n.h5,{id:"field",children:(0,t.jsx)(n.strong,{children:"Field"})}),"\n",(0,t.jsx)(n.p,{children:"User can specify the Field according to the selected protocol. Field will be different for the different protocol"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: IS IPv4\n\n    Default: IS IPv4\n"})}),"\n",(0,t.jsx)(n.h5,{id:"criteria",children:(0,t.jsx)(n.strong,{children:"Criteria"})}),"\n",(0,t.jsx)(n.p,{children:"User can specify the Criteria according to the slected field. Criteria will be differnt for the different field"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: NONE\n\n    Default: NONE\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,n,r)=>{var i=r(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var i,o={},d=null,a=null;for(i in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,i)&&!c.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:t,type:e,key:d,ref:a,props:o,_owner:l.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},65311:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/securityprofile_network_rules_1-97ded465f786b8a9d8d6d039ba89992e.png"},12100:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/securityprofile_network_rules_2-d310189c666a36261755d96bcff697fd.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var i=r(96540);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);