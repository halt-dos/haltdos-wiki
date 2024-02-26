"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[74919],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62551:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={sidebar_position:3},o="Sites",s={unversionedId:"enterprise/gslb/sites",id:"enterprise/gslb/sites",title:"Sites",description:"Identification of global data centers through sites",source:"@site/docs/enterprise/gslb/sites.md",sourceDirName:"enterprise/gslb",slug:"/enterprise/gslb/sites",permalink:"/v8/enterprise/gslb/sites",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gslb_sidebar",previous:{title:"Incidents",permalink:"/v8/enterprise/gslb/incidents"},next:{title:"Global Server Load Balancing",permalink:"/v8/kb/gslb/"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],c={toc:u},m="wrapper";function d(t){var{components:e}=t,i=l(t,["components"]);return(0,r.kt)(m,a({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"sites"}),"Sites"),(0,r.kt)("p",null,"Identification of global data centers through sites"),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"A GSLB site is the logical collection of GSLB virtual server, GSLB service, LB virtual server, etc. A GSLB service identifies a load balancing or content switching virtual server, which can be at the local site or a remote site. If the GSLB virtual server selects a load balancing or content switching virtual server at a remote site, it sends the virtual server\u2019s IP address to the DNS server. The DNS server sends it to the client. The client then resends the request to the new virtual server at the new IP."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sites",src:n(60317).Z,width:"1848",height:"945"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the links: ",(0,r.kt)("strong",{parentName:"p"},"Apps")," > ",(0,r.kt)("strong",{parentName:"p"},"GSLB")," > ",(0,r.kt)("strong",{parentName:"p"},"Sites")," > ",(0,r.kt)("strong",{parentName:"p"},"Add Site"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described in the table below.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Settings"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Site Enabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Site Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Site ID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Stack ID"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Site IP"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Server I.P."),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Port"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Username"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Password"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Inactivity Threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"60")))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Site Enabled")),(0,r.kt)("p",null,"Specify to enable the Site."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Site Name")),(0,r.kt)("p",null,"Specify the name for your site."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Site ID")),(0,r.kt)("p",null,"It is auto generated function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Site IP")),(0,r.kt)("p",null,"User can Specify the IP address of the Site "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Port")),(0,r.kt)("p",null,"It specifies the port number to connect "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Username")),(0,r.kt)("p",null,"User can set a username to access the site "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Password")),(0,r.kt)("p",null,"User can set a password to protect the site from any unknown login"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inactivity Threshold")),(0,r.kt)("p",null,"In this User can specify when no events or flows are generated in the specified time."))}d.isMDXComponent=!0},60317:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/sites-e418844a8b9c08e0508f2ce78f503709.png"}}]);