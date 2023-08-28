"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[10573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={sidebar_position:4},o="SSL Certificates",c={unversionedId:"cloud/waf/ssl_certificates",id:"cloud/waf/ssl_certificates",title:"SSL Certificates",description:"Certificates used for providing security for online communications.",source:"@site/docs/cloud/waf/ssl_certificates.md",sourceDirName:"cloud/waf",slug:"/cloud/waf/ssl_certificates",permalink:"/cloud/waf/ssl_certificates",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"cloud_sidebar",previous:{title:"Protection URL",permalink:"/cloud/waf/listener/fqdn"},next:{title:"Events",permalink:"/cloud/waf/events"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:p},f="wrapper";function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(f,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"ssl-certificates"}),"SSL Certificates"),(0,n.kt)("p",null,"Certificates used for providing security for online communications."),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail."),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Stack > Certificates"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),". "))),(0,n.kt)("p",null,"Users can either upload a certificate or generate a new certificate for their domain defined as Zones."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Upload  Certificate")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"SETTINGS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Certificate Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Public Key"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Private Key"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h4",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Certificate Name"),": Specify a user-friendly name for the certificate. The name field takes alphanumeric input."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Public Key"),": Enter the public key of the certificate. The public key is a digitally signed document that serves to validate the sender's authorization and name."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Private Key"),": Enter the private key details. The private key is a separate file that's used in the encryption/decryption of data sent between your server and the connecting clients."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Generate Certificate")),(0,n.kt)("p",null,"In order to generate a certificate, it's a three-step based process i.e."),(0,n.kt)("p",null,"1) Order Certificate: Select the listener/zone for which you need to order the certificate."),(0,n.kt)("p",null,"2) Verify Challenge: Verify the challenge for generating the certificate."),(0,n.kt)("p",null,"3) Issue/Renew Certificate: Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly."),(0,n.kt)("p",null,"Note: Issued certificate is for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1: Order Certificate")),(0,n.kt)("p",null,"1) Select the domain that we are aiming to issue for it."),(0,n.kt)("p",null,"2) Click on ",(0,n.kt)("strong",{parentName:"p"},"Generate"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2: Verify Certificate")),(0,n.kt)("p",null,"1) Select appropriate challenge option i.e. ",(0,n.kt)("strong",{parentName:"p"},"HTTP Challenge")," or ",(0,n.kt)("strong",{parentName:"p"},"DNS Challenge"),"."),(0,n.kt)("p",null,"2) Click on ",(0,n.kt)("strong",{parentName:"p"},"Verify Challenge"),"."),(0,n.kt)("p",null,"3) We have to wait at least ",(0,n.kt)("strong",{parentName:"p"},"5 minutes")," duration in order to re-verify the certificate to change the status to update status.  "),(0,n.kt)("p",null,"4) After 5 minutes, click on ",(0,n.kt)("strong",{parentName:"p"},"Verify Challenge"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3: Issue/Renew Certificate")),(0,n.kt)("p",null,"1) Click on Issue/Renew Certificate."),(0,n.kt)("p",null,"After submission,  the certificate will be issued and added in the Certificates section."),(0,n.kt)("p",null,"Note: Certificate verification can be failed.  For any issues, please contact support."))}d.isMDXComponent=!0}}]);