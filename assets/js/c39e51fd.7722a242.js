"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[58715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:1},s="Overview",l={unversionedId:"cloud/waf/overview",id:"version-6.0/cloud/waf/overview",title:"Overview",description:"Secure your website with Enterprise Grade Web Application Firewall (WAF)",source:"@site/versioned_docs/version-6.0/cloud/waf/overview.md",sourceDirName:"cloud/waf",slug:"/cloud/waf/overview",permalink:"/haltdos-wiki/v6/cloud/waf/overview",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cloud_sidebar",previous:{title:"Support & Ticketing",permalink:"/haltdos-wiki/v6/cloud/support"},next:{title:"Zones",permalink:"/haltdos-wiki/v6/cloud/waf/zones/"}},c={},p=[],u={toc:p},d="wrapper";function f(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)(d,r({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Secure your website with Enterprise Grade Web Application Firewall (WAF)"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Web Application Firewall (WAF / WAAP) is a reverse proxy solution to secure applications against common cyber-attacks. WAF is designed to protect the company\u2019s Web applications against various critical cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats. It sits on an organization\u2019s network, between a Web client and Web server, and protects the organization from vulnerabilities."),(0,a.kt)("p",null,"Deploying a WAF in front of a web application, a shield is placed between the web client and web server. While a proxy server protects a client machine\u2019s identity by using an intermediary, WAF is a type of reverse proxy, protecting the server from exposure by having clients pass through the WAF before reaching the server."),(0,a.kt)("p",null,"A WAF operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic. The value of WAF is the speed and ease with which policy modification can be implemented, allowing for faster response to varying attack vectors. For example, during a DDoS attack, rate limiting can be quickly implemented by modifying WAF policies."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"wafoverview",src:n(99564).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Benefits")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Automated Patches")),(0,a.kt)("p",null,"It\u2019s always good to run vulnerability scans regularly. Ideally, if you are in an online business you would be running scans once a quarter or several times a month. Consider what might happen if you discover a vulnerability in your website or application, you might have the resources to patch the application or fix the problem quickly but most businesses don't have the expertise or skill immediately available. If your company falls into the second group, then your company is at risk as long as that vulnerability is present. Haltdos WAFs have the ability to use your scan report to temporarily patch your application for immediate protection."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Stops Data Leakage")),(0,a.kt)("p",null,"Hackers can gather data in numerous ways unless you know you\u2019ve been compromised and detecting them can be challenging. Data leakage can be caused by something as insignificant as a malicious error message presented to a user, so if your application is harboring critical data such as source code or credit card details, then it\u2019s very easy to breach the data and any kind of leak can turn into a disaster. Haltdos WAF scans every response from Web Application to your end-users and if something appears unusual, the WAF stops it from leaving your network. Haltdos WAF has built-in high-level behavioral signatures looking for sensitive information such as credit card details and social security numbers. But you can customize, and add any additional signatures, such as specific files, information, or code."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rules with Learning")),(0,a.kt)("p",null,"Unlike most WAFs that depend upon attack signatures (aka. rules) to detect and mitigate attacks, Haltdos WAF lookout for new vectors of attacks and continuously publish signatures to mitigate them using a combination of Rules, Artificial Intelligence and Threat Intelligence to provide 360 \xb0 protection for your application. It continuously learns user and application behavior to detect anomalies and take remedial measures to block 0-day attacks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Positive + Negative Security Model")),(0,a.kt)("p",null,"Haltdos WAF is based on a Negative Security model that protects against known attacks and a Positive Security model that only admits pre-approved traffic. Think of a negative model as a club bouncer instructed to deny admittance to guests who don\u2019t meet the dress code. Now in the positive model, this is like the bouncer at an exclusive party only admits people who are invited. Both negative and positive have their advantages and drawbacks but when combined together with Artificial Intelligence, Haltdos WAF provides comprehensive protection to your website."))}f.isMDXComponent=!0},99564:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wafoverview1-2b9a8cd3caf79d596f4178f175364c47.png"}}]);