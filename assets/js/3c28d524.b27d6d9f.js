"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[67650],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18126:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={sidebar_position:6},l="Virtualization",s={unversionedId:"enterprise/platform/virtualization",id:"enterprise/platform/virtualization",title:"Virtualization",description:"Support for multi-tenancy in appliance with virtualization technology.",source:"@site/docs/enterprise/platform/virtualization.md",sourceDirName:"enterprise/platform",slug:"/enterprise/platform/virtualization",permalink:"/enterprise/platform/virtualization",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"platform_sidebar",previous:{title:"Account",permalink:"/enterprise/platform/system/account"},next:{title:"Platform",permalink:"/kb/platform/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Virtual Stack and Instances",id:"virtual-stack-and-instances",level:2}],u={toc:p},f="wrapper";function d(t){var{components:e}=t,o=i(t,["components"]);return(0,r.kt)(f,a({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"virtualization"}),"Virtualization"),(0,r.kt)("p",null,"Support for multi-tenancy in appliance with virtualization technology."),(0,r.kt)("hr",null),(0,r.kt)("admonition",a({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"This virtualization feature is only available when your license supports virtualization.")),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos provides advanced application delivery and load balancing features to applications running on both physical and virtual machines. Haltdos offers vADC with built-in multi-tenancy which provides Virtualized ADC, Instantly Provisioned, Dynamic Resource Allocation, Easy Migration, Simple Orchestration, Centrally Managed. It is fast, scalable, and flexible."),(0,r.kt)("p",null,"The virtualization platform is built on top of Haltdos hypervisor technology that has been designed for low latency, high throughput solution with capabilities such as SRIOV, VM isolation, dynamic resizing, etc.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"virtualization",src:n(22251).Z,width:"777",height:"550"})),(0,r.kt)("h2",a({},{id:"virtual-stack-and-instances"}),"Virtual Stack and Instances"),(0,r.kt)("p",null,"In order to take advantage of virtualization technology, users will have to create a virtual stack to manage one or more virtual instances. Like your licensed stack, virtual stack provides full capability and flexibility of licensed stack with separate administration, RBAC control, policy management, etc. To create virtual stack, refer to Stack section.  "),(0,r.kt)("p",null,"To create virtual instance, your license should support virtualization. On the original licensed stack, go to Instance section to create a Hypervisor VM (virtual instance). Please refer to Instance section for creating a VM. Once a VM has been created, you can assign that VM to a virtual stack. You have flexibility of choosing one or more virtual instances from different host machines (hypervisors). These pool of virtual instances will be configured to run all Apps configured on the instance (ADC, SLB, WAF, LLB, DDOS, etc.).  "),(0,r.kt)("admonition",a({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"Each virtual instance created requires a pre-built OS template that can be downloaded from OS Template section by administrator. Typical size of VM template ranges from ",(0,r.kt)("strong",{parentName:"p"},"2 GB - 3 GB")," depending upon the operating system and OS version.")),(0,r.kt)("admonition",a({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"List of supported Hypervisors include: ",(0,r.kt)("strong",{parentName:"p"},"Hyper-V"),", ",(0,r.kt)("strong",{parentName:"p"},"Kernel-based Virutal Machine (KVM)"),", ",(0,r.kt)("strong",{parentName:"p"},"Red Hat Virtualization"),", ",(0,r.kt)("strong",{parentName:"p"},"Xen hypervisor"),", ",(0,r.kt)("strong",{parentName:"p"},"VMWare vSphere"))))}d.isMDXComponent=!0},22251:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/virtualization-d765b28533a6d8b8e2a1904bc2ff8793.png"}}]);