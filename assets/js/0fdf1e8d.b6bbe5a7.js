"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[43093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,m=u["".concat(c,".").concat(y)]||u[y]||f[y]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},98599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_position:68},l="KB: 1068",c={unversionedId:"kb/waf/kb-1068",id:"version-7.0/kb/waf/kb-1068",title:"KB: 1068",description:"Why do we need to configure web application to accept traffic from WAF only?",source:"@site/versioned_docs/version-7.0/kb/waf/kb-1068.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1068",permalink:"/kb/waf/kb-1068",draft:!1,tags:[],version:"7.0",sidebarPosition:68,frontMatter:{sidebar_position:68},sidebar:"kb_sidebar",previous:{title:"KB: 1067",permalink:"/kb/waf/kb-1067"},next:{title:"Application Delivery Controller",permalink:"/kb/adc/"}},s={},p=[{value:"<strong>Why do we need to configure web application to accept traffic from WAF only?</strong>",id:"why-do-we-need-to-configure-web-application-to-accept-traffic-from-waf-only",level:4}],u={toc:p},f="wrapper";function y(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(f,a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"kb-1068"}),"KB: 1068"),(0,n.kt)("h4",a({},{id:"why-do-we-need-to-configure-web-application-to-accept-traffic-from-waf-only"}),(0,n.kt)("strong",{parentName:"h4"},"Why do we need to configure web application to accept traffic from WAF only?")),(0,n.kt)("p",null,"A Web Application Firewall (WAF) is a security solution that helps protect web applications from various online threats, such as SQL injection, cross-site scripting (XSS), and other types of attacks. Configuring your server to allow only requests from a WAF can enhance the security of your web applications in several ways: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Filtering malicious traffic"),": A WAF is designed to analyse incoming traffic and filter out potentially harmful requests. By allowing only requests through the WAF, you ensure that all incoming traffic is scrutinized for malicious intent before reaching your web application. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Attack prevention:")," WAFs are equipped with rules and signatures that can detect and block common web application attacks. By channelling all traffic through the WAF, you can use its capabilities to prevent attacks before they reach your web server. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reducing false positives:")," WAFs may generate false positives, blocking legitimate requests that appear to be malicious. By allowing only WAF-filtered traffic, you can minimize the impact of false positives on your web application. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Centralized security control:")," Configuring your server to only accept requests from the WAF centralizes security control. This means that security policies and configurations are managed at a single point (the WAF), making it easier to monitor and enforce security measures. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Mitigating DDoS attacks:")," Some WAFs include features to mitigate Distributed Denial of Service (DDoS) attacks. By directing all traffic through the WAF, you can benefit from its DDoS protection capabilities, helping to ensure the availability of your web application during an attack. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Logging and monitoring:")," WAFs typically provide detailed logs and reports on web traffic, including information about detected threats and potential vulnerabilities. By allowing only WAF-filtered traffic, you can have more comprehensive logging and monitoring, aiding in the detection and response to security incidents. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Adapting to evolving threats:")," WAFs are regularly updated to address new and emerging threats. By allowing only WAF-filtered traffic, you ensure that your web application benefits from the latest security measures and threat intelligence. "))),(0,n.kt)("p",null,"In summary, configuring your server to allow only requests from a WAF is a proactive security measure to enhance the protection of your web applications. This ensures the security, stability, and availability of the origin server by preventing hackers from evading WAF and attacking the origin server via origin server IP addresses."))}y.isMDXComponent=!0}}]);