"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[88115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:6},i="Traffic Shaper / QoS",s={unversionedId:"enterprise/llb/rules/QoS",id:"version-7.0/enterprise/llb/rules/QoS",title:"Traffic Shaper / QoS",description:"Traffic Shaper Rules & Setings",source:"@site/versioned_docs/version-7.0/enterprise/llb/rules/QoS.md",sourceDirName:"enterprise/llb/rules",slug:"/enterprise/llb/rules/QoS",permalink:"/enterprise/llb/rules/QoS",draft:!1,tags:[],version:"7.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"llb_sidebar",previous:{title:"Policy Routing",permalink:"/enterprise/llb/rules/policy_routing"},next:{title:"Haltdos LLB Deployment Scenarios",permalink:"/scenarios/llb"}},p={},c=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Source Ports</strong>",id:"source-ports",level:5},{value:"<strong>Destination Port</strong>",id:"destination-port",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Traffic Rule</strong>",id:"traffic-rule",level:5},{value:"<strong>Traffic Burst</strong>",id:"traffic-burst",level:5}],u={toc:c},d="wrapper";function f(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(d,a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"traffic-shaper--qos"}),"Traffic Shaper / QoS"),(0,n.kt)("p",null,"Traffic Shaper Rules & Setings"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Traffic shaping (also known as packet shaping) is a bandwidth management technique that delays the flow of certain types of network packets in order to ensure network performance for higher priority applications. Traffic shaping essentially limits the amount of bandwidth that can be consumed by certain types of applications. It is primarily used to ensure a high quality of service for business-related network traffic."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"traffic_shaper",src:r(17107).Z,width:"1842",height:"934"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > LLB > Rules > Traffic Shaper"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("h3",a({},{id:"description"}),"Description"),(0,n.kt)("h5",a({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"This option allows the user to select desired rule name."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Enabled")),(0,n.kt)("p",null,"It Specify rule is enabled or disabled. By default, this option is enabled."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,n.kt)("h5",a({},{id:"outgoing-interface"}),(0,n.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,n.kt)("p",null,"This option allows the user to select the outgoing interface from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing Interface. Users can select the Interface from the drop-down menu."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Interface\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"source-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Source IP")),(0,n.kt)("p",null,"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"destination-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Destination IP")),(0,n.kt)("p",null,"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to an outgoing interface which is selected under the Outgoing Interface"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"source-ports"}),(0,n.kt)("strong",{parentName:"h5"},"Source Ports")),(0,n.kt)("p",null,"This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. "),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"destination-port"}),(0,n.kt)("strong",{parentName:"h5"},"Destination Port")),(0,n.kt)("p",null,"This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under the Outgoing Interface. "),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Protocol")),(0,n.kt)("p",null,"This option allows the user to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned Protocol will only be routed to an outgoing interface which is selected under the Outgoing Interface. By default ANY protocol is set i. e. all protocols are selected for the rule."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: ANY / TCP / UDP / SCTP / CUSTOM\n\nDefault: ANY \n")),(0,n.kt)("h5",a({},{id:"traffic-rule"}),(0,n.kt)("strong",{parentName:"h5"},"Traffic Rule")),(0,n.kt)("p",null,"It specifies the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,n.kt)("h5",a({},{id:"traffic-burst"}),(0,n.kt)("strong",{parentName:"h5"},"Traffic Burst")),(0,n.kt)("p",null,"It specifies the traffic burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 5 \n")),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Always traffic burst must be greater than or equal to traffic rate.")))}f.isMDXComponent=!0},17107:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/qos-0c5c73765f1b409f07b6f8572ddb91ed.png"}}]);