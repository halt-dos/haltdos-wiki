/*! For license information please see 5ade40ae.a382d619.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[14458],{86459:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"enterprise/waf/listener/performance/caching","title":"Caching","description":"It store data locally in order to speed up the performance","source":"@site/versioned_docs/version-7.0/enterprise/waf/listener/performance/caching.md","sourceDirName":"enterprise/waf/listener/performance","slug":"/enterprise/waf/listener/performance/caching","permalink":"/v7/enterprise/waf/listener/performance/caching","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Performance","permalink":"/v7/enterprise/waf/listener/performance/"},"next":{"title":"Compression","permalink":"/v7/enterprise/waf/listener/performance/compression"}}');var s=r(74848),t=r(28453);const c={},a="Caching",l={},o=[{value:"It store data locally in order to speed up the performance",id:"it-store-data-locally-in-order-to-speed-up-the-performance",level:5},{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:3},{value:"<strong>Enable Caching</strong>",id:"enable-caching",level:5},{value:"<strong>Re-validate Cache</strong>",id:"re-validate-cache",level:5},{value:"<strong>Enable Background Update</strong>",id:"enable-background-update",level:5},{value:"<strong>Enable Cache Locking</strong>",id:"enable-cache-locking",level:5},{value:"<strong>Cache Methods</strong>",id:"cache-methods",level:5},{value:"<strong>Maximum Request Cache Size</strong>",id:"maximum-request-cache-size",level:5},{value:"<strong>URI Filter</strong>",id:"uri-filter",level:5},{value:"<strong>Mime Type Filter</strong>",id:"mime-type-filter",level:5},{value:"<strong>Use Stale Cache</strong>",id:"use-stale-cache",level:5},{value:"<strong>Response Codes</strong>",id:"response-codes",level:5},{value:"<strong>Minimum Use Before Caching</strong>",id:"minimum-use-before-caching",level:5},{value:"<strong>Cache Validity</strong>",id:"cache-validity",level:5},{value:"<strong>Browser Cache Expiry</strong>",id:"browser-cache-expiry",level:5}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"caching",children:"Caching"})}),"\n",(0,s.jsx)(n.h5,{id:"it-store-data-locally-in-order-to-speed-up-the-performance",children:"It store data locally in order to speed up the performance"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"When caching is enabled, WAF saves responses in a directory and uses them to respond to clients without having to proxy requests for the same content every time."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Caching",src:r(64728).A+"",width:"1831",height:"868"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"caching",src:r(77236).A+"",width:"1578",height:"261"})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use-",children:"How to Use :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"WAF"})," > ",(0,s.jsx)(n.strong,{children:"Listener"})," > ",(0,s.jsx)(n.strong,{children:"Performance"})," > ",(0,s.jsx)(n.strong,{children:"Caching"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Add the Caching Setting"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h5,{id:"enable-caching",children:(0,s.jsx)(n.strong,{children:"Enable Caching"})}),"\n",(0,s.jsx)(n.p,{children:"To enable caching, enable the toggle button. It stores data so that future requests for that data can be served faster."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Disabled\n"})}),"\n",(0,s.jsx)(n.h5,{id:"re-validate-cache",children:(0,s.jsx)(n.strong,{children:"Re-validate Cache"})}),"\n",(0,s.jsx)(n.p,{children:"This toggle button allows the re-validation of expired cache items. It helps in storing the updated data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Enabled\n"})}),"\n",(0,s.jsx)(n.h5,{id:"enable-background-update",children:(0,s.jsx)(n.strong,{children:"Enable Background Update"})}),"\n",(0,s.jsx)(n.p,{children:"This toggle button enables the caching mechanism to update the cache in the background and store the updated data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Disabled\n"})}),"\n",(0,s.jsx)(n.h5,{id:"enable-cache-locking",children:(0,s.jsx)(n.strong,{children:"Enable Cache Locking"})}),"\n",(0,s.jsx)(n.p,{children:"Enable to force caching a resource item to complete before allowing new requests to the same resource item."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Enabled / Disabled\n\n    Default: Disabled\n"})}),"\n",(0,s.jsx)(n.h5,{id:"cache-methods",children:(0,s.jsx)(n.strong,{children:"Cache Methods"})}),"\n",(0,s.jsx)(n.p,{children:"To cache responses to requests with methods other than GET and HEAD, list them along with GET and HEAD as parameters to this field. It specifies the HTTP Methods for which caching will be enforced."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: HTTP Methods\n\n    Default: GET / HEAD\n"})}),"\n",(0,s.jsx)(n.h5,{id:"maximum-request-cache-size",children:(0,s.jsx)(n.strong,{children:"Maximum Request Cache Size"})}),"\n",(0,s.jsx)(n.p,{children:"This field specifies the maximum request size allowed for the caching to store data exceeding which will not be cached."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer    \n\n    Max: 999\n\n    Min: 10\n\n    Default: 500\n"})}),"\n",(0,s.jsx)(n.p,{children:"Metric: mb"}),"\n",(0,s.jsx)(n.h5,{id:"uri-filter",children:(0,s.jsx)(n.strong,{children:"URI Filter"})}),"\n",(0,s.jsx)(n.p,{children:"This field allows performing caching on the specific URI using one or more regex. If the field is empty then no filter perform"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Regex  \n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"mime-type-filter",children:(0,s.jsx)(n.strong,{children:"Mime Type Filter"})}),"\n",(0,s.jsx)(n.p,{children:"This field allows performing caching on the specific Mime type."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,s.jsx)(n.h5,{id:"use-stale-cache",children:(0,s.jsx)(n.strong,{children:"Use Stale Cache"})}),"\n",(0,s.jsx)(n.p,{children:"This field allows to specify the use of stale cache for errors when the back-end server is unavailable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Type of errors to be cached    \n\n    Default: error / invalid_header / updating / timeout / http_500 / http_502 / http_503 / http_504 \n"})}),"\n",(0,s.jsx)(n.h5,{id:"response-codes",children:(0,s.jsx)(n.strong,{children:"Response Codes"})}),"\n",(0,s.jsx)(n.p,{children:"This field specifies the list of HTTP status codes for which response will be cached."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer    \n\n    Default: 200 / 304\n"})}),"\n",(0,s.jsx)(n.h5,{id:"minimum-use-before-caching",children:(0,s.jsx)(n.strong,{children:"Minimum Use Before Caching"})}),"\n",(0,s.jsx)(n.p,{children:"To define the minimum number of times that a request with the same key must be made before the response is cached. It is specified in terms of a number of requests."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Max: 3600\n\n    Min: 1\n\n    Default: 3\n"})}),"\n",(0,s.jsx)(n.h5,{id:"cache-validity",children:(0,s.jsx)(n.strong,{children:"Cache Validity"})}),"\n",(0,s.jsx)(n.p,{children:"To limit how long cached responses with specific status codes are considered valid. It is specified in terms of minutes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer    \n\n    Max:365\n\n    Min:0\n\n    Default: 5\n"})}),"\n",(0,s.jsx)(n.p,{children:"Metric: Minutes"}),"\n",(0,s.jsx)(n.h5,{id:"browser-cache-expiry",children:(0,s.jsx)(n.strong,{children:"Browser Cache Expiry"})}),"\n",(0,s.jsx)(n.p,{children:"Specify the duration of the cached item after which it will be marked in the client's browser. It is specified in terms of days."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Max: 365\n\n    Min: 0\n\n    Default: 7\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,n,r)=>{var i=r(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var i,t={},o=null,d=null;for(i in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,i)&&!l.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:s,type:e,key:o,ref:d,props:t,_owner:a.current}}n.Fragment=t,n.jsx=o,n.jsxs=o},74848:(e,n,r)=>{e.exports=r(21020)},64728:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/performance_caching-3314c2ab07104eedfc42d9ead5e19d3a.png"},77236:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/prformance_caching1-2506d0f9ee210ff19ed17733b1760215.png"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);