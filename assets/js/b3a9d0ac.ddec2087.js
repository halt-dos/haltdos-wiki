"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[41472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={sidebar_position:1},s="SSL Certificates",l={unversionedId:"enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates",id:"enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates",title:"SSL Certificates",description:"---",source:"@site/docs/enterprise/platform/stacks/resource_content/ssl_certificates/ssl_certificates.md",sourceDirName:"enterprise/platform/stacks/resource_content/ssl_certificates",slug:"/enterprise/platform/stacks/resource_content/ssl_certificates/",permalink:"/enterprise/platform/stacks/resource_content/ssl_certificates/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"platform_sidebar",previous:{title:"Resources",permalink:"/enterprise/platform/stacks/resource_content/"},next:{title:"Lets Encrypt Certificates",permalink:"/enterprise/platform/stacks/resource_content/ssl_certificates/lets_encrypt"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Generate Certificate using Let&#39;s Encrypt</strong>",id:"generate-certificate-using-lets-encrypt",level:3},{value:"<strong>Upload Custom Certificate</strong>",id:"upload-custom-certificate",level:3},{value:"Description:",id:"description",level:4}],f={toc:p},u="wrapper";function m(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(u,i({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"ssl-certificates"}),"SSL Certificates"),(0,n.kt)("hr",null),(0,n.kt)("h2",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail."),(0,n.kt)("p",null,"Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention."),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Stack > Resources > SSL Certificates")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click Save.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ssl_certificates",src:r(96040).Z,width:"1880",height:"891"})),(0,n.kt)("p",null,"Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HTTP Validation for single domain certificate"),(0,n.kt)("li",{parentName:"ul"},"DNS Validation for wildcard certificate")),(0,n.kt)("admonition",i({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates.")),(0,n.kt)("h3",i({},{id:"generate-certificate-using-lets-encrypt"}),(0,n.kt)("strong",{parentName:"h3"},"Generate Certificate using Let's Encrypt")),(0,n.kt)("p",null,"In order to generate a certificate, it's a three-step based process i.e."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Order Certificate:")," Select the listener/zone for which you need to order the certificate."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Verify Challenge:")," Verify the challenge for generating the certificate."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Issue/Renew Certificate:")," Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1: Order Certificate")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select the domain that we are aiming to issue for it."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Generate"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2: Verify Certificate")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select appropriate challenge option i.e. ",(0,n.kt)("strong",{parentName:"li"},"HTTP Challenge or DNS Challenge"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Verify Challenge"),"."),(0,n.kt)("li",{parentName:"ol"},"We have to wait at least ",(0,n.kt)("strong",{parentName:"li"},"5 minutes")," duration in order to re-verify the certificate to change the status to update status."),(0,n.kt)("li",{parentName:"ol"},"After 5 minutes, click on ",(0,n.kt)("strong",{parentName:"li"},"Verify Challenge"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3: Issue/Renew Certificate")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on Issue/Renew Certificate.")),(0,n.kt)("admonition",i({},{title:"Note",type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"Certificate verification can fail if verification is not completed within stipulated time.  For any issues, please contact support.")),(0,n.kt)("h3",i({},{id:"upload-custom-certificate"}),(0,n.kt)("strong",{parentName:"h3"},"Upload Custom Certificate")),(0,n.kt)("p",null,"To upload custom certificates, follow the steps below:"),(0,n.kt)("h4",i({},{id:"description"}),"Description:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Certificate Name")),(0,n.kt)("p",null,"User can specify the userfriendly name for the certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Certificate Domain")),(0,n.kt)("p",null,"User can specify the userfriendly name for the certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select Domain\n\nDefault: Blank \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scope")),(0,n.kt)("p",null,"Users can defind the scope of the certificate."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select App / Resources\n\nDefault: Blank\n")),(0,n.kt)("admonition",i({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"It is recommended to add certificate chaining when uploading custom SSL certificates. To add certificate chaining, append the public key and the chain when uploading Public Key")),(0,n.kt)("admonition",i({},{title:"Info",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Haltdos Console does support upload of ",(0,n.kt)("strong",{parentName:"p"},"DV"),", ",(0,n.kt)("strong",{parentName:"p"},"OV")," and ",(0,n.kt)("strong",{parentName:"p"},"EV")," type of SSL certificates. It also supports upload of ",(0,n.kt)("strong",{parentName:"p"},"Single")," and ",(0,n.kt)("strong",{parentName:"p"},"Multi-Domain")," Certificates.")))}m.isMDXComponent=!0},96040:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ssl-cert-1853e51b4ef9d9dcf59500abff568036.png"}}]);