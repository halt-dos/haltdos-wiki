/*! For license information please see 92038d68.42da773b.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[32831],{4719:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"enterprise/waf/listener/profiles/geo_filtering","title":"Geo Filtering","description":"Overview","source":"@site/versioned_docs/version-6.0/enterprise/waf/listener/profiles/geo_filtering.md","sourceDirName":"enterprise/waf/listener/profiles","slug":"/enterprise/waf/listener/profiles/geo_filtering","permalink":"/v6/enterprise/waf/listener/profiles/geo_filtering","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"waf_sidebar","previous":{"title":"Settings","permalink":"/v6/enterprise/waf/listener/profiles/settings"},"next":{"title":"Antivirus","permalink":"/v6/enterprise/waf/listener/profiles/anti_virus"}}');var n=i(74848),r=i(28453);const o={sidebar_position:2},l="Geo Filtering",a={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Use Cases",id:"use-cases",level:4}];function d(e){const t={br:"br",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"geo-filtering",children:"Geo Filtering"})}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Geo-filtering"})," is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.\r\nOur solution restricts user's based upon BlackListed IP Prefixes and Countries. It also allows permanently to access website through WhiteListed IP Prefixes."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"geo-filtering",src:i(15431).A+"",width:"1521",height:"450"})}),"\n",(0,n.jsx)(t.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Go to WAF > Listener > Security Profiles > Geo Filtering."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Click on Save Changes."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameters"}),(0,n.jsx)(t.th,{children:"Accepted Values"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklist Countries"}),(0,n.jsx)(t.td,{children:"Drop-Down"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Whitelist IP Prefixes"}),(0,n.jsx)(t.td,{children:"Drop-Down"}),(0,n.jsx)(t.td,{children:"Blank"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blacklist IP Prefixes"}),(0,n.jsx)(t.td,{children:"Drop-Down"}),(0,n.jsx)(t.td,{children:"Blank"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["1.",(0,n.jsx)(t.strong,{children:"Blacklist Countries:"}),"\r\nThis section specify the list of countries that will be permanently disallowed from accessing the website. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped."]}),"\n",(0,n.jsxs)(t.p,{children:["2.",(0,n.jsx)(t.strong,{children:"Whitelist IP Prefixes:"}),"\r\nThis section specify the list of IPs that will be permanently allowed for accessing the website. IP whitelisting is when you grant network access only to specific IP addresses."]}),"\n",(0,n.jsxs)(t.p,{children:["3.",(0,n.jsx)(t.strong,{children:"Blacklist IP Prefixes:"}),"\r\nThis section specify the list of IPs that will be permanently disallowed from accessing the website. IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block."]}),"\n",(0,n.jsx)(t.h4,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsxs)(t.p,{children:["Try to understand the concept of geo-filtering through some real-world based example. If your product is single-country based, for example, India. Geo-filtering provides feature to block or blacklist the IPs of other countries and only give access within India.",(0,n.jsx)(t.br,{}),"\n","The other condition is that you are not dealing with foreign clients but using online services or technology that is present outside of India like web hosting and webmail. In this case, allow such services through the Firewall."]}),"\n",(0,n.jsx)(t.p,{children:"Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking.\r\nIt is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well."}),"\n",(0,n.jsx)(t.p,{children:"Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious."}),"\n",(0,n.jsx)(t.p,{children:"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs."}),"\n",(0,n.jsx)(t.p,{children:"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actuality, they are not present there."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,t,i)=>{var s=i(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var s,r={},c=null,d=null;for(s in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:n,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,i)=>{e.exports=i(21020)},15431:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/geo_filtering-7f1315dd0404acc5bd8ac1c7a6bd4076.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);