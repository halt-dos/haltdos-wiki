"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[57149],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:e},c),{},{components:n})):r.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55038:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={sidebar_position:2},l="OSFP",s={unversionedId:"enterprise/platform/stacks/instance/routing/osfp",id:"version-6.0/enterprise/platform/stacks/instance/routing/osfp",title:"OSFP",description:"Support for dynamic routing with Open Shortest Path First (OSFP)",source:"@site/versioned_docs/version-6.0/enterprise/platform/stacks/instance/routing/osfp.md",sourceDirName:"enterprise/platform/stacks/instance/routing",slug:"/enterprise/platform/stacks/instance/routing/osfp",permalink:"/v6/enterprise/platform/stacks/instance/routing/osfp",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"BGP",permalink:"/v6/enterprise/platform/stacks/instance/routing/bgp"},next:{title:"RIP",permalink:"/v6/enterprise/platform/stacks/instance/routing/rip"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3}],u={toc:c},m="wrapper";function f(t){var{components:e}=t,i=o(t,["components"]);return(0,r.kt)(m,a({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"osfp"}),"OSFP"),(0,r.kt)("p",null,"Support for dynamic routing with Open Shortest Path First (OSFP)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"OSFP is the dynamic routing protocol used in large to very large IP networks. The protocol uses a link-state database and link-state advertisements to map the network topology. This topological map is used with the link-state algorithm to determine the best route available. The algorithm used by OSPF to determine best routes relies on the link-state database and allows OSPF to update its routes faster than RIP when a network change is encountered. OSPF uses areas to segment the network, which helps it decrease the general size of the link-state database and consequently speeds up network convergence when changes in the network are experienced."),(0,r.kt)("p",null,"Haltdos solution supports dynamic routing over OSFP protocol. This section details how to configure Haltdos to support OSFP."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"osfp",src:n(94043).Z,width:"1261",height:"406"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to Stack > Instances > Instance > Routing > OSFP"),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click Save Changes")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable OSPF Routing"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"ENABLED / DISABLED"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"DISABLED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Listening IP"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Listening IP"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Configuration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"specify the configuration"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))))}f.isMDXComponent=!0},94043:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/osfp1-ef10ad3c6834687e2c27e500be74a1c0.png"}}]);