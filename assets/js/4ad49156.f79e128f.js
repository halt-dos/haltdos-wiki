"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[30567],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>h});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return i?r.createElement(h,s(s({ref:t},f),{},{components:i})):r.createElement(h,s({ref:t},f))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},62266:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>f});i(67294);var r=i(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}const s={sidebar_position:3},o="SSL Settings",l={unversionedId:"enterprise/waf/listener/ssl_settings",id:"enterprise/waf/listener/ssl_settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations.",source:"@site/docs/enterprise/waf/listener/ssl_settings.md",sourceDirName:"enterprise/waf/listener",slug:"/enterprise/waf/listener/ssl_settings",permalink:"/enterprise/waf/listener/ssl_settings",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"waf_sidebar",previous:{title:"Signatures",permalink:"/enterprise/waf/listener/profiles/signatures"},next:{title:"Performance",permalink:"/enterprise/waf/listener/performance/"}},c={},f=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Encrypt Traffic to Upstream",id:"encrypt-traffic-to-upstream",level:4},{value:"<strong>Enable SSL Offloading</strong>",id:"enable-ssl-offloading",level:5},{value:"<strong>SSL Certificate</strong>",id:"ssl-certificate",level:5},{value:"<strong>SSL Ciphers</strong>",id:"ssl-ciphers",level:5},{value:"<strong>SSL Ciphers Suites</strong>",id:"ssl-ciphers-suites",level:5},{value:"<strong>SSL Session Caching</strong>",id:"ssl-session-caching",level:5},{value:"<strong>SSL Session Timeout</strong>",id:"ssl-session-timeout",level:5},{value:"<strong>Client Certificate Verification</strong>",id:"client-certificate-verification",level:5},{value:"<strong>Client Certificate</strong>",id:"client-certificate",level:5},{value:"<strong>Client Certificate Fingerprint Header</strong>",id:"client-certificate-fingerprint-header",level:5},{value:"<strong>Client Certificate Issuer Header</strong>",id:"client-certificate-issuer-header",level:5},{value:"<strong>Client Certificate Subject Header</strong>",id:"client-certificate-subject-header",level:5},{value:"<strong>Client Certificate Serial Header</strong>",id:"client-certificate-serial-header",level:5},{value:"<strong>Client Certificate Verify Header</strong>",id:"client-certificate-verify-header",level:5},{value:"<strong>Client Certificate Start Date Header</strong>",id:"client-certificate-start-date-header",level:5},{value:"<strong>Client Certificate End Date Header</strong>",id:"client-certificate-end-date-header",level:5},{value:"<strong>Invalid Client Certificate Action</strong>",id:"invalid-client-certificate-action",level:5}],p={toc:f},d="wrapper";function u(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(d,n({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"ssl-settings"}),"SSL Settings"),(0,r.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,r.kt)("hr",null),(0,r.kt)("h3",n({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Settings",src:i(1149).Z,width:"1836",height:"947"})),(0,r.kt)("h3",n({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go To ",(0,r.kt)("strong",{parentName:"li"},"WAF > Listeners > SSL Settings")," "),(0,r.kt)("li",{parentName:"ol"},"Configure Your Settings "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),". ")),(0,r.kt)("h4",n({},{id:"encrypt-traffic-to-upstream"}),"Encrypt Traffic to Upstream"),(0,r.kt)("p",null,"This specifies WAF should re-encrypt traffic before sending it to the back-end web application. "),(0,r.kt)("admonition",n({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We can listen to non-HTTPS traffic and send it as HTTPS traffic to the back end server."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Settings",src:i(88981).Z,width:"1837",height:"946"})),(0,r.kt)("h5",n({},{id:"enable-ssl-offloading"}),(0,r.kt)("strong",{parentName:"h5"},"Enable SSL Offloading")),(0,r.kt)("p",null,"This option specifies if the WAF should enable HTTPS traffic for the configured website."),(0,r.kt)("h5",n({},{id:"ssl-certificate"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Certificate")),(0,r.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page"),(0,r.kt)("h5",n({},{id:"ssl-ciphers"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Ciphers")),(0,r.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down."),(0,r.kt)("h5",n({},{id:"ssl-ciphers-suites"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Ciphers Suites")),(0,r.kt)("p",null,"In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,r.kt)("h5",n({},{id:"ssl-session-caching"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Session Caching")),(0,r.kt)("p",null,"This option allows users to specify the number of SSL session cache for HTTPS requests on the listener."),(0,r.kt)("h5",n({},{id:"ssl-session-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Session Timeout")),(0,r.kt)("p",null,"This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."),(0,r.kt)("h5",n({},{id:"client-certificate-verification"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Verification")),(0,r.kt)("p",null,"This option specifies if the solution should enable client certificate authentication."),(0,r.kt)("h5",n({},{id:"client-certificate"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate")),(0,r.kt)("p",null,"This option specifies an SSL certificate for Client Authentication."),(0,r.kt)("h5",n({},{id:"client-certificate-fingerprint-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Fingerprint Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate fingerprint to be upstream"),(0,r.kt)("h5",n({},{id:"client-certificate-issuer-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Issuer Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL Certificate Issuer to be upstream"),(0,r.kt)("h5",n({},{id:"client-certificate-subject-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Subject Header")),(0,r.kt)("p",null,"It specifies header name for forwarding SSL certificate Subject to be upstream"),(0,r.kt)("h5",n({},{id:"client-certificate-serial-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Serial Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate Serial to be upstream"),(0,r.kt)("h5",n({},{id:"client-certificate-verify-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Verify Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate verified to be upstream"),(0,r.kt)("h5",n({},{id:"client-certificate-start-date-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Start Date Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate start date to be upstream"),(0,r.kt)("h5",n({},{id:"client-certificate-end-date-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate End Date Header")),(0,r.kt)("p",null,"This option allows user to add header name for forwarding SSL certificate end date to be upstream."),(0,r.kt)("h5",n({},{id:"invalid-client-certificate-action"}),(0,r.kt)("strong",{parentName:"h5"},"Invalid Client Certificate Action")),(0,r.kt)("p",null,"This option allows user to specify the action to be performed when client certificate verification fails."))}u.isMDXComponent=!0},1149:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/sslsetting1-6af8a65cf0f1137078a535ea457f759e.png"},88981:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/sslsetting2-04119084f5a3246769303165d5ac7300.png"}}]);