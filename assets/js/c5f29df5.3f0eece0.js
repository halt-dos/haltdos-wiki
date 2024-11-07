/*! For license information please see c5f29df5.3f0eece0.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[11],{40667:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"enterprise/waf/listener/profiles/profiles","title":"Profiles","description":"Create different security profiles for different sub-sections of your website.","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/profiles.md","sourceDirName":"enterprise/waf/listener/profiles","slug":"/enterprise/waf/listener/profiles/","permalink":"/v6/enterprise/waf/listener/profiles/","draft":false,"unlisted":false,"tags":[],"version":"6.0","frontMatter":{},"sidebar":"waf_sidebar","previous":{"title":"Settings","permalink":"/v6/enterprise/waf/listener/settings"},"next":{"title":"Settings","permalink":"/v6/enterprise/waf/listener/profiles/settings"}}');var n=r(74848),s=r(28453);const o={},l="Profiles",d={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2}];function a(e){const i={br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"profiles",children:"Profiles"})}),"\n",(0,n.jsx)(i.p,{children:"Create different security profiles for different sub-sections of your website."}),"\n",(0,n.jsx)(i.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(i.p,{children:["Profiles is the default profile that contains most commonly used web application settings served through a virtual service. For customizing a profile, it is highly recommended to create a new profile instead of editing the default profile.",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.img,{alt:"Profiles.png",src:r(70530).A+"",width:"1819",height:"766"})]}),"\n",(0,n.jsx)(i.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Go to WAF > Listeners > Profiles"}),"\n",(0,n.jsx)(i.li,{children:"Click Add Profile."}),"\n",(0,n.jsx)(i.li,{children:"Configure your settings."}),"\n",(0,n.jsx)(i.li,{children:"Click Save Changes."}),"\n"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameters"}),(0,n.jsx)(i.th,{children:"Accepted Values"}),(0,n.jsx)(i.th,{children:"Default"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Profile Name"}),(0,n.jsx)(i.td,{children:"String"}),(0,n.jsx)(i.td,{children:"Blank"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Profile Priority"}),(0,n.jsx)(i.td,{children:"Integer"}),(0,n.jsx)(i.td,{children:"0"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Application Type"}),(0,n.jsx)(i.td,{children:"Drop-Down"}),(0,n.jsx)(i.td,{children:"Others"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Protocol"}),(0,n.jsx)(i.td,{children:"Drop-Down"}),(0,n.jsx)(i.td,{children:"Any"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Countries"}),(0,n.jsx)(i.td,{children:"Drop-down"}),(0,n.jsx)(i.td,{children:"Blank"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Source IP Prefixes"}),(0,n.jsx)(i.td,{children:"IP Address"}),(0,n.jsx)(i.td,{children:"Blank"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Destination Port"}),(0,n.jsx)(i.td,{children:"Integer"}),(0,n.jsx)(i.td,{children:"Blank"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Reference"}),(0,n.jsx)(i.td,{children:"Drop-Down"}),(0,n.jsx)(i.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(i.p,{children:["1.",(0,n.jsx)(i.strong,{children:"Profile Name:"}),"\r\nThis option allows user to specify a user-friendly name of security profile. By default, a profile with 'Default' name is already created upon adding a listener.\r\n2.",(0,n.jsx)(i.strong,{children:"Profile Priority:"})]}),"\n",(0,n.jsx)(i.p,{children:"This option provides priotize feature for deciding which profile want to use first for matching request and taking action."}),"\n",(0,n.jsxs)(i.p,{children:["3.",(0,n.jsx)(i.strong,{children:"Application Type:"})]}),"\n",(0,n.jsx)(i.p,{children:"This option specifies type of application ( i.e. website or web service or web socket) want to select. A website is defined as a collection of web pages and related content that is identified by a common domain name whereas, a web service is a standardized medium to propagate communication between the client and server applications. And a web socket is a duplex protocol used mainly in the client-server communication channel."}),"\n",(0,n.jsxs)(i.p,{children:["4.",(0,n.jsx)(i.strong,{children:"Protocol:"})]}),"\n",(0,n.jsx)(i.p,{children:"This option specify the service type for the subdomain i.e. HTTP, TCP, UDP. Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols."}),"\n",(0,n.jsxs)(i.p,{children:["5.",(0,n.jsx)(i.strong,{children:"Countries:"})]}),"\n",(0,n.jsx)(i.p,{children:"This option specify countries from where request is coming should match with this profile."}),"\n",(0,n.jsxs)(i.p,{children:["6.",(0,n.jsx)(i.strong,{children:"Source IP Prefixes:"}),"\r\nThis option specify the source IP Prefixes for the requests coming will be matched with this profile."]}),"\n",(0,n.jsxs)(i.p,{children:["7.",(0,n.jsx)(i.strong,{children:"Destination Port:"})]}),"\n",(0,n.jsx)(i.p,{children:"This option specify the destination port Prefixes where requests coming will be matched with this profile."}),"\n",(0,n.jsxs)(i.p,{children:["8.",(0,n.jsx)(i.strong,{children:"Reference:"})]}),"\n",(0,n.jsx)(i.p,{children:"This drop-down is used to clone an existing profile with the same configuration to a new profile.\r\nNote: User can clone existing profile with the same configuration to a new profile on the new user-specified URI.\r\nFollowing configurations are present under Security Profile."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,i,r)=>{var t=r(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,i,r){var t,s={},c=null,a=null;for(t in void 0!==r&&(c=""+r),void 0!==i.key&&(c=""+i.key),void 0!==i.ref&&(a=i.ref),i)o.call(i,t)&&!d.hasOwnProperty(t)&&(s[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===s[t]&&(s[t]=i[t]);return{$$typeof:n,type:e,key:c,ref:a,props:s,_owner:l.current}}i.Fragment=s,i.jsx=c,i.jsxs=c},74848:(e,i,r)=>{e.exports=r(21020)},70530:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/profileee-93e2cab3801ffbec658db919a62d2ed6.png"},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>l});var t=r(96540);const n={},s=t.createContext(n);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);