"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[5167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||k[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:3},i="API Tokens",l={unversionedId:"enterprise/platform/system/integrations/api_tokens",id:"enterprise/platform/system/integrations/api_tokens",title:"API Tokens",description:"Generating API tokens for enabling API functionality",source:"@site/docs/enterprise/platform/system/integrations/api_tokens.md",sourceDirName:"enterprise/platform/system/integrations",slug:"/enterprise/platform/system/integrations/api_tokens",permalink:"/v8/enterprise/platform/system/integrations/api_tokens",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"Config Sync",permalink:"/v8/enterprise/platform/system/integrations/config_sync"},next:{title:"Webhooks",permalink:"/v8/enterprise/platform/system/integrations/webhooks"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Token Name</strong>",id:"token-name",level:5},{value:"<strong>System Access</strong>",id:"system-access",level:5},{value:"<strong>Stack</strong>",id:"stack",level:5},{value:"<strong>Token Access</strong>",id:"token-access",level:5}],u={toc:c},k="wrapper";function m(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(k,o({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"api-tokens"}),"API Tokens"),(0,r.kt)("p",null,"Generating API tokens for enabling API functionality"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Haltdos platform is an API first solution supporting API access via JSON (RESTFul) or XML. To authenticate API requests, API tokens are needed. Access of these tokens can be restricted to READ ONLY or READ AND WRITE."),(0,r.kt)("admonition",o({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"All API requests are ",(0,r.kt)("strong",{parentName:"p"},"Authorization: Bearer ",(0,r.kt)("inlineCode",{parentName:"strong"},"<TOKEN>"))," header. Depending upon requirement, specify ",(0,r.kt)("strong",{parentName:"p"},"Content-Type: application/xml")," for XML and ",(0,r.kt)("strong",{parentName:"p"},"Content-Type"),": ",(0,r.kt)("strong",{parentName:"p"},"application/json")," for JSON output. If not Content-Type header is found, API will resort to JSON output. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apitokens",src:n(94051).Z,width:"1902",height:"900"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apitokens",src:n(16761).Z,width:"1902",height:"900"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack")," > ",(0,r.kt)("strong",{parentName:"li"},"Integration")," > ",(0,r.kt)("strong",{parentName:"li"},"API Tokens")),(0,r.kt)("li",{parentName:"ol"},"Click on the button  Generate API token."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("h3",o({},{id:"description"}),"Description"),(0,r.kt)("h5",o({},{id:"token-name"}),(0,r.kt)("strong",{parentName:"h5"},"Token Name")),(0,r.kt)("p",null,"This feature allows users to enter token name"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"system-access"}),(0,r.kt)("strong",{parentName:"h5"},"System Access")),(0,r.kt)("p",null,"This feature allows users to enable/disable the system access"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"stack"}),(0,r.kt)("strong",{parentName:"h5"},"Stack")),(0,r.kt)("p",null,"This feature allows users to select stack "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select from list of stack\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"token-access"}),(0,r.kt)("strong",{parentName:"h5"},"Token Access")),(0,r.kt)("p",null,"This feature allows users to select Token Access"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: ADMIN / READ / READ AND WRITE\n\nDefault: ADMIN\n")))}m.isMDXComponent=!0},94051:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/apiToken-b64a74115f8d43dc586b600d57b7d35c.png"},16761:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/apiToken2-b5b86261d217b9c180b8a9e302b3703d.png"}}]);