"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[95223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:7},o="Deception Rules",p={unversionedId:"cloud/waf/listener/security-profile/rules/deception",id:"cloud/waf/listener/security-profile/rules/deception",title:"Deception Rules",description:"Deception provides an alternative approach for security that can deliver a useful additional layer of protection.",source:"@site/docs/cloud/waf/listener/security-profile/rules/deception.md",sourceDirName:"cloud/waf/listener/security-profile/rules",slug:"/cloud/waf/listener/security-profile/rules/deception",permalink:"/haltdos-wiki/cloud/waf/listener/security-profile/rules/deception",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"cloud_sidebar",previous:{title:"Correlation Rules",permalink:"/haltdos-wiki/cloud/waf/listener/security-profile/rules/correlation"},next:{title:"Developer Script",permalink:"/haltdos-wiki/cloud/waf/listener/security-profile/rules/developer-scripts"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],c={toc:u},d="wrapper";function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(d,a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"deception-rules"}),"Deception Rules"),(0,n.kt)("p",null,"Deception provides an alternative approach for security that can deliver a useful additional layer of protection."),(0,n.kt)("hr",null),(0,n.kt)("h2",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Deception strategies will be implemented as a deception rule. This rule is capable of generating and injecting deception data automatically into HTTP traffic."),(0,n.kt)("p",null,"The goal of deception is to deceive and manipulate attackers inducing them to take actions that result in blocking the requests coming from them."),(0,n.kt)("p",null,"The attacker should believe that fake parameters are genuine and really belong to the real application and should try to modify them in a malicious way."),(0,n.kt)("p",null,"The rule will have to do the following : "),(0,n.kt)("p",null,"Intercept ",(0,n.kt)("strong",{parentName:"p"},"HTTP")," responses of the original application and inject fake parameters before delivering the response to the client. The possible fake parameter values will try to have attractive names and values."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"GET")," requests, the parameters will be added to existing ",(0,n.kt)("inlineCode",{parentName:"li"},"<a href>")," link values."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"POST")," requests, the parameters will be added as hidden input type parameters of existing forms.")),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listener > Security Profiles > Rules > Deception Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described in the table below.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name eg. Example Rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Brief Description eg. This Rule is used for Allowing Example API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Match URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Rule Action"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"RECORD/DROP/TEMPORARY BLACKLIST/SKIP LEARNING"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"RECORD")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Smoke URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"URI"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Dropdown"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"GET")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Fields"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,n.kt)("h4",a({},{id:"description"}),"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Name"),": Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Message"),": Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Match URI"),": Specify the URI to match with the rule to invoke the action accordingly."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Action"),": Action that should be performed when the Rule Condition is Satisfied. The valid values for action are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"DROP"),": If the rule matches then drop the request.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RECORD"),": If the rule matches then put the request in record mode.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"BYPASS"),": If the rule matches put the request in BYPASS mode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"TEMPORARY BLACKLIST"),": If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SEND CHALLENGE"),": If the rule matches then send a captcha challenge to the user to validate the user is human or bot. And if the challenge fails then temporarily blacklist the user and if temp. Blacklist duration Is 0 then send him a challenge unless he passes the challenge, or the challenge duration expires.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SKIP LEARNING"),": If the rule matches then no learning will be performed on the current request."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Smoke URI"),": Specify the smoke URI for the rule. The smoke URI will be the one that could be used by attackers to attack."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Methods"),": Specify the HTTP methods for the rule to be created."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fields"),": Specify the fields for which the rule will be applicable."))}m.isMDXComponent=!0}}]);