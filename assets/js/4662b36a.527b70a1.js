"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50075],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(r),g=a,h=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return r?n.createElement(h,o(o({ref:e},u),{},{components:r})):n.createElement(h,o({ref:e},u))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},78753:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const o={sidebar_position:6},i="Traffic Shaper / QoS",s={unversionedId:"enterprise/llb/rules/QoS",id:"enterprise/llb/rules/QoS",title:"Traffic Shaper / QoS",description:"Traffic Shaper Rules & Setings",source:"@site/docs/enterprise/llb/rules/QoS.md",sourceDirName:"enterprise/llb/rules",slug:"/enterprise/llb/rules/QoS",permalink:"/v8/enterprise/llb/rules/QoS",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"llb_sidebar",previous:{title:"Policy Routing",permalink:"/v8/enterprise/llb/rules/policy_routing"},next:{title:"Haltdos LLB Deployment Scenarios",permalink:"/v8/scenarios/llb"}},p={},u=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Source Ports</strong>",id:"source-ports",level:5},{value:"<strong>Destination Port</strong>",id:"destination-port",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Traffic Rule</strong>",id:"traffic-rule",level:5},{value:"<strong>Traffic Burst</strong>",id:"traffic-burst",level:5}],c={toc:u},d="wrapper";function g(t){var{components:e}=t,o=l(t,["components"]);return(0,n.kt)(d,a({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"traffic-shaper--qos"}),"Traffic Shaper / QoS"),(0,n.kt)("p",null,"Traffic Shaper Rules & Setings"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Traffic shaping (also known as packet shaping) is a bandwidth management technique that delays the flow of certain types of network packets in order to ensure network performance for higher priority applications. Traffic shaping essentially limits the amount of bandwidth that can be consumed by certain types of applications. It is primarily used to ensure a high quality of service for business-related network traffic."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaper",src:r(17107).Z,width:"1842",height:"934"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > LLB > Rules > Traffic Shaper"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Text"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Text"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Specify Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"User Friendly message for Rule"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Enabled"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Outgoing Interface"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source IP"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"IP address with CIDR"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Destination IP"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"IP address with CIDR"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Source Ports"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Destination Ports"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Protocol"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Select the protocol"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Any")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Traffic Rate"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Traffic Burst"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"5")))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"This option allows the user to select desired rule name."),(0,n.kt)("h5",a({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize."),(0,n.kt)("h5",a({},{id:"enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Enabled")),(0,n.kt)("p",null,"It Specify rule is enabled or disabled. By default, this option is enabled."),(0,n.kt)("h5",a({},{id:"outgoing-interface"}),(0,n.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,n.kt)("p",null,"This option allows the user to select the outgoing interface from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing Interface. Users can select the Interface from the drop-down menu."),(0,n.kt)("h5",a({},{id:"source-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Source IP")),(0,n.kt)("p",null,"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface"),(0,n.kt)("h5",a({},{id:"destination-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Destination IP")),(0,n.kt)("p",null,"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface"),(0,n.kt)("h5",a({},{id:"source-ports"}),(0,n.kt)("strong",{parentName:"h5"},"Source Ports")),(0,n.kt)("p",null,"This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. "),(0,n.kt)("h5",a({},{id:"destination-port"}),(0,n.kt)("strong",{parentName:"h5"},"Destination Port")),(0,n.kt)("p",null,"This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. "),(0,n.kt)("h5",a({},{id:"protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Protocol")),(0,n.kt)("p",null,"This option allows the user to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned Protocol will only be routed to an outgoing interface which is selected under the Outgoing Interface. By default ANY protocol is set i. e. all protocols are selected for the rule."),(0,n.kt)("h5",a({},{id:"traffic-rule"}),(0,n.kt)("strong",{parentName:"h5"},"Traffic Rule")),(0,n.kt)("p",null,"It specifies the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("h5",a({},{id:"traffic-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Traffic Burst")),(0,n.kt)("p",null,"It specifies the traffic burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Always traffic burst must be greater than or equal to traffic rate.")))}g.isMDXComponent=!0},17107:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/qos-0c5c73765f1b409f07b6f8572ddb91ed.png"}}]);