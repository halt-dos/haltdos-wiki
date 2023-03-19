"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[6680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var l=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,f=m["".concat(u,".").concat(c)]||m[c]||s[c]||n;return r?l.createElement(f,i(i({ref:t},d),{},{components:r})):l.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<n;p++)i[p]=r[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},67112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});r(67294);var l=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2},o="Form Rule",u={unversionedId:"enterprise/waf/listener/profiles/rules/form_rules",id:"version-6.0/enterprise/waf/listener/profiles/rules/form_rules",title:"Form Rule",description:"Overview",source:"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/rules/form_rules.md",sourceDirName:"enterprise/waf/listener/profiles/rules",slug:"/enterprise/waf/listener/profiles/rules/form_rules",permalink:"/v6/enterprise/waf/listener/profiles/rules/form_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"Error Rules",permalink:"/v6/enterprise/waf/listener/profiles/rules/error_rules"},next:{title:"Firewall Rule",permalink:"/v6/enterprise/waf/listener/profiles/rules/firewall_rules"}},p={},d=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"Request Validation",id:"request-validation",level:4},{value:"Field Validation",id:"field-validation",level:4},{value:"Accepted Values:",id:"accepted-values",level:4}],m={toc:d},s="wrapper";function c(e){var{components:t}=e,i=n(e,["components"]);return(0,l.kt)(s,a({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",a({},{id:"form-rule"}),"Form Rule"),(0,l.kt)("h3",a({},{id:"overview"}),"Overview"),(0,l.kt)("p",null,"Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form.\n",(0,l.kt)("img",{alt:"Form Page Screen",src:r(24593).Z,width:"1603",height:"812"})),(0,l.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Follow the links: ",(0,l.kt)("strong",{parentName:"li"},"WAF")," > ",(0,l.kt)("strong",{parentName:"li"},"Listener")," >  ",(0,l.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,l.kt)("strong",{parentName:"li"},"Rules")," > ",(0,l.kt)("strong",{parentName:"li"},"Form Rules"),"."),(0,l.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,l.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Parameters"),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Accepted value"),(0,l.kt)("th",a({parentName:"tr"},{align:null}),"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Rule Name"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Rule Message"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Rule Priority"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"URI"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Method"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"All")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Request Validation"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Value"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Field Name"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Field Type"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Field Value"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,l.kt)("td",a({parentName:"tr"},{align:null}),"Blank")))),(0,l.kt)("h3",a({},{id:"description"}),"Description"),(0,l.kt)("h4",a({},{id:"rule-name"}),"Rule Name"),(0,l.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,l.kt)("h4",a({},{id:"rule-message"}),"Rule Message"),(0,l.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,l.kt)("h4",a({},{id:"rule-priority"}),"Rule Priority"),(0,l.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,l.kt)("h4",a({},{id:"uri"}),"URI"),(0,l.kt)("p",null,"Users are allowed to specify the URI of the form for which the form validation rule will be applied. The request to specified URI will only be validated.\nExample:  /login"),(0,l.kt)("h4",a({},{id:"http-method"}),"HTTP Method"),(0,l.kt)("p",null,"Specify the HTTP method on which the rule will be applied. All the HTTP methods are supported like GET, POST, PUT, DELETE, OPTIONS, HEAD.\nBy clicking on the Request Validation and Field Validation tab, the end-user can add the validation according to a particular set value."),(0,l.kt)("h4",a({},{id:"request-validation"}),"Request Validation"),(0,l.kt)("p",null,"Specify the type of validation to be implemented by selecting the validation type from the drop-down list."),(0,l.kt)("p",null,"Accepted Values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Minimum Request Size - Specify the minimum size of the request."),(0,l.kt)("li",{parentName:"ul"},"Maximum Request Size - Specify the maximum size of the request."),(0,l.kt)("li",{parentName:"ul"},"Minimum Header Count - Specify the minimum header count of the request."),(0,l.kt)("li",{parentName:"ul"},"Maximum Header Count - Specify the maximum header count of the request."),(0,l.kt)("li",{parentName:"ul"},"Minimum Body Length - Specify the minimum body length of the request."),(0,l.kt)("li",{parentName:"ul"},"Maximum Body length - Specify the maximum body length of the request."),(0,l.kt)("li",{parentName:"ul"},"Maximum Header length - Specify the maximum header length of the request."),(0,l.kt)("li",{parentName:"ul"},"Maximum Header Value length - Specify the maximum header value length of the request.")),(0,l.kt)("h4",a({},{id:"field-validation"}),"Field Validation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Field Name")," - Specify the name of the form field which you want the form validation rule to validate.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Field Type")," - Select the type of the form field which you want the form validation rule to validate.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Field Value")," - Select the value of the form field which you want the form validation rule to validate."))),(0,l.kt)("h4",a({},{id:"accepted-values"}),"Accepted Values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Field Type")," - Users can specify the field type selection in the adjacent drop-down select the required field type (Integer, String, Email, etc)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Min Value")," - Users can specify the minimum value accepted  by that field. On Selecting Field Type in the adjacent drop-down enter the minimum value of the form field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Max Value")," - Users can specify the maximum value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum value of the form field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Min File Size")," - Users can specify the minimum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum file size for the form field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Max File Size")," - Users can specify the maximum file size accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum file size for the form field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Allowed File Extension")," - Users can specify the file extension which will be allowed with a request which could be restricted. On Selecting Field Type in the adjacent drop-down enter the file extensions allowed for the form field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Min Length")," - Users can specify the minimum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the minimum length of the value of the form field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Max Length")," - Users can specify the maximum length of the value accepted by that form field. On Selecting Field Type in the adjacent drop-down enter the maximum length of the value of the form field.")))}c.isMDXComponent=!0},24593:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/form_page-7d6df932f4a4eecef84e5342a9ae1838.png"}}]);