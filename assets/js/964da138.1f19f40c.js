"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43249],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:1},i="Operational Setting",p={unversionedId:"enterprise/platform/system/instance/settings/operational",id:"enterprise/platform/system/instance/settings/operational",title:"Operational Setting",description:"---",source:"@site/docs/enterprise/platform/system/instance/settings/operational.md",sourceDirName:"enterprise/platform/system/instance/settings",slug:"/enterprise/platform/system/instance/settings/operational",permalink:"/enterprise/platform/system/instance/settings/operational",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Events",permalink:"/enterprise/platform/system/events"},next:{title:"Backup Setting",permalink:"/enterprise/platform/system/instance/settings/backup_policy"}},s={},c=[{value:"How to Use:",id:"how-to-use",level:4},{value:"Description",id:"description",level:3},{value:"Management IP",id:"management-ip",level:5}],u={toc:c},f="wrapper";function m(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)(f,a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"operational-setting"}),"Operational Setting"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"It shows the health status of the Instances, user can select whether to enable the health check or not."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Monitor",src:n(37527).Z,width:"1908",height:"997"}),"  "),(0,r.kt)("h4",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"System >Instance > (Select Instance) > Setting > Operational Setting")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save CHanges"))),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"management-ip"}),"Management IP"),(0,r.kt)("p",null,"Configure instance management IP address"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Management Port")),(0,r.kt)("p",null,"Configure instance management port"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 9000\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SSL Engine")),(0,r.kt)("p",null,"Specify the engine to be used for SSL Offloading. Requires reboot"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Software Engine / Hardware Engine\n\nDefault: Software Engine\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Operational Mode")),(0,r.kt)("p",null,"Choose the instance mode of operation. Requires reboot"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Inline Mode / Offline Mode\n\nDefault: Inline Mode \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CPU Affinity")),(0,r.kt)("p",null,"Configure CPU affinity for optimization. Requires reboot"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Huge Pages")),(0,r.kt)("p",null,"Configure Huge Pages for optimization. Requires reboot"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Public Certificate File")),(0,r.kt)("p",null,"Upload public file"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select File to upload\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Intermediate Certificate File")),(0,r.kt)("p",null,"Upload intermediate file"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select File to upload\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CA Bundle File")),(0,r.kt)("p",null,"Upload CA bundle"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select File to upload\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Private Key File")),(0,r.kt)("p",null,"Upload private file"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Select File to upload\n\nDefault: Blank\n")))}m.isMDXComponent=!0},37527:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sysoperen-572cd65dd7cbfd96417a28700159a555.png"}}]);