"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[53883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,f=u["".concat(l,".").concat(k)]||u[k]||m[k]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},82150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_position:69},i="KB: 1069",l={unversionedId:"kb/waf/kb-1069",id:"kb/waf/kb-1069",title:"KB: 1069",description:"How to capture packet and trace them through tcp dump utility?",source:"@site/docs/kb/waf/kb-1069.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1069",permalink:"/kb/waf/kb-1069",draft:!1,tags:[],version:"current",sidebarPosition:69,frontMatter:{sidebar_position:69},sidebar:"kb_sidebar",previous:{title:"KB: 1068",permalink:"/kb/waf/kb-1068"},next:{title:"KB: 1070",permalink:"/kb/waf/kb-1070"}},c={},s=[{value:"<strong>How to capture packet and trace them through tcp dump utility?</strong>",id:"how-to-capture-packet-and-trace-them-through-tcp-dump-utility",level:4}],u={toc:s},m="wrapper";function k(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(m,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1069"}),"KB: 1069"),(0,n.kt)("h4",a({},{id:"how-to-capture-packet-and-trace-them-through-tcp-dump-utility"}),(0,n.kt)("strong",{parentName:"h4"},"How to capture packet and trace them through tcp dump utility?")),(0,n.kt)("p",null,"The tcpdump utility is a powerful command-line tool for capturing and analyzing network traffic. It allows you to capture packets that pass through a network interface and provides detailed information about the network activity"),(0,n.kt)("p",null,"Below is the example of command to run the tcp dump utility-"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Command: -")," "),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"tcpdump -i <interface> port <port> -w <filename>.pcap\n")),(0,n.kt)("p",null,"Below are the arguments that can be used based on the requirement-"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments: -")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"-i <interface>"),":")," Specifies the network interface to listen on.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"host <hostname>")),": Captures packets to or from a specific IP.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"port <port>")),": Captures packets to or from a specific port.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"-w <file>")),": Writes the captured packets to a file instead of\ndisplaying them on the screen.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"-A")),": Displays the packet contents in ASCII, which is useful for\ninspecting HTTP requests or other text-based protocols")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"-X")),": Displays the packet contents in both hex and ASCII.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"-c")),": Specify the number of packets to capture before stopping")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"-r <filename>")),": Read and analyze packets from a previously saved capture file")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"src host <host>")),": Capture packets originating from a specific host")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"dst host <host>")),": Capture packets that are destined for a specific host"))),(0,n.kt)("p",null,"To analyze the decrypted content, you can use a tool like Wireshark. To\ndecrypt encrypted traffic captured in a dump file using Wireshark, you\nneed specific keys or passwords depending on the encryption protocol\nused (e.g., SSL/TLS). Below are the reference documents decrypting SSL/TLS\ntraffic in Wireshark."),(0,n.kt)("p",null,"Reference 1: ",(0,n.kt)("a",a({parentName:"p"},{href:"./kb-1070"}),"How to decrypt SSL/TLS traffic using Wireshark and private keys?")),(0,n.kt)("p",null,"Reference 2: ",(0,n.kt)("a",a({parentName:"p"},{href:"./kb-1071"}),"How to decrypt SSL/TLS using Wireshark and SSLKEYLOGFILE environment variable on Firefox or Google Chrome using Wireshark?")))}k.isMDXComponent=!0}}]);