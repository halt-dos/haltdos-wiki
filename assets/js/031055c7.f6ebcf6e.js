/*! For license information please see 031055c7.f6ebcf6e.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[48435],{94045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"enterprise/ddos/profile/profile","title":"Profile","description":"Configure profile level configurations","source":"@site/versioned_docs/version-7.0/enterprise/ddos/profile/profile.md","sourceDirName":"enterprise/ddos/profile","slug":"/enterprise/ddos/profile/","permalink":"/v7/enterprise/ddos/profile/","draft":false,"unlisted":false,"tags":[],"version":"7.0","frontMatter":{},"sidebar":"ddos_sidebar","previous":{"title":"Anti-DDOS","permalink":"/v7/enterprise/ddos"},"next":{"title":"Profile Settings","permalink":"/v7/enterprise/ddos/profile/general_settings"}}');var s=t(74848),r=t(28453);const o={},l="Profile",d={},a=[{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Profile Name</strong>",id:"profile-name",level:5},{value:"<strong>Mode</strong>",id:"mode",level:5},{value:"<strong>Stateless Mode</strong>",id:"stateless-mode",level:5},{value:"<strong>Parent</strong>",id:"parent",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"profile",children:"Profile"})}),"\n",(0,s.jsx)(n.p,{children:"Configure profile level configurations"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"DDos Profile helps to differentiate the network by dividing the network into different segments based on IP address. This division helps you configure each segment as per your requirement and monitor the stats on particular network segment. By default, Root profile is created."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"network_profile",src:t(9516).A+"",width:"1461",height:"338"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"add_profile",src:t(38271).A+"",width:"585",height:"411"})}),"\n",(0,s.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to  ",(0,s.jsx)(n.strong,{children:"Apps > DDoS > Profiles"})]}),"\n",(0,s.jsx)(n.li,{children:"Configure Profile Settings."}),"\n",(0,s.jsxs)(n.li,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h5,{id:"profile-name",children:(0,s.jsx)(n.strong,{children:"Profile Name"})}),"\n",(0,s.jsx)(n.p,{children:"This field can be used to specify the new profile name. This name should be unique."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"mode",children:(0,s.jsx)(n.strong,{children:"Mode"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows users to specify the mode for the profile i.e. Mitigation, Bypass, Record etc."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Bypass / Record / Record with SSLi / Mitigation\n\n    Default: Bypass \n"})}),"\n",(0,s.jsx)(n.p,{children:"There are four operational modes to select from"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Bypass"}),(0,s.jsx)(n.br,{}),"\n","After selecting this mode all the DDoS mitigation for that profile will be bypassed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Record"}),(0,s.jsx)(n.br,{}),"\n","In this mode, all the mitigation & rule sets will monitor the traffic. No request will be dropped in the record mode. All requests get captured and forwarded in the form of a Record Event. After selecting this mode, Haltdos will Learn the traffic pattern through its Machine Learning based mechanism. All the static mitigation as configured by the user will be in active mode."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Record with SSLi"}),(0,s.jsx)(n.br,{}),"\n","In this mode, all the mitigation & rule sets will monitor the traffic. This rule functions same as record mode but in this mode we also offload the traffic and do the inspection of the encrypted traffic."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Mitigation"}),(0,s.jsx)(n.br,{}),"\n","In this mode, all DDoS mitigation will be turned on including both Static and Dynamic mitigation. When any request dropped by the any mitigation, it will be logged as an event and can be checked under ",(0,s.jsx)(n.strong,{children:"Incidents"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"stateless-mode",children:(0,s.jsx)(n.strong,{children:"Stateless Mode"})}),"\n",(0,s.jsxs)(n.p,{children:["This option allows users to change the profile mode from stateful to stateless mode. By default, all the newly configure profiles are configured in stateful mode. DDoS profile with ",(0,s.jsx)(n.strong,{children:"stateful mode"}),", will track all connection states of the traffic that is being transferred over the Haltdos Anti DDoS device.If we enable the stateless mode, DDoS device will not track any connection."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable \n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(n.p,{children:["To enable connection state tracking, we also need to enable ",(0,s.jsx)(n.a,{href:"/enterprise/ddos/profile/connections/tcp_settings",children:"TCP Settings"}),"."]})}),"\n",(0,s.jsx)(n.h5,{id:"parent",children:(0,s.jsx)(n.strong,{children:"Parent"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows users to select the parent profile for the profile created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: Select Parent\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.h5,{id:"destination-ip",children:(0,s.jsx)(n.strong,{children:"Destination IP"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    Accepted values: IP\n\n    Default: Blank \n"})}),"\n",(0,s.jsx)(n.p,{children:"This option allows users to configure the destination IP. On the basis of destination IP traffic will be filtered and mitigation will be performed. Two profiles can not have same destination IP. This destination IP will only be checked for the Inbound traffic i.e. traffic coming from WAN and going towards LAN side."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,n,t)=>{var i=t(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var i,r={},a=null,c=null;for(i in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:a,ref:c,props:r,_owner:l.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(21020)},9516:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/profiles-28ecfcb4d348c9d2f858d91fc650929a.png"},38271:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/profiles1-ddadbf230def79d828807611fc50cee5.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);