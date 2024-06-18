"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[44768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_position:2},l="Zones",s={unversionedId:"enterprise/gslb/listener/zones",id:"version-7.0/enterprise/gslb/listener/zones",title:"Zones",description:"Creation of DNS zones and records in GSLB",source:"@site/versioned_docs/version-7.0/enterprise/gslb/listener/zones.md",sourceDirName:"enterprise/gslb/listener",slug:"/enterprise/gslb/listener/zones",permalink:"/enterprise/gslb/listener/zones",draft:!1,tags:[],version:"7.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gslb_sidebar",previous:{title:"Geo Filtering",permalink:"/enterprise/gslb/listener/geo_filtering"},next:{title:"Monitors",permalink:"/enterprise/gslb/listener/monitors"}},p={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Records",id:"records",level:3},{value:"Overview",id:"overview",level:3},{value:"Types of DNS Records :",id:"types-of-dns-records-",level:4},{value:"Creating A Record",id:"creating-a-record",level:4},{value:"Configurable Fields",id:"configurable-fields",level:4}],u={toc:d},c="wrapper";function m(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(c,a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"zones"}),"Zones"),(0,n.kt)("p",null,"Creation of DNS zones and records in GSLB"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Zones provide you an opportunity to create and manage domains. End users can also choose a list of Apps they want to configure for that root domain. DNS Service type should be Authoritative.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"zones",src:r(45168).Z,width:"1837",height:"666"})),(0,n.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to  ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Zones")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Zone")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("hr",null),(0,n.kt)("h3",a({},{id:"records"}),"Records"),(0,n.kt)("h3",a({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"A DNS Record is a database entry that maps a URL to a specified IP address. These records are then stored in the DNS Servers, which can be accessed by different users globally using the URL address. When you search the URL, the browser forwards the URL to the DNS server, and it redirects you to the specific Web server. This web server then serves the site or directs the user to an email server that takes care of the incoming mail."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"records",src:r(45168).Z,width:"1837",height:"666"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Zone Name"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify to respond with refuse on queries with no RD flag.  "),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: String\n\nDefault: Blank\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DNSSEC"),(0,n.kt)("br",{parentName:"p"}),"\n","Specify to respond with refuse on queries with no RD flag.  "),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable\n")),(0,n.kt)("h4",a({},{id:"types-of-dns-records-"}),"Types of DNS Records :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Record Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Common Name"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Purpose"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"A"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"IPv4 Address Mapping Records"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Maps domain names to IPv4 addresses"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[IPv4 Address]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"AAAA"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"IPv6 Address Mapping Records"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Maps domain names to IPv6 addresses."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[IPv6 Address]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"CAA"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"CAA (Certificate Authority Authorization records)"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Check CAA value to ensure that only certain certificate authorities are allowed to issue valid certificates."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Flag(0-255)][Tag(issue/issuewild/iode)]"," ","[Certificate Authority Provider]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"CNAME"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Canonical Name Records"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Maps one domain name to another, map multiple domains to one IP address or routing external domains."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Fully Qualified Domain Name]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"CERT"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Certificate  Record"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Certificates Record specifies  the authenticity of the sending and receiving parties."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Type][Key-Tag]"," ","[Algorithm Code][Base 64 Encoded Certificate Data]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"PTR"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Pointer Record"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"PTR records provide specifies that the given hostname or a domain are connected to the IP address."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Fully Qualified Domain Name]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"MX"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Mail Exchange Records"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Specifies a mail exchange server address."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Priority][Fully Qualified Domain Name]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"TXT"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Text Record"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Stores strings of information in DNS."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Enclosed text in quotation marks]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SRV"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Service Record"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Points one domain to another domain name using a specific destination port."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Priority][Weight]"," ","[Port][Fully Qualified Domain Name]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"NS"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Name server"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Points to the authoritative server for the domain"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[Fully Qualified Domain Name]")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"SOA"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Start of Authority"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Stores important information about a domain such as email address of the administrator, when the domain was last updated, and how long the server should wait between refreshes etch."),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[MNAME][RNAME]"," ","[Serial][Refresh]"," ","[Retry][Expire]"," ","[TTL]")))),(0,n.kt)("h4",a({},{id:"creating-a-record"}),"Creating A Record"),(0,n.kt)("p",null,"The process is quite intuitive. Steps included: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Apps")," > ",(0,n.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,n.kt)("strong",{parentName:"li"},"Zones")," > ",(0,n.kt)("strong",{parentName:"li"},"Records.")),(0,n.kt)("li",{parentName:"ol"},"Click On ",(0,n.kt)("strong",{parentName:"li"},"Add Record"),". "),(0,n.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create Record"),".")),(0,n.kt)("h4",a({},{id:"configurable-fields"}),"Configurable Fields"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Record Name"),": Specify the name for your DNS record. It helps in easy identification of the record. It can be empty also. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Record Type:")," Specify the type of record. You can select record type from the drop-down list."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Time to Live (TTL):")," Specify the duration of the DNS record on the server in minutes, hour, day."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"LB Algorithm:")," Specify the algorithm."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Monitors:")," Users can specify the monitors for the zone."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Record Value"),": Specify the value for the record type. Refer to the table for the format of the desired record type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Back-up Record Value:")," Specify the value for the record type you want to maintain back-up. As in Substitute."))}m.isMDXComponent=!0},45168:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/zones-cc0cc97a9e89e7b2bad21d1cc33b5b08.png"}}]);