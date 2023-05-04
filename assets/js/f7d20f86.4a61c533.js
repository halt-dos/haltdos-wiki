"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[61730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={sidebar_position:2},l="JSON Policy",p={unversionedId:"community/docs/waf/policy/json_policy",id:"version-6.0/community/docs/waf/policy/json_policy",title:"JSON Policy",description:"Overview",source:"@site/versioned_docs/version-6.0/community/docs/waf/policy/json_policy.md",sourceDirName:"community/docs/waf/policy",slug:"/community/docs/waf/policy/json_policy",permalink:"/haltdos-wiki/v6/community/docs/waf/policy/json_policy",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"community_sidebar",previous:{title:"WEB Policy",permalink:"/haltdos-wiki/v6/community/docs/waf/policy/web_policy"},next:{title:"XML Policy",permalink:"/haltdos-wiki/v6/community/docs/waf/policy/xml_policy"}},m={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"JSON Example",id:"json-example",level:3},{value:"Description",id:"description",level:2}],c={toc:s},u="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)(u,r({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"json-policy"}),"JSON Policy"),(0,a.kt)("h3",r({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JSON Policy",src:n(21717).Z,width:"1918",height:"976"})),(0,a.kt)("h3",r({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Policy")," > ",(0,a.kt)("strong",{parentName:"li"},"JSON Policy"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("h3",r({},{id:"json-example"}),"JSON Example"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),'{   \n  "employees": [   \n  {   \n    "firstName": "John",   \n    "lastName": "Doe"   \n  },   \n  {   \n    "firstName": "Anna",   \n    "lastName": "Smith"   \n  },   \n  {   \n    "firstName": "Peter",   \n    "lastName": "Jones"   \n  }   \n  ]   \n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Accepted Values"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Defaults"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Policy Mode"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Strict")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Supported Header"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Drop-Down"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"application/json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Children"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Key Name Length"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Property Value length"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Maximum Depth"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"100")))),(0,a.kt)("h2",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Policy Mode:"),"\nUsers are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for ",(0,a.kt)("a",r({parentName:"p"},{href:"https://json5.org/"}),(0,a.kt)("strong",{parentName:"a"},"json5")),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supported Header:"),"\nUsers are allowed to specify supported header i.e. content-type, to identify request as json."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Children:"),"\nThis field specifies the maximum number of keys that a JSON object can have.\nIn the above example, the maximum children's length is 3, i.e. (key employees have 3 children).\nA JSON object can have a minimum of 1 key and a maximum of 10000 keys."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Key Name Length:"),"\nThis field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Property Value length:"),"\nThis field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Depth:"),"\nThis field specifies the maximum depth that a JSON object can have.\nIn the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."))}d.isMDXComponent=!0},21717:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/json-4463147abeb81976a2ee6be18de058ed.png"}}]);