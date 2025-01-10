/*! For license information please see fdb0f900.413ccf3d.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[68872],{40392:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"kb/waf/kb-1026","title":"KB: 1026","description":"-----------","source":"@site/docs/kb/waf/kb-1026.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1026","permalink":"/kb/waf/kb-1026","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"sidebar_position":26},"sidebar":"kb_sidebar","previous":{"title":"KB: 1025","permalink":"/kb/waf/kb-1025"},"next":{"title":"KB: 1027","permalink":"/kb/waf/kb-1027"}}');var t=n(74848),o=n(28453);const i={sidebar_position:26},a="KB: 1026",l={},d=[{value:"<strong>How to mark any server as  Ready or Down?</strong>",id:"how-to-mark-any-server-as--ready-or-down",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}];function c(e){const r={h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"kb-1026",children:"KB: 1026"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"how-to-mark-any-server-as--ready-or-down",children:(0,t.jsx)(r.strong,{children:"How to mark any server as  Ready or Down?"})}),"\n",(0,t.jsx)(r.h4,{id:"problem-statement",children:(0,t.jsx)(r.strong,{children:"Problem Statement"})}),"\n",(0,t.jsx)(r.p,{children:"A listener is having multiple backend server in which some of them can be marked as soft down. It means when a  server is marked down in a server group, Haltdos WAF will not send any client request to that server."}),"\n",(0,t.jsx)(r.h4,{id:"solution",children:(0,t.jsx)(r.strong,{children:"Solution"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Login into Haltdos console."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"kb-1026",src:n(6641).A+"",width:"1810",height:"966"})}),"\n",(0,t.jsxs)(r.ol,{start:"2",children:["\n",(0,t.jsxs)(r.li,{children:["Go to ",(0,t.jsx)(r.strong,{children:"Apps"})," > ",(0,t.jsx)(r.strong,{children:"WAF"})," > ",(0,t.jsx)(r.strong,{children:"listener"})," > ",(0,t.jsx)(r.strong,{children:"Server Groups"})," > ",(0,t.jsx)(r.strong,{children:"Servers"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"kb-1026",src:n(5797).A+"",width:"1820",height:"962"})}),"\n",(0,t.jsxs)(r.ol,{start:"3",children:["\n",(0,t.jsx)(r.li,{children:"After clicking on server group name, click on edit button on server."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"kb-1026",src:n(1195).A+"",width:"1820",height:"962"})}),"\n",(0,t.jsxs)(r.ol,{start:"4",children:["\n",(0,t.jsxs)(r.li,{children:["Under ",(0,t.jsx)(r.strong,{children:"Mode"})," option User can set the server Down or Ready as per required."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"kb-1026",src:n(35501).A+"",width:"1912",height:"915"})}),"\n",(0,t.jsx)(r.p,{children:"For example In the above image user has marked  server as Down. After this no end user request will be forwarded to that server."})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var s,o={},d=null,c=null;for(s in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,s)&&!l.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:t,type:e,key:d,ref:c,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},35501:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/aaaa-df57e788ad5c8fb51c863b5348078098.png"},1195:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/edit_servers_kb_1026_3-b068c4e14795b1d7dd11bfd70b12294d.png"},6641:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/overview_kb_1026_1-b66b77acbb01e13a8777400c8be88de8.png"},5797:(e,r,n)=>{n.d(r,{A:()=>s});const s=n.p+"assets/images/servers_kb_1026_2-1f5914a8e8b75f18bc469668fc987d31.png"},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var s=n(96540);const t={},o=s.createContext(t);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);