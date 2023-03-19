"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[3188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:1},l="Machine Learning",s={unversionedId:"enterprise/waf/machine-learning",id:"enterprise/waf/machine-learning",title:"Machine Learning",description:"Reason behind using AI based Machine Learning in WAF.",source:"@site/docs/enterprise/waf/machine-learning.md",sourceDirName:"enterprise/waf",slug:"/enterprise/waf/machine-learning",permalink:"/haltdos-wiki/enterprise/waf/machine-learning",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"waf_sidebar",previous:{title:"Web Application Firewall (WAF)",permalink:"/haltdos-wiki/enterprise/waf"},next:{title:"Listener",permalink:"/haltdos-wiki/enterprise/waf/listener/"}},c={},p=[{value:"Anomaly based Learning",id:"anomaly-based-learning",level:2}],u={toc:p},d="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(d,r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"machine-learning"}),"Machine Learning"),(0,a.kt)("p",null,"Reason behind using AI based Machine Learning in WAF."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos WAF uses machine learning for detecting and diminishing application layer attacks on web applications with the help of built-in rules (signatures) and user defined rules. "),(0,a.kt)("h2",r({},{id:"anomaly-based-learning"}),"Anomaly based Learning"),(0,a.kt)("p",null,"Haltdos provides user a robust solution with the help of machine-learning because the main task of a web application firewall is to protect downstream web applications against technical attacks. It can also be used for log analysis, or to support administrators in creating or optimizing complex WAF configurations."),(0,a.kt)("p",null,"AL is limited because it depends on what it learns from usage patterns that it has encountered. Web application firewalls that leverage machine learning ML, however, take a different approach. With ML, the WAF can minimize false positives by using a statistical model to determine the probability that an anomaly is actually evidence of a cyberattack or if it\u2019s just an error or a change in how users interact with the application."),(0,a.kt)("p",null,"WAFs can utilize ML in an additional way \u2013 training ML models to recognize specific threats based on data collected from actual attacks or from security solutions. For example, leverages machine learning to detect advanced bots, providing a total picture of bot activity on web applications. To learn about whether a request is legitimate or a potential malicious attack attempt, it performs the following tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Captures and collects inputs, such as URL parameters, to build a mathematical model of allowed access.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Observes the HTTP method of the traffic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Matches anomalies against pre-trained threat models.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Detect attacks."))),(0,a.kt)("p",null,"Haltdos WAF is used machine learning to enumerate all HTTP request, parameter, headers and cookies. This calculation is done during initial learning phase of standard behavior by detecting deviation. Initially, solution is set on LEARNING mode means working on sample request and baseline evaluation of users and web application. The baseline is figuring every request URL + Method combination and includes all parameters (in header and in body) along with headers and associated cookies. Once the learning is complete, the solution will verify every request against the model to determine whether it's an anomaly or not."),(0,a.kt)("p",null,"The magnificent advantage of Haltdos WAF is that solution does not depend on only one algorithm to evaluate genial anomaly or 0-day attack. Every request is evaluated against different ML models which check for different categories of attacks such as SQL Injection, Cross-site Scripting, etc. The suspicion score is the measure of deviation from baseline. Greater the deviation, higher the score and likely that the incoming request is a malicious request.  "),(0,a.kt)("p",null,"To configure Learning for your application, go to ",(0,a.kt)("a",r({parentName:"p"},{href:"/haltdos-wiki/enterprise/waf/listener/learning"}),(0,a.kt)("strong",{parentName:"a"},"Learning"))," module."))}m.isMDXComponent=!0}}]);