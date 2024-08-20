"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[55155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),s=r,f=c["".concat(m,".").concat(s)]||c[s]||d[s]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},36801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={sidebar_position:3},l="XML Policy",m={unversionedId:"docs/waf/policy/xml_policy",id:"docs/waf/policy/xml_policy",title:"XML Policy",description:"---",source:"@site/community/docs/waf/policy/xml_policy.md",sourceDirName:"docs/waf/policy",slug:"/docs/waf/policy/xml_policy",permalink:"/community/docs/waf/policy/xml_policy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"community_sidebar",previous:{title:"JSON Policy",permalink:"/community/docs/waf/policy/json_policy"},next:{title:"Variables",permalink:"/community/docs/waf/variable"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Example :",id:"example-",level:3},{value:"Description",id:"description",level:3}],c={toc:u},d="wrapper";function s(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)(d,r({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"xml-policy"}),"XML Policy"),(0,n.kt)("hr",null),(0,n.kt)("h3",r({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"XML Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that feature malware XML documents or documents bigger than the allowed size. The owner can set their Minimum & Maximum size limit for the XML document."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"XML Image",src:a(66428).Z,width:"1918",height:"976"})),(0,n.kt)("h3",r({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Policy")," > ",(0,n.kt)("strong",{parentName:"li"},"XML Policy"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("h3",r({},{id:"example-"}),"Example :"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{}),'<bookstore>\n    <book category="children">\n    <title>Harry Potter</title>\n    <author>J K. Rowling</author>\n    <year>2005</year>\n    <price>29.99</price>\n    </book>\n    <book category="web">\n    <title>Learning XML</title>\n    <author>Erik T. Ray</author>\n    <year>2003</year>\n    <price>39.95</price>\n    </book>\n</bookstore> \n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Parameters"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Accepted value"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Supported Header"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Application/xml, text/xml")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Children"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Depth"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Attributes"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Node Name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Node Value"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Attribute Name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Attribute value"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"1000")))),(0,n.kt)("h3",r({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Supported Header"),(0,n.kt)("br",{parentName:"p"}),"\n","Users are allowed to specify supported header i.e. content-type, to identify request as XML."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Children"),(0,n.kt)("br",{parentName:"p"}),"\n","This field specifies the maximum child nodes of the XML document. In the above example, Tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<book>")," has 4 children. An XML document can have a minimum of 1 child and a maximum of 10000 children."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Depth"),(0,n.kt)("br",{parentName:"p"}),"\n","This field specifies the maximum depth of an XML document. In the above example, maximum depth is 2, Tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<book>")," is at depth 1 & children are at depth 2. An XML document can have a minimum depth of 1 and a maximum depth up to 1000000."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Attributes"),(0,n.kt)("br",{parentName:"p"}),"\n","This field specifies the maximum attributes for a single node of an XML document. In the above example, the maximum attribute is 1, Tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<book>")," has 1 attribute. An XML document can have a minimum of 1 attribute and a maximum of 1000 attributes."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Node Name"),(0,n.kt)("br",{parentName:"p"}),"\n","This field specifies the maximum node name size of an XML document. In the above example, the maximum node name is 9, Tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<bookstore>")," length is 9. An XML document can have a minimum of 1 node name size and a maximum of 10000 node name size."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Node Value"),(0,n.kt)("br",{parentName:"p"}),"\n","This field specifies the maximum node value of the XML document. In the above example, the maximum node value is 12, Tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<title>")," has a value of Harry Potter of length 12. An XML document can have a minimum of 1 node value and a maximum of 1000000 node values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Attribute Name"),(0,n.kt)("br",{parentName:"p"}),"\n","This field specifies the maximum attribute name size of an XML document. In the above example, the maximum attribute name is 8, Tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8. An XML document can have a minimum of 1 attribute name and a maximum of 10000 attribute names."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Attribute Value"),(0,n.kt)("br",{parentName:"p"}),"\n","This field specifies the maximum attribute value size of the XML document. In the above example, the maximum attribute value is 8, Tag ",(0,n.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8. An XML document can have a minimum of 1 attribute value and a maximum of 1000000 attribute value."))}s.isMDXComponent=!0},66428:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xml_policy-7068a999e871dcfbe4be034cf2fd2708.png"}}]);