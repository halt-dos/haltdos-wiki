"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[30057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_position:0},s="Operational",l={unversionedId:"enterprise/gslb/listener/operational",id:"version-7.0/enterprise/gslb/listener/operational",title:"Operational",description:"To set up the Operational Settings for the particular Listener.",source:"@site/versioned_docs/version-7.0/enterprise/gslb/listener/operational.md",sourceDirName:"enterprise/gslb/listener",slug:"/enterprise/gslb/listener/operational",permalink:"/v7/enterprise/gslb/listener/operational",draft:!1,tags:[],version:"7.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"gslb_sidebar",previous:{title:"Listener",permalink:"/v7/enterprise/gslb/listener/"},next:{title:"Geo Filtering",permalink:"/v7/enterprise/gslb/listener/geo_filtering"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:c},f="wrapper";function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(f,o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"operational"}),"Operational"),(0,n.kt)("p",null,"To set up the Operational Settings for the particular Listener."),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Operational Setting configure different settings of Listener like the network protocol to be used. User can also configure the listener to work as Recursive DNS, Authoritative DNS or Both. Operational Setting specifies the IP address of the Listener. Basically, Operational enables the user to make custom changes on its DNS."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"operational",src:r(93528).Z,width:"1851",height:"763"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to  ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Operational")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("p",null,"Configure the following parameters to set up the desired settings:"),(0,n.kt)("h4",o({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Protocols"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify the resolution on specific Protocols for e.g. UDP, TCP or TLS.  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Specify protocols\n\nDefault: UDP / TCP\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DNS Service Type"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify the DNS Service type  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Authorative / Recursive / Auth & Recursive\n\nDefault: Auth & Recursive \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Upstream Resolvers"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify the upstream resolver for Recursive DNS. This option only works when DNS service type is set to Rescursive  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: 8.8.8.8 \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Addresses"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify the list of addresses that should be used in Recursive DNS.  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: 10.0.0.243\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Refuse Query with no RD flag"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify to respond with refuse on queries with no RD flag.  "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Domain Filter Files"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",o({parentName:"p"},{href:"/v7/enterprise/gslb/domain-filters"}),"Domain Filter Files")," is a mechanism to introduce a customized policy in Domain Name System servers, so that recursive resolvers return possibly modified results. By modifying a result, access to the corresponding host can be blocked. User can select which Domain Filter Files should be used. "),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cache Size"),"\nHere we can specify the cache size."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Intger\n\nDefault: 100\n\nMetrics: MB\n")))}d.isMDXComponent=!0},93528:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/operational-0bcdaa04986b2b7864b01059b3ea44d2.png"}}]);