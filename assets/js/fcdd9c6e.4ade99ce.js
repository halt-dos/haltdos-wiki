/*! For license information please see fcdd9c6e.4ade99ce.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[36657],{40252:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"cloud/waf/listener/profiles/settings","title":"Settings","description":"Overview","source":"@site/docs/cloud/waf/listener/profiles/settings.md","sourceDirName":"cloud/waf/listener/profiles","slug":"/cloud/waf/listener/profiles/settings","permalink":"/cloud/waf/listener/profiles/settings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"cloud_sidebar","previous":{"title":"Profiles","permalink":"/cloud/waf/listener/profiles/"},"next":{"title":"Geo Filtering","permalink":"/cloud/waf/listener/profiles/geo_filtering"}}');var r=i(74848),t=i(28453);const l={sidebar_position:1},o="Settings",a={},c=[{value:"Overview",id:"overview",level:4},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2},{value:"<strong>Operational Mode</strong>",id:"operational-mode",level:5},{value:"<strong>Paranoia Level</strong>",id:"paranoia-level",level:5},{value:"<strong>Enable Signature Validation</strong>",id:"enable-signature-validation",level:5},{value:"<strong>Application Type</strong>",id:"application-type",level:5},{value:"<strong>Application Framework</strong>",id:"application-framework",level:5},{value:"<strong>Application Language</strong>",id:"application-language",level:5},{value:"<strong>Application Server</strong>",id:"application-server",level:5},{value:"<strong>Application  Database</strong>",id:"application--database",level:5},{value:"<strong>Application OS</strong>",id:"application-os",level:5},{value:"<strong>User Groups</strong>",id:"user-groups",level:5},{value:"<strong>Temporary Blacklist Duration</strong>",id:"temporary-blacklist-duration",level:5}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"settings",children:"Settings"})}),"\n",(0,r.jsx)(n.h4,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Profile Setting specifies all the operational settings for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). It provides user protection and invokes signature rules to every configured specific settings for mentioned application type. Haltdos WAF supports all HTML versions (including HTML5)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Profile_settings",src:i(78447).A+"",width:"1910",height:"900"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"WAF"})," > ",(0,r.jsx)(n.strong,{children:"Listener"})," > ",(0,r.jsx)(n.strong,{children:"Profiles"})," > ",(0,r.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Configure your settings."}),"\n",(0,r.jsx)(n.li,{children:"Click on Save Changes."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h5,{id:"operational-mode",children:(0,r.jsx)(n.strong,{children:"Operational Mode"})}),"\n",(0,r.jsx)(n.p,{children:"This option allows user to specify operational mode for every given security profile. Different operational modes are:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: MITIGATION / BYPASS / RECORD\n\n    Default: RECORD \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"MITIGATION:"})," In this mode, all the mitigation & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BYPASS:"})," In this mode, all the requests get bypassed without any filtration of mitigation & rule sets."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RECORD:"})," In this mode, all the mitigation & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"paranoia-level",children:(0,r.jsx)(n.strong,{children:"Paranoia Level"})}),"\n",(0,r.jsx)(n.p,{children:"Paranoia Level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: LOW / MEDIUM / HIGH / UNDER ATTACK\n\n    Default: RECORD  \n"})}),"\n",(0,r.jsx)(n.p,{children:"Note: Higher paranoia can also result in false positives."}),"\n",(0,r.jsx)(n.p,{children:"Haltdos WAF comes with four Security Paranoia Levels:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LOW"})," -Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"MEDIUM"})," - A slightly higher level of security to block nearly all web application exploits. It might result in some false positives."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"HIGH"})," - A more paranoid approach to web security. It delivers a higher number of false positives."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UNDER ATACK"})," - The most paranoid defensive security method. It blocks sufficient legitimate requests to your site."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"enable-signature-validation",children:(0,r.jsx)(n.strong,{children:"Enable Signature Validation"})}),"\n",(0,r.jsx)(n.p,{children:"Users can specify to enable the signature validation for the present profile."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,r.jsx)(n.h5,{id:"application-type",children:(0,r.jsx)(n.strong,{children:"Application Type"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the type of application (i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: WEBSITE / WEB SERVICE / WEB SOCKET\n\n    Default: WEBSITE \n"})}),"\n",(0,r.jsx)(n.h5,{id:"application-framework",children:(0,r.jsx)(n.strong,{children:"Application Framework"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the framework used for developing the application (if any)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Drupal / Wordpress / joomla / Larvel / Magento / MediaWIKI / MYBB / OSCOMMERCE / PHBB / PHPMYADMIN / SYMFONY / VBULLETIN / TYPO3 / SHAREPOINT / SAP / DOMINO / PEOPLE-SOFT / Other\n\n    Default: Other \n"})}),"\n",(0,r.jsx)(n.h5,{id:"application-language",children:(0,r.jsx)(n.strong,{children:"Application Language"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the programming language in which application is developed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: JAVA / DOTNET / PHP / PYTHON / GO / Other\n\n    Default: Other  \n"})}),"\n",(0,r.jsx)(n.h5,{id:"application-server",children:(0,r.jsx)(n.strong,{children:"Application Server"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the server on which application is running."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: IIS / APACHE / TOMCAT / Other\n\n    Default: Other\n"})}),"\n",(0,r.jsx)(n.h5,{id:"application--database",children:(0,r.jsx)(n.strong,{children:"Application  Database"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the database which is being used in the application (if any)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: MYSQL / PGSQL / MSSQL / ORACLE / NOSQL / MONGODB / MSACCESS / DB2 / EMC / FIREBIRD / FRONTBASE / HSQLDB / INFORMIX / INGRES / MAXDB / SQLITE / SYBASE / INTERBASE / Other\n\n    Default: Other \n"})}),"\n",(0,r.jsx)(n.h5,{id:"application-os",children:(0,r.jsx)(n.strong,{children:"Application OS"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the Operating system on which application is running."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Window / Unix / Other\n\n    Default: Other\n"})}),"\n",(0,r.jsx)(n.h5,{id:"user-groups",children:(0,r.jsx)(n.strong,{children:"User Groups"})}),"\n",(0,r.jsx)(n.p,{children:"Create a user group for operating the API gateway. Detailed information can be found using this link User Group."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: list of authentication schemes\n\n    Default: Blank\n"})}),"\n",(0,r.jsx)(n.h5,{id:"temporary-blacklist-duration",children:(0,r.jsx)(n.strong,{children:"Temporary Blacklist Duration"})}),"\n",(0,r.jsx)(n.p,{children:"The time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 0  \n"})}),"\n",(0,r.jsx)(n.p,{children:"Matric: Seconds"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,n,i)=>{var s=i(96540),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var s,t={},c=null,d=null;for(s in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,s)&&!a.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:d,props:t,_owner:o.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},74848:(e,n,i)=>{e.exports=i(21020)},78447:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/spSettings-401191de92f59343e444ee3145f81e8a.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(96540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);