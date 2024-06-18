"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[55402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(m,".").concat(d)]||s[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:3},l="XML Policy",m={unversionedId:"enterprise/waf/listener/profiles/policy/xml_policy",id:"version-7.0/enterprise/waf/listener/profiles/policy/xml_policy",title:"XML Policy",description:"Configure XML Security Policy for XML based API web service.",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/profiles/policy/xml_policy.md",sourceDirName:"enterprise/waf/listener/profiles/policy",slug:"/enterprise/waf/listener/profiles/policy/xml_policy",permalink:"/enterprise/waf/listener/profiles/policy/xml_policy",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"waf_sidebar",previous:{title:"JSON Policy",permalink:"/enterprise/waf/listener/profiles/policy/json_policy"},next:{title:"Rules",permalink:"/enterprise/waf/listener/profiles/rules/"}},u={},p=[{value:"Configure XML Security Policy for XML based API web service.",id:"configure-xml-security-policy-for-xml-based-api-web-service",level:4},{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Example :",id:"example-",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Supported Header</strong>",id:"supported-header",level:5},{value:"<strong>Maximum Children</strong>",id:"maximum-children",level:5},{value:"<strong>Maximum Depth</strong>",id:"maximum-depth",level:5},{value:"<strong>Maximum Attributes</strong>",id:"maximum-attributes",level:5},{value:"<strong>Maximum Node Name</strong>",id:"maximum-node-name",level:5},{value:"<strong>Maximum Node Value</strong>",id:"maximum-node-value",level:5},{value:"<strong>Maximum Attribute Name</strong>",id:"maximum-attribute-name",level:5},{value:"<strong>Maximum Attribute Value</strong>",id:"maximum-attribute-value",level:5}],s={toc:p},c="wrapper";function d(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)(c,r({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"xml-policy"}),"XML Policy"),(0,a.kt)("h4",r({},{id:"configure-xml-security-policy-for-xml-based-api-web-service"}),"Configure XML Security Policy for XML based API web service."),(0,a.kt)("hr",null),(0,a.kt)("h3",r({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"XML Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that feature malware XML documents or documents bigger than the allowed size. The owner can set their Minimum & Maximum size limit for the XML document."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Xmlpolicy",src:n(98857).Z,width:"1829",height:"767"})),(0,a.kt)("h3",r({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Policy")," > ",(0,a.kt)("strong",{parentName:"li"},"XML Policy"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("h3",r({},{id:"example-"}),"Example :"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'<bookstore>\n    <book category="children">\n    <title>Harry Potter</title>\n    <author>J K. Rowling</author>\n    <year>2005</year>\n    <price>29.99</price>\n    </book>\n    <book category="web">\n    <title>Learning XML</title>\n    <author>Erik T. Ray</author>\n    <year>2003</year>\n    <price>39.95</price>\n    </book>\n</bookstore> \n')),(0,a.kt)("h3",r({},{id:"description"}),"Description"),(0,a.kt)("h5",r({},{id:"supported-header"}),(0,a.kt)("strong",{parentName:"h5"},"Supported Header")),(0,a.kt)("p",null," Users are allowed to specify supported header i.e. content-type, to identify request as XML."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: String \n\nDefault: application/xml / text/xml\n")),(0,a.kt)("h5",r({},{id:"maximum-children"}),(0,a.kt)("strong",{parentName:"h5"},"Maximum Children")),(0,a.kt)("p",null,"This field specifies the maximum child nodes of the XML document. In the above example, Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<book>")," has 4 children. An XML document can have a minimum of 1 child and a maximum of 10000 children."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 10000\n\nMin: 0\n\nDefault: 100  \n")),(0,a.kt)("h5",r({},{id:"maximum-depth"}),(0,a.kt)("strong",{parentName:"h5"},"Maximum Depth")),(0,a.kt)("p",null,"This field specifies the maximum depth of an XML document. In the above example, maximum depth is 2, Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<book>")," is at depth 1 & children are at depth 2. An XML document can have a minimum depth of 1 and a maximum depth up to 1000000."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 1000000\n\nMin: 0\n\nDefault: 100 \n")),(0,a.kt)("h5",r({},{id:"maximum-attributes"}),(0,a.kt)("strong",{parentName:"h5"},"Maximum Attributes")),(0,a.kt)("p",null,"This field specifies the maximum attributes for a single node of an XML document. In the above example, the maximum attribute is 1, Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<book>")," has 1 attribute. An XML document can have a minimum of 1 attribute and a maximum of 1000 attributes."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000\n\nMin: 0\n\nDefault: 100 \n")),(0,a.kt)("h5",r({},{id:"maximum-node-name"}),(0,a.kt)("strong",{parentName:"h5"},"Maximum Node Name")),(0,a.kt)("p",null,"This field specifies the maximum node name size of an XML document. In the above example, the maximum node name is 9, Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<bookstore>")," length is 9. An XML document can have a minimum of 1 node name size and a maximum of 10000 node name size."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 10000\n\nMin: 0\n\nDefault: 1000 \n")),(0,a.kt)("h5",r({},{id:"maximum-node-value"}),(0,a.kt)("strong",{parentName:"h5"},"Maximum Node Value")),(0,a.kt)("p",null,"This field specifies the maximum node value of the XML document. In the above example, the maximum node value is 12, Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<title>")," has a value of Harry Potter of length 12. An XML document can have a minimum of 1 node value and a maximum of 1000000 node values."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 1000000\n\nMin: 0\n\nDefault: 1000  \n")),(0,a.kt)("h5",r({},{id:"maximum-attribute-name"}),(0,a.kt)("strong",{parentName:"h5"},"Maximum Attribute Name")),(0,a.kt)("p",null,"This field specifies the maximum attribute name size of an XML document. In the above example, the maximum attribute name is 8, Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8. An XML document can have a minimum of 1 attribute name and a maximum of 10000 attribute names."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 10000\n\nMin: 0\n\nDefault: 1000  \n")),(0,a.kt)("h5",r({},{id:"maximum-attribute-value"}),(0,a.kt)("strong",{parentName:"h5"},"Maximum Attribute Value")),(0,a.kt)("p",null,"This field specifies the maximum attribute value size of the XML document. In the above example, the maximum attribute value is 8, Tag ",(0,a.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8. An XML document can have a minimum of 1 attribute value and a maximum of 1000000 attribute value."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 1000000\n\nMin: 0\n\nDefault: 1000\n")))}d.isMDXComponent=!0},98857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/profile_xmlpolicy-e2675b03a5b25767305a34b08ff9b503.png"}}]);