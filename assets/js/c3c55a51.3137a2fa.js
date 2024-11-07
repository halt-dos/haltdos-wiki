/*! For license information please see c3c55a51.3137a2fa.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[44209],{61365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"docs/waf/policy/xml_policy","title":"XML Policy","description":"---","source":"@site/community/docs/waf/policy/xml_policy.md","sourceDirName":"docs/waf/policy","slug":"/docs/waf/policy/xml_policy","permalink":"/community/docs/waf/policy/xml_policy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"community_sidebar","previous":{"title":"JSON Policy","permalink":"/community/docs/waf/policy/json_policy"},"next":{"title":"Variables","permalink":"/community/docs/waf/variable"}}');var r=n(74848),s=n(28453);const o={sidebar_position:3},a="XML Policy",d={},l=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Example :",id:"example-",level:3},{value:"Description",id:"description",level:3}];function c(e){const t={br:"br",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"xml-policy",children:"XML Policy"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"XML Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that feature malware XML documents or documents bigger than the allowed size. The owner can set their Minimum & Maximum size limit for the XML document."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"XML Image",src:n(80907).A+"",width:"1918",height:"976"})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Policy"})," > ",(0,r.jsx)(t.strong,{children:"XML Policy"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Configure your settings."}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"example-",children:"Example :"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'<bookstore>\r\n    <book category="children">\r\n    <title>Harry Potter</title>\r\n    <author>J K. Rowling</author>\r\n    <year>2005</year>\r\n    <price>29.99</price>\r\n    </book>\r\n    <book category="web">\r\n    <title>Learning XML</title>\r\n    <author>Erik T. Ray</author>\r\n    <year>2003</year>\r\n    <price>39.95</price>\r\n    </book>\r\n</bookstore> \n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameters"}),(0,r.jsx)(t.th,{children:"Accepted value"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Supported Header"}),(0,r.jsx)(t.td,{children:"Drop-Down"}),(0,r.jsx)(t.td,{children:"Application/xml, text/xml"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Children"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"100"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Depth"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"100"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Attributes"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"100"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Node Name"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Node Value"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Attribute Name"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1000"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Attribute value"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1000"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Supported Header"}),(0,r.jsx)(t.br,{}),"\n","Users are allowed to specify supported header i.e. content-type, to identify request as XML."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Maximum Children"}),(0,r.jsx)(t.br,{}),"\n","This field specifies the maximum child nodes of the XML document. In the above example, Tag ",(0,r.jsx)(t.code,{children:"<book>"})," has 4 children. An XML document can have a minimum of 1 child and a maximum of 10000 children."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Maximum Depth"}),(0,r.jsx)(t.br,{}),"\n","This field specifies the maximum depth of an XML document. In the above example, maximum depth is 2, Tag ",(0,r.jsx)(t.code,{children:"<book>"})," is at depth 1 & children are at depth 2. An XML document can have a minimum depth of 1 and a maximum depth up to 1000000."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Maximum Attributes"}),(0,r.jsx)(t.br,{}),"\n","This field specifies the maximum attributes for a single node of an XML document. In the above example, the maximum attribute is 1, Tag ",(0,r.jsx)(t.code,{children:"<book>"})," has 1 attribute. An XML document can have a minimum of 1 attribute and a maximum of 1000 attributes."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Maximum Node Name"}),(0,r.jsx)(t.br,{}),"\n","This field specifies the maximum node name size of an XML document. In the above example, the maximum node name is 9, Tag ",(0,r.jsx)(t.code,{children:"<bookstore>"})," length is 9. An XML document can have a minimum of 1 node name size and a maximum of 10000 node name size."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Maximum Node Value"}),(0,r.jsx)(t.br,{}),"\n","This field specifies the maximum node value of the XML document. In the above example, the maximum node value is 12, Tag ",(0,r.jsx)(t.code,{children:"<title>"})," has a value of Harry Potter of length 12. An XML document can have a minimum of 1 node value and a maximum of 1000000 node values."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Maximum Attribute Name"}),(0,r.jsx)(t.br,{}),"\n","This field specifies the maximum attribute name size of an XML document. In the above example, the maximum attribute name is 8, Tag ",(0,r.jsx)(t.code,{children:"<book>"})," has an attribute category of length 8. An XML document can have a minimum of 1 attribute name and a maximum of 10000 attribute names."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Maximum Attribute Value"}),(0,r.jsx)(t.br,{}),"\n","This field specifies the maximum attribute value size of the XML document. In the above example, the maximum attribute value is 8, Tag ",(0,r.jsx)(t.code,{children:"<book>"})," has an attribute category of length 8. An XML document can have a minimum of 1 attribute value and a maximum of 1000000 attribute value."]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var i=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!d.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},80907:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/xml_policy-7068a999e871dcfbe4be034cf2fd2708.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);