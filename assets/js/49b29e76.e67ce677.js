"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[44148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},61861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={sidebar_position:2,sidebar_label:"Installation","hide-version-badge":!0},i="Haltdos PE WAF Setup",l={unversionedId:"professional/getting-started/installation",id:"professional/getting-started/installation",title:"Haltdos PE WAF Setup",description:"Step 1: Installation",source:"@site/docs/professional/getting-started/installation.md",sourceDirName:"professional/getting-started",slug:"/professional/getting-started/installation",permalink:"/v8/professional/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Installation","hide-version-badge":!0},sidebar:"professional_sidebar",previous:{title:"Pre-Requisites",permalink:"/v8/professional/getting-started/pre-requisites"},next:{title:"Overview",permalink:"/v8/professional/docs/overview"}},p={},c=[{value:"Step 1: Installation",id:"step-1-installation",level:3},{value:"Step 2: Setup Verification",id:"step-2-setup-verification",level:3},{value:"Step 3: Account Registration",id:"step-3-account-registration",level:3},{value:"Step 4: Accesing Haltdos Professional GUI",id:"step-4-accesing-haltdos-professional-gui",level:3}],d={toc:c},u="wrapper";function g(e){var{components:t}=e,o=s(e,["components"]);return(0,a.kt)(u,r({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"haltdos-pe-waf-setup"}),"Haltdos PE WAF Setup"),(0,a.kt)("h3",r({},{id:"step-1-installation"}),"Step 1: Installation"),(0,a.kt)("p",null,"Before we start, kindly update your system and install curl, if not installed.   "),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"sudo apt-get update\n")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"sudo apt-get install -y curl\n")),(0,a.kt)("p",null,"Download and install Haltdos Professional WAF edition using the installation script"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"curl -s -k -o setup.sh https://binary.haltdos.com/professional/waf/setup.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"chmod +x setup.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"sudo ./setup.sh\n")),(0,a.kt)("p",null,"The script will automatically download and prepare the system to run Haltdos Professional WAF."),(0,a.kt)("h3",r({},{id:"step-2-setup-verification"}),"Step 2: Setup Verification"),(0,a.kt)("p",null,"The setup script sets up three components of the Haltdos Professional WAF - "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Haltdos Professional GUI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Haltdos Professional WAF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Haltdos Metric Collector"),"  ")),(0,a.kt)("p",null,"After successful installation, you can verify the above services by running the commands below:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"sudo service controller status\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"haltdos",src:n(91387).Z,width:"847",height:"169"})),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"sudo service collector status\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"haltdos",src:n(8448).Z,width:"1213",height:"272"})),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"sudo service offloader status\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"haltdos",src:n(36379).Z,width:"1200",height:"82"})),(0,a.kt)("admonition",r({},{title:"Note ",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Haltdos Professional WAF Service")," at start will be at loaded state. It will be in active and running state, once the whole registration of the instance is done")),(0,a.kt)("h3",r({},{id:"step-3-account-registration"}),"Step 3: Account Registration"),(0,a.kt)("p",null,"After completing the setup verification step, you will be able to access the ",(0,a.kt)("strong",{parentName:"p"},"Haltdos Professional GUI")," at ",(0,a.kt)("strong",{parentName:"p"},"https://<SERVER_IP_ADDRESS>:9000")),(0,a.kt)("p",null,"After navigating to the IP, the below page will be displayed, where the user needs to enter their Email ID and click on the ",(0,a.kt)("strong",{parentName:"p"},"Next")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"step 1",src:n(72874).Z,width:"1884",height:"1002"})),(0,a.kt)("p",null,"After entering their email ID and clicking on the ",(0,a.kt)("strong",{parentName:"p"},"Next")," button, an OTP (One-Time Password) will be sent to user email address. User need to enter the six-digit code they received and click on the ",(0,a.kt)("strong",{parentName:"p"},"Next")," button to proceed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"step 2",src:n(33474).Z,width:"1884",height:"1002"})),(0,a.kt)("p",null,"Once the OTP verification process is complete, the below page will be displayed, where the user is required to enter their details such as full name, organization, etc., and click on the ",(0,a.kt)("strong",{parentName:"p"},"Next")," button."),(0,a.kt)("admonition",r({},{title:"Note ",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Haltdos WAF PE")," can be configured in multiple instances.\nIf the user is configuring another instance, they will be redirected to the Login Setup page, instead of the User Details Page, since their account already exists.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"step 3",src:n(5240).Z,width:"1892",height:"987"})),(0,a.kt)("p",null,"After the user has entered their details, user will be redirected to a payment gateway. A minimal amount transaction will take place to save the card, which will be refunded back by the card provider/bank. Card must be saved because Haltdos Professional WAF follows a usage based pricing. User will be charged at the end of the monthly billing period, based on the no. of requests that was processed by WAF in that billing period. User has to enter their credit card details and click on the ",(0,a.kt)("strong",{parentName:"p"},"Save Card")," button of the payment gateway."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"payment page",src:n(65960).Z,width:"1897",height:"974"})),(0,a.kt)("p",null,"Once the payment procedure is completed, the user will be prompted to enter their login details, which will enable them to access their account."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"step 4",src:n(5318).Z,width:"1892",height:"987"})),(0,a.kt)("p",null,"You have successfully subscribed to ",(0,a.kt)("strong",{parentName:"p"},"Haltdos Professional Edition")," and have registered your instance. You can verify your registration by checking if the Haltdos Professional WAF service is running."),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{}),"sudo service offloader status\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"haltdos",src:n(98193).Z,width:"854",height:"262"})),(0,a.kt)("admonition",r({},{title:"CAUTION",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"If the Professional WAF service is still shown as loaded and inactive, or if you face any other kind of issue, please contact ",(0,a.kt)("a",r({parentName:"p"},{href:"mailto:support@haltdos.com"}),(0,a.kt)("strong",{parentName:"a"},"Haltdos Support")))),(0,a.kt)("h3",r({},{id:"step-4-accesing-haltdos-professional-gui"}),"Step 4: Accesing Haltdos Professional GUI"),(0,a.kt)("p",null,"Login to the ",(0,a.kt)("strong",{parentName:"p"},"GUI Console"),", at ",(0,a.kt)("strong",{parentName:"p"},"https://<SERVER_IP_ADDRESS>:9000")," using the credentials provided during the step 4 of the registration process."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"login",src:n(98499).Z,width:"1892",height:"987"})),(0,a.kt)("p",null,"If provided login credentials are correct, you will be redirected to the Overview page, as visible below. Now you can start exploring ",(0,a.kt)("strong",{parentName:"p"},"Haltdos Professional WAF"),".  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"overview",src:n(22485).Z,width:"1892",height:"987"})),(0,a.kt)("admonition",r({},{title:"Note",type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Professional WAF Billing is a Monthly Subscription, whose billing period will start on the day of registering your first instance.")))}g.isMDXComponent=!0},8448:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/collector-c2897218c0c558695e8ddf1be2b2d26b.png"},91387:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/controller-31e410f509a65978ba178534ae2410cc.png"},98499:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/login-c20804d391908f2064b11a55961b7f90.png"},98193:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/offloader-a09964d647563566acb922b0e9f99481.png"},36379:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/offloader_status-872cb8bd790329f66ce424c8149ec079.png"},22485:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overview-0aeec48d6b0ecd735b68a1a48dd58371.png"},65960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/payment-13f68765fb94d63862bb97dfb6156658.png"},72874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step1-c50e680c526b28e3320264b1ce2d0b7e.png"},33474:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step2-ddb0c020a60e58935dcc534d712d7731.png"},5240:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step3-1310b3e8c3e6cb9025509ccf3ea784af.png"},5318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/step4-27307ac89b29d891f982ea9e15b0fc6c.png"}}]);