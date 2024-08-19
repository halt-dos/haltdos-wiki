"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[2401],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(g,a(a({ref:e},c),{},{components:n})):r.createElement(g,a({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90105:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const a={sidebar_position:6},l="Network",s={unversionedId:"enterprise/ddos/incidents/network",id:"version-7.0/enterprise/ddos/incidents/network",title:"Network",description:"---",source:"@site/versioned_docs/version-7.0/enterprise/ddos/incidents/network.md",sourceDirName:"enterprise/ddos/incidents",slug:"/enterprise/ddos/incidents/network",permalink:"/v7/enterprise/ddos/incidents/network",draft:!1,tags:[],version:"7.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"ddos_sidebar",previous:{title:"Cloud Signaling",permalink:"/v7/enterprise/ddos/cloud_signaling"},next:{title:"Application",permalink:"/v7/enterprise/ddos/incidents/application"}},p={},c=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Timestamp</strong>",id:"timestamp",level:5},{value:"<strong>Category</strong>",id:"category",level:5},{value:"<strong>Rule</strong>",id:"rule",level:5},{value:"<strong>Src IP</strong>",id:"src-ip",level:5},{value:"<strong>Src Port</strong>",id:"src-port",level:5},{value:"<strong>Dest IP</strong>",id:"dest-ip",level:5},{value:"<strong>Dest Port</strong>",id:"dest-port",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>DPI Error Code</strong>",id:"dpi-error-code",level:5},{value:"<strong>Flag</strong>",id:"flag",level:5},{value:"<strong>Direction</strong>",id:"direction",level:5},{value:"<strong>Country</strong>",id:"country",level:5},{value:"<strong>Bit Saved</strong>",id:"bit-saved",level:5},{value:"<strong>Counter</strong>",id:"counter",level:5},{value:"<strong>Score</strong>",id:"score",level:5},{value:"<strong>Action</strong>",id:"action",level:5}],d={toc:c},u="wrapper";function h(t){var{components:e}=t,a=i(t,["components"]);return(0,r.kt)(u,o({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"network"}),"Network"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"On the incident page, users can check what packets are dropped by Haltdos mitigation solution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"incidents",src:n(13980).Z,width:"1685",height:"702"})),(0,r.kt)("h3",o({},{id:"how-to-use"}),"How to Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps > DDoS > Incident"))),(0,r.kt)("p",null,"Users can customize the date range for the incident details & check incident details about specific network profiles. Users can see the following incident details.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Fields"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"CATEGORY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"RULE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"SRC IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"SRC PORT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"DST IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"DST PORT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"PROTOCOL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"DPI Error Code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"FLAG")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"DIRECTION")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"COUNTRY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"BYTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"SCORE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"ACTION")))),(0,r.kt)("h3",o({},{id:"description"}),"Description"),(0,r.kt)("h5",o({},{id:"timestamp"}),(0,r.kt)("strong",{parentName:"h5"},"Timestamp")),(0,r.kt)("p",null,"This column specify the timestamp for the event."),(0,r.kt)("h5",o({},{id:"category"}),(0,r.kt)("strong",{parentName:"h5"},"Category")),(0,r.kt)("p",null,"This option specify the category for the event."),(0,r.kt)("h5",o({},{id:"rule"}),(0,r.kt)("strong",{parentName:"h5"},"Rule")),(0,r.kt)("p",null,"This option specify the rule and rule ID for the triggered event."),(0,r.kt)("h5",o({},{id:"src-ip"}),(0,r.kt)("strong",{parentName:"h5"},"Src IP")),(0,r.kt)("p",null,"This option specify the source IP for the event."),(0,r.kt)("h5",o({},{id:"src-port"}),(0,r.kt)("strong",{parentName:"h5"},"Src Port")),(0,r.kt)("p",null,"This option specify the source port for the event."),(0,r.kt)("h5",o({},{id:"dest-ip"}),(0,r.kt)("strong",{parentName:"h5"},"Dest IP")),(0,r.kt)("p",null,"This option specify the destination IP for the event."),(0,r.kt)("h5",o({},{id:"dest-port"}),(0,r.kt)("strong",{parentName:"h5"},"Dest Port")),(0,r.kt)("p",null,"This option specify the destination port for the event."),(0,r.kt)("h5",o({},{id:"protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Protocol")),(0,r.kt)("p",null,"This option specify the protocol used in communication for the event."),(0,r.kt)("h5",o({},{id:"dpi-error-code"}),(0,r.kt)("strong",{parentName:"h5"},"DPI Error Code")),(0,r.kt)("p",null,"This option specify the DPI error code if any request has been dropped due to DPI inspection."),(0,r.kt)("h5",o({},{id:"flag"}),(0,r.kt)("strong",{parentName:"h5"},"Flag")),(0,r.kt)("p",null,"This option specify the TCP flag used for the communication."),(0,r.kt)("h5",o({},{id:"direction"}),(0,r.kt)("strong",{parentName:"h5"},"Direction")),(0,r.kt)("p",null,"This option specify the direction of the communication which has been dropped. The communication can be Inbound or outbound. Inbound communication indicates that traffic has been generated from the WAN and moving towards LAN segment. The Outbound communication indicates that traffic has been generated from the LAN and moving towards WAN segment."),(0,r.kt)("h5",o({},{id:"country"}),(0,r.kt)("strong",{parentName:"h5"},"Country")),(0,r.kt)("p",null,"This option specify the country of the malicious IP."),(0,r.kt)("h5",o({},{id:"bit-saved"}),(0,r.kt)("strong",{parentName:"h5"},"Bit Saved")),(0,r.kt)("p",null,"This option specify the overall bit count that has been blocked."),(0,r.kt)("h5",o({},{id:"counter"}),(0,r.kt)("strong",{parentName:"h5"},"Counter")),(0,r.kt)("p",null,"This option specify the overall count of the event that has been dropped."),(0,r.kt)("h5",o({},{id:"score"}),(0,r.kt)("strong",{parentName:"h5"},"Score")),(0,r.kt)("p",null,"This option specify the packet score for the triggered event."),(0,r.kt)("h5",o({},{id:"action"}),(0,r.kt)("strong",{parentName:"h5"},"Action")),(0,r.kt)("p",null,"This option specify the action for the triggered event. The Action can be dropped or log."))}h.isMDXComponent=!0},13980:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/incidents-4760a4803f7f3884b12b8848f869c994.png"}}]);