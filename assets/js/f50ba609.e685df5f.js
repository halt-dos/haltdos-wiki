"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:2},s="RADIUS server",l={unversionedId:"enterprise/platform/system/authentication/radius",id:"version-7.0/enterprise/platform/system/authentication/radius",title:"RADIUS server",description:"Integration with organization's RADIUS server for user management.",source:"@site/versioned_docs/version-7.0/enterprise/platform/system/authentication/radius.md",sourceDirName:"enterprise/platform/system/authentication",slug:"/enterprise/platform/system/authentication/radius",permalink:"/enterprise/platform/system/authentication/radius",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"Active Directory",permalink:"/enterprise/platform/system/authentication/ad"},next:{title:"TACACS server",permalink:"/enterprise/platform/system/authentication/tacacs"}},p={},c=[{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Endpoint</strong>",id:"endpoint",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Secret Key</strong>",id:"secret-key",level:5},{value:"<strong>Authorization Protocol</strong>",id:"authorization-protocol",level:5},{value:"<strong>Timeout</strong>",id:"timeout",level:5}],u={toc:c},d="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(d,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"radius-server"}),"RADIUS server"),(0,r.kt)("p",null,"Integration with organization's RADIUS server for user management."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Haltdos Platform supports integration with AAA authentication mechanism with RADIUS server. AAA stands for authentication, authorization, and accounting. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the RADIUS server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their credential configured on RADIUS server."),(0,r.kt)("admonition",o({},{title:"Info",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"If your organization is using AAA authentication , it is recommended to integrate Haltdos solutions for user management with AD.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"activedirectory",src:n(92092).Z,width:"1916",height:"941"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into the Haltdos Web UI console."),(0,r.kt)("li",{parentName:"ol"},"Click on user icon on right top of the screen."),(0,r.kt)("li",{parentName:"ol"},"Go to System > Remote Authentication > RADIUS Server."),(0,r.kt)("li",{parentName:"ol"},"Configure the settings and click on save changes.")),(0,r.kt)("h3",o({},{id:"description"}),"Description"),(0,r.kt)("h5",o({},{id:"enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Enabled")),(0,r.kt)("p",null,"This option enables users to enable or disable the RADIUS authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",o({},{id:"endpoint"}),(0,r.kt)("strong",{parentName:"h5"},"Endpoint")),(0,r.kt)("p",null,"This option allows users to set the endpoint or the RADIUS server IP address on which Haltdos Device will send authentication requests."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"port"}),(0,r.kt)("strong",{parentName:"h5"},"Port")),(0,r.kt)("p",null,"This option allows users to set the port number for the port number that is being used at RADIUS server mentioned above. By default, RADIUS server set to listen on port 1812."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"secret-key"}),(0,r.kt)("strong",{parentName:"h5"},"Secret Key")),(0,r.kt)("p",null,"This option allows users to set the secret key which will be used while communicating the RADIUS server."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",o({},{id:"authorization-protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Authorization Protocol")),(0,r.kt)("p",null,"This option allows users to configure the authentication protocol for the RADIUS server. This option contains mainly two protocols;"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: CHAP / PAP\n\nDefault: CHAP \n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CHAP -")," CHAP is a more secure authentication protocol compared to PAP. It uses a three-way handshake process to authenticate the client with a challenge-response mechanism. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PAP -")," PAP is a simple authentication protocol where the client sends its username and password in plain text to the server for authentication."))),(0,r.kt)("h5",o({},{id:"timeout"}),(0,r.kt)("strong",{parentName:"h5"},"Timeout")),(0,r.kt)("p",null,"This option allows users to configure the request timeout for the request. If any authentication response from RADIUS server will be delayed from the mentioned timeout, it will be discarded."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}m.isMDXComponent=!0},92092:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/radius-2e0870b7b4034994a7892f5ea75ae685.png"}}]);