/*! For license information please see 36dd4d85.82b85726.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[85617],{23164:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"enterprise/gslb/listener/zones","title":"Zones","description":"Creation of DNS zones and records in GSLB","source":"@site/versioned_docs/version-7.0/enterprise/gslb/listener/zones.md","sourceDirName":"enterprise/gslb/listener","slug":"/enterprise/gslb/listener/zones","permalink":"/v7/enterprise/gslb/listener/zones","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"gslb_sidebar","previous":{"title":"Geo Filtering","permalink":"/v7/enterprise/gslb/listener/geo_filtering"},"next":{"title":"Monitors","permalink":"/v7/enterprise/gslb/listener/monitors"}}');var t=s(74848),i=s(28453);const d={sidebar_position:2},o="Zones",c={},l=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Records",id:"records",level:3},{value:"Overview",id:"overview",level:3},{value:"Types of DNS Records :",id:"types-of-dns-records-",level:4},{value:"Creating A Record",id:"creating-a-record",level:4},{value:"Configurable Fields",id:"configurable-fields",level:4}];function a(e){const r={br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"zones",children:"Zones"})}),"\n",(0,t.jsx)(r.p,{children:"Creation of DNS zones and records in GSLB"}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.p,{children:"Zones provide you an opportunity to create and manage domains. End users can also choose a list of Apps they want to configure for that root domain. DNS Service type should be Authoritative."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"zones",src:s(46399).A+"",width:"1837",height:"666"})}),"\n",(0,t.jsx)(r.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to  ",(0,t.jsx)(r.strong,{children:"Apps"})," > ",(0,t.jsx)(r.strong,{children:"GSLB"})," > ",(0,t.jsx)(r.strong,{children:"Listener"})," > ",(0,t.jsx)(r.strong,{children:"Zones"})]}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Add Zone"})," button."]}),"\n",(0,t.jsx)(r.li,{children:"Configure your settings."}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h3,{id:"records",children:"Records"}),"\n",(0,t.jsx)(r.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(r.p,{children:"A DNS Record is a database entry that maps a URL to a specified IP address. These records are then stored in the DNS Servers, which can be accessed by different users globally using the URL address. When you search the URL, the browser forwards the URL to the DNS server, and it redirects you to the specific Web server. This web server then serves the site or directs the user to an email server that takes care of the incoming mail."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"records",src:s(46399).A+"",width:"1837",height:"666"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Zone Name"}),(0,t.jsx)(r.br,{}),"\n","Specify to respond with refuse on queries with no RD flag."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: String\n\n    Default: Blank\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"DNSSEC"}),(0,t.jsx)(r.br,{}),"\n","Specify to respond with refuse on queries with no RD flag."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"    Accepted values: Enable / Disable\n\n    Default: Disable\n"})}),"\n",(0,t.jsx)(r.h4,{id:"types-of-dns-records-",children:"Types of DNS Records :"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Record Type"}),(0,t.jsx)(r.th,{children:"Common Name"}),(0,t.jsx)(r.th,{children:"Purpose"}),(0,t.jsx)(r.th,{children:"Value"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"A"}),(0,t.jsx)(r.td,{children:"IPv4 Address Mapping Records"}),(0,t.jsx)(r.td,{children:"Maps domain names to IPv4 addresses"}),(0,t.jsx)(r.td,{children:"[IPv4 Address]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"AAAA"}),(0,t.jsx)(r.td,{children:"IPv6 Address Mapping Records"}),(0,t.jsx)(r.td,{children:"Maps domain names to IPv6 addresses."}),(0,t.jsx)(r.td,{children:"[IPv6 Address]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CAA"}),(0,t.jsx)(r.td,{children:"CAA (Certificate Authority Authorization records)"}),(0,t.jsx)(r.td,{children:"Check CAA value to ensure that only certain certificate authorities are allowed to issue valid certificates."}),(0,t.jsx)(r.td,{children:"[Flag(0-255)] [Tag(issue/issuewild/iode)] [Certificate Authority Provider]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CNAME"}),(0,t.jsx)(r.td,{children:"Canonical Name Records"}),(0,t.jsx)(r.td,{children:"Maps one domain name to another, map multiple domains to one IP address or routing external domains."}),(0,t.jsx)(r.td,{children:"[Fully Qualified Domain Name]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"CERT"}),(0,t.jsx)(r.td,{children:"Certificate  Record"}),(0,t.jsx)(r.td,{children:"Certificates Record specifies  the authenticity of the sending and receiving parties."}),(0,t.jsx)(r.td,{children:"[Type] [Key-Tag] [Algorithm Code] [Base 64 Encoded Certificate Data]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PTR"}),(0,t.jsx)(r.td,{children:"Pointer Record"}),(0,t.jsx)(r.td,{children:"PTR records provide specifies that the given hostname or a domain are connected to the IP address."}),(0,t.jsx)(r.td,{children:"[Fully Qualified Domain Name]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"MX"}),(0,t.jsx)(r.td,{children:"Mail Exchange Records"}),(0,t.jsx)(r.td,{children:"Specifies a mail exchange server address."}),(0,t.jsx)(r.td,{children:"[Priority] [Fully Qualified Domain Name]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TXT"}),(0,t.jsx)(r.td,{children:"Text Record"}),(0,t.jsx)(r.td,{children:"Stores strings of information in DNS."}),(0,t.jsx)(r.td,{children:"[Enclosed text in quotation marks]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SRV"}),(0,t.jsx)(r.td,{children:"Service Record"}),(0,t.jsx)(r.td,{children:"Points one domain to another domain name using a specific destination port."}),(0,t.jsx)(r.td,{children:"[Priority] [Weight] [Port] [Fully Qualified Domain Name]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"NS"}),(0,t.jsx)(r.td,{children:"Name server"}),(0,t.jsx)(r.td,{children:"Points to the authoritative server for the domain"}),(0,t.jsx)(r.td,{children:"[Fully Qualified Domain Name]"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"SOA"}),(0,t.jsx)(r.td,{children:"Start of Authority"}),(0,t.jsx)(r.td,{children:"Stores important information about a domain such as email address of the administrator, when the domain was last updated, and how long the server should wait between refreshes etch."}),(0,t.jsx)(r.td,{children:"[MNAME] [RNAME] [Serial] [Refresh] [Retry] [Expire] [TTL]"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"creating-a-record",children:"Creating A Record"}),"\n",(0,t.jsx)(r.p,{children:"The process is quite intuitive. Steps included:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Go to ",(0,t.jsx)(r.strong,{children:"Apps"})," > ",(0,t.jsx)(r.strong,{children:"GSLB"})," > ",(0,t.jsx)(r.strong,{children:"Zones"})," > ",(0,t.jsx)(r.strong,{children:"Records."})]}),"\n",(0,t.jsxs)(r.li,{children:["Click On ",(0,t.jsx)(r.strong,{children:"Add Record"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"Configure your settings."}),"\n",(0,t.jsxs)(r.li,{children:["Click ",(0,t.jsx)(r.strong,{children:"Create Record"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"configurable-fields",children:"Configurable Fields"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Record Name"}),": Specify the name for your DNS record. It helps in easy identification of the record. It can be empty also."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Record Type:"})," Specify the type of record. You can select record type from the drop-down list."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Time to Live (TTL):"})," Specify the duration of the DNS record on the server in minutes, hour, day."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"LB Algorithm:"})," Specify the algorithm."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Monitors:"})," Users can specify the monitors for the zone."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Record Value"}),": Specify the value for the record type. Refer to the table for the format of the desired record type."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Back-up Record Value:"})," Specify the value for the record type you want to maintain back-up. As in Substitute."]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,r,s)=>{var n=s(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var n,i={},l=null,a=null;for(n in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)d.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:l,ref:a,props:i,_owner:o.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},74848:(e,r,s)=>{e.exports=s(21020)},46399:(e,r,s)=>{s.d(r,{A:()=>n});const n=s.p+"assets/images/zones-cc0cc97a9e89e7b2bad21d1cc33b5b08.png"},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>o});var n=s(96540);const t={},i=n.createContext(t);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);