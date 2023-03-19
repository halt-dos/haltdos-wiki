"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[50210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={},c="Scenario 3",s={unversionedId:"scenarios/adc/scenario-3",id:"scenarios/adc/scenario-3",title:"Scenario 3",description:"SLB configuration under different Scenarios",source:"@site/docs/scenarios/adc/scenario-3.md",sourceDirName:"scenarios/adc",slug:"/scenarios/adc/scenario-3",permalink:"/scenarios/adc/scenario-3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"adc_sidebar",previous:{title:"Scenario 2",permalink:"/scenarios/adc/scenario-2"},next:{title:"Application Delivery Controller",permalink:"/kb/adc/"}},l={},p=[],d={toc:p},u="wrapper";function f(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)(u,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"scenario-3"}),"Scenario 3"),(0,r.kt)("p",null,"SLB configuration under different Scenarios"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Suppose company ABC is having two listeners example1.com and example2.com that are having two back-end server IPs 10.11.0.100/24 and 10.11.0.110/24 which are connected with the haltdos SLB using two links which are further bound with LACP  which logically become 1 interface with IP 10.11.0.11/24. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(19039).Z,width:"1046",height:"473"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1: Configuration of the management port")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(88099).Z,width:"1678",height:"843"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2: Configuration of VLAN")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(91552).Z,width:"1630",height:"781"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(22870).Z,width:"1628",height:"786"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3: Configuration of the listener")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(96821).Z,width:"541",height:"527"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4: Verify the back-end server")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram",src:n(16352).Z,width:"1650",height:"327"})))}f.isMDXComponent=!0},19039:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-1-7e4ba428e35908019972873ceffaa0b4.png"},88099:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-2-339c944b2dc87133d2ed05678269fdc2.png"},91552:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-3-645153520d01c1645dc55368ae743718.png"},22870:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-4-546034303b7e0c0d6de92c232ce97d75.png"},96821:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-5-c36ea2965134d64d0a04f3fa7631f125.png"},16352:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-6-aa650e82a4f4f2ad9028dfe04979cab3.png"}}]);