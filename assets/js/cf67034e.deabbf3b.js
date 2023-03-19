"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[29523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},s="Scenario 5",c={unversionedId:"scenarios/llb/scenario-5",id:"version-6.0/scenarios/llb/scenario-5",title:"Scenario 5",description:"LLB configuration under different Scenarios",source:"@site/versioned_docs/version-6.0/scenarios/llb/scenario-5.md",sourceDirName:"scenarios/llb",slug:"/scenarios/llb/scenario-5",permalink:"/v6/scenarios/llb/scenario-5",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"llb_sidebar",previous:{title:"Scenario 4",permalink:"/v6/scenarios/llb/scenario-4"}},l={},u=[{value:"Steps to Configure",id:"steps-to-configure",level:3}],p={toc:u},g="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(g,a({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"scenario-5"}),"Scenario 5"),(0,r.kt)("p",null,"LLB configuration under different Scenarios"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Suppose, there is a organization which is having two ISPs from two different service providers. The first ISP link is having IP from network 2.2.2.0/28 and other is having network ID of 3.3.3.0/28.The ISP link that is having static IP addresses  (2.2.2.2) handle all the DMZ traffic.\nBoth ISPs are connected with LLB then there's one link which is connected to firewall. The connectivity between firewall and LLB have network of 172.16.2.0/16, firewall has IP 172.16.2.10 and 172.16.2.20 which respectively forward traffic to DMZ and LAN. "),(0,r.kt)("p",null,"Firewall later connected with DMZ and LAN network which have their own networks respectively 192.168.100.0/24 and 172.16.10.0/16."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(67212).Z,width:"830",height:"698"})),(0,r.kt)("h3",a({},{id:"steps-to-configure"}),"Steps to Configure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Port IP Configuration:"),"\nWe need to configure 1 port as per mentioned diagram. WAN ports will be configured as static ports with static route and policies. LAN ports can be configured for mentioned IP without configuring any static route or policies.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WAN 1 IP Configuration:"),"\nWe need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(93249).Z,width:"1237",height:"743"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WAN 2 IP Configuration:"),"\nWe need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(44776).Z,width:"1237",height:"758"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LAN IP Configuration:"),"\nWe need to go to Stack > Instance > Network > Ethernet and select the interface. Now, we can configure IP address, name-server and other details as per our requirement.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(54404).Z,width:"1238",height:"738"})),(0,r.kt)("ol",a({},{start:2}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Interface Group Configuration:"),"\nUser can add multiple group of interfaces. They need to go to Stack > LLB Interfaces.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(96013).Z,width:"1706",height:"399"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(49874).Z,width:"1692",height:"440"})),(0,r.kt)("ol",a({},{start:3}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"LLB Configuration:"),"\nWe can pass the interface group and enable global load balancing by selecting this option.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(15445).Z,width:"1708",height:"627"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(89791).Z,width:"1690",height:"622"})),(0,r.kt)("ol",a({},{start:4}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"SNAT Rule Configuration:"),"\nWe need to Stack > LLB > Rules > Source NAT. We can configure as per our requirement then click on save changes.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(12940).Z,width:"1664",height:"858"})),(0,r.kt)("ol",a({},{start:5}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"DNAT Rule Configuration:"),"\nWe need to go to stack > LLB > Rule > DNAT Rule. Click on add rule button and after configuring you can save and functional the rule by clicking on save changes button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(85899).Z,width:"1252",height:"654"})),(0,r.kt)("ol",a({},{start:6}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Policy Route Configuration:"),"\nWe need to go to Stack > LLB > Rule > Policy Route. Click on Add Rule button and after configuring you can save and functional the rule by clicking on save changes button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(35560).Z,width:"1253",height:"745"})),(0,r.kt)("p",null,"In this way, we can configure the LLB in given scenario."))}d.isMDXComponent=!0},67212:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-1-eece111448f43e91ab2ecbf4fadf6d95.png"},85899:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-10-cecd82d6605b587d33261bb82b69b29d.png"},35560:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-11-e7349846468a390a7b55eb92126c8e88.png"},93249:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-2-335e6664372001efecbf1a148c84b011.png"},44776:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-3-6f6eda87556409d9ece91aaa4e14dfaa.png"},54404:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-4-15b50d2f226275ff91d3540c9b486479.png"},96013:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-5-affb9a5e8066c2690c0253b659a2978d.png"},49874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-6-bb376d9e01a64935d635a0362e60c44e.png"},15445:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-7-22b3d9a2575b33554aced5c1c98fc8e1.png"},89791:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-8-a91564d9b7608484b3212fb3deb88753.png"},12940:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario6-9-e76e1e9f839879b1a5b69ede5369e60e.png"}}]);