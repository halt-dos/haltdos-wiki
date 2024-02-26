"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[36400],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={sidebar_position:2},o="Settings",p={unversionedId:"cloud/waf/listener/security-profile/settings",id:"cloud/waf/listener/security-profile/settings",title:"Settings",description:"Set the information (such as Application Server, OS etc.) about the application differently for each Security Profile",source:"@site/docs/cloud/waf/listener/security-profile/settings.md",sourceDirName:"cloud/waf/listener/security-profile",slug:"/cloud/waf/listener/security-profile/settings",permalink:"/v8/cloud/waf/listener/security-profile/settings",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"cloud_sidebar",previous:{title:"Security Profile",permalink:"/v8/cloud/waf/listener/security-profile/"},next:{title:"Geo Filtering",permalink:"/v8/cloud/waf/listener/security-profile/geo-filtering"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],c={toc:u},m="wrapper";function d(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(m,n({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"settings"}),"Settings"),(0,r.kt)("p",null,"Set the information (such as Application Server, OS etc.) about the application differently for each Security Profile"),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Settings in Security Profile are used to specify all the settings for your ",(0,r.kt)("strong",{parentName:"p"},"WEBSITE/WEB SERVICE/WEB SOCKET")," applications. It enables the protection and invokes signature rules specific to the settings configured for the application."),(0,r.kt)("h3",n({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF")," > ",(0,r.kt)("strong",{parentName:"p"},"Zones")," > ",(0,r.kt)("strong",{parentName:"p"},"Listener")," > ",(0,r.kt)("strong",{parentName:"p"},"Security Profiles")," > ",(0,r.kt)("strong",{parentName:"p"},"Settings"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Operational Mode"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Mitigation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Paranoia Level"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Low")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Application Type"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Website")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Application Framework"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drupal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Application Language"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Application Server"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"IIS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Application Database"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"MYSQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Application OS"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dropdown"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Windows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"User Groups"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Temporary Blacklist Duration"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("h4",n({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Operational Mode")),(0,r.kt)("p",null,"This field specifies the operational mode for a specific security profile. Different operational modes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MITIGATION"),": In this mode, all the mitigations & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BYPASSED"),": In this mode, all the requests get bypassed without any filtration of mitigations & rule sets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RECORD"),": In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Operational Mode"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Choose from the dropdown (ex. MITIGATION)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"MITIGATION")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paranoia Level")),(0,r.kt)("p",null,"Paranoia level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter."),(0,r.kt)("p",null,"Note: Higher paranoia can also result in false positives."),(0,r.kt)("p",null,"Haltdos WAF comes with four Security Paranoia Levels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LOW"),": Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MEDIUM"),": A slightly higher level of security to block nearly all web application exploits. It might result in some false positives.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HIGH"),": A more paranoid approach to web security. It delivers a higher number of false positives.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UNDER ATTACK"),": The most paranoid defensive security method. It blocks sufficient legitimate requests to your site."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"SETTINGS"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Paranoia Level"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Choose from the dropdown (ex. LOW)"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"LOW")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Type")),(0,r.kt)("p",null,"Specify the type of application ( i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Framework")),(0,r.kt)("p",null,"An application framework or web framework is a software framework. It supports web applications (such as web resources, web services, and web APIs) development. It delivers a standard method to build and deploy web applications on the world wide web. Specify the application framework type used by the configured website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Language")),(0,r.kt)("p",null,"It is a formal language used to create a software program. It includes a set of instructions, commands, and other syntaxes. Primarily used in programming to implement algorithms. Specify the programming language type used by the configured website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Server")),(0,r.kt)("p",null,"The Backend Server is the server on which the configured website is running. It receives requests from clients and includes the logic to send data back to the client. It comprises a database that stores all of the data for the application. Specify the backend server type used by the configured website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application Database")),(0,r.kt)("p",null,"An Application database is a computer program. Its prime aim is to enter and retrieve information from the computerized database. Specify the application database type used by the configured website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Application OS")),(0,r.kt)("p",null,"An operating system (OS) is a low-level software system. It manages the basic functions of a computer, including computer hardware and software resources. It delivers basic services for computer programs. Specify the operating system type used by the configured website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User Groups")),(0,r.kt)("p",null,"Create a user group for operating the API gateway. Detailed information can be found using this link ",(0,r.kt)("strong",{parentName:"p"},"User Group"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Temporary Blacklist Duration")),(0,r.kt)("p",null,"The time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value."))}d.isMDXComponent=!0}}]);