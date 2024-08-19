"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[21626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},c="Scenario 1",s={unversionedId:"scenarios/adc/scenario-1",id:"version-7.0/scenarios/adc/scenario-1",title:"Scenario 1",description:"SLB configuration under different Scenarios",source:"@site/versioned_docs/version-7.0/scenarios/adc/scenario-1.md",sourceDirName:"scenarios/adc",slug:"/scenarios/adc/scenario-1",permalink:"/v7/scenarios/adc/scenario-1",draft:!1,tags:[],version:"7.0",frontMatter:{},sidebar:"adc_sidebar",previous:{title:"Haltdos ADC Deployment Scenarios",permalink:"/v7/scenarios/adc"},next:{title:"Scenario 2",permalink:"/v7/scenarios/adc/scenario-2"}},l={},p=[],d={toc:p},f="wrapper";function u(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(f,a({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"scenario-1"}),"Scenario 1"),(0,r.kt)("p",null,"SLB configuration under different Scenarios"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Suppose company ABC is having a listener Test.com which is having a back-end server IP 15.0.0.2/24 which nee to be set on haltdos SLB device and the backend IP will be changed to 15.0.0.10 which is listener IP. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(58278).Z,width:"1011",height:"467"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Configuration of the management port")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(91639).Z,width:"1915",height:"896"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Configuration of VLAN"),"\nUsers need to mention the VLAN ID and mention the backend server IP address."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(3659).Z,width:"1914",height:"916"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Configuration of Listener")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(29504).Z,width:"481",height:"468"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4: Verification of backend Server")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(5794).Z,width:"1910",height:"899"})))}u.isMDXComponent=!0},58278:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario1-1-3c114afd0acced17a1e6fb935808a1b9.png"},91639:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario1-2-6e94063804d3936f99aebbe0d028ec23.png"},3659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario1-3-d0efdb467f4a165827f1af6afc70c611.png"},29504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario1-4-c3f134f0d72885c9473e21440e1ed6fe.png"},5794:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario1-5-218e69dc6853b38097cf7867fb3df801.png"}}]);