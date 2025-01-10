/*! For license information please see b2b80727.52244db5.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[59331],{3480:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"cloud/waf/listener/security-profile/policy/json","title":"JSON Policy","description":"Configure JSON Security Policy for Restful web service","source":"@site/versioned_docs/version-6.0/cloud/waf/listener/security-profile/policy/json.md","sourceDirName":"cloud/waf/listener/security-profile/policy","slug":"/cloud/waf/listener/security-profile/policy/json","permalink":"/v6/cloud/waf/listener/security-profile/policy/json","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"cloud_sidebar","previous":{"title":"Web Policy","permalink":"/v6/cloud/waf/listener/security-profile/policy/web"},"next":{"title":"XML Policy","permalink":"/v6/cloud/waf/listener/security-profile/policy/xml"}}');var t=i(74848),s=i(28453);const l={sidebar_position:2},o="JSON Policy",a={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"json-policy",children:"JSON Policy"})}),"\n",(0,t.jsx)(n.p,{children:"Configure JSON Security Policy for Restful web service"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.strong,{children:"WAF > Zones > Listeners > Security Profiles > Policy > JSON Policy"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"SETTINGS"}),(0,t.jsx)(n.th,{children:"ACCEPTED VALUES"}),(0,t.jsx)(n.th,{children:"DEFAULT"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Maximum Children"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"100"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Maximum Key Name length"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"1000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Maximum Property Value Length"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"1000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Maximum Depth"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"100"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"JSON Example: -"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  {\r\n  "employees": [\r\n  {\r\n    "firstName": "John",\r\n    "lastName": "Doe"\r\n  },\r\n  {\r\n    "firstName": "Anna",\r\n    "lastName": "Smith"\r\n  },\r\n  {\r\n    "firstName": "Peter",\r\n    "lastName": "Jones"\r\n  }\r\n  ]\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maximum Children"})}),"\n",(0,t.jsx)(n.p,{children:"This field specifies the maximum number of keys that a JSON object can have."}),"\n",(0,t.jsx)(n.p,{children:"In the above example, the maximum children's length is 3, i.e. (key employees have 3 children)."}),"\n",(0,t.jsx)(n.p,{children:"A JSON object can have a minimum of 1 key and a maximum of 10000 keys."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maximum Key Name length"})}),"\n",(0,t.jsx)(n.p,{children:"This field specifies the maximum key name length that a JSON object can have."}),"\n",(0,t.jsx)(n.p,{children:"In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9)."}),"\n",(0,t.jsx)(n.p,{children:"A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maximum property value length"})}),"\n",(0,t.jsx)(n.p,{children:"This field specifies the maximum property value size in a JSON object."}),"\n",(0,t.jsx)(n.p,{children:"A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maximum Depth"})}),"\n",(0,t.jsx)(n.p,{children:"This field specifies the maximum depth that a JSON object can have."}),"\n",(0,t.jsx)(n.p,{children:"In the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,n,i)=>{var r=i(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var r,s={},c=null,h=null;for(r in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:t,type:e,key:c,ref:h,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);