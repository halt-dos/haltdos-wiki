"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[8228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={sidebar_position:2},s="TACACS server",l={unversionedId:"enterprise/platform/system/authentication/tacacs",id:"version-7.0/enterprise/platform/system/authentication/tacacs",title:"TACACS server",description:"Integration with organizaion's Tacacs+ server for user management.",source:"@site/versioned_docs/version-7.0/enterprise/platform/system/authentication/tacacs.md",sourceDirName:"enterprise/platform/system/authentication",slug:"/enterprise/platform/system/authentication/tacacs",permalink:"/enterprise/platform/system/authentication/tacacs",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"RADIUS server",permalink:"/enterprise/platform/system/authentication/radius"},next:{title:"Events",permalink:"/enterprise/platform/system/events"}},c={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Endpoint</strong>",id:"endpoint",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Secret Key</strong>",id:"secret-key",level:5},{value:"<strong>Authorization Protocol</strong>",id:"authorization-protocol",level:5},{value:"<strong>Timeout</strong>",id:"timeout",level:5},{value:"Tacacs Script",id:"tacacs-script",level:3},{value:"1. authority",id:"1-authority",level:4},{value:"2. stacks",id:"2-stacks",level:4},{value:"3. emailId",id:"3-emailid",level:4},{value:"4. access",id:"4-access",level:4},{value:"5. disable_report",id:"5-disable_report",level:4},{value:"1. Below is a sample script to login with <strong>MEMBER</strong> access with enable report.",id:"1-below-is-a-sample-script-to-login-with-member-access-with-enable-report",level:5},{value:"2. Below is a sample script to login with <strong>OBSERVER</strong> access with enable report.",id:"2-below-is-a-sample-script-to-login-with-observer-access-with-enable-report",level:5},{value:"3. Below is a sample script to login with <strong>ADMIN</strong> access with enable report.",id:"3-below-is-a-sample-script-to-login-with-admin-access-with-enable-report",level:5}],u={toc:p},h="wrapper";function m(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)(h,n({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"tacacs-server"}),"TACACS server"),(0,a.kt)("p",null,"Integration with organizaion's Tacacs+ server for user management."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos Platform supports integration with AAA authentication mechanism with Tacacs+ Server."),(0,a.kt)("p",null,"The goal of TACACS+ is to provide a methodology for managing multiple network access points from a single management service. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the tacacs+ server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on tacacs+ server."),(0,a.kt)("admonition",n({},{title:"Info",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"If your organization is using AAA authentication, it is recommended to integrate Haltdos solutions for user management with AD.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"activedirectory",src:r(37609).Z,width:"1835",height:"770"})),(0,a.kt)("h3",n({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into the Haltdos Web UI console."),(0,a.kt)("li",{parentName:"ol"},"Click on user icon on right top of the screen."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"System > Remote Authentication > TACACS+ Server"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure the settings and click on save changes.")),(0,a.kt)("h3",n({},{id:"description"}),"Description"),(0,a.kt)("h5",n({},{id:"enabled"}),(0,a.kt)("strong",{parentName:"h5"},"Enabled")),(0,a.kt)("p",null,"This option enables users to enable or disable the tacacs+ authentication.\nEndpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,a.kt)("h5",n({},{id:"endpoint"}),(0,a.kt)("strong",{parentName:"h5"},"Endpoint")),(0,a.kt)("p",null,"This option allows users to set the endpoint or the tacacs+ server IP address on which Haltdos Device will send authentication requests."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,a.kt)("h5",n({},{id:"port"}),(0,a.kt)("strong",{parentName:"h5"},"Port")),(0,a.kt)("p",null,"This option allows users to set the port number for the port number that is being used at tacacs+ server mentioned above. By default, tacacs+ server set to listen on port 49."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,a.kt)("h5",n({},{id:"secret-key"}),(0,a.kt)("strong",{parentName:"h5"},"Secret Key")),(0,a.kt)("p",null,"This option allows users to set the secret key which will be used while communicating the TACACS+ server."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted values: Password phrase\n\nDefault: Blank \n")),(0,a.kt)("h5",n({},{id:"authorization-protocol"}),(0,a.kt)("strong",{parentName:"h5"},"Authorization Protocol")),(0,a.kt)("p",null,"This option allows users to configure the authentication protocol for the TACACS+ server. This option contains mainly two protocols;"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted values: ASCII / PAP / CHAP\n\nDefault: PAP \n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ASCII"),"- ASCII is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"PAP")," - PAP is a basic authentication protocol where the client sends its username and password in plain text to the server for authentication in a PAP protocol packet.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"CHAP")," - CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism."))),(0,a.kt)("h5",n({},{id:"timeout"}),(0,a.kt)("strong",{parentName:"h5"},"Timeout")),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 5000 \n")),(0,a.kt)("p",null,"This option allows users to configure the request timeout for the request. If any authentication response from TACACS+ server will be delayed from the mentioned timeout, it will be discarded."),(0,a.kt)("h3",n({},{id:"tacacs-script"}),"Tacacs Script"),(0,a.kt)("p",null,"Tacacs Script is used for authority purpose, this is a process of determining what actions a user is allowed to perform on a Haltdos Solution Device after they have been authenticated by AAA Server. This is typically done by sending an authorization request to a TACACS+ server which then decides if the user has the necessary permissions for login in Haltdos GUI Console.  "),(0,a.kt)("p",null,"There are various arguments and there values in the tacacs script that are mentioned below:  "),(0,a.kt)("h4",n({},{id:"1-authority"}),"1. authority"),(0,a.kt)("p",null,'This argument determines the user type and is necessary for successful authorization on the portal. Users can log in with two modes: USER or ADMIN. The value of this argument is correlated with the "access" argument values. Providing this argument is mandatory for successful authorization.'),(0,a.kt)("h4",n({},{id:"2-stacks"}),"2. stacks"),(0,a.kt)("p",null,"This mandatory argument is used to authorize license or stack details. It represents the ",(0,a.kt)("strong",{parentName:"p"},"license ID")," of the Haltdos solution and is crucial for validating that the authorization request originates from a validly licensed device."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted Values: SYNTAX - Comma seprated value\n\nExample : <LICENSE_1>[LICENSE_2] \n")),(0,a.kt)("h4",n({},{id:"3-emailid"}),"3. emailId"),(0,a.kt)("p",null,'This argument is optional and only required for user-groups with the reporting feature enabled. It works in conjunction with the "disable_report" argument to manage reporting capabilities.'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted Values: User Email\n\nExample : test@haltdos.com \n")),(0,a.kt)("h4",n({},{id:"4-access"}),"4. access"),(0,a.kt)("p",null,"This mandatory argument specifies the user-access role required for successful authorization. Users can log in with only one user-access role at a time."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted Values: VISIBLE / OBSERVER / MEMBER\n\nExample : OBSERVER \n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"VISIBLE"),"- Users with this role can only view certain information but cannot execute any commands or make any changes.  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"OBSERVER"),"- Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MEMBER"),"- Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given."))),(0,a.kt)("h4",n({},{id:"5-disable_report"}),"5. disable_report"),(0,a.kt)("p",null,"Used to disable report for user.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"true")," - Disable mail report",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"false")," - Enable mail report"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"Accepted Values: true / false\n\nExample : False \n")),(0,a.kt)("p",null,"This field is optional."),(0,a.kt)("h5",n({},{id:"1-below-is-a-sample-script-to-login-with-member-access-with-enable-report"}),"1. Below is a sample script to login with ",(0,a.kt)("strong",{parentName:"h5"},"MEMBER")," access with enable report."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"authority: USER\nstacks: SAD56SDBC\nemailId: test@haltdos.com\naccess: MEMBER\ndisable_report: false\n")),(0,a.kt)("h5",n({},{id:"2-below-is-a-sample-script-to-login-with-observer-access-with-enable-report"}),"2. Below is a sample script to login with ",(0,a.kt)("strong",{parentName:"h5"},"OBSERVER")," access with enable report."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"authority: USER\nstacks: ADDFG56SBC\naccess: OBSERVER\n")),(0,a.kt)("h5",n({},{id:"3-below-is-a-sample-script-to-login-with-admin-access-with-enable-report"}),"3. Below is a sample script to login with ",(0,a.kt)("strong",{parentName:"h5"},"ADMIN")," access with enable report."),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"authority: ADMIN\nstacks: WAFYAW24B\nemailId: test@haltdos.com\naccess: MEMBER\ndisable_report: false\n")))}m.isMDXComponent=!0},37609:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tacacs-3d75841fe773e0bdc0e7a342b096c7a8.png"}}]);