"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[23298],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={sidebar_position:2},i="Source NAT",s={unversionedId:"enterprise/llb/rules/snat",id:"enterprise/llb/rules/snat",title:"Source NAT",description:"Source NAT Rule & Settings",source:"@site/docs/enterprise/llb/rules/snat.md",sourceDirName:"enterprise/llb/rules",slug:"/enterprise/llb/rules/snat",permalink:"/haltdos-wiki/enterprise/llb/rules/snat",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"llb_sidebar",previous:{title:"Load Balancing",permalink:"/haltdos-wiki/enterprise/llb/rules/load_balancing"},next:{title:"Destination NAT",permalink:"/haltdos-wiki/enterprise/llb/rules/dnat"}},p={},u=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Incoming Interface</strong>",id:"incoming-interface",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>ARP Reply</strong>",id:"arp-reply",level:5},{value:"<strong>Preserve Source Port</strong>",id:"preserve-source-port",level:5},{value:"<strong>Translation</strong>",id:"translation",level:5},{value:"<strong>Translate IP Range</strong>",id:"translate-ip-range",level:5},{value:"<strong>Port Mapping</strong>",id:"port-mapping",level:5}],d={toc:u},c="wrapper";function g(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(c,r({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"source-nat"}),"Source NAT"),(0,n.kt)("p",null,"Source NAT Rule & Settings"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Source NAT is the translation of the source IP address of a packet. It changes the source IP address of the packets which are passing through the Link Load Balancing Device. This rule helps you to set the SNAT rule by specifying the rule name, Incoming and Outgoing Interface, Source and Destination IP, Protocol, ARP Reply, Preserve Secure Port, Translation, Translate IP Range, and Port Mapping."),(0,n.kt)("p",null,"In static SNAT all internal IP addresses are always mapped to the same public IP address."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"source_net",src:a(60963).Z,width:"1845",height:"947"})),(0,n.kt)("h3",r({},{id:"how-to-use"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Stack > LLB Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select Source NAT rule.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Save."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Settings"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Accepted Values"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify Rule Name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"User Friendly Message for Rule"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Enabled"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolen"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Incoming Interface"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Incoming Interface Name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Outgoing Interface"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Outgoing Interface Name"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blank (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Source Ip"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Source IP address with CIDR"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Destination IP"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Destination IP add. with CIDR"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Protocol"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Select the Protocol"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"ARP Reply"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Preserve Source Port"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Translation"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Drop Down"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Overload (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Translate IP Range"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Intger"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Integer (Mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Port Mapping"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snat_rule_condition",src:a(96890).Z,width:"1092",height:"789"})),(0,n.kt)("h3",r({},{id:"description"}),"Description"),(0,n.kt)("h5",r({},{id:"rule-name"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"This option allows the user to select desired rule name."),(0,n.kt)("h5",r({},{id:"rule-message"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,n.kt)("h5",r({},{id:"rule-priority"}),(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."),(0,n.kt)("h5",r({},{id:"enabled"}),(0,n.kt)("strong",{parentName:"h5"},"Enabled")),(0,n.kt)("p",null,"It specifies rule is enabled or disabled. By default, this option is enabled."),(0,n.kt)("h5",r({},{id:"incoming-interface"}),(0,n.kt)("strong",{parentName:"h5"},"Incoming Interface")),(0,n.kt)("p",null,"This option allows the user to set Incoming Interface. Every data packet entered from Incoming Interface will be inspected and mapped to translation IPs."),(0,n.kt)("h5",r({},{id:"outgoing-interface"}),(0,n.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,n.kt)("p",null,"This option allows the user to select the Outgoing Interface from the list of interfaces. data packets that are mapped will move outside from Outgoing Interface."),(0,n.kt)("h5",r({},{id:"source-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Source IP")),(0,n.kt)("p",null,"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will be translated according to the Translate IP Range."),(0,n.kt)("h5",r({},{id:"destination-ip"}),(0,n.kt)("strong",{parentName:"h5"},"Destination IP")),(0,n.kt)("p",null,"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned destination IP address will be translated according to the Translate IP Range."),(0,n.kt)("h5",r({},{id:"protocol"}),(0,n.kt)("strong",{parentName:"h5"},"Protocol")),(0,n.kt)("p",null,"This option allows the user to set the protocol for the rule. The data packets are inspected and data packets that match with the mentioned protocol will be translated according to the Translate IP Range."),(0,n.kt)("h5",r({},{id:"arp-reply"}),(0,n.kt)("strong",{parentName:"h5"},"ARP Reply")),(0,n.kt)("p",null,"This option allows the user to get an ARP reply from the next hop."),(0,n.kt)("h5",r({},{id:"preserve-source-port"}),(0,n.kt)("strong",{parentName:"h5"},"Preserve Source Port")),(0,n.kt)("p",null,"Preserve Source Port keeps the same source port for services that expect traffic to come from a specific source port. This option allows the user to select the preserved source port. It maps the source port for outgoing traffic through which it came from."),(0,n.kt)("h5",r({},{id:"translation"}),(0,n.kt)("strong",{parentName:"h5"},"Translation")),(0,n.kt)("p",null,"It allows users to select the type of translation. By default, Overload is selected."),(0,n.kt)("p",null,"In Haltdos LLB, we have three types of NAT translation which are mentioned below;"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Overload:")," SNAT maps the private IP addresses to the first available public address from a pool of addresses. An IP pool defines a single IP address or a range of IP addresses to be used as the source address for the duration of the session. If ")),(0,n.kt)("p",null,"The Users need to define an external IP range that contains one or more IP addresses. For example, assume, we have defined an overload type IP pool with two external IP addresses (172.16.200.1\xe2\u20ac\u201d172.16.200.2), since there are 60,416 available port numbers per IP, this IP pool can handle 60,416*2 internal IP addresses."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"overload_translation",src:a(82504).Z,width:"578",height:"190"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Outgoing Interface IP:")," If this option is selected as translation mode then all internal traffic will be moved to the public domain by changing its source IP address to the WAN outgoing port IP.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fixed Port Range:")," If this is selected as a translation method, all internal traffic will not be affected. Users can manually define the Source IP range and translation IP range. it will automatically bind the source IP with the translation IP."))),(0,n.kt)("h5",r({},{id:"translate-ip-range"}),(0,n.kt)("strong",{parentName:"h5"},"Translate IP Range")),(0,n.kt)("p",null,"Users can specify the translation IP or IP address range. If the user selects overload as translation type, another option will be shown there for translation IP or IP address range. Translation IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."),(0,n.kt)("h5",r({},{id:"port-mapping"}),(0,n.kt)("strong",{parentName:"h5"},"Port Mapping")),(0,n.kt)("p",null,"It allows users to enable port mapping"))}g.isMDXComponent=!0},96890:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/llb12-a0d1d5bebc0a05bf5af510b6917f4c4b.png"},82504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/llb13-0e22228675e710a6970ba22e4ad3ece5.png"},60963:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/snat-0d7c315f738e66795607c4d130643f19.png"}}]);