"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[59532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[f]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39423:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={},a=void 0,s={unversionedId:"enterprise/waf/listener/profiles/profiles",id:"enterprise/waf/listener/profiles/profiles",title:"profiles",description:"Profiles create different security profiles for different sub-sections of your website.",source:"@site/docs/enterprise/waf/listener/profiles/profiles.md",sourceDirName:"enterprise/waf/listener/profiles",slug:"/enterprise/waf/listener/profiles/",permalink:"/v8/enterprise/waf/listener/profiles/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Compression",permalink:"/v8/enterprise/waf/listener/loadBalancing/compression"},next:{title:"Settings",permalink:"/v8/enterprise/waf/listener/profiles/settings"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],f={toc:c},u="wrapper";function d(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(u,i({},f,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Profiles create different security profiles for different sub-sections of your website."),(0,n.kt)("hr",null),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Profiles is the default profile that contains most commonly used web application settings served through a virtual service. For customizing a profile, it is highly recommended to create a new profile instead of editing the default profile. Haltdos Profile perform the learning and blocking globally and per page basis."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Profiles.png",src:r(27468).Z,width:"1910",height:"900"}),"  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Profiles.png",src:r(55794).Z,width:"1910",height:"900"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Profile"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Profile Name:")),(0,n.kt)("p",null,"This option allows user to specify a user-friendly name of security profile. By default, a profile with 'Default' name is already created upon adding a listener."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Profile Priority:")),(0,n.kt)("p",null,"This option provides prioritize feature for deciding which profile want to use first for matching request and taking action."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0 \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Application Type:")),(0,n.kt)("p",null,"This option specifies type of application (i.e. website or web service or web socket) want to select. A website is defined as a collection of web pages and related content that is identified by a common domain name whereas, a web service is a standardized medium to propagate communication between the client and server applications. And a web socket is a duplex protocol used mainly in the client-server communication channel."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: WEBSITE / WEB SERVICE / WEB SOCKET\n\nDefault: WEBSITE \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Protocol:")),(0,n.kt)("p",null,"This option specifies the service type for the subdomain i.e. HTTP, TCP, UDP. Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols. "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: HTTP\n\nDefault: HTTP \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Countries:")),(0,n.kt)("p",null,"This option specify countries from where request is coming should match with this profile. "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select from list of Countries\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI")),(0,n.kt)("p",null,"This option specify the URI that will be matched with this profile. Once the URI matched, policies configured under this profiles will be implemented."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: URI\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source IP Prefixes:")),(0,n.kt)("p",null,"This option specify the source IP Prefixes for the requests coming will be matched with this profile."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP Prefix\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Destination Port:")),(0,n.kt)("p",null,"This option specifies the destination port Prefixes where requests coming will be matched with this profile."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP Prefix\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reference:")),(0,n.kt)("p",null,"This drop-down is used to clone an existing profile with the same configuration to a new profile."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select Reference\n\nDefault: Blank \n")),(0,n.kt)("admonition",i({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"User can clone existing profile with the same configuration to a new profile on the new user-specified URI.\nFollowing configurations are present under Security Profile.")))}d.isMDXComponent=!0},27468:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/securityProfile1-6eaf42ad26f1baf5fe8a77c46e43c600.png"},55794:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/securityProfile2-bddf87edce481de93014aeddf2612b53.png"}}]);