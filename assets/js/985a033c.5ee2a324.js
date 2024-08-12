"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[96512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={sidebar_position:1},l="Web Security",s={unversionedId:"enterprise/waf/listener/Setting/AdvanceSettings/security",id:"enterprise/waf/listener/Setting/AdvanceSettings/security",title:"Web Security",description:"User can specify Web Security settings on this page for Listener",source:"@site/docs/enterprise/waf/listener/Setting/AdvanceSettings/security.md",sourceDirName:"enterprise/waf/listener/Setting/AdvanceSettings",slug:"/enterprise/waf/listener/Setting/AdvanceSettings/security",permalink:"/v8/enterprise/waf/listener/Setting/AdvanceSettings/security",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"waf_sidebar",previous:{title:"Fingerprint",permalink:"/v8/enterprise/waf/listener/Setting/AdvanceSettings/fingerPrint"},next:{title:"Challenge",permalink:"/v8/enterprise/waf/listener/Setting/AdvanceSettings/challenge-response"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>CSRF Cookie Expiry</strong>",id:"csrf-cookie-expiry",level:5},{value:"<strong>CSRF Token Validity</strong>",id:"csrf-token-validity",level:5},{value:"<strong>Tarpit Delay</strong>",id:"tarpit-delay",level:5},{value:"<strong>Tarpit Duration</strong>",id:"tarpit-duration",level:5},{value:"<strong>Maximum Decode Limit</strong>",id:"maximum-decode-limit",level:5},{value:"<strong>Enable Client-Side Protection</strong>",id:"enable-client-side-protection",level:5},{value:"<strong>Client Encryption Key</strong>",id:"client-encryption-key",level:5}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)(d,i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"web-security"}),"Web Security"),(0,r.kt)("p",null,"User can specify Web Security settings on this page for Listener"),(0,r.kt)("hr",null),(0,r.kt)("h3",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Advance bot settings in order to ensure advanced bot protection."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"websec",src:n(75558).Z,width:"1910",height:"900"})),(0,r.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Advanced Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Security")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("h3",i({},{id:"description"}),"Description"),(0,r.kt)("h5",i({},{id:"csrf-cookie-expiry"}),(0,r.kt)("strong",{parentName:"h5"},"CSRF Cookie Expiry")),(0,r.kt)("p",null,"Users can specify the expiry time of the CSRF cookie in seconds. Set 0 to disable CSRF. This value is dependent on the profile CSRF setting that should be enabled to perform mitigation."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{})," Accepted values: Integer\n\n Default: 0 \n\n Metrics: Seconds\n")),(0,r.kt)("h5",i({},{id:"csrf-token-validity"}),(0,r.kt)("strong",{parentName:"h5"},"CSRF Token Validity")),(0,r.kt)("p",null,"Users can specify the grace time period in seconds for which CSRF token will be allowed."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{})," Accepted values: Integer\n\n Default: 60 \n\n Metrics: Seconds\n")),(0,r.kt)("h5",i({},{id:"tarpit-delay"}),(0,r.kt)("strong",{parentName:"h5"},"Tarpit Delay")),(0,r.kt)("p",null,"Users can specify the tarpit delay."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{})," Accepted values: Integer\n\n Default: 5 \n\n Metrics: Seconds\n")),(0,r.kt)("h5",i({},{id:"tarpit-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Tarpit Duration")),(0,r.kt)("p",null,"Users can specify the tarpit duration."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{})," Accepted values: Integer\n\n Default: 300 \n\n Metrics: Seconds\n")),(0,r.kt)("admonition",i({},{title:"Note ",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Tarpit delay and tarpit duration are two different values. For example, user has created a rule of rate limiting of 5mbps and resultant it'll tarpit the end user IP for the tarpit delay of 5 seconds and tarpit duration is set to 10 minutes. It means the end user IP will be got a tarpit delay for 5 seconds for next 10 minutes. After the time end user's IP will be free from tarpit delay and will start getting normal response from WAF device.")),(0,r.kt)("h5",i({},{id:"maximum-decode-limit"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Decode Limit")),(0,r.kt)("p",null,"Specify the maximum decode limit for encoded character"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{})," Accepted values: Integer\n\n Default: 4 \n")),(0,r.kt)("h5",i({},{id:"enable-client-side-protection"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Client-Side Protection")),(0,r.kt)("p",null,"Enable client-side protection for the application"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{})," Accepted values: Enable / Disable\n\n Default: Disable \n")),(0,r.kt)("h5",i({},{id:"client-encryption-key"}),(0,r.kt)("strong",{parentName:"h5"},"Client Encryption Key")),(0,r.kt)("p",null,"Specify the encryption key which will be used for client-side validation"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{})," Accepted values: Add Encryption Key\n\n Default: Blank\n")))}f.isMDXComponent=!0},75558:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/security-cbae890f98d766e1b5ef4280c5914f87.png"}}]);