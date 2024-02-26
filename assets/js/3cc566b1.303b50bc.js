"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[47317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:13},o="Discovery",p={unversionedId:"enterprise/waf/listener/discovery",id:"enterprise/waf/listener/discovery",title:"Discovery",description:"Overview",source:"@site/docs/enterprise/waf/listener/discovery.md",sourceDirName:"enterprise/waf/listener",slug:"/enterprise/waf/listener/discovery",permalink:"/v8/enterprise/waf/listener/discovery",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"waf_sidebar",previous:{title:"Learning",permalink:"/v8/enterprise/waf/listener/learning"},next:{title:"User Groups",permalink:"/v8/enterprise/waf/usergroups"}},s={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>HTTP Method</strong>",id:"http-method",level:5},{value:"<strong>Add URI</strong>",id:"add-uri",level:5},{value:"<strong>Regex</strong>",id:"regex",level:5},{value:"<strong>Description</strong>",id:"description-1",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Fixed URL</strong>",id:"fixed-url",level:5},{value:"<strong>Parameter Name</strong>",id:"parameter-name",level:5},{value:"<strong>Parameter Type</strong>",id:"parameter-type",level:5}],c={toc:d},u="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)(u,a({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"discovery"}),"Discovery"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Discovery displays all the parameters learned from the request i.e. headers, cookies, arguments. The learning can be deployed using Deploy Learning. Users can also upload a swagger file."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Discovery",src:r(32373).Z,width:"1835",height:"811"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Discovery",src:r(34755).Z,width:"1840",height:"782"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Discovery")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Add URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enter the URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Regex"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enter the specific URI regex"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Regex"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enter the URI description"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Select the method"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"POST")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Fixed URL"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enable it for fixed URL"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Parameter Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enter parameter name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Parameter Type"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Select from the drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"http-method"}),(0,n.kt)("strong",{parentName:"h5"},"HTTP Method")),(0,n.kt)("p",null,"Users are allowed to specify the HTTP method."),(0,n.kt)("h5",a({},{id:"add-uri"}),(0,n.kt)("strong",{parentName:"h5"},"Add URI")),(0,n.kt)("p",null,"Users can enter the URI."),(0,n.kt)("h5",a({},{id:"regex"}),(0,n.kt)("strong",{parentName:"h5"},"Regex")),(0,n.kt)("p",null,"Users can enter the specific URI regex."),(0,n.kt)("h5",a({},{id:"description-1"}),(0,n.kt)("strong",{parentName:"h5"},"Description")),(0,n.kt)("p",null,"Users can enter the URI description."),(0,n.kt)("h5",a({},{id:"method"}),(0,n.kt)("strong",{parentName:"h5"},"Method")),(0,n.kt)("p",null,"Users can select the method."),(0,n.kt)("h5",a({},{id:"fixed-url"}),(0,n.kt)("strong",{parentName:"h5"},"Fixed URL")),(0,n.kt)("p",null,"Users can enable it for fixed URL."),(0,n.kt)("h5",a({},{id:"parameter-name"}),(0,n.kt)("strong",{parentName:"h5"},"Parameter Name")),(0,n.kt)("p",null,"Users can enter parameter name."),(0,n.kt)("h5",a({},{id:"parameter-type"}),(0,n.kt)("strong",{parentName:"h5"},"Parameter Type")),(0,n.kt)("p",null,"Users can select the parameter type from drop down menu."))}m.isMDXComponent=!0},32373:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/discovery1-3597a6b3e6eefdfaaea5be4b30544598.png"},34755:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/discovery2-cd362b575bfec1cf3b66cfa9d3410147.png"}}]);