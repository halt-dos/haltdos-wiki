/*! For license information please see 863bde76.880cb5e6.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[13532],{27706:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"enterprise/adc/listeners/server_groups/servers","title":"Servers","description":"servers","source":"@site/versioned_docs/version-7.0/enterprise/adc/listeners/server_groups/servers.md","sourceDirName":"enterprise/adc/listeners/server_groups","slug":"/enterprise/adc/listeners/server_groups/servers","permalink":"/v7/enterprise/adc/listeners/server_groups/servers","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"adc_sidebar","previous":{"title":"Server Groups","permalink":"/v7/enterprise/adc/listeners/server_groups/"},"next":{"title":"Load Balancing","permalink":"/v7/enterprise/adc/listeners/server_groups/load_balancing"}}');var t=n(74848),i=n(28453);const l={sidebar_position:1},o="Servers",c={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Server ID</strong>",id:"server-id",level:5},{value:"<strong>Server</strong>",id:"server",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Weight</strong>",id:"weight",level:5},{value:"<strong>Back up</strong>",id:"back-up",level:5},{value:"<strong>Mode</strong>",id:"mode",level:5},{value:"Forwarded HTTP Version",id:"forwarded-http-version",level:5},{value:"<strong>Slow Start</strong>",id:"slow-start",level:5},{value:"<strong>Max Connection</strong>",id:"max-connection",level:5}];function a(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"servers",children:"Servers"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"servers",src:n(56499).A+"",width:"1831",height:"415"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"servers2",src:n(95026).A+"",width:"1828",height:"607"})}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Go to Stack > ",(0,t.jsx)(r.a,{href:"/v7/enterprise/adc",children:(0,t.jsx)(r.strong,{children:"SLB"})})," > ",(0,t.jsx)(r.a,{href:"/v7/enterprise/adc/listeners/",children:(0,t.jsx)(r.strong,{children:"Listeners"})})," > ",(0,t.jsx)(r.strong,{children:"Server Groups"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Select the ",(0,t.jsx)(r.strong,{children:"Group name"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Select the ",(0,t.jsx)(r.strong,{children:"Add Server"})," option."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Click ",(0,t.jsx)(r.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"Description:"}),"\n",(0,t.jsx)(r.h5,{id:"server-id",children:(0,t.jsx)(r.strong,{children:"Server ID"})}),"\n",(0,t.jsx)(r.p,{children:"Server ID is used to identify the upstream servers. It will be always unique for every original/upstream server."}),"\n",(0,t.jsx)(r.h5,{id:"server",children:(0,t.jsx)(r.strong,{children:"Server"})}),"\n",(0,t.jsx)(r.p,{children:"This option allows users to add the server domain name/IPv4/IPv6 address of the server."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"port",children:(0,t.jsx)(r.strong,{children:"Port"})}),"\n",(0,t.jsx)(r.p,{children:"This option allows users to set the port number that is being used for the server."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Max: 65535\n\n    Min: 0\n\n    Default: 80  \n"})}),"\n",(0,t.jsx)(r.h5,{id:"weight",children:(0,t.jsx)(r.strong,{children:"Weight"})}),"\n",(0,t.jsx)(r.p,{children:"This option allows users to set the weight value for the server. Server with a higher weight value will get more requests than servers with less weight value."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Max: 100\n\n    Min:  1\n\n    Default: 1 \n"})}),"\n",(0,t.jsx)(r.h5,{id:"back-up",children:(0,t.jsx)(r.strong,{children:"Back up"})}),"\n",(0,t.jsx)(r.p,{children:"This option allows users to enable or disable the backup server. If the user enables this option, that server will act as a backup server and after the set threshold limit this backup server will start. If the user disabled this option, that server will act as a normal server in the server group."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: True / False\n\n    Default: False \n"})}),"\n",(0,t.jsx)(r.h5,{id:"mode",children:(0,t.jsx)(r.strong,{children:"Mode"})}),"\n",(0,t.jsx)(r.p,{children:"This option allows users to configure the server ready or down setting."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Ready / Down / Gracefully Down\n\n    Default: Ready \n"})}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Ready"})," - If the user has set the Ready value in this option then server will take part actively in handling the client requests."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Down"})," - If the user has set the Down value in this option then server will not take part actively in handling the client requests."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Gracefully Down"})," - Gracefully Down option will ensure no active connection will be break during the server down activity, server will be handling the old connection until con-current connection count reach to 0. Once con-current connection will be 0 then server will be marked as down at SLB level. Hence, with the help this option, user can gracefully down any server."]}),"\n"]}),"\n",(0,t.jsx)(r.h5,{id:"forwarded-http-version",children:"Forwarded HTTP Version"}),"\n",(0,t.jsx)(r.p,{children:"This option allows user to select HTTP version while forwarding request to the backend server."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: ANY / HTTP 1.1 / HTTP 2.0\n\n    Default: Blank \n"})}),"\n",(0,t.jsx)(r.h5,{id:"slow-start",children:(0,t.jsx)(r.strong,{children:"Slow Start"})}),"\n",(0,t.jsx)(r.p,{children:"This option allows users to select the graceful start time for newly added servers."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0 \n"})}),"\n",(0,t.jsx)(r.h5,{id:"max-connection",children:(0,t.jsx)(r.strong,{children:"Max Connection"})}),"\n",(0,t.jsx)(r.p,{children:"The user can define how many maximum connections can be made on this particular server."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Integer\n\n    Default: 0\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,i={},d=null,a=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)l.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:a,props:i,_owner:o.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},56499:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/server-c37ec7213f94c8086518182d1558dbfe.png"},95026:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/server1-ec5e7fce50f6aaebebfe9bf8507d755e.png"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);