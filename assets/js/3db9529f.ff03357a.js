/*! For license information please see 3db9529f.ff03357a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[46349],{46380:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"cloud/waf/listener/performance/compression","title":"Compression","description":"Configure compression or decompression of responses","source":"@site/versioned_docs/version-6.0/cloud/waf/listener/performance/compression.md","sourceDirName":"cloud/waf/listener/performance","slug":"/cloud/waf/listener/performance/compression","permalink":"/v6/cloud/waf/listener/performance/compression","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"cloud_sidebar","previous":{"title":"Caching","permalink":"/v6/cloud/waf/listener/performance/caching"},"next":{"title":"RUM Metric","permalink":"/v6/cloud/waf/listener/performance/rum_metric"}}');var o=n(74848),t=n(28453);const i={sidebar_position:3},d="Compression",l={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}];function h(e){const s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"compression",children:"Compression"})}),"\n",(0,o.jsx)(s.p,{children:"Configure compression or decompression of responses"}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(s.p,{children:"Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression."}),"\n",(0,o.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Go to ",(0,o.jsx)(s.strong,{children:"WAF > Zones > Listeners > Performance > Compression"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Add the Compression configuration and click ",(0,o.jsx)(s.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"PARAMETERS"}),(0,o.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,o.jsx)(s.th,{children:"DEFAULT"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Enable Compression"}),(0,o.jsx)(s.td,{children:"Enabled/Disabled"}),(0,o.jsx)(s.td,{children:"Disabled"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Compression Level"}),(0,o.jsx)(s.td,{children:"Integer (1-9)"}),(0,o.jsx)(s.td,{children:"1"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Min Length Compression"}),(0,o.jsx)(s.td,{children:"Length in bytes"}),(0,o.jsx)(s.td,{children:"1000"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Disable Browser Compression"}),(0,o.jsx)(s.td,{children:"Regex"}),(0,o.jsx)(s.td,{children:"blank"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Minimum HTTP version"}),(0,o.jsx)(s.td,{children:"Dropdown"}),(0,o.jsx)(s.td,{children:"HTTP 1.1"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"URI Filter"}),(0,o.jsx)(s.td,{children:"URI Regex"}),(0,o.jsx)(s.td,{children:"Blank"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Proxy Response Filter"}),(0,o.jsx)(s.td,{children:"expired/no-cache/no-store/private/no_last_modified/no_etag/any/auth"}),(0,o.jsx)(s.td,{children:"expired, no-cache, no-store, private, no_last_modified, no_etag, any, auth"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Mime Type Filter"}),(0,o.jsx)(s.td,{children:"Any mime type"}),(0,o.jsx)(s.td,{children:"text/xml , text/plain"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"De-Compression"}),(0,o.jsx)(s.td,{children:"Enabled/Disabled"}),(0,o.jsx)(s.td,{children:"Disabled"})]})]})]}),"\n",(0,o.jsx)(s.h4,{id:"description",children:"Description:"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Enable Compression"}),": To enable compression, enable the toggle button. It compresses the responses to an extent."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Compression Level"}),": The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Min Length Compression"}),": This field specifies the minimum length of the response to be compressed."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Disable Compression"}),": Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Minimum HTTP Version"}),": Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"URI Filter"}),": This field allows to perform compression on the specific URI using one or more regex. If the field is empty then no filter perform."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Proxy Response Filter"}),": This field allows to perform compression on the specific type of HTTP requests."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Mime Type Filter"}),": By default, WAF compresses responses only with MIME-type text/html. To compress responses with other MIME types then include them in this field."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"De-Compression"}),": Some clients do not support responses with the gzip encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client."]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,s,n)=>{var r=n(96540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var r,t={},c=null,h=null;for(r in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(h=s.ref),s)i.call(s,r)&&!l.hasOwnProperty(r)&&(t[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===t[r]&&(t[r]=s[r]);return{$$typeof:o,type:e,key:c,ref:h,props:t,_owner:d.current}}s.Fragment=t,s.jsx=c,s.jsxs=c},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var r=n(96540);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);