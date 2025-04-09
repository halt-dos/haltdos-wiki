/*! For license information please see 58883229.092a18e1.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[49576],{24311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"kb/waf/kb-1078","title":"KB: 1078","description":"----","source":"@site/docs/kb/waf/kb-1078.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1078","permalink":"/kb/waf/kb-1078","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":78,"frontMatter":{"sidebar_position":78},"sidebar":"kb_sidebar","previous":{"title":"KB: 1077","permalink":"/kb/waf/kb-1077"},"next":{"title":"Application Delivery Controller","permalink":"/kb/adc/"}}');var s=t(74848),i=t(28453);const o={sidebar_position:78},l="KB: 1078",c={},a=[{value:"<strong>How to configure the capture rule to analyze the HTTPS traffic ?</strong>",id:"how-to-configure-the-capture-rule-to-analyze-the-https-traffic-",level:3},{value:"<strong>Problem statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"Genrating the .pcap file",id:"genrating-the-pcap-file",level:3},{value:"With the capture rule in place, the next step is to decrypt the recorded SSL/TLS traffic using Wireshark.",id:"with-the-capture-rule-in-place-the-next-step-is-to-decrypt-the-recorded-ssltls-traffic-using-wireshark",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"kb-1078",children:"KB: 1078"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"how-to-configure-the-capture-rule-to-analyze-the-https-traffic-",children:(0,s.jsx)(n.strong,{children:"How to configure the capture rule to analyze the HTTPS traffic ?"})}),"\n",(0,s.jsx)(n.h4,{id:"problem-statement",children:(0,s.jsx)(n.strong,{children:"Problem statement"})}),"\n",(0,s.jsx)(n.p,{children:"How can HTTPS traffic be selectively decrypted for analysis by securely logging SSL/TLS session keys based on configurable criteria using capture rule?"}),"\n",(0,s.jsx)(n.h4,{id:"solution",children:(0,s.jsx)(n.strong,{children:"Solution"})}),"\n",(0,s.jsx)(n.p,{children:"The WAF can log SSL/TLS session keys based on configurable criteria defined in the capture rule to generate the SSLKEYLOG file and .pcap file, which will provide detailed information about the network activity over Wireshark."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Steps to Solve"}),":-"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Login into ",(0,s.jsx)(n.strong,{children:"Haltdos console"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1078",src:t(4681).A+"",width:"1400",height:"741"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.strong,{children:"Apps"})," > ",(0,s.jsx)(n.strong,{children:"WAF"})," > ",(0,s.jsx)(n.strong,{children:"Listener"})," > go to listener."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1078",src:t(26892).A+"",width:"1436",height:"787"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["In the selected ",(0,s.jsx)(n.strong,{children:"Listener"})," > ",(0,s.jsx)(n.strong,{children:"SSL Management"})," > check for ssl certificate configuration > ",(0,s.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1078",src:t(33386).A+"",width:"1406",height:"481"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Now go to ",(0,s.jsx)(n.strong,{children:"Rules"})," > ",(0,s.jsx)(n.strong,{children:"Capture Rule"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1078",src:t(26463).A+"",width:"1458",height:"948"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Now configure the ",(0,s.jsx)(n.strong,{children:"Capture Rule"})," based on the required specification."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1078",src:t(12410).A+"",width:"1458",height:"830"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"In the conditions section, users can select their required criteria, such as:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Find Location"}),": It includes various conditions such as client Browser, OS, Device, Source IP etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Find Parameter"}),": Enter the parameter for the location."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Match Condition"}),": It includes pattern exists, pattern don't exists, equals or not equals etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Match Value"}),": Enter the value for the match condition."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1078",src:t(40826).A+"",width:"926",height:"355"})}),"\n",(0,s.jsx)(n.admonition,{title:"Noe",type:"note",children:(0,s.jsx)(n.p,{children:"After configuring the capture rule, it will generate the SSLKEYLOG file in the path file: /var/log/haltdos/offloader."})}),"\n",(0,s.jsx)(n.h3,{id:"genrating-the-pcap-file",children:"Genrating the .pcap file"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 1"})," - If you want to apply the capture rule to a specific client machine or server, enter its IP address in the condition section of the capture rule and save condition."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"kb-1078",src:t(61697).A+"",width:"924",height:"263"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 2"})," - Open that listener using HTTPS in a browser tab and let it receive some traffic."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 3"})," - Now, on the WAF server where the listener is deployed, run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"tcpdump -i any port 443 and host <hostname> -w dump.pcap   \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 4"})," - This will capture the traffic that has been received from the client machine or server IP configured in the capture rule."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Step 5"})," - Now, after stopping the tcpdump command, the user will have the dump.pcap file."]}),"\n",(0,s.jsx)(n.h3,{id:"with-the-capture-rule-in-place-the-next-step-is-to-decrypt-the-recorded-ssltls-traffic-using-wireshark",children:"With the capture rule in place, the next step is to decrypt the recorded SSL/TLS traffic using Wireshark."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Requirements"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Captured .pcap file from your network traffic."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The SSL session key log file or server private key."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Wireshark installed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get the key log file generated by Haltdos WAF from the capture rule."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In Wireshark, go to ",(0,s.jsx)(n.strong,{children:"Edit"})," > ",(0,s.jsx)(n.strong,{children:"Preferences"})," > ",(0,s.jsx)(n.strong,{children:"Protocols"})," > ",(0,s.jsx)(n.strong,{children:"TLS"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Under (Pre)-Master-Secret log filename, enter the path to the key log file."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(n.p,{children:["Refer to ",(0,s.jsx)(n.a,{href:"/kb/waf/kb-1069",children:"KB-1069"})," and ",(0,s.jsx)(n.a,{href:"/kb/waf/kb-1070",children:"KB-1070"})," for detailed guidance on ",(0,s.jsx)(n.strong,{children:"packet capture"})," and ",(0,s.jsx)(n.strong,{children:"SSL/TLS"})," decryption using ",(0,s.jsx)(n.strong,{children:"Wireshark"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,h=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:a,ref:h,props:i,_owner:l.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},74848:(e,n,t)=>{e.exports=t(21020)},4681:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kb_1063_overview-6299468031baf14ff38b884e9778857e.png"},12410:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kb_1078_capturerule-2046fa3b8657a24c1ed98b612845f17d.png"},40826:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kb_1078_conditions-376475e1907348eaeffb43e967ed8158.png"},61697:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kb_1078_ip_condition-de6137ddf06e0360e505e71e0b3f6950.png"},26892:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kb_1078_listener-241cac6a27ac74e7031477c3db579a39.png"},26463:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kb_1078_rules-0371c2d885f246b504552913b3596e40.png"},33386:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/kb_1078_ssl_mang-38046217f8e282290ec5ce2667ad4d30.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);