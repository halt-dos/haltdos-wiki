"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[87650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,h=u["".concat(i,".").concat(g)]||u[g]||d[g]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:2},s="Source NAT",i={unversionedId:"enterprise/llb/rules/snat",id:"version-7.0/enterprise/llb/rules/snat",title:"Source NAT",description:"Source NAT Rule & Settings",source:"@site/versioned_docs/version-7.0/enterprise/llb/rules/snat.md",sourceDirName:"enterprise/llb/rules",slug:"/enterprise/llb/rules/snat",permalink:"/enterprise/llb/rules/snat",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"llb_sidebar",previous:{title:"Load Balancing",permalink:"/enterprise/llb/rules/load_balancing"},next:{title:"Destination NAT",permalink:"/enterprise/llb/rules/dnat"}},p={},c=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Incoming Interface</strong>",id:"incoming-interface",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>ARP Reply</strong>",id:"arp-reply",level:5},{value:"<strong>Preserve Source Port</strong>",id:"preserve-source-port",level:5},{value:"<strong>Translation</strong>",id:"translation",level:5},{value:"<strong>Internal IP Range</strong>",id:"internal-ip-range",level:5},{value:"<strong>Translate IP Range</strong>",id:"translate-ip-range",level:5},{value:"<strong>Port Mapping</strong>",id:"port-mapping",level:5}],u={toc:c},d="wrapper";function g(e){var{components:t}=e,o=l(e,["components"]);return(0,r.kt)(d,a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"source-nat"}),"Source NAT"),(0,r.kt)("p",null,"Source NAT Rule & Settings"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Source NAT is the translation of the source IP address of a packet. It changes the source IP address of the packets which are passing through the Link Load Balancing Device. This rule helps you to set the SNAT rule by specifying the rule name, Incoming and Outgoing Interface, Source and Destination IP, Protocol, ARP Reply, Preserve Secure Port, Translation, Translate IP Range, and Port Mapping."),(0,r.kt)("p",null,"In static SNAT all internal IP addresses are always mapped to the same public IP address."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"source_net",src:n(60963).Z,width:"1845",height:"947"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),(0,r.kt)("strong",{parentName:"h3"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > LLB Rules"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Source NAT rule.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snat_rule_condition",src:n(96890).Z,width:"1092",height:"789"})),(0,r.kt)("h3",a({},{id:"description"}),"Description"),(0,r.kt)("h5",a({},{id:"rule-name"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Name")),(0,r.kt)("p",null,"This option allows the user to select desired rule name."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"rule-message"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Message")),(0,r.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"rule-priority"}),(0,r.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,r.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Enabled")),(0,r.kt)("p",null,"It specifies rule is enabled or disabled. By default, this option is enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"incoming-interface"}),(0,r.kt)("strong",{parentName:"h5"},"Incoming Interface")),(0,r.kt)("p",null,"This option allows the user to set Incoming Interface. Every data packet entered from Incoming Interface will be inspected and mapped to translation IPs."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Interface\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"outgoing-interface"}),(0,r.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,r.kt)("p",null,"This option allows the user to select the Outgoing Interface from the list of interfaces. data packets that are mapped will move outside from Outgoing Interface."),(0,r.kt)("h5",a({},{id:"source-ip"}),(0,r.kt)("strong",{parentName:"h5"},"Source IP")),(0,r.kt)("p",null,"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will be translated according to the Translate IP Range."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"destination-ip"}),(0,r.kt)("strong",{parentName:"h5"},"Destination IP")),(0,r.kt)("p",null,"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned destination IP address will be translated according to the Translate IP Range."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"protocol"}),(0,r.kt)("strong",{parentName:"h5"},"Protocol")),(0,r.kt)("p",null,"This option allows the user to set the protocol for the rule. The data packets are inspected and data packets that match with the mentioned protocol will be translated according to the Translate IP Range."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: ANY / TCP / UDP / CUSTOM\n\nDefault: ANY \n")),(0,r.kt)("h5",a({},{id:"arp-reply"}),(0,r.kt)("strong",{parentName:"h5"},"ARP Reply")),(0,r.kt)("p",null,"This option allows the user to get an ARP reply from the next hop."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",a({},{id:"preserve-source-port"}),(0,r.kt)("strong",{parentName:"h5"},"Preserve Source Port")),(0,r.kt)("p",null,"Preserve Source Port keeps the same source port for services that expect traffic to come from a specific source port. This option allows the user to select the preserved source port. It maps the source port for outgoing traffic through which it came from."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",a({},{id:"translation"}),(0,r.kt)("strong",{parentName:"h5"},"Translation")),(0,r.kt)("p",null,"It allows users to select the type of translation. By default, Overload is selected."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Overload / Outgoing Interface IP / Fixed Port Range\n\nDefault: Overload \n")),(0,r.kt)("p",null,"In Haltdos LLB, we have three types of NAT translation which are mentioned below;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Overload:")," SNAT maps the private IP addresses to the first available public address from a pool of addresses. An IP pool defines a single IP address or a range of IP addresses to be used as the source address for the duration of the session. If ")),(0,r.kt)("p",null,"The Users need to define an external IP range that contains one or more IP addresses. For example, assume, we have defined an overload type IP pool with two external IP addresses (172.16.200.1\xe2\u20ac\u201d172.16.200.2), since there are 60,416 available port numbers per IP, this IP pool can handle 60,416*2 internal IP addresses."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"overload_translation",src:n(82504).Z,width:"578",height:"190"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Outgoing Interface IP:")," If this option is selected as translation mode then all internal traffic will be moved to the public domain by changing its source IP address to the WAN outgoing port IP.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fixed Port Range:")," If this is selected as a translation method, all internal traffic will not be affected. Users can manually define the Source IP range and translation IP range. it will automatically bind the source IP with the translation IP."))),(0,r.kt)("h5",a({},{id:"internal-ip-range"}),(0,r.kt)("strong",{parentName:"h5"},"Internal IP Range")),(0,r.kt)("p",null,"User can specify the Internal IP Range "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"translate-ip-range"}),(0,r.kt)("strong",{parentName:"h5"},"Translate IP Range")),(0,r.kt)("p",null,"Users can specify the translation IP or IP address range. If the user selects overload as translation type, another option will be shown there for translation IP or IP address range. Translation IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: IP\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"port-mapping"}),(0,r.kt)("strong",{parentName:"h5"},"Port Mapping")),(0,r.kt)("p",null,"It allows users to enable port mapping"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")))}g.isMDXComponent=!0},96890:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb12-a0d1d5bebc0a05bf5af510b6917f4c4b.png"},82504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb13-0e22228675e710a6970ba22e4ad3ece5.png"},60963:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/snat-0d7c315f738e66795607c4d130643f19.png"}}]);