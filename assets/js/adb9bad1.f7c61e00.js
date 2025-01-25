/*! For license information please see adb9bad1.f7c61e00.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[75121],{49358:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"enterprise/gslb/listener/operational","title":"Settings","description":"To set up the Operational Settings for the particular Listener.","source":"@site/docs/enterprise/gslb/listener/operational.md","sourceDirName":"enterprise/gslb/listener","slug":"/enterprise/gslb/listener/operational","permalink":"/enterprise/gslb/listener/operational","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"gslb_sidebar","previous":{"title":"Listener","permalink":"/enterprise/gslb/listener/"},"next":{"title":"Sites","permalink":"/enterprise/gslb/listener/sites"}}');var t=s(74848),i=s(28453);const l={sidebar_position:1},c="Settings",o={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4},{value:"Port",id:"port",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"settings",children:"Settings"})}),"\n",(0,t.jsx)(n.p,{children:"To set up the Operational Settings for the particular Listener."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Operational Setting configure different settings of Listener like the network protocol to be used. User can also configure the listener to work as Recursive DNS, Authoritative DNS or Both. Operational Setting specifies the IP address of the Listener. Basically, Operational enables the user to make custom changes on its DNS."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"operational-config",src:s(72646).A+"",width:"1405",height:"751"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"operational-config-modal",src:s(49352).A+"",width:"1405",height:"751"})}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to  ",(0,t.jsx)(n.strong,{children:"Apps"})," > ",(0,t.jsx)(n.strong,{children:"GSLB"})," > ",(0,t.jsx)(n.strong,{children:"Listener"})," > ",(0,t.jsx)(n.strong,{children:"Operational"})]}),"\n",(0,t.jsx)(n.li,{children:"Configure your settings."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Configure the following parameters to set up the desired settings:"}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DNS Service Type"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the DNS Service type"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Auth & Recursive / Authoritative / Recursive\n\n    Default: Recursive\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Enable Logging"})}),"\n",(0,t.jsx)(n.p,{children:"Select whether Logging needs to be enabled"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SSL Certificate"})}),"\n",(0,t.jsx)(n.p,{children:"Choose SSl certificate if SSL port is enabled"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Select SSL\n\n    Default: None \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Addresses"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the list of addresses that will be used for listening for DNS traffic"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enter Address\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Upstream Resolvers"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the resolver for Recursive upstream DNS resolvers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enter Address\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Refuse Query with no RD flag"})}),"\n",(0,t.jsx)(n.p,{children:"Specify to respond with refuse on queries with no RD flag"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Blacklisted Domain Feed Files"})}),"\n",(0,t.jsx)(n.p,{children:"Select your blacklisted FQDN Filtering file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Select Domain Feed\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Blacklisted Response Feed Files"})}),"\n",(0,t.jsx)(n.p,{children:"Select your resposne Filtering file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Enter Address\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Whitelisted Domain Feed Files"})}),"\n",(0,t.jsx)(n.p,{children:"Select your whitelisted FQDN Filtering file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Select domain filtering file from the drop-down\n\n    Default: Blank\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Cache Size"})}),"\n",(0,t.jsx)(n.p,{children:"Specify Cache Size in MB"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 100\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maximum Sub-Domain level"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the maximum level of sub-domains allowed"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 5 \n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maximum Domain length"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the maximum length of the domain allowed"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 100\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Maximum Response length"})}),"\n",(0,t.jsx)(n.p,{children:"Specify the maximum length of the DNS query Response Message"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 100\n"})}),"\n",(0,t.jsx)(n.h3,{id:"port",children:"Port"}),"\n",(0,t.jsx)(n.p,{children:"User need to specify the port in the Port Modal"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"port-modal",src:s(66798).A+"",width:"576",height:"378"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Port"})}),"\n",(0,t.jsx)(n.p,{children:"Mention the port"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: Integer\n\n    Default: 53\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Protocol"})}),"\n",(0,t.jsx)(n.p,{children:"Select Protocol"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: TCP / UPD / HTTPS / TLS\n\n    Default: UDP\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SSL Enabled"})}),"\n",(0,t.jsx)(n.p,{children:"Select the SSL whether it need to be enabled or not"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    Accepted values: True / False\n\n    Default: False\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,n,s)=>{var r=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,i={},d=null,a=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!o.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:d,ref:a,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},49352:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/gslb-settings-2-9b4d6926f8563c8b6800f2d18664309a.png"},72646:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/gslb-settings-f18922f0a8cc2eb68dcfded7ca8e1e32.png"},66798:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/settings-port-d4b22d9b501d4601225558f347424e69.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);