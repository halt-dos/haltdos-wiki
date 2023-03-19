"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[67644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:2},o="Domain Filters",s={unversionedId:"enterprise/gslb/domain-filters",id:"enterprise/gslb/domain-filters",title:"Domain Filters",description:"---",source:"@site/docs/enterprise/gslb/domain-filters.md",sourceDirName:"enterprise/gslb",slug:"/enterprise/gslb/domain-filters",permalink:"/haltdos-wiki/enterprise/gslb/domain-filters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gslb_sidebar",previous:{title:"Rules",permalink:"/haltdos-wiki/enterprise/gslb/listener/rules"},next:{title:"Incidents",permalink:"/haltdos-wiki/enterprise/gslb/incidents"}},p={},c=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],m={toc:c},d="wrapper";function u(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)(d,a({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"domain-filters"}),"Domain Filters"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Domain Filters")," allows a DNS resolver to modify DNS records. It was originally developed as a way to block access to dangerous websites.  "),(0,n.kt)("p",null,"For example, if a computer queries the IP address of a known dangerous site that spreads malware, the DNS resolver can return NXDOMAIN as the DNS response, so the computer can\u2019t connect to the dangerous site. This is the original use case. As such, Domain Filter is also known as ",(0,n.kt)("strong",{parentName:"p"},"DNS firewall."),"  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"domain filters",src:r(89580).Z,width:"1840",height:"937"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Domain Filter")," "),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Domain Filter"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter the name of file and mention the domain name and click on ",(0,n.kt)("strong",{parentName:"li"},"Save changes"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Select Listener")," "),(0,n.kt)("li",{parentName:"ol"},"Go to Domain Filter Files > Select the file from Drop Down (created at Domain Filter )"),(0,n.kt)("li",{parentName:"ol"},"Click On ",(0,n.kt)("strong",{parentName:"li"},"Save Changes")," > Domain Filter File will be selected.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"domain filters",src:r(69838).Z,width:"1849",height:"794"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Value"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Script Area"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"domain filters",src:r(50604).Z,width:"1841",height:"784"})),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name")),(0,n.kt)("p",null,"Users can specify the name for the Domain Filter files."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Domain Names")),(0,n.kt)("p",null,"Users can mention the domains of which record need to be blocked."))}u.isMDXComponent=!0},69838:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/domain-b0c26e34d158732d6f7c3b75950563b7.png"},50604:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/domain_filter-3eda1fd97a66b4e5524365dcfdff3068.png"},89580:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/domainfilters-28fced9239cefbf411d5ba8d78f0389a.png"}}]);