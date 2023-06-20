"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[38411],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:e},u),{},{components:n})):r.createElement(f,a({ref:e},u))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50271:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const a={sidebar_position:1,sidebar_label:"Installation"},l="Installation Steps",s={unversionedId:"community/getting-started/installation",id:"community/getting-started/installation",title:"Installation Steps",description:"In this step, you'll pull Haltdos packages from the official software repository. SSH to your server and run the commands below",source:"@site/docs/community/getting-started/installation.md",sourceDirName:"community/getting-started",slug:"/community/getting-started/installation",permalink:"/haltdos-wiki/community/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Installation"},sidebar:"community_sidebar",previous:{title:"Pre-Requisites",permalink:"/haltdos-wiki/community/getting-started/pre-requisites"},next:{title:"Next Steps",permalink:"/haltdos-wiki/community/getting-started/next"}},c={},u=[{value:"Step 1: Installing",id:"step-1-installing",level:3},{value:"Step 2: Verification",id:"step-2-verification",level:3},{value:"Step 3: License Registration",id:"step-3-license-registration",level:3},{value:"Step 4: Accesing Haltdos Community UI",id:"step-4-accesing-haltdos-community-ui",level:3}],p={toc:u},d="wrapper";function m(t){var{components:e}=t,a=o(t,["components"]);return(0,r.kt)(d,i({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"installation-steps"}),"Installation Steps"),(0,r.kt)("p",null,"In this step, you'll pull Haltdos packages from the official software repository. SSH to your server and run the commands below"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"$ sudo apt-get update\n")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"$ sudo apt-get install -y curl\n")),(0,r.kt)("h3",i({},{id:"step-1-installing"}),"Step 1: Installing"),(0,r.kt)("p",null,"Download and install the latest Haltdos Community WAF edition installtion script"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"$ curl -s -k -o setup.sh https://binary.haltdos.com/community/waf/setup.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"$ sudo chmod +x setup.sh\n")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"$ sudo bash setup.sh\n")),(0,r.kt)("p",null,"The script will automatically download and prepare the system to run Haltdos Community WAF."),(0,r.kt)("h3",i({},{id:"step-2-verification"}),"Step 2: Verification"),(0,r.kt)("p",null,"After successfull installation, you can verify the services by running the commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"$ sudo service controller status\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"haltdos",src:n(77669).Z,width:"847",height:"169"})),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"$ sudo service offloader status\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"haltdos",src:n(81987).Z,width:"855",height:"269"})),(0,r.kt)("br",null),"You can access Haltdos Community GUI from https://IP:9000.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"haltdos",src:n(32313).Z,width:"1910",height:"962"}),"  "),(0,r.kt)("h3",i({},{id:"step-3-license-registration"}),"Step 3: License Registration"),(0,r.kt)("p",null,"Next, after verification, to start using our Community WAF Solution, you will require a License to enable the WAF Solution."),(0,r.kt)("p",null,"Fill in the details to request for Haltdos Community WAF license. License verification code will be sent via mail. Check your spam / junk if you cannot find the mail in inbox."),(0,r.kt)("br",null),"Post OTP Verification, your community WAF license will be activated.",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"signup",src:n(14227).Z,width:"1910",height:"962"})),(0,r.kt)("p",null,"You have successfully subscribed to Haltdos Community WAF."),(0,r.kt)("h3",i({},{id:"step-4-accesing-haltdos-community-ui"}),"Step 4: Accesing Haltdos Community UI"),(0,r.kt)("p",null,"Login in to Haltdos Community WAF UI with the credentials provided during the signup."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"login",src:n(33238).Z,width:"853",height:"633"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"overview",src:n(34453).Z,width:"1280",height:"632"})))}m.isMDXComponent=!0},33238:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/login-3032ffea3e813913a6548a6616b5436b.png"},14227:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/otp-5f35d8064e9c8c7f27b4573789eb2b85.png"},34453:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/overview-3abb42de23569d2131cd0708737c6eb3.jpeg"},32313:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/setup-13040ff737739a6878dd430b44090313.png"},77669:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/controller-31e410f509a65978ba178534ae2410cc.png"},81987:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/offloader-058a3fb09917e5b7c68dfcebb3367319.png"}}]);