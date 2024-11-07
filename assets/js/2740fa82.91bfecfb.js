/*! For license information please see 2740fa82.91bfecfb.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[25799],{14876:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>h,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"cloud/waf/listener/security-profile/rules/whitelist","title":"Whitelist Rules","description":"This rule allows to add exceptions on existing rules (custom and managed)","source":"@site/versioned_docs/version-7.0/cloud/waf/listener/security-profile/rules/whitelist.md","sourceDirName":"cloud/waf/listener/security-profile/rules","slug":"/cloud/waf/listener/security-profile/rules/whitelist","permalink":"/v7/cloud/waf/listener/security-profile/rules/whitelist","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"cloud_sidebar","previous":{"title":"Rate Limiting","permalink":"/v7/cloud/waf/listener/security-profile/rules/limiting"},"next":{"title":"Response Filtering","permalink":"/v7/cloud/waf/listener/security-profile/rules/response"}}');var n=t(74848),r=t(28453);const l={sidebar_position:4},h="Whitelist Rules",d={},o=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}];function c(e){const i={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"whitelist-rules",children:"Whitelist Rules"})}),"\n",(0,n.jsx)(i.p,{children:"This rule allows to add exceptions on existing rules (custom and managed)"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:'A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.'}),"\n",(0,n.jsx)(i.p,{children:"Whitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations."}),"\n",(0,n.jsx)(i.p,{children:"Here\u2019s another use case: To reduce insider threat, a cyberattack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network."}),"\n",(0,n.jsx)(i.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsx)(i.p,{children:"Follow the Steps Given Below to configure a Whitelist Rule:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Go to ",(0,n.jsx)(i.strong,{children:"WAF > Zones > Listeners > Security Profiles > Rules > Whitelist Rules"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Click on the ",(0,n.jsx)(i.strong,{children:"Add Rule"})," button and a pop-up box will open."]}),"\n",(0,n.jsx)(i.li,{children:"Configure the Fields that are present."}),"\n",(0,n.jsxs)(i.li,{children:["Click on ",(0,n.jsx)(i.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Configurable Fields"})}),"\n",(0,n.jsx)(i.p,{children:"All the fields are required unless disabled by the UI"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"SETTINGS"}),(0,n.jsx)(i.th,{children:"DESCRIPTION"}),(0,n.jsx)(i.th,{children:"ACCEPTED"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Rule Name"}),(0,n.jsx)(i.td,{children:"Name For the Configured Rule"}),(0,n.jsx)(i.td,{children:"Name eg. Example Rule"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Message"}),(0,n.jsx)(i.td,{children:"Description For the Rule"}),(0,n.jsx)(i.td,{children:"Brief Description eg. This Rule is used for Allowing Example API"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Custom Rule ID"}),(0,n.jsx)(i.td,{children:"ID that you assign the Rule"}),(0,n.jsx)(i.td,{children:"9 Digit Number"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Specific URI"}),(0,n.jsx)(i.td,{children:"URI to whitelisted for this Rule"}),(0,n.jsx)(i.td,{children:"Valid URI eg. /login"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Location"}),(0,n.jsx)(i.td,{children:"Location of the entity that has to be whitelisted"}),(0,n.jsx)(i.td,{children:"Any value from the Drop Down List"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Value"}),(0,n.jsx)(i.td,{children:"Value at the Location that has to be selected for White Listing"}),(0,n.jsx)(i.td,{children:"The value that you want to match at the specific location"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Rule Name"}),": Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Message"}),": Specify a rule message containing a detailed description to identify the rule which is to be created."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Custom Rule Id"}),": Specify the rule/mitigation id that needs to be whitelisted so that action against that request will be allowed."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Specific URI"}),": Specify the URI or regex for which the whitelist rule will be applicable."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Add Location"}),": By clicking on the Add Location button, the end-user can add specify the location to be whitelisted. If no location is added then, the rule/mitigation is whitelisted completely."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Location"}),": Specify the location of the entity that has to be whitelisted. The accepted values are:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"URL"}),": Select this if the specified value has to be searched in the URL part of the HTTP Header."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"HEADER VAR"}),": Select this if the specified value has to be searched in the Headers part of the HTTP Header variables."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"HEADER VAL"}),": Select this if the specified value has to be searched in the Headers part of the HTTP Header values."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"HEADERS"}),": Select this if the specified value has to be searched in the Headers part of the HTTP Header."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"COOKIE VAR"}),": Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie variables."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"COOKIE VAL"}),": Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"COOKIES"}),": Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"BODY VAR"}),": Select this if the specified value has to be searched in the variables in the Body part of the HTTP Header."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"BODY VAL"}),": Select this if the specified value has to be searched in the values in the Body part of the HTTP Header"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"BODY"}),": Select this if the specified value has to be searched in the Body part of the HTTP Header"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"ARGS VAR"}),": Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"ARGS VAL"}),": Select this if the specified value has to be searched in the values in the Arguments section in the HTTP Header"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"ARGS"}),": Select this if the specified value has to be searched in the Arguments section in the HTTP Header"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"VARIABLE"}),": Select this if the specified value has to be searched in the variables in the HTTP Header."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Value"}),": Value at the Location that has to be checked for White Listing."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Add"}),": By clicking on the Add button, the end-user can add multiple conditions for Location and Value to be whitelisted. If no location is added then, the rule/mitigation is whitelisted completely."]})]})}function a(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,i,t)=>{var s=t(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,i,t){var s,r={},o=null,c=null;for(s in void 0!==t&&(o=""+t),void 0!==i.key&&(o=""+i.key),void 0!==i.ref&&(c=i.ref),i)l.call(i,s)&&!d.hasOwnProperty(s)&&(r[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===r[s]&&(r[s]=i[s]);return{$$typeof:n,type:e,key:o,ref:c,props:r,_owner:h.current}}i.Fragment=r,i.jsx=o,i.jsxs=o},74848:(e,i,t)=>{e.exports=t(21020)},28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>h});var s=t(96540);const n={},r=s.createContext(n);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);