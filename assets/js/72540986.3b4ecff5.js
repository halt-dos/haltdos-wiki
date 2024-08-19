"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[20616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={},s="Web Security",l={unversionedId:"enterprise/waf/listener/advance-settings/websec",id:"version-7.0/enterprise/waf/listener/advance-settings/websec",title:"Web Security",description:"User can specify Web Security settings on this page for Listener",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/advance-settings/websec.md",sourceDirName:"enterprise/waf/listener/advance-settings",slug:"/enterprise/waf/listener/advance-settings/websec",permalink:"/v7/enterprise/waf/listener/advance-settings/websec",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Fingerprint",permalink:"/v7/enterprise/waf/listener/advance-settings/fingerprint"},next:{title:"Rule Staging",permalink:"/v7/enterprise/waf/listener/rulestaging"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>CSRF Cookie Expiry</strong>",id:"csrf-cookie-expiry",level:5},{value:"<strong>CSRF Token Validity</strong>",id:"csrf-token-validity",level:5},{value:"<strong>Tarpit Delay</strong>",id:"tarpit-delay",level:5},{value:"<strong>Tarpit Duration</strong>",id:"tarpit-duration",level:5}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(d,i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"web-security"}),"Web Security"),(0,n.kt)("p",null,"User can specify Web Security settings on this page for Listener"),(0,n.kt)("hr",null),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Advance bot settings in order to ensure advanced bot protection."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"websec",src:r(26530).Z,width:"1914",height:"1009"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Advanced Settings")," > ",(0,n.kt)("strong",{parentName:"li"},"Bot Settings")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("h5",i({},{id:"csrf-cookie-expiry"}),(0,n.kt)("strong",{parentName:"h5"},"CSRF Cookie Expiry")),(0,n.kt)("p",null,"Users can specify the expiry time of the CSRF cookie in seconds. Set 0 to disable CSRF. This value is dependent on the profile CSRF setting that should be enabled to perform mitigation."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n\nMetrics: Seconds\n")),(0,n.kt)("h5",i({},{id:"csrf-token-validity"}),(0,n.kt)("strong",{parentName:"h5"},"CSRF Token Validity")),(0,n.kt)("p",null,"Users can specify the grace time period in seconds for which CSRF token will be allowed."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 60 \n\nMetrics: Seconds\n")),(0,n.kt)("h5",i({},{id:"tarpit-delay"}),(0,n.kt)("strong",{parentName:"h5"},"Tarpit Delay")),(0,n.kt)("p",null,"Users can specify the tarpit delay."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 5 \n\nMetrics: Seconds\n")),(0,n.kt)("h5",i({},{id:"tarpit-duration"}),(0,n.kt)("strong",{parentName:"h5"},"Tarpit Duration")),(0,n.kt)("p",null,"Users can specify the tarpit duration."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 300 \n\nMetrics: Seconds\n")),(0,n.kt)("admonition",i({},{title:"Note ",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Tarpit delay and tarpit duration are two different values. For example, user has created a rule of rate limiting of 5mbps and resultant it'll tarpit the end user IP for the tarpit delay of 5 seconds and tarpit duration is set to 10 minutes. It means the end user IP will be got a tarpit delay for 5 seconds for next 10 minutes. After the time end user's IP will be free from tarpit delay and will start getting normal response from WAF device.")))}f.isMDXComponent=!0},26530:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/websec-d3cc5a94256da569b82d0e9baa5d6dea.png"}}]);