"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[73598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:4},s="E-Mail",l={unversionedId:"enterprise/platform/system/email",id:"enterprise/platform/system/email",title:"E-Mail",description:"Integration with E-Mail Service",source:"@site/docs/enterprise/platform/system/email.md",sourceDirName:"enterprise/platform/system",slug:"/enterprise/platform/system/email",permalink:"/v8/enterprise/platform/system/email",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"platform_sidebar",previous:{title:"Updates",permalink:"/v8/enterprise/platform/system/updates"},next:{title:"Active Directory",permalink:"/v8/enterprise/platform/system/user_setting/active_directory"}},p={},u=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable Email Notifications</strong>",id:"enable-email-notifications",level:5},{value:"<strong>Email Server</strong>",id:"email-server",level:5},{value:"<strong>Server Port</strong>",id:"server-port",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Socket Timeout</strong>",id:"socket-timeout",level:5},{value:"<strong>Enable Auth</strong>",id:"enable-auth",level:5},{value:"<strong>Email Address</strong>",id:"email-address",level:5},{value:"<strong>Email Password</strong>",id:"email-password",level:5},{value:"<strong>Technical Support</strong>",id:"technical-support",level:5},{value:"<strong>Encryption Protocol</strong>",id:"encryption-protocol",level:5},{value:"<strong>DSN Response</strong>",id:"dsn-response",level:5},{value:"<strong>DSN Notify</strong>",id:"dsn-notify",level:5},{value:"<strong>Enable EHLO</strong>",id:"enable-ehlo",level:5},{value:"<strong>Start TLS</strong>",id:"start-tls",level:5},{value:"<strong>Enable 8-bit Mime</strong>",id:"enable-8-bit-mime",level:5},{value:"<strong>Enable Partial Email</strong>",id:"enable-partial-email",level:5},{value:"<strong>Enable UserSet</strong>",id:"enable-userset",level:5},{value:"<strong>Enable Quit Wait</strong>",id:"enable-quit-wait",level:5}],c={toc:u},m="wrapper";function d(e){var{components:t}=e,o=i(e,["components"]);return(0,n.kt)(m,a({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"e-mail"}),"E-Mail"),(0,n.kt)("p",null,"Integration with E-Mail Service"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos Platform supports integration with Email Services via SMTP to send alerts and notifications to registered users. This section describes various SMTP settings for the integration of Haltdos solutions with your existing email provider."),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"It is recommended to integrate Haltdos solutions with SMTP for receiving timely alerts and notifications.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"E-Mail",src:r(12331).Z,width:"1871",height:"970"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"System")," (Present at the Top Right Side)"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"E-Mail")),(0,n.kt)("li",{parentName:"ol"},"Configure E-Mail Settings"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"E-Mail",src:r(90631).Z,width:"1366",height:"570"})),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"enable-email-notifications"}),(0,n.kt)("strong",{parentName:"h5"},"Enable Email Notifications")),(0,n.kt)("p",null,"This feature allows users to enable notification via emails. By default, this option is set to disable.  "),(0,n.kt)("h5",a({},{id:"email-server"}),(0,n.kt)("strong",{parentName:"h5"},"Email Server")),(0,n.kt)("p",null,"This feature allows users to mention the email server details. Users can add the  hostname or IP address of the mail server  "),(0,n.kt)("h5",a({},{id:"server-port"}),(0,n.kt)("strong",{parentName:"h5"},"Server Port")),(0,n.kt)("p",null,"This feature allows users to set the port number to connect to the mail server.  "),(0,n.kt)("h5",a({},{id:"connection-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Connection Timeout")),(0,n.kt)("p",null,"This feature allows users to set a timeout for the email server. By default, it is set to 0 which is the disabled state.  "),(0,n.kt)("h5",a({},{id:"socket-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Socket Timeout")),(0,n.kt)("p",null,"This feature allows users to set a timeout for the email server. By default, it is set to 0 which is the disabled state.  "),(0,n.kt)("h5",a({},{id:"enable-auth"}),(0,n.kt)("strong",{parentName:"h5"},"Enable Auth")),(0,n.kt)("p",null,"This feature allows the user to set the authentication to the email server. By default, it is set to disable.  "),(0,n.kt)("h5",a({},{id:"email-address"}),(0,n.kt)("strong",{parentName:"h5"},"Email Address")),(0,n.kt)("p",null,"This feature allows users to set their email address for authenticating to the mail server.  "),(0,n.kt)("h5",a({},{id:"email-password"}),(0,n.kt)("strong",{parentName:"h5"},"Email Password")),(0,n.kt)("p",null,"This feature can only be used when the Email Auth option is set to enabled. Users are allowed to set their email password for authenticating to the email server.  "),(0,n.kt)("h5",a({},{id:"technical-support"}),(0,n.kt)("strong",{parentName:"h5"},"Technical Support")),(0,n.kt)("p",null,"This feature enables users to get Haltdos technical support on critical alerts.  "),(0,n.kt)("h5",a({},{id:"encryption-protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Encryption Protocol")),(0,n.kt)("p",null,"This option allows users to set specific types of encryption protocols to use when connecting to an email Server.  "),(0,n.kt)("h5",a({},{id:"dsn-response"}),(0,n.kt)("strong",{parentName:"h5"},"DSN Response")),(0,n.kt)("p",null,"DNS is a query/response protocol. The client queries information in a single UDP request. This request is followed by a single UDP reply from the DNS server. DNS uses UDP port 53 to connect to the server.  "),(0,n.kt)("h5",a({},{id:"dsn-notify"}),(0,n.kt)("strong",{parentName:"h5"},"DSN Notify")),(0,n.kt)("p",null,"User can Specify when to send delivery status notification (DSN)"),(0,n.kt)("h5",a({},{id:"enable-ehlo"}),(0,n.kt)("strong",{parentName:"h5"},"Enable EHLO")),(0,n.kt)("p",null,"The EHLO command initiates the SMTP session conversation. The client greets the server and introduces himself. As a rule, EHLO is attributed with an argument that specifies the domain name or IP address of the SMTP client. This option allows users to enable the EHLO command.  "),(0,n.kt)("h5",a({},{id:"start-tls"}),(0,n.kt)("strong",{parentName:"h5"},"Start TLS")),(0,n.kt)("p",null,"Transport Layer Security (TLS) encrypts data sent over the Internet to ensure that eavesdroppers and hackers are unable to see what you transmit which is particularly useful for private and sensitive information such as passwords, credit card numbers, and personal correspondence  "),(0,n.kt)("h5",a({},{id:"enable-8-bit-mime"}),(0,n.kt)("strong",{parentName:"h5"},"Enable 8-bit Mime")),(0,n.kt)("p",null,"This feature allows users to connect to the older version of the Email server.  "),(0,n.kt)("h5",a({},{id:"enable-partial-email"}),(0,n.kt)("strong",{parentName:"h5"},"Enable Partial Email")),(0,n.kt)("p",null,"Partial mails allow large objects to be delivered as several mail messages and automatically joined by the receiving client. This mechanism can be used when intermediate transport agents, such as SMTP servers, are limiting the size of individual emails that can be sent.  "),(0,n.kt)("h5",a({},{id:"enable-userset"}),(0,n.kt)("strong",{parentName:"h5"},"Enable UserSet")),(0,n.kt)("p",null,"This option allows users to enable UserSet to use the RSET command instead of NOOP while sending emails.  "),(0,n.kt)("h5",a({},{id:"enable-quit-wait"}),(0,n.kt)("strong",{parentName:"h5"},"Enable Quit Wait")),(0,n.kt)("p",null,"This option allows users to gracefully terminate connections with the Email Server."))}d.isMDXComponent=!0},12331:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/emaill-8e4d90c856e5dea60c501bc9545ae6c3.png"},90631:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/emailll-a176811b36b352dfe671b7a4a4d830fc.png"}}]);