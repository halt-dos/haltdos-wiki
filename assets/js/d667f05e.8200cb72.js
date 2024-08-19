"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[38396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={sidebar_position:2},l="LDAP",p={unversionedId:"enterprise/platform/system/management/ad",id:"enterprise/platform/system/management/ad",title:"LDAP",description:"Integration with organizaion's active directory for user management.",source:"@site/docs/enterprise/platform/system/management/ad.md",sourceDirName:"enterprise/platform/system/management",slug:"/enterprise/platform/system/management/ad",permalink:"/enterprise/platform/system/management/ad",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"platform_sidebar",previous:{title:"Administrators",permalink:"/enterprise/platform/system/management/administrators"},next:{title:"RADIUS server",permalink:"/enterprise/platform/system/management/radius"}},s={},c=[{value:"<strong>Active Directory Authentication Enabled</strong>",id:"active-directory-authentication-enabled",level:5},{value:"<strong>Endpoint</strong>",id:"endpoint",level:5},{value:"<strong>Domain</strong>",id:"domain",level:5},{value:"<strong>RootdN</strong>",id:"rootdn",level:5}],m={toc:c},u="wrapper";function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)(u,a({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"ldap"}),"LDAP"),(0,r.kt)("p",null,"Integration with organizaion's active directory for user management."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Haltdos Platform supports integration with Active directory authentication mechanism. Users are allowed to check and configure the remote authentication for the users of Haltdos web UI console. After enabling the AD server under Remote Authentication menu, users are allowed to login on the Haltdos Management Console using their AD credential."),(0,r.kt)("admonition",a({},{title:"Info",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"If your organization is using Active Directory (AD), it is recommended to integrate Haltdos solutions for user management with AD.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"activedirectory",src:n(86972).Z,width:"1902",height:"900"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to  ",(0,r.kt)("strong",{parentName:"p"},"Administrator")," (Present at the Top Right Side)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"System"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"User Setting"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Active Directory"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure  ",(0,r.kt)("strong",{parentName:"p"},"Active Directory Settings"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes")),(0,r.kt)("h3",a({parentName:"li"},{id:"description"}),"Description"))),(0,r.kt)("h5",a({},{id:"active-directory-authentication-enabled"}),(0,r.kt)("strong",{parentName:"h5"},"Active Directory Authentication Enabled")),(0,r.kt)("p",null,"Enable login through Active Directory"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("h5",a({},{id:"endpoint"}),(0,r.kt)("strong",{parentName:"h5"},"Endpoint")),(0,r.kt)("p",null,"Specify the endpoint of Active Directory.\t"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank \n")),(0,r.kt)("h5",a({},{id:"domain"}),(0,r.kt)("strong",{parentName:"h5"},"Domain")),(0,r.kt)("p",null,"Specify the domain of Active Directory.\t"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: haltdos \n")),(0,r.kt)("h5",a({},{id:"rootdn"}),(0,r.kt)("strong",{parentName:"h5"},"RootdN")),(0,r.kt)("p",null,"Specify the RootdN of Active Directory"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: haltdos\n")))}d.isMDXComponent=!0},86972:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap-ea5490b86c4fb14ae4fc151703ee01b3.png"}}]);