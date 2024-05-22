"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[10355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),y=a,d=m["".concat(p,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},75475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:2},l="JSON Policy",p={unversionedId:"community/waf/policy/json_policy",id:"version-7.0/community/waf/policy/json_policy",title:"JSON Policy",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/policy/json_policy.md",sourceDirName:"community/waf/policy",slug:"/community/waf/policy/json_policy",permalink:"/community/waf/policy/json_policy",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"community_sidebar",previous:{title:"WEB Policy",permalink:"/community/waf/policy/web_policy"},next:{title:"XML Policy",permalink:"/community/waf/policy/xml_policy"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:4},{value:"JSON Example",id:"json-example",level:4},{value:"Description",id:"description",level:3}],m={toc:c},u="wrapper";function y(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(u,a({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"json-policy"}),"JSON Policy"),(0,r.kt)("h3",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JSON Policy",src:n(21717).Z,width:"1918",height:"976"})),(0,r.kt)("h4",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"JSON Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h4",a({},{id:"json-example"}),"JSON Example"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'{   \n  "employees": [   \n  {   \n    "firstName": "John",   \n    "lastName": "Doe"   \n  },   \n  {   \n    "firstName": "Anna",   \n    "lastName": "Smith"   \n  },   \n  {   \n    "firstName": "Peter",   \n    "lastName": "Jones"   \n  }   \n  ]   \n}\n')),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy Mode:"),"\nUsers are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for ",(0,r.kt)("a",a({parentName:"p"},{href:"https://json5.org/"}),(0,r.kt)("strong",{parentName:"a"},"json5")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Strict / Relax \n\nDefault: Strict  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported Header:"),"\nUsers are allowed to specify supported header i.e. content-type, to identify request as json."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String \n\nDefault: application/json  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Children:"),"\nThis field specifies the maximum number of keys that a JSON object can have.\nIn the above example, the maximum children's length is 3, i.e. (key employees have 3 children).\nA JSON object can have a minimum of 1 key and a maximum of 2147483647 keys."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0 \n\nDefault: 100  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Key Name Length:"),"\nThis field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 2147483647 as maximum key name length."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0\n\nDefault: 1000  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Property Value length:"),"\nThis field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 2147483647."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0\n\nDefault: 1000  \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Depth:"),"\nThis field specifies the maximum depth that a JSON object can have.\nIn the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 2147483647."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 2147483647\n\nMin: 0\n\nDefault: 100\n")))}y.isMDXComponent=!0},21717:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/json-4463147abeb81976a2ee6be18de058ed.png"}}]);