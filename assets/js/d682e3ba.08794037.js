/*! For license information please see d682e3ba.08794037.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[35408],{37365:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"enterprise/platform/system/instance/backuppolicy","title":"Backup Policy","description":"Integration with FTP server and S3 for backing up","source":"@site/versioned_docs/version-7.0/enterprise/platform/system/instance/backuppolicy.md","sourceDirName":"enterprise/platform/system/instance","slug":"/enterprise/platform/system/instance/backuppolicy","permalink":"/v7/enterprise/platform/system/instance/backuppolicy","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"platform_sidebar","previous":{"title":"Analytics","permalink":"/v7/enterprise/platform/system/instance/analytics"},"next":{"title":"Monitor","permalink":"/v7/enterprise/platform/system/instance/monitor"}}');var i=s(74848),r=s(28453);const o={sidebar_position:3},l="Backup Policy",c={},a=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:4},{value:"Description",id:"description",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"backup-policy",children:"Backup Policy"})}),"\n",(0,i.jsx)(n.p,{children:"Integration with FTP server and S3 for backing up"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Haltdos supports periodic or on-demand backup for storing logs and policies to external FTP / SFTP servers and S3 storage. The platform also supports restoring from FTP if needed.\nBy default, Haltdos retains logs locally on the device for a duration of 90 days. This duration can be increased to at most 550 days depending upon organization policy."}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"note",children:(0,i.jsx)(n.p,{children:"It is recommended to configure periodic backup to avoid data loss and ensure log availability for compliance and forensic examination"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Backup Policy1",src:s(50152).A+"",width:"1908",height:"805"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Backup Policy2",src:s(35427).A+"",width:"1891",height:"963"})}),"\n",(0,i.jsx)(n.h4,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Stack"})," > ",(0,i.jsx)(n.strong,{children:"Instances"})," > ",(0,i.jsx)(n.strong,{children:"Backup Policy"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Log Retention Period"})}),"\n",(0,i.jsx)(n.p,{children:"This policy allows users to set the retention period for backups. This policy refers to the number of days for which logs retain locally on the device."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 2 \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Cleanup Enabled"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to enable or disable the backup settings."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"FTP Backup Enabled"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to enable or disable the backup settings."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"FTP Backup Host Name"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify the hostname or IP address of the backup server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"SFTP Enabled"})}),"\n",(0,i.jsx)(n.p,{children:"This option helps to choose if the user wants data transfer is over SFTP (Port 22), otherwise data will transfer using FTP (Port 21). Users can enable or disable the settings as per their chioce. By default, it is set to disable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Disabled\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"FTP Authentication"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to set a user authentication method to access the backup server. By default, this is set to disable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Disabled\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FTP Username"}),"\nUsers can only use this option when Authentication is set to enable. This option allows users to set a username to authenticate the people"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FTP Password"}),"\nThis option allows users to set the desired password to authenticate the user. This option will only be available when authentication is set to enable."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FTP Backup Directory"}),"\nThis option allows users to specify the directory on the backup server where they can use credential information to access the backup server."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"S3 Backup Enabled"}),"\nThis option allows users to enable or disable if the date transfer is over S3."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Disabled\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"S3 Region"}),"\nThis option allows users to specify the AWS region where the S3 bucket is located."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"S3 Bucket Name"}),"\nThis option allows users to specify the container for storing objects in S3."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"S3 Path"}),"\nThis option allows users to specify the directory path for storing logs in S3."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"S3 Access Key"}),"\nThis option allows users to specify the unique identifier of the user or application making the request."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"S3 Secret Key"}),"\nThis option allows users to specify the security credential to access the S3 service."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var t=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,r={},a=null,d=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:a,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},74848:(e,n,s)=>{e.exports=s(21020)},50152:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/backup1-fea5bbf2ce54e90d9b6e0a200c56ebc5.png"},35427:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/backup2-2f7841dd66565965a2e4c9970c411ac6.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);