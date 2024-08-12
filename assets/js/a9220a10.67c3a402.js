"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[76494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={sidebar_position:4},i="Scan Importer",s={unversionedId:"enterprise/waf/tools/scan_importer",id:"enterprise/waf/tools/scan_importer",title:"Scan Importer",description:"---",source:"@site/docs/enterprise/waf/tools/scan_importer.md",sourceDirName:"enterprise/waf/tools",slug:"/enterprise/waf/tools/scan_importer",permalink:"/v8/enterprise/waf/tools/scan_importer",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"waf_sidebar",previous:{title:"IOC Exporter",permalink:"/v8/enterprise/waf/tools/ioc_exporter"},next:{title:"Virtual Patching",permalink:"/v8/enterprise/waf/tools/virtualpatching"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Name</strong>",id:"name",level:5},{value:"<strong>Scan Tool</strong>",id:"scan-tool",level:5},{value:"<strong>HTTP method</strong>",id:"http-method",level:5},{value:"<strong>URL</strong>",id:"url",level:5},{value:"<strong>Import Frequency</strong>",id:"import-frequency",level:5},{value:"<strong>Next Run</strong>",id:"next-run",level:5},{value:"<strong>Timezone</strong>",id:"timezone",level:5},{value:"<strong>Attribute</strong>",id:"attribute",level:4},{value:"<strong>Attribute Type</strong>",id:"attribute-type",level:5},{value:"<strong>Attribute Name</strong>",id:"attribute-name",level:5},{value:"<strong>Attribute Value</strong>",id:"attribute-value",level:5}],c={toc:u},d="wrapper";function m(e){var{components:t}=e,l=a(e,["components"]);return(0,r.kt)(d,o({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"scan-importer"}),"Scan Importer"),(0,r.kt)("hr",null),(0,r.kt)("h3",o({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Scan Importer is an API based tool provided in Haltdos WAF to pull scan results A security policy enforcement layer that prevents known vulnerabilities from being exploited.\nSince the security enforcement layer analyzes transactions and intercepts attacks in transit, malicious traffic never reaches the web application with the virtual patch. Virtual patches prevent exploitation attempts from succeeding, even when no changes have been made to the application source code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Scan Importer",src:n(17348).Z,width:"1910",height:"900"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Tools")," > ",(0,r.kt)("strong",{parentName:"li"},"Scan Importer")),(0,r.kt)("li",{parentName:"ol"},"Configure your scanner settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"save changes"))),(0,r.kt)("h3",o({},{id:"description"}),"Description"),(0,r.kt)("h5",o({},{id:"enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Enabled")),(0,r.kt)("p",null,"This option allows users to enable the scan importer."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("h5",o({},{id:"name"}),(0,r.kt)("strong",{parentName:"h5"},"Name")),(0,r.kt)("p",null,"This option allows users to configure a user-friendly name for the scan rule."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"scan-tool"}),(0,r.kt)("strong",{parentName:"h5"},"Scan Tool")),(0,r.kt)("p",null,"This option allows users to select the scanning tools from the list of tools provided."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Acunetix (JSON) / BURP (XML) / OWASP Zap (JSON)\n\nDefault: Acunetix (JSON)\n")),(0,r.kt)("h5",o({},{id:"http-method"}),(0,r.kt)("strong",{parentName:"h5"},"HTTP method")),(0,r.kt)("p",null,"This option allows users to select the HTTP method for the scanning requests. Users can select any HTTP method among GET, PUT, & POST."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: GET / POST / PUT\n\nDefault: GET\n")),(0,r.kt)("h5",o({},{id:"url"}),(0,r.kt)("strong",{parentName:"h5"},"URL")),(0,r.kt)("p",null,"This option allows users to add the URL for the scan import request."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: URL\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"import-frequency"}),(0,r.kt)("strong",{parentName:"h5"},"Import Frequency")),(0,r.kt)("p",null,"This option allows users to set the scanning frequency. The scan will run on the mentioned frequency without any manual intervention."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select Frequency\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"next-run"}),(0,r.kt)("strong",{parentName:"h5"},"Next Run")),(0,r.kt)("p",null,"This option allows users to set the next time frequency for the next run."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"timezone"}),(0,r.kt)("strong",{parentName:"h5"},"Timezone")),(0,r.kt)("p",null,"This option allows users to set the timezone for the next run time."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select Timezone\n\nDefault: Asia/Calcutta\n")),(0,r.kt)("h4",o({},{id:"attribute"}),(0,r.kt)("strong",{parentName:"h4"},"Attribute")),(0,r.kt)("p",null,"This option allows users to add username & password attributes for the API request. User can set the any of the following: ",(0,r.kt)("strong",{parentName:"p"},"ARG, PARAM, HEADER, COOKIE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: Select SSL Cipher\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"attribute-type"}),(0,r.kt)("strong",{parentName:"h5"},"Attribute Type")),(0,r.kt)("p",null,"This option allows users to add multiple attribute to select which attribute should be used to authenticate the API request."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: ARG / PARAM / HEADER / COOOKIE\n\nDefault: ARG\n")),(0,r.kt)("h5",o({},{id:"attribute-name"}),(0,r.kt)("strong",{parentName:"h5"},"Attribute Name")),(0,r.kt)("p",null,"This option allows users to select the attribute name."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",o({},{id:"attribute-value"}),(0,r.kt)("strong",{parentName:"h5"},"Attribute Value")),(0,r.kt)("p",null,"This option allows users to set the attribute value."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}m.isMDXComponent=!0},17348:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scanImporter-14cfb2e7628b0a5eb8e59d91c4dd53c0.png"}}]);