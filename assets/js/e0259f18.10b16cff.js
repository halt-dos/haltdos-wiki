/*! For license information please see e0259f18.10b16cff.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[777],{38023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"docs/waf/policy/json_policy","title":"JSON Policy","description":"Overview","source":"@site/community/docs/waf/policy/json_policy.md","sourceDirName":"docs/waf/policy","slug":"/docs/waf/policy/json_policy","permalink":"/community/docs/waf/policy/json_policy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"community_sidebar","previous":{"title":"WEB Policy","permalink":"/community/docs/waf/policy/web_policy"},"next":{"title":"XML Policy","permalink":"/community/docs/waf/policy/xml_policy"}}');var r=t(74848),s=t(28453);const o={sidebar_position:2},l="JSON Policy",a={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"JSON Example",id:"json-example",level:3},{value:"Description",id:"description",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"json-policy",children:"JSON Policy"})}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"JSON Policy",src:t(7361).A+"",width:"1918",height:"976"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"WAF"})," > ",(0,r.jsx)(n.strong,{children:"Policy"})," > ",(0,r.jsx)(n.strong,{children:"JSON Policy"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Configure your settings."}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"json-example",children:"JSON Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{   \r\n  "employees": [   \r\n  {   \r\n    "firstName": "John",   \r\n    "lastName": "Doe"   \r\n  },   \r\n  {   \r\n    "firstName": "Anna",   \r\n    "lastName": "Smith"   \r\n  },   \r\n  {   \r\n    "firstName": "Peter",   \r\n    "lastName": "Jones"   \r\n  }   \r\n  ]   \r\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameters"}),(0,r.jsx)(n.th,{children:"Accepted Values"}),(0,r.jsx)(n.th,{children:"Defaults"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Policy Mode"}),(0,r.jsx)(n.td,{children:"Drop-down"}),(0,r.jsx)(n.td,{children:"Strict"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Supported Header"}),(0,r.jsx)(n.td,{children:"Drop-Down"}),(0,r.jsx)(n.td,{children:"application/json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Maximum Children"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Maximum Key Name Length"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Maximum Property Value length"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Maximum Depth"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"100"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Policy Mode:"}),"\r\nUsers are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for ",(0,r.jsx)(n.a,{href:"https://json5.org/",children:(0,r.jsx)(n.strong,{children:"json5"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Supported Header:"}),"\r\nUsers are allowed to specify supported header i.e. content-type, to identify request as json."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Maximum Children:"}),"\r\nThis field specifies the maximum number of keys that a JSON object can have.\r\nIn the above example, the maximum children's length is 3, i.e. (key employees have 3 children).\r\nA JSON object can have a minimum of 1 key and a maximum of 10000 keys."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Maximum Key Name Length:"}),"\r\nThis field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Maximum Property Value length:"}),"\r\nThis field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Maximum Depth:"}),"\r\nThis field specifies the maximum depth that a JSON object can have.\r\nIn the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var i=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,s={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!a.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:d,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},7361:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/json-4463147abeb81976a2ee6be18de058ed.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);