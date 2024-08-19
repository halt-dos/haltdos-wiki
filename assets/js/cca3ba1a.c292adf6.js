"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[16518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={sidebar_position:1},s="WEB Policy",l={unversionedId:"enterprise/waf/listener/profiles/policy/web_policy",id:"version-7.0/enterprise/waf/listener/profiles/policy/web_policy",title:"WEB Policy",description:"Configure Web Security Policy for HTML based websites - , Dynamic, Wordpress, etc.",source:"@site/versioned_docs/version-7.0/enterprise/waf/listener/profiles/policy/web_policy.md",sourceDirName:"enterprise/waf/listener/profiles/policy",slug:"/enterprise/waf/listener/profiles/policy/web_policy",permalink:"/v7/enterprise/waf/listener/profiles/policy/web_policy",draft:!1,tags:[],version:"7.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"waf_sidebar",previous:{title:"Policy",permalink:"/v7/enterprise/waf/listener/profiles/policy/"},next:{title:"JSON Policy",permalink:"/v7/enterprise/waf/listener/profiles/policy/json_policy"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Maximum Allowed Header Fields</strong>",id:"maximum-allowed-header-fields",level:5},{value:"<strong>Maximum Header Field Name Length</strong>",id:"maximum-header-field-name-length",level:5},{value:"<strong>Maximum Header Field Value Length</strong>",id:"maximum-header-field-value-length",level:5},{value:"<strong>Allowed HTTP Methods</strong>",id:"allowed-http-methods",level:5},{value:"<strong>Allowed MIME Types</strong>",id:"allowed-mime-types",level:5},{value:"<strong>Web Extensions</strong>",id:"web-extensions",level:5},{value:"<strong>Restricted Extention</strong>",id:"restricted-extention",level:5},{value:"<strong>Restricted File Upload</strong>",id:"restricted-file-upload",level:5},{value:"<strong>X-FRAME OPTIONS</strong>",id:"x-frame-options",level:5},{value:"<strong>CAPTCHA VALIDATION EXPIRY</strong>",id:"captcha-validation-expiry",level:5},{value:"<strong>CSRF</strong>",id:"csrf",level:5},{value:"<strong>Immutable Cookie Validity</strong>",id:"immutable-cookie-validity",level:5}],d={toc:c},u="wrapper";function h(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)(u,a({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"web-policy"}),"WEB Policy"),(0,r.kt)("p",null,"Configure Web Security Policy for HTML based websites - , Dynamic, Wordpress, etc."),(0,r.kt)("hr",null),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"A web policy or policies are constraints or mandates in relation to technical constraints, legal, editorial, and compliance. Configure policies that HTTP(s) requests must conform to when requesting data from the backend web application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Web Policy",src:n(35556).Z,width:"1835",height:"883"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"webpolicy",src:n(4354).Z,width:"1573",height:"535"})),(0,r.kt)("h3",a({},{id:"how-to-use"}),"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"Web Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h5",a({},{id:"maximum-allowed-header-fields"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Allowed Header Fields")),(0,r.kt)("p",null,"HTTP header fields provide necessary data about the request or response. It also provides the details about the object sent in the message body.\nThis field specifies the maximum number of allowed HTTP header fields in the HTTP request header. If the header field exceeds, then the request gets dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 128\n\nMin: 1\n\nDefault: 30  \n")),(0,r.kt)("h5",a({},{id:"maximum-header-field-name-length"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Header Field Name Length")),(0,r.kt)("p",null,"This field specifies the maximum allowed length of the HTTP header field name. If the header field name length exceeds the specified length then the request gets dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 4096\n\nMin: 4\n\nDefault: 50   \n")),(0,r.kt)("h5",a({},{id:"maximum-header-field-value-length"}),(0,r.kt)("strong",{parentName:"h5"},"Maximum Header Field Value Length")),(0,r.kt)("p",null,"This field specifies the maximum allowed length of the HTTP header field value. If the header field value length exceeds the specified length then the request gets dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer \n\nMax: 8192\n\nMin: 4\n\nDefault: 2048  \n")),(0,r.kt)("h5",a({},{id:"allowed-http-methods"}),(0,r.kt)("strong",{parentName:"h5"},"Allowed HTTP Methods")),(0,r.kt)("p",null,"HTTP Methods are a set of common request methods for HTTP. These request methods indicate the specific action that you need to take care of a specific resource. Each of the request methods implements a different semantic. A group of these methods represents some common features. E.g. a request method can be safe, cache-able, or idempotent.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Any HTTP Method\n\nDefault: GET / PUST / POST / DELETE / HEAD / OPTIONS   \n")),(0,r.kt)("p",null,"We support the following HTTP Methods:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"GET"),":  It requests a specified resource representation. It helps to retrieve data."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HEAD"),":  It inquires for a response identical to that of a GET request. It doesn't enquire the response body."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"POST"),":  It helps to submit an entity to the desired resource. It often causes a change in state or side effects on the server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"PUT"),":  It exchanges all existing representations of the target resource with the request payload."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"DELETE"),":  It helps to delete the specified resource"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"OPTIONS"),":  It helps to indicate the communication options for the target resource.\nThis field specifies all the allowed HTTP methods. If the request includes any methods other than the stated ones, then the request gets dropped.")),(0,r.kt)("h5",a({},{id:"allowed-mime-types"}),(0,r.kt)("strong",{parentName:"h5"},"Allowed MIME Types")),(0,r.kt)("p",null,"MIME Type, also known as media type or a Multipurpose Internet Mail Extensions is a standard that indicates both format and nature of a file, document, or bytes assortment.\nMIME-type helps browsers to determine how to process a URL. A browser must send an exact MIME type Content-Type header response. In case, it isn't configured correctly; the browser will misinterpret file content. The Website will not function properly, and there will be mishandling of downloaded files.\nThis field specifies the list of the allowed HTTP MIME type. If the request contains any mime types other than specified ones, then the request gets dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Any HTTP MIME Type\n\nDefault: application/x-www-form-urlencoded / multipart/fprm-data / text/xml / application/xml / application/soap+xml / application/x-amf / application/json / application/octet-stream / text/plain / text/html  \n")),(0,r.kt)("h5",a({},{id:"web-extensions"}),(0,r.kt)("strong",{parentName:"h5"},"Web Extensions")),(0,r.kt)("p",null,"Users are allowed to specify the list of extensions for which Human Authentication will be enabled."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Any web extension \n\nDefault: php / html / aspx / jsp  \n")),(0,r.kt)("h5",a({},{id:"restricted-extention"}),(0,r.kt)("strong",{parentName:"h5"},"Restricted Extention")),(0,r.kt)("p",null,"Restricted extensions are files that don't reside on a web server. This field specifies the list of extensions that should be blocked or restricted."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Any extension user want to restrict.\n\nDefault: asa / asax / ascx / axd / backup / bak / bat / cdx / cer / cfg / cmd / com / config / conf / cs / csproj / csr / dat / db / dbf / dos / htr / htw / ida / idc / idq / inc / ini / key / licx / link / log / mdb / old / pass / pdb / pol / printer / pwd / resources / resx / sql / sys / vb / vbs / vbproj / csdisco / webinfo / xsd / xsx / exe / dll / git / sh   \n")),(0,r.kt)("h5",a({},{id:"restricted-file-upload"}),(0,r.kt)("strong",{parentName:"h5"},"Restricted File Upload")),(0,r.kt)("p",null,"Restricted file uploads restrict or block the request with a file that is malicious or corrupted based on the file extensions specified, such requests are dropped."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Any file type user want to restrict.\n\nDefault: exe / sh / py / bak / wsf / bin / jar / bat / apk / sav / xml / sql / tar / mp3 / mp4 / csv / asp / cer / cgi / rss / ppt / pdf / doc / docx / pptx / html / odp / txt / log / mdp / php \n")),(0,r.kt)("h5",a({},{id:"x-frame-options"}),(0,r.kt)("strong",{parentName:"h5"},"X-FRAME OPTIONS")),(0,r.kt)("p",null,"X-frame is used for adding a header to stop clickjacking. Clickjacking is an interface-based attack in which a user is tricked into clicking on actionable content on a hidden website by clicking on some other content in a decoy website."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: DISABLED / DENY / SAME ORIGIN \n\nDefault: DISABLED   \n")),(0,r.kt)("h5",a({},{id:"captcha-validation-expiry"}),(0,r.kt)("strong",{parentName:"h5"},"CAPTCHA VALIDATION EXPIRY")),(0,r.kt)("p",null,"In order to protect the web application from automated attacks. Captcha is used to validate the user but its validity is set in seconds for which the captcha will be valid."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 86400\n\nMetrics: Seconds  \n")),(0,r.kt)("h5",a({},{id:"csrf"}),(0,r.kt)("strong",{parentName:"h5"},"CSRF")),(0,r.kt)("p",null,"Cross-Site Request Forgery (CSRF) is an attack-type in which a malicious blog, email, instant message, or program causes a browser of the user to execute an unwanted action on a trusted site in case of user authentication. Enable cookie-based CSRF protection for incoming HTTP requests."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable  \n")),(0,r.kt)("h5",a({},{id:"immutable-cookie-validity"}),(0,r.kt)("strong",{parentName:"h5"},"Immutable Cookie Validity")),(0,r.kt)("p",null,"An HTTP cookie, also known as a browser cookie or web cookie is a small data piece that a server sends to the web browser of the user. A browser can store it and send it back to the same server with the next request. It tells whether the two requests are coming from the same browser. It reminisces accurate data for the stateless HTTP protocol.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Integer\n\nDefault: 86400\n\nMetrics: Seconds  \n")),(0,r.kt)("p",null,"Three primary purposes of cookies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Session management"),": Games scores, shopping carts, logins, or anything else the server should remember."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Personalization"),": Themes, user preferences, and other settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tracking"),": User behavior recording and analyzing.  ")),(0,r.kt)("p",null,"Cookies are primarily for session management. Attackers try to steal its data for session hijacking. Parameters to consider while securing cookie:",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("strong",{parentName:"p"},"Cookie Name"),": This field specifies the cookie name for which you need to apply the policies.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'Accepted values: String / Integer\n\nDefault: "Enter Cookie Name" \n')),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Enable Immutable (Cookie Signing)"),": This field allows you to ensure that the specified cookie remains unchanged by the client. Any request with a modified cookie value gets rejected.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Enable HTTP Only Flag"),": This field prevents the client-side script from accessing and manipulating the cookie.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Enable Secure Flag"),": This field allows you to ensure that the cookie is only sent over a secured HTTPS channel.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: Enable / Disable\n\nDefault: Disable \n")),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Same Site"),": This field doesn't allow the browser to send this cookie along with cross-site requests. The main goal is to mitigate the risk of cross-origin data leakage. Even, it protects against cross-site request forgery attacks.  "),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"Accepted values: NONE / STRICT / LAX\n\nDefault: NONE \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STRICT")," - This value ensures the cookie is not being sent to the target site in all cross-site browsing contexts.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LAX")," - This value provides both security and usability to the sites that need to manage the user's logged-in session once the user login from an external link.")),(0,r.kt)("admonition",a({},{title:"Note",type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"This value specifies no action would be taken, and cookies will be allowed to pass to an external site.")))}h.isMDXComponent=!0},35556:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/profile_webpolicy-5c23374400e3c2126a1df936782e7829.png"},4354:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/profile_webpolicy1-5f58d8315f9bdbae23b049e9820427c7.png"}}]);