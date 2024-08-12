"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[60027],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,k=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={sidebar_position:1},a="Geo Ip Fencing",s={unversionedId:"enterprise/llb/security/geo_ip_fencing",id:"enterprise/llb/security/geo_ip_fencing",title:"Geo Ip Fencing",description:"Geo Ip Fencing is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required.",source:"@site/docs/enterprise/llb/security/geo_ip_fencing.md",sourceDirName:"enterprise/llb/security",slug:"/enterprise/llb/security/geo_ip_fencing",permalink:"/v8/enterprise/llb/security/geo_ip_fencing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"llb_sidebar",previous:{title:"Security",permalink:"/v8/enterprise/llb/security/"},next:{title:"Port Filter",permalink:"/v8/enterprise/llb/security/port_filter"}},c={},p=[{value:"<strong>How to Use :</strong>",id:"how-to-use-",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"Temporary Blacklist Duration",id:"temporary-blacklist-duration",level:4},{value:"Bad Reputation Traffic",id:"bad-reputation-traffic",level:4},{value:"Tor Traffic",id:"tor-traffic",level:4},{value:"<strong>Inbound Blacklisted Countries</strong>",id:"inbound-blacklisted-countries",level:5},{value:"<strong>Outbound Blacklisted Countries</strong>",id:"outbound-blacklisted-countries",level:5},{value:"<strong>Blacklisted IP Prefixes</strong>",id:"blacklisted-ip-prefixes",level:5},{value:"<strong>Whitelisted IP Prefixes</strong>",id:"whitelisted-ip-prefixes",level:5},{value:"<strong>Blacklist Intel Feed</strong>",id:"blacklist-intel-feed",level:5},{value:"<strong>Whitelist Intel Feed</strong>",id:"whitelist-intel-feed",level:5}],u={toc:p},d="wrapper";function f(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)(d,i({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"geo-ip-fencing"}),"Geo Ip Fencing"),(0,n.kt)("p",null,"Geo Ip Fencing is an ability to filter out request coming from different geographical locations and taking actions to block the Country & IP address if required."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"geo_ip_fencing",src:r(58014).Z,width:"1425",height:"861"})),(0,n.kt)("h3",i({},{id:"how-to-use-"}),(0,n.kt)("strong",{parentName:"h3"},"How to Use :")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps > LLB > Security > Geo Ip Fencing"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the rule conditions and click on save changes."))),(0,n.kt)("h3",i({},{id:"description"}),(0,n.kt)("strong",{parentName:"h3"},"Description:")),(0,n.kt)("h4",i({},{id:"temporary-blacklist-duration"}),"Temporary Blacklist Duration"),(0,n.kt)("p",null,"This option allows users to configure the time period for which misbehaving IP addresses will be suspended."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 0\n")),(0,n.kt)("h4",i({},{id:"bad-reputation-traffic"}),"Bad Reputation Traffic"),(0,n.kt)("p",null,"This option allows users to specify the action from the drop-down menu on incoming traffic coming from suspicious IPs. There are 4 actions that can be performed for the traffic generated from bad reputation sources;"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: No Action / Record / Add Suspicion /  Drop\n\nDefault: Blank\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"No Action:")," This option will be performed for the TOR traffic."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Record:")," This option will record all request coming from TOR IPs"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Add Suspicion:")," This option will add suspicion for the packet, which will increase the packet scoring. The higher the packet score will tends to high chance of blocking that traffic."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Drop:")," This option will drop all the TOR traffic.")),(0,n.kt)("h4",i({},{id:"tor-traffic"}),"Tor Traffic"),(0,n.kt)("p",null,"This option allows users to specify the action from the drop-down menu to be performed on incoming TOR Network traffic. There are 4 actions that can be performed for the traffic generated from the Tor gateways;"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: No Action / Record / Add Suspicion /  Drop\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"inbound-blacklisted-countries"}),(0,n.kt)("strong",{parentName:"h5"},"Inbound Blacklisted Countries")),(0,n.kt)("p",null,"This option allows users to select the list of Inbound countries from the drop-down list that will be permanently disallowed. "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select Countries\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"outbound-blacklisted-countries"}),(0,n.kt)("strong",{parentName:"h5"},"Outbound Blacklisted Countries")),(0,n.kt)("p",null,"This option allows users to select the list of Outbound countries from the drop-down list that will be permanently disallowed."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select Countries\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"blacklisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklisted IP Prefixes")),(0,n.kt)("p",null,"This option allows users to specify multiple IP prefixes or IP address (With CIDR /32) that will be permanently disallowed."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP Prefixes\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"whitelisted-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelisted IP Prefixes")),(0,n.kt)("p",null,"This option allows users to specify multiple IP prefixes or IP address (With CIDR /32). Traffic to / from these IPs will permanently bypass all configured mitigation."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP Prefixes\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"blacklist-intel-feed"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklist Intel Feed")),(0,n.kt)("p",null,"This option allows users to configure and add custom threat intel to blacklist traffic generated from the IP addresses or prefixed."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select Intel feed\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"whitelist-intel-feed"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelist Intel Feed")),(0,n.kt)("p",null,"This option allows users to configure and add custom threat intel to whitelist traffic coming from those IP addresses or IP prefixes."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: Select Intel feed\n\nDefault: Blank\n")))}f.isMDXComponent=!0},58014:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/llb_geo_ip_fencing-7eb37b2789d7d9ef295c804a562a08f6.png"}}]);