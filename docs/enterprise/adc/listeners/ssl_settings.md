---
sidebar_position: 2
---

# SSL Settings
**SSL (Secure Sockets Layer)** and its successor, **TLS (Transport Layer Security)**, are protocols for establishing authenticated and encrypted links between networked computers. SSL offloading is the process of removing the SSL-based encryption from incoming traffic to relieve a web server of the processing burden of decrypting and/or encrypting traffic sent via SSL. 

---
![SSL Settings](/img/adc/v8/docs/ssl_setting_1.png)

### How to Use:

1. Go to **Stack** > [**SLB**](/enterprise/adc) > [**Listeners**](./listeners.md) > **SSL Settings**

2. Configure your settings.

3. Click **Save Changes**. 

![SSL Settings2](/img/adc/v8/docs/ssl_setting_2.png)

**Configure the following parameters to set up the desired settings:**

| PARAMETERS                            | ACCEPTED VALUES | DEFAULT      |
|---------------------------------------|-----------------|--------------|
| Enable SSL Offloading                 | Boolean         | Disabled     |
| SSL Certificate                       | File Upload     | Blank        |
| SSL Cipher Suites                     | Drop Down       | INTERMEDIATE |
| SSL Session Caching                   | Integer         | 10           |
| SSL Session Timeout                   | Integer         | 5            |
| Client Certificate Verification       | Drop Down       | Disbaled     |
| Client Certificate                    | File Upload     | Blank        |
| Certificate Revocation List           | Drop-down       | Blank        |
| Client Certificate Raw Header         | String          | Blank        |
| Client Certificate Fingerprint Header | String          | Blank        |
| Client Certificate Issuer Header      | String          | Blank        |
| Client Certificate Subject Header     | String          | Blank        |
| Client Certificate Serial Header      | String          | Blank        |
| Client Certificate Verify Header      | String          | Blank        |
| Client Certificate Start Date Header  | String          | Blank        |
| Client Certificate End Date Header    | String          | Blank        |
| Invalid Client Certificate Action     | Drop Down       | No Action    |
| Custom Page                           | Drop Down       | Blank        |


### Description:

##### **Enable SSL Offloading**

This option allows users to specify if the solution should offload SSL traffic. It helps to reduce burden of servers through the process of removing SSL encryption from incoming traffic.

##### **SSL Certificate**

This option allows users to specify an SSL certificate for Encryption / Decryption. It authenticates the identity of the website and more secure. It assures users that you are using an authentic website.

##### **SSL Cipher Suites**

This option allows users to specify the security/compatibility of SSL with modern web browsers. It provides a set of algorithms and protocols to secure communication between client and server.

##### **SSL Protocols**

This option allows users to specify the SSL protocol for the secure communication. User can select any SSL protocol from the list mentioned below:
1. SSLv2
2. SSLv3
3. TLSv1
4. TLSv1.1
5. TLSv1.2
6. TLSv1.3

##### **SSL Session Caching**

This option allows users to specify the SSL session caching which helps to optimize and greatly improve performance through saving SSL sessions for a specific period of time until connection between client and server has been terminated.

##### **SSL Session Timeout**

This option allows users to specify the SSL session timeout. This value is the amount of time given  before an SSL session expires.

##### **Client Certificate Verification**

This option allows users to specify if the solution should enable client certificate authentication. It provides security to encrypt data transfer so that cyber criminal cannot access, read or change the data.

##### **Client Certificate**

This option allows users to specify an SSL certificate for Client Authentication.

This option allows users to specify an SSL certificate for Client Authentication. It provides the identity of the connecting users. User can redirect at **Client Certificate** and add certificate.

##### **Certificate Revocation List**

Users can specify client certificate revocation list.

##### **Client Certificate Raw Header**

Users can specify header name for forwarding raw SSL client certificate to upstream.

##### **Client Certificate Fingerprint Header**

This option allows users to specify header names for forwarding SSL certificate fingerprints to be upstream.

##### **Client Certificate Issuer Header**

This option allows users to specify header names for forwarding SSL certificate Issuer to be upstream.

##### **Client Certificate Subject Header**

This option allows users to specify header names for forwarding SSL certificate Subject to be upstream.

##### **Client Certificate Serial Header**

This option allows users to specify header names for forwarding SSL certificate Serial to be upstream.

##### **Client Certificate Verify Header**

This option allows users to specify header names for forwarding SSL certificate verify to be upstream.

##### **Client Certificate Start Date Header**

This option allows users to specify header names for forwarding SSL certificate start date to be upstream.

##### **Client Certificate End Date Header**

This option allows users to specify header names for forwarding SSL certificate end date to be upstream.

##### **Invalid Client Certificate Action**

This option allows users to specify the action to be performed when client certificate verification fails. User can select any of the actions mentioned below:

1. Drop : Under Drop for invalid client certificate client can simply drop the request coming from user if there is invalid certificate. 
2. Redirect : In an invalid client certificate, client can redirect the user if there is invaild client certificate.
3. Send Custom Response : In this section if there is invalid client certificate, client can generate a custom response to notify the user of the issue.
4. Tarpit Src Ip : When a server detects an invalid client certificate during a connection attempt if client has selected Tarpit Src Ip it will get delayed or slow down connections from potential attackers.
5. No Action : It means for invalid Client certificate, there will be no action taken

##### **Response Code** 

This option opens when user select "Send Custom Response" under "Invalid Client Certificate Action". It specify the response code on client certificate verification failure.

##### **Custom Page**

Users can specify the response page to be shown on client certificate verification failure. This section is only for "DROP" & "Send Custom Response". 