/*! For license information please see c643ec63.3551b036.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[78306],{13775:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"kb/waf/kb-1071","title":"KB: 1071","description":"How to decrypt SSL/TLS using Wireshark and SSLKEYLOGFILE environment variable on Firefox or Google Chrome using Wireshark?","source":"@site/docs/kb/waf/kb-1071.md","sourceDirName":"kb/waf","slug":"/kb/waf/kb-1071","permalink":"/kb/waf/kb-1071","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":71,"frontMatter":{"sidebar_position":71},"sidebar":"kb_sidebar","previous":{"title":"KB: 1070","permalink":"/kb/waf/kb-1070"},"next":{"title":"KB: 1072","permalink":"/kb/waf/kb-1072"}}');var i=s(74848),t=s(28453);const o={sidebar_position:71},l="KB: 1071",c={},h=[{value:"<strong>How to decrypt SSL/TLS using Wireshark and SSLKEYLOGFILE environment variable on Firefox or Google Chrome using Wireshark?</strong>",id:"how-to-decrypt-ssltls-using-wireshark-and-sslkeylogfile-environment-variable-on-firefox-or-google-chrome-using-wireshark",level:4},{value:"Pre-Requisites",id:"pre-requisites",level:4},{value:"How to log the SSL session keys on windows",id:"how-to-log-the-ssl-session-keys-on-windows",level:5},{value:"How to log the SSL session keys on Linux",id:"how-to-log-the-ssl-session-keys-on-linux",level:5},{value:"How to decrypt SSL/TLS traffic using Wireshark with SSLKEYLOGFILE",id:"how-to-decrypt-ssltls-traffic-using-wireshark-with-sslkeylogfile",level:4},{value:"Resources",id:"resources",level:5},{value:"Steps",id:"steps",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"kb-1071",children:"KB: 1071"})}),"\n",(0,i.jsx)(n.h4,{id:"how-to-decrypt-ssltls-using-wireshark-and-sslkeylogfile-environment-variable-on-firefox-or-google-chrome-using-wireshark",children:(0,i.jsx)(n.strong,{children:"How to decrypt SSL/TLS using Wireshark and SSLKEYLOGFILE environment variable on Firefox or Google Chrome using Wireshark?"})}),"\n",(0,i.jsx)(n.h4,{id:"pre-requisites",children:"Pre-Requisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Wireshark Software"}),"\n",(0,i.jsx)(n.li,{children:"Firefox or Chrome browsers to access the web application"}),"\n",(0,i.jsx)(n.li,{children:"SSL session keys"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"how-to-log-the-ssl-session-keys-on-windows",children:"How to log the SSL session keys on windows"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the Environment Variables by right-clicking on ",(0,i.jsx)(n.strong,{children:"This PC"})," and selecting ",(0,i.jsx)(n.strong,{children:"Properties"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Advanced system settings"})," on the left."]}),"\n",(0,i.jsxs)(n.li,{children:["In the System Properties window, click on the ",(0,i.jsx)(n.strong,{children:"Environment Variables"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"System variables"}),', click "New".']}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Variable name"})," field, enter ",(0,i.jsx)(n.code,{children:"SSLKEYLOGFILE"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Variable value"})," field, enter the path where you want the SSL keys to be saved, e.g., ",(0,i.jsx)(n.code,{children:"C:\\path\\to\\sslkeys.log"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.strong,{children:"OK"})]}),"\n",(0,i.jsx)(n.li,{children:"Start Firefox or Chrome"}),"\n",(0,i.jsx)(n.li,{children:"Access the web application.Now, whenever you visit the application using SSL/TLS, the session keys will be logged to the specified file."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"how-to-log-the-ssl-session-keys-on-linux",children:"How to log the SSL session keys on Linux"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open a terminal"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create an empty file to store the SSLKEYLOGFILE environment variable"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"touch sslkeyfile\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set the SSLKEYLOGFILE environment variable for your account by using the following command syntax: ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"export SSLKEYLOGFILE=/path/to/logfile/sslkeyfile\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"export SSLKEYLOGFILE=/home/test/sslkeyfile.log\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Start packet capture using an application such as Wireshark or ",(0,i.jsx)(n.strong,{children:"tcpdump"}),". For information about ",(0,i.jsx)(n.strong,{children:"tcpdump"})," refer to ",(0,i.jsx)(n.a,{href:"/kb/waf/kb-1069",children:"How to capture packet and tracethem through tcp dump utility?"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Start Firefox or Chrome from the same terminal window that was used to set the environmental variable ",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"\nFor example\n",(0,i.jsx)(n.code,{children:"google-chrome"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"note",children:(0,i.jsx)(n.p,{children:"Make sure to close all open browser windows, and always start the browser from the same command terminal, as the session variable is set only in that terminal."})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Access the web application. Now, whenever you visit the application using SSL/TLS, the session keys will be logged to the specified file."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-decrypt-ssltls-traffic-using-wireshark-with-sslkeylogfile",children:"How to decrypt SSL/TLS traffic using Wireshark with SSLKEYLOGFILE"}),"\n",(0,i.jsx)(n.h5,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(15033).A+"",children:"Download the packet capture (.pcap)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(12893).A+"",children:"Download the SSL KeyLog (.txt)"})}),"\n",(0,i.jsx)(n.h4,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Load the Captured File"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Capture the traffic using ",(0,i.jsx)(n.code,{children:"tcpdump"})," based on your requirements: from the client to the WAF machine or from the WAF machine to the backend server."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"From Client to WAF Machine"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"SSH into the WAF machine."}),"\n",(0,i.jsxs)(n.li,{children:["Start capturing packets using ",(0,i.jsx)(n.code,{children:"tcpdump"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tcpdump -i any port 443 and host <Client IP> -w dump.pcap\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"From WAF Machine to Server"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"SSH into the server machine."}),"\n",(0,i.jsxs)(n.li,{children:["Start capturing packets using ",(0,i.jsx)(n.code,{children:"tcpdump"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"For example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tcpdump -i any port 443 and host <WAF IP> -w dump.pcap\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Open Wireshark."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"NOTE",type:"note",children:(0,i.jsx)(n.p,{children:"Ensure that both the .pcap file and the SSL key file are present on the same machine where Wireshark will be used."})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Load the traffic ",(0,i.jsx)(n.code,{children:"tcpdump"})," file in .pcap format."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure the SSL/TLS Preferences"})}),"\n",(0,i.jsx)(n.p,{children:"To upload captured TCP dump on wireshark."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"File"})," > ",(0,i.jsx)(n.strong,{children:"Open"})]}),"\n",(0,i.jsx)(n.li,{children:"Select your .pcap file and Select Open."}),"\n",(0,i.jsx)(n.li,{children:"This will show the list of captured packets."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then we need to configure the TLS/SSL preference to decrypt the required file."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"Edit > Preferences"})]}),"\n",(0,i.jsx)(n.li,{children:"Expand the protocols list on the left side."}),"\n",(0,i.jsx)(n.li,{children:"Scroll down and select TLS or SSL (depending on your Wireshark version)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kb-1070",src:s(87672).A+"",width:"790",height:"566"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Set the Pre-Master Secret Log File"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Pre-Master-Secret log filename"})," field, click ",(0,i.jsx)(n.strong,{children:"Browse"})," and select the sslkeys.log file that your browser has been writing to."]}),"\n",(0,i.jsxs)(n.li,{children:["Apply the settings by clicking ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"View Decrypted Data"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Wireshark should now automatically decrypt the SSL/TLS traffic using the session keys from sslkeys.log"}),"\n",(0,i.jsx)(n.li,{children:"You can inspect the decrypted packets, including HTTP requests and responses, directly in Wireshark"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},15033:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/files/capture-0002564c6854d1fe7c28309eb9d57696.pcap"},12893:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/files/prikeyfile-b72c5947501a943731a7dbd5aaf7b4df.txt"},21020:(e,n,s)=>{var r=s(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,s){var r,t={},h=null,d=null;for(r in void 0!==s&&(h=""+s),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:i,type:e,key:h,ref:d,props:t,_owner:l.current}}n.Fragment=t,n.jsx=h,n.jsxs=h},74848:(e,n,s)=>{e.exports=s(21020)},87672:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/tls-3d2beff5c1872f44e60ad0bcf70b6d8a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);