---
sidebar_position: 1
---

# WEB Policy
Configure Web Security Policy for HTML based websites - , Dynamic, Wordpress, etc.

---

## Overview

A web policy or policies are constraints or mandates in relation to technical constraints, legal, editorial, and compliance. Configure policies that HTTP(s) requests must conform to when requesting data from the backend web application.
   
![Web Policy](/img/waf/v8/docs/WAFwebpolicy.png)

![webpolicy](/img/waf/v8/docs/webPolicy2.png)


### How to Use:
1. Go to **WAF** > **Listener** > **Profiles** > **Policy** > **Web Policy**.
2. Configure your settings.
3. Click **Save Changes**.

### Description 

##### **Maximum Allowed Header Fields**
HTTP header fields provide necessary data about the request or response. It also provides the details about the object sent in the message body.
This field specifies the maximum number of allowed HTTP header fields in the HTTP request header. If the header field exceeds, then the request gets dropped.

```
    Accepted values: Integer 

    Max: 128

    Min: 1

    Default: 30 
```


##### **Maximum Header Field Name Length**
This field specifies the maximum allowed length of the HTTP header field name. If the header field name length exceeds the specified length then the request gets dropped.

```
    Accepted values: Integer 

    Max: 4096

    Min: 4

    Default: 50 
```


##### **Maximum Header Field Value Length**
This field specifies the maximum allowed length of the HTTP header field value. If the header field value length exceeds the specified length then the request gets dropped.

```
    Accepted values: Integer 

    Max: 8192

    Min: 4

    Default: 2048 
```


##### **Allowed HTTP Methods**
HTTP Methods are a set of common request methods for HTTP. These request methods indicate the specific action that you need to take care of a specific resource. Each of the request methods implements a different semantic. A group of these methods represents some common features. E.g. a request method can be safe, cache-able, or idempotent.  

```
    Accepted values: Any HTTP Method

    Default: GET / PUST / POST / DELETE / HEAD / OPTIONS   
```


We support the following HTTP Methods:  
1. **GET**:  It requests a specified resource representation. It helps to retrieve data.
2. **HEAD**:  It inquires for a response identical to that of a GET request. It doesn't enquire the response body.
3. **POST**:  It helps to submit an entity to the desired resource. It often causes a change in state or side effects on the server.
4. **PUT**:  It exchanges all existing representations of the target resource with the request payload.
5. **DELETE**:  It helps to delete the specified resource
6. **OPTIONS**:  It helps to indicate the communication options for the target resource.
This field specifies all the allowed HTTP methods. If the request includes any methods other than the stated ones, then the request gets dropped.

##### **Allowed MIME Types**
MIME Type, also known as media type or a Multipurpose Internet Mail Extensions is a standard that indicates both format and nature of a file, document, or bytes assortment.
MIME-type helps browsers to determine how to process a URL. A browser must send an exact MIME type Content-Type header response. In case, it isn't configured correctly; the browser will misinterpret file content. The Website will not function properly, and there will be mishandling of downloaded files.
This field specifies the list of the allowed HTTP MIME type. If the request contains any mime types other than specified ones, then the request gets dropped.

```
    Accepted values: Any HTTP MIME Type

    Default: application/x-www-form-urlencoded / multipart/fprm-data / text/xml / application/xml / application/soap+xml / application/x-amf / application/json / application/octet-stream / text/plain / text/html  
```


##### **Web Extensions**
Users are allowed to specify the list of extensions for which Human Authentication will be enabled.

```
    Accepted values: Any web extension 

    Default: php / html / aspx / jsp  
```


##### **Restricted Extention**
Restricted extensions field specifies the list of extensions that should be blocked or restricted by users accessing the web application behind WAF.

```
    Accepted values: Any extension user want to restrict.

    Default: asa / asax / ascx / axd / backup / bak / bat / cdx / cer / cfg / cmd / com / config / conf / cs / csproj / csr / dat / db / dbf / dos / htr / htw / ida / idc / idq / inc / ini / key / licx / link / log / mdb / old / pass / pdb / pol / printer / pwd / resources / resx / sql / sys / vb / vbs / vbproj / csdisco / webinfo / xsd / xsx / exe / dll / git / sh   
```


##### **Restricted File Upload**
Restricted File Upload specifies the list of file extensions that should be blocked from being uploaded to the web application. By default, WAF blocks all major types of file extensions from being uploaded.

```
    Accepted values: Any file type user want to restrict.

    Default: exe / sh / py / bak / wsf / bin / jar / bat / apk / sav / xml / sql / tar / mp3 / mp4 / csv / asp / cer / cgi / rss / ppt / pdf / doc / docx / pptx / html / odp / txt / log / mdp / php 
```


##### **X-FRAME OPTIONS**
X-frame is used for adding a header to stop clickjacking. Clickjacking is an interface-based attack in which a user is tricked into clicking on actionable content on a hidden website by clicking on some other content in a decoy website.

```
    Accepted values: DISABLED / DENY / SAME ORIGIN 

    Default: DISABLED   
```


##### **CAPTCHA VALIDATION EXPIRY**
In order to protect the web application from automated attacks. Captcha is used to validate the user but its validity is set in seconds for which the captcha will be valid.

```
    Accepted values: Integer

    Default: 86400
```


    Metrics: Seconds  

##### **CSRF**
Cross-Site Request Forgery (CSRF) is an attack-type in which a malicious blog, email, instant message, or program causes a browser of the user to execute an unwanted action on a trusted site in case of user authentication. Enable cookie-based CSRF protection for incoming HTTP requests.

```
    Accepted values: Enable / Disable

    Default: Disable  
```


##### **Immutable Cookie Validity**
An HTTP cookie, also known as a browser cookie or web cookie is a small data piece that a server sends to the web browser of the user. A browser can store it and send it back to the same server with the next request. It tells whether the two requests are coming from the same browser. It reminisces accurate data for the stateless HTTP protocol.  

```
    Accepted values: Integer

    Default: 86400
```


    Metrics: Seconds 

Three primary purposes of cookies:

 - **Session management**: Games scores, shopping carts, logins, or anything else the server should remember.
 - **Personalization**: Themes, user preferences, and other settings.
 - **Tracking**: User behavior recording and analyzing.  


![webpolicy](/img/waf/v8/docs/webPolicy3.png)

Cookies are primarily for session management. Attackers try to steal its data for session hijacking. Parameters to consider while securing cookie:  
 - **Cookie Name**: This field specifies the cookie name for which you need to apply the policies.

```
    Accepted values: String / Integer

    Default: "Enter Cookie Name" 
```


 - **Enable Immutable (Cookie Signing)**: This field allows you to ensure that the specified cookie remains unchanged by the client. Any request with a modified cookie value gets rejected.

```
    Accepted values: Enable / Disable

    Default: Disable
```


 - **Enable HTTP Only Flag**: This field prevents the client-side script from accessing and manipulating the cookie.  

```
    Accepted values: Enable / Disable

    Default: Disable
```


 - **Enable Secure Flag**: This field allows you to ensure that the cookie is only sent over a secured HTTPS channel.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


 - **Same Site**: This field doesn't allow the browser to send this cookie along with cross-site requests. The main goal is to mitigate the risk of cross-origin data leakage. Even, it protects against cross-site request forgery attacks.  

```
    Accepted values: NONE / STRICT / LAX

    Default: NONE 
```


**STRICT** - This value ensures the cookie is not being sent to the target site in all cross-site browsing contexts.  
**LAX** - This value provides both security and usability to the sites that need to manage the user's logged-in session once the user login from an external link.

:::note Note
This value specifies no action would be taken, and cookies will be allowed to pass to an external site.
:::

