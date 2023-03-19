"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(h,l(l({ref:t},m),{},{components:n})):r.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:2},o="JSON Policy",p={unversionedId:"enterprise/waf/listener/profiles/policy/json_policy",id:"enterprise/waf/listener/profiles/policy/json_policy",title:"JSON Policy",description:"Configure JSON Security Policy for Restful web service",source:"@site/docs/enterprise/waf/listener/profiles/policy/json_policy.md",sourceDirName:"enterprise/waf/listener/profiles/policy",slug:"/enterprise/waf/listener/profiles/policy/json_policy",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/policy/json_policy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"WEB Policy",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/policy/web_policy"},next:{title:"XML Policy",permalink:"/haltdos-wiki/enterprise/waf/listener/profiles/policy/xml_policy"}},s={},m=[{value:"Configure JSON Security Policy for Restful web service",id:"configure-json-security-policy-for-restful-web-service",level:4},{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"JSON Example",id:"json-example",level:3},{value:"Description",id:"description",level:2},{value:"<strong>Policy Mode</strong>",id:"policy-mode",level:5},{value:"<strong>Supported Header</strong>",id:"supported-header",level:5},{value:"<strong>Maximum Children</strong>",id:"maximum-children",level:5},{value:"<strong>Maximum Key Name Length</strong>",id:"maximum-key-name-length",level:5},{value:"<strong>Maximum Property Value length</strong>",id:"maximum-property-value-length",level:5},{value:"<strong>Maximum Depth</strong>",id:"maximum-depth",level:5}],u={toc:m},c="wrapper";function d(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)(c,a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"json-policy"}),"JSON Policy"),(0,r.kt)("h4",a({},{id:"configure-json-security-policy-for-restful-web-service"}),"Configure JSON Security Policy for Restful web service"),(0,r.kt)("hr",null),(0,r.kt)("h3",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JSON Policy",src:n(93484).Z,width:"1833",height:"661"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Security Profiles")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"JSON Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h3",a({},{id:"json-example"}),"JSON Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{   \n  "employees": [   \n  {   \n    "firstName": "John",   \n    "lastName": "Doe"   \n  },   \n  {   \n    "firstName": "Anna",   \n    "lastName": "Smith"   \n  },   \n  {   \n    "firstName": "Peter",   \n    "lastName": "Jones"   \n  }   \n  ]   \n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Defaults"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Policy Mode"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Strict")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Supported Header"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Maximum Children"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Maximum Key Name Length"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Maximum Property Value length"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Maximum Depth"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"100")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"policy-mode"}),(0,r.kt)("strong",{parentName:"h5"},"Policy Mode")),(0,r.kt)("p",null,"Users are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for json5."),(0,r.kt)("h5",a({},{id:"supported-header"}),(0,r.kt)("strong",{parentName:"h5"},"Supported Header")),(0,r.kt)("p",null,"Users are allowed to specify supported header i.e. content-type, to identify request as json."),(0,r.kt)("h5",a({},{id:"maximum-children"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Children")),(0,r.kt)("p",null,"This field specifies the maximum number of keys that a JSON object can have.\nIn the above example, the maximum children's length is 3, i.e. (key employees have 3 children).\nA JSON object can have a minimum of 1 key and a maximum of 10000 keys."),(0,r.kt)("h5",a({},{id:"maximum-key-name-length"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Key Name Length")),(0,r.kt)("p",null,"This field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."),(0,r.kt)("h5",a({},{id:"maximum-property-value-length"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Property Value length")),(0,r.kt)("p",null,"This field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."),(0,r.kt)("h5",a({},{id:"maximum-depth"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Depth")),(0,r.kt)("p",null,"This field specifies the maximum depth that a JSON object can have.\nIn the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."))}d.isMDXComponent=!0},93484:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/profile_jsonpolicy-cc21e0e8d223a983ad82aac64bea7875.png"}}]);