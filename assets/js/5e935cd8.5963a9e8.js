/*! For license information please see 5e935cd8.5963a9e8.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[96517],{60191:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"enterprise/adc/listeners/geo_filtering","title":"Geo Filtering","description":"Geo-filtering is the practice of restricting access to Internet content, based upon the user\'s geographical location. With the help of Internet geolocation techniques, check user\'s IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.","source":"@site/versioned_docs/version-6.0/enterprise/adc/listeners/geo_filtering.md","sourceDirName":"enterprise/adc/listeners","slug":"/enterprise/adc/listeners/geo_filtering","permalink":"/v6/enterprise/adc/listeners/geo_filtering","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"adc_sidebar","previous":{"title":"SSL Settings","permalink":"/v6/enterprise/adc/listeners/ssl_settings"},"next":{"title":"Server Groups","permalink":"/v6/enterprise/adc/listeners/server_groups/"}}');var n=s(74848),r=s(28453);const o={sidebar_position:3},l="Geo Filtering",c={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"BlackListed Countries",id:"blacklisted-countries",level:4},{value:"WhiteListed IP Prefixes",id:"whitelisted-ip-prefixes",level:4},{value:"BlackListed IP Prefixes",id:"blacklisted-ip-prefixes",level:4},{value:"Bad Reputation Traffic",id:"bad-reputation-traffic",level:4}];function a(e){const t={h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"geo-filtering",children:"Geo Filtering"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Geo-filtering"})," is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them."]}),"\n",(0,n.jsx)(t.p,{children:"Our solution restricts user's based upon BlackListed IP Prefixes and Countries. It also allows permanently to access website through WhiteListed IP Prefixes."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Geo Filtering",src:s(42504).A+"",width:"1558",height:"441"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to ",(0,n.jsx)(t.strong,{children:"Stack"})," > ",(0,n.jsx)(t.strong,{children:"SLB"})," > ",(0,n.jsx)(t.strong,{children:"listener"})," > ",(0,n.jsx)(t.strong,{children:"Geo Filtering"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save"})," ."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Configure the following parameters to set up the desired settings:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Accepted value"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklisted Countries"}),(0,n.jsx)(t.td,{children:"Drop Down"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Whitelisted IP Prefixes"}),(0,n.jsx)(t.td,{children:"IP address with CIDR"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklisted IP Prefixes"}),(0,n.jsx)(t.td,{children:"IP address with CIDR"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bad Reputution Traffic"}),(0,n.jsx)(t.td,{children:"Drop Down"}),(0,n.jsx)(t.td,{children:"No Action"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description:"}),"\n",(0,n.jsx)(t.h4,{id:"blacklisted-countries",children:"BlackListed Countries"}),"\n",(0,n.jsx)(t.p,{children:"This section specify the list of countries that will be permanently disallowed from accessing the website."}),"\n",(0,n.jsx)(t.h4,{id:"whitelisted-ip-prefixes",children:"WhiteListed IP Prefixes"}),"\n",(0,n.jsx)(t.p,{children:"This section specify the list of IPs that will be permanently allowed for accessing the website."}),"\n",(0,n.jsx)(t.h4,{id:"blacklisted-ip-prefixes",children:"BlackListed IP Prefixes"}),"\n",(0,n.jsx)(t.p,{children:"This section specify the list of IPs that will be permanently disallowed from accessing the website."}),"\n",(0,n.jsx)(t.h4,{id:"bad-reputation-traffic",children:"Bad Reputation Traffic"}),"\n",(0,n.jsx)(t.p,{children:"Users can specifies the action to be performed on traffic from suspicious IPs."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,t,s)=>{var i=s(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var i,r={},d=null,a=null;for(i in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:n,type:e,key:d,ref:a,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},42504:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/geofiltering-35514375616c805abca1448bc2753bfa.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);