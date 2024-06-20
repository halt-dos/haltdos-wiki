"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[98276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,f=u["".concat(i,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},19075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={sidebar_position:3},l="Backup Policy",i={unversionedId:"enterprise/platform/system/instance/backuppolicy",id:"version-7.0/enterprise/platform/system/instance/backuppolicy",title:"Backup Policy",description:"Integration with FTP server and S3 for backing up",source:"@site/versioned_docs/version-7.0/enterprise/platform/system/instance/backuppolicy.md",sourceDirName:"enterprise/platform/system/instance",slug:"/enterprise/platform/system/instance/backuppolicy",permalink:"/enterprise/platform/system/instance/backuppolicy",draft:!1,tags:[],version:"7.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform_sidebar",previous:{title:"Analytics",permalink:"/enterprise/platform/system/instance/analytics"},next:{title:"Monitor",permalink:"/enterprise/platform/system/instance/monitor"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:4},{value:"Description",id:"description",level:2}],u={toc:c},d="wrapper";function k(e){var{components:t}=e,s=o(e,["components"]);return(0,r.kt)(d,a({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"backup-policy"}),"Backup Policy"),(0,r.kt)("p",null,"Integration with FTP server and S3 for backing up"),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Haltdos supports periodic or on-demand backup for storing logs and policies to external FTP / SFTP servers and S3 storage. The platform also supports restoring from FTP if needed.\nBy default, Haltdos retains logs locally on the device for a duration of 90 days. This duration can be increased to at most 550 days depending upon organization policy."),(0,r.kt)("admonition",a({},{title:"Note ",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"It is recommended to configure periodic backup to avoid data loss and ensure log availability for compliance and forensic examination")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backup Policy1",src:n(36914).Z,width:"1908",height:"805"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Backup Policy2",src:n(78099).Z,width:"1891",height:"963"})),(0,r.kt)("h4",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack")," > ",(0,r.kt)("strong",{parentName:"li"},"Instances")," > ",(0,r.kt)("strong",{parentName:"li"},"Backup Policy")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Log Retention Period")),(0,r.kt)("p",null,"This policy allows users to set the retention period for backups. This policy refers to the number of days for which logs retain locally on the device."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 2 \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cleanup Enabled")),(0,r.kt)("p",null,"This option allows users to enable or disable the backup settings."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FTP Backup Enabled")),(0,r.kt)("p",null,"This option allows users to enable or disable the backup settings."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FTP Backup Host Name")),(0,r.kt)("p",null,"This option allows users to specify the hostname or IP address of the backup server. "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SFTP Enabled")),(0,r.kt)("p",null,"This option helps to choose if the user wants data transfer is over SFTP (Port 22), otherwise data will transfer using FTP (Port 21). Users can enable or disable the settings as per their chioce. By default, it is set to disable."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FTP Authentication")),(0,r.kt)("p",null,"This option allows users to set a user authentication method to access the backup server. By default, this is set to disable."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FTP Username"),"\nUsers can only use this option when Authentication is set to enable. This option allows users to set a username to authenticate the people"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FTP Password"),"\nThis option allows users to set the desired password to authenticate the user. This option will only be available when authentication is set to enable."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FTP Backup Directory"),"\nThis option allows users to specify the directory on the backup server where they can use credential information to access the backup server."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"S3 Backup Enabled"),"\nThis option allows users to enable or disable if the date transfer is over S3."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enabled / Disabled\n\nDefault: Disabled\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"S3 Region"),"\nThis option allows users to specify the AWS region where the S3 bucket is located."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"S3 Bucket Name"),"\nThis option allows users to specify the container for storing objects in S3."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"S3 Path"),"\nThis option allows users to specify the directory path for storing logs in S3."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"S3 Access Key"),"\nThis option allows users to specify the unique identifier of the user or application making the request."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"S3 Secret Key"),"\nThis option allows users to specify the security credential to access the S3 service."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")))}k.isMDXComponent=!0},36914:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/backup1-fea5bbf2ce54e90d9b6e0a200c56ebc5.png"},78099:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/backup2-2f7841dd66565965a2e4c9970c411ac6.png"}}]);