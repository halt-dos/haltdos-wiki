/*! For license information please see e6895e4e.ace75ff6.js.LICENSE.txt */
"use strict";(self.webpackChunkhaltdos_wiki=self.webpackChunkhaltdos_wiki||[]).push([[73892],{47684:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"cloud/dns/zone/nameservers","title":"NameServers","description":"Steps to update NS records for your domain","source":"@site/versioned_docs/version-6.0/cloud/dns/zone/nameservers.md","sourceDirName":"cloud/dns/zone","slug":"/cloud/dns/zone/nameservers","permalink":"/v6/cloud/dns/zone/nameservers","draft":false,"unlisted":false,"tags":[],"version":"6.0","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"cloud_sidebar","previous":{"title":"Records","permalink":"/v6/cloud/dns/zone/records"},"next":{"title":"Overview","permalink":"/v6/cloud/scan/overview"}}');var l=i(74848),r=i(28453);const d={sidebar_position:3},t="NameServers",s={},c=[{value:"Steps to Update Name Servers",id:"steps-to-update-name-servers",level:3},{value:"Cloudflare DNS",id:"cloudflare-dns",level:3},{value:"123reg DNS",id:"123reg-dns",level:3},{value:"GoDaddy DNS",id:"godaddy-dns",level:3},{value:"Bluehost DNS",id:"bluehost-dns",level:3},{value:"DYN DNS",id:"dyn-dns",level:3},{value:"CloudDNS",id:"clouddns",level:3},{value:"Easy DNS",id:"easy-dns",level:3},{value:"1&amp;1 DNS",id:"11-dns",level:3},{value:"Blacknight DNS",id:"blacknight-dns",level:3},{value:"DNS Park",id:"dns-park",level:3},{value:"Network Solutions DNS",id:"network-solutions-dns",level:3},{value:"EveryDNS",id:"everydns",level:3},{value:"ENom DNS",id:"enom-dns",level:3},{value:"EuroDNS",id:"eurodns",level:3},{value:"Gandi.Net DNS",id:"gandinet-dns",level:3},{value:"Hover DNS",id:"hover-dns",level:3},{value:"IX Web Hosting DNS",id:"ix-web-hosting-dns",level:3},{value:"MyDomain.Com DNS",id:"mydomaincom-dns",level:3},{value:"Myhosting.Com DNS",id:"myhostingcom-dns",level:3},{value:"Namecheap DNS",id:"namecheap-dns",level:3},{value:"No-IP DNS",id:"no-ip-dns",level:3},{value:"Register.Com DNS",id:"registercom-dns",level:3},{value:"Registo.Br DNS",id:"registobr-dns",level:3},{value:"Terra Dom\xc3\xadnio DNS",id:"terra-dom\xe3nio-dns",level:3},{value:"Upperlink DNS",id:"upperlink-dns",level:3},{value:"ZoneEdit DNS",id:"zoneedit-dns",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"nameservers",children:"NameServers"})}),"\n",(0,l.jsx)(n.p,{children:"Steps to update NS records for your domain"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"Updating your Name Servers is an essential step for using Haltdos DNS. It will help you route your web traffic through the Haltdos network. Ensure to configure your DNS properly."}),"\n",(0,l.jsx)(n.p,{children:'"DNS management is not yet active on Haltdos. Follow the steps here to activate your domain"'}),"\n",(0,l.jsx)(n.p,{children:"This warning message states that DNS Name Servers doesn\u2019t point to Haltdos."}),"\n",(0,l.jsx)(n.p,{children:"If you would like to change your DNS Provider over Haltdos DNS, read more to learn."}),"\n",(0,l.jsx)(n.h3,{id:"steps-to-update-name-servers",children:"Steps to Update Name Servers"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.strong,{children:"DNS > Zones > Records"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Click Gear icon next to the ",(0,l.jsx)(n.strong,{children:"Add Record"})," button."]}),"\n",(0,l.jsx)(n.li,{children:"Copy Haltdos Name Servers. These records will help you point your Domain Name to Haltdos."}),"\n",(0,l.jsx)(n.li,{children:"Log in at your Hosting Registrar."}),"\n",(0,l.jsx)(n.li,{children:"Go to DNS Management."}),"\n",(0,l.jsx)(n.li,{children:"Click Change under Name Servers."}),"\n",(0,l.jsx)(n.li,{children:"Paste the new Name Servers to your current registrar."}),"\n",(0,l.jsx)(n.li,{children:"Click Save."}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{title:"Note",type:"note",children:(0,l.jsx)(n.p,{children:"It will take up to 24 hours to propagate.\r\nIf you find any DNS provider instructions need an update, please notify our 24x7 Support Team."})}),"\n",(0,l.jsx)(n.h3,{id:"cloudflare-dns",children:"Cloudflare DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Login your Cloudflare account"}),"\n",(0,l.jsx)(n.li,{children:"Select Domain from the drop-down menu on the top left."}),"\n",(0,l.jsx)(n.li,{children:"Click on the DNS settings tab."}),"\n",(0,l.jsx)(n.li,{children:"Add the CNAME records. In the first field, enter the subdomain that you want to use, such as CDN, and in the second field, enter Edge Address (foo-bar.haltdosdns.com)."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"123reg-dns",children:"123reg DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Login your 123-reg control panel."}),"\n",(0,l.jsx)(n.li,{children:"Go to Domains section."}),"\n",(0,l.jsx)(n.li,{children:"Choose Domain Name from the drop-down menu."}),"\n",(0,l.jsx)(n.li,{children:"Click on the Manage button."}),"\n",(0,l.jsx)(n.li,{children:"Click Manage DNS under the advanced domain settings menu."}),"\n",(0,l.jsx)(n.li,{children:"Select the Advanced DNS tab."}),"\n",(0,l.jsx)(n.li,{children:"Select CNAME from the drop-down menu."}),"\n",(0,l.jsx)(n.li,{children:"Enter CDN in the hostname field (Note: Enter WWW for full site cache). Enter Edge Address in the Destination CNAME field."}),"\n",(0,l.jsx)(n.li,{children:"Click Add."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"godaddy-dns",children:"GoDaddy DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Login your GoDaddy account."}),"\n",(0,l.jsx)(n.li,{children:"Go to Product List next to Domains."}),"\n",(0,l.jsx)(n.li,{children:"Click the \u2018+\u2019 button to expand the list."}),"\n",(0,l.jsx)(n.li,{children:"Select the domain you want to manage and click Action > Manage DNS."}),"\n",(0,l.jsx)(n.li,{children:"Go to the bottom of the Records section and click Add."}),"\n",(0,l.jsx)(n.li,{children:"From the drop-down list, select CNAME."}),"\n",(0,l.jsxs)(n.li,{children:["Enter details in the following fields to complete.\r\nHost \u2013 Type the subdomain name for the alias assignment. E.g., type ",(0,l.jsx)(n.a,{href:"http://www",children:"www"}),". Note: Subdomain should not be more than 25 characters. It can include a period(.) but not consecutive periods (\u2026)TTL - Select how long the server should cache the information.\r\nPoints to - Type the name of the host you want the alias to point to. E.g., to directly map the alias to your domain name enter @.\r\nTTL \u2013 Specify how long the server should cache the information."]}),"\n",(0,l.jsx)(n.li,{children:"Click Save."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"bluehost-dns",children:"Bluehost DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Login your Bluehost Hosting Account."}),"\n",(0,l.jsx)(n.li,{children:"Go to Domains and click DNS Zone Editor icon."}),"\n",(0,l.jsx)(n.li,{children:"From the drop-down menu, choose the domain you are modifying."}),"\n",(0,l.jsx)(n.li,{children:"Scroll down and click on Add DNS Record."}),"\n",(0,l.jsx)(n.li,{children:"Enter record name in the Host Record field."}),"\n",(0,l.jsx)(n.li,{children:"Don\u2019t change the TTL field. Manage its default setting."}),"\n",(0,l.jsx)(n.li,{children:"Select CNAME from Type."}),"\n",(0,l.jsx)(n.li,{children:"Enter the Address in the Points To field that you want the record should resolve to."}),"\n",(0,l.jsx)(n.li,{children:"Click Add Record to create the record."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"dyn-dns",children:"DYN DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Login your Dyn account."}),"\n",(0,l.jsx)(n.li,{children:"Go to the My Services option."}),"\n",(0,l.jsx)(n.li,{children:"Search the Zone you wish to add a record to."}),"\n",(0,l.jsx)(n.li,{children:"Click Dyn Standard DNS Service."}),"\n",(0,l.jsx)(n.li,{children:"Click the \u201cAdd Alias (CNAME)\u201d button. Add Hostname and Alias To in the prompt window."}),"\n",(0,l.jsx)(n.li,{children:"Click Create Record."}),"\n",(0,l.jsx)(n.li,{children:"Click DNS Menu."}),"\n",(0,l.jsx)(n.li,{children:"Click Managed DNS."}),"\n",(0,l.jsx)(n.li,{children:"Enter a domain name in Select Domain tab or choose from the \u201cRecently Updated Domains\u201d"}),"\n",(0,l.jsx)(n.li,{children:"Go to CNAME Records and click \u2018+\u2019 to add a new record. Note: We will add a CNAME record to the domain to map the root record of the domain."}),"\n",(0,l.jsx)(n.li,{children:"Leave data value blank to alias to the root record of the domain name."}),"\n",(0,l.jsx)(n.li,{children:"Click Submit."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"clouddns",children:"CloudDNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Go to Control Panel."}),"\n",(0,l.jsx)(n.li,{children:"Click \u201cAdd new record\u201d"}),"\n",(0,l.jsx)(n.li,{children:"Enter the following:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"Type: CNAME\r\nTTL: 30 Minute\r\nHost: Example (www.hostname.com)\r\nPoints to: Edge Address (e.g., foo-bar.haltdosdns.com)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"easy-dns",children:"Easy DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Login your easyDNS account."}),"\n",(0,l.jsx)(n.li,{children:"Click DNS. It will redirect you to the DNS SETTINGS page."}),"\n",(0,l.jsx)(n.li,{children:"Choose either of the two EDITOR: STREAMLINED or MODULAR (recommended)."}),"\n",(0,l.jsx)(n.li,{children:"For the DNS record type that you are trying to click the green wrench tool."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"11-dns",children:"1&1 DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"https://admin.1and1.com",children:"https://admin.1and1.com"})," and login your account."]}),"\n",(0,l.jsx)(n.li,{children:"In case of only one package, go to the Administration page and continue to step 4."}),"\n",(0,l.jsx)(n.li,{children:"In case of more than one package, choose the package corresponding to the desired domain. It redirects you to the Administration page for the desired domain."}),"\n",(0,l.jsx)(n.li,{children:"Click Domain Center under Domains & Web Space. It redirects you to the Domain Overview page."}),"\n",(0,l.jsx)(n.li,{children:"On the left of the domain, click the box that you want to verify. (Blue check will appear)"}),"\n",(0,l.jsx)(n.li,{children:"Select Create Subdomain from the New drop-down menu."}),"\n",(0,l.jsx)(n.li,{children:"Type the code TOKEN (Ensure it is in lowercase letters)."}),"\n",(0,l.jsx)(n.li,{children:"Click OK."}),"\n",(0,l.jsx)(n.li,{children:"Click the \u2018+\u2019 icon next to Subdomain Overview."}),"\n",(0,l.jsx)(n.li,{children:"Checkmark the box next to the subdomain. It will now read as token_code.yourdomain.com."}),"\n",(0,l.jsx)(n.li,{children:"Click Subdomain Settings."}),"\n",(0,l.jsx)(n.li,{children:"In the drop-down menu, click Edit DNS settings."}),"\n",(0,l.jsx)(n.li,{children:"Click the radio option next to CNAME."}),"\n",(0,l.jsx)(n.li,{children:"Enter TOKEN next to the Alias. Make sure it is in lowercase letters."}),"\n",(0,l.jsx)(n.li,{children:"Click OK"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"blacknight-dns",children:"Blacknight DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Go to cp.blacknight.com and login your account."}),"\n",(0,l.jsx)(n.li,{children:"Go to Registered Domains."}),"\n",(0,l.jsx)(n.li,{children:"Choose Manage DNS for the desired domain."}),"\n",(0,l.jsx)(n.li,{children:"Go to the DNS tab, followed by the DNS Records tab."}),"\n",(0,l.jsx)(n.li,{children:"Choose Add New DNS Record."}),"\n",(0,l.jsx)(n.li,{children:"Select CNAME for DNS Record Type from the drop-down menu."}),"\n",(0,l.jsx)(n.li,{children:"In the Domain field, enter your CNAME."}),"\n",(0,l.jsx)(n.li,{children:"In the Canonical Name field, enter the address you want the CNAME to point to."}),"\n",(0,l.jsx)(n.li,{children:"Click Finish."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"dns-park",children:"DNS Park"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Login your DNS Park account."}),"\n",(0,l.jsx)(n.li,{children:"Click DNS Hosting."}),"\n",(0,l.jsx)(n.li,{children:"Choose the domain you want to use with G Suite."}),"\n",(0,l.jsx)(n.li,{children:"Ensure domain points to nameservers of the DNS Park."}),"\n",(0,l.jsx)(n.li,{children:"Click Alias Records."}),"\n",(0,l.jsx)(n.li,{children:"Include the CNAME record value related to your use. Ensure name goes to the Host Name field, and the value goes to the Destination Name field."}),"\n",(0,l.jsx)(n.li,{children:"Click Add Alias."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"network-solutions-dns",children:"Network Solutions DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"http://www.networksolutions.com",children:"www.networksolutions.com"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Click Manage Account."}),"\n",(0,l.jsx)(n.li,{children:"Login using your credentials. Ensure to choose Manage All Services in Log In to field."}),"\n",(0,l.jsx)(n.li,{children:"Go to Manage Domain Names."}),"\n",(0,l.jsx)(n.li,{children:"Choose the domain name to get new DNS records."}),"\n",(0,l.jsx)(n.li,{children:"Click Manage > Change Where Domain Points > Advanced DNS."}),"\n",(0,l.jsx)(n.li,{children:"Click Add/Edit under the Host Aliases (CNAME Records)."}),"\n",(0,l.jsx)(n.li,{children:"Key in your CNAME records. (Make sure it depends on the type.)"}),"\n",(0,l.jsx)(n.li,{children:"Checkmark the radio button next to the Other Host box."}),"\n",(0,l.jsx)(n.li,{children:"Enter the corresponding Destination/Value/Answer in the Other Host field from the same CNAME record values table."}),"\n",(0,l.jsx)(n.li,{children:"Click Continue and review your changes"}),"\n",(0,l.jsx)(n.li,{children:"Click Save Changes."}),"\n",(0,l.jsx)(n.li,{children:"You have successfully created the CNAME record."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"everydns",children:"EveryDNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Go to EveryDNS.net and login your account."}),"\n",(0,l.jsx)(n.li,{children:"Click the domain you want to use with G Suite for your Domain."}),"\n",(0,l.jsx)(n.li,{children:"Review your domain points to nameservers of the EveryDNS.net."}),"\n",(0,l.jsx)(n.li,{children:"Click Add a Record to create a CNAME record."}),"\n",(0,l.jsx)(n.li,{children:"Include the CNAME record value linked to your use. Make sure the value matches to the Record Value field and the name matches to the Fully Qualified Domain Name field."}),"\n",(0,l.jsx)(n.li,{children:"Choose your CNAME as the Record Type."}),"\n",(0,l.jsx)(n.li,{children:"Click Add Record."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"enom-dns",children:"ENom DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"http://www.enom.com",children:"www.enom.com"})," and login your account."]}),"\n",(0,l.jsx)(n.li,{children:"Go to Domains, select My Domain from the drop-down menu. It will direct you to the Manage Domains page."}),"\n",(0,l.jsx)(n.li,{children:"Click the domain that you want to use with G Suite."}),"\n",(0,l.jsx)(n.li,{children:"Go to Host Settings."}),"\n",(0,l.jsx)(n.li,{children:"Select New Row for adding a CNAME record. In case you already have a CNAME record, edit the existing CNAME record."}),"\n",(0,l.jsx)(n.li,{children:"Type your CNAME record."}),"\n",(0,l.jsx)(n.li,{children:"Enter your Edge Address (e.g., foo-bar.edgedns.com)."}),"\n",(0,l.jsx)(n.li,{children:"Click Save."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"eurodns",children:"EuroDNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Go to eurodns.com."}),"\n",(0,l.jsx)(n.li,{children:"Login your account."}),"\n",(0,l.jsx)(n.li,{children:"Choose My Domains in the My Domains menu. It will enlist a table citing your domains."}),"\n",(0,l.jsx)(n.li,{children:"On the row of the domain, click the DNS column that you want to change. It will display DNS records for your domain."}),"\n",(0,l.jsx)(n.li,{children:"Type your CNAME record. For reference use the CNAME record values table"}),"\n",(0,l.jsx)(n.li,{children:"Select Host Alias from the Add\u2026 HOSTNAME table."}),"\n",(0,l.jsx)(n.li,{children:"Click the Add button."}),"\n",(0,l.jsx)(n.li,{children:"Add your custom domain in the Alias: field. E.g., if your address is cdn.mydomain.com, enter CDN."}),"\n",(0,l.jsx)(n.li,{children:"Add Edge Address (e.g., foo-bar.haltdosdns.com) in the Host Name: field"}),"\n",(0,l.jsx)(n.li,{children:"Click the Save Settings."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"gandinet-dns",children:"Gandi.Net DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"https://www.gandi.net/",children:"https://www.gandi.net/"})," and sign in"]}),"\n",(0,l.jsx)(n.li,{children:"Click the Administration tab > Control Panel link."}),"\n",(0,l.jsx)(n.li,{children:"Select the domain you wish to manage."}),"\n",(0,l.jsx)(n.li,{children:"Click Technical Settings > Manage DNS zone file.\r\n5.Enter your CNAME record. Refer guidelines\r\nName: Type custom URL prefixes like www or CDN\r\nType: Choose CNAME.\r\nValue: Type Edge Address (e.g., foo-bar.haltdosdns.com.). At the end of the value, ensure to include a trailing dot (.)"}),"\n",(0,l.jsx)(n.li,{children:"Click Submit. It will direct you to the list of entries."}),"\n",(0,l.jsx)(n.li,{children:"Click Submit Changes."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"hover-dns",children:"Hover DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"https://www.hover.com/login",children:"https://www.hover.com/login"})," and sign in."]}),"\n",(0,l.jsx)(n.li,{children:"Choose the domain."}),"\n",(0,l.jsx)(n.li,{children:"Click DNS tab > Add Record."}),"\n",(0,l.jsx)(n.li,{children:"Choose CNAME from the drop-down menu."}),"\n",(0,l.jsxs)(n.li,{children:["Type CNAME record. E.g., If you want to direct ",(0,l.jsx)(n.a,{href:"http://www.mydomain.com",children:"www.mydomain.com"})," to CDN, in the Hostname field type www, and in the Target Host field type Edge Address."]}),"\n",(0,l.jsx)(n.li,{children:"Click Save."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"ix-web-hosting-dns",children:"IX Web Hosting DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Sign in your IX Web Hosting account."}),"\n",(0,l.jsx)(n.li,{children:"Go to the Hosting Account section. Click Manage."}),"\n",(0,l.jsx)(n.li,{children:"Select the domain on the left side that you want to use with G Suite."}),"\n",(0,l.jsx)(n.li,{children:"Click Edit > Add DNS CNAME Record."}),"\n",(0,l.jsx)(n.li,{children:"Include the CNAME record value related to your use.  Ensure name matches to the Name field, and the value matches to the Data field."}),"\n",(0,l.jsx)(n.li,{children:"Click Submit."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"mydomaincom-dns",children:"MyDomain.Com DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"http://www.mydomain.com/",children:"www.mydomain.com/"})," and sign in"]}),"\n",(0,l.jsx)(n.li,{children:"Click My Services > Manage Services."}),"\n",(0,l.jsx)(n.li,{children:"Click Domain Overview > Domain Administration."}),"\n",(0,l.jsx)(n.li,{children:"Click on Domain Administration."}),"\n",(0,l.jsx)(n.li,{children:"Choose the domain that you are using with G Suite."}),"\n",(0,l.jsx)(n.li,{children:"Click DNS tab"}),"\n",(0,l.jsx)(n.li,{children:"Choose DNS Records."}),"\n",(0,l.jsx)(n.li,{children:"Go to Add New DNS record."}),"\n",(0,l.jsx)(n.li,{children:"Choose CNAME from the drop-down menu"}),"\n",(0,l.jsx)(n.li,{children:"Click Next."}),"\n",(0,l.jsx)(n.li,{children:"Include the CNAME record value linked to your use."}),"\n",(0,l.jsx)(n.li,{children:"Click Finish."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"myhostingcom-dns",children:"Myhosting.Com DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"http://myhosting.com",children:"http://myhosting.com"})," and sign in."]}),"\n",(0,l.jsx)(n.li,{children:"Go to Domain Name > DNS Management > Manage DNS."}),"\n",(0,l.jsx)(n.li,{children:"Add an Alias (CNAME) record. Ensure to include the value linked to your use."}),"\n",(0,l.jsx)(n.li,{children:"Click Save."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"namecheap-dns",children:"Namecheap DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"http://www.namecheap.com",children:"www.namecheap.com"})," and log in."]}),"\n",(0,l.jsx)(n.li,{children:"Click My Account > Manage Domains"}),"\n",(0,l.jsx)(n.li,{children:"Select the desired domain from the list of domains."}),"\n",(0,l.jsx)(n.li,{children:"Choose All host records."}),"\n",(0,l.jsx)(n.li,{children:"Ensure your CNAME record value point to your Edge Address."}),"\n",(0,l.jsx)(n.li,{children:"Click Save."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"no-ip-dns",children:"No-IP DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Sign in your account."}),"\n",(0,l.jsx)(n.li,{children:"Go to Host/Redirects > Manage."}),"\n",(0,l.jsx)(n.li,{children:"To add a new entry, click Add. To modify an existing entry, continue to step 4."}),"\n",(0,l.jsx)(n.li,{children:"Ensure the CNAME record value linked to your use. Review name matches with hostname and value with the Target Host field."}),"\n",(0,l.jsx)(n.li,{children:"At the host type, choose DNS alias CNAME."}),"\n",(0,l.jsx)(n.li,{children:"Click Modify."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"registercom-dns",children:"Register.Com DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Go to register.com and sign in."}),"\n",(0,l.jsx)(n.li,{children:"Go to My Accounts > domain you are using with G Suite"}),"\n",(0,l.jsx)(n.li,{children:"Scroll down. Go to Advanced Technical Settings."}),"\n",(0,l.jsx)(n.li,{children:"Click Edit Domain Aliases Records."}),"\n",(0,l.jsx)(n.li,{children:"Type the Name/ Alias/ Host in the first field from the CNAME record values table"}),"\n",(0,l.jsx)(n.li,{children:"Type the corresponding Value/ Destination/ Answer in the second field from the CNAME record values table"}),"\n",(0,l.jsx)(n.li,{children:"Click Continue"}),"\n",(0,l.jsx)(n.li,{children:"Verify Changes"}),"\n",(0,l.jsx)(n.li,{children:"Click Continue."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"registobr-dns",children:"Registo.Br DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Go to registro.br and sign in"}),"\n",(0,l.jsx)(n.li,{children:"Choose the domain name. It will help you to get the new DNS record."}),"\n",(0,l.jsx)(n.li,{children:"Click Save > Edit DNS > + Record."}),"\n",(0,l.jsx)(n.li,{children:"Choose CNAME from the drop-down menu."}),"\n",(0,l.jsx)(n.li,{children:"Enter the Name/ Alias/ Host in the first field"}),"\n",(0,l.jsx)(n.li,{children:"Enter the Edge Address in the second field, Dados."}),"\n",(0,l.jsx)(n.li,{children:"Click Save."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"terra-dom\xe3nio-dns",children:"Terra Dom\xc3\xadnio DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Sign in your main email account"}),"\n",(0,l.jsxs)(n.li,{children:["Send a message to ",(0,l.jsx)(n.a,{href:"mailto:suporte.empresas@terra.com.br",children:"suporte.empresas@terra.com.br"})," for new CNAME record creation or to update an existing record."]}),"\n",(0,l.jsx)(n.li,{children:"Add C.N.P.J. (Cadastro Nacional da Pessoa Jur\xeddica) of the company to message."}),"\n",(0,l.jsx)(n.li,{children:"Include the CNAME record value linked to your use."}),"\n",(0,l.jsx)(n.li,{children:"Send message"}),"\n",(0,l.jsx)(n.li,{children:"Wait for a response."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"upperlink-dns",children:"Upperlink DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Go to dns.upperlink.com.ng and sign in."}),"\n",(0,l.jsx)(n.li,{children:"Select the domain to modify or add CNAME records."}),"\n",(0,l.jsx)(n.li,{children:"Click Manage Domain DNS"}),"\n",(0,l.jsx)(n.li,{children:"Make sure to remove the existing custom CNAME record."}),"\n",(0,l.jsx)(n.li,{children:"Review the Zone Name field. It should read as customcname.yourdomain.com"}),"\n",(0,l.jsx)(n.li,{children:"Type the following information"}),"\n",(0,l.jsx)(n.li,{children:"Enter the following information:\r\nChange Default value of custom CNAME under Zone Name\r\nSelect CNAME under Zone Type\r\nEdge Address under Zone Value\r\nEdge Address in the content field"}),"\n",(0,l.jsx)(n.li,{children:"Save Changes."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"zoneedit-dns",children:"ZoneEdit DNS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to ",(0,l.jsx)(n.a,{href:"http://www.zoneedit.com",children:"http://www.zoneedit.com"})," and sign in your ZoneEdit account."]}),"\n",(0,l.jsx)(n.li,{children:"Select the domain for which you like to add a CNAME record."}),"\n",(0,l.jsx)(n.li,{children:"Select Aliases (CNAME)."}),"\n",(0,l.jsx)(n.li,{children:"Include the CNAME record value linked to your use."}),"\n",(0,l.jsx)(n.li,{children:"Save changes."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},21020:(e,n,i)=>{var o=i(96540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var o,r={},c=null,a=null;for(o in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,o)&&!s.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:l,type:e,key:c,ref:a,props:r,_owner:t.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>t});var o=i(96540);const l={},r=o.createContext(l);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);