"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[75085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=l,m=u["".concat(s,".").concat(h)]||u[h]||f[h]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},55063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const a={sidebar_position:6},o="Whitelist",s={unversionedId:"enterprise/waf/Settings/whitelist",id:"enterprise/waf/Settings/whitelist",title:"Whitelist",description:"---",source:"@site/docs/enterprise/waf/Settings/whitelist.md",sourceDirName:"enterprise/waf/Settings",slug:"/enterprise/waf/Settings/whitelist",permalink:"/enterprise/waf/Settings/whitelist",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"waf_sidebar",previous:{title:"Blacklist",permalink:"/enterprise/waf/Settings/blacklist"},next:{title:"Hardware Specs",permalink:"/enterprise/waf/hardware"}},p={},c=[{value:"Overview",id:"overview",level:3},{value:"Global Whitelist Rules",id:"global-whitelist-rules",level:3},{value:"Description",id:"description",level:2}],u={toc:c},f="wrapper";function h(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(f,l({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"whitelist"}),"Whitelist"),(0,n.kt)("hr",null),(0,n.kt)("h3",l({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Global settings help to configure the settings whose scope is global. Here we have Global Whitelist Rules which would whitelist the mitigations globally irrespective of zone or listener."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Global Whitelist Rules",src:r(83758).Z,width:"1910",height:"900"})),(0,n.kt)("h3",l({},{id:"global-whitelist-rules"}),"Global Whitelist Rules"),(0,n.kt)("p",null,"These are the whitelist rule which helps in whitelisting mitigations globally for all the zones and listener in the stack."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Global Whitelist")," > ",(0,n.kt)("strong",{parentName:"li"},"Global Whitelist Rule")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure the Fields"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("h2",l({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Name"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the rule name."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Message"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify a user-friendly message"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Priority"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the priority of the rule. Rule with less priority will be followed first."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the URI ( Uniform Resource Identifier )for the rule as per the requirement."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: Regex\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Method"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the HTTP method which should be followed for the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS\n\nDefault: ALL \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Custom Rule ID"),(0,n.kt)("br",{parentName:"p"}),"\n","Users can specify the custom rule ID which was triggered or for which rule the user is setting up the whitelist rule."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}h.isMDXComponent=!0},83758:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/whitelist-326eb6c1c33c1a569609982f920a50cb.png"}}]);