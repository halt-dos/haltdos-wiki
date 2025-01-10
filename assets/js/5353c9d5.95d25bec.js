/*! For license information please see 5353c9d5.95d25bec.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[95114],{72798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"enterprise/platform/stacks/resource_content/certificate_auth","title":"Certificate Authorities","description":"---","source":"@site/docs/enterprise/platform/stacks/resource_content/certificate_auth.md","sourceDirName":"enterprise/platform/stacks/resource_content","slug":"/enterprise/platform/stacks/resource_content/certificate_auth","permalink":"/enterprise/platform/stacks/resource_content/certificate_auth","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"platform_sidebar","previous":{"title":"Client Certificates","permalink":"/enterprise/platform/stacks/resource_content/client_cert"},"next":{"title":"Revocation List","permalink":"/enterprise/platform/stacks/resource_content/revocation_list"}}');var i=r(74848),s=r(28453);const c={sidebar_position:3},o="Certificate Authorities",a={},l=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}];function d(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"certificate-authorities",children:"Certificate Authorities"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"A certificate authority (CA) is a trusted entity that issues Secure Sockets Layer (SSL) certificates. These digital certificates are data files used to cryptographically link an entity with a public key. Web browsers use them to authenticate content sent from web servers, ensuring trust in content delivered online."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"certificate_auth",src:r(96646).A+"",width:"1880",height:"891"})}),"\n",(0,i.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to ",(0,i.jsx)(t.strong,{children:"Stack > Resources  > Certificate Authorities"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Select the ",(0,i.jsx)(t.strong,{children:"Add Certificate Authority."})]}),"\n",(0,i.jsx)(t.li,{children:"Configure your settings."}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save Changes."})]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"CA Name"})}),"\n",(0,i.jsx)(t.p,{children:"Users can specify the name of the certificate name."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Scope"})}),"\n",(0,i.jsx)(t.p,{children:"It specifies the particular desired resources on which user wants to create certificate."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: Select Scope\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Organization"})}),"\n",(0,i.jsx)(t.p,{children:"Users can specify the name of the organization"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Common Name"})}),"\n",(0,i.jsx)(t.p,{children:"Users can specify the name of the Domain Name."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"})," - Under ",(0,i.jsx)(t.strong,{children:"Content"})," Public Key and Private Key will be generated. User have configure Certificate Authority details and Click ",(0,i.jsx)(t.strong,{children:"Generate Certificate"}),", public and private key (pem format) will be generated."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,t,r)=>{var n=r(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,r)=>{e.exports=r(21020)},96646:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/certificate_auth-aae0f90b2c478cd4cede70185b3faaa7.png"},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);