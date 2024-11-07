/*! For license information please see 11c8055d.a98cb2c8.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[17558],{75954:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"enterprise/ddos/profile/connections/aggressive_aging","title":"Aggressive Aging","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/ddos/profile/connections/aggressive_aging.md","sourceDirName":"enterprise/ddos/profile/connections","slug":"/enterprise/ddos/profile/connections/aggressive_aging","permalink":"/v7/enterprise/ddos/profile/connections/aggressive_aging","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"ddos_sidebar","previous":{"title":"TCP Shield","permalink":"/v7/enterprise/ddos/profile/connections/tcp_shield"},"next":{"title":"Application Layer","permalink":"/v7/enterprise/ddos/profile/application_layer"}}');var t=i(74848),s=i(28453);const c={sidebar_position:3},r="Aggressive Aging",l={},d=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Inbound Aging Enabled",id:"inbound-aging-enabled",level:4},{value:"Inbound Connection Timeout",id:"inbound-connection-timeout",level:4},{value:"Inbound Incomplete Connection Timeout",id:"inbound-incomplete-connection-timeout",level:4},{value:"Outbound Aging Enabled",id:"outbound-aging-enabled",level:4},{value:"Outbound Connection Timeout",id:"outbound-connection-timeout",level:4},{value:"Outbound Incomplete Connection Timeout",id:"outbound-incomplete-connection-timeout",level:4}];function a(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"aggressive-aging",children:"Aggressive Aging"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"The Aggressive aging feature is used to set the age value for non-responsive established & non-established connections."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"aggressive aging",src:i(60916).A+"",width:"1460",height:"550"})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Apps > DDoS > Profile > Connection Settings > Aggressive Aging"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure the settings."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h4,{id:"inbound-aging-enabled",children:"Inbound Aging Enabled"}),"\n",(0,t.jsx)(n.p,{children:"User can Enable/Disable the validation of timeout for inbound TCP connection. By default this field is disable by enabling it, Haltdos Anti-DDoS solution monitor the age of inbound TCP connection state according to the configured policies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n    \n    Default: Disable\n"})}),"\n",(0,t.jsx)(n.h4,{id:"inbound-connection-timeout",children:"Inbound Connection Timeout"}),"\n",(0,t.jsx)(n.p,{children:"User can specify the time limit for inbound TCP connections. By specifying this field user can limit the time for inbound TCP connections, if the connection is non-responsive or non-established it will disconnect the connection according to the input time automatically."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n    \n    Default: 600\n"})}),"\n",(0,t.jsx)(n.h4,{id:"inbound-incomplete-connection-timeout",children:"Inbound Incomplete Connection Timeout"}),"\n",(0,t.jsx)(n.p,{children:"User can specify the time limit for inbound incomplete TCP connections. By specifying this field user can limit the time for inbound half open TCP connections,if the connection is not established till the input time it will disconnect the connection."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n    \n    Default: 30\n"})}),"\n",(0,t.jsx)(n.h4,{id:"outbound-aging-enabled",children:"Outbound Aging Enabled"}),"\n",(0,t.jsx)(n.p,{children:"User can Enable/Disable the validation of timeout for outbound TCP connection. By default this field is disable by enabling it, Haltdos Anti-DDoS solution monitor the age of outbound TCP connection state according to the configured policies."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n    \n    Default: Disable\n"})}),"\n",(0,t.jsx)(n.h4,{id:"outbound-connection-timeout",children:"Outbound Connection Timeout"}),"\n",(0,t.jsx)(n.p,{children:"User can specify the time limit for outbound TCP connections. By specifying this field user can limit the time for outbound TCP connections, if the connection is non-responsive or non-established it will disconnect the connection according to the input time automatically."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n    \n    Default: 600\n"})}),"\n",(0,t.jsx)(n.h4,{id:"outbound-incomplete-connection-timeout",children:"Outbound Incomplete Connection Timeout"}),"\n",(0,t.jsx)(n.p,{children:"User can specify the time limit for outbound incomplete TCP connections. By specifying this field user can limit the time for outbound half open TCP connections,if the connection is not established till the input time it will disconnect the connection."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n    \n    Default: 30\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,n,i)=>{var o=i(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var o,s={},d=null,a=null;for(o in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,o)&&!l.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:t,type:e,key:d,ref:a,props:s,_owner:r.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,i)=>{e.exports=i(21020)},60916:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/aging-eb9a5c50c7fa707d962d7c344cb0743a.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var o=i(96540);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);