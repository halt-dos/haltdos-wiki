"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[78050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>l});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={},i=void 0,p={unversionedId:"kb/adc/kb-2004",id:"version-6.0/kb/adc/kb-2004",title:"kb-2004",description:"How to mask application exceptions and errors with custom pages?",source:"@site/versioned_docs/version-6.0/kb/adc/kb-2004.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2004",permalink:"/haltdos-wiki/v6/kb/adc/kb-2004",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"kb-2003",permalink:"/haltdos-wiki/v6/kb/adc/kb-2003"},next:{title:"kb-2005",permalink:"/haltdos-wiki/v6/kb/adc/kb-2005"}},c={},l=[{value:"<strong>How to mask application exceptions and errors with custom pages</strong>?",id:"how-to-mask-application-exceptions-and-errors-with-custom-pages",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Steps to Solve</strong>",id:"steps-to-solve",level:5}],d={toc:l},u="wrapper";function g(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(u,o({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",o({},{id:"how-to-mask-application-exceptions-and-errors-with-custom-pages"}),(0,r.kt)("strong",{parentName:"h3"},"How to mask application exceptions and errors with custom pages"),"?"),(0,r.kt)("h4",o({},{id:"problem-statement"}),(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"The client wants to mask application exceptions and errors with custom pages.."),(0,r.kt)("p",null,'We have configured domain "diwakar.slb.com" on SLB and configured back-end server behind the SLB which is having the IP 139.0.0.5. when user tried to open the website is opening fine and all traffic is moving through SLB. User wants set the error pages on specific HTTP status code.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(59893).Z,width:"1913",height:"950"})),(0,r.kt)("h4",o({},{id:"solution"}),(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("h5",o({},{id:"steps-to-solve"}),(0,r.kt)("strong",{parentName:"h5"},"Steps to Solve")),(0,r.kt)("p",null,"The client can achieve the requirement by creating the error rule as mentioned below"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1")," :- Log into the Haltdos Console."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(75121).Z,width:"1913",height:"401"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2")," :- Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > SLB > Resourses > Web Pages")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(45298).Z,width:"1917",height:"910"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),':- Click on the "Add Page" option, write content that to be shown on the page and click on save changes.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57701).Z,width:"1911",height:"899"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4"),":- Now go under added listener, select error rule from the rules drop-down menus"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"(Stack>SLB>Listeners>Rules>Error rule>Add Rule)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64690).Z,width:"1911",height:"668"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5"),":- Configure the rule as per the client requirement for HTTP response code and select the error page required."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84590).Z,width:"1911",height:"668"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6"),":- Click on save changes"),(0,r.kt)("p",null,"In this way, users can configure the error rule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 7"),":- Below is the sample error page shown for 404 HTTP status code."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(76973).Z,width:"1920",height:"927"})))}g.isMDXComponent=!0},59893:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc5.1-6b1532001c25e41d48dd955fdc25b18b.png"},75121:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc5.2-a3479be5389b5c501bbf4ac9ed01b4f2.png"},45298:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc5.3-d37543ed8be29e7c0787595380c993d0.png"},57701:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc5.4-5768015b4cae293125970abc345b5fdb.png"},64690:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc5.5-00f4df276d8c38f64df5808fa4e66b81.png"},84590:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc5.6-67e8b082aad9238e2ac94770e6067681.png"},76973:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc5.7-0d50165fa484204a15d9c6c6337b292e.png"}}]);