/*! For license information please see 8f2d01f1.a10b23d5.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[27565],{98189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"enterprise/vpn/settings/general-settings","title":"General Settings","description":"---","source":"@site/docs/enterprise/vpn/settings/general-settings.md","sourceDirName":"enterprise/vpn/settings","slug":"/enterprise/vpn/settings/general-settings","permalink":"/enterprise/vpn/settings/general-settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"vpn_sidebar","previous":{"title":"Settings","permalink":"/enterprise/vpn/settings/"},"next":{"title":"Networking","permalink":"/enterprise/vpn/settings/networking"}}');var s=t(74848),i=t(28453);const c={sidebar_position:1},l="General Settings",o={},a=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"general-settings",children:"General Settings"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"General settings are used to set configure settings like authentications, TCP and UDP IP address as well as port etc."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"settings",src:t(510).A+"",width:"1895",height:"946"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["First go to ",(0,s.jsx)(n.strong,{children:"Stack"})," > ",(0,s.jsx)(n.strong,{children:"VPN"})," > ",(0,s.jsx)(n.strong,{children:"Settings"})," > ",(0,s.jsx)(n.strong,{children:"General"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Configure the settings as per your requirements."}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Supported Authentication"}),(0,s.jsx)(n.br,{}),"\n","Users can specify the supported authentication scheme. Users  can  select any one from the list mentioned below:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Username with Password"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Client Certificate"})," - Haltdos allows users to set the client certificate to customize connectivity. Users can add certificates as per need. User can add certificate by clicking on add button, it will redirect user to client certificate page where they can add certificate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Active Directory/LDAP"})," - The Lightweight Directory Access Protocol is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an Internet Protocol network."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PAM"})," - If your system supports Pluggable Authentication Modules (PAM), then Haltdos VPN will take advantage of it to password authenticate its users."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SSL Certificate"}),(0,s.jsx)(n.br,{}),"\n","Specify SSL certificate for Encryption / Decryption. Reboot Required"]}),"\n",(0,s.jsx)(n.p,{children:"Accepted Value: Add SSL Certificate"}),"\n",(0,s.jsx)(n.p,{children:"Default: Blank"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n\n**TLS Settings**  \nSpecify allowed TLS settings for negotiation with clients\n\n    Accepted Value: Default/Normal / Support Legacy Client / High Performance /  Secure 256 bit key ciphers / Custom\n\n    Default: Default/Normal\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Enforce DTLS Support"})}),"\n",(0,s.jsx)(n.p,{children:"Specify to use DTLS for VPN connection."}),"\n",(0,s.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,s.jsx)(n.p,{children:"Default: Enable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n\n**Enforce TLS Cipher** \n\nSpecify to enforce TLS cipher for DTLS\n\n    Accepted Value: Enable / Disable\n\n    Default: Enable\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Domain"}),(0,s.jsx)(n.br,{}),"\n","Specify Vpn Domain (eg. vpn.example.com)"]}),"\n",(0,s.jsx)(n.p,{children:"Accepted Value: Enter Domain (string)"}),"\n",(0,s.jsx)(n.p,{children:"Default: Blank"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n\n**Dynamic Hostname**\n\nEnable if hostname has dynamic DNS\n\n    Accepted Value: Enable / Disable\n\n    Default: Enable\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Max Concurrent Clients"})}),"\n",(0,s.jsx)(n.p,{children:"Specify allowed max concurrent clients"}),"\n",(0,s.jsx)(n.p,{children:"Accepted Value: Integer"}),"\n",(0,s.jsx)(n.p,{children:"Default: 500"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n\n**Max Session Per User**  \n\nSpecify max concurrent sessions per user\n\n    Accepted Value: Integer\n\n    Default: 5\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Enable MTU"})}),"\n",(0,s.jsx)(n.p,{children:"Enable MTU discovery"}),"\n",(0,s.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,s.jsx)(n.p,{children:"Default: Enable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n\n**MTU Payload Size**  \n\nSpecify maximum transmission unit size\n\n    Accepted Value: Integer\n\n    Default: 1420\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Enable Compression"})}),"\n",(0,s.jsx)(n.p,{children:"Specify enabling data compression"}),"\n",(0,s.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,s.jsx)(n.p,{children:"Default: Enable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\n\n**Minimum Compression Length**  \n\nSpecify minimum size of packet for compression\n\n    Accepted Value: Integer\n\n    Default: 256\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,d=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:d,props:i,_owner:l.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(21020)},510:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/vpn_general-61641c3d016f5aa5d1c3a8c4d75e2745.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);