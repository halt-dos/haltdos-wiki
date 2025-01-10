/*! For license information please see f92f3781.09dd57c7.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[55183],{185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/platform/system/settings/log_retention","title":"Log Retention","description":"Configure the log retention period for the Haltdos appliances","source":"@site/docs/enterprise/platform/system/settings/log_retention.md","sourceDirName":"enterprise/platform/system/settings","slug":"/enterprise/platform/system/settings/log_retention","permalink":"/enterprise/platform/system/settings/log_retention","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"platform_sidebar","previous":{"title":"Dashboards","permalink":"/enterprise/platform/system/settings/dashboards"},"next":{"title":"Forensics","permalink":"/enterprise/platform/system/settings/forensics"}}');var i=n(74848),o=n(28453);const r={sidebar_position:3},l="Log Retention",c={},d=[{value:"Configure the log retention period for the Haltdos appliances",id:"configure-the-log-retention-period-for-the-haltdos-appliances",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Event Log</strong>",id:"event-log",level:5},{value:"<strong>Incident Log</strong>",id:"incident-log",level:5},{value:"<strong>Session Log</strong>",id:"session-log",level:5},{value:"<strong>Minute Statistics</strong>",id:"minute-statistics",level:5},{value:"<strong>Hourly Statistics</strong>",id:"hourly-statistics",level:5},{value:"<strong>Day Statistics</strong>",id:"day-statistics",level:5}];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"log-retention",children:"Log Retention"})}),"\n",(0,i.jsx)(t.h3,{id:"configure-the-log-retention-period-for-the-haltdos-appliances",children:"Configure the log retention period for the Haltdos appliances"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"This feature allows users to set the log retention period. The log retention period is the time for which the logs the logs will be stored locally on the Haltdos Device."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Log retention should be configured as per organization policy"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Log Retention",src:n(12743).A+"",width:"1908",height:"986"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.strong,{children:"System > Settings > Log Retention"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(t.h5,{id:"event-log",children:(0,i.jsx)(t.strong,{children:"Event Log"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the event log."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 90\n"})}),"\n",(0,i.jsx)(t.h5,{id:"incident-log",children:(0,i.jsx)(t.strong,{children:"Incident Log"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the incident log."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 90 \n"})}),"\n",(0,i.jsx)(t.h5,{id:"session-log",children:(0,i.jsx)(t.strong,{children:"Session Log"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the session log."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 7\n"})}),"\n",(0,i.jsx)(t.h5,{id:"minute-statistics",children:(0,i.jsx)(t.strong,{children:"Minute Statistics"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the MINUTE statistics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 2\n"})}),"\n",(0,i.jsx)(t.h5,{id:"hourly-statistics",children:(0,i.jsx)(t.strong,{children:"Hourly Statistics"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the HOUR statistics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 7\n"})}),"\n",(0,i.jsx)(t.h5,{id:"day-statistics",children:(0,i.jsx)(t.strong,{children:"Day Statistics"})}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to specify the retention period of the DAY statistics."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 90\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,t,n)=>{var s=n(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,o={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:d,ref:a,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},12743:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/syslogreten-64db67ae39c603f8462cdf20a4eaff7d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);