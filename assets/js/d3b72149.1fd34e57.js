"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[56005],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89802:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});a(67294);var n=a(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={sidebar_position:2},o="Scan Profiles",p={unversionedId:"cloud/scan/scan_profiles",id:"cloud/scan/scan_profiles",title:"Scan Profiles",description:"---",source:"@site/docs/cloud/scan/scan_profiles.md",sourceDirName:"cloud/scan",slug:"/cloud/scan/scan_profiles",permalink:"/haltdos-wiki/cloud/scan/scan_profiles",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"cloud_sidebar",previous:{title:"Overview",permalink:"/haltdos-wiki/cloud/scan/overview"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Scan Scope",id:"scan-scope",level:3},{value:"Scan Auth",id:"scan-auth",level:3},{value:"Scan Audit",id:"scan-audit",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Fingerprinting",id:"fingerprinting",level:3},{value:"Scan Types",id:"scan-types",level:3},{value:"Active Scans",id:"active-scans",level:4},{value:"Passive Scans",id:"passive-scans",level:4}],d={toc:s},c="wrapper";function m(t){var{components:e}=t,a=l(t,["components"]);return(0,n.kt)(c,r({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",r({},{id:"scan-profiles"}),"Scan Profiles"),(0,n.kt)("hr",null),(0,n.kt)("h2",r({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Haltdos Scanner supports multiple scan profiles per target application. A user can create a scan profile and use that to run multiple scans on target applications. The scan profile defines the scope of the security scan, authentication parameters for performing scanning as authenticated user and connection related settings to not overwhelm targeted applications."),(0,n.kt)("p",null,"A scan profile consists of the following specifications:"),(0,n.kt)("h3",r({},{id:"scan-scope"}),"Scan Scope"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope to HTTPS"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify if only HTTPs links to scan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Directory Depth Limit"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify the depth of Scan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Include Sub-Domains"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify if sub-domains are also included in the scan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Exclude Binaries"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify if binary files are excluded in the scan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Page Limit"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify the number of unique pages to scan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Dom Depth Limit"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify how deep to go into the DOM tree of each page, for pages with JavaScript code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Excluded Content Patterns"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Excludes pages whose content matches any of the given patterns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Excluded Path Patterns"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Excludes crawling and auditing URLs which match the given patterns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Included Path Patterns"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Only crawls and audits URLs matching the given patterns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Restrict Path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Uses the given paths instead of crawling.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Scope Extend Path"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Uses the provided list of paths to extend the scope of the crawl")))),(0,n.kt)("h3",r({},{id:"scan-auth"}),"Scan Auth"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Enter Url"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"The URL that contains the login form (URL).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Input field name for the username field"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Name of the username input field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Username"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Login username of your login module")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Input field name for the password field"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Name of your Password input field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Password"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Login password of your login module")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Enter Login Check"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"For example, if a logout link only appears when a user is logged in then it can be a perfect choice.")))),(0,n.kt)("h3",r({},{id:"scan-audit"}),"Scan Audit"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Forms"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Enable to evaluate forms during scanning")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Links"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Enable Audit links")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit UI Forms"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Evaluate UI forms during scanning")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit UI Input"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit orphan input elements with associated DOM events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Cookies"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Evaluate cookies during scanning")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Headers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Evaluate headers during scanning")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit JSON"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Enable Audit JSON inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit XMLs"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Enable Audit XML inputs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit With Both HTTP methods"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit elements with both GET and POST requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Cookies Extensively"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Submits all links and forms of the page along with the cookie permutations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Include Vector Pattern"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Only includes input vectors (parameters) whose name matches the given patterns in the audit.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Exclude Vector Pattern"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Excludes input vectors(parameters)whose name matches the given patterns from the audit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Audit Link Templates"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Regular expression with named captures to use to extract input information from generic paths.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add Form Key"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Form key")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add Form Value"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Form value")))),(0,n.kt)("h3",r({},{id:"connection-settings"}),"Connection Settings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Request Redirect Limit"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Limits the amount of total redirects to be followed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Request Concurrency"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Amount of requests to be active at any given time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Request Queue Size"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Maximum amount of HTTP requests to keep in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Request Timeout"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify request timeout value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Response Max Size"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify max response size to be evaluated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add Cookie Value"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify list of cookies to be specified during scan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Add Header Value"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify list of headers to be included during scan")))),(0,n.kt)("h3",r({},{id:"fingerprinting"}),"Fingerprinting"),(0,n.kt)("p",null,"Optimize Scan by restricting the scope to the technologies used by the target application"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"PARAMETER"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Operating System"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify the list of operating systems of Origin Servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Database"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify the list of databases used by target application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web Servers"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify the list of web servers used by target application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web Frameworks"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify the list of web frameworks (if any) used by target application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Programming Languages"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Specify the list of programming languages used by target application")))),(0,n.kt)("h3",r({},{id:"scan-types"}),"Scan Types"),(0,n.kt)("p",null,"Specify the types of scans to run. The scans can be of two types:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Active Scan"),(0,n.kt)("li",{parentName:"ol"},"Passive Scan")),(0,n.kt)("h4",r({},{id:"active-scans"}),"Active Scans"),(0,n.kt)("p",null,"Active Scan checks the following vulnerabilities during the scan"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code Injections"),(0,n.kt)("li",{parentName:"ul"},"CSRF"),(0,n.kt)("li",{parentName:"ul"},"File Inclusions"),(0,n.kt)("li",{parentName:"ul"},"LDAP Inclusions"),(0,n.kt)("li",{parentName:"ul"},"No SQL Injection"),(0,n.kt)("li",{parentName:"ul"},"OS Command Injection"),(0,n.kt)("li",{parentName:"ul"},"Path Traversal"),(0,n.kt)("li",{parentName:"ul"},"Response Splitting"),(0,n.kt)("li",{parentName:"ul"},"Source Code Disclosure"),(0,n.kt)("li",{parentName:"ul"},"SQL Injection"),(0,n.kt)("li",{parentName:"ul"},"Unvalidated Redirect"),(0,n.kt)("li",{parentName:"ul"},"XSS"),(0,n.kt)("li",{parentName:"ul"},"XML")),(0,n.kt)("h4",r({},{id:"passive-scans"}),"Passive Scans"),(0,n.kt)("p",null,"Passive Scan checks the following vulnerabilities during the scan"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check HTTP Methods"),(0,n.kt)("li",{parentName:"ul"},"Check for Backdoor"),(0,n.kt)("li",{parentName:"ul"},"Check File Directories"),(0,n.kt)("li",{parentName:"ul"},"Check Admin Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Check Files"),(0,n.kt)("li",{parentName:"ul"},"Check Cookies"),(0,n.kt)("li",{parentName:"ul"},"Check for information disclosure"),(0,n.kt)("li",{parentName:"ul"},"Check HTML issues"),(0,n.kt)("li",{parentName:"ul"},"Check CORS security"),(0,n.kt)("li",{parentName:"ul"},"Check Input forms"),(0,n.kt)("li",{parentName:"ul"},"Check Code Repository issues"),(0,n.kt)("li",{parentName:"ul"},"Check Access Policy"),(0,n.kt)("li",{parentName:"ul"},"Check HTTP Header security (HSTS policy)"),(0,n.kt)("li",{parentName:"ul"},"Check HTTP Response for miscellaneous disclosures")))}m.isMDXComponent=!0}}]);