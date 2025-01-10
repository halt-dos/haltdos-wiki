/*! For license information please see 9072638f.d5454347.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[87568],{96484:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"enterprise/waf","title":"Web Application Firewall (WAF)","description":"---","source":"@site/versioned_docs/version-6.0/enterprise/waf.md","sourceDirName":"enterprise","slug":"/enterprise/waf","permalink":"/v6/enterprise/waf","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"pagination_prev":null},"sidebar":"waf_sidebar","next":{"title":"Machine Learning","permalink":"/v6/enterprise/waf/machine-learning"}}');var n=i(74848),o=i(28453);const s={sidebar_position:0,pagination_prev:null},r="Web Application Firewall (WAF)",l={},c=[{value:"Web Application Firewall",id:"web-application-firewall",level:2},{value:"Benefit of Haltdos WAF",id:"benefit-of-haltdos-waf",level:3}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"web-application-firewall-waf",children:"Web Application Firewall (WAF)"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Application delivery controllers(ADC) are networking appliances that manages traffic flow to servers. The function of ADC is to improve the performance, security and resiliency of applications delivered over the web. Application Delivery Controller (ADC) comprises of Server Load Balancer (SLB), Link Load Balancer (LLB), Global Server Load Balancer (GSLB), API Gateway and Web Application Firewall (WAF / WAAP) features."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"web-application-firewall",children:"Web Application Firewall"}),"\n",(0,n.jsx)(t.p,{children:"Web Application Firewall (WAF/ WAAP) is a reverse proxy solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secure company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats."}),"\n",(0,n.jsx)(t.p,{children:"WAF works as the intermediary as well as shield between the user and the app itself, analyzing and securing all communications before they reach the app or the user. A WAF operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic."}),"\n",(0,n.jsx)(t.p,{children:"A WAF analyzes Hypertext Transfer Protocol (HTTP) requests and applies a set of rules that define what parts of that conversation are begin and what parts are malicious. The main parts of HTTP conversations that a WAF analyzes are GET and POST requests. GET requests are used to retrieve data from the server, and POST requests are used to send data to a server to change its state."}),"\n",(0,n.jsx)(t.p,{children:"A WAF can take two approaches to analyzing and filtering the content contained in these HTTP requests or a hybrid combination of the two:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Whitelisting"}),": A whitelisting approach means that the WAF will deny all requests by default and allow only requests that are known to be trusted. It provides a list of what IP addresses are known to be safe."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Blacklisting"}),": A blacklisting approach defaults to letting packets through and uses preset signatures to block malicious web traffic and protect vulnerabilities of websites or web applications."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"benefit-of-haltdos-waf",children:"Benefit of Haltdos WAF"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Automated Patches"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Automated patches is used to detect components and environment settings to adapt the firewall more efficiently. Endpoint WAF is something that is installed inside your application. It is more aware of the environment of your website than a cloud firewall.Haltdos WAFs have the ability to use your scan report to temporarily patch your application for immediate protection."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Data Leakage Prevention"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Data Loss Prevention (DLP) is a set of technologies and business policies to make sure end-users do not send sensitive or confidential data outside the organization without proper authorization. Sensitive information might include financial records, customer data, credit card data, or other protected information."}),"\n",(0,n.jsx)(t.p,{children:"Haltdos WAF inspects all inbound traffic for attacks and outbound traffic for sensitive data. When any sensitive or malicious data is identified, it can be blocked or masked automatically. Comprehensive traffic logging helps you identify the source of any potential leaks."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Rules with Learning"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Unlike most WAFs that depend upon attack signatures (aka. rules) to detect and mitigate attacks, Haltdos WAF lookout for new vectors of attacks and continuously publishes signatures to mitigate them using a combination of Rules, Artificial Intelligence, and Threat Intelligence to provide 360 \xb0 protection for your application. It continuously learns user and application behavior to detect anomalies and take remedial measures to block 0-day attacks."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Positive + Negative Security Model"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Positive Model WAF looks to allow access to specific characters or via specific rules. This means that each rule added provides greater access and conversely having no rules in place will block everything by default. This model has the benefit of severely limiting the vectors an attacker can exploit simply because everything that is not expressly allowed is automatically blocked."}),"\n",(0,n.jsx)(t.p,{children:"Negative Model WAF works on the premise that most attackers are using exploits that have already been uncovered. By blocking these exploits and by creating patches or updates for new vulnerabilities that occur, the client will have to do very little besides ensuring that their WAF is up to date to remain secure."}),"\n",(0,n.jsx)(t.p,{children:"Haltdos WAF is based on a Negative Security model that protects against known attacks and a Positive Security model that only admits pre-approved traffic. Think of a negative model as a club bouncer instructed to deny admittance to guests who don\u2019t meet the dress code. Now in the positive model, this is like the bouncer at an exclusive party only admitting people who are invited. Both negative and positive have their advantages and drawbacks but when combined together with Artificial Intelligence, Haltdos WAF provides comprehensive protection to your website."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,t,i)=>{var a=i(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var a,o={},c=null,d=null;for(a in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:d,props:o,_owner:r.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var a=i(96540);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);