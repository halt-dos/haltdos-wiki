"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[45641],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17662:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={sidebar_position:1},l="AAA Policy",s={unversionedId:"enterprise/platform/stacks/settings/aaa_policy",id:"enterprise/platform/stacks/settings/aaa_policy",title:"AAA Policy",description:"Integration with AAA service for securing access to Haltdos appliances",source:"@site/docs/enterprise/platform/stacks/settings/aaa_policy.md",sourceDirName:"enterprise/platform/stacks/settings",slug:"/enterprise/platform/stacks/settings/aaa_policy",permalink:"/v8/enterprise/platform/stacks/settings/aaa_policy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Settings",permalink:"/v8/enterprise/platform/stacks/settings/"},next:{title:"Forensics",permalink:"/v8/enterprise/platform/stacks/settings/forensics"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}],u={toc:c},m="wrapper";function k(t){var{components:e}=t,i=o(t,["components"]);return(0,r.kt)(m,a({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"aaa-policy"}),"AAA Policy"),(0,r.kt)("p",null,"Integration with AAA service for securing access to Haltdos appliances"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"AAA is a standard-based framework used to control who is permitted to use network resources (through authentication), what they are authorized to do (through authorization), and capture the actions performed while accessing the network (through accounting)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authentication - The process by which it can be identified that the user, which wants to access the network resources.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authorization - It provides capabilities to enforce policies on network resources after the user has gained access to the network resources through authentication.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Accounting - It provides means of monitoring and capturing the events done by the user while accessing the network resources."))),(0,r.kt)("p",null,"Haltdos supports built-in integration AAA solutions such as RADIUS or TACACS+. These services ensure authentication, authorization, and accounting when accessing Haltdos appliances."),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Depending upon the organization's policy, if AAA is enabled, the same should also be configured for Haltdos appliances")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aaa_policy",src:n(23733).Z,width:"1805",height:"835"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > Settings > AAA"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"AAA authentication"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Service"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"RADIUS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Allow SSH"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Host Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Secret"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("h3",a({},{id:"description"}),"Description:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AAA Enabled")),(0,r.kt)("p",null,"This option allows the user to enable or disable the AAA feature. By default, it is set to disable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Service")),(0,r.kt)("p",null,"This option allows the user to select the type of implementation it can be either ",(0,r.kt)("strong",{parentName:"p"},"TACACS")," or ",(0,r.kt)("strong",{parentName:"p"},"RADIUS"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Terminal Access Controller Access Control System")," (TACACS+) is a Cisco proprietary protocol that is used for the communication of the Cisco client and Cisco ACS server. It uses TCP port number ",(0,r.kt)("strong",{parentName:"li"},"49")," which makes it reliable."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remote Access Dial-In User Service")," (RADIUS) is an open standard protocol used for the communication between any vendor AAA client and ACS server. It uses port number ",(0,r.kt)("strong",{parentName:"li"},"1812")," for authentication and authorization and ",(0,r.kt)("em",{parentName:"li"},"1813")," for accounting.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Host Name")),(0,r.kt)("p",null,"This option allows the users to specify the hostname or IP address of ",(0,r.kt)("strong",{parentName:"p"},"AAA")," server."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allow SSH")),(0,r.kt)("p",null,"This option will only apprears when ",(0,r.kt)("strong",{parentName:"p"},"AAA")," type is selected to ",(0,r.kt)("strong",{parentName:"p"},"RADIUS"),". When this option is enabled it allow ",(0,r.kt)("strong",{parentName:"p"},"SSH")," if ",(0,r.kt)("strong",{parentName:"p"},"Radius Server")," is down "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Secret")),(0,r.kt)("p",null,"This option allows the user to mention the credential information to access AAA server."))}k.isMDXComponent=!0},23733:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/aaa_policy_newui-3abb87d33e7989eba98f8590290fae3b.png"}}]);