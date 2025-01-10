/*! For license information please see 3c876b5a.23034d25.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[74748],{55083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"enterprise/llb/rules/snat","title":"Source NAT","description":"Source NAT Rule & Settings","source":"@site/versioned_docs/version-6.0/enterprise/llb/rules/snat.md","sourceDirName":"enterprise/llb/rules","slug":"/enterprise/llb/rules/snat","permalink":"/v6/enterprise/llb/rules/snat","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"llb_sidebar","previous":{"title":"Load Balancing","permalink":"/v6/enterprise/llb/rules/load_balancing"},"next":{"title":"Destination NAT","permalink":"/v6/enterprise/llb/rules/dnat"}}');var s=t(74848),i=t(28453);const l={sidebar_position:2},o="Source NAT",a={},d=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Incoming Interface</strong>",id:"incoming-interface",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>ARP Reply</strong>",id:"arp-reply",level:5},{value:"<strong>Preserve Source Port</strong>",id:"preserve-source-port",level:5},{value:"<strong>Translation</strong>",id:"translation",level:5},{value:"<strong>Translate IP Range</strong>",id:"translate-ip-range",level:5},{value:"<strong>Port Mapping</strong>",id:"port-mapping",level:5}];function c(e){const n={h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"source-nat",children:"Source NAT"})}),"\n",(0,s.jsx)(n.p,{children:"Source NAT Rule & Settings"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Source NAT is the translation of the source IP address of a packet. It changes the source IP address of the packets which are passing through the Link Load Balancing Device. This rule helps you to set the SNAT rule by specifying the rule name, Incoming and Outgoing Interface, Source and Destination IP, Protocol, ARP Reply, Preserve Secure Port, Translation, Translate IP Range, and Port Mapping."}),"\n",(0,s.jsx)(n.p,{children:"In static SNAT all internal IP addresses are always mapped to the same public IP address."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"source_net",src:t(59043).A+"",width:"1496",height:"488"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:(0,s.jsx)(n.strong,{children:"How to Use:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Stack > LLB Rules"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select Source NAT rule."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Add Rule button."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Click Save."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Settings"}),(0,s.jsx)(n.th,{children:"Accepted Values"}),(0,s.jsx)(n.th,{children:"Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Rule Name"}),(0,s.jsx)(n.td,{children:"Specify Rule Name"}),(0,s.jsx)(n.td,{children:"Blank (Mandatory)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Rule Message"}),(0,s.jsx)(n.td,{children:"User Friendly Message for Rule"}),(0,s.jsx)(n.td,{children:"Blank (Mandatory)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Rule Priority"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Enabled"}),(0,s.jsx)(n.td,{children:"Boolen"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Incoming Interface"}),(0,s.jsx)(n.td,{children:"Incoming Interface Name"}),(0,s.jsx)(n.td,{children:"Blank (Mandatory)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Outgoing Interface"}),(0,s.jsx)(n.td,{children:"Outgoing Interface Name"}),(0,s.jsx)(n.td,{children:"Blank (Mandatory)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Source Ip"}),(0,s.jsx)(n.td,{children:"Source IP address with CIDR"}),(0,s.jsx)(n.td,{children:"Blank"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Destination IP"}),(0,s.jsx)(n.td,{children:"Destination IP add. with CIDR"}),(0,s.jsx)(n.td,{children:"Blank"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Protocol"}),(0,s.jsx)(n.td,{children:"Select the Protocol"}),(0,s.jsx)(n.td,{children:"Blank"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ARP Reply"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Preserve Source Port"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Translation"}),(0,s.jsx)(n.td,{children:"Drop Down"}),(0,s.jsx)(n.td,{children:"Overload (Mandatory)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Translate IP Range"}),(0,s.jsx)(n.td,{children:"Intger"}),(0,s.jsx)(n.td,{children:"Integer (Mandatory)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Port Mapping"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"snat_rule_condition",src:t(22184).A+"",width:"1092",height:"789"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsx)(n.h5,{id:"rule-name",children:(0,s.jsx)(n.strong,{children:"Rule Name"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to select desired rule name."}),"\n",(0,s.jsx)(n.h5,{id:"rule-message",children:(0,s.jsx)(n.strong,{children:"Rule Message"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows users to use specifies the custom message for the rule."}),"\n",(0,s.jsx)(n.h5,{id:"rule-priority",children:(0,s.jsx)(n.strong,{children:"Rule Priority"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."}),"\n",(0,s.jsx)(n.h5,{id:"enabled",children:(0,s.jsx)(n.strong,{children:"Enabled"})}),"\n",(0,s.jsx)(n.p,{children:"It specifies rule is enabled or disabled. By default, this option is enabled."}),"\n",(0,s.jsx)(n.h5,{id:"incoming-interface",children:(0,s.jsx)(n.strong,{children:"Incoming Interface"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to set Incoming Interface. Every data packet entered from Incoming Interface will be inspected and mapped to translation IPs."}),"\n",(0,s.jsx)(n.h5,{id:"outgoing-interface",children:(0,s.jsx)(n.strong,{children:"Outgoing Interface"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to select the Outgoing Interface from the list of interfaces. data packets that are mapped will move outside from Outgoing Interface."}),"\n",(0,s.jsx)(n.h5,{id:"source-ip",children:(0,s.jsx)(n.strong,{children:"Source IP"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will be translated according to the Translate IP Range."}),"\n",(0,s.jsx)(n.h5,{id:"destination-ip",children:(0,s.jsx)(n.strong,{children:"Destination IP"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned destination IP address will be translated according to the Translate IP Range."}),"\n",(0,s.jsx)(n.h5,{id:"protocol",children:(0,s.jsx)(n.strong,{children:"Protocol"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to set the protocol for the rule. The data packets are inspected and data packets that match with the mentioned protocol will be translated according to the Translate IP Range."}),"\n",(0,s.jsx)(n.h5,{id:"arp-reply",children:(0,s.jsx)(n.strong,{children:"ARP Reply"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows the user to get an ARP reply from the next hop."}),"\n",(0,s.jsx)(n.h5,{id:"preserve-source-port",children:(0,s.jsx)(n.strong,{children:"Preserve Source Port"})}),"\n",(0,s.jsx)(n.p,{children:"Preserve Source Port keeps the same source port for services that expect traffic to come from a specific source port. This option allows the user to select the preserved source port. It maps the source port for outgoing traffic through which it came from."}),"\n",(0,s.jsx)(n.h5,{id:"translation",children:(0,s.jsx)(n.strong,{children:"Translation"})}),"\n",(0,s.jsx)(n.p,{children:"It allows users to select the type of translation. By default, Overload is selected."}),"\n",(0,s.jsx)(n.p,{children:"In Haltdos LLB, we have three types of NAT translation which are mentioned below;"}),"\n",(0,s.jsxs)(n.p,{children:["a). ",(0,s.jsx)(n.strong,{children:"Overload:"})," SNAT maps the private IP addresses to the first available public address from a pool of addresses. An IP pool defines a single IP address or a range of IP addresses to be used as the source address for the duration of the session. If"]}),"\n",(0,s.jsx)(n.p,{children:"The Users need to define an external IP range that contains one or more IP addresses. For example, assume, we have defined an overload type IP pool with two external IP addresses (172.16.200.1\xe2\u20ac\u201d172.16.200.2), since there are 60,416 available port numbers per IP, this IP pool can handle 60,416*2 internal IP addresses."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"overload_translation",src:t(16049).A+"",width:"578",height:"190"})}),"\n",(0,s.jsxs)(n.p,{children:["b). ",(0,s.jsx)(n.strong,{children:"Outgoing Interface IP:"})," If this option is selected as translation mode then all internal traffic will be moved to the public domain by changing its source IP address to the WAN outgoing port IP."]}),"\n",(0,s.jsxs)(n.p,{children:["c). ",(0,s.jsx)(n.strong,{children:"Fixed Port Range:"})," If this is selected as a translation method, all internal traffic will not be affected. Users can manually define the Source IP range and translation IP range. it will automatically bind the source IP with the translation IP."]}),"\n",(0,s.jsx)(n.h5,{id:"translate-ip-range",children:(0,s.jsx)(n.strong,{children:"Translate IP Range"})}),"\n",(0,s.jsx)(n.p,{children:"Users can specify the translation IP or IP address range. If the user selects overload as translation type, another option will be shown there for translation IP or IP address range. Translation IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."}),"\n",(0,s.jsx)(n.h5,{id:"port-mapping",children:(0,s.jsx)(n.strong,{children:"Port Mapping"})}),"\n",(0,s.jsx)(n.p,{children:"It allows users to enable port mapping"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,i={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},59043:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/llb11-2740eb121508bf6592b98efd6602c781.png"},22184:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/llb12-a0d1d5bebc0a05bf5af510b6917f4c4b.png"},16049:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/llb13-0e22228675e710a6970ba22e4ad3ece5.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);