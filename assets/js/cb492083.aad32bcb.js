/*! For license information please see cb492083.aad32bcb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[56052],{76748:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"enterprise/waf/listener/performance/rum","title":"RUM Metric","description":"Real User Monitoring (RUM) helps in analyzing website performance (till page metrics) on client side.","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/performance/rum.md","sourceDirName":"enterprise/waf/listener/performance","slug":"/enterprise/waf/listener/performance/rum","permalink":"/v6/enterprise/waf/listener/performance/rum","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Compression","permalink":"/v6/enterprise/waf/listener/performance/compression"},"next":{"title":"Server Groups","permalink":"/v6/enterprise/waf/listener/server_groups/servergroup"}}');var i=n(74848),s=n(28453);const o={},l="RUM Metric",c={},a=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:2}];function d(e){const r={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"rum-metric",children:"RUM Metric"})}),"\n",(0,i.jsx)(r.p,{children:"Real User Monitoring (RUM) helps in analyzing website performance (till page metrics) on client side."}),"\n",(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:"Haltdos provides the user to monitor performance in real-time on the client-side. When the RUM metric is enabled, WAF monitors performance to a specific URI w.r.t. duration set for collecting information for the request. The performance analysis is displayed in terms of statistics on the Analytics page in Real User Monitoring."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"RUM",src:n(54683).A+"",width:"1516",height:"489"})}),"\n",(0,i.jsx)(r.h2,{id:"how-to-use-",children:"How to Use :"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Go to ",(0,i.jsx)(r.strong,{children:"WAF"})," > ",(0,i.jsx)(r.strong,{children:"Listeners"})," > ",(0,i.jsx)(r.strong,{children:"Performance"})," > ",(0,i.jsx)(r.strong,{children:"Rum Metric"})]}),"\n",(0,i.jsxs)(r.li,{children:["Click on ",(0,i.jsx)(r.strong,{children:"Add Configuration"})]}),"\n",(0,i.jsxs)(r.li,{children:["Click on ",(0,i.jsx)(r.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameters"}),(0,i.jsx)(r.th,{children:"Accepted Values"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Enable Rum Metric"}),(0,i.jsx)(r.td,{children:"Enabled/Disabled"}),(0,i.jsx)(r.td,{children:"Disabled"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Duration"}),(0,i.jsx)(r.td,{children:"Integer"}),(0,i.jsx)(r.td,{children:"3600"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Add URI"}),(0,i.jsx)(r.td,{children:"URI"}),(0,i.jsx)(r.td,{children:"Blank"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["1.",(0,i.jsx)(r.strong,{children:"Enable RUM Metric"})]}),"\n",(0,i.jsx)(r.p,{children:"To enable RUM metric, enable the toggle button. It starts to monitor the performance for a specific URI at a defined interval."}),"\n",(0,i.jsxs)(r.p,{children:["2.",(0,i.jsx)(r.strong,{children:"Duration"})]}),"\n",(0,i.jsx)(r.p,{children:"This field specifies the duration for collecting information for the request recursively. The time duration is specified in seconds."}),"\n",(0,i.jsxs)(r.p,{children:["3.",(0,i.jsx)(r.strong,{children:"Add URI"})]}),"\n",(0,i.jsx)(r.p,{children:"This field specifies the URI address where the RUM metric will analyze the performance."})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,r,n)=>{var t=n(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,s={},a=null,d=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:a,ref:d,props:s,_owner:l.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},74848:(e,r,n)=>{e.exports=n(21020)},54683:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/RUM-a23330b206e7f98a2ac1a0128b43b1de.png"},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(96540);const i={},s=t.createContext(i);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);