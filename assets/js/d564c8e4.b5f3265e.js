"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[91322],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:3},s="AAA Policy",l={unversionedId:"enterprise/platform/system/security/aaa_policy",id:"enterprise/platform/system/security/aaa_policy",title:"AAA Policy",description:"Integration with AAA service for securing access to Haltdos appliances",source:"@site/docs/enterprise/platform/system/security/aaa_policy.md",sourceDirName:"enterprise/platform/system/security",slug:"/enterprise/platform/system/security/aaa_policy",permalink:"/v8/enterprise/platform/system/security/aaa_policy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"Password Policy",permalink:"/v8/enterprise/platform/system/security/password_policy"},next:{title:"Audit Trail",permalink:"/v8/enterprise/platform/system/security/audit_trail"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}],u={toc:c},m="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(m,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"aaa-policy"}),"AAA Policy"),(0,n.kt)("p",null,"Integration with AAA service for securing access to Haltdos appliances"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"AAA is a standard-based framework used to control who is permitted to use network resources (through authentication), what they are authorized to do (through authorization), and capture the actions performed while accessing the network (through accounting)."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Authentication - The process by which it can be identified that the user, which wants to access the network resources.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Authorization - It provides capabilities to enforce policies on network resources after the user has gained access to the network resources through authentication.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Accounting - It provides means of monitoring and capturing the events done by the user while accessing the network resources."))),(0,n.kt)("p",null,"Haltdos supports built-in integration AAA solutions such as RADIUS or TACACS+. These services ensure authentication, authorization, and accounting when accessing Haltdos appliances."),(0,n.kt)("admonition",a({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Depending upon the organization's policy, if AAA is enabled, the same should also be configured for Haltdos appliances")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"aaa_policy",src:r(87074).Z,width:"1902",height:"900"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"System > Security > AAA"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")))),(0,n.kt)("h3",a({},{id:"description"}),"Description:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AAA Enabled")),(0,n.kt)("p",null,"This option allows the user to enable or disable the AAA feature. By default, it is set to disable."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Service")),(0,n.kt)("p",null,"This option allows the user to select the type of implementation it can be either ",(0,n.kt)("strong",{parentName:"p"},"TACACS")," or ",(0,n.kt)("strong",{parentName:"p"},"RADIUS"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: TACACS+ / RADIUS\n\nDefault: RADIUS \n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Terminal Access Controller Access Control System")," (TACACS+) is a Cisco proprietary protocol that is used for the communication of the Cisco client and Cisco ACS server. It uses TCP port number ",(0,n.kt)("strong",{parentName:"li"},"49")," which makes it reliable."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Remote Access Dial-In User Service")," (RADIUS) is an open standard protocol used for the communication between any vendor AAA client and ACS server. It uses port number ",(0,n.kt)("strong",{parentName:"li"},"1812")," for authentication and authorization and ",(0,n.kt)("em",{parentName:"li"},"1813")," for accounting.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Host Name")),(0,n.kt)("p",null,"This option allows the users to specify the hostname or IP address of ",(0,n.kt)("strong",{parentName:"p"},"AAA")," server."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Allow SSH")),(0,n.kt)("p",null,"This option will only apprears when ",(0,n.kt)("strong",{parentName:"p"},"AAA")," type is selected to ",(0,n.kt)("strong",{parentName:"p"},"RADIUS"),". When this option is enabled it allow ",(0,n.kt)("strong",{parentName:"p"},"SSH")," if ",(0,n.kt)("strong",{parentName:"p"},"Radius Server")," is down "),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Secret")),(0,n.kt)("p",null,"This option allows the user to mention the credential information to access AAA server."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}d.isMDXComponent=!0},87074:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/AAAPolicy-e9ddfd90b34fe7ccdbf5a60b04401c25.png"}}]);