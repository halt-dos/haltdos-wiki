"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[30195],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,v=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={},s="Listener",l={unversionedId:"enterprise/waf/listener/listener",id:"version-7.0/enterprise/waf/listener/listener",title:"Listener",description:"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/listener.md",sourceDirName:"enterprise/waf/listener",slug:"/enterprise/waf/listener/",permalink:"/v7/enterprise/waf/listener/",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Machine Learning",permalink:"/v7/enterprise/waf/machine-learning"},next:{title:"Server Groups",permalink:"/v7/enterprise/waf/listener/servergroup/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:2},{value:"<strong>Domain / Virtual IP</strong>",id:"domain--virtual-ip",level:5},{value:"<strong>Reference</strong>",id:"reference",level:5},{value:"<strong>Service Type</strong>",id:"service-type",level:5},{value:"<strong>Origin Servers</strong>",id:"origin-servers",level:5}],u={toc:c},d="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(d,i({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"listener"}),"Listener"),(0,n.kt)("p",null,"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers"),(0,n.kt)("hr",null),(0,n.kt)("h2",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Listeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource. "),(0,n.kt)("p",null,"Listeners are commonly used to integrate a website into the WAF system. The WAF solution will only listen to domains/VIPs that have been added to it."),(0,n.kt)("p",null,"When we add a website to WAF, we must include our backend server and its port number."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Listener",src:r(94136).Z,width:"1906",height:"708"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Listener",src:r(94516).Z,width:"559",height:"369"})),(0,n.kt)("h2",i({},{id:"how-to-use-"}),"How to Use :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Listener button.")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h2",i({},{id:"description"}),"Description"),(0,n.kt)("h5",i({},{id:"domain--virtual-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Domain / Virtual IP")),(0,n.kt)("p",null,"This option allows user to specify fully qualified domain name of the website. Whenever adding the root domain, ensure it is empty."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Website Name\n\nDefault: Blank  \n")),(0,n.kt)("h5",i({},{id:"reference"}),(0,n.kt)("strong",{parentName:"h5"},"Reference")),(0,n.kt)("p",null,"This option allows user to create new listener with different subdomain by modifying an existing listener. It clones the same configuration in the new listener."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Listeners\n\nDefault: None  \n")),(0,n.kt)("h5",i({},{id:"service-type"}),(0,n.kt)("strong",{parentName:"h5"},"Service Type")),(0,n.kt)("p",null,"This option allows user to specify service type based on the protocol of backend application. The listener/subdomain can be created service type with any of the three protocols i.e. HTTP, TCP, UDP."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: HTTP / STREAM / MAIL\n\nDefault: HTTP \n")),(0,n.kt)("h5",i({},{id:"origin-servers"}),(0,n.kt)("strong",{parentName:"h5"},"Origin Servers")),(0,n.kt)("p",null,"This option allows user to specify IP and listening port of the backend server wherein load balancing occurs. There can be combination of multiple IP and listening port."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Server IPs with listening port(Ex. 8.8.8.8:80)\n\nDefault: Blank  \n")),(0,n.kt)("p",null,"For example, we want to add a backend server 10.0.0.45 with its listening port 443, we can use syntax '10.0.0.45:443'."))}f.isMDXComponent=!0},94516:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/addinglisteners-002d83271d9d4e8638ffd809730ab5a9.png"},94136:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/listeners-ab3e4dba1088849b1643441bbda294e2.png"}}]);