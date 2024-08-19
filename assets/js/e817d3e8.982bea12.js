"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[95678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71765:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={sidebar_position:4},i="TACACS server",l={unversionedId:"enterprise/platform/system/management/tacacs",id:"enterprise/platform/system/management/tacacs",title:"TACACS server",description:"Integration with organizaion's Tacacs+ server for user management.",source:"@site/docs/enterprise/platform/system/management/tacacs.md",sourceDirName:"enterprise/platform/system/management",slug:"/enterprise/platform/system/management/tacacs",permalink:"/enterprise/platform/system/management/tacacs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"platform_sidebar",previous:{title:"RADIUS server",permalink:"/enterprise/platform/system/management/radius"},next:{title:"Password Policy",permalink:"/enterprise/platform/system/security/password_policy"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Endpoint</strong>",id:"endpoint",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Secret Key</strong>",id:"secret-key",level:5},{value:"<strong>Authorization Protocol</strong>",id:"authorization-protocol",level:5},{value:"<strong>Timeout</strong>",id:"timeout",level:5},{value:"TACACS Script/Attributes",id:"tacacs-scriptattributes",level:3},{value:"1. <strong>authority</strong>",id:"1-authority",level:5},{value:"2. <strong>stacks</strong>",id:"2-stacks",level:5},{value:"3. <strong>emailId</strong>",id:"3-emailid",level:5},{value:"4. <strong>access</strong>",id:"4-access",level:5},{value:"5. <strong>disable_report</strong>",id:"5-disable_report",level:5}],u={toc:c},d="wrapper";function m(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)(d,a({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"tacacs-server"}),"TACACS server"),(0,n.kt)("p",null,"Integration with organizaion's Tacacs+ server for user management."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos Platform supports integration with AAA authentication mechanism with Tacacs+ Server."),(0,n.kt)("p",null,"The goal of TACACS+ is to provide a methodology for managing multiple network access points from a single management service. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the tacacs+ server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on tacacs+ server."),(0,n.kt)("admonition",a({},{title:"Info",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"If your organization is using AAA authentication, it is recommended to integrate Haltdos solutions for user management with AD.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"activedirectory",src:r(35586).Z,width:"1902",height:"900"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log into the Haltdos Web UI console."),(0,n.kt)("li",{parentName:"ol"},"Click on user icon on right top of the screen."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"System > Remote Authentication > TACACS+ Server"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure the settings and click on save changes.")),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Enabled")),(0,n.kt)("p",null,"This option enables users to enable or disable the tacacs+ authentication.\nEndpoint."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,n.kt)("h5",a({},{id:"endpoint"}),(0,n.kt)("strong",{parentName:"h5"},"Endpoint")),(0,n.kt)("p",null,"This option allows users to set the endpoint or the tacacs+ server IP address on which Haltdos Device will send authentication requests."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"port"}),(0,n.kt)("strong",{parentName:"h5"},"Port")),(0,n.kt)("p",null,"This option allows users to set the port number for the port number that is being used at tacacs+ server mentioned above. By default, tacacs+ server set to listen on port 49."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"secret-key"}),(0,n.kt)("strong",{parentName:"h5"},"Secret Key")),(0,n.kt)("p",null,"This option allows users to set the secret key which will be used while communicating the TACACS+ server."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Password Phrase\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"authorization-protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Authorization Protocol")),(0,n.kt)("p",null,"This option allows users to configure the authentication protocol for the TACACS+ server. This option contains mainly two protocols;"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: ASCII / PAP / CHAP\n\nDefault: ASCII \n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ASCII"),"- ASCII is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"PAP")," - PAP is a basic authentication protocol where the client sends its username and password in plain text to the server for authentication in a PAP protocol packet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"CHAP")," - CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism."))),(0,n.kt)("h5",a({},{id:"timeout"}),(0,n.kt)("strong",{parentName:"h5"},"Timeout")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 30 \n\nTimeout: milliSeconds \n")),(0,n.kt)("p",null,"This option allows users to configure the request timeout for the request. If any authentication response from TACACS+ server will be delayed from the mentioned timeout, it will be discarded."),(0,n.kt)("h3",a({},{id:"tacacs-scriptattributes"}),"TACACS Script/Attributes"),(0,n.kt)("p",null,"The TACACS+ script is used for authorization purposes and should be configured on an AAA server. This process determines what actions or roles a user is allowed to perform on a Haltdos solution device after they have been authenticated by the AAA server. Typically, this is done by sending an authorization request to a TACACS+ server, which then decides if the user has the necessary permissions to log in to the Haltdos GUI console."),(0,n.kt)("p",null,"There are various arguments that need to be configured on the authorization server (AAA server);  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Attributes"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Mandatory"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"authority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"stacks"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"emailId"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"access"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"disable_report"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"No")))),(0,n.kt)("h5",a({},{id:"1-authority"}),"1. ",(0,n.kt)("strong",{parentName:"h5"},"authority")),(0,n.kt)("p",null,"This argument determines the user type and is necessary for successful authorization on the portal. Users can log in with two modes: ",(0,n.kt)("strong",{parentName:"p"},"USER or ADMIN"),'. The value of this argument is correlated with the "access" argument values. Providing this argument is mandatory for successful authorization.'),(0,n.kt)("h5",a({},{id:"2-stacks"}),"2. ",(0,n.kt)("strong",{parentName:"h5"},"stacks")),(0,n.kt)("p",null,"This mandatory argument is used to authorize license or stack details. It represents the license ID of the Haltdos solution and is crucial for validating that the authorization request originates from a validly licensed device."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted Values: SYNTAX - Comma seprated value\n\nExample : <LICENSE_1>[LICENSE_2] \n")),(0,n.kt)("h5",a({},{id:"3-emailid"}),"3. ",(0,n.kt)("strong",{parentName:"h5"},"emailId")),(0,n.kt)("p",null,'This argument is optional and only required for user-groups with the reporting feature enabled. It works in conjunction with the "disable_report" argument to manage reporting capabilities.'),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted Values: User Email\n\nExample : test@haltdos.com \n")),(0,n.kt)("h5",a({},{id:"4-access"}),"4. ",(0,n.kt)("strong",{parentName:"h5"},"access")),(0,n.kt)("p",null,"This mandatory argument specifies the user-access role required for successful authorization. Users can log in with only one user-access role at a time."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted Values: VISIBLE / OBSERVER / MEMBER\n\nExample : OBSERVER \n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"VISIBLE- Users with this role can only view certain information but cannot execute any commands or make any changes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"OBSERVER- Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"MEMBER- Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given."))),(0,n.kt)("h5",a({},{id:"5-disable_report"}),"5. ",(0,n.kt)("strong",{parentName:"h5"},"disable_report")),(0,n.kt)("p",null,"Used to disable report for user."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"true - Disable mail report\nfalse - Enable mail report\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Below is a sample script to login with MEMBER access with enable report.")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"authority: USER\nstacks: SAD56SDBC\nemailId: test@haltdos.com\naccess: MEMBER\ndisable_report: false\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Below is a sample script to login with OBSERVER access with enable report.")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"authority: USER\nstacks: ADDFG56SBC\naccess: OBSERVER\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Below is a sample script to login with ADMIN access with enable report.")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"authority: ADMIN\nstacks: WAFYAW24B\nemailId: test@haltdos.com\naccess: MEMBER\ndisable_report: false\n")),(0,n.kt)("p",null,"The above-mentioned scripts/attributes need to be configured on the authorization server. This ensures that when any user tries to log in to the Haltdos Management Console, the request will be authenticated, authorized, and accounted for by the AAA server."),(0,n.kt)("p",null,"In this process, an authentication request will be generated from the Haltdos solution to the AAA server, which will then authenticate the request and respond back to the Haltdos solution device. After authentication, the Haltdos device will generate an authorization request to the AAA server. In response, the AAA server should return the necessary attributes to complete the authorization. Based on the values received from the AAA server, the Haltdos device will approve login access."))}m.isMDXComponent=!0},35586:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tacacs-d2b73b1365e1e8add60c62d7b8726e45.png"}}]);