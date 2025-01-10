/*! For license information please see 40085e6a.03cf713e.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[54334],{48181:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"enterprise/vpn/authentication/tacacs-server","title":"Tacacs Server","description":"---","source":"@site/docs/enterprise/vpn/authentication/tacacs-server.md","sourceDirName":"enterprise/vpn/authentication","slug":"/enterprise/vpn/authentication/tacacs-server","permalink":"/enterprise/vpn/authentication/tacacs-server","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"vpn_sidebar","previous":{"title":"Authentication Settings","permalink":"/enterprise/vpn/authentication/settings"},"next":{"title":"Email Settings","permalink":"/enterprise/vpn/integration/email-settings"}}');var i=r(74848),s=r(28453);const c={sidebar_position:0},o="Tacacs Server",a={},l=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"tacacs-server",children:"Tacacs Server"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"Tacacs Server is configured here."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"settings",src:r(8237).A+"",width:"1895",height:"877"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["First go to ",(0,i.jsx)(n.strong,{children:"Stack"})," > ",(0,i.jsx)(n.strong,{children:"VPN"})," > ",(0,i.jsx)(n.strong,{children:"Authentication"})," > ",(0,i.jsx)(n.strong,{children:"Radius Server"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Configure the settings as per your requirements."}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Enabled"})}),"\n",(0,i.jsx)(n.p,{children:"Enable login through Tacacs Server"}),"\n",(0,i.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,i.jsx)(n.p,{children:"Default: Enable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n\n**Endpoint**\n\nSpecify the endpoint of Tacacs Server\n\n    Accepted Value: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Port"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the port of Tacacs Server"}),"\n",(0,i.jsx)(n.p,{children:"Accepted Value: Integer"}),"\n",(0,i.jsx)(n.p,{children:"Default: Blank"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n\n**Secret Key** \n\nSpecify the secret key of Radius Server\n\n    Accepted Value: String\n\n    Default: Blank\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Authorization Protocol"})}),"\n",(0,i.jsx)(n.p,{children:"Select underlying protocol for Authenticating User"}),"\n",(0,i.jsx)(n.p,{children:"Accepted Value: CHAP / PAP"}),"\n",(0,i.jsx)(n.p,{children:"Default: CHAP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n\n**Timeout** \n\nSpecify the timeout of Tacacs Server\n\n    Accepted Value: Integer\n\n    Default: Blank\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var t=r(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,d=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},8237:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/radius-server-d95f10f7d122dfb5664f4482b2f9becf.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);