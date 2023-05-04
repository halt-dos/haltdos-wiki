"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[1773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={sidebar_position:1},i="Access Control",l={unversionedId:"enterprise/platform/user_management/access_control",id:"version-6.0/enterprise/platform/user_management/access_control",title:"Access Control",description:"Permissions given to different users",source:"@site/versioned_docs/version-6.0/enterprise/platform/user_management/access_control.md",sourceDirName:"enterprise/platform/user_management",slug:"/enterprise/platform/user_management/access_control",permalink:"/v6/enterprise/platform/user_management/access_control",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Virtualization",permalink:"/v6/enterprise/platform/virtualization"},next:{title:"Active Directory",permalink:"/v6/enterprise/platform/user_management/active_directory"}},p={},c=[],m={toc:c},u="wrapper";function d(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(u,o({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"access-control"}),"Access Control"),(0,n.kt)("p",null,"Permissions given to different users"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos Cloud provides multi-level RBAC access control over Stack. This allows owners to assign users with respective permissions on Haltdos Cloud."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"control",src:r(78748).Z,width:"1525",height:"251"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Different Membership Levels")),(0,n.kt)("p",null,"Haltdos supports access control levels as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"STACK"),": Member of a stack can perform operations on and below stack level as per user permissions on the stack."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"APP"),": Member of an app can perform operations on and below app level as per user permission."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"LISTENER"),": Member of a listener can perform operations on listener level as per user permission.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Different User Permissions")),(0,n.kt)("p",null,"Haltdos supports three types of user permissions as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"OWNER: Has the privilege to perform all the operations (add, edit and delete) on the stack, app, listener, and members in the stack, app, listener i.e. Owner, Member, Observer."),(0,n.kt)("li",{parentName:"ol"},"MEMBER: Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given."),(0,n.kt)("li",{parentName:"ol"},"OBSERVER: Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.")),(0,n.kt)("p",null,"You can send an invitation to any user irrespective of whether he/she is already a registered user on Haltdos or not."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How to add members to your stack?")),(0,n.kt)("p",null,"When the admin creates a stack, he can add a user as an Owner. Then the owner will have the privilege to add, edit, delete members in the specific stack, app, listener  as owner, member, and observer respectively.\nThe owner can add/edit/delete one or more owners within the stack with the same privilege."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"addmember",src:r(15177).Z,width:"675",height:"816"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"To add a member to a Stack, App, Zone")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to your Haltdos account."),(0,n.kt)("li",{parentName:"ol"},"Click on the stack/app/zone name in which you want to add members."),(0,n.kt)("li",{parentName:"ol"},"Click on Members in the sidebar."),(0,n.kt)("li",{parentName:"ol"},"Click on the Invite Members button."),(0,n.kt)("li",{parentName:"ol"},"Enter the email address of the member you want to add in the Email input field."),(0,n.kt)("li",{parentName:"ol"},"Click on the Access drop-down to select permission for the user."),(0,n.kt)("li",{parentName:"ol"},"Click on the Save Changes button.")),(0,n.kt)("p",null,"Members have the right to accept/reject the invitation and remove membership if the invitation is already accepted."),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Operations allowed are specific on membership levels for different user permissions.")),(0,n.kt)("p",{parentName:"admonition"},"If owner delete itself from the stack, and stack exists without OWNER authority. Please contact support to grant user access as OWNER. ")))}d.isMDXComponent=!0},78748:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/access_control1-b812ba57e6b0ede584a6cfa268bc82fe.png"},15177:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/access_control2-94e23a53c554b27369071a207f64174b.png"}}]);