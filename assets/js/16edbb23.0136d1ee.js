/*! For license information please see 16edbb23.0136d1ee.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[8372],{5489:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"getting-started/installation","title":"Haltdos PE WAF Setup","description":"Step 1: Installation","source":"@site/professional/getting-started/installation.md","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/professional/getting-started/installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Installation","hide-version-badge":true},"sidebar":"professional_sidebar","previous":{"title":"Pre-Requisites","permalink":"/professional/getting-started/pre-requisites"},"next":{"title":"Overview","permalink":"/professional/docs/overview"}}');var i=s(74848),r=s(28453);const o={sidebar_position:2,sidebar_label:"Installation","hide-version-badge":!0},a="Haltdos PE WAF Setup",l={},d=[{value:"Step 1: Installation",id:"step-1-installation",level:3},{value:"Step 2: Setup Verification",id:"step-2-setup-verification",level:3},{value:"Step 3: Account Registration",id:"step-3-account-registration",level:3},{value:"Step 4: Accesing Haltdos Professional GUI",id:"step-4-accesing-haltdos-professional-gui",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"haltdos-pe-waf-setup",children:"Haltdos PE WAF Setup"})}),"\n",(0,i.jsx)(t.h3,{id:"step-1-installation",children:"Step 1: Installation"}),"\n",(0,i.jsx)(t.p,{children:"Before we start, kindly update your system and install curl, if not installed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo apt-get update\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo apt-get install -y curl\n"})}),"\n",(0,i.jsx)(t.p,{children:"Download and install Haltdos Professional WAF edition using the installation script"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"curl -s -k -o setup.sh https://binary.haltdos.com/professional/waf/setup.sh\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"chmod +x setup.sh\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo ./setup.sh\n"})}),"\n",(0,i.jsx)(t.p,{children:"The script will automatically download and prepare the system to run Haltdos Professional WAF."}),"\n",(0,i.jsx)(t.h3,{id:"step-2-setup-verification",children:"Step 2: Setup Verification"}),"\n",(0,i.jsx)(t.p,{children:"The setup script sets up three components of the Haltdos Professional WAF -"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Haltdos Professional GUI"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Haltdos Professional WAF"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Haltdos Metric Collector"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After successful installation, you can verify the above services by running the commands below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo service controller status\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"haltdos",src:s(77574).A+"",width:"847",height:"169"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo service collector status\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"haltdos",src:s(2817).A+"",width:"1213",height:"272"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo service offloader status\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"haltdos",src:s(41681).A+"",width:"1200",height:"82"})}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Haltdos Professional WAF Service"})," at start will be at loaded state. It will be in active and running state, once the whole registration of the instance is done"]})}),"\n",(0,i.jsx)(t.h3,{id:"step-3-account-registration",children:"Step 3: Account Registration"}),"\n",(0,i.jsxs)(t.p,{children:["After completing the setup verification step, you will be able to access the ",(0,i.jsx)(t.strong,{children:"Haltdos Professional GUI"})," at ",(0,i.jsx)(t.strong,{children:"https://SERVER_IP_ADDRESS:9000"})]}),"\n",(0,i.jsxs)(t.p,{children:["After navigating to the IP, the below page will be displayed, where the user needs to enter their Email ID and click on the ",(0,i.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"step 1",src:s(65267).A+"",width:"1884",height:"1002"})}),"\n",(0,i.jsxs)(t.p,{children:["After entering their email ID and clicking on the ",(0,i.jsx)(t.strong,{children:"Next"})," button, an OTP (One-Time Password) will be sent to user email address. User need to enter the six-digit code they received and click on the ",(0,i.jsx)(t.strong,{children:"Next"})," button to proceed."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"step 2",src:s(90776).A+"",width:"1884",height:"1002"})}),"\n",(0,i.jsxs)(t.p,{children:["Once the OTP verification process is complete, the below page will be displayed, where the user is required to enter their details such as full name, organization, etc., and click on the ",(0,i.jsx)(t.strong,{children:"Next"})," button."]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Haltdos WAF PE"})," can be configured in multiple instances.\nIf the user is configuring another instance, they will be redirected to the Login Setup page, instead of the User Details Page, since their account already exists."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"step 3",src:s(59041).A+"",width:"1892",height:"987"})}),"\n",(0,i.jsxs)(t.p,{children:["After the user has entered their details, user will be redirected to a payment gateway. A minimal amount transaction will take place to save the card, which will be refunded back by the card provider/bank. Card must be saved because Haltdos Professional WAF follows a usage based pricing. User will be charged at the end of the monthly billing period, based on the no. of requests that was processed by WAF in that billing period. User has to enter their credit card details and click on the ",(0,i.jsx)(t.strong,{children:"Save Card"})," button of the payment gateway."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"payment page",src:s(84750).A+"",width:"1897",height:"974"})}),"\n",(0,i.jsx)(t.p,{children:"Once the payment procedure is completed, the user will be prompted to enter their login details, which will enable them to access their account."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"step 4",src:s(22926).A+"",width:"1892",height:"987"})}),"\n",(0,i.jsxs)(t.p,{children:["You have successfully subscribed to ",(0,i.jsx)(t.strong,{children:"Haltdos Professional Edition"})," and have registered your instance. You can verify your registration by checking if the Haltdos Professional WAF service is running."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"sudo service offloader status\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"haltdos",src:s(24490).A+"",width:"854",height:"262"})}),"\n",(0,i.jsx)(t.admonition,{title:"CAUTION",type:"info",children:(0,i.jsxs)(t.p,{children:["If the Professional WAF service is still shown as loaded and inactive, or if you face any other kind of issue, please contact ",(0,i.jsx)(t.a,{href:"mailto:support@haltdos.com",children:(0,i.jsx)(t.strong,{children:"Haltdos Support"})})]})}),"\n",(0,i.jsx)(t.h3,{id:"step-4-accesing-haltdos-professional-gui",children:"Step 4: Accesing Haltdos Professional GUI"}),"\n",(0,i.jsxs)(t.p,{children:["Login to the ",(0,i.jsx)(t.strong,{children:"GUI Console"}),", at ",(0,i.jsx)(t.strong,{children:"https://SERVER_IP_ADDRESS:9000"})," using the credentials provided during the step 4 of the registration process."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"login",src:s(20339).A+"",width:"1892",height:"987"})}),"\n",(0,i.jsxs)(t.p,{children:["If provided login credentials are correct, you will be redirected to the Overview page, as visible below. Now you can start exploring ",(0,i.jsx)(t.strong,{children:"Haltdos Professional WAF"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"overview",src:s(60615).A+"",width:"1892",height:"987"})}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsx)(t.p,{children:"Professional WAF Billing is a Monthly Subscription, whose billing period will start on the day of registering your first instance."})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21020:(e,t,s)=>{var n=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,r={},d=null,c=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:c,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,s)=>{e.exports=s(21020)},2817:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/collector-c2897218c0c558695e8ddf1be2b2d26b.png"},77574:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/controller-31e410f509a65978ba178534ae2410cc.png"},20339:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/login-c20804d391908f2064b11a55961b7f90.png"},24490:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/offloader-a09964d647563566acb922b0e9f99481.png"},41681:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/offloader_status-872cb8bd790329f66ce424c8149ec079.png"},60615:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/overview-0aeec48d6b0ecd735b68a1a48dd58371.png"},84750:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/payment-13f68765fb94d63862bb97dfb6156658.png"},65267:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/step1-c50e680c526b28e3320264b1ce2d0b7e.png"},90776:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/step2-ddb0c020a60e58935dcc534d712d7731.png"},59041:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/step3-1310b3e8c3e6cb9025509ccf3ea784af.png"},22926:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/step4-27307ac89b29d891f982ea9e15b0fc6c.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);