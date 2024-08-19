"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[36236],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={sidebar_position:4},l="SSL Certificates",c={unversionedId:"community/ssl_certificates",id:"version-7.0/community/ssl_certificates",title:"SSL Certificates",description:"It provides functionality to support SSL offloading based on configurations.",source:"@site/versioned_docs/version-7.0/community/ssl_certificates.md",sourceDirName:"community",slug:"/community/ssl_certificates",permalink:"/v7/community/ssl_certificates",draft:!1,tags:[],version:"7.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"community_sidebar",previous:{title:"Incidents",permalink:"/v7/community/incident"},next:{title:"Account",permalink:"/v7/community/account"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Generate Certificate",id:"generate-certificate",level:4},{value:"<strong>Step 1: Order Certificate</strong>",id:"step-1-order-certificate",level:4},{value:"<strong>Step 2: Verify Challenge</strong>",id:"step-2-verify-challenge",level:4},{value:"Step 3: Issue/Renew Certificate",id:"step-3-issuerenew-certificate",level:4},{value:"Upload Certificate",id:"upload-certificate",level:3},{value:"Description",id:"description",level:3}],f={toc:p},u="wrapper";function m(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(u,i({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"ssl-certificates"}),"SSL Certificates"),(0,n.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,n.kt)("hr",null),(0,n.kt)("h2",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail."),(0,n.kt)("p",null,"Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SSL Certificate",src:r(35413).Z,width:"1642",height:"983"})),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go To ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"SSL Certificates")),(0,n.kt)("li",{parentName:"ol"},"Configure Your Settings "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes")," ")),(0,n.kt)("p",null,"Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP Validation")," for single domain certificate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DNS Validation")," for wildcard certificate")),(0,n.kt)("h4",i({},{id:"generate-certificate"}),"Generate Certificate"),(0,n.kt)("p",null,"In order to generate a certificate, it's a three-step based process i.e."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Order Certificate")," : Select the listener/zone for which you need to order the certificate."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Verify Challenge")," : Verify the challenge for generating the certificate."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Issue/Renew Certificate")," : Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.")),(0,n.kt)("admonition",i({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above.")),(0,n.kt)("h4",i({},{id:"step-1-order-certificate"}),(0,n.kt)("strong",{parentName:"h4"},"Step 1: Order Certificate")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the domain that we are aiming to issue for it."),(0,n.kt)("li",{parentName:"ol"},"Click on Generate.")),(0,n.kt)("h4",i({},{id:"step-2-verify-challenge"}),(0,n.kt)("strong",{parentName:"h4"},"Step 2: Verify Challenge")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select appropriate challenge option i.e. ",(0,n.kt)("strong",{parentName:"li"},"HTTP Challenge")," or ",(0,n.kt)("strong",{parentName:"li"},"DNS Challenge"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Verify Challenge"),"."),(0,n.kt)("li",{parentName:"ol"},"We have to wait at least 5 minutes duration in order to re-verify the certificate to change the status to update status.  "),(0,n.kt)("li",{parentName:"ol"},"After 5 minutes, click on ",(0,n.kt)("strong",{parentName:"li"},"Verify Challenge"),".")),(0,n.kt)("h4",i({},{id:"step-3-issuerenew-certificate"}),"Step 3: Issue/Renew Certificate"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on Issue/Renew Certificate.")),(0,n.kt)("admonition",i({},{title:"Note ",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Certificate verification can fail if verification is not completed within stipulated time.")),(0,n.kt)("h3",i({},{id:"upload-certificate"}),"Upload Certificate"),(0,n.kt)("p",null,"To upload custom certificates, follow the steps below:"),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Certificate Name"),(0,n.kt)("br",{parentName:"p"}),"\n","Users are allowed to specify the name for the certification."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String \n\nDefault: Blank  \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Certificate Domain"),(0,n.kt)("br",{parentName:"p"}),"\n","Users are allowed to specify the domain name fo the certifiate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String \n\nDefault: Blank  \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"App Option"),(0,n.kt)("br",{parentName:"p"}),"\n","Users are allowed to select the certificate generate options."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Drop-Down \n\nDefault: Genrate/Upload certificate  \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Public Key"),(0,n.kt)("br",{parentName:"p"}),"\n","User can specify the public key of certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String \n\nDefault: Blank  \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Private key"),(0,n.kt)("br",{parentName:"p"}),"\n","User can specify the private key of certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String \n\nDefault: Blank\n")))}m.isMDXComponent=!0},35413:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ssl_certificate-d415109a4b40c3a9afffef11b6f34a9e.png"}}]);