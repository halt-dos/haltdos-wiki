/*! For license information please see 4c9583c4.98acdd04.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[1936],{78258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"enterprise/platform/system/settings/task_mgmt","title":"Task Management","description":"Scheduling repeated tasks in Haltdos Platform","source":"@site/docs/enterprise/platform/system/settings/task_mgmt.md","sourceDirName":"enterprise/platform/system/settings","slug":"/enterprise/platform/system/settings/task_mgmt","permalink":"/enterprise/platform/system/settings/task_mgmt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"platform_sidebar","previous":{"title":"Forensics","permalink":"/enterprise/platform/system/settings/forensics"},"next":{"title":"Software Updates","permalink":"/enterprise/platform/system/settings/software_updates"}}');var r=t(74848),i=t(28453);const a={sidebar_position:5},c="Task Management",l={},o=[{value:"Scheduling repeated tasks in Haltdos Platform",id:"scheduling-repeated-tasks-in-haltdos-platform",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"task-management",children:"Task Management"})}),"\n",(0,r.jsx)(n.h3,{id:"scheduling-repeated-tasks-in-haltdos-platform",children:"Scheduling repeated tasks in Haltdos Platform"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Haltdos supports automating repeated tasks such as reports, auto-profiling, periodic learning, scanning, etc. Stack users can configure these schedules as per their choice of periodicity to get automated emails / API alerts from the solution."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"scheduler",src:t(44525).A+"",width:"1908",height:"986"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"System > Settings > Task Management"})]}),"\n",(0,r.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enabled"})}),"\n",(0,r.jsx)(n.p,{children:"Enable it to make the task active"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Task Name"})}),"\n",(0,r.jsx)(n.p,{children:"Users can specify the Task Name as per scheduling task."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Task Occurrence"})}),"\n",(0,r.jsx)(n.p,{children:"It specifies type of occurrence for the task like for Once, minute, hour or daily."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Select the task occurence\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Next Run"})}),"\n",(0,r.jsx)(n.p,{children:"User can specify the date & time for the task"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Timezone"})}),"\n",(0,r.jsx)(n.p,{children:"Select the timezone for the task scheduled."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Select Timezone\n\n    Default: Asia/Calcutta \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Task Type"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the type of task"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Generate Instance Report / Generate App Report / Generate Incident Report / Generate IOC Report / Generate False Positive Report / Generate Task Governance Report\n\n    Default: Generate Instance Report \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Resource"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the listener or  profile"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Select App/Resource\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Dashboard"})}),"\n",(0,r.jsx)(n.p,{children:"Select the dashboard for the report"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Select Dashboard\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Report Duration"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the occurrence of the report"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Select Duration\n\n    Default: Blank \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enable Reporting"})}),"\n",(0,r.jsx)(n.p,{children:"User can Enable / Disable the reporting"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Recipients"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the Recipients"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Enable/Disable\n\n    Default: Disable\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,i={},o=null,d=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:o,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},44525:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/tamanag-25a36b427b6d171d59c302f7ff09ad6b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);