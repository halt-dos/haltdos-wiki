"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[18861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:3},a="SNMP",l={unversionedId:"enterprise/adc/listeners/server_groups/snmp",id:"version-7.0/enterprise/adc/listeners/server_groups/snmp",title:"SNMP",description:"---",source:"@site/versioned_docs/version-7.0/enterprise/adc/listeners/server_groups/snmp.md",sourceDirName:"enterprise/adc/listeners/server_groups",slug:"/enterprise/adc/listeners/server_groups/snmp",permalink:"/v7/enterprise/adc/listeners/server_groups/snmp",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adc_sidebar",previous:{title:"Load Balancing",permalink:"/v7/enterprise/adc/listeners/server_groups/load_balancing"},next:{title:"Monitors",permalink:"/v7/enterprise/adc/listeners/monitors"}},p={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Enable Monitoring</strong>",id:"enable-monitoring",level:5},{value:"<strong>SNMP port</strong>",id:"snmp-port",level:5},{value:"<strong>SNMP Version</strong>",id:"snmp-version",level:5},{value:"<strong>SNMP Community</strong>",id:"snmp-community",level:5},{value:"<strong>SNMP Security level </strong>",id:"snmp-security-level-",level:5},{value:"<strong>SNMP Check Type</strong>",id:"snmp-check-type",level:5},{value:"<strong>SNMP Timeout</strong>",id:"snmp-timeout",level:5}],u={toc:c},m="wrapper";function d(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)(m,o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"snmp"}),"SNMP"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snmp",src:r(20316).Z,width:"1830",height:"749"})),(0,n.kt)("h3",o({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,n.kt)("a",o({parentName:"li"},{href:"/v7/enterprise/adc"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",o({parentName:"li"},{href:"/v7/enterprise/adc/listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("a",o({parentName:"li"},{href:"/v7/enterprise/adc/listeners/server_groups/"}),(0,n.kt)("strong",{parentName:"a"}," Server Groups")),"."),(0,n.kt)("li",{parentName:"ol"},"Select the group name."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Add Server option"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("h3",o({},{id:"description"}),"Description:"),(0,n.kt)("h5",o({},{id:"enable-monitoring"}),(0,n.kt)("strong",{parentName:"h5"},"Enable Monitoring")),(0,n.kt)("p",null,"This option allows users to specify enabling SNMP monitoring."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,n.kt)("h5",o({},{id:"snmp-port"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP port")),(0,n.kt)("p",null,"This option allows users to specify the SNMP port."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 161 \n")),(0,n.kt)("h5",o({},{id:"snmp-version"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Version")),(0,n.kt)("p",null,"This option allows users to specify the SNMP version for monitoring."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: SNMP v1 / SNMP v2 / SNMP v2c / SNMP v3\n\nDefault: SNMP v1 \n")),(0,n.kt)("h5",o({},{id:"snmp-community"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Community")),(0,n.kt)("p",null,"This option allows users to specify SNMP Community."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",o({},{id:"snmp-security-level-"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Security level ")),(0,n.kt)("p",null,"This option allows users to specify the SNMP security level."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: No Auth or Privacy\n\nDefault: No Auth or Privacy \n")),(0,n.kt)("h5",o({},{id:"snmp-check-type"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Check Type")),(0,n.kt)("p",null,"This option allows users to specify SNMP checks."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: CPU Measurement / RAM Measurement / CPM & RAM Measurement\n\nDefault: CPU Measurement \n")),(0,n.kt)("h5",o({},{id:"snmp-timeout"}),(0,n.kt)("strong",{parentName:"h5"},"SNMP Timeout")),(0,n.kt)("p",null,"This option allows users to specify the SNMP security level."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 60000 \n\nMetrics: Milliseconds\n")))}d.isMDXComponent=!0},20316:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/snmp-d8565beb2b823d36aa50e220dae2d09f.png"}}]);