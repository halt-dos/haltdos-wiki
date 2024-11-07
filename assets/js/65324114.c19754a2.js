/*! For license information please see 65324114.c19754a2.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[36889],{81910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"cloud/waf/listener/Setting/security","title":"Security","description":"User can specify Web Security settings on this page for Listener","source":"@site/docs/cloud/waf/listener/Setting/security.md","sourceDirName":"cloud/waf/listener/Setting","slug":"/cloud/waf/listener/Setting/security","permalink":"/cloud/waf/listener/Setting/security","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"cloud_sidebar","previous":{"title":"Challenge-Response","permalink":"/cloud/waf/listener/Setting/challenge-response"},"next":{"title":"SSL Management","permalink":"/cloud/waf/listener/ssl_management"}}');var r=t(74848),s=t(28453);const o={sidebar_position:6},l="Security",c={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>CSRF Cookie Expiry</strong>",id:"csrf-cookie-expiry",level:5},{value:"<strong>CSRF Token Validity</strong>",id:"csrf-token-validity",level:5},{value:"<strong>Tarpit Delay</strong>",id:"tarpit-delay",level:5},{value:"<strong>Tarpit Duration</strong>",id:"tarpit-duration",level:5},{value:"<strong>Maximum Decode Limit</strong>",id:"maximum-decode-limit",level:5},{value:"<strong>Enable Client-Side Protection</strong>",id:"enable-client-side-protection",level:5},{value:"<strong>Client Encryption Key</strong>",id:"client-encryption-key",level:5}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"security",children:"Security"})}),"\n",(0,r.jsx)(n.p,{children:"User can specify Web Security settings on this page for Listener"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Advance bot settings in order to ensure advanced bot protection."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"websec",src:t(26567).A+"",width:"1910",height:"900"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"WAF"})," > ",(0,r.jsx)(n.strong,{children:"Listeners"})," > ",(0,r.jsx)(n.strong,{children:"Advanced Settings"})," > ",(0,r.jsx)(n.strong,{children:"Security"})]}),"\n",(0,r.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h5,{id:"csrf-cookie-expiry",children:(0,r.jsx)(n.strong,{children:"CSRF Cookie Expiry"})}),"\n",(0,r.jsx)(n.p,{children:"Users can specify the expiry time of the CSRF cookie in seconds. Set 0 to disable CSRF. This value is dependent on the profile CSRF setting that should be enabled to perform mitigation."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,r.jsx)(n.p,{children:"Metrics: Seconds"}),"\n",(0,r.jsx)(n.h5,{id:"csrf-token-validity",children:(0,r.jsx)(n.strong,{children:"CSRF Token Validity"})}),"\n",(0,r.jsx)(n.p,{children:"Users can specify the grace time period in seconds for which CSRF token will be allowed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 60 \n"})}),"\n",(0,r.jsx)(n.p,{children:"Metrics: Seconds"}),"\n",(0,r.jsx)(n.h5,{id:"tarpit-delay",children:(0,r.jsx)(n.strong,{children:"Tarpit Delay"})}),"\n",(0,r.jsx)(n.p,{children:"Users can specify the tarpit delay."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 5 \n"})}),"\n",(0,r.jsx)(n.p,{children:"Metrics: Seconds"}),"\n",(0,r.jsx)(n.h5,{id:"tarpit-duration",children:(0,r.jsx)(n.strong,{children:"Tarpit Duration"})}),"\n",(0,r.jsx)(n.p,{children:"Users can specify the tarpit duration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 300 \n"})}),"\n",(0,r.jsx)(n.p,{children:"Metrics: Seconds"}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"note",children:(0,r.jsx)(n.p,{children:"Tarpit delay and tarpit duration are two different values. For example, user has created a rule of rate limiting of 5mbps and resultant it'll tarpit the end user IP for the tarpit delay of 5 seconds and tarpit duration is set to 10 minutes. It means the end user IP will be got a tarpit delay for 5 seconds for next 10 minutes. After the time end user's IP will be free from tarpit delay and will start getting normal response from WAF device."})}),"\n",(0,r.jsx)(n.h5,{id:"maximum-decode-limit",children:(0,r.jsx)(n.strong,{children:"Maximum Decode Limit"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the maximum decode limit for encoded character"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 4 \n"})}),"\n",(0,r.jsx)(n.h5,{id:"enable-client-side-protection",children:(0,r.jsx)(n.strong,{children:"Enable Client-Side Protection"})}),"\n",(0,r.jsx)(n.p,{children:"Enable client-side protection for the application"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,r.jsx)(n.h5,{id:"client-encryption-key",children:(0,r.jsx)(n.strong,{children:"Client Encryption Key"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the encryption key which will be used for client-side validation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Add Encryption Key\n\n    Default: Blank \n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},21020:(e,n,t)=>{var i=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,s={},d=null,a=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:a,props:s,_owner:l.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},26567:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/security-cbae890f98d766e1b5ef4280c5914f87.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);