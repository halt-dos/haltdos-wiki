"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[14545],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,v=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(v,i(i({ref:t},s),{},{components:r})):a.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={sidebar_position:6},o="Variables",p={unversionedId:"community/docs/waf/variable",id:"version-6.0/community/docs/waf/variable",title:"Variables",description:"Overview",source:"@site/versioned_docs/version-6.0/community/docs/waf/variable.md",sourceDirName:"community/docs/waf",slug:"/community/docs/waf/variable",permalink:"/v6/community/docs/waf/variable",draft:!1,tags:[],version:"6.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"community_sidebar",previous:{title:"XML Policy",permalink:"/v6/community/docs/waf/policy/xml_policy"},next:{title:"Header Rules",permalink:"/v6/community/docs/waf/rules/header_rules"}},u={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Variable Name",id:"variable-name",level:4},{value:"Variable Type",id:"variable-type",level:4},{value:"Variable Scope",id:"variable-scope",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Value Expiry",id:"value-expiry",level:4}],c={toc:s},d="wrapper";function m(e){var{components:t}=e,i=l(e,["components"]);return(0,a.kt)(d,n({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"variables"}),"Variables"),(0,a.kt)("h3",n({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Under varaibles user can create user defiend variable by configuring it's scope and value, these variable can be further use in the WAF solution like in variable rule, behavior rule.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Variable",src:r(61433).Z,width:"1918",height:"976"}),"  "),(0,a.kt)("h3",n({},{id:"how-to-use"}),"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Variables"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Add Variable")," button."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".  ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameters"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Accepted value"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Variable Name"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Variable Type"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Variable Scope"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Transaction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Default Value"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Value Expiry"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Integers"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1")))),(0,a.kt)("h3",n({},{id:"description"}),"Description"),(0,a.kt)("h4",n({},{id:"variable-name"}),"Variable Name"),(0,a.kt)("p",null,"Users can specify the user-friendly variable name."),(0,a.kt)("h4",n({},{id:"variable-type"}),"Variable Type"),(0,a.kt)("p",null,"Users can specify the variable type either it is string or integer."),(0,a.kt)("h4",n({},{id:"variable-scope"}),"Variable Scope"),(0,a.kt)("p",null,"Users can specify the scope of the variable. Users can select any of the following: ",(0,a.kt)("strong",{parentName:"p"},"GLOBAL"),", ",(0,a.kt)("strong",{parentName:"p"},"TRANSACTION"),", ",(0,a.kt)("strong",{parentName:"p"},"SESSION"),", ",(0,a.kt)("strong",{parentName:"p"},"CUSTOM"),"."),(0,a.kt)("h4",n({},{id:"default-value"}),"Default Value"),(0,a.kt)("p",null,"Users can specify the default value for the variable."),(0,a.kt)("h4",n({},{id:"value-expiry"}),"Value Expiry"),(0,a.kt)("p",null,"Users can specify the expiry for the variable in seconds."))}m.isMDXComponent=!0},61433:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/variable-2c2853a18cb32eba0683e40e82126372.png"}}]);