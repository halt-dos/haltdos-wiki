"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[38411],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:e},c),{},{components:n})):i.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50271:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var i=n(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={sidebar_position:1,sidebar_label:"Installation"},l="Installation Steps",s={unversionedId:"community/getting-started/installation",id:"community/getting-started/installation",title:"Installation Steps",description:"Before we start, kindly update your system and install curl, if not installed.",source:"@site/docs/community/getting-started/installation.md",sourceDirName:"community/getting-started",slug:"/community/getting-started/installation",permalink:"/community/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Installation"},sidebar:"community_sidebar",previous:{title:"Pre-Requisites",permalink:"/community/getting-started/pre-requisites"},next:{title:"Next Steps",permalink:"/community/getting-started/next"}},p={},c=[{value:"Step 1: Installing",id:"step-1-installing",level:3},{value:"Step 2: Verification",id:"step-2-verification",level:3},{value:"Step 3: License Registration",id:"step-3-license-registration",level:3},{value:"Step 4: Accesing Haltdos Community GUI",id:"step-4-accesing-haltdos-community-gui",level:3}],u={toc:c},d="wrapper";function m(t){var{components:e}=t,o=a(t,["components"]);return(0,i.kt)(d,r({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",r({},{id:"installation-steps"}),"Installation Steps"),(0,i.kt)("p",null,"Before we start, kindly update your system and install curl, if not installed."),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Debian-based distributions"),", execute below commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"sudo apt-get update\n")),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"sudo apt-get install -y curl\n")),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Red Hat-based Linux distributions"),", execute below commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"sudo dnf update\n")),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"sudo dnf install -y curl\n")),(0,i.kt)("h3",r({},{id:"step-1-installing"}),"Step 1: Installing"),(0,i.kt)("p",null,"Download and install the latest Haltdos Community WAF edition installtion script"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"curl -s -k -o setup.sh https://binary.haltdos.com/community/waf/setup.sh\n")),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"chmod +x setup.sh\n")),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"sudo ./setup.sh\n")),(0,i.kt)("p",null,"The script will automatically download and prepare the system to run Haltdos Community WAF."),(0,i.kt)("h3",r({},{id:"step-2-verification"}),"Step 2: Verification"),(0,i.kt)("p",null,"After successfull installation, you can verify the services by running the commands below:"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"sudo service controller status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"haltdos",src:n(77669).Z,width:"919",height:"157"})),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{}),"sudo service offloader status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"haltdos",src:n(81987).Z,width:"919",height:"244"})),(0,i.kt)("admonition",r({},{title:"Note ",type:"note"}),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Haltdos Community WAF Service")," at start will be at loaded state. It will be in active and running state, once the whole registration of the instance is done.")),(0,i.kt)("p",null,"You can access ",(0,i.kt)("strong",{parentName:"p"},"Haltdos Community GUI")," from ",(0,i.kt)("strong",{parentName:"p"},"https://<SERVER_IP_ADDRESS>:9000")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"haltdos",src:n(32313).Z,width:"1910",height:"962"}),"  "),(0,i.kt)("h3",r({},{id:"step-3-license-registration"}),"Step 3: License Registration"),(0,i.kt)("p",null,"Next, after verification, to start using our Community WAF Solution, you will require a License to enable the WAF Solution."),(0,i.kt)("p",null,"Fill in the details to request for Haltdos Community WAF license. License verification code will be sent via mail. Check your spam / junk if you cannot find the mail in inbox."),(0,i.kt)("br",null),"Post OTP Verification, your Haltdos Community WAF license will be activated.",(0,i.kt)("p",null,(0,i.kt)("img",{alt:"signup",src:n(14227).Z,width:"1910",height:"962"})),(0,i.kt)("p",null,"You have successfully subscribed to Haltdos Community WAF."),(0,i.kt)("admonition",r({},{title:"CAUTION",type:"info"}),(0,i.kt)("p",{parentName:"admonition"},"If the Community WAF service is still shown as loaded and inactive, or if you face any other kind of issue, please contact ",(0,i.kt)("a",r({parentName:"p"},{href:"mailto:support@haltdos.com"}),(0,i.kt)("strong",{parentName:"a"},"Haltdos Support")))),(0,i.kt)("h3",r({},{id:"step-4-accesing-haltdos-community-gui"}),"Step 4: Accesing Haltdos Community GUI"),(0,i.kt)("p",null,"Login in to Haltdos Community GUI with the credentials provided during the signup."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"login",src:n(33238).Z,width:"853",height:"633"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"overview",src:n(34453).Z,width:"1280",height:"632"})))}m.isMDXComponent=!0},33238:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/login-3032ffea3e813913a6548a6616b5436b.png"},14227:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/otp-5f35d8064e9c8c7f27b4573789eb2b85.png"},34453:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/overview-3abb42de23569d2131cd0708737c6eb3.jpeg"},32313:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/setup-13040ff737739a6878dd430b44090313.png"},77669:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/controller-9181000ea6008b38b862c2a4aef21a17.png"},81987:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/offloader-ea3b0e313f1c850d61ac59cf6ca7fea8.png"}}]);