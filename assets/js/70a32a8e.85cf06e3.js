"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[1690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,v=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:6},l="Virtualization",s={unversionedId:"enterprise/platform/virtualization",id:"version-6.0/enterprise/platform/virtualization",title:"Virtualization",description:"Support for multi-tenancy in appliance with virtualization technology.",source:"@site/versioned_docs/version-6.0/enterprise/platform/virtualization.md",sourceDirName:"enterprise/platform",slug:"/enterprise/platform/virtualization",permalink:"/v6/enterprise/platform/virtualization",draft:!1,tags:[],version:"6.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"platform_sidebar",previous:{title:"OS Templates",permalink:"/v6/enterprise/platform/templates"},next:{title:"Access Control",permalink:"/v6/enterprise/platform/user_management/access_control"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Virtual Stack and Instances",id:"virtual-stack-and-instances",level:2}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)(f,a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"virtualization"}),"Virtualization"),(0,r.kt)("p",null,"Support for multi-tenancy in appliance with virtualization technology."),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos provides advanced application delivery and load balancing features to applications running on both physical and virtual machines. Haltdos offers vADC with built-in multi-tenancy which provides Virtualized ADC, Instantly Provisioned, Dynamic Resource Allocation, Easy Migration, Simple Orchestration, Centrally Managed. It is fast, scalable, and flexible.  "),(0,r.kt)("p",null,"The virtualization platform is built on top of Haltdos hypervisor technology that has been designed for low latency, high throughput solution with capabilities such as SRIOV, VM isolation, dynamic resizing, etc.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"virtualization",src:n(95238).Z,width:"777",height:"550"})),(0,r.kt)("h2",a({},{id:"virtual-stack-and-instances"}),"Virtual Stack and Instances"),(0,r.kt)("p",null,"In order to take advantage of virtualization technology, users will have to create a virtual stack to manage one or more virtual instances. Like your licensed stack, virtual stack provides full capability and flexibility of licensed stack with separate administration, RBAC control, policy management, etc. To create virtual stack, refer to Stack section.  "),(0,r.kt)("p",null,"To create virtual instance, your license should support virtualization. On the original licensed stack, go to Instance section to create a Hypervison VM (virtual instance). Please refer to Instance section for creating a VM. Once a VM has been created, you can assign that VM to a virtual stack. You have flexibility of choosing one or more virtual instances from different host machines (hypervisors). These pool of virtual instances will be configured to run all Apps configured on the instance (ADC, SLB, WAF, LLB, DDOS, etc.).  "),(0,r.kt)("admonition",a({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Each virtual instance created requies a pre-built OS template that can be downloaded from OS Template section by administrator. Typical size of VM template ranges from 2 GB - 3 GB depending upon the operating system and OS version.")),(0,r.kt)("p",null,"Each virtual instance created requies a pre-built OS template that can be downloaded from OS Template section by administrator. Typical size of VM template ranges from 2 GB - 3 GB depending upon the operating system and OS version."))}d.isMDXComponent=!0},95238:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/virtualization-d765b28533a6d8b8e2a1904bc2ff8793.png"}}]);