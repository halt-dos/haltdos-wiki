/*! For license information please see c3ee8808.be67608a.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[93287],{19389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/waf/listener/profiles/bot","title":"Bot Protection","description":"Detect and Block malicious bots in real-time","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/bot.md","sourceDirName":"enterprise/waf/listener/profiles","slug":"/enterprise/waf/listener/profiles/bot","permalink":"/v6/enterprise/waf/listener/profiles/bot","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"waf_sidebar","previous":{"title":"Antivirus","permalink":"/v6/enterprise/waf/listener/profiles/anti_virus"},"next":{"title":"Policy","permalink":"/v6/enterprise/waf/listener/profiles/policy/"}}');var r=n(74848),i=n(28453);const l={sidebar_position:4},o="Bot Protection",c={},d=[{value:"How To Use",id:"how-to-use",level:2}];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"bot-protection",children:"Bot Protection"})}),"\n",(0,r.jsx)(t.p,{children:"Detect and Block malicious bots in real-time"}),"\n",(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"bot",src:n(70336).A+"",width:"1254",height:"633"})}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use",children:"How To Use"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to ",(0,r.jsx)(t.strong,{children:"WAF"})," > ",(0,r.jsx)(t.strong,{children:"Listener"})," > **Security Profiles ** > ",(0,r.jsx)(t.strong,{children:"Bot Protection"})]}),"\n",(0,r.jsx)(t.li,{children:"Configure your setting"}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Configure the following parameters to set up the desired settings:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Accepted Values"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Allowed Crawlers"}),(0,r.jsx)(t.td,{children:"Specify the list of good crawlers by specifying their user agents. Such requests will be allowed."}),(0,r.jsx)(t.td,{children:"User Agent"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bad Crawlers"}),(0,r.jsx)(t.td,{children:"Specify the list of bad crawlers by specifying their user agents. Such requests will be dropped."}),(0,r.jsx)(t.td,{children:"User Agent"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Suspicious Crawlers"}),(0,r.jsx)(t.td,{children:"Specify a list of suspicious crawlers by specifying their user agents. Such requests will be rate-limited."}),(0,r.jsx)(t.td,{children:"User Agent"}),(0,r.jsx)(t.td,{children:"Blank"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Bot Request Rate"}),(0,r.jsx)(t.td,{children:"Specify the maximum allowed Bot request rate from a single client IP."}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"NO ACTION"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum Bot Request Burst"}),(0,r.jsx)(t.td,{children:"Specify the maximum allowed Bot request burst from a single client IP."}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"NO ACTION"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bot Track Duration"}),(0,r.jsx)(t.td,{children:"Specify the Bot request rate track duration in seconds."}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"NO ACTION"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Tor Traffic"}),(0,r.jsx)(t.td,{children:"Specifies the action to perform on TOR Network traffic."}),(0,r.jsx)(t.td,{children:"NO ACTION / DROP / SEND CHALLENGE"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bad Reputation Traffic"}),(0,r.jsx)(t.td,{children:"Specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM."}),(0,r.jsx)(t.td,{children:"NO ACTION / DROP / SEND CHALLENGE"}),(0,r.jsx)(t.td,{children:"NO ACTION"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Anonymous Proxy Traffic"}),(0,r.jsx)(t.td,{children:"Specifies the action when request contains no token, if token validation is enabled."}),(0,r.jsx)(t.td,{children:"NO ACTION / RECORD / RATE LIMIT / DROP"}),(0,r.jsx)(t.td,{children:"NO ACTION"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Advance Bot Protection"}),(0,r.jsx)(t.td,{children:"Specifies the advance bot protection method."}),(0,r.jsx)(t.td,{children:"NO ACTION / RECORD / RATE LIMIT / DROP"}),(0,r.jsx)(t.td,{children:"NONE"})]})]})]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Allowed Crawlers"}),"\nThis field specifies the list of good crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Allowed Crawlers permits the crawlers to access the protected URL."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    Accepted values: String  \n    \n    Default: Empty  \n"})}),"\n",(0,r.jsx)(t.p,{children:"E.g. Google Crawler"}),"\n",(0,r.jsx)(t.p,{children:"User-Agent: google"}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Bad Crawlers"}),"\nThis field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers does not permit the crawlers to access the protected URL."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    Accepted values: String  \n    \n    Default: Empty  \n"})}),"\n",(0,r.jsx)(t.p,{children:"E.g. Google Crawler"}),"\n",(0,r.jsx)(t.p,{children:"User-Agent: google"}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Suspicious Crawlers"}),"\nThis field specifies a list of suspicious crawlers by specifying their user agents. These requests will be rate-limited based on the Bot rate limit i.e. Max Request Rate and Max Request Burst."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    Accepted values: String  \n    \n    Default: Empty  \n"})}),"\n",(0,r.jsx)(t.p,{children:"E.g. Suspicious Crawler"}),"\n",(0,r.jsx)(t.p,{children:"User-Agent: wow.tor"}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Maximum Bot Request Rate"}),"\nThis field specifies the maximum allowed Bot request rate from a single client IP. In case the request rate of the user is higher than the defined rate, the request gets dropped."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    Accepted values: Numbers  \n\n    Default: 30  \n"})}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Maximum Bot Request Burst"}),"\nThis field specifies the maximum allowed Bot request burst from a single client IP. In case the requested burst of the user is higher than the defined rate, the request gets dropped."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"    Accepted values: Numbers  \n    Default: 50  \n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"note",children:(0,r.jsx)(t.p,{children:"Bot Request Burst must be greater than or equal to Bot Request Rate"})}),"\n",(0,r.jsxs)(t.ol,{start:"6",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Bot Track Duration"}),"\nSpecify the Bot request rate track duration in seconds."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Tor Traffic"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This field allows you to take action in case there is Tor traffic in the network. Tor traffic are the request coming from tor browser or dark web. It includes two actions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NO ACTION"}),"\nDon't perform any action"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"DROP"}),"\nDrop the request"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SEND CHALLENGE"}),"\nSend a challenge like a captcha"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{start:"8",children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"Bad Reputation Traffic"})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This field allows you to take action on traffic when Haltdos Threat Stream TM reports suspicious IPs. It includes two actions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NO ACTION"}),"\nDon't perform any action"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"DROP"}),"\nDrop the request"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SEND CHALLENGE"}),"\nSend a challenge like a captcha"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.ol,{start:"9",children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Advance Bot Protection"}),"\nThis field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:"]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NONE"})," :\nDon't perform any action"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"FINGERPRINT"}),":\nPerform fingerprint-based validation for protection of Web Applications, Web Services, and Mobile Applications from automated threats like bots. Action on the request is taken after the analysis of user activity and browser-based calculated score which helps in confirming the source of the request, human or bot. The following actions can be taken: Drop, Send Challenge, Record, Rate Limit."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"TOKEN VALIDATION"})," :\nPerform token-based validation. API requests will be authenticated using tokens associated with the request. This ensures that the web service is serving authorized requests with the help of Haltdos Advance Bot Protection."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"ANY"}),":\nOn the basis of application configuration, the required challenge will be thrown on the requests.\nNote: User can configure Advance Bot Settings in the Advanced settings for the listener by using the link: Advance Bot Settings"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,i={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:d,ref:a,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},70336:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/bot_protection-6485935907e39ad57a4b3046d81ef05a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);