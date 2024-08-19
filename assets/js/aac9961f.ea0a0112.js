"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[8975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),g=i,f=p["".concat(a,".").concat(g)]||p[g]||d[g]||r;return t?o.createElement(f,l(l({ref:n},u),{},{components:t})):o.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:i,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},43655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>a,toc:()=>u});t(67294);var o=t(3905);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={sidebar_position:3},c="Aggressive Aging",a={unversionedId:"enterprise/ddos/profile/connections/aggressive_aging",id:"enterprise/ddos/profile/connections/aggressive_aging",title:"Aggressive Aging",description:"---",source:"@site/docs/enterprise/ddos/profile/connections/aggressive_aging.md",sourceDirName:"enterprise/ddos/profile/connections",slug:"/enterprise/ddos/profile/connections/aggressive_aging",permalink:"/enterprise/ddos/profile/connections/aggressive_aging",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"ddos_sidebar",previous:{title:"TCP Shield",permalink:"/enterprise/ddos/profile/connections/tcp_shield"},next:{title:"Application Layer",permalink:"/enterprise/ddos/profile/application_layer"}},s={},u=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Inbound Aging Enabled",id:"inbound-aging-enabled",level:4},{value:"Inbound Connection Timeout",id:"inbound-connection-timeout",level:4},{value:"Inbound Incomplete Connection Timeout",id:"inbound-incomplete-connection-timeout",level:4},{value:"Outbound Aging Enabled",id:"outbound-aging-enabled",level:4},{value:"Outbound Connection Timeout",id:"outbound-connection-timeout",level:4},{value:"Outbound Incomplete Connection Timeout",id:"outbound-incomplete-connection-timeout",level:4}],p={toc:u},d="wrapper";function g(e){var{components:n}=e,l=r(e,["components"]);return(0,o.kt)(d,i({},p,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"aggressive-aging"}),"Aggressive Aging"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Aggressive aging feature is used to set the age value for non-responsive established & non-established connections."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"aggressive aging",src:t(60664).Z,width:"1425",height:"671"})),(0,o.kt)("h3",i({},{id:"how-to-use"}),"How to Use"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Apps > DDoS > Profile > Connection Settings > Aggressive Aging"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the settings.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Save Changes")))),(0,o.kt)("h3",i({},{id:"description"}),"Description"),(0,o.kt)("h4",i({},{id:"inbound-aging-enabled"}),"Inbound Aging Enabled"),(0,o.kt)("p",null,"User can Enable/Disable the validation of timeout for inbound TCP connection. By default this field is disable by enabling it, Haltdos Anti-DDoS solution monitor the age of inbound TCP connection state according to the configured policies."),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,o.kt)("h4",i({},{id:"inbound-connection-timeout"}),"Inbound Connection Timeout"),(0,o.kt)("p",null,"User can specify the time limit for inbound TCP connections. By specifying this field user can limit the time for inbound TCP connections, if the connection is non-responsive or non-established it will disconnect the connection according to the input time automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 600\n")),(0,o.kt)("h4",i({},{id:"inbound-incomplete-connection-timeout"}),"Inbound Incomplete Connection Timeout"),(0,o.kt)("p",null,"User can specify the time limit for inbound incomplete TCP connections. By specifying this field user can limit the time for inbound half open TCP connections,if the connection is not established till the input time it will disconnect the connection."),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 30\n")),(0,o.kt)("h4",i({},{id:"outbound-aging-enabled"}),"Outbound Aging Enabled"),(0,o.kt)("p",null,"User can Enable/Disable the validation of timeout for outbound TCP connection. By default this field is disable by enabling it, Haltdos Anti-DDoS solution monitor the age of outbound TCP connection state according to the configured policies."),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,o.kt)("h4",i({},{id:"outbound-connection-timeout"}),"Outbound Connection Timeout"),(0,o.kt)("p",null,"User can specify the time limit for outbound TCP connections. By specifying this field user can limit the time for outbound TCP connections, if the connection is non-responsive or non-established it will disconnect the connection according to the input time automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 600\n")),(0,o.kt)("h4",i({},{id:"outbound-incomplete-connection-timeout"}),"Outbound Incomplete Connection Timeout"),(0,o.kt)("p",null,"User can specify the time limit for outbound incomplete TCP connections. By specifying this field user can limit the time for outbound half open TCP connections,if the connection is not established till the input time it will disconnect the connection."),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 30\n")))}g.isMDXComponent=!0},60664:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/securityprofile_aggressive_aging-b50ac4b1aaa73eda123feccac54eea79.png"}}]);