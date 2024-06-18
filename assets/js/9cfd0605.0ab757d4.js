"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[73101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={},l="Listener",s={unversionedId:"enterprise/waf/listener/listener",id:"enterprise/waf/listener/listener",title:"Listener",description:"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers",source:"@site/docs/enterprise/waf/listener/listener.md",sourceDirName:"enterprise/waf/listener",slug:"/enterprise/waf/listener/",permalink:"/v8/enterprise/waf/listener/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"waf_sidebar",previous:{title:"Machine Learning",permalink:"/v8/enterprise/waf/machine-learning"},next:{title:"Operational",permalink:"/v8/enterprise/waf/listener/Setting/operational"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:2},{value:"<strong>Domain / Virtual IP</strong>",id:"domain--virtual-ip",level:5},{value:"<strong>Reference</strong>",id:"reference",level:5},{value:"<strong>Service Type</strong>",id:"service-type",level:5},{value:"<strong>Origin Servers</strong>",id:"origin-servers",level:5}],u={toc:c},d="wrapper";function m(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)(d,i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"listener"}),"Listener"),(0,r.kt)("p",null,"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers"),(0,r.kt)("hr",null),(0,r.kt)("h2",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Listeners are used for configuring websites and servers appropriately that it can help to reduce response time, increase throughput, optimize resource use and overload of any single resource. "),(0,r.kt)("p",null,"Listeners are commonly used to integrate a website into the WAF system. The WAF solution will only listen to domains/VIPs that have been added to it."),(0,r.kt)("p",null,"When we add a website to WAF, we must include our backend server and its port number."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener",src:n(94136).Z,width:"1906",height:"708"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener",src:n(94516).Z,width:"559",height:"369"})),(0,r.kt)("h2",i({},{id:"how-to-use-"}),"How to Use :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add Listener button.")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Parameter"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Domain/Virtual IP"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Website Name"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Reference"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Clone existing Listener setting for new subdomain"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Service Type"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Origin Servers & port"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Server IP\u2019s with listening port(Ex. 8.8.8.8:80)"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("h2",i({},{id:"description"}),"Description"),(0,r.kt)("h5",i({},{id:"domain--virtual-ip"}),(0,r.kt)("strong",{parentName:"h5"},"Domain / Virtual IP")),(0,r.kt)("p",null,"This option allows user to specify fully qualified domain name of the website. Whenever adding the root domain, ensure it is empty."),(0,r.kt)("h5",i({},{id:"reference"}),(0,r.kt)("strong",{parentName:"h5"},"Reference")),(0,r.kt)("p",null,"This option allows user to create new listener with different subdomain by modifying an existing listener. It clones the same configuration in the new listener."),(0,r.kt)("h5",i({},{id:"service-type"}),(0,r.kt)("strong",{parentName:"h5"},"Service Type")),(0,r.kt)("p",null,"This option allows user to specify service type based on the protocol of backend application. The listener/subdomain can be created service type with any of the three protocols i.e. HTTP, TCP, UDP."),(0,r.kt)("h5",i({},{id:"origin-servers"}),(0,r.kt)("strong",{parentName:"h5"},"Origin Servers")),(0,r.kt)("p",null,"This option allows user to specify IP and listening port of the backend server wherein load balancing occurs. There can be combination of multiple IP and listening port."),(0,r.kt)("p",null,"For example, we want to add a backend server 10.0.0.45 with its listening port 443, we can use syntax '10.0.0.45:443'."))}m.isMDXComponent=!0},94516:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/addinglisteners-002d83271d9d4e8638ffd809730ab5a9.png"},94136:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listeners-ab3e4dba1088849b1643441bbda294e2.png"}}]);