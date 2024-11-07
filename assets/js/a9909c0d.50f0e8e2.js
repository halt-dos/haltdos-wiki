/*! For license information please see a9909c0d.50f0e8e2.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11066],{44220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"enterprise/llb/llb_settings","title":"LLB Settings","description":"Setting for Haltdos LLB","source":"@site/docs/enterprise/llb/llb_settings.md","sourceDirName":"enterprise/llb","slug":"/enterprise/llb/llb_settings","permalink":"/enterprise/llb/llb_settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"llb_sidebar","previous":{"title":"Link Load Balancer (LLB)","permalink":"/enterprise/llb"},"next":{"title":"Group Ports","permalink":"/enterprise/llb/group_ports"}}');var r=t(74848),i=t(28453);const o={sidebar_position:1},l="LLB Settings",c={},a=[{value:"<strong>How to Use :</strong>",id:"how-to-use-",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Connection Tuple Expiry</strong>",id:"connection-tuple-expiry",level:5},{value:"<strong>Connectionless Tuple Expiry</strong>",id:"connectionless-tuple-expiry",level:5},{value:"<strong>Graceful Period On Startup</strong>",id:"graceful-period-on-startup",level:5},{value:"<strong>Learning Sampling Percentage</strong>",id:"learning-sampling-percentage",level:5},{value:"<strong>Drop Sampling Percentage</strong>",id:"drop-sampling-percentage",level:5},{value:"<strong>SSL Renegotiation Threshold</strong>",id:"ssl-renegotiation-threshold",level:5},{value:"<strong>Scanning Threshold</strong>",id:"scanning-threshold",level:5}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"llb-settings",children:"LLB Settings"})}),"\n",(0,r.jsx)(n.p,{children:"Setting for Haltdos LLB"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Link load balancing is a term that refers to the management of the traffic that is initiated within a local network that is destined to go out through one of a set of WAN connections. The link load balancer sits at the LAN-WAN boundary. It will redirect requests coming from the LAN segment that is destined to go out to the public Internet, by directing the traffic onto one of the various WAN connections."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"llbsettings",src:t(76607).A+"",width:"1435",height:"735"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use-",children:(0,r.jsx)(n.strong,{children:"How to Use :"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Apps > LLB"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configure your setiings."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:(0,r.jsx)(n.strong,{children:"Description:"})}),"\n",(0,r.jsx)(n.h5,{id:"connection-tuple-expiry",children:(0,r.jsx)(n.strong,{children:"Connection Tuple Expiry"})}),"\n",(0,r.jsx)(n.p,{children:"Tuple refers to a set of five different values that comprise a Transmission Control Protocol/Internet Protocol (TCP/IP) connection. When a tuple is active but is not getting any response we can set ty time for such type of connection tuple. Users can specify the expiry of the connection tuple in seconds."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 600 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"connectionless-tuple-expiry",children:(0,r.jsx)(n.strong,{children:"Connectionless Tuple Expiry"})}),"\n",(0,r.jsx)(n.p,{children:"When this Tuple is based on UDP protocol we can consider it a Connection-less tuple. This time specifies after how much time UDP or ICMP-based tuple should be closed. Users can specify the expiry of the connection-less tuple in seconds."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 60 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"graceful-period-on-startup",children:(0,r.jsx)(n.strong,{children:"Graceful Period On Startup"})}),"\n",(0,r.jsx)(n.p,{children:"A grace period on startup is the amount of time required to gracefully start an interface or link a session is being closed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 30 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"learning-sampling-percentage",children:(0,r.jsx)(n.strong,{children:"Learning Sampling Percentage"})}),"\n",(0,r.jsx)(n.p,{children:"It will help users to collect Learning packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos LLB solution collects the sample from the network traffic to learn its behavior."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 100\n"})}),"\n",(0,r.jsx)(n.h5,{id:"drop-sampling-percentage",children:(0,r.jsx)(n.strong,{children:"Drop Sampling Percentage"})}),"\n",(0,r.jsx)(n.p,{children:"It will help users to collect Drop packet samples for analyzing the traffic behavior. Users can set a limit in percentage so that Haltdos LLB solution collects the sample from the network traffic to analyze the dropped packet behavior."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 100 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"ssl-renegotiation-threshold",children:(0,r.jsx)(n.strong,{children:"SSL Renegotiation Threshold"})}),"\n",(0,r.jsx)(n.p,{children:"In this field users can specify the maximum connection allowed to be established in a SSL negotiation. SSL renegotiation threshold value allow the number of connection can be made in one session."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"scanning-threshold",children:(0,r.jsx)(n.strong,{children:"Scanning Threshold"})}),"\n",(0,r.jsx)(n.p,{children:"In this field, users can specify the threshold value in seconds of scanning threshold. The Haltdos LLB solution scan the traffic for defined interval of time for identifying active devices on a network."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var s,i={},a=null,d=null;for(s in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:a,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(21020)},76607:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/llb_settings-bd265619bdcf81915c4827c6513e3c34.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);