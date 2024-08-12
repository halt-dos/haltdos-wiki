"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[60215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={sidebar_position:2},a="Geo Filtering",l={unversionedId:"enterprise/waf/listener/profiles/geo_filtering",id:"enterprise/waf/listener/profiles/geo_filtering",title:"Geo Filtering",description:"Overview",source:"@site/docs/enterprise/waf/listener/profiles/geo_filtering.md",sourceDirName:"enterprise/waf/listener/profiles",slug:"/enterprise/waf/listener/profiles/geo_filtering",permalink:"/v8/enterprise/waf/listener/profiles/geo_filtering",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"Settings",permalink:"/v8/enterprise/waf/listener/profiles/settings"},next:{title:"Antivirus",permalink:"/v8/enterprise/waf/listener/profiles/anti_virus"}},c={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Blacklist Countries</strong>",id:"blacklist-countries",level:5},{value:"<strong>Whitelist IP Prefixes</strong>",id:"whitelist-ip-prefixes",level:5},{value:"<strong>Blacklist IP Prefixes</strong>",id:"blacklist-ip-prefixes",level:5},{value:"Use Cases",id:"use-cases",level:4}],p={toc:u},f="wrapper";function d(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)(f,i({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",i({},{id:"geo-filtering"}),"Geo Filtering"),(0,n.kt)("h3",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Geo-filtering")," is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.\nOur solution restricts user's based upon Blacklisted IP Prefixes and Countries. It also allows permanently to access website through Whitelisted IP Prefixes.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Geo-filtering",src:r(29819).Z,width:"1910",height:"900"}),"  "),(0,n.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Geo Filtering"),"."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.  ")),(0,n.kt)("h3",i({},{id:"description"}),"Description"),(0,n.kt)("h5",i({},{id:"blacklist-countries"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklist Countries")),(0,n.kt)("p",null,"This section specify the list of countries that will be permanently disallowed from accessing the website. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.  "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: list of country as per ISO 3166-1 alpha-2 standard 2 letter country-code.\n\nDefault: Blank\n")),(0,n.kt)("h5",i({},{id:"whitelist-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Whitelist IP Prefixes")),(0,n.kt)("p",null,"This section specify the list of IPs that will be permanently allowed for accessing the website. IP whitelisting is when you grant network access only to specific IP addresses.  "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP prefix\n\nDefault: Blank\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"IP Prefix")," refers to a portion of an IP address that indicates the network or subnet to which the IP address belongs. (For example, 192.168.0.0/24 or 2001:0db8:85a3::/64.)"),(0,n.kt)("h5",i({},{id:"blacklist-ip-prefixes"}),(0,n.kt)("strong",{parentName:"h5"},"Blacklist IP Prefixes")),(0,n.kt)("p",null,"This section specify the list of IPs that will be permanently disallowed from accessing the website. IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block."),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{}),"Accepted values: IP prefix\n\nDefault: Blank\n")),(0,n.kt)("h4",i({},{id:"use-cases"}),"Use Cases"),(0,n.kt)("p",null,"Try to understand the concept of geo-filtering through some real-world based example. If your product is single-country based, for example, India. Geo-filtering provides feature to block or blacklist the IPs of other countries and only give access within India.",(0,n.kt)("br",{parentName:"p"}),"\n","The other condition is that you are not dealing with foreign clients but using online services or technology that is present outside of India like web hosting and webmail. In this case, allow such services through the Firewall.  "),(0,n.kt)("p",null,"Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking.\nIt is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well."),(0,n.kt)("p",null,"Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious."),(0,n.kt)("p",null,"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs."),(0,n.kt)("p",null,"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actuality, they are not present there."))}d.isMDXComponent=!0},29819:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geoFiltering-45d290a1dbfc3dd629e698d60f54d70e.png"}}]);