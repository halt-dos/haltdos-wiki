/*! For license information please see 2b6bcbee.a49d5932.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[20398],{28980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/llb/llb_settings","title":"LLB Settings","description":"Setting for Haltdos LLB","source":"@site/versioned_docs/version-7.0/enterprise/llb/llb_settings.md","sourceDirName":"enterprise/llb","slug":"/enterprise/llb/llb_settings","permalink":"/v7/enterprise/llb/llb_settings","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"llb_sidebar","previous":{"title":"Link Load Balancer (LLB)","permalink":"/v7/enterprise/llb"},"next":{"title":"Interface Groups","permalink":"/v7/enterprise/llb/interface_groups"}}');var i=t(74848),r=t(28453);const o={sidebar_position:1},l="LLB Settings",a={},c=[{value:"<strong>How to Use :</strong>",id:"how-to-use-",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Enable Load Balancing</strong>",id:"enable-load-balancing",level:5},{value:"<strong>WAN Algorithm</strong>",id:"wan-algorithm",level:5},{value:"<strong>Interface</strong>",id:"interface",level:5},{value:"<strong>Weight</strong>",id:"weight",level:5}];function d(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"llb-settings",children:"LLB Settings"})}),"\n",(0,i.jsx)(n.p,{children:"Setting for Haltdos LLB"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Link load balancing is a term that refers to the management of the traffic that is initiated within a local network that is destined to go out through one of a set of WAN connections. The link load balancer sits at the LAN-WAN boundary. It will redirect requests coming from the LAN segment that is destined to go out to the public Internet, by directing the traffic onto one of the various WAN connections."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"llbsettings",src:t(82708).A+"",width:"1896",height:"786"})}),"\n",(0,i.jsx)(n.h3,{id:"how-to-use-",children:(0,i.jsx)(n.strong,{children:"How to Use :"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Apps > LLB"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enable ",(0,i.jsx)(n.strong,{children:"Load Balancing"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure your setiings."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add Interfaces"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:(0,i.jsx)(n.strong,{children:"Description:"})}),"\n",(0,i.jsx)(n.h5,{id:"enable-load-balancing",children:(0,i.jsx)(n.strong,{children:"Enable Load Balancing"})}),"\n",(0,i.jsx)(n.p,{children:"This field allows the user to enable or disable the load balancer. By default, It's set on disable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Enable \n"})}),"\n",(0,i.jsx)(n.h5,{id:"wan-algorithm",children:(0,i.jsx)(n.strong,{children:"WAN Algorithm"})}),"\n",(0,i.jsx)(n.p,{children:"This option species the WAN Load Balancing algorithm used to balance the load between multiple WAN links. Users can select the WAN algorithm from the drop-down menu. In Haltdos LLB  users get many WAN algorithms which are mentioned below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Round Robin / Source IP / Bandwidth / Sessions \n\n    Default: Round Robin \n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"a) Round Robin:"})," The administrator assigns a weight to each WAN connection based on criteria of their choosing for their traffic-handling capability. If the WAN 1 connection is twice as better for data communication as WAN 2. then WAN 1 is to be given a double weight value in comparison to WAN 2."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"b) Source IP:"})," Source IP hash load balancing algorithm that combines source and destination IP addresses of the users and websites to generate a unique hash key. The key is used to allocate the client to a particular server. As the key can be regenerated if the session is broken, the client request is directed to the same server it was using previously."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"c) Bandwidth:"})," In the least bandwidth method Users are selected based on the WAN Link's bandwidth consumption i.e WAN connection that consumes the high bandwidth is selected (measured in Mbps)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"d) Sessions:"})," Session load balancing is a dynamic load balancing algorithm where user requests are distributed to the WAN connection with the least number of active connections at the time the user's request is received."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Connection-Less Tuple Expiry"})}),"\n",(0,i.jsx)(n.p,{children:"When this Tuple is based on UDP protocol we can consider it a Connection-less tuple. This time specifies after how much time UDP or ICMP-based tuple should be closed. Users can specify the expiry of the connection-less tuple in seconds."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 500 \n"})}),"\n",(0,i.jsx)(n.h5,{id:"interface",children:(0,i.jsx)(n.strong,{children:"Interface"})}),"\n",(0,i.jsx)(n.p,{children:"This option will show a list of all WAN links with their names along with their weight values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.h5,{id:"weight",children:(0,i.jsx)(n.strong,{children:"Weight"})}),"\n",(0,i.jsx)(n.p,{children:"This option allows the user to set the weight value for an interface. This is a static numerical weighting. Interface with higher ratings gets more requests sent to them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"addinginterfaces",src:t(54474).A+"",width:"1904",height:"861"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,t)=>{var s=t(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!a.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},54474:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/adding_interfaces-6cae621ad8b0b0d902b7b39e3a98e5d3.png"},82708:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/llb_settings-55edc0941e739458327a79af7bba0305.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);