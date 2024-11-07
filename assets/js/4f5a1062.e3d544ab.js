/*! For license information please see 4f5a1062.e3d544ab.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[63724],{55811:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"docs/waf/geo_fencing","title":"Geo Fencing","description":"Overview","source":"@site/community/docs/waf/geo_fencing.md","sourceDirName":"docs/waf","slug":"/docs/waf/geo_fencing","permalink":"/community/docs/waf/geo_fencing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"community_sidebar","previous":{"title":"SSL Settings","permalink":"/community/docs/waf/ssl_settings"},"next":{"title":"Bot Protection","permalink":"/community/docs/waf/bot_protection"}}');var n=i(74848),o=i(28453);const r={sidebar_position:2},l="Geo Fencing",c={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Blacklisted Countries",id:"blacklisted-countries",level:4},{value:"Whitelisted IP Prefixes",id:"whitelisted-ip-prefixes",level:4},{value:"Blacklisted IP Prefixes",id:"blacklisted-ip-prefixes",level:4}];function a(e){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"geo-fencing",children:"Geo Fencing"})}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Geo Fencing is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the Geo location techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geo -location also aids in content modification."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Geo Fencing",src:i(30735).A+"",width:"1920",height:"987"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Log onto the Haltdos console then go to ",(0,n.jsx)(t.strong,{children:"WAF"})," > ",(0,n.jsx)(t.strong,{children:"Geo Fencing"})]}),"\n",(0,n.jsx)(t.li,{children:"Configure the settings."}),"\n",(0,n.jsx)(t.li,{children:"Click on save."}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Accepted value"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklist Countries"}),(0,n.jsx)(t.td,{children:"Drop-down"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Whitelist IP Prefixes"}),(0,n.jsx)(t.td,{children:"IP"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklisted IP Prefixes"}),(0,n.jsx)(t.td,{children:"IP"}),(0,n.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.h4,{id:"blacklisted-countries",children:"Blacklisted Countries"}),"\n",(0,n.jsx)(t.p,{children:"To block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped."}),"\n",(0,n.jsx)(t.h4,{id:"whitelisted-ip-prefixes",children:"Whitelisted IP Prefixes"}),"\n",(0,n.jsx)(t.p,{children:"IP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction."}),"\n",(0,n.jsx)(t.h4,{id:"blacklisted-ip-prefixes",children:"Blacklisted IP Prefixes"}),"\n",(0,n.jsx)(t.p,{children:"IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,t,i)=>{var s=i(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,i){var s,o={},d=null,a=null;for(s in void 0!==i&&(d=""+i),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:d,ref:a,props:o,_owner:l.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,i)=>{e.exports=i(21020)},30735:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/geo_filtering-1cc5c4383ea0cd4b09379838d73c4814.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var s=i(96540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);