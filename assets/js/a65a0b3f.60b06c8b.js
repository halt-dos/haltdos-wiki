/*! For license information please see a65a0b3f.60b06c8b.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[44593],{74462:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates","title":"SSL Certificates","description":"---","source":"@site/versioned_docs/version-6.0/enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates.md","sourceDirName":"enterprise/platform/stacks/resource_content/ssl_certificates","slug":"/enterprise/platform/stacks/resource_content/ssl_certificates/","permalink":"/v6/enterprise/platform/stacks/resource_content/ssl_certificates/","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"platform_sidebar","previous":{"title":"Encryption Key","permalink":"/v6/enterprise/platform/stacks/resource_content/encryption_key"},"next":{"title":"Lets Encrypt Certificates","permalink":"/v6/enterprise/platform/stacks/resource_content/ssl_certificates/lets_encrypt"}}');var r=i(74848),s=i(28453);const c={sidebar_position:0},o="SSL Certificates",a={},l=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"ssl-certificates",children:"SSL Certificates"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail."}),"\n",(0,r.jsx)(t.p,{children:"Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"ssl certificates",src:i(62644).A+"",width:"541",height:"562"}),"\r\n",(0,r.jsx)(t.img,{alt:"ssl certificates",src:i(84111).A+"",width:"539",height:"537"})]}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"Stack > Resources > SSL Certificates"})]}),"\n",(0,r.jsx)(t.li,{children:"Configure your settings."}),"\n",(0,r.jsx)(t.li,{children:"Click Save."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ssl certificates",src:i(2566).A+"",width:"1920",height:"884"})}),"\n",(0,r.jsx)(t.p,{children:"Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"HTTP Validation for single domain certificate"}),"\n",(0,r.jsx)(t.li,{children:"DNS Validation for wildcard certificate"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Generate Certificate"})}),"\n",(0,r.jsx)(t.p,{children:"In order to generate a certificate, it's a three-step based process i.e."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Order Certificate: Select the listener/zone for which you need to order the certificate."}),"\n",(0,r.jsx)(t.li,{children:"Verify Challenge: Verify the challenge for generating the certificate."}),"\n",(0,r.jsx)(t.li,{children:"Issue/Renew Certificate: Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsx)(t.p,{children:"Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Step 1: Order Certificate"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Select the domain that we are aiming to issue for it."}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Generate"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Step 2: Verify Certificate"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Select appropriate challenge option i.e. ",(0,r.jsx)(t.strong,{children:"HTTP Challenge or DNS Challenge"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Verify Challenge"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["We have to wait at least ",(0,r.jsx)(t.strong,{children:"5 minutes"})," duration in order to re-verify the certificate to change the status to update status."]}),"\n",(0,r.jsxs)(t.li,{children:["After 5 minutes, click on ",(0,r.jsx)(t.strong,{children:"Verify Challenge"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Step 3: Issue/Renew Certificate"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Click on Issue/Renew Certificate."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsx)(t.p,{children:"Certificate verification can fail if verification is not completed within stipulated time.  For any issues, please contact support."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Upload  Certificate"})}),"\n",(0,r.jsx)(t.p,{children:"To upload custom certificates, follow the steps below:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"SETTINGS"}),(0,r.jsx)(t.th,{children:"ACCEPTED VALUE"}),(0,r.jsx)(t.th,{children:"DEFAULT"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Scope"}),(0,r.jsx)(t.td,{children:"Drop-down"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Certificate Name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Public Key"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Private Key"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Scope"})}),"\n",(0,r.jsx)(t.p,{children:"Users can defind the scope of the certificate."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Certificate Name"})}),"\n",(0,r.jsx)(t.p,{children:"User can specify the userfriendly name for the certificate."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Public Key"})}),"\n",(0,r.jsx)(t.p,{children:"User can specify the public key of certificate."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Private Key"})}),"\n",(0,r.jsx)(t.p,{children:"User can specify the private key of certificate."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"It is recommended to add certificate chaining when uploading custom SSL certificates. To add certificate chaining, append the public key and the chain when uploading Public Key"})}),"\n",(0,r.jsx)(t.p,{children:"After submission,  the certificate will be issued and added in the Certificates section."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,i)=>{var n=i(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,i){var n,s={},l=null,d=null;for(n in void 0!==i&&(l=""+i),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,i)=>{e.exports=i(21020)},62644:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ssl_cert1-2208c7a266a07f4f1c760818dbab8abe.png"},84111:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ssl_cert2-9be4bffaf79794504488edcbbe91c160.png"},2566:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/ssl_cert3-335669421cbdd890595371cd0791cf14.png"},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);