"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[31037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={},s="Listeners",l={unversionedId:"enterprise/adc/listeners/listeners",id:"enterprise/adc/listeners/listeners",title:"Listeners",description:"Used to configure websites and servers.",source:"@site/docs/enterprise/adc/listeners/listeners.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/",permalink:"/v8/enterprise/adc/listeners/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"adc_sidebar",previous:{title:"Application Delivery Controller",permalink:"/v8/enterprise/adc"},next:{title:"Listener Settings",permalink:"/v8/enterprise/adc/listeners/listener_settings"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"<strong>Domain/ Virtual IP</strong>",id:"domain-virtual-ip",level:5},{value:"<strong>Reference</strong>",id:"reference",level:5},{value:"<strong>Service Type</strong>",id:"service-type",level:5},{value:"<strong>Origin Servers</strong>",id:"origin-servers",level:5}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(d,i({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"listeners"}),"Listeners"),(0,n.kt)("p",null,"Used to configure websites and servers."),(0,n.kt)("hr",null),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Listeners are used for collecting set of websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Listener1",src:r(15680).Z,width:"1451",height:"466"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Listener2",src:r(36189).Z,width:"839",height:"530"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stack")," > ",(0,n.kt)("a",i({parentName:"li"},{href:"/enterprise/adc"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Listener")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("h4",i({},{id:"description"}),"Description:"),(0,n.kt)("h5",i({},{id:"domain-virtual-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Domain/ Virtual IP")),(0,n.kt)("p",null,"This field specifies the fully qualified name of the website for protection. Ensure to keep it empty while adding the root domain. Listener with a specific domain name can be respectively configured for protection."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",i({},{id:"reference"}),(0,n.kt)("strong",{parentName:"h5"},"Reference")),(0,n.kt)("p",null,"This field allows the user to adapt the configurations of an existing listener to the newly created listener with a different sub-domain. It clones the same configuration in the new listener."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select existing listener.\n\nDefault: None \n")),(0,n.kt)("h5",i({},{id:"service-type"}),(0,n.kt)("strong",{parentName:"h5"},"Service Type")),(0,n.kt)("p",null,"This field specifies the type of service for the subdomain i.e. ",(0,n.kt)("strong",{parentName:"p"},"HTTP, TCP, UDP"),". Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: HTTP / TCP / UDP\n\nDefault: HTTP \n")),(0,n.kt)("h5",i({},{id:"origin-servers"}),(0,n.kt)("strong",{parentName:"h5"},"Origin Servers")),(0,n.kt)("p",null,"This field specifies the IP and listening port of the backend server on which load balancing will occur. There can be multiple IP and listening port combinations."),(0,n.kt)("p",null,"Following configurations can be managed by clicking on the newly added listener name. Post adding required details, we can click on ",(0,n.kt)("strong",{parentName:"p"},"Save")," button to save changes."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank\n")))}f.isMDXComponent=!0},15680:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/listeners_1-c71492284147ab45b673dc1eeecb734b.png"},36189:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/listeners_2-7654e0c490ffb00c3bcf229bcf32ef06.png"}}]);