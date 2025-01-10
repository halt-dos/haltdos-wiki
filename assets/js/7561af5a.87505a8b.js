/*! For license information please see 7561af5a.87505a8b.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[56851],{58800:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"enterprise/platform/system/security/password_policy","title":"Password Policy","description":"Password policy for securing user access on Haltdos solutions","source":"@site/docs/enterprise/platform/system/security/password_policy.md","sourceDirName":"enterprise/platform/system/security","slug":"/enterprise/platform/system/security/password_policy","permalink":"/enterprise/platform/system/security/password_policy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"platform_sidebar","previous":{"title":"TACACS","permalink":"/enterprise/platform/system/management/tacacs"},"next":{"title":"Login Banner","permalink":"/enterprise/platform/system/security/login_banner"}}');var t=s(74848),i=s(28453);const o={sidebar_position:1},a="Password Policy",c={},l=[{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Default Password</strong>",id:"default-password",level:5},{value:"<strong>Minimum Length</strong>",id:"minimum-length",level:5},{value:"<strong>Password Expiry</strong>",id:"password-expiry",level:5},{value:"<strong>Contain Uppercase</strong>",id:"contain-uppercase",level:5},{value:"<strong>Contain LowerCase</strong>",id:"contain-lowercase",level:5},{value:"<strong>Contain Special Characters</strong>",id:"contain-special-characters",level:5},{value:"<strong>Contain NUmbers</strong>",id:"contain-numbers",level:5},{value:"<strong>Failed Login Attempts</strong>",id:"failed-login-attempts",level:5},{value:"<strong>Account Lock Duration</strong>",id:"account-lock-duration",level:5}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"password-policy",children:"Password Policy"})}),"\n",(0,t.jsx)(n.p,{children:"Password policy for securing user access on Haltdos solutions"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Haltdos platform allows administrators to configure password policy as per organization's compliances. To avoid weak passwords, administrators can configure fine grained user password policy to ensure secure access to Haltdos appliances. Password policy also supports password rotation, no repeat passwords, etc. to assist administrators enforce compliance."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"password",src:s(47944).A+"",width:"1908",height:"905"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"How to Use:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"System > Security > Password Policy"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Configure your settings"}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h5,{id:"enabled",children:(0,t.jsx)(n.strong,{children:"Enabled"})}),"\n",(0,t.jsx)(n.p,{children:"Enable organization specific password policy"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,t.jsx)(n.h5,{id:"default-password",children:(0,t.jsx)(n.strong,{children:"Default Password"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the default password for system loginmode for new user."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.h5,{id:"minimum-length",children:(0,t.jsx)(n.strong,{children:"Minimum Length"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the minimum length of password."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 6 \n"})}),"\n",(0,t.jsx)(n.h5,{id:"password-expiry",children:(0,t.jsx)(n.strong,{children:"Password Expiry"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the expiry duration of password after which a new password must be set to access HaltDos"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 90 \n"})}),"\n",(0,t.jsx)(n.h5,{id:"contain-uppercase",children:(0,t.jsx)(n.strong,{children:"Contain Uppercase"})}),"\n",(0,t.jsx)(n.p,{children:"Specify if the password must compulsory contain upper case characters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,t.jsx)(n.h5,{id:"contain-lowercase",children:(0,t.jsx)(n.strong,{children:"Contain LowerCase"})}),"\n",(0,t.jsx)(n.p,{children:"Specify if the password must compulsory contain lower case characters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,t.jsx)(n.h5,{id:"contain-special-characters",children:(0,t.jsx)(n.strong,{children:"Contain Special Characters"})}),"\n",(0,t.jsx)(n.p,{children:"Specify if the password must compulsory contain special characters"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,t.jsx)(n.h5,{id:"contain-numbers",children:(0,t.jsx)(n.strong,{children:"Contain NUmbers"})}),"\n",(0,t.jsx)(n.p,{children:"Specify if the password must compulsory contain numbers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,t.jsx)(n.h5,{id:"failed-login-attempts",children:(0,t.jsx)(n.strong,{children:"Failed Login Attempts"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the maximum failed login attempts before the account being locked."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integers\n\n    Default: 3\n"})}),"\n",(0,t.jsx)(n.h5,{id:"account-lock-duration",children:(0,t.jsx)(n.strong,{children:"Account Lock Duration"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the period for which the account will locked after the login failure attempts have triggered."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integers\n\n    Default: 15\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var r=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var r,i={},l=null,d=null;for(r in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:l,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},74848:(e,n,s)=>{e.exports=s(21020)},47944:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/sysPassPolicy-d43504d324c88f8b3c0c3ce100cef846.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);