"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[35686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,v=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={sidebar_position:1},s="Listeners",l={unversionedId:"professional/waf/listeners",id:"version-7.0/professional/waf/listeners",title:"Listeners",description:"Used to configure websites and servers.",source:"@site/versioned_docs/version-7.0/professional/waf/listeners.md",sourceDirName:"professional/waf",slug:"/professional/waf/listeners",permalink:"/professional/waf/listeners",draft:!1,tags:[],version:"7.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"professional_sidebar",previous:{title:"Installation",permalink:"/professional/getting-started/installation"},next:{title:"Operational",permalink:"/professional/waf/operational"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"<strong>Domain/ Virtual IP</strong>",id:"domain-virtual-ip",level:5},{value:"<strong>Reference</strong>",id:"reference",level:5},{value:"<strong>Service Type</strong>",id:"service-type",level:5},{value:"<strong>Origin Servers</strong>",id:"origin-servers",level:5}],u={toc:c},f="wrapper";function d(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(f,i({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"listeners"}),"Listeners"),(0,r.kt)("p",null,"Used to configure websites and servers."),(0,r.kt)("hr",null),(0,r.kt)("h3",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Listeners are used for collecting set of websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener",src:n(15773).Z,width:"1888",height:"990"})),(0,r.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log into the Haltdos WAF Professional edition web UI console."),(0,r.kt)("li",{parentName:"ol"},"Then go to ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," "),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add Listener")," button."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener",src:n(83465).Z,width:"1888",height:"990"})),(0,r.kt)("h4",i({},{id:"description"}),"Description:"),(0,r.kt)("h5",i({},{id:"domain-virtual-ip"}),(0,r.kt)("strong",{parentName:"h5"},"Domain/ Virtual IP")),(0,r.kt)("p",null,"This field specifies the fully qualified name of the website for protection. Ensure to keep it empty while adding the root domain. Listener with a specific domain name can be respectively configured for protection. "),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Website Name\n\nDefault: Blank  \n")),(0,r.kt)("h5",i({},{id:"reference"}),(0,r.kt)("strong",{parentName:"h5"},"Reference")),(0,r.kt)("p",null,"This field allows the user to adapt the configurations of an existing listener to the newly created listener with a different sub-domain. It clones the same configuration in the new listener.  "),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select previouly added listeners\n\nDefault: None  \n")),(0,r.kt)("h5",i({},{id:"service-type"}),(0,r.kt)("strong",{parentName:"h5"},"Service Type")),(0,r.kt)("p",null,"This field specifies the type of service for the subdomain i.e. ",(0,r.kt)("strong",{parentName:"p"},"HTTP"),".  "),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: HTTP\n\nDefault: HTTP  \n")),(0,r.kt)("h5",i({},{id:"origin-servers"}),(0,r.kt)("strong",{parentName:"h5"},"Origin Servers")),(0,r.kt)("p",null,"This field specifies the IP and listening port of the backend server on which load balancing will occur. There can be multiple IP and listening port combinations.  "),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Server IPs with listening port(Ex. 8.8.8.8:80)\n\nDefault: Blank  \n")),(0,r.kt)("p",null,"Following configurations can be managed by clicking on the newly added listener name."))}d.isMDXComponent=!0},15773:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listeners1-ea52071cc322dedb756fb038299e6d3f.png"},83465:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listeners2-097e550d8363f6a02adb3aed269e3278.png"}}]);