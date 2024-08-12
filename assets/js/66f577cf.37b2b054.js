"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[67644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:2},l="Domain Filters",s={unversionedId:"enterprise/gslb/domain-filters",id:"enterprise/gslb/domain-filters",title:"Domain Filters",description:"---",source:"@site/docs/enterprise/gslb/domain-filters.md",sourceDirName:"enterprise/gslb",slug:"/enterprise/gslb/domain-filters",permalink:"/v8/enterprise/gslb/domain-filters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gslb_sidebar",previous:{title:"Policy Rules",permalink:"/v8/enterprise/gslb/listener/rules"},next:{title:"Incidents",permalink:"/v8/enterprise/gslb/incidents"}},p={},c=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],u={toc:c},m="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(m,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"domain-filters"}),"Domain Filters"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Domain Filters")," allows a DNS resolver to modify DNS records. It was originally developed as a way to block access to dangerous websites.  "),(0,n.kt)("p",null,"For example, if a computer queries the IP address of a known dangerous site that spreads malware, the DNS resolver can return NXDOMAIN as the DNS response, so the computer can\u2019t connect to the dangerous site. This is the original use case. As such, Domain Filter is also known as ",(0,n.kt)("strong",{parentName:"p"},"DNS firewall."),"  "),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Domain Filter")," "),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Domain Filter"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter the name of file and mention the domain name and click on ",(0,n.kt)("strong",{parentName:"li"},"Save changes"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Select Listener")," "),(0,n.kt)("li",{parentName:"ol"},"Go to Domain Filter Files > Select the file from Drop Down (created at Domain Filter )"),(0,n.kt)("li",{parentName:"ol"},"Click On ",(0,n.kt)("strong",{parentName:"li"},"Save Changes")," > Domain Filter File will be selected.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"domain filters",src:r(97950).Z,width:"1425",height:"908"})),(0,n.kt)("h3",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name")),(0,n.kt)("p",null,"Users can specify the name for the Domain Filter files."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Domain Names")),(0,n.kt)("p",null,"Users can mention the domains of which record need to be blocked."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}d.isMDXComponent=!0},97950:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/domain_filter-b2d5ef7f65c371617378ca4a47debbd7.png"}}]);