"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[54235],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),f=n,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return i?r.createElement(m,l(l({ref:t},p),{},{components:i})):r.createElement(m,l({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},36857:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>p});i(67294);var r=i(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}const l={sidebar_position:2},s="SSL Settings",o={unversionedId:"enterprise/adc/listeners/ssl_settings",id:"version-6.0/enterprise/adc/listeners/ssl_settings",title:"SSL Settings",description:"SSL (Secure Sockets Layer) and its successor, TLS (Transport Layer Security), are protocols for establishing authenticated and encrypted links between networked computers.",source:"@site/versioned_docs/version-6.0/enterprise/adc/listeners/ssl_settings.md",sourceDirName:"enterprise/adc/listeners",slug:"/enterprise/adc/listeners/ssl_settings",permalink:"/v6/enterprise/adc/listeners/ssl_settings",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"adc_sidebar",previous:{title:"Listener Settings",permalink:"/v6/enterprise/adc/listeners/listener_settings"},next:{title:"Geo Filtering",permalink:"/v6/enterprise/adc/listeners/geo_filtering"}},c={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Enable SSL Offloading",id:"enable-ssl-offloading",level:4},{value:"SSL Certificate",id:"ssl-certificate",level:4},{value:"SSL Cipher Suites",id:"ssl-cipher-suites",level:4},{value:"SSL Session Caching",id:"ssl-session-caching",level:4},{value:"SSL Session Timeout",id:"ssl-session-timeout",level:4},{value:"Client Certificate Verification",id:"client-certificate-verification",level:4},{value:"Client Certificate",id:"client-certificate",level:4},{value:"Certifcate Revocation List",id:"certifcate-revocation-list",level:4},{value:"Client Certificate Raw Header",id:"client-certificate-raw-header",level:4},{value:"Client Certificate Fingerprint Header",id:"client-certificate-fingerprint-header",level:4},{value:"Client Certificate Issuer Header",id:"client-certificate-issuer-header",level:4},{value:"Client Certificate Subject Header",id:"client-certificate-subject-header",level:4},{value:"Client Certificate Serial Header",id:"client-certificate-serial-header",level:4},{value:"Client Certificate Verify Header",id:"client-certificate-verify-header",level:4},{value:"Client Certificate Start Date Header",id:"client-certificate-start-date-header",level:4},{value:"Client Certificate End Date Header",id:"client-certificate-end-date-header",level:4},{value:"Invalid Client Certificate Action",id:"invalid-client-certificate-action",level:4},{value:"Custom Page",id:"custom-page",level:4}],d={toc:p},u="wrapper";function f(e){var{components:t}=e,l=a(e,["components"]);return(0,r.kt)(u,n({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"ssl-settings"}),"SSL Settings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SSL (Secure Sockets Layer)")," and its successor, ",(0,r.kt)("strong",{parentName:"p"},"TLS (Transport Layer Security)"),", are protocols for establishing authenticated and encrypted links between networked computers."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Settings",src:i(13809).Z,width:"1266",height:"650"})),(0,r.kt)("h3",n({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",n({parentName:"p"},{href:"/enterprise/adc"}),(0,r.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,r.kt)("a",n({parentName:"p"},{href:"/v6/enterprise/adc/listeners/"}),(0,r.kt)("strong",{parentName:"a"},"Listeners"))," > SSL Settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save Changes. "))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Settings2",src:i(90151).Z,width:"1228",height:"688"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Enable SSL Offloading"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SSL Certificate"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"File Upload"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SSL Cipher Suites"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"INTERMEDIATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SSL Session Caching"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"SSL Session Timeout"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Verification"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Disbaled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"File Upload"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Certificate Revocation List"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Raw Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Fingerprint Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Issuer Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Subject Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Serial Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Verify Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate Start Date Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Client Certificate End Date Header"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Invalid Client Certificate Action"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"No Action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Custom Page"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Drop Down"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("h4",n({},{id:"description"}),"Description:"),(0,r.kt)("h4",n({},{id:"enable-ssl-offloading"}),"Enable SSL Offloading"),(0,r.kt)("p",null,"This option allows users to specify if the solution should offload SSL traffic. It helps to reduce burden of servers through the process of removing SSL encryption from incoming traffic."),(0,r.kt)("h4",n({},{id:"ssl-certificate"}),"SSL Certificate"),(0,r.kt)("p",null,"This option allows users to specify an SSL certificate for Encryption / Decryption. It authenticates the identity of the website and more secure. It assures users that you are using a authentic website."),(0,r.kt)("h4",n({},{id:"ssl-cipher-suites"}),"SSL Cipher Suites"),(0,r.kt)("p",null,"This option allows users to specify the security/compatibility of SSL with modern web browsers. It provides a set of algorithms and protocols to secure communication between client and server."),(0,r.kt)("h4",n({},{id:"ssl-session-caching"}),"SSL Session Caching"),(0,r.kt)("p",null,"This option allows users to specify the SSL session caching which helps to optimize and greatly improve performance through saving SSL sessions for a specific period of time until connection between client and server has been terminated."),(0,r.kt)("h4",n({},{id:"ssl-session-timeout"}),"SSL Session Timeout"),(0,r.kt)("p",null,"This option allows users to specify the SSL session timeout. This value is the amount of time given  before an SSL session expires."),(0,r.kt)("h4",n({},{id:"client-certificate-verification"}),"Client Certificate Verification"),(0,r.kt)("p",null,"This option allows users to specify if the solution should enable client certificate authentication. It provides security to encrypt data transfer so that cyber criminal cannot access, read or change the data."),(0,r.kt)("h4",n({},{id:"client-certificate"}),"Client Certificate"),(0,r.kt)("p",null,"This option allows users to specify an SSL certificate for Client Authentication."),(0,r.kt)("p",null,"This option allows users to specify an SSL certificate for Client Authentication. It provides the identity of the connecting users. User can redirect at ",(0,r.kt)("strong",{parentName:"p"},"Client Certificate")," and add certificate."),(0,r.kt)("h4",n({},{id:"certifcate-revocation-list"}),"Certifcate Revocation List"),(0,r.kt)("p",null,"Users can specify client certificate revocation list."),(0,r.kt)("h4",n({},{id:"client-certificate-raw-header"}),"Client Certificate Raw Header"),(0,r.kt)("p",null,"Users can specify header name for forwarding raw SSL client certificate to upstream"),(0,r.kt)("h4",n({},{id:"client-certificate-fingerprint-header"}),"Client Certificate Fingerprint Header"),(0,r.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate fingerprints to be upstream."),(0,r.kt)("h4",n({},{id:"client-certificate-issuer-header"}),"Client Certificate Issuer Header"),(0,r.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate Issuer to be upstream."),(0,r.kt)("h4",n({},{id:"client-certificate-subject-header"}),"Client Certificate Subject Header"),(0,r.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate Subject to be upstream."),(0,r.kt)("h4",n({},{id:"client-certificate-serial-header"}),"Client Certificate Serial Header"),(0,r.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate Serial to be upstream."),(0,r.kt)("h4",n({},{id:"client-certificate-verify-header"}),"Client Certificate Verify Header"),(0,r.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate verify to be upstream."),(0,r.kt)("h4",n({},{id:"client-certificate-start-date-header"}),"Client Certificate Start Date Header"),(0,r.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate start date to be upstream."),(0,r.kt)("h4",n({},{id:"client-certificate-end-date-header"}),"Client Certificate End Date Header"),(0,r.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate end date to be upstream."),(0,r.kt)("h4",n({},{id:"invalid-client-certificate-action"}),"Invalid Client Certificate Action"),(0,r.kt)("p",null,"This option allows users to specify the action to be performed when client certificate verification fails."),(0,r.kt)("h4",n({},{id:"custom-page"}),"Custom Page"),(0,r.kt)("p",null,"Users can specify the response page to be shown on client certificate verification failure."))}f.isMDXComponent=!0},13809:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/sslsettings1-05a55c97adfd941026fd4a880977ce73.png"},90151:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/sslsettings2-95da2ed82ceef7e9e33e281098c324f5.png"}}]);