/*! For license information please see f3d5cd08.28e62c82.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[23962],{5686:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"enterprise/adc/listeners/server_groups/snmp","title":"SNMP","description":"---","source":"@site/versioned_docs/version-7.0/enterprise/adc/listeners/server_groups/snmp.md","sourceDirName":"enterprise/adc/listeners/server_groups","slug":"/enterprise/adc/listeners/server_groups/snmp","permalink":"/v7/enterprise/adc/listeners/server_groups/snmp","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"adc_sidebar","previous":{"title":"Load Balancing","permalink":"/v7/enterprise/adc/listeners/server_groups/load_balancing"},"next":{"title":"Monitors","permalink":"/v7/enterprise/adc/listeners/monitors"}}');var i=s(74848),t=s(28453);const o={sidebar_position:3},l="SNMP",c={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Enable Monitoring</strong>",id:"enable-monitoring",level:5},{value:"<strong>SNMP port</strong>",id:"snmp-port",level:5},{value:"<strong>SNMP Version</strong>",id:"snmp-version",level:5},{value:"<strong>SNMP Community</strong>",id:"snmp-community",level:5},{value:"**SNMP Security level **",id:"snmp-security-level-",level:5},{value:"<strong>SNMP Check Type</strong>",id:"snmp-check-type",level:5},{value:"<strong>SNMP Timeout</strong>",id:"snmp-timeout",level:5}];function p(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"snmp",children:"SNMP"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"snmp",src:s(35918).A+"",width:"1830",height:"749"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to Stack > ",(0,i.jsx)(n.a,{href:"/v7/enterprise/adc",children:(0,i.jsx)(n.strong,{children:"SLB"})})," > ",(0,i.jsx)(n.a,{href:"/v7/enterprise/adc/listeners/",children:(0,i.jsx)(n.strong,{children:"Listeners"})})," > ",(0,i.jsx)(n.a,{href:"/v7/enterprise/adc/listeners/server_groups/",children:"** Server Groups**"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Select the group name."}),"\n",(0,i.jsxs)(n.li,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Add Server option"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Configure your settings."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(n.h5,{id:"enable-monitoring",children:(0,i.jsx)(n.strong,{children:"Enable Monitoring"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify enabling SNMP monitoring."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,i.jsx)(n.h5,{id:"snmp-port",children:(0,i.jsx)(n.strong,{children:"SNMP port"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify the SNMP port."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 161 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"snmp-version",children:(0,i.jsx)(n.strong,{children:"SNMP Version"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify the SNMP version for monitoring."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: SNMP v1 / SNMP v2 / SNMP v2c / SNMP v3\n\n    Default: SNMP v1 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"snmp-community",children:(0,i.jsx)(n.strong,{children:"SNMP Community"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify SNMP Community."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"snmp-security-level-",children:"**SNMP Security level **"}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify the SNMP security level."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: No Auth or Privacy\n\n    Default: No Auth or Privacy \n"})}),"\n",(0,i.jsx)(n.h5,{id:"snmp-check-type",children:(0,i.jsx)(n.strong,{children:"SNMP Check Type"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify SNMP checks."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: CPU Measurement / RAM Measurement / CPM & RAM Measurement\n\n    Default: CPU Measurement \n"})}),"\n",(0,i.jsx)(n.h5,{id:"snmp-timeout",children:(0,i.jsx)(n.strong,{children:"SNMP Timeout"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify the SNMP security level."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 60000 \n"})}),"\n",(0,i.jsx)(n.p,{children:"Metrics: Milliseconds"})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},21020:(e,n,s)=>{var r=s(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,t={},d=null,p=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:p,props:t,_owner:l.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},35918:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/snmp-d8565beb2b823d36aa50e220dae2d09f.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);