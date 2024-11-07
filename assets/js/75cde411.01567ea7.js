/*! For license information please see 75cde411.01567ea7.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[5875],{33796:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/gslb/listener/geo_filtering","title":"Geo Filtering","description":"Geo Filtering on DNS traffic","source":"@site/versioned_docs/version-6.0/enterprise/gslb/listener/geo_filtering.md","sourceDirName":"enterprise/gslb/listener","slug":"/enterprise/gslb/listener/geo_filtering","permalink":"/v6/enterprise/gslb/listener/geo_filtering","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"gslb_sidebar","previous":{"title":"Operational","permalink":"/v6/enterprise/gslb/listener/operational"},"next":{"title":"Zones","permalink":"/v6/enterprise/gslb/listener/zones"}}');var n=i(74848),r=i(28453);const o={sidebar_position:1},l="Geo Filtering",a={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Blacklisted Countries",id:"blacklisted-countries",level:4},{value:"Whitelisted IP Prefixes",id:"whitelisted-ip-prefixes",level:4},{value:"Blacklisted IP Prefixes",id:"blacklisted-ip-prefixes",level:4},{value:"Use Cases",id:"use-cases",level:4}];function d(e){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"geo-filtering",children:"Geo Filtering"})}),"\n",(0,n.jsx)(t.p,{children:"Geo Filtering on DNS traffic"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Geo Filtering is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the Geo location techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geo -location also aids in content modification."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"geo_filtering",src:i(8418).A+"",width:"1851",height:"753"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to  ",(0,n.jsx)(t.strong,{children:"Stack"})," > ",(0,n.jsx)(t.strong,{children:"GSLB"})," > ",(0,n.jsx)(t.strong,{children:"Listener"})," > ",(0,n.jsx)(t.strong,{children:"Geo Filtering"})]}),"\n",(0,n.jsx)(t.li,{children:"Configure your settings."}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Configure the following parameters to set up the desired settings:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Accepted Vallue"}),(0,n.jsx)(t.th,{children:"Default Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklisted IP Prefixes"}),(0,n.jsx)(t.td,{children:"Specify the list of IPs that will be permanently disallowed from accessing the website.the website"}),(0,n.jsx)(t.td,{children:"IP"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Whitelisted IP Prefixes"}),(0,n.jsx)(t.td,{children:"Specify the list of IPs that will be permanently allowed for accessing the website."}),(0,n.jsx)(t.td,{children:"IP"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklisted Countries"}),(0,n.jsx)(t.td,{children:"Specify the list of countries that will be permanently disallowed from accessing  the website."}),(0,n.jsx)(t.td,{children:"Drop Down"}),(0,n.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.h4,{id:"blacklisted-countries",children:"Blacklisted Countries"}),"\n",(0,n.jsx)(t.p,{children:"To block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped."}),"\n",(0,n.jsx)(t.h4,{id:"whitelisted-ip-prefixes",children:"Whitelisted IP Prefixes"}),"\n",(0,n.jsx)(t.p,{children:"IP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction."}),"\n",(0,n.jsx)(t.h4,{id:"blacklisted-ip-prefixes",children:"Blacklisted IP Prefixes"}),"\n",(0,n.jsx)(t.p,{children:"IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently."}),"\n",(0,n.jsx)(t.h4,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(t.p,{children:"Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking."}),"\n",(0,n.jsx)(t.p,{children:"It is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well."}),"\n",(0,n.jsx)(t.p,{children:"Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious."}),"\n",(0,n.jsx)(t.p,{children:"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs."}),"\n",(0,n.jsx)(t.p,{children:"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actually they are not present there."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,t,i)=>{var s=i(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var s,r={},c=null,d=null;for(s in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,i)=>{e.exports=i(21020)},8418:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/geo-67e821f7285e65f0bbe097b5416367e1.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);