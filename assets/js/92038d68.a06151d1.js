"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[84588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={sidebar_position:2},s="Geo Filtering",l={unversionedId:"enterprise/waf/listener/profiles/geo_filtering",id:"version-6.0/enterprise/waf/listener/profiles/geo_filtering",title:"Geo Filtering",description:"Overview",source:"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/geo_filtering.md",sourceDirName:"enterprise/waf/listener/profiles",slug:"/enterprise/waf/listener/profiles/geo_filtering",permalink:"/haltdos-wiki/v6/enterprise/waf/listener/profiles/geo_filtering",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"waf_sidebar",previous:{title:"Settings",permalink:"/haltdos-wiki/v6/enterprise/waf/listener/profiles/settings"},next:{title:"Antivirus",permalink:"/haltdos-wiki/v6/enterprise/waf/listener/profiles/anti_virus"}},c={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Use Cases",id:"use-cases",level:4}],p={toc:u},d="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(d,i({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"geo-filtering"}),"Geo Filtering"),(0,r.kt)("h3",i({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geo-filtering")," is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.\nOur solution restricts user's based upon BlackListed IP Prefixes and Countries. It also allows permanently to access website through WhiteListed IP Prefixes.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"geo-filtering",src:n(57810).Z,width:"1521",height:"450"}),"  "),(0,r.kt)("h3",i({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to WAF > Listener > Security Profiles > Geo Filtering."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on Save Changes.  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Parameters"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Accepted Values"),(0,r.kt)("th",i({parentName:"tr"},{align:null}),"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Blacklist Countries"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Whitelist IP Prefixes"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Blacklist IP Prefixes"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Drop-Down"),(0,r.kt)("td",i({parentName:"tr"},{align:null}),"Blank")))),(0,r.kt)("h3",i({},{id:"description"}),"Description"),(0,r.kt)("p",null,"1.",(0,r.kt)("strong",{parentName:"p"},"Blacklist Countries:"),"\nThis section specify the list of countries that will be permanently disallowed from accessing the website. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.  "),(0,r.kt)("p",null,"2.",(0,r.kt)("strong",{parentName:"p"},"Whitelist IP Prefixes:"),"\nThis section specify the list of IPs that will be permanently allowed for accessing the website. IP whitelisting is when you grant network access only to specific IP addresses.  "),(0,r.kt)("p",null,"3.",(0,r.kt)("strong",{parentName:"p"},"Blacklist IP Prefixes:"),"\nThis section specify the list of IPs that will be permanently disallowed from accessing the website. IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block.  "),(0,r.kt)("h4",i({},{id:"use-cases"}),"Use Cases"),(0,r.kt)("p",null,"Try to understand the concept of geo-filtering through some real-world based example. If your product is single-country based, for example, India. Geo-filtering provides feature to block or blacklist the IPs of other countries and only give access within India.",(0,r.kt)("br",{parentName:"p"}),"\n","The other condition is that you are not dealing with foreign clients but using online services or technology that is present outside of India like web hosting and webmail. In this case, allow such services through the Firewall.  "),(0,r.kt)("p",null,"Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking.\nIt is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well."),(0,r.kt)("p",null,"Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious."),(0,r.kt)("p",null,"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs."),(0,r.kt)("p",null,"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actuality, they are not present there."))}f.isMDXComponent=!0},57810:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/geo_filtering-7f1315dd0404acc5bd8ac1c7a6bd4076.png"}}]);