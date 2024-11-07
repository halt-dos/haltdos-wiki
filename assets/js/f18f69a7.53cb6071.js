/*! For license information please see f18f69a7.53cb6071.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[99477],{83637:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"cloud/waf/listener/security-profile/policy/web","title":"Web Policy","description":"Configure Web Security Policy for HTML based websites - Static, Dynamic, Wordpress, etc. The solution inspects various protocols (HTML v1, v2, v3, v4, v5), web sockets as well as MQTT to validate against RFC compliance, detect violations and perform mitigations.","source":"@site/versioned_docs/version-7.0/cloud/waf/listener/security-profile/policy/web.md","sourceDirName":"cloud/waf/listener/security-profile/policy","slug":"/cloud/waf/listener/security-profile/policy/web","permalink":"/v7/cloud/waf/listener/security-profile/policy/web","draft":false,"unlisted":false,"tags":[],"version":"7.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"cloud_sidebar","previous":{"title":"Policy","permalink":"/v7/cloud/waf/listener/security-profile/policy/"},"next":{"title":"JSON Policy","permalink":"/v7/cloud/waf/listener/security-profile/policy/json"}}');var n=t(74848),r=t(28453);const o={sidebar_position:1},l="Web Policy",d={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}];function a(e){const s={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"web-policy",children:"Web Policy"})}),"\n",(0,n.jsx)(s.p,{children:"Configure Web Security Policy for HTML based websites - Static, Dynamic, Wordpress, etc. The solution inspects various protocols (HTML v1, v2, v3, v4, v5), web sockets as well as MQTT to validate against RFC compliance, detect violations and perform mitigations."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(s.p,{children:"A web policy or policies are constraints or mandates in relation to technical constraints, legal, editorial, and compliance. Configure policies that HTTP(s) requests must conform to when requesting data from the backend web application."}),"\n",(0,n.jsx)(s.h3,{id:"how-to-use",children:"How to Use:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Go to ",(0,n.jsx)(s.strong,{children:"WAF > Zones > Listener > Security Profiles > Policy > Web Policy"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Configure your settings."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"SETTINGS"}),(0,n.jsx)(s.th,{children:"ACCEPTED VALUES"}),(0,n.jsx)(s.th,{children:"DEFAULT"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Maximum Allowed Header Fields"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"30"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Maximum Header Field Name Length"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"50"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Maximum Header Field Value Length"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"2048"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Allowed HTTP Methods"}),(0,n.jsx)(s.td,{children:"Specify the list of allowed HTTP methods"}),(0,n.jsx)(s.td,{children:"GET, HEAD, POST, DELETE, PUT, OPTIONS"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Allowed Mime Types"}),(0,n.jsx)(s.td,{children:"Specify the list of allowed HTTP mime type."}),(0,n.jsx)(s.td,{children:"application/json, application/octet-stream, application/soap+xml, application/x-www-form-urlencoded, application/xml, multipart/form-data, text/xml etc."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Web Extensions"}),(0,n.jsx)(s.td,{children:"Specify the list of extensions for which Human Authentication will be enabled."}),(0,n.jsx)(s.td,{children:"php, html, aspx, jsp"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Restricted Extensions"}),(0,n.jsx)(s.td,{children:"Specify the list of extensions that should be blocked."}),(0,n.jsx)(s.td,{children:"asa, asax, ascx, axd, backup etc."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Maximum HTTP Request Rate"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"100"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Maximum HTTP Request Burst"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"200"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Restricted File Upload"}),(0,n.jsx)(s.td,{children:"Specify the list of files that should be blocked."}),(0,n.jsx)(s.td,{children:"ex, sh, py, etc."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"X-Frame Options"}),(0,n.jsx)(s.td,{children:"Specify X-Frame Options"}),(0,n.jsx)(s.td,{children:"Disabled/Deny/Same Origin"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Captcha Validation Expiry"}),(0,n.jsx)(s.td,{children:"Specify the expiry time of captcha validation in seconds."}),(0,n.jsx)(s.td,{children:"86400"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CSRF"}),(0,n.jsx)(s.td,{children:"Boolean (True, False)"}),(0,n.jsx)(s.td,{children:"Boolean (True, False)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Immutable Cookie Validity"}),(0,n.jsx)(s.td,{children:"Integer"}),(0,n.jsx)(s.td,{children:"86400"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Cookie Name"}),(0,n.jsx)(s.td,{children:"Cookie Name"}),(0,n.jsx)(s.td,{children:"Empty"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enable Immutable (Cookie Signing)"}),(0,n.jsx)(s.td,{children:"Boolean (True, False)"}),(0,n.jsx)(s.td,{children:"False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enable HTTP Only Flag"}),(0,n.jsx)(s.td,{children:"Boolean (True, False)"}),(0,n.jsx)(s.td,{children:"False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Enable Secure Flag"}),(0,n.jsx)(s.td,{children:"Boolean (True, False)"}),(0,n.jsx)(s.td,{children:"False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Same Site"}),(0,n.jsx)(s.td,{children:"Choose from the dropdown (ex. NONE)"}),(0,n.jsx)(s.td,{children:"NONE"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Maximum Allowed Header Fields"})}),"\n",(0,n.jsx)(s.p,{children:"HTTP header fields provide necessary data about the request or response. It also provides the details about the object sent in the message body."}),"\n",(0,n.jsx)(s.p,{children:"This field specifies the maximum number of allowed HTTP header fields in the HTTP request header. If the header field exceeds, then the request gets dropped."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Maximum Header Field Name Length"})}),"\n",(0,n.jsx)(s.p,{children:"This field specifies the maximum allowed length of the HTTP header field name. If the header field name length exceeds the specified length then the request gets dropped."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Maximum Header Field Value Length"})}),"\n",(0,n.jsx)(s.p,{children:"This field specifies the maximum allowed length of the HTTP header field value. If the header field value length exceeds the specified length then the request gets dropped."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Allowed HTTP Methods"})}),"\n",(0,n.jsx)(s.p,{children:"HTTP methods are a set of common request methods for HTTP. These request methods indicate the specific action that you need to take care of a specific resource. Each of the request methods implements a different semantic. A group of these methods represents some common features. E.g. a request method can be safe, cacheable, or idempotent."}),"\n",(0,n.jsx)(s.p,{children:"We support the following HTTP Methods:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"GET: It requests a specified resource representation. It helps to retrieve data."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"HEAD: It inquires for a response identical to that of a GET request. It doesn't enquire the response body."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"POST: It helps to submit an entity to the desired resource. It often causes a change in state or side effects on the server."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"PUT: It exchanges all existing representations of the target resource with the request payload."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"DELETE: It helps to delete the specified resource"}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"OPTIONS: It helps to indicate the communication options for the target resource."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This field specifies all the allowed HTTP methods. If the request includes any methods other than the stated ones, then the request gets dropped."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Allowed Mime Types"})}),"\n",(0,n.jsx)(s.p,{children:"MIME Type, also known as media type or a Multipurpose Internet Mail Extensions is a standard that indicates both format and nature of a file, document, or bytes assortment."}),"\n",(0,n.jsx)(s.p,{children:"MIME-type helps browsers to determine how to process a URL. A browser must send an exact MIME type Content-Type header response. In case, it isn't configured correctly; the browser will misinterpret file content. The Website will not function properly, and there will be mishandling of downloaded files."}),"\n",(0,n.jsx)(s.p,{children:"This field specifies the list of the allowed HTTP MIME type. If the request contains any mime types other than specified ones, then the request gets dropped."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Restricted Extensions"})}),"\n",(0,n.jsx)(s.p,{children:"Restricted extensions are files that don't reside on a web server. This field specifies the list of extensions that should be blocked or restricted."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Restricted File Uploads"})}),"\n",(0,n.jsx)(s.p,{children:"Restricted file uploads restrict or block the request with a file that is malicious or corrupted based on the file extensions specified, such requests are dropped."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"X-Frame Options"})}),"\n",(0,n.jsx)(s.p,{children:"X-frame is used for adding a header to stop clickjacking. Clickjacking is an interface-based attack in which a user is tricked into clicking on actionable content on a hidden website by clicking on some other content in a decoy website."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Captcha Validation Expiry"})}),"\n",(0,n.jsx)(s.p,{children:"In order to protect the web application from automated attacks. Captcha is used to validate the user but its validity is set in seconds for which the captcha will be valid."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"CSRF"})}),"\n",(0,n.jsx)(s.p,{children:"Cross-Site Request Forgery (CSRF) is an attack-type in which a malicious blog, email, instant message, or program causes a browser of the user to execute an unwanted action on a trusted site in case of user authentication. Enable cookie-based CSRF protection for incoming HTTP requests."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Secure Cookies"})}),"\n",(0,n.jsx)(s.p,{children:"An HTTP cookie, also known as a browser cookie or web cookie is a small data piece that a server sends to the web browser of the user. A browser can store it and send it back to the same server with the next request. It tells whether the two requests are coming from the same browser. It reminisces accurate data for the stateless HTTP protocol.\r\nThree primary purposes of cookies:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Session management"}),": Games scores, shopping carts, logins, or anything else the server should remember."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Personalization"}),": Themes, user preferences, and other settings."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Tracking"}),": User behavior recording and analyzing.\r\nCookies are primarily for session management. Attackers try to steal its data for session hijacking. Parameters to consider while securing cookie:"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Cookie Name"}),": This field specifies the cookie name for which you need to apply the policies."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Enable Immutable"})," (Cookie Signing): This field allows you to ensure that the specified cookie remains unchanged by the client. Any request with a modified cookie value gets rejected."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Enable HTTP Only Flag"}),": This field prevents the client-side script from accessing and manipulating the cookie."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Enable Secure Flag"}),": This field allows you to ensure that the cookie is only sent over a secured HTTPS channel."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Same Site"}),": This field doesn't allow the browser to send this cookie along with cross-site requests. The main goal is to mitigate the risk of cross-origin data leakage. Even, it protects against cross-site request forgery attacks."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"STRICT"})," - This value ensures the cookie is not being sent to the target site in all cross-site browsing contexts."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"LAX"})," - This value provides both security and usability to the sites that need to manage the user's logged-in session once the user login from an external link."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE"})," - This value specifies no action would be taken, and cookies will be allowed to pass to an external site."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},21020:(e,s,t)=>{var i=t(96540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var i,r={},c=null,a=null;for(i in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)o.call(s,i)&&!d.hasOwnProperty(i)&&(r[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===r[i]&&(r[i]=s[i]);return{$$typeof:n,type:e,key:c,ref:a,props:r,_owner:l.current}}s.Fragment=r,s.jsx=c,s.jsxs=c},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>l});var i=t(96540);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);