/*! For license information please see 964da138.de51865e.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[3565],{92258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"enterprise/platform/system/instance/settings/operational","title":"Operational Setting","description":"---","source":"@site/docs/enterprise/platform/system/instance/settings/operational.md","sourceDirName":"enterprise/platform/system/instance/settings","slug":"/enterprise/platform/system/instance/settings/operational","permalink":"/enterprise/platform/system/instance/settings/operational","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"platform_sidebar","previous":{"title":"Events","permalink":"/enterprise/platform/system/events"},"next":{"title":"Backup Setting","permalink":"/enterprise/platform/system/instance/settings/backup_policy"}}');var i=t(74848),s=t(28453);const l={sidebar_position:1},o="Operational Setting",a={},c=[{value:"How to Use:",id:"how-to-use",level:4},{value:"Description",id:"description",level:3},{value:"Management IP",id:"management-ip",level:5}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"operational-setting",children:"Operational Setting"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"It shows the health status of the Instances, user can select whether to enable the health check or not."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Monitor",src:t(12536).A+"",width:"1908",height:"997"})}),"\n",(0,i.jsx)(n.h4,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"System >Instance > (Select Instance) > Setting > Operational Setting"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"management-ip",children:"Management IP"}),"\n",(0,i.jsx)(n.p,{children:"Configure instance management IP address"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: IP\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Management Port"})}),"\n",(0,i.jsx)(n.p,{children:"Configure instance management port"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 9000\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"SSL Engine"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the engine to be used for SSL Offloading. Requires reboot"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Software Engine / Hardware Engine\n\n    Default: Software Engine\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Operational Mode"})}),"\n",(0,i.jsx)(n.p,{children:"Choose the instance mode of operation. Requires reboot"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Inline Mode / Offline Mode\n\n    Default: Inline Mode \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CPU Affinity"})}),"\n",(0,i.jsx)(n.p,{children:"Configure CPU affinity for optimization. Requires reboot"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Huge Pages"})}),"\n",(0,i.jsx)(n.p,{children:"Configure Huge Pages for optimization. Requires reboot"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Public Certificate File"})}),"\n",(0,i.jsx)(n.p,{children:"Upload public file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Select File to upload\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Intermediate Certificate File"})}),"\n",(0,i.jsx)(n.p,{children:"Upload intermediate file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Select File to upload\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CA Bundle File"})}),"\n",(0,i.jsx)(n.p,{children:"Upload CA bundle"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Select File to upload\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Private Key File"})}),"\n",(0,i.jsx)(n.p,{children:"Upload private file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Select File to upload\n\n    Default: Blank\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var r=t(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},12536:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/sysoperen-572cd65dd7cbfd96417a28700159a555.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);