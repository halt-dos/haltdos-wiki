"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[38906],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99938:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const s={},i="Server Groups",l={unversionedId:"enterprise/adc/listeners/server_groups/server_groups",id:"enterprise/adc/listeners/server_groups/server_groups",title:"Server Groups",description:"User can determine load balancing mechanism and specify Server Groups.",source:"@site/docs/enterprise/adc/listeners/server_groups/server_groups.md",sourceDirName:"enterprise/adc/listeners/server_groups",slug:"/enterprise/adc/listeners/server_groups/",permalink:"/v8/enterprise/adc/listeners/server_groups/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"adc_sidebar",previous:{title:"Geo Filtering",permalink:"/v8/enterprise/adc/listeners/geo_filtering"},next:{title:"Servers",permalink:"/v8/enterprise/adc/listeners/server_groups/servers"}},p={},u=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Group Name</strong>",id:"group-name",level:5},{value:"<strong>Monitor</strong>",id:"monitor",level:5},{value:"<strong>SSL</strong>",id:"ssl",level:5},{value:"<strong>View Dashboard</strong>",id:"view-dashboard",level:5}],c={toc:u},d="wrapper";function m(e){var{components:r}=e,s=o(e,["components"]);return(0,n.kt)(d,a({},c,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"server-groups"}),"Server Groups"),(0,n.kt)("p",null,"User can determine load balancing mechanism and specify Server Groups."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Server Groups helps user to distributes network traffic to load balance across group of servers, for this at first we define a group name. Creating a group name in Servers Group helps to optimize and increase throughput of solution."),(0,n.kt)("p",null,"Purpose of Server Groups:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Server Groups is specifically designed for high availability solution. In case, if a server is having a problem another server from the group takes over issue. This ensures the high availability of solution.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If an active server from the group requires maintenance, it can be stopped while other servers handles its load. Thus, makes the maintenance easier. The Server Groups can be configured and managed easily without any trouble.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up is easy because of Server Groups. If we want to change or modify at every server, we can do it easily. Solution provides user to edit or modify the Group Name, Monitor, SSL and save the changes."))),(0,n.kt)("p",null,"Server Groups provide user two functionality at a page to add Server Group and View Dashboard for optimal solution."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server group",src:t(60272).Z,width:"1430",height:"343"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server group",src:t(72047).Z,width:"846",height:"412"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,n.kt)("a",a({parentName:"li"},{href:"/enterprise/adc"}),(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",a({parentName:"li"},{href:"/v8/enterprise/adc/listeners/"}),(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,n.kt)("strong",{parentName:"li"},"Server groups"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Server Group")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Group Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Monitor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SSL"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Disabled")))),(0,n.kt)("h3",a({},{id:"description"}),"Description:"),(0,n.kt)("h5",a({},{id:"group-name"}),(0,n.kt)("strong",{parentName:"h5"},"Group Name")),(0,n.kt)("p",null,"This option allows users to specify the user-friendly name to identify the Group Name. "),(0,n.kt)("h5",a({},{id:"monitor"}),(0,n.kt)("strong",{parentName:"h5"},"Monitor")),(0,n.kt)("p",null,"This option allows users to set the monitor type which continuously test upstream server, avoid the failed server and gracefully add recovered servers into the server group."),(0,n.kt)("h5",a({},{id:"ssl"}),(0,n.kt)("strong",{parentName:"h5"},"SSL")),(0,n.kt)("p",null,"This option allows users to enable/disable ",(0,n.kt)("strong",{parentName:"p"},"SSL"),". It helps to add more operational settings for send information safely and efficiently with the support of SSL Settings. "),(0,n.kt)("h5",a({},{id:"view-dashboard"}),(0,n.kt)("strong",{parentName:"h5"},"View Dashboard")),(0,n.kt)("p",null,"This option allows user to see the Server Analytics which is a dynamical report of server groups, show the analysis of resources, their upstream summary based on given date range. According to Date Range, dashboard shows report from past 5 Minutes to Custom Range."),(0,n.kt)("p",null,"This analytics is different from the homepage's analytics because here the dashboard is organized on the basis of server group and the analytics located under the ",(0,n.kt)("strong",{parentName:"p"},"Stack")," option is organized on the basis of ",(0,n.kt)("a",a({parentName:"p"},{href:"/v8/enterprise/adc/listeners/"}),(0,n.kt)("strong",{parentName:"a"},"listeners")),"."))}m.isMDXComponent=!0},60272:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/server_group_1-c5911579619c9903d95f86b43244ad0b.png"},72047:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/server_group_2-6b79fb8af7d706eac14376f03663d910.png"}}]);