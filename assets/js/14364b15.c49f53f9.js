"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[37159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,k=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},l="KB: 2007",s={unversionedId:"kb/adc/kb-2007",id:"kb/adc/kb-2007",title:"KB: 2007",description:"how to set policy rules based on the client requirement?",source:"@site/docs/kb/adc/kb-2007.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2007",permalink:"/haltdos-wiki/kb/adc/kb-2007",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2006",permalink:"/haltdos-wiki/kb/adc/kb-2006"},next:{title:"KB: 2008",permalink:"/haltdos-wiki/kb/adc/kb-2008"}},p={},c=[{value:"<strong>how to set policy rules based on the client requirement?</strong>",id:"how-to-set-policy-rules-based-on-the-client-requirement",level:3},{value:"<strong>Problem Statement I</strong>",id:"problem-statement-i",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Problem Statement II</strong>",id:"problem-statement-ii",level:4},{value:"<strong>Solution</strong>",id:"solution-1",level:4},{value:"<strong>Problem Statement III</strong>",id:"problem-statement-iii",level:4},{value:"<strong>Solution</strong>",id:"solution-2",level:4}],u={toc:c},m="wrapper";function g(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(m,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"kb-2007"}),"KB: 2007"),(0,r.kt)("h3",a({},{id:"how-to-set-policy-rules-based-on-the-client-requirement"}),(0,r.kt)("strong",{parentName:"h3"},"how to set policy rules based on the client requirement?")),(0,r.kt)("h4",a({},{id:"problem-statement-i"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement I")),(0,r.kt)("p",null,"The client wants to drop the requests coming from particular client IP."),(0,r.kt)("h4",a({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,'The client can utilize the policy rule in SLB by selecting "Drop Request" as rule action based on different rule conditions.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,r.kt)("p",null,"This can be achieved by the following way "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Below picture shows that the listener page is opening properly.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(48670).Z,width:"1004",height:"666"})),(0,r.kt)("ol",a({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Now Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"SLB")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Rules")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy rule")," > ",(0,r.kt)("strong",{parentName:"li"},"Add rule")," > ",(0,r.kt)("strong",{parentName:"li"},"Save changes"),'. Select "Drop Request" as rule action.')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(68845).Z,width:"1809",height:"967"})),(0,r.kt)("ol",a({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Client needs to create at least one rule condition for implementing Policy Rule as shown in below picture.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27539).Z,width:"1809",height:"967"})),(0,r.kt)("ol",a({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"The below picture is showing the request is getting dropped on the bases of policy rule.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(49467).Z,width:"1911",height:"948"})),(0,r.kt)("p",null,"Here we can observe that the Policy rule is working as intended. As per rule action we are choosing that the SLB is dropping the request."),(0,r.kt)("h4",a({},{id:"problem-statement-ii"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement II")),(0,r.kt)("p",null,"The client wants to redirect the request coming from particular client IP."),(0,r.kt)("h4",a({},{id:"solution-1"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"The client can utilize the policy rule in SLB by selecting ",(0,r.kt)("strong",{parentName:"p"},'"REDIRECT REQUEST"')," as rule action based on different rule conditions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step to solve"),":-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"SLB")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Rules")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy rule")," > ",(0,r.kt)("strong",{parentName:"li"},"Add rule")," > ",(0,r.kt)("strong",{parentName:"li"},"Save changes"),'. Then select "REDIRECT REQUEST" as rule action.')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38716).Z,width:"1809",height:"967"})),(0,r.kt)("ol",a({},{start:2}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In above image we are also taking one https site where we want to redirect the request .")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In below image we are seeing that our request is going to https site that mentioned in redirection url (take a look of rule details in above image)."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(28837).Z,width:"1912",height:"950"})),(0,r.kt)("h4",a({},{id:"problem-statement-iii"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement III")),(0,r.kt)("p",null,"The client wants to Bypass the request coming from particular client IP."),(0,r.kt)("h4",a({},{id:"solution-2"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"The client can utilize the policy rule in SLB by selecting ",(0,r.kt)("strong",{parentName:"p"},'"BYPASS REQUEST"')," as rule action based on different rule conditions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to solve"),":-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Client have to blacklist the particular IP if the request are coming from that particular IP will be blocked. (Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"SLB")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Profile")," > ",(0,r.kt)("strong",{parentName:"li"},"Setting icon")," > ",(0,r.kt)("strong",{parentName:"li"},"Geo Filtering")," > ",(0,r.kt)("strong",{parentName:"li"},"Blacklisted IP Prefixes")," > ",(0,r.kt)("strong",{parentName:"li"},"Click on save changes"),")")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22480).Z,width:"1809",height:"967"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(30613).Z,width:"1916",height:"969"})),(0,r.kt)("ol",a({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Apps")," > ",(0,r.kt)("strong",{parentName:"li"},"SLB")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Rules")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy rule")," > ",(0,r.kt)("strong",{parentName:"li"},"Add rule")," > ",(0,r.kt)("strong",{parentName:"li"},"Save changes"),'. Select "BYPASS REQUEST" as rule action**.')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65447).Z,width:"1809",height:"967"})),(0,r.kt)("ol",a({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Below image shows that request coming from that particular IP is Bypassing the request on our default http site.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(96618).Z,width:"1912",height:"950"})))}g.isMDXComponent=!0},48670:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc8.1-0c6856d73150e7851f30f1cbff2a6e61.png"},96618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc8.10-977808a1368f58a4d92ff4fd9df24b3a.png"},49467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc8.4-4f434b8915e89b77750bea727cdd75c7.png"},28837:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc8.6-6a957c5602d6f61affc1cd28ee1d9557.png"},30613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc8.8-d8c1057cd215b446435dc4cbea4acd50.png"},22480:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/geo_kb_2007_7-8cbf352b3173eacaa0fb5fc93b09418b.png"},68845:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy_rule_kb_2007_2-7e6bd3041de447a15f9d96339f53bdf7.png"},27539:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy_rule_kb_2007_3-5c15f1d78d4253f1ad796135eeb411a1.png"},38716:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy_rule_kb_2007_5-143a954368819fe3378989255410149a.png"},65447:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy_rule_kb_2007_9-730c6336003d412578979feb48547f31.png"}}]);