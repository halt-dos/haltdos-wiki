/*! For license information please see a1500230.57ce472a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[13394],{69807:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"enterprise/vpn/integration/email-settings","title":"Email Settings","description":"---","source":"@site/docs/enterprise/vpn/integration/email-settings.md","sourceDirName":"enterprise/vpn/integration","slug":"/enterprise/vpn/integration/email-settings","permalink":"/enterprise/vpn/integration/email-settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"vpn_sidebar","previous":{"title":"Tacacs Server","permalink":"/enterprise/vpn/authentication/tacacs-server"},"next":{"title":"Webhooks","permalink":"/enterprise/vpn/integration/Webhooks"}}');var r=i(74848),s=i(28453);const l={sidebar_position:1},c="Email Settings",a={},o=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"email-settings",children:"Email Settings"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Users are allowed to set network related configurations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Email",src:i(27275).A+"",width:"1895",height:"877"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Email",src:i(55984).A+"",width:"1895",height:"877"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Stack"})," > ",(0,r.jsx)(n.strong,{children:"VPN"})," > ",(0,r.jsx)(n.strong,{children:"Integration"})," > ",(0,r.jsx)(n.strong,{children:"Email settings"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Configure the settings as per the requirement."}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enable Notifications"})}),"\n",(0,r.jsx)(n.p,{children:"Enable notification via Email"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,r.jsx)(n.p,{children:"Default: Enable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Email Server**  \n\nSpecify Email Server hostname or IP address\n\n    Accepted Value: String\n\n    Default: Blank\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Server Port"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the port to connect to Email Server"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Integer"}),"\n",(0,r.jsx)(n.p,{children:"Default: 0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Connection Timeout**  \n\nSpecify connection timeout to Email Server. Set 0 to disable timeout\n\n    Accepted Value: Integer\n\n    Default: 0\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Socket Timeout"})}),"\n",(0,r.jsx)(n.p,{children:"Specify socket timeout to Email Server. Set 0 to disable timeout"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Integer"}),"\n",(0,r.jsx)(n.p,{children:"Default: 0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Enable Authentication**  \n\nEnable authentication to connect to smtp server\n \n    Accepted Value: Enable / Disable\n\n    Default: Enable\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Email Address"})}),"\n",(0,r.jsx)(n.p,{children:"Specify email address for authenticating to Email Server"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: String"}),"\n",(0,r.jsx)(n.p,{children:"Default: Blank"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Email Password**  \n\nSpecify the password of email address for authenticating to Email Server\n\n    Accepted Value: String\n\n    Default: Blank\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Technical Support"})}),"\n",(0,r.jsx)(n.p,{children:"Enable notification to Haltdos technical support on critical alerts"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,r.jsx)(n.p,{children:"Default: Enable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Encryption Protocol**  \n\nSpecify type of encryption protocol to use when connecting to Email Server\n\n    Accepted Value: SSL / TLS / NONE\n\n    Default: SSL\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"DSN Response"})}),"\n",(0,r.jsx)(n.p,{children:"Specify type of delivery status notification (DSN) response on delivery failure"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Full Message / Header only / None"}),"\n",(0,r.jsx)(n.p,{children:"Default: None"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**DSN Notify**\n\nSpecify when to send delivery status notification (DSN)\n\n    Accepted Value: Success / Failure / None\n\n    Default: None\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enable EHLO"})}),"\n",(0,r.jsx)(n.p,{children:"Specify session timeout for mobile clients"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,r.jsx)(n.p,{children:"Default: Disable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Start TLS**  \n\nUpgrade to SSL/TLS when connecting to Email Server\n \n    Accepted Value: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enable 8-bit Mime"})}),"\n",(0,r.jsx)(n.p,{children:"Enable 8-bit mime to connect to older version of Email Server"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,r.jsx)(n.p,{children:"Default: Disable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Enable Partial Email**  \n\nAllow sending partial emails\n \n    Accepted Value: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enable UserSet"})}),"\n",(0,r.jsx)(n.p,{children:"Enable UserSet to use RSET command instead of NOOP while sending email"}),"\n",(0,r.jsx)(n.p,{children:"Accepted Value: Enable / Disable"}),"\n",(0,r.jsx)(n.p,{children:"Default: Disable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\n\n**Enable Quit Wait**  \n\nEnable to gracefully terminate connection with Email Server\n \n    Accepted Value: Enable / Disable\n\n    Default: Disable\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,i)=>{var t=i(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,i){var t,s={},o=null,d=null;for(t in void 0!==i&&(o=""+i),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:o,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},74848:(e,n,i)=>{e.exports=i(21020)},27275:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/email-setting1-7ec2dce3b1289508845f9a0e6b330958.png"},55984:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/email-setting2-22a330537ac5aa3cab3017eed4f69034.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);