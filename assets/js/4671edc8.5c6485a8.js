"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43035],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},67386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});a(67294);var n=a(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const o={sidebar_position:0,pagination_prev:null},s="Web Application Firewall (WAF)",l={unversionedId:"enterprise/waf",id:"enterprise/waf",title:"Web Application Firewall (WAF)",description:"Web Application Firewall (WAF/ WAAP) is a reverse proxy solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secures a company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.",source:"@site/docs/enterprise/waf.md",sourceDirName:"enterprise",slug:"/enterprise/waf",permalink:"/haltdos-wiki/enterprise/waf",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,pagination_prev:null},sidebar:"waf_sidebar",next:{title:"Machine Learning",permalink:"/haltdos-wiki/enterprise/waf/machine-learning"}},c={},p=[{value:"Benefit of Haltdos WAF",id:"benefit-of-haltdos-waf",level:3}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,o=r(e,["components"]);return(0,n.kt)(d,i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"web-application-firewall-waf"}),"Web Application Firewall (WAF)"),(0,n.kt)("p",null,"Web Application Firewall (WAF/ WAAP) is a reverse proxy solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secures a company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.  "),(0,n.kt)("p",null,"WAF works as the intermediary as well as shield between the user and the app itself, analyzing and securing all communications before they reach the app or the user. A WAF operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic.  "),(0,n.kt)("p",null,"A WAF analyzes Hypertext Transfer Protocol (HTTP) requests and applies a set of rules that define what parts of that conversation are beginning and what parts are malicious. The main parts of HTTP conversations that a WAF analyzes are GET and POST requests. GET requests are used to retrieve data from the server, and POST requests are used to send data to a server to change its state.  "),(0,n.kt)("p",null,"A WAF can take two approaches to analyzing and filtering the content contained in these HTTP requests or a hybrid combination of the two:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Whitelisting"),": A whitelisting approach means that the WAF will deny all requests by default and allow only requests that are known to be trusted. It provides a list of what IP addresses are known to be safe.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Blacklisting"),": A blacklisting approach defaults to letting packets through and uses preset signatures to block malicious web traffic and protect vulnerabilities of websites or web applications.  "))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(89630).Z,width:"1920",height:"1080"})),(0,n.kt)("h3",i({},{id:"benefit-of-haltdos-waf"}),"Benefit of Haltdos WAF"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Automated Patches"),"  ")),(0,n.kt)("p",null,"Automated patches are used to detect components and environment settings to adapt the firewall more efficiently. Endpoint WAF is something that is installed inside your application. It is more aware of the environment of your website than a cloud firewall. Haltdos WAF has the ability to use your scan report to temporarily patch your application for immediate protection.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data Leakage Prevention"),"  ")),(0,n.kt)("p",null,"Data Loss Prevention (DLP) is a set of technologies and business policies to make sure end-users do not send sensitive or confidential data outside the organization without proper authorization. Sensitive information might include financial records, customer data, credit card data, or other protected information.  "),(0,n.kt)("p",null,"Haltdos WAF inspects all inbound traffic for attacks and outbound traffic for sensitive data. When any sensitive or malicious data is identified, it can be blocked or masked automatically. Comprehensive traffic logging helps you identify the source of any potential leaks.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rules with Learning"),"  ")),(0,n.kt)("p",null,"Unlike most WAFs that depend upon attack signatures (aka. rules) to detect and mitigate attacks, Haltdos WAF lookout for new vectors of attacks and continuously publishes signatures to mitigate them using a combination of Rules, Artificial Intelligence, and Threat Intelligence to provide 360\xb0 protection for your application. It continuously learns user and application behavior to detect anomalies and take remedial measures to block 0-day attacks.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Positive + Negative Security Model"),"  ")),(0,n.kt)("p",null,"Positive Model WAF looks to allow access to specific characters or via specific rules. This means that each rule added provides greater access and conversely having no rules in place will block everything by default. This model has the benefit of severely limiting the vectors an attacker can exploit simply because everything that is not expressly allowed is automatically blocked.  "),(0,n.kt)("p",null,"Negative Model WAF works on the premise that most attackers are using exploits that have already been uncovered. By blocking these exploits and by creating patches or updates for new vulnerabilities that occur, the client will have to do very little besides ensuring that their WAF is up-to-date to remain secure.  "),(0,n.kt)("p",null,"Haltdos WAF is based on a Negative Security model that protects against known attacks and a Positive Security model that only admits pre-approved traffic. Think of a negative model as a club bouncer instructed to deny admittance to guests who don\u2019t meet the dress code. Now in the positive model, this is like the bouncer at an exclusive party only admitting people who are invited. Both negative and positive have their advantages and drawbacks but when combined with Artificial Intelligence, Haltdos WAF provides comprehensive protection to your website."))}f.isMDXComponent=!0},89630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/functioningofwaf-2b9a8cd3caf79d596f4178f175364c47.png"}}]);