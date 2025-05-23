---
sidebar_position: 2
---

# SSL Management
It provides functionality to support SSL offloading based on configurations.

---

### Overview

As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model.

![SSL Settings](/img/waf/v8/docs/sslSetting1.png)  

![SSL Settings](/img/waf/v8/docs/sslSetting2.png)

### How to Use:

1. Go To **WAF > Listeners > SSL Settings** 
2. Configure Your Settings 
3. Click **Save Changes**. 

#### Encrypt Traffic to Upstream

This specifies WAF should re-encrypt traffic before sending it to the back-end web application. 

:::note Note
**We can listen to non-HTTPS traffic and send it as HTTPS traffic to the back end server.**
:::

### Description

##### **SSL Ciphers Suites**
In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc.

```
    Accepted values: Modern / Intermediate / Old / Custom 

    Default: Intermediate
```


##### **SSL Ciphers**
It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities — usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down.

##### **Upstream SSL Protocols**
This option specifies if the WAF should enable HTTPS traffic for the configured website.

```
    Accepted values: SSLv2 / SSLv3 / TLSv1 / TLSv1.1 / TLSv1.2 / TLSv1.3 

    Default: Blank
```


##### **Upstream SSL Cipher**
Specify the custom SSL ciphers. For empty, default cipher based on upstream SSL handshake

```
    Accepted values: Select SSL Cipher

    Default: Blank
```


##### **Enable SSL Offloading**
This option specifies if the WAF should enable HTTPS traffic for the configured website.

```
    Accepted values: Enable / Disable

    Default: Enable
```


##### **SSL Certificate**
This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page

```
    Accepted values: Select the uploaded SSL Certificate 

    Default: Blank
```


##### **SSL Session Caching**
This option allows users to specify the number of SSL session cache for HTTPS requests on the listener.

```
    Accepted values: Integer

     Max: 1000

     Min: 0

    Default: 10
```


##### **Enable SSL Stapling**
Specify enabling SSL stapling of OCSP responses

```
    Accepted values: Enable / Disable

    Default: Enable
```


##### **Verify OCSP Responses**
Specify enabling verification of OCSP responses from Server

```
    Accepted values: Enable / Disable

    Default: Enable
```


##### **SSL Session Timeout**
This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener.

```
    Accepted values: Integer

     Max: 3600

     Min: 1

    Default: 5
```


     Metrics: Seconds

##### **Client Certificate Verification**
This option specifies if the solution should enable client certificate authentication.

```
    Accepted values: Enabled / Disabled / Optional

    Default: Disabled
```


##### **Client Certificate**
This option specifies an SSL certificate for Client Authentication.

```
    Accepted values: Select Client Certificate

    Default: Blank
```


##### **Certificate Revocation List**
Specify client certificate revocation list

```
    Accepted values: Select Revocation List

    Default: Blank
```


##### **Client Certificate Raw Header**
Specify header name for forwarding raw SSL client certificate to upstream

```
    Accepted values: String

    Default: Blank
```


##### **Client Certificate Fingerprint Header**
This option specifies header name for forwarding SSL certificate fingerprint to be upstream

```
    Accepted values: Select certificate revocation list

    Default: NONE
```


##### **Client Certificate Issuer Header**
This option specifies header name for forwarding SSL Certificate Issuer to be upstream

```
    Accepted values: String

    Default: Blank
```


##### **Client Certificate Subject Header**
It specifies header name for forwarding SSL certificate Subject to be upstream

```
    Accepted values: String

    Default: Blank
```


##### **Client Certificate Serial Header**
This option specifies header name for forwarding SSL certificate Serial to be upstream

```
    Accepted values: String

    Default: Blank
```


##### **Client Certificate Verify Header**
This option specifies header name for forwarding SSL certificate verified to be upstream

```
    Accepted values: String

    Default: Blank
```


##### **Client Certificate Start Date Header**
This option specifies header name for forwarding SSL certificate start date to be upstream

```
    Accepted values: String

    Default: Blank
```


##### **Client Certificate End Date Header**
This option allows user to add header name for forwarding SSL certificate end date to be upstream.

```
    Accepted values: String

    Default: Blank
```


##### **Invalid Client Certificate Action**
This option allows user to specify the action to be performed when client certificate verification fails.

```
    Accepted values: No Action / Tarpit Src IP / Send Custom Response / Temprorary Blacklist IP / Terminate Connection / Redirect / Record Request / Record Request & Drop

    Default: No Action
```




