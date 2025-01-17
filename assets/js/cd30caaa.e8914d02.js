/*! For license information please see cd30caaa.e8914d02.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[24733],{30793:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"kb/waf/kb-1076","title":"KB: 1076","description":"Renew SSL Certificate using Let\'s Encrypt HTTP Challenge","source":"@site/docs/kb/waf/kb-1076.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1076","permalink":"/kb/waf/kb-1076","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":76,"frontMatter":{"sidebar_position":76},"sidebar":"kb_sidebar","previous":{"title":"KB: 1075","permalink":"/kb/waf/kb-1075"},"next":{"title":"KB: 1077","permalink":"/kb/waf/kb-1077"}}');var s=i(74848),r=i(28453);const l={sidebar_position:76},c="KB: 1076",o={},a=[{value:"<strong>Renew SSL Certificate using Let&#39;s Encrypt HTTP Challenge</strong>",id:"renew-ssl-certificate-using-lets-encrypt-http-challenge",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:3},{value:"<strong>Pre-requistics</strong>",id:"pre-requistics",level:3},{value:"<strong>Solution</strong>",id:"solution",level:3}];function d(e){const n={admonition:"admonition",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kb-1076",children:"KB: 1076"})}),"\n",(0,s.jsx)(n.h3,{id:"renew-ssl-certificate-using-lets-encrypt-http-challenge",children:(0,s.jsx)(n.strong,{children:"Renew SSL Certificate using Let's Encrypt HTTP Challenge"})}),"\n",(0,s.jsx)(n.h3,{id:"problem-statement",children:(0,s.jsx)(n.strong,{children:"Problem Statement"})}),"\n",(0,s.jsx)(n.p,{children:"End-user want to renew existing Let's Encrypt certificate for FQDN that configured behind the Haltdos WAF to achive below operation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Re-issue valid certificate from trusted certificate authority"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"pre-requistics",children:(0,s.jsx)(n.strong,{children:"Pre-requistics"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FQDN (Fully Qualified Domain Name) should be behind Haltdos WAF (for HTTP challenge) and accessible from public internet"}),"\n",(0,s.jsx)(n.li,{children:"Haltdos Console login with minimum READ_WRITE access."}),"\n",(0,s.jsx)(n.li,{children:"OLD SSL certificate attached to listener/website."}),"\n",(0,s.jsx)(n.li,{children:"Connectivity based on challenge as follows\nFor HTTP challenge, no geo-filtering policy enforced on the FQDN public IP"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"For HTTP challenge, verify no Geo/IP blocking policy on the network and web application firewall to avoid failure of the verification request.\nLet's Encrypt issue SSL certificate with validity of 3 months from the date of issue."}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"solution",children:(0,s.jsx)(n.strong,{children:"Solution"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Check current SSL certificate"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SSL certificate issued for domain ",(0,s.jsx)(n.strong,{children:"example.hltdos.com"}),"\n",(0,s.jsx)(n.img,{alt:"ssl-settings",src:i(64458).A+"",width:"1633",height:"932"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Verify SSL certificate is expired for the website\n",(0,s.jsx)(n.img,{alt:"ssl-expiry-browser",src:i(31482).A+"",width:"1560",height:"949"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Renew SSL certificate"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Resources"})," > ",(0,s.jsx)(n.strong,{children:"SSL certificate"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Refresh icon"})," on the SSL certificate"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1009",src:i(92472).A+"",width:"1615",height:"1023"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Renew"})," button"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1009",src:i(58968).A+"",width:"1515",height:"984"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"SSL renew process take some time to verify and issue certificate with Let's Encrypt."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SSL certificate updated on Haltdos console and deployed to WAF machine."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1009",src:i(84332).A+"",width:"1635",height:"937"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"SSL challenge can be failed to misconfiguration or failure due to verification issue."}),(0,s.jsx)(n.p,{children:"On failure on the multiple SSL renew, it is recommended to issue new certificate."})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verify SSL cerificate"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"SSL certificate is updated on the website."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1009",src:i(4273).A+"",width:"1334",height:"1033"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,i)=>{var t=i(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,i){var t,r={},a=null,d=null;for(t in void 0!==i&&(a=""+i),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,t)&&!o.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:d,props:r,_owner:c.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},74848:(e,n,i)=>{e.exports=i(21020)},64458:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/app-verify-e3231ac244f0aaa1aaa9871ca5f7059d.png"},92472:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/renew-icon-9bf18442da6dc7b30a6e7cb75a1b04c0.png"},58968:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/renew-modal-7f0d2adbd97cab273cc0c5cb6a704a8c.png"},4273:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/verify-application-959ed1bb917cf9f999ebf0eed98a510d.png"},31482:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/verify-expiry-4793825b1f5285ae515c2e98341f53e5.png"},84332:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/verify-renew-661b1447103d9d53e18fe2d7a253a4a7.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);