/*! For license information please see 9417d1e4.d0fd9f7f.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[63214],{35732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/platform/stacks/settings/log_retention","title":"Log Retention","description":"Configure the log retention period for the Haltdos appliances","source":"@site/versioned_docs/version-7.0/enterprise/platform/stacks/settings/log_retention.md","sourceDirName":"enterprise/platform/stacks/settings","slug":"/enterprise/platform/stacks/settings/log_retention","permalink":"/v7/enterprise/platform/stacks/settings/log_retention","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"platform_sidebar","previous":{"title":"Dashboards","permalink":"/v7/enterprise/platform/stacks/settings/dashboards"},"next":{"title":"Status","permalink":"/v7/enterprise/platform/system/status"}}');var i=n(74848),o=n(28453);const r={sidebar_position:5},l="Log Retention",c={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Event Log</strong>",id:"event-log",level:5},{value:"<strong>Incident Log</strong>",id:"incident-log",level:5},{value:"<strong>Session Log</strong>",id:"session-log",level:5},{value:"<strong>Minute Statistics</strong>",id:"minute-statistics",level:5},{value:"<strong>Hourly Statistics</strong>",id:"hourly-statistics",level:5},{value:"<strong>Day Statistics</strong>",id:"day-statistics",level:5}];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"log-retention",children:"Log Retention"})}),"\n",(0,i.jsx)(t.p,{children:"Configure the log retention period for the Haltdos appliances"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"This feature allows users to set the log retention period. The log retention period is the time for which the logs the logs will be stored locally on the Haltdos Device."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Depending upon the organization's policy, we can change or less the dya for logs."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"aaa_policy",src:n(9183).A+"",width:"1900",height:"738"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Stack > Settings > Log Retention"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save Changes"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(t.h5,{id:"event-log",children:(0,i.jsx)(t.strong,{children:"Event Log"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the event log."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,i.jsx)(t.h5,{id:"incident-log",children:(0,i.jsx)(t.strong,{children:"Incident Log"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the incident log."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,i.jsx)(t.h5,{id:"session-log",children:(0,i.jsx)(t.strong,{children:"Session Log"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the session log."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 5 \n"})}),"\n",(0,i.jsx)(t.h5,{id:"minute-statistics",children:(0,i.jsx)(t.strong,{children:"Minute Statistics"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the MINUTE statistics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,i.jsx)(t.h5,{id:"hourly-statistics",children:(0,i.jsx)(t.strong,{children:"Hourly Statistics"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the HOUR statistics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 3 \n"})}),"\n",(0,i.jsx)(t.h5,{id:"day-statistics",children:(0,i.jsx)(t.strong,{children:"Day Statistics"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the DAY statistics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 5 \n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,t,n)=>{var s=n(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,o={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:d,ref:a,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},9183:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/logr-06e010ca1be7ff454cd5ddbfcc28bdae.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);