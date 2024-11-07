/*! For license information please see 3ae723a0.9065a8c2.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[95469],{18996:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"enterprise/ddos/cluster","title":"Cluster","description":"For High Availability","source":"@site/versioned_docs/version-6.0/enterprise/ddos/cluster.md","sourceDirName":"enterprise/ddos","slug":"/enterprise/ddos/cluster","permalink":"/v6/enterprise/ddos/cluster","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"ddos_sidebar","previous":{"title":"Top Talkers","permalink":"/v6/enterprise/ddos/advance_settings/top_talkers"}}');var r=i(74848),s=i(28453);const d={sidebar_position:8},l="Cluster",o={},c=[{value:"<strong>How To Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Primary Instance</strong>",id:"primary-instance",level:5},{value:"<strong>HA Mode</strong>",id:"ha-mode",level:5},{value:"<strong>HA Port</strong>",id:"ha-port",level:5},{value:"<strong>Peer check interval</strong>",id:"peer-check-interval",level:5},{value:"<strong>Peer failure threshold</strong>",id:"peer-failure-threshold",level:5},{value:"<strong>Max allowed steps</strong>",id:"max-allowed-steps",level:5},{value:"<strong>Enabled Bandwidth Monitoring</strong>",id:"enabled-bandwidth-monitoring",level:5},{value:"<strong>Minimum Bandwidth</strong>",id:"minimum-bandwidth",level:5},{value:"<strong>Link monitoring interval</strong>",id:"link-monitoring-interval",level:5},{value:"<strong>Minimum Active Links</strong>",id:"minimum-active-links",level:5}];function h(e){const n={h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cluster",children:"Cluster"})}),"\n",(0,r.jsx)(n.p,{children:"For High Availability"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"DDOS Protection support high availability, for two compatible DDoS Protector devices to operate in Active \u2013 Active, Active \u2013 Passive, Cluster mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ha_settings",src:i(33817).A+"",width:"1501",height:"924"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:(0,r.jsx)(n.strong,{children:"How To Use:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Stack > Instance > Instance Name > HA"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"User can configure as per requirement"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Click on Save Settings"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ha_settings",src:i(77730).A+"",width:"1471",height:"517"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Settings"}),(0,r.jsx)(n.th,{children:"Accepted Values"}),(0,r.jsx)(n.th,{children:"Defaults"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Primary Instance"}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HA Mode"}),(0,r.jsx)(n.td,{children:"Drop Down"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HA Port"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"11211"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Peer check Interval"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Peer failure threshold"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Peer recovery threshold"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Max Allowed Flaps"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Enable Bandwidth Monitoring"}),(0,r.jsx)(n.td,{children:"Boolen"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Minimum Bandwidth"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1024/10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Link Monitoring Interval"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Minimum Active links"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsx)(n.h5,{id:"primary-instance",children:(0,r.jsx)(n.strong,{children:"Primary Instance"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the default instance from the drop-down that will have an active mode on start-up"}),"\n",(0,r.jsx)(n.h5,{id:"ha-mode",children:(0,r.jsx)(n.strong,{children:"HA Mode"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the high availability mode between multiple mitigation instances"}),"\n",(0,r.jsx)(n.h5,{id:"ha-port",children:(0,r.jsx)(n.strong,{children:"HA Port"})}),"\n",(0,r.jsx)(n.p,{children:"Specify port over which mitigation instances communicate with each other"}),"\n",(0,r.jsx)(n.h5,{id:"peer-check-interval",children:(0,r.jsx)(n.strong,{children:"Peer check interval"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the time (in sec) after which one mitigation instance checks the health of its peer"}),"\n",(0,r.jsx)(n.h5,{id:"peer-failure-threshold",children:(0,r.jsx)(n.strong,{children:"Peer failure threshold"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the number of failed peer health checks after which a mitigation instance considers its peer unhealthy"}),"\n",(0,r.jsx)(n.h5,{id:"max-allowed-steps",children:(0,r.jsx)(n.strong,{children:"Max allowed steps"})}),"\n",(0,r.jsx)(n.p,{children:"In some situations, two mitigation instances may Allowed keep changing their state from active to inactive. A Flaps flap is counted when the instance leaves the active state. This can result in poor network performance and can disrupt normal traffic flows. Specify allowed number of flaps after which the primary instance goes into hardware bypass"}),"\n",(0,r.jsx)(n.h5,{id:"enabled-bandwidth-monitoring",children:(0,r.jsx)(n.strong,{children:"Enabled Bandwidth Monitoring"})}),"\n",(0,r.jsx)(n.p,{children:"Specify if bandwidth monitoring should be used to trigger fail over in the HA cluster"}),"\n",(0,r.jsx)(n.h5,{id:"minimum-bandwidth",children:(0,r.jsx)(n.strong,{children:"Minimum Bandwidth"})}),"\n",(0,r.jsx)(n.p,{children:"Specify minimum bandwidth (in bps) for a specified interval (in sec) below which fail-over is triggered"}),"\n",(0,r.jsx)(n.h5,{id:"link-monitoring-interval",children:(0,r.jsx)(n.strong,{children:"Link monitoring interval"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the interval in milliseconds (ms) for periodic link monitoring between multiple mitigation instance"}),"\n",(0,r.jsx)(n.h5,{id:"minimum-active-links",children:(0,r.jsx)(n.strong,{children:"Minimum Active Links"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the minimum allowed active link pairs below which the solution will mark itself down"})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,i)=>{var t=i(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var t,s={},c=null,h=null;for(t in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,t)&&!o.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:h,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,i)=>{e.exports=i(21020)},33817:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ddos31-62c09cf0f83585ce25dd20c971f17d05.png"},77730:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ddos32-8545857fda5108b9edc8027195c67d0d.png"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var t=i(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);