"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={sidebar_position:2},l="JSON Policy",s={unversionedId:"enterprise/waf/listener/profiles/policy/json_policy",id:"enterprise/waf/listener/profiles/policy/json_policy",title:"JSON Policy",description:"Configure JSON Security Policy for Restful web service",source:"@site/docs/enterprise/waf/listener/profiles/policy/json_policy.md",sourceDirName:"enterprise/waf/listener/profiles/policy",slug:"/enterprise/waf/listener/profiles/policy/json_policy",permalink:"/enterprise/waf/listener/profiles/policy/json_policy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"WEB Policy",permalink:"/enterprise/waf/listener/profiles/policy/web_policy"},next:{title:"XML Policy",permalink:"/enterprise/waf/listener/profiles/policy/xml_policy"}},p={},c=[{value:"Configure JSON Security Policy for Restful web service",id:"configure-json-security-policy-for-restful-web-service",level:4},{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"JSON Example",id:"json-example",level:3},{value:"Description",id:"description",level:2},{value:"<strong>Policy Mode</strong>",id:"policy-mode",level:5},{value:"<strong>Supported Header</strong>",id:"supported-header",level:5},{value:"<strong>Maximum Children</strong>",id:"maximum-children",level:5},{value:"<strong>Maximum Key Name Length</strong>",id:"maximum-key-name-length",level:5},{value:"<strong>Maximum Property Value length</strong>",id:"maximum-property-value-length",level:5},{value:"<strong>Maximum Depth</strong>",id:"maximum-depth",level:5}],m={toc:c},u="wrapper";function d(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)(u,i({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"json-policy"}),"JSON Policy"),(0,r.kt)("h4",i({},{id:"configure-json-security-policy-for-restful-web-service"}),"Configure JSON Security Policy for Restful web service"),(0,r.kt)("hr",null),(0,r.kt)("h3",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JSON Policy",src:n(69211).Z,width:"1910",height:"900"})),(0,r.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Security Profiles")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"JSON Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h3",i({},{id:"json-example"}),"JSON Example"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'{   \n  "employees": [   \n  {   \n    "firstName": "John",   \n    "lastName": "Doe"   \n  },   \n  {   \n    "firstName": "Anna",   \n    "lastName": "Smith"   \n  },   \n  {   \n    "firstName": "Peter",   \n    "lastName": "Jones"   \n  }   \n  ]   \n}\n')),(0,r.kt)("h2",i({},{id:"description"}),"Description"),(0,r.kt)("h5",i({},{id:"policy-mode"}),(0,r.kt)("strong",{parentName:"h5"},"Policy Mode")),(0,r.kt)("p",null,"Users are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for json5."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: STRICT / RELAX\n\nDefault: STRICT  \n")),(0,r.kt)("h5",i({},{id:"supported-header"}),(0,r.kt)("strong",{parentName:"h5"},"Supported Header")),(0,r.kt)("p",null,"Users are allowed to specify supported header i.e. content-type, to identify request as json."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: application/json \n")),(0,r.kt)("h5",i({},{id:"maximum-children"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Children")),(0,r.kt)("p",null,"This field specifies the maximum number of keys that a JSON object can have.\nIn the above example, the maximum children's length is 3, i.e. (key employees have 3 children).\nA JSON object can have a minimum of 1 key and a maximum of 10000 keys."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0 \n\nDefault: 100 \n")),(0,r.kt)("h5",i({},{id:"maximum-key-name-length"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Key Name Length")),(0,r.kt)("p",null,"This field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0\n\nDefault: 1000\n")),(0,r.kt)("h5",i({},{id:"maximum-property-value-length"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Property Value length")),(0,r.kt)("p",null,"This field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0\n\nDefault: 1000\n")),(0,r.kt)("h5",i({},{id:"maximum-depth"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Depth")),(0,r.kt)("p",null,"This field specifies the maximum depth that a JSON object can have.\nIn the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0\n\nDefault: 100\n")))}d.isMDXComponent=!0},69211:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jsonPolicy-ddee54b33e3701f146db7732aedaf437.png"}}]);