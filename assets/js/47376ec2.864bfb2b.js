"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[26949],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},45951:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});o(67294);var r=o(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},n.apply(this,arguments)}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const i={sidebar_position:8},s="Deploy to Production",c={unversionedId:"cloud/waf/deploy_to_prod",id:"version-7.0/cloud/waf/deploy_to_prod",title:"Deploy to Production",description:"Steps to deploy WAF into production.",source:"@site/versioned_docs/version-7.0/cloud/waf/deploy_to_prod.md",sourceDirName:"cloud/waf",slug:"/cloud/waf/deploy_to_prod",permalink:"/v7/cloud/waf/deploy_to_prod",draft:!1,tags:[],version:"7.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"cloud_sidebar",previous:{title:"Analytics",permalink:"/v7/cloud/waf/analytics"},next:{title:"Knowledge Base",permalink:"/v7/cloud/waf/kb/"}},l={},p=[{value:"Protection FQDN",id:"protection-fqdn",level:3},{value:"How Protection FQDN works?",id:"how-protection-fqdn-works",level:3},{value:"Steps to deploy to production",id:"steps-to-deploy-to-production",level:3}],d={toc:p},u="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(u,n({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"deploy-to-production"}),"Deploy to Production"),(0,r.kt)("p",null,"Steps to deploy WAF into production."),(0,r.kt)("hr",null),(0,r.kt)("h3",n({},{id:"protection-fqdn"}),"Protection FQDN"),(0,r.kt)("p",null,"A Web Application Firewall (WAF) is a security system that protects web applications from various online threats, such as malicious attacks, data breaches, and unauthorized access. A WAF can be implemented as a hardware appliance, software solution, or cloud-based service. One common way to integrate a WAF into a website's architecture is by using a CNAME (Canonical Name) record."),(0,r.kt)("p",null,"FQDN stands for Fully Qualified Domain Name. It is a complete and unambiguous domain name that specifies an exact location in the Domain Name System (DNS) hierarchy. An FQDN consists of two main parts: ",(0,r.kt)("strong",{parentName:"p"},"Hostname")," and ",(0,r.kt)("strong",{parentName:"p"},"Domain name"),". The hostname is the specific name of a machine or device within the domain, and the domain name indicates the broader context or location of that machine within the DNS structure."),(0,r.kt)("p",null,"An FQDN is structured in a hierarchical manner, with each part separated by a dot (period). For example, consider the FQDN ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",n({parentName:"strong"},{href:"http://www.example.com"}),"www.example.com")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"www")," is the hostname."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"example.com")," is the domain name."),(0,r.kt)("li",{parentName:"ul"},"Together, they form the fully qualified domain name - ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",n({parentName:"strong"},{href:"http://www.example.com"}),"www.example.com")),". This FQDN can be used to uniquely identify a specific machine on the internet.")),(0,r.kt)("p",null,"FQDNs are important for various networking and internet-related tasks, including website hosting, email routing, and network administration. They provide a standardized and human-readable way to refer to specific resources on the internet."),(0,r.kt)("h3",n({},{id:"how-protection-fqdn-works"}),"How Protection FQDN works?"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"CNAME")," record is a type of ",(0,r.kt)("strong",{parentName:"p"},"DNS")," record that allows you to create an alias for a domain name. It's used to associate one domain name with another, allowing the second domain to effectively point to the same location as the first domain. This is commonly used for load balancing, content delivery networks (",(0,r.kt)("strong",{parentName:"p"},"CDNs"),"), and in this case, for integrating a WAF with a website."),(0,r.kt)("p",null,"When using a WAF service, you might be required to set up a CNAME record in your DNS configuration. Here's how it generally works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You subscribe to a WAF service, which provides you with a unique domain name (e.g. ",(0,r.kt)("strong",{parentName:"p"},"waf.examplewaf.com"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Instead of directing traffic to your web server directly, you create a CNAME record in your DNS settings. This CNAME record points from a subdomain of your main domain (e.g., ",(0,r.kt)("strong",{parentName:"p"},"secure.example.com"),") to the WAF's domain (e.g., ",(0,r.kt)("strong",{parentName:"p"},"waf.examplewaf.com"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When users access your website using the subdomain you specified (e.g., ",(0,r.kt)("strong",{parentName:"p"},"secure.example.com"),"), the DNS resolution process directs the traffic to the WAF service instead.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The WAF then inspects the incoming traffic, filters out any malicious requests or attacks, and forwards the clean traffic to your actual web server. This adds an extra layer of security for your website."))),(0,r.kt)("p",null,"By using a CNAME record to direct traffic through a WAF, you can leverage the security features of ",(0,r.kt)("strong",{parentName:"p"},"Haltdos Cloud WAF")," without having to modify your main website's infrastructure."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fdqn",src:o(10683).Z,width:"1381",height:"200"})),(0,r.kt)("h3",n({},{id:"steps-to-deploy-to-production"}),"Steps to deploy to production"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the existing A Record for the subdomain.\nDNS A-Record is an association of the subdomain with the backend server IP. For the safer side, it is recommended to keep a copy of the A record.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a CNAME record with minimum TTL for the same subdomain with the Protection FDQN provided by Haltdos when the listener for the subdomain was created. The Protection FDQN for a subdomain can be found under Go to stack >> Go to resource >> WAF >> Listeners. Note that it might take a few minutes, depending on the TTL that was set for the A record, for the DNS record to go live.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After validating the website after this process, you can change the TTL to the desired value."))))}m.isMDXComponent=!0},10683:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/fqdn-d68e10ced4884c5a7d44802d5e2a86f6.png"}}]);