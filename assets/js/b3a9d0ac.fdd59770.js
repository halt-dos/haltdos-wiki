/*! For license information please see b3a9d0ac.fdd59770.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[92124],{90624:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates","title":"SSL Certificates","description":"---","source":"@site/docs/enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates.md","sourceDirName":"enterprise/platform/stacks/resource_content/ssl_certificates","slug":"/enterprise/platform/stacks/resource_content/ssl_certificates/","permalink":"/enterprise/platform/stacks/resource_content/ssl_certificates/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"platform_sidebar","previous":{"title":"Resources","permalink":"/enterprise/platform/stacks/resource_content/"},"next":{"title":"Lets Encrypt Certificates","permalink":"/enterprise/platform/stacks/resource_content/ssl_certificates/lets_encrypt"}}');var s=i(74848),r=i(28453);const c={sidebar_position:1},o="SSL Certificates",l={},a=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Types of supported SSL-Certificate</strong>",id:"types-of-supported-ssl-certificate",level:3},{value:"<strong>Generate Certificate using Let&#39;s Encrypt</strong>",id:"generate-certificate-using-lets-encrypt",level:3},{value:"<strong>Upload Custom Certificate</strong>",id:"upload-custom-certificate",level:3},{value:"Description:",id:"description",level:4}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ssl-certificates",children:"SSL Certificates"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail."}),"\n",(0,s.jsx)(t.p,{children:"Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention."}),"\n",(0,s.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to ",(0,s.jsx)(t.strong,{children:"Stack > Resources > SSL Certificates"})]}),"\n",(0,s.jsx)(t.li,{children:"Configure your settings."}),"\n",(0,s.jsx)(t.li,{children:"Click Save."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ssl_certificates",src:i(38117).A+"",width:"1880",height:"891"})}),"\n",(0,s.jsx)(t.p,{children:"Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"HTTP Validation for single domain certificate"}),"\n",(0,s.jsx)(t.li,{children:"DNS Validation for wildcard certificate"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"note",children:(0,s.jsx)(t.p,{children:"Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates."})}),"\n",(0,s.jsx)(t.h3,{id:"types-of-supported-ssl-certificate",children:(0,s.jsx)(t.strong,{children:"Types of supported SSL-Certificate"})}),"\n",(0,s.jsx)(t.p,{children:"Haltdos supports various types of SSL certificates for a particular domain, which are as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Copy-Paste"})," - The user needs to enter the Public Key and Private Key, then click on ",(0,s.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Upload PFX"})," - The user can choose the PFX file to upload using the Choose File option, enter the Certificate Password, and then select ",(0,s.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Upload PEM"})," - User can upload the respective PEM, Intermediate Certificate file, CA Bundle File, Private Key File then select ",(0,s.jsx)(t.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ssl_certificates",src:i(88972).A+"",width:"954",height:"604"})}),"\n",(0,s.jsx)(t.admonition,{title:"Info",type:"info",children:(0,s.jsxs)(t.p,{children:["Supported SSL certificate Extensions by certificate manager are ",(0,s.jsx)(t.strong,{children:"PFX/P12"}),", ",(0,s.jsx)(t.strong,{children:"PEM"}),", ",(0,s.jsx)(t.strong,{children:"CRT"}),", ",(0,s.jsx)(t.strong,{children:"CER"}),"."]})}),"\n",(0,s.jsx)(t.h3,{id:"generate-certificate-using-lets-encrypt",children:(0,s.jsx)(t.strong,{children:"Generate Certificate using Let's Encrypt"})}),"\n",(0,s.jsx)(t.p,{children:"In order to generate a certificate, it's a three-step based process i.e."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Order Certificate:"})," Select the listener/zone for which you need to order the certificate."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Verify Challenge:"})," Verify the challenge for generating the certificate."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Issue/Renew Certificate:"})," Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 1: Order Certificate"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Select the domain that we are aiming to issue for it."}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Generate"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 2: Verify Certificate"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Select appropriate challenge option i.e. ",(0,s.jsx)(t.strong,{children:"HTTP Challenge or DNS Challenge"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on ",(0,s.jsx)(t.strong,{children:"Verify Challenge"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["We have to wait at least ",(0,s.jsx)(t.strong,{children:"5 minutes"})," duration in order to re-verify the certificate to change the status to update status."]}),"\n",(0,s.jsxs)(t.li,{children:["After 5 minutes, click on ",(0,s.jsx)(t.strong,{children:"Verify Challenge"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Step 3: Issue/Renew Certificate"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Click on Issue/Renew Certificate."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Note",type:"note",children:(0,s.jsx)(t.p,{children:"Certificate verification can fail if verification is not completed within stipulated time.  For any issues, please contact support."})}),"\n",(0,s.jsx)(t.h3,{id:"upload-custom-certificate",children:(0,s.jsx)(t.strong,{children:"Upload Custom Certificate"})}),"\n",(0,s.jsx)(t.p,{children:"To upload custom certificates, follow the steps below:"}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Certificate Name"})}),"\n",(0,s.jsx)(t.p,{children:"User can specify the userfriendly name for the certificate."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Certificate Domain"})}),"\n",(0,s.jsx)(t.p,{children:"User can specify the userfriendly name for the certificate."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Select Domain\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Scope"})}),"\n",(0,s.jsx)(t.p,{children:"Users can defind the scope of the certificate."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Select App / Resources\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Notification"})}),"\n",(0,s.jsx)(t.p,{children:"Users can enable SSL expiry notification, if configured."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Notification Duration"})}),"\n",(0,s.jsx)(t.p,{children:"Users can specify time period for expiry notification."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"    Accepted values: Integer\n\n    Default: 7\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"It is recommended to add certificate chaining when uploading custom SSL certificates. To add certificate chaining, append the public key and the chain when uploading Public Key"})}),"\n",(0,s.jsx)(t.admonition,{title:"Info",type:"info",children:(0,s.jsxs)(t.p,{children:["Haltdos Console does support upload of ",(0,s.jsx)(t.strong,{children:"DV"}),", ",(0,s.jsx)(t.strong,{children:"OV"})," and ",(0,s.jsx)(t.strong,{children:"EV"})," type of SSL certificates. It also supports upload of ",(0,s.jsx)(t.strong,{children:"Single"})," and ",(0,s.jsx)(t.strong,{children:"Multi-Domain"})," Certificates."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,t,i)=>{var n=i(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,i){var n,r={},a=null,d=null;for(n in void 0!==i&&(a=""+i),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!l.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},74848:(e,t,i)=>{e.exports=i(21020)},88972:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ssl-cert-2-69cdac7e570c85a1585198551853a9e6.png"},38117:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ssl-cert-1853e51b4ef9d9dcf59500abff568036.png"},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);