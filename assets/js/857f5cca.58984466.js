"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[26996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(n),k=a,O=u["".concat(p,".").concat(k)]||u[k]||d[k]||s;return n?r.createElement(O,o(o({ref:t},c),{},{components:n})):r.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},28798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:7},l="Pattern Score",p={unversionedId:"enterprise/llb/security/pattern_score",id:"enterprise/llb/security/pattern_score",title:"Pattern Score",description:"Overview",source:"@site/docs/enterprise/llb/security/pattern_score.md",sourceDirName:"enterprise/llb/security",slug:"/enterprise/llb/security/pattern_score",permalink:"/enterprise/llb/security/pattern_score",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"llb_sidebar",previous:{title:"Policy Rules",permalink:"/enterprise/llb/security/policy_rules"},next:{title:"Cloud Signaling",permalink:"/enterprise/llb/security/cloud_signaling"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>TCP SYN PACKET WITH NO OPTIONS</strong>",id:"tcp-syn-packet-with-no-options",level:5},{value:"<strong>OUT OF RANGE MSS</strong>",id:"out-of-range-mss",level:5},{value:"<strong>MSS IN NON-SYN PACKET</strong>",id:"mss-in-non-syn-packet",level:5},{value:"<strong>WINDOW SCALE IN NON-SYN PACKET</strong>",id:"window-scale-in-non-syn-packet",level:5},{value:"<strong>TOP SOURCE PORT TOP TALKER</strong>",id:"top-source-port-top-talker",level:5},{value:"<strong>SOURCE PORT ZERO</strong>",id:"source-port-zero",level:5},{value:"<strong>SOURCE PORT OUT OF RANGE</strong>",id:"source-port-out-of-range",level:5},{value:"<strong>TCP SEQUENCE NUMBER TOP TALKER</strong>",id:"tcp-sequence-number-top-talker",level:5},{value:"<strong>TCP SEQUENCE NUMBER ZERO</strong>",id:"tcp-sequence-number-zero",level:5},{value:"<strong>TCP URGENT POINTER WITHOUT FLAG</strong>",id:"tcp-urgent-pointer-without-flag",level:5},{value:"<strong>TCP ACK NUMBER WITHOUT FLAG</strong>",id:"tcp-ack-number-without-flag",level:5},{value:"<strong>TCP FLAGS TOP TALKER</strong>",id:"tcp-flags-top-talker",level:5},{value:"<strong>SUSPICIOUS TCP FLAG COMBINATIONS</strong>",id:"suspicious-tcp-flag-combinations",level:5},{value:"<strong>TCP RESERVED FLAGS</strong>",id:"tcp-reserved-flags",level:5},{value:"<strong>TCP SUSPICIOUS WINDOW SIZE</strong>",id:"tcp-suspicious-window-size",level:5},{value:"<strong>SOURCE PREFIX TOP TALKER</strong>",id:"source-prefix-top-talker",level:4},{value:"<strong>SUSPICIOUS CHECKSUM</strong>",id:"suspicious-checksum",level:4},{value:"<strong>TCP URGENT POINTER TOP TALKER</strong>",id:"tcp-urgent-pointer-top-talker",level:5},{value:"<strong>ICMP DESTINATION TOP TALKER</strong>",id:"icmp-destination-top-talker",level:5},{value:"<strong>SOURCE PREFIX TOP TALKER</strong>",id:"source-prefix-top-talker-1",level:5},{value:"<strong>SUSPICIOUS CHECKSUM</strong>",id:"suspicious-checksum-1",level:5},{value:"<strong>TCP URGENT POINTER TOP TALKER</strong>",id:"tcp-urgent-pointer-top-talker-1",level:5},{value:"<strong>ICMP DESTINATION TOP TALKER</strong>",id:"icmp-destination-top-talker-1",level:5},{value:"<strong>UDP DESTINATION TOP TALKER</strong>",id:"udp-destination-top-talker",level:5},{value:"<strong>DNS DESTINATION TOP TALKER</strong>",id:"dns-destination-top-talker",level:5},{value:"<strong>DNS ANY QUERY</strong>",id:"dns-any-query",level:5},{value:"<strong>DNS BAD ANSWER COUNT</strong>",id:"dns-bad-answer-count",level:4},{value:"<strong>DNS BAD EDNS0 NAME</strong>",id:"dns-bad-edns0-name",level:4},{value:"<strong>DNS BAD FLAGS</strong>",id:"dns-bad-flags",level:5},{value:"<strong>DNS BAD LENGTH</strong>",id:"dns-bad-length",level:5},{value:"<strong>DNS BAD NAMESERVER COUNT</strong>",id:"dns-bad-nameserver-count",level:5},{value:"<strong>DNS BAD RETURN CODE</strong>",id:"dns-bad-return-code",level:5},{value:"<strong>DNS EDNS0 WITH DO</strong>",id:"dns-edns0-with-do",level:5},{value:"<strong>DNS RARE QUERY TYPE</strong>",id:"dns-rare-query-type",level:5}],u={toc:c},d="wrapper";function k(e){var{components:t}=e,o=s(e,["components"]);return(0,r.kt)(d,a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"pattern-score"}),"Pattern Score"),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos utilizes advanced packet scoring technology to detect and mitigate threats. Initially, the solution is deployed in learning mode, where it observes traffic patterns and behavior. After about two weeks, it shifts to mitigation mode, leveraging the learned attributes to minimize false positives while adapting to evolving traffic behavior. This continuous learning allows the system to adjust to changes in network traffic, ensuring long-term security."),(0,r.kt)("p",null,"By scoring each packet based on deep packet inspection and contextual analysis\u2014such as traffic rate, behavior, and request timing\u2014the system assigns lower scores to genuine traffic and higher scores to potential attack traffic. This adaptive traffic shaping prioritizes legitimate traffic while preventing anomalies and attacks, offering near-zero false positives and protection against zero-day threats."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pattern_score",src:n(99666).Z,width:"1155",height:"923"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pattern_score",src:n(13116).Z,width:"1114",height:"825"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Apps > LLB > Security > Pattern Score"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the settings as per requirement.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,r.kt)("p",null,"Under the packet scoring section, users can configure what kind of severity level should be used while setting up the packet score.\nIn Haltdos Link Load Balancer solution, we provide packet score to all packets those are going through the solution. We have defined here three categories of packet scoring which can be customizable by the users. User can change the packet scoring mechanism from low, medium and high.\nThe low level indicates that packet scoring will be start from lower level."),(0,r.kt)("h3",a({},{id:"description"}),(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",a({},{id:"tcp-syn-packet-with-no-options"}),(0,r.kt)("strong",{parentName:"h5"},"TCP SYN PACKET WITH NO OPTIONS")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"out-of-range-mss"}),(0,r.kt)("strong",{parentName:"h5"},"OUT OF RANGE MSS")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"mss-in-non-syn-packet"}),(0,r.kt)("strong",{parentName:"h5"},"MSS IN NON-SYN PACKET")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"window-scale-in-non-syn-packet"}),(0,r.kt)("strong",{parentName:"h5"},"WINDOW SCALE IN NON-SYN PACKET")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"top-source-port-top-talker"}),(0,r.kt)("strong",{parentName:"h5"},"TOP SOURCE PORT TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"source-port-zero"}),(0,r.kt)("strong",{parentName:"h5"},"SOURCE PORT ZERO")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"source-port-out-of-range"}),(0,r.kt)("strong",{parentName:"h5"},"SOURCE PORT OUT OF RANGE")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-sequence-number-top-talker"}),(0,r.kt)("strong",{parentName:"h5"},"TCP SEQUENCE NUMBER TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-sequence-number-zero"}),(0,r.kt)("strong",{parentName:"h5"},"TCP SEQUENCE NUMBER ZERO")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-urgent-pointer-without-flag"}),(0,r.kt)("strong",{parentName:"h5"},"TCP URGENT POINTER WITHOUT FLAG")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-ack-number-without-flag"}),(0,r.kt)("strong",{parentName:"h5"},"TCP ACK NUMBER WITHOUT FLAG")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-flags-top-talker"}),(0,r.kt)("strong",{parentName:"h5"},"TCP FLAGS TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"suspicious-tcp-flag-combinations"}),(0,r.kt)("strong",{parentName:"h5"},"SUSPICIOUS TCP FLAG COMBINATIONS")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-reserved-flags"}),(0,r.kt)("strong",{parentName:"h5"},"TCP RESERVED FLAGS")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-suspicious-window-size"}),(0,r.kt)("strong",{parentName:"h5"},"TCP SUSPICIOUS WINDOW SIZE")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h4",a({},{id:"source-prefix-top-talker"}),(0,r.kt)("strong",{parentName:"h4"},"SOURCE PREFIX TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h4",a({},{id:"suspicious-checksum"}),(0,r.kt)("strong",{parentName:"h4"},"SUSPICIOUS CHECKSUM")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-urgent-pointer-top-talker"}),(0,r.kt)("strong",{parentName:"h5"},"TCP URGENT POINTER TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"icmp-destination-top-talker"}),(0,r.kt)("strong",{parentName:"h5"},"ICMP DESTINATION TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n\nAccepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"source-prefix-top-talker-1"}),(0,r.kt)("strong",{parentName:"h5"},"SOURCE PREFIX TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"suspicious-checksum-1"}),(0,r.kt)("strong",{parentName:"h5"},"SUSPICIOUS CHECKSUM")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"tcp-urgent-pointer-top-talker-1"}),(0,r.kt)("strong",{parentName:"h5"},"TCP URGENT POINTER TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"icmp-destination-top-talker-1"}),(0,r.kt)("strong",{parentName:"h5"},"ICMP DESTINATION TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"udp-destination-top-talker"}),(0,r.kt)("strong",{parentName:"h5"},"UDP DESTINATION TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-destination-top-talker"}),(0,r.kt)("strong",{parentName:"h5"},"DNS DESTINATION TOP TALKER")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-any-query"}),(0,r.kt)("strong",{parentName:"h5"},"DNS ANY QUERY")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h4",a({},{id:"dns-bad-answer-count"}),(0,r.kt)("strong",{parentName:"h4"},"DNS BAD ANSWER COUNT")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h4",a({},{id:"dns-bad-edns0-name"}),(0,r.kt)("strong",{parentName:"h4"},"DNS BAD EDNS0 NAME")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-bad-flags"}),(0,r.kt)("strong",{parentName:"h5"},"DNS BAD FLAGS")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-bad-length"}),(0,r.kt)("strong",{parentName:"h5"},"DNS BAD LENGTH")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n\nAccepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-bad-nameserver-count"}),(0,r.kt)("strong",{parentName:"h5"},"DNS BAD NAMESERVER COUNT")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-bad-return-code"}),(0,r.kt)("strong",{parentName:"h5"},"DNS BAD RETURN CODE")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-edns0-with-do"}),(0,r.kt)("strong",{parentName:"h5"},"DNS EDNS0 WITH DO")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")),(0,r.kt)("h5",a({},{id:"dns-rare-query-type"}),(0,r.kt)("strong",{parentName:"h5"},"DNS RARE QUERY TYPE")),(0,r.kt)("p",null,"Specify suspicion score as LOW, MEDIUM or HIGH"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: LOW / MEDIUM / HIGH\n\nDefault: LOW\n")))}k.isMDXComponent=!0},99666:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb_pattern_score-769abce98e9ae8afe5bce7f1b4a73f11.png"},13116:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb_pattern_score_1-f0ab7ff86944748215bcb49c466d8dd2.png"}}]);