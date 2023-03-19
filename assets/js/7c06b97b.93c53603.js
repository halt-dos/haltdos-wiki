"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[31681],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(m,l(l({ref:e},c),{},{components:n})):r.createElement(m,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73345:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={sidebar_position:3},i="Backup Policy",s={unversionedId:"enterprise/platform/stacks/instance/backuppolicy",id:"enterprise/platform/stacks/instance/backuppolicy",title:"Backup Policy",description:"Integration with FTP server for backing up and restoration",source:"@site/docs/enterprise/platform/stacks/instance/backuppolicy.md",sourceDirName:"enterprise/platform/stacks/instance",slug:"/enterprise/platform/stacks/instance/backuppolicy",permalink:"/enterprise/platform/stacks/instance/backuppolicy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"Analytics",permalink:"/enterprise/platform/stacks/instance/analytics"},next:{title:"VRRP",permalink:"/enterprise/platform/stacks/instance/vrrp"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Description",id:"description",level:2}],u={toc:c},d="wrapper";function k(t){var{components:e}=t,l=o(t,["components"]);return(0,r.kt)(d,a({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"backup-policy"}),"Backup Policy"),(0,r.kt)("p",null,"Integration with FTP server for backing up and restoration"),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos supports periodic or on-demand backup for storing logs and policies to external FTP / SFTP servers. The platform also supports restoring from FTP if needed.\nBy default, Haltdos retains logs locally on the device for a duration of 90 days. This duration can be increased to at most 550 days depending upon organization policy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," It is recommended to configure periodic backup to avoid data loss and ensure log availability for compliance and forensic examination"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backup Policy",src:n(27297).Z,width:"1864",height:"862"})),(0,r.kt)("p",null,"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > > Backup Policy")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"PARAMETERS"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"ACCEPTED VALUES"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Log Retention Period"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"90 days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Backup Enabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Master")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Cleanup Enabled"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Backup Host Name"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Drop-down"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Master")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Use SFTP"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Authentication"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Username"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Password"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Integer & String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Backup Directory"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Empty")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Log Retention Period")),(0,r.kt)("p",null,"This policy allows users to set the retention period for backups. This policy refers to the number of days for which logs retain locally on the device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup Enabled")),(0,r.kt)("p",null,"This option allows users to enable or disable the backup settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cleanup Enabled")),(0,r.kt)("p",null,"This option allows users to enable or disable the backup settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup Host Name")),(0,r.kt)("p",null,"This option allows users to specify the hostname or IP address of the backup server. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use SFTP")),(0,r.kt)("p",null,"This option helps to choose if the user wants data transfer is over SFTP (Port 22), otherwise data will transfer using FTP (Port 21). Users can enable or disable the settings as per their chioce. By default, it is set to disable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authentication")),(0,r.kt)("p",null,"This option allows users to set a user authentication method to access the backup server. By default, this is set to disable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Username"),"\nUsers can only use this option when Authentication is set to enable. This option allows users to set a username to authenticate the people"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Password"),"\nThis option allows users to set the desired password to authenticate the user. This option will only be available when authentication is set to enable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup Directory"),"\nThis option allows users to specify the directory on the backup server where they can use credential information to access the backup server."))}k.isMDXComponent=!0},27297:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/backup-76b442df931ea93d761797ae23c1c251.png"}}]);