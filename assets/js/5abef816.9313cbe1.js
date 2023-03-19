"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[40854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,m=c["".concat(p,".").concat(d)]||c[d]||h[d]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2},o="Firewall Rules",p={unversionedId:"cloud/waf/listener/security-profile/rules/firewall",id:"version-6.0/cloud/waf/listener/security-profile/rules/firewall",title:"Firewall Rules",description:"These rules (Negative Security Model) allow you to create custom security rules as per application logic",source:"@site/versioned_docs/version-6.0/cloud/waf/listener/security-profile/rules/firewall.md",sourceDirName:"cloud/waf/listener/security-profile/rules",slug:"/cloud/waf/listener/security-profile/rules/firewall",permalink:"/v6/cloud/waf/listener/security-profile/rules/firewall",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"cloud_sidebar",previous:{title:"Form Validation",permalink:"/v6/cloud/waf/listener/security-profile/rules/form"},next:{title:"Rate Limiting",permalink:"/v6/cloud/waf/listener/security-profile/rules/limiting"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],c={toc:s},h="wrapper";function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(h,a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"firewall-rules"}),"Firewall Rules"),(0,n.kt)("p",null,"These rules (Negative Security Model) allow you to create custom security rules as per application logic"),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User."),(0,n.kt)("p",null,"The following actions are available to the User :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"DROP REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"TEMPORARY BLACKLIST")," - If the request satisfies the rule, then the user is temporarily blacklisted.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SEND CHALLENGE")," - If the request satisfies the rule, then the user receives a challenge like a captcha.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SKIP LEARNING")," - If the request satisfies the rule, then no learning will be performed on the current request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request."))),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Security Profiles > Rules > Firewall Rules"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," Button and a pop-up box will open.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the fields that are present.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")," and the rule will be reflected."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Configurable Fields")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"DESCRIPTION"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name For the Configured Rule"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name eg. Example Rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Description For the Rule"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Brief Description eg. This Rule is used for Allowing Example API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Priority for the rule"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Integer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Action that should be performed when the Rule Condition is Satisfied"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Any action from the Drop Down List")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Specific URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URI on which this Rule has to be applied"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Valid URI eg. /login")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Choose from the dropdown (eg. Get)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down List")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Pattern"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The Pattern to be searched at the specified location."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match Condition"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Choose from the dropdown (eg. pattern match)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Drop Down List")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Location"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Location of the entity"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Any value from the Drop Down List")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Value"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Value at the Location that has to be checked"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The Value that you want to match at the specific location")))),(0,n.kt)("h4",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Name")),(0,n.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Message")),(0,n.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Priority")),(0,n.kt)("p",null,"Specify the priority for the rule for execution when matched with the request."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Action")),(0,n.kt)("p",null,"Specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Specific URI")),(0,n.kt)("p",null,"Specify the URI on which the firewall rule will be applied."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example")," /login")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Method")),(0,n.kt)("p",null,"Specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Match Pattern")),(0,n.kt)("p",null,"Specify the keyword to match when the rule is invoked. The entered value can be a regex pattern."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Match Condition")),(0,n.kt)("p",null,"This dropdown allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add Location")),(0,n.kt)("p",null,"Specify the location and value for which the firewall rule will be applicable."))}d.isMDXComponent=!0}}]);