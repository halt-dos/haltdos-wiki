"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[86620],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27871:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={sidebar_position:8},o="Cluster",s={unversionedId:"enterprise/ddos/cluster",id:"version-6.0/enterprise/ddos/cluster",title:"Cluster",description:"For High Availability",source:"@site/versioned_docs/version-6.0/enterprise/ddos/cluster.md",sourceDirName:"enterprise/ddos",slug:"/enterprise/ddos/cluster",permalink:"/haltdos-wiki/v6/enterprise/ddos/cluster",draft:!1,tags:[],version:"6.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"ddos_sidebar",previous:{title:"Top Talkers",permalink:"/haltdos-wiki/v6/enterprise/ddos/advance_settings/top_talkers"}},p={},d=[{value:"<strong>How To Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Primary Instance</strong>",id:"primary-instance",level:5},{value:"<strong>HA Mode</strong>",id:"ha-mode",level:5},{value:"<strong>HA Port</strong>",id:"ha-port",level:5},{value:"<strong>Peer check interval</strong>",id:"peer-check-interval",level:5},{value:"<strong>Peer failure threshold</strong>",id:"peer-failure-threshold",level:5},{value:"<strong>Max allowed steps</strong>",id:"max-allowed-steps",level:5},{value:"<strong>Enabled Bandwidth Monitoring</strong>",id:"enabled-bandwidth-monitoring",level:5},{value:"<strong>Minimum Bandwidth</strong>",id:"minimum-bandwidth",level:5},{value:"<strong>Link monitoring interval</strong>",id:"link-monitoring-interval",level:5},{value:"<strong>Minimum Active Links</strong>",id:"minimum-active-links",level:5}],c={toc:d},m="wrapper";function u(t){var{components:e}=t,l=i(t,["components"]);return(0,r.kt)(m,a({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"cluster"}),"Cluster"),(0,r.kt)("p",null,"For High Availability"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"DDOS Protection support high availability, for two compatible DDoS Protector devices to operate in Active \u2013 Active, Active \u2013 Passive, Cluster mode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ha_settings",src:n(48386).Z,width:"1501",height:"924"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),(0,r.kt)("strong",{parentName:"h3"},"How To Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stack > Instance > Instance Name > HA"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"User can configure as per requirement")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Save Settings"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ha_settings",src:n(65081).Z,width:"1471",height:"517"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Settings"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Defaults"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Primary Instance"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"HA Mode"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"HA Port"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"11211")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Peer check Interval"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Peer failure threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Peer recovery threshold"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Max Allowed Flaps"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enable Bandwidth Monitoring"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolen"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Minimum Bandwidth"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"1024/10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Link Monitoring Interval"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Minimum Active links"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")))),(0,r.kt)("h3",a({},{id:"description"}),(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",a({},{id:"primary-instance"}),(0,r.kt)("strong",{parentName:"h5"},"Primary Instance")),(0,r.kt)("p",null,"Specify the default instance from the drop-down that will have an active mode on start-up"),(0,r.kt)("h5",a({},{id:"ha-mode"}),(0,r.kt)("strong",{parentName:"h5"},"HA Mode")),(0,r.kt)("p",null,"Specify the high availability mode between multiple mitigation instances"),(0,r.kt)("h5",a({},{id:"ha-port"}),(0,r.kt)("strong",{parentName:"h5"},"HA Port")),(0,r.kt)("p",null,"Specify port over which mitigation instances communicate with each other"),(0,r.kt)("h5",a({},{id:"peer-check-interval"}),(0,r.kt)("strong",{parentName:"h5"},"Peer check interval")),(0,r.kt)("p",null,"Specify the time (in sec) after which one mitigation instance checks the health of its peer"),(0,r.kt)("h5",a({},{id:"peer-failure-threshold"}),(0,r.kt)("strong",{parentName:"h5"},"Peer failure threshold")),(0,r.kt)("p",null,"Specify the number of failed peer health checks after which a mitigation instance considers its peer unhealthy"),(0,r.kt)("h5",a({},{id:"max-allowed-steps"}),(0,r.kt)("strong",{parentName:"h5"},"Max allowed steps")),(0,r.kt)("p",null,"In some situations, two mitigation instances may Allowed keep changing their state from active to inactive. A Flaps flap is counted when the instance leaves the active state. This can result in poor network performance and can disrupt normal traffic flows. Specify allowed number of flaps after which the primary instance goes into hardware bypass"),(0,r.kt)("h5",a({},{id:"enabled-bandwidth-monitoring"}),(0,r.kt)("strong",{parentName:"h5"},"Enabled Bandwidth Monitoring")),(0,r.kt)("p",null,"Specify if bandwidth monitoring should be used to trigger fail over in the HA cluster"),(0,r.kt)("h5",a({},{id:"minimum-bandwidth"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Bandwidth")),(0,r.kt)("p",null,"Specify minimum bandwidth (in bps) for a specified interval (in sec) below which fail-over is triggered"),(0,r.kt)("h5",a({},{id:"link-monitoring-interval"}),(0,r.kt)("strong",{parentName:"h5"},"Link monitoring interval")),(0,r.kt)("p",null,"Specify the interval in milliseconds (ms) for periodic link monitoring between multiple mitigation instance"),(0,r.kt)("h5",a({},{id:"minimum-active-links"}),(0,r.kt)("strong",{parentName:"h5"},"Minimum Active Links")),(0,r.kt)("p",null,"Specify the minimum allowed active link pairs below which the solution will mark itself down"))}u.isMDXComponent=!0},48386:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ddos31-62c09cf0f83585ce25dd20c971f17d05.png"},65081:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ddos32-8545857fda5108b9edc8027195c67d0d.png"}}]);