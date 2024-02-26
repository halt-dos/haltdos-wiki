"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[46041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||g[c]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:3},i="Destination NAT",s={unversionedId:"enterprise/llb/rules/dnat",id:"enterprise/llb/rules/dnat",title:"Destination NAT",description:"Haltdos Destination NAT & Settings",source:"@site/docs/enterprise/llb/rules/dnat.md",sourceDirName:"enterprise/llb/rules",slug:"/enterprise/llb/rules/dnat",permalink:"/v8/enterprise/llb/rules/dnat",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"llb_sidebar",previous:{title:"Source NAT",permalink:"/v8/enterprise/llb/rules/snat"},next:{title:"Log Rules",permalink:"/v8/enterprise/llb/rules/log"}},p={},d=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Type</strong>",id:"type",level:5},{value:"<strong>Incoming Interface</strong>",id:"incoming-interface",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>External IP Range</strong>",id:"external-ip-range",level:5},{value:"<strong>Mapped IP Range</strong>",id:"mapped-ip-range",level:5},{value:"<strong>Service Protocol</strong>",id:"service-protocol",level:5},{value:"<strong>Port Forwarding</strong>",id:"port-forwarding",level:5}],u={toc:d},g="wrapper";function c(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)(g,a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"destination-nat"}),"Destination NAT"),(0,r.kt)("p",null,"Haltdos Destination NAT & Settings"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Destination NAT changes the destination address in the IP header of a packet. It may also change the destination port in the TCP/UDP headers. These rules help you to set the destination NAT by specifying the rule name, rule message, and rule priority. Additional rule conditions can also be applied such as Type, Incoming & Outgoing Interface, External and Mapped IP Range, Service Protocol, and Port forwarding."),(0,r.kt)("p",null,"The typical usage of this is to redirect incoming packets with a destination of a public address/port to a private IP address/port inside your network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"destination_nat",src:n(69804).Z,width:"1845",height:"884"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),(0,r.kt)("strong",{parentName:"h3"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > LLB > Rules"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"select Destination NAT rule.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Setting"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Accepted Value"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Specify Rule Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"User Friendly Message for Rule"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Enabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IPv4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Incoming Interface"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"None (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Outgoing Interface"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"None (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"External IP Range"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IP Address with CIDR"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"None (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mapped IP Range"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"IP Address with CIDR"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"None (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Service Protocol"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"TCP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Port Forwarding"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"False")))),(0,r.kt)("h3",a({},{id:"description"}),(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",a({},{id:"rule-name"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Name")),(0,r.kt)("p",null,"This option allows the user to select desired rule name."),(0,r.kt)("h5",a({},{id:"rule-message"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Message")),(0,r.kt)("p",null,"It Specifies the custom message for the rule."),(0,r.kt)("h5",a({},{id:"rule-priority"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,r.kt)("p",null,"This option allows the user to set rule priority."),(0,r.kt)("h5",a({},{id:"enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Enabled")),(0,r.kt)("p",null,"It Specify rule is enabled or disabled. By default, this option is enabled."),(0,r.kt)("h5",a({},{id:"type"}),(0,r.kt)("strong",{parentName:"h5"},"Type")),(0,r.kt)("p",null,"This specifies the type of IP protocol used for rules. By default, IPv4 is selected. Users can select any from IPv4, IPv6, DNS46, and DNS64."),(0,r.kt)("h5",a({},{id:"incoming-interface"}),(0,r.kt)("strong",{parentName:"h5"},"Incoming Interface")),(0,r.kt)("p",null,"This option allows the user to specify the Incoming interface from the drop-down list. This rule will apply to the data packets which are moving inside from the interface mentioned."),(0,r.kt)("h5",a({},{id:"outgoing-interface"}),(0,r.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,r.kt)("p",null,"This option allows the user to specify the outgoing interface from the drop-down list. This rule will check and validate the data which is moving outside from the interface mentioned."),(0,r.kt)("h5",a({},{id:"external-ip-range"}),(0,r.kt)("strong",{parentName:"h5"},"External IP Range")),(0,r.kt)("p",null,"It specifies the external IP address range. This option allows the user to set the range of IP address that belonged to an external network."),(0,r.kt)("h5",a({},{id:"mapped-ip-range"}),(0,r.kt)("strong",{parentName:"h5"},"Mapped IP Range")),(0,r.kt)("p",null,"It specifies the mapped IP address range. This option allows the user to set the range of IP address that needs to be mapped from the internal network."),(0,r.kt)("h5",a({},{id:"service-protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Service Protocol")),(0,r.kt)("p",null,"This option allows users to select the protocol on which rule will apply."),(0,r.kt)("h5",a({},{id:"port-forwarding"}),(0,r.kt)("strong",{parentName:"h5"},"Port Forwarding")),(0,r.kt)("p",null,"Port forwarding or port mapping is an application of network address translation (NAT) that redirects a communication request from one address and port number combination to another. This option allows users to enable or disable the port forwarding option."),(0,r.kt)("p",null,"If this option is enabled by the user, the user will get the option to mention mapped port numbers."))}c.isMDXComponent=!0},69804:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dnat-9ec24c01b382118068ea005fc764cdb7.png"}}]);