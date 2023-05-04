"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[7133],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={},s="Scenario 4",c={unversionedId:"scenarios/llb/scenario-4",id:"scenarios/llb/scenario-4",title:"Scenario 4",description:"LLB configuration under different Scenarios",source:"@site/docs/scenarios/llb/scenario-4.md",sourceDirName:"scenarios/llb",slug:"/scenarios/llb/scenario-4",permalink:"/haltdos-wiki/scenarios/llb/scenario-4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"llb_sidebar",previous:{title:"Scenario 3",permalink:"/haltdos-wiki/scenarios/llb/scenario-3"},next:{title:"Scenario 5",permalink:"/haltdos-wiki/scenarios/llb/scenario-5"}},l={},u=[{value:"Steps",id:"steps",level:3}],p={toc:u},f="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(f,o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"scenario-4"}),"Scenario 4"),(0,n.kt)("p",null,"LLB configuration under different Scenarios"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Suppose, ABC org. is having two WAN connections with static and DHCP configured WAN IPs. Some of the websites are not accessible from WAN 1. The user wants traffic for those domains should always move from WAN 2."),(0,n.kt)("p",null,"For example, let's assume the user is having two LAN connections and two WAN connections with static IP addresses. LAN 1 is using the 10.0.0.0/24 subnetwork and LAN 2 is using the 10.0.10.0/24 subnetwork. some of the LAN 2 host devices are not able to access a few website from WAN 1 which is DHCP enabled WAN Interface, so they want the IP traffic for that website should move from WAN 1 which is having static pubic IP of 15.0.23.36/30 . We have to create some policy-based routing."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:r(15715).Z,width:"1049",height:"519"})),(0,n.kt)("p",null,"As per the previous scenarios, we have already discussed how can one configure WAN/LAN links ( Refer Scenario 1 & Scenario 2 )"),(0,n.kt)("h3",o({},{id:"steps"}),"Steps"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1: Add a Policy based rule")),(0,n.kt)("p",null,"For example, we assume a website that is not accessible from WAN 1 is  having public IP address 151.0.12.11."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diagram",src:r(37942).Z,width:"1354",height:"709"})),(0,n.kt)("p",null,"In this way, we can set up the rule for website traffic that should be come in and go out from other WAN link."))}d.isMDXComponent=!0},15715:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scenario4-1-6afea19a39074e75bfb9aba2291010b2.png"},37942:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scenario4-2-2b7d9a87e78723b057a322e0f60852dc.png"}}]);