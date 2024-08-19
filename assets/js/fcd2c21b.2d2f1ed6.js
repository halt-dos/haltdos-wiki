"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[49922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||v[f]||i;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:6},o="Variables",c={unversionedId:"community/waf/variable",id:"version-7.0/community/waf/variable",title:"Variables",description:"Overview",source:"@site/versioned_docs/version-7.0/community/waf/variable.md",sourceDirName:"community/waf",slug:"/community/waf/variable",permalink:"/v7/community/waf/variable",draft:!1,tags:[],version:"7.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"community_sidebar",previous:{title:"XML Policy",permalink:"/v7/community/waf/policy/xml_policy"},next:{title:"Rules",permalink:"/v7/community/waf/rules/"}},p={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Variable Name",id:"variable-name",level:4},{value:"Variable Type",id:"variable-type",level:4},{value:"Variable Scope",id:"variable-scope",level:4},{value:"Extraction Location",id:"extraction-location",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Value Expiry",id:"value-expiry",level:4}],u={toc:s},v="wrapper";function f(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)(v,a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"variables"}),"Variables"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Under varaibles user can create user defiend variable by configuring it's scope and value, these variable can be further use in the WAF solution like in variable rule, behavior rule.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Variable",src:r(61433).Z,width:"1918",height:"976"}),"  "),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Variables"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Variable")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".  ")),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h4",a({},{id:"variable-name"}),"Variable Name"),(0,n.kt)("p",null,"Users can specify the user-friendly variable name."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String / Integer \n\nDefault: Blank  \n")),(0,n.kt)("h4",a({},{id:"variable-type"}),"Variable Type"),(0,n.kt)("p",null,"Users can specify the variable type either it is string or integer."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String / Integer\n\nDefault: String \n")),(0,n.kt)("h4",a({},{id:"variable-scope"}),"Variable Scope"),(0,n.kt)("p",null,"Users can specify the scope of the variable. Users can select any of the following: ",(0,n.kt)("strong",{parentName:"p"},"GLOBAL"),", ",(0,n.kt)("strong",{parentName:"p"},"TRANSACTION"),", ",(0,n.kt)("strong",{parentName:"p"},"SESSION"),", ",(0,n.kt)("strong",{parentName:"p"},"CUSTOM"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Global / Transaction /  Session / Custom\n\nDefault: Transaction  \n")),(0,n.kt)("h4",a({},{id:"extraction-location"}),"Extraction Location"),(0,n.kt)("p",null,"Users can specify the location of the extraction"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: URL / Header Value / Cookie Value / Argument Value / Body Value\n\nDefault: Blank  \n")),(0,n.kt)("h4",a({},{id:"default-value"}),"Default Value"),(0,n.kt)("p",null,"Users can specify the default value for the variable."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String \n\nDefault: Blank  \n")),(0,n.kt)("h4",a({},{id:"value-expiry"}),"Value Expiry"),(0,n.kt)("p",null,"Users can specify the expiry for the variable in seconds."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nDefault: 1  \n\nMetric: Seconds\n")))}f.isMDXComponent=!0},61433:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/variable-2c2853a18cb32eba0683e40e82126372.png"}}]);