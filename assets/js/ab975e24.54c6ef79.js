/*! For license information please see ab975e24.54c6ef79.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[69178],{37746:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"enterprise/ddos/listeners/ssl_setting","title":"SSL Settings","description":"It provides functionality to support SSL offloading based on configurations.","source":"@site/docs/enterprise/ddos/listeners/ssl_setting.md","sourceDirName":"enterprise/ddos/listeners","slug":"/enterprise/ddos/listeners/ssl_setting","permalink":"/enterprise/ddos/listeners/ssl_setting","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"ddos_sidebar","previous":{"title":"Settings","permalink":"/enterprise/ddos/listeners/settings"},"next":{"title":"Performance","permalink":"/enterprise/ddos/listeners/performance"}}');var i=s(74848),r=s(28453);const o={sidebar_position:3},l="SSL Settings",a={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable SSL Offloading</strong>",id:"enable-ssl-offloading",level:5},{value:"<strong>SSL Certificate</strong>",id:"ssl-certificate",level:5},{value:"<strong>SSL Ciphers Suites</strong>",id:"ssl-ciphers-suites",level:5},{value:"<strong>SSL Session Caching</strong>",id:"ssl-session-caching",level:5},{value:"<strong>SSL Session Timeout</strong>",id:"ssl-session-timeout",level:5}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ssl-settings",children:"SSL Settings"})}),"\n",(0,i.jsx)(n.p,{children:"It provides functionality to support SSL offloading based on configurations."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ssl_setting",src:s(78374).A+"",width:"1402",height:"479"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go To ",(0,i.jsx)(n.strong,{children:"Apps > DDoS > Listeners > SSL Settings"})]}),"\n",(0,i.jsx)(n.li,{children:"Configure the Settings as per requirement."}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h5,{id:"enable-ssl-offloading",children:(0,i.jsx)(n.strong,{children:"Enable SSL Offloading"})}),"\n",(0,i.jsxs)(n.p,{children:["This option helps users to enable SSL offloading for the listener. After enabling the SSL offloading, user should add a valid SSL certificates using ",(0,i.jsx)(n.strong,{children:"SSL Certificate"})," option."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"We can listen to non-HTTPS traffic and send it as HTTPS traffic to the back end server using the settings options."})})}),"\n",(0,i.jsx)(n.h5,{id:"ssl-certificate",children:(0,i.jsx)(n.strong,{children:"SSL Certificate"})}),"\n",(0,i.jsx)(n.p,{children:"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Select the uploaded SSL Certificate \n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about the SSL Certificate, Please refer to this link: ",(0,i.jsx)(n.a,{href:"https://www.digicert.com/what-is-an-ssl-certificate",children:(0,i.jsx)(n.strong,{children:"SSL Certificate"})})]}),"\n",(0,i.jsx)(n.h5,{id:"ssl-ciphers-suites",children:(0,i.jsx)(n.strong,{children:"SSL Ciphers Suites"})}),"\n",(0,i.jsx)(n.p,{children:"In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Modern / Intermediate / Old / Custom \n\n    Default: Blank\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information about Security/Server-Side TLS, please refer to this site: ",(0,i.jsx)(n.a,{href:"https://wiki.mozilla.org/Security/Server_Side_TLS",children:(0,i.jsx)(n.strong,{children:"SSL Cipher Suites"})})]}),"\n",(0,i.jsx)(n.h5,{id:"ssl-session-caching",children:(0,i.jsx)(n.strong,{children:"SSL Session Caching"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify the number of SSL session cache for HTTPS requests on the listener."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer \n\n    Max: 1000\n\n    Min: 1\n\n    Default: 10\n"})}),"\n",(0,i.jsx)(n.h5,{id:"ssl-session-timeout",children:(0,i.jsx)(n.strong,{children:"SSL Session Timeout"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows users to specify the SSL session timeout in minutes for each SSL handshake timeout listener. If any request will not be able to complete the handshake in the given time, it will be dropped."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer \n\n    Max: 3600\n\n    Min: 1\n\n    Default: 5\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var t=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,r={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!a.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,s)=>{e.exports=s(21020)},78374:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ssl-ba3d6a9ae2d12ff11fb58bab87d4c002.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);