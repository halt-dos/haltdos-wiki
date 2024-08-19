"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[12048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:2},l="TACACS server",s={unversionedId:"enterprise/platform/system/authentication/tacacs",id:"enterprise/platform/system/authentication/tacacs",title:"TACACS server",description:"Integration with organizaion's Tacacs+ server for user management.",source:"@site/docs/enterprise/platform/system/authentication/tacacs.md",sourceDirName:"enterprise/platform/system/authentication",slug:"/enterprise/platform/system/authentication/tacacs",permalink:"/enterprise/platform/system/authentication/tacacs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"Account",permalink:"/enterprise/platform/system/account"},next:{title:"Active Directory",permalink:"/enterprise/platform/system/user_setting/active_directory"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Endpoint</strong>",id:"endpoint",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Secret Key</strong>",id:"secret-key",level:5},{value:"<strong>Authorization Protocol</strong>",id:"authorization-protocol",level:5},{value:"<strong>Timeout</strong>",id:"timeout",level:5}],u={toc:c},m="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(m,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"tacacs-server"}),"TACACS server"),(0,r.kt)("p",null,"Integration with organizaion's Tacacs+ server for user management."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Haltdos Platform supports integration with AAA authentication mechanism with Tacacs+ Server."),(0,r.kt)("p",null,"The goal of TACACS+ is to provide a methodology for managing multiple network access points from a single management service. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the tacacs+ server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on tacacs+ server."),(0,r.kt)("admonition",a({},{title:"Info",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"If your organization is using AAA authentication, it is recommended to integrate Haltdos solutions for user management with AD.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"activedirectory",src:n(37609).Z,width:"1835",height:"770"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into the Haltdos Web UI console."),(0,r.kt)("li",{parentName:"ol"},"Click on user icon on right top of the screen."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"System > Remote Authentication > TACACS+ Server"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure the settings and click on save changes.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Value"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Endpoint"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IP address"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Port"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Port Number"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Secret key"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Password phrase"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Authorization Protocol"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"PAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Timeout"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Decimal"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"30")))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Enabled")),(0,r.kt)("p",null,"This option enables users to enable or disable the tacacs+ authentication.\nEndpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",a({},{id:"endpoint"}),(0,r.kt)("strong",{parentName:"h5"},"Endpoint")),(0,r.kt)("p",null,"This option allows users to set the endpoint or the tacacs+ server IP address on which Haltdos Device will send authentication requests."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"port"}),(0,r.kt)("strong",{parentName:"h5"},"Port")),(0,r.kt)("p",null,"This option allows users to set the port number for the port number that is being used at tacacs+ server mentioned above. By default, tacacs+ server set to listen on port 49."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"secret-key"}),(0,r.kt)("strong",{parentName:"h5"},"Secret Key")),(0,r.kt)("p",null,"This option allows users to set the secret key which will be used while communicating the TACACS+ server."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"authorization-protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Authorization Protocol")),(0,r.kt)("p",null,"This option allows users to configure the authentication protocol for the TACACS+ server. This option contains mainly two protocols;"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: ASCII / PAP / CHAP\n\nDefault: PAP \n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ASCII"),"- ASCII is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PAP")," - PAP is a basic authentication protocol where the client sends its username and password in plain text to the server for authentication in a PAP protocol packet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CHAP")," - CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism."))),(0,r.kt)("h5",a({},{id:"timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Timeout")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("p",null,"This option allows users to configure the request timeout for the request. If any authentication response from TACACS+ server will be delayed from the mentioned timeout, it will be discarded."))}d.isMDXComponent=!0},37609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tacacs-3d75841fe773e0bdc0e7a342b096c7a8.png"}}]);