"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[88697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=i,g=f["".concat(o,".").concat(u)]||f[u]||d[u]||a;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[f]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={sidebar_position:3},l="SSL Settings",o={unversionedId:"enterprise/waf/listener/ssl_settings",id:"version-7.0/enterprise/waf/listener/ssl_settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations.",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/ssl_settings.md",sourceDirName:"enterprise/waf/listener",slug:"/enterprise/waf/listener/ssl_settings",permalink:"/enterprise/waf/listener/ssl_settings",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"waf_sidebar",previous:{title:"Signatures",permalink:"/enterprise/waf/listener/profiles/signatures"},next:{title:"Performance",permalink:"/enterprise/waf/listener/performance/"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Encrypt Traffic to Upstream",id:"encrypt-traffic-to-upstream",level:4},{value:"<strong>Enable SSL Offloading</strong>",id:"enable-ssl-offloading",level:5},{value:"<strong>SSL Certificate</strong>",id:"ssl-certificate",level:5},{value:"<strong>SSL Ciphers</strong>",id:"ssl-ciphers",level:5},{value:"<strong>SSL Ciphers Suites</strong>",id:"ssl-ciphers-suites",level:5},{value:"<strong>SSL Session Caching</strong>",id:"ssl-session-caching",level:5},{value:"<strong>Enable SSL Stapling</strong>",id:"enable-ssl-stapling",level:5},{value:"<strong>Verify OCSP Responses</strong>",id:"verify-ocsp-responses",level:5},{value:"<strong>SSL Session Timeout</strong>",id:"ssl-session-timeout",level:5},{value:"<strong>Client Certificate Verification</strong>",id:"client-certificate-verification",level:5},{value:"<strong>Client Certificate</strong>",id:"client-certificate",level:5},{value:"<strong>Certificate Revocation List</strong>",id:"certificate-revocation-list",level:5},{value:"<strong>Client Certificate Raw Header</strong>",id:"client-certificate-raw-header",level:5},{value:"<strong>Client Certificate Fingerprint Header</strong>",id:"client-certificate-fingerprint-header",level:5},{value:"<strong>Client Certificate Issuer Header</strong>",id:"client-certificate-issuer-header",level:5},{value:"<strong>Client Certificate Subject Header</strong>",id:"client-certificate-subject-header",level:5},{value:"<strong>Client Certificate Serial Header</strong>",id:"client-certificate-serial-header",level:5},{value:"<strong>Client Certificate Verify Header</strong>",id:"client-certificate-verify-header",level:5},{value:"<strong>Client Certificate Start Date Header</strong>",id:"client-certificate-start-date-header",level:5},{value:"<strong>Client Certificate End Date Header</strong>",id:"client-certificate-end-date-header",level:5},{value:"<strong>Invalid Client Certificate Action</strong>",id:"invalid-client-certificate-action",level:5}],f={toc:p},d="wrapper";function u(e){var{components:t}=e,s=a(e,["components"]);return(0,r.kt)(d,i({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"ssl-settings"}),"SSL Settings"),(0,r.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,r.kt)("hr",null),(0,r.kt)("h3",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Settings",src:n(1149).Z,width:"1836",height:"947"})),(0,r.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go To ",(0,r.kt)("strong",{parentName:"li"},"WAF > Listeners > SSL Settings")," "),(0,r.kt)("li",{parentName:"ol"},"Configure Your Settings "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),". ")),(0,r.kt)("h4",i({},{id:"encrypt-traffic-to-upstream"}),"Encrypt Traffic to Upstream"),(0,r.kt)("p",null,"This specifies WAF should re-encrypt traffic before sending it to the back-end web application. "),(0,r.kt)("admonition",i({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We can listen to non-HTTPS traffic and send it as HTTPS traffic to the back end server."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Settings",src:n(88981).Z,width:"1837",height:"946"})),(0,r.kt)("h5",i({},{id:"enable-ssl-offloading"}),(0,r.kt)("strong",{parentName:"h5"},"Enable SSL Offloading")),(0,r.kt)("p",null,"This option specifies if the WAF should enable HTTPS traffic for the configured website."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable\n")),(0,r.kt)("h5",i({},{id:"ssl-certificate"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Certificate")),(0,r.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select the uploaded SSL Certificate \n\nDefault: Blank  \n")),(0,r.kt)("h5",i({},{id:"ssl-ciphers"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Ciphers")),(0,r.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down."),(0,r.kt)("h5",i({},{id:"ssl-ciphers-suites"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Ciphers Suites")),(0,r.kt)("p",null,"In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Modern / Intermediate / Old / Custom \n\nDefault: Intermediate  \n")),(0,r.kt)("h5",i({},{id:"ssl-session-caching"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Session Caching")),(0,r.kt)("p",null,"This option allows users to specify the number of SSL session cache for HTTPS requests on the listener."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 1000\n\nMin: 0\n\nDefault: 10  \n")),(0,r.kt)("h5",i({},{id:"enable-ssl-stapling"}),(0,r.kt)("strong",{parentName:"h5"},"Enable SSL Stapling")),(0,r.kt)("p",null,"Specify enabling SSL stapling of OCSP responses"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable\n")),(0,r.kt)("h5",i({},{id:"verify-ocsp-responses"}),(0,r.kt)("strong",{parentName:"h5"},"Verify OCSP Responses")),(0,r.kt)("p",null,"Specify enabling verification of OCSP responses from Server"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Enable\n")),(0,r.kt)("h5",i({},{id:"ssl-session-timeout"}),(0,r.kt)("strong",{parentName:"h5"},"SSL Session Timeout")),(0,r.kt)("p",null,"This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nMax: 3600\n\nMin: 1\n\nDefault: 5\n\nMetrics: Seconds\n")),(0,r.kt)("h5",i({},{id:"client-certificate-verification"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Verification")),(0,r.kt)("p",null,"This option specifies if the solution should enable client certificate authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Enabled / Disabled / Optional\n\nDefault: Disabled\n")),(0,r.kt)("h5",i({},{id:"client-certificate"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate")),(0,r.kt)("p",null,"This option specifies an SSL certificate for Client Authentication."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select Client Certificate\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"certificate-revocation-list"}),(0,r.kt)("strong",{parentName:"h5"},"Certificate Revocation List")),(0,r.kt)("p",null,"Specify client certificate revocation list"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select certificate revocation list\n\nDefault: NONE\n")),(0,r.kt)("h5",i({},{id:"client-certificate-raw-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Raw Header")),(0,r.kt)("p",null,"Specify header name for forwarding raw SSL client certificate to upstream"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"client-certificate-fingerprint-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Fingerprint Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate fingerprint to be upstream"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"client-certificate-issuer-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Issuer Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL Certificate Issuer to be upstream"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"client-certificate-subject-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Subject Header")),(0,r.kt)("p",null,"It specifies header name for forwarding SSL certificate Subject to be upstream"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"client-certificate-serial-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Serial Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate Serial to be upstream"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"client-certificate-verify-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Verify Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate verified to be upstream"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"client-certificate-start-date-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate Start Date Header")),(0,r.kt)("p",null,"This option specifies header name for forwarding SSL certificate start date to be upstream"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"client-certificate-end-date-header"}),(0,r.kt)("strong",{parentName:"h5"},"Client Certificate End Date Header")),(0,r.kt)("p",null,"This option allows user to add header name for forwarding SSL certificate end date to be upstream."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("h5",i({},{id:"invalid-client-certificate-action"}),(0,r.kt)("strong",{parentName:"h5"},"Invalid Client Certificate Action")),(0,r.kt)("p",null,"This option allows user to specify the action to be performed when client certificate verification fails."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"Accepted values: No Action / Tarpit Src IP / Send Custom Response / Temprorary Blacklist IP / Terminate Connection / Redirect / Record Request / Record Request & Drop\n\nDefault: No Action\n")))}u.isMDXComponent=!0},1149:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sslsetting1-6af8a65cf0f1137078a535ea457f759e.png"},88981:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sslsetting2-04119084f5a3246769303165d5ac7300.png"}}]);