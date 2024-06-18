"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:1},o="Settings",s={unversionedId:"enterprise/waf/listener/profiles/settings",id:"version-7.0/enterprise/waf/listener/profiles/settings",title:"Settings",description:"Overview",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/profiles/settings.md",sourceDirName:"enterprise/waf/listener/profiles",slug:"/enterprise/waf/listener/profiles/settings",permalink:"/enterprise/waf/listener/profiles/settings",draft:!1,tags:[],version:"7.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"waf_sidebar",previous:{title:"Profiles",permalink:"/enterprise/waf/listener/profiles/"},next:{title:"Geo Filtering",permalink:"/enterprise/waf/listener/profiles/geo_filtering"}},p={},c=[{value:"Overview",id:"overview",level:4},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2},{value:"<strong>Operational Mode</strong>",id:"operational-mode",level:5},{value:"<strong>Paranoia Level</strong>",id:"paranoia-level",level:5},{value:"<strong>Enable Signature Validation</strong>",id:"enable-signature-validation",level:5},{value:"<strong>Enable LibInjection</strong>",id:"enable-libinjection",level:5},{value:"<strong>Application Type</strong>",id:"application-type",level:5},{value:"<strong>Application Framework</strong>",id:"application-framework",level:5},{value:"<strong>Application Language</strong>",id:"application-language",level:5},{value:"<strong>Application Server</strong>",id:"application-server",level:5},{value:"<strong>Application  Database</strong>",id:"application--database",level:5},{value:"<strong>Application OS</strong>",id:"application-os",level:5},{value:"<strong>User Groups</strong>",id:"user-groups",level:5},{value:"<strong>Temporary Blacklist Duration</strong>",id:"temporary-blacklist-duration",level:5}],u={toc:c},d="wrapper";function f(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)(d,a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"settings"}),"Settings"),(0,r.kt)("h4",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Profile Setting specifies all the operational settings for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). It provides user protection and invokes signature rules to every configured specific settings for mentioned application type. Haltdos WAF supports all HTML versions (including HTML5)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Profile_settings",src:n(24899).Z,width:"1825",height:"945"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,r.kt)("strong",{parentName:"li"},"Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"operational-mode"}),(0,r.kt)("strong",{parentName:"h5"},"Operational Mode")),(0,r.kt)("p",null,"This option allows user to specify operational mode for every given security profile. Different operational modes are:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: MITIGATION / BYPASS / RECORD\n\nDefault: RECORD  \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MITIGATION:")," In this mode, all the mitigation & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BYPASS:")," In this mode, all the requests get bypassed without any filtration of mitigation & rule sets.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RECORD:")," In this mode, all the mitigation & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.  "))),(0,r.kt)("h5",a({},{id:"paranoia-level"}),(0,r.kt)("strong",{parentName:"h5"},"Paranoia Level")),(0,r.kt)("p",null,"Paranoia Level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH / UNDER ATTACK\n\nDefault: RECORD  \n")),(0,r.kt)("p",null,"Note: Higher paranoia can also result in false positives.  "),(0,r.kt)("p",null,"Haltdos WAF comes with four Security Paranoia Levels:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LOW")," -Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MEDIUM")," - A slightly higher level of security to block nearly all web application exploits. It might result in some false positives.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HIGH")," - A more paranoid approach to web security. It delivers a higher number of false positives.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UNDER ATACK")," - The most paranoid defensive security method. It blocks sufficient legitimate requests to your site.  "))),(0,r.kt)("h5",a({},{id:"enable-signature-validation"}),(0,r.kt)("strong",{parentName:"h5"},"Enable Signature Validation")),(0,r.kt)("p",null,"Users can specify to enable the signature validation for the present profile.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable  \n")),(0,r.kt)("h5",a({},{id:"enable-libinjection"}),(0,r.kt)("strong",{parentName:"h5"},"Enable LibInjection")),(0,r.kt)("p",null,"Users can configure settings related to Specify whether to enable internal libinjection based validations.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable  \n")),(0,r.kt)("h5",a({},{id:"application-type"}),(0,r.kt)("strong",{parentName:"h5"},"Application Type")),(0,r.kt)("p",null,"Specify the type of application (i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: WEBSITE / WEB SERVICE / WEB SOCKET\n\nDefault: WEBSITE  \n")),(0,r.kt)("h5",a({},{id:"application-framework"}),(0,r.kt)("strong",{parentName:"h5"},"Application Framework")),(0,r.kt)("p",null,"Specify the framework used for developing the application (if any)."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Drupal / Wordpress / joomla / Larvel / Magento / MediaWIKI / MYBB / OSCOMMERCE / PHBB / PHPMYADMIN / SYMFONY / VBULLETIN / TYPO3 / SHAREPOINT / SAP / DOMINO / PEOPLE-SOFT / Other\n\nDefault: Other  \n")),(0,r.kt)("h5",a({},{id:"application-language"}),(0,r.kt)("strong",{parentName:"h5"},"Application Language")),(0,r.kt)("p",null,"Specify the programming language in which application is developed."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: JAVA / DOTNET / PHP / PYTHON / GO / Other\n\nDefault: Other  \n")),(0,r.kt)("h5",a({},{id:"application-server"}),(0,r.kt)("strong",{parentName:"h5"},"Application Server")),(0,r.kt)("p",null,"Specify the server on which application is running."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IIS / APACHE / TOMCAT / Other\n\nDefault: Other \n")),(0,r.kt)("h5",a({},{id:"application--database"}),(0,r.kt)("strong",{parentName:"h5"},"Application  Database")),(0,r.kt)("p",null,"Specify the database which is being used in the application (if any)."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: MYSQL / PGSQL / MSSQL / ORACLE / NOSQL / MONGODB / MSACCESS / DB2 / EMC / FIREBIRD / FRONTBASE / HSQLDB / INFORMIX / INGRES / MAXDB / SQLITE / SYBASE / INTERBASE / Other\n\nDefault: Other \n")),(0,r.kt)("h5",a({},{id:"application-os"}),(0,r.kt)("strong",{parentName:"h5"},"Application OS")),(0,r.kt)("p",null,"Specify the Operating system on which application is running."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Window / Unix / Other\n\nDefault: Other  \n")),(0,r.kt)("h5",a({},{id:"user-groups"}),(0,r.kt)("strong",{parentName:"h5"},"User Groups")),(0,r.kt)("p",null,"Create a user group for operating the API gateway. Detailed information can be found using this link User Group.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values:  list of authentication schemes\n\nDefault: Blank  \n")),(0,r.kt)("h5",a({},{id:"temporary-blacklist-duration"}),(0,r.kt)("strong",{parentName:"h5"},"Temporary Blacklist Duration")),(0,r.kt)("p",null,"The time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0  \n\nMatric: Seconds\n")))}f.isMDXComponent=!0},24899:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/profile_setting-17007eb78d00dafa52aaa7dbfe727389.png"}}]);