/*! For license information please see e4ce94aa.22666020.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[66949],{24269:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"enterprise/platform/stacks/integrations/syslog","title":"Syslog","description":"Integration with Syslog Server for monitoring Haltdos appliances","source":"@site/versioned_docs/version-7.0/enterprise/platform/stacks/integrations/syslog.md","sourceDirName":"enterprise/platform/stacks/integrations","slug":"/enterprise/platform/stacks/integrations/syslog","permalink":"/v7/enterprise/platform/stacks/integrations/syslog","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"platform_sidebar","previous":{"title":"Integrations","permalink":"/v7/enterprise/platform/stacks/integrations/"},"next":{"title":"Config Sync","permalink":"/v7/enterprise/platform/stacks/integrations/config_sync"}}');var r=s(74848),o=s(28453);const i={sidebar_position:1},l="Syslog",a={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"syslog",children:"Syslog"})}),"\n",(0,r.jsx)(n.p,{children:"Integration with Syslog Server for monitoring Haltdos appliances"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Syslog"})," stands for ",(0,r.jsx)(n.strong,{children:"System Logging Protocol"})," and is a standard protocol used to send system log or event messages to a specific server, called a ",(0,r.jsx)(n.strong,{children:"Syslog server"}),". It is primarily used to collect various device logs from several different machines in a central location for monitoring and review."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Haltdos"})," supports integration with 3rd party Syslog service for sending real-time alerts. All logs in ",(0,r.jsx)(n.strong,{children:"Haltdos"})," are written in CEF format. The body of the log entry itself is JSON format. This allows simple integration with monitoring tools such as SIEM solutions without the need for writing custom parsers."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"It is recommended to configure Syslog (if available) for centralized monitoring of all Haltdos appliances"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"syslog",src:s(72702).A+"",width:"1820",height:"693"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Stack > Settings > Integration > Syslog"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syslog Export Enabled"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows users to enable or disable exporting Syslog to an external server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Protocol"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows the user to select the protocol type on which the Syslog server is running. Users can select either TCP or UDP."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: UDP\n\n    Default: UDP \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Host Name"})}),"\n",(0,r.jsx)(n.p,{children:"This option helps the user to mention the IP address or the hostname of the external backup server on which the Syslog service is exporting the log details."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Syslog Server Port"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows the users to mention the port number to communicate with Syslog server."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var t=s(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,o={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:l.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},74848:(e,n,s)=>{e.exports=s(21020)},72702:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/syslog_new_ui-3f1d1b734bbf0a427c7725a3ba2d7813.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);