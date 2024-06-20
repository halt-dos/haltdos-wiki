"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[47211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:1},s="AAA Policy",l={unversionedId:"enterprise/platform/stacks/settings/aaa_policy",id:"version-7.0/enterprise/platform/stacks/settings/aaa_policy",title:"AAA Policy",description:"Integration with AAA service for securing access to Haltdos appliances",source:"@site/versioned_docs/version-7.0/enterprise/platform/stacks/settings/aaa_policy.md",sourceDirName:"enterprise/platform/stacks/settings",slug:"/enterprise/platform/stacks/settings/aaa_policy",permalink:"/enterprise/platform/stacks/settings/aaa_policy",draft:!1,tags:[],version:"7.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Settings",permalink:"/enterprise/platform/stacks/settings/"},next:{title:"Forensics",permalink:"/enterprise/platform/stacks/settings/forensics"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}],u={toc:c},m="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(m,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"aaa-policy"}),"AAA Policy"),(0,r.kt)("p",null,"Integration with AAA service for securing access to Haltdos appliances"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"AAA is a standard-based framework used to control who is permitted to use network resources (through authentication), what they are authorized to do (through authorization), and capture the actions performed while accessing the network (through accounting)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authentication - The process by which it can be identified that the user, which wants to access the network resources.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authorization - It provides capabilities to enforce policies on network resources after the user has gained access to the network resources through authentication.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Accounting - It provides means of monitoring and capturing the events done by the user while accessing the network resources."))),(0,r.kt)("p",null,"Haltdos supports built-in integration AAA solutions such as RADIUS or TACACS+. These services ensure authentication, authorization, and accounting when accessing Haltdos appliances."),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Depending upon the organization's policy, if AAA is enabled, the same should also be configured for Haltdos appliances")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aaa_policy",src:n(23733).Z,width:"1805",height:"835"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > Settings > AAA"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")))),(0,r.kt)("h3",a({},{id:"description"}),"Description:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AAA Enabled")),(0,r.kt)("p",null,"This option allows the user to enable or disable the AAA feature. By default, it is set to disable."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Service")),(0,r.kt)("p",null,"This option allows the user to select the type of implementation it can be either ",(0,r.kt)("strong",{parentName:"p"},"TACACS")," or ",(0,r.kt)("strong",{parentName:"p"},"RADIUS"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: TACACS+ / RADIUS\n\nDefault: RADIUS \n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Terminal Access Controller Access Control System")," (TACACS+) is a Cisco proprietary protocol that is used for the communication of the Cisco client and Cisco ACS server. It uses TCP port number ",(0,r.kt)("strong",{parentName:"li"},"49")," which makes it reliable."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remote Access Dial-In User Service")," (RADIUS) is an open standard protocol used for the communication between any vendor AAA client and ACS server. It uses port number ",(0,r.kt)("strong",{parentName:"li"},"1812")," for authentication and authorization and ",(0,r.kt)("em",{parentName:"li"},"1813")," for accounting.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Host Name")),(0,r.kt)("p",null,"This option allows the users to specify the hostname or IP address of ",(0,r.kt)("strong",{parentName:"p"},"AAA")," server."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allow SSH")),(0,r.kt)("p",null,"This option will only apprears when ",(0,r.kt)("strong",{parentName:"p"},"AAA")," type is selected to ",(0,r.kt)("strong",{parentName:"p"},"RADIUS"),". When this option is enabled it allow ",(0,r.kt)("strong",{parentName:"p"},"SSH")," if ",(0,r.kt)("strong",{parentName:"p"},"Radius Server")," is down "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Secret")),(0,r.kt)("p",null,"This option allows the user to mention the credential information to access AAA server."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}d.isMDXComponent=!0},23733:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aaa_policy_newui-3abb87d33e7989eba98f8590290fae3b.png"}}]);