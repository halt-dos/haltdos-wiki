"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[41472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:1},o="SSL Certificates",c={unversionedId:"enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates",id:"enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates",title:"SSL Certificates",description:"---",source:"@site/docs/enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates.md",sourceDirName:"enterprise/platform/stacks/resource_content/ssl_certificates",slug:"/enterprise/platform/stacks/resource_content/ssl_certificates/",permalink:"/enterprise/platform/stacks/resource_content/ssl_certificates/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Certificate Authorities",permalink:"/enterprise/platform/stacks/resource_content/certificate_auth"},next:{title:"Lets Encrypt Certificates",permalink:"/enterprise/platform/stacks/resource_content/ssl_certificates/lets_encrypt"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],u={toc:p},f="wrapper";function m(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)(f,a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"ssl-certificates"}),"SSL Certificates"),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail."),(0,n.kt)("p",null,"Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention. "),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stack > Resources > SSL Certificates")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click Save. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ssl_certificates",src:r(2038).Z,width:"1807",height:"947"})),(0,n.kt)("p",null,"Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HTTP Validation for single domain certificate"),(0,n.kt)("li",{parentName:"ul"},"DNS Validation for wildcard certificate")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Generate Certificate")),(0,n.kt)("p",null,"In order to generate a certificate, it's a three-step based process i.e."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Order Certificate: Select the listener/zone for which you need to order the certificate."),(0,n.kt)("li",{parentName:"ol"},"Verify Challenge: Verify the challenge for generating the certificate."),(0,n.kt)("li",{parentName:"ol"},"Issue/Renew Certificate: Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.")),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1: Order Certificate")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the domain that we are aiming to issue for it."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Generate"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2: Verify Certificate")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select appropriate challenge option i.e. ",(0,n.kt)("strong",{parentName:"li"},"HTTP Challenge or DNS Challenge"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Verify Challenge"),"."),(0,n.kt)("li",{parentName:"ol"},"We have to wait at least ",(0,n.kt)("strong",{parentName:"li"},"5 minutes")," duration in order to re-verify the certificate to change the status to update status.  "),(0,n.kt)("li",{parentName:"ol"},"After 5 minutes, click on ",(0,n.kt)("strong",{parentName:"li"},"Verify Challenge"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3: Issue/Renew Certificate")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on Issue/Renew Certificate.")),(0,n.kt)("admonition",a({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Certificate verification can fail if verification is not completed within stipulated time.  For any issues, please contact support. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Upload  Certificate")),(0,n.kt)("p",null,"To upload custom certificates, follow the steps below:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUE"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Scope"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Certificate Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Public Key"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Private Key"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h4",a({},{id:"description"}),"Description:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scope")),(0,n.kt)("p",null,"Users can defind the scope of the certificate."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Certificate Name")),(0,n.kt)("p",null,"User can specify the userfriendly name for the certificate."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Public Key")),(0,n.kt)("p",null,"User can specify the public key of certificate."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Private Key")),(0,n.kt)("p",null,"User can specify the private key of certificate."),(0,n.kt)("admonition",a({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"It is recommended to add certificate chaining when uploading custom SSL certificates. To add certificate chaining, append the public key and the chain when uploading Public Key")),(0,n.kt)("p",null,"After submission,  the certificate will be issued and added in the Certificates section."))}m.isMDXComponent=!0},2038:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ssl_certi_newui-18eaeb328a7537456744e7d7bb3c20f1.png"}}]);