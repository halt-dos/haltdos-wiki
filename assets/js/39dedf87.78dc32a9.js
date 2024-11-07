/*! For license information please see 39dedf87.78dc32a9.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[66703],{44446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/platform/system/instance/gateway/settings","title":"DHCP Settings","description":"---","source":"@site/docs/enterprise/platform/system/instance/gateway/settings.md","sourceDirName":"enterprise/platform/system/instance/gateway","slug":"/enterprise/platform/system/instance/gateway/settings","permalink":"/enterprise/platform/system/instance/gateway/settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"platform_sidebar","previous":{"title":"DHCP Networks","permalink":"/enterprise/platform/system/instance/gateway/network"},"next":{"title":"Ethernet","permalink":"/enterprise/platform/system/instance/network_settings/ethernet"}}');var i=n(74848),r=n(28453);const a={sidebar_position:2},o="DHCP Settings",l={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Default Lease Time",id:"default-lease-time",level:5},{value:"Max Lease Time",id:"max-lease-time",level:5},{value:"Match by Client Id",id:"match-by-client-id",level:5}];function d(e){const t={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dhcp-settings",children:"DHCP Settings"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"This option allows to configure global settings for DHCP Network."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"dhcp",src:n(12668).A+"",width:"1902",height:"900"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Stack"})," > ",(0,i.jsx)(t.strong,{children:"DHCP"})," > ",(0,i.jsx)(t.strong,{children:"Setiings."})]}),"\n",(0,i.jsx)(t.li,{children:"Edit existing configuration."}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.h5,{id:"default-lease-time",children:"Default Lease Time"}),"\n",(0,i.jsx)(t.p,{children:"When DHCP sends configuration information to a client, the information is sent with a lease time. This is the length of time that the client can use the IP address it has been assigned. The duration of the lease time can be changed according to your specific requirement. Users are allowed to set the Default Lease Time for each IP that has been assigned to clients."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 3600\n"})}),"\n",(0,i.jsx)(t.p,{children:"During the lease time, the DHCP server cannot assign that IP address to any other clients."}),"\n",(0,i.jsx)(t.h5,{id:"max-lease-time",children:"Max Lease Time"}),"\n",(0,i.jsx)(t.p,{children:"This option allows users to set the maximum lease time for the IP assigned to the host device."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 7200\n"})}),"\n",(0,i.jsx)(t.h5,{id:"match-by-client-id",children:"Match by Client Id"}),"\n",(0,i.jsx)(t.p,{children:"Enabling IP lookup on the basis of Client ID"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var s=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,r={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},12668:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/dhcp_setting-4853c6ecde36a77e9ff4fb75a7dc785b.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);