---
sidebar_position: 1
---

# Operational
Configure Operational settings of Listeners.

---

## Overview

Users are allowed to configure many operational settings for the [Listeners](../listener/listener.md). Users can configure most common settings like timeout settings, operation modes, header/body timeouts, error handling, and request logging. Users can also add server aliases and VIPs to the configured listener with the help of operational settings

![Listener Operational Settings](/img/waf/v7/docs/operationalsettings1.png)  
  
### How to Use:
1. Go to **WAF** > **Listener** > **Settings**.  
2. Configure the settings.
3. Click on Save changes.  

![Listener Operational Settings](/img/waf/v7/docs/operationalsettings2.png)

![Listener Operational Settings](/img/waf/v7/docs/operationalsettings3.png)


### Description
##### **Enable IPv6**
This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network.

```
    Accepted values: Enable / Disable

    Default: Enable  
```


##### **Enable HTTP 2.0**
Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1
This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  

```
    Accepted values: Enable / Disable

    Default: Disable  
```


For more information about HTTP/2 , please refer this site : [**HTTP 2.0**](https://en.wikipedia.org/wiki/HTTP/2)

##### **Enable Host Check**
Enable Host Check to enforce validation of the host (SNI) for incoming requests, ensuring that the server name in the request matches the expected host. This helps improve security by verifying that requests are directed to the correct server.

```
    Accepted values: Enable / Disable

    Default: Enable  
```


##### **Web-socket Enabled**
This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection.

```
    Accepted values: Enable / Disable

    Default: Disable  
```


For more information about Web-socket , please refer this site : [**Web-Socket**](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

##### **Enable Logging**
This option allows user to enable access logs in the case of service type HTTP & TCP.

```
    Accepted values: Enable / Disable

    Default: Enable  
```


##### **Enable Static Extension Logging**
This option allows user to specify whether to do log requests for static extension. (logging of file extensions associated with static files served by a web server. In the context of web servers, static files are files that are served directly to the client without any server-side processing, such as HTML, CSS, JavaScript, images, and downloadable files like PDFs.)

```
    Accepted values: Enable / Disable

    Default: Disable  
```


##### **Enable Error Handling**
This option allows user to specify whether to enable error handling by firewall.

```
    Accepted values: Enable / Disable

    Default: Enable  
```


##### **Connection Pool Size**
This option allows user to specify the connection pool size with upstream.

```
    Accepted values: Integer
    
    Max: 20000
    
    Min: 0
    
    Default: 0  
```


- **Connection Pool** A connection pool is a cache of database or network connections maintained so that the connections can be reused when future requests to the database or network are required.
- **Upstream server** refers to a backend server to which the web server forwards requests for processing.

##### **Client Keep-Alive Timeout**
This option sets the duration (in seconds) for which the server keeps an idle connection open with a client. If set to 0, keep-alive connections are disabled, meaning the server will close the connection immediately after responding to a client's request.

```
    Accepted values: Integer

    Max: 1000000

    Min: 0

    Default: 0  
```


    Metric: Minutes

- **Keep-alive timeout** determines how long the server should wait for the next request from the client before closing the connection. If the server does not receive a new request within this period, it closes the connection to free up resources.

##### **Upstream Keep-Alive Timeout**
This option sets the duration (in seconds) for which the server keeps an idle connection open with an upstream server. If set to 0, keep-alive connections are disabled, causing the server to close the connection immediately after receiving a response from the upstream server.

```
    Accepted values: Integer

    Max: 3600

    Min: 0

    Default: 0  
```


    Metric: Seconds

##### **Max Requests per Connection**
This option specify maximum allowed requests per keep-alive connection.

```
    Accepted values: Integer

    Max: 90000000

    Min: 0

    Default: 1000 
```


##### **Operational Mode**
Specify operational mode for the listener

```
    Accepted values: Reverse Proxy / IP Transparency

    Default: Reverse Proxy  
```


- **Reverse proxy** is a server that sits between clients and one or more backend servers. It receives requests from clients on behalf of the backend servers and forwards those requests to the appropriate server.  
- **IP Transparency** refers to a networking configuration where the original client IP address (source IP) is preserved and visible to the backend servers, even when traffic passes through a reverse proxy or load balancer.

##### **Limit MAX Collection**
This option sets the maximum number of concurrent connections allowed. If set to 0, no limit is enforced on the number of concurrent connections.

```
    Accepted values: Integer

    Max: 90000000

    Min: 0

    Default: 0  
```


    Metric: Connections  

##### **Client Body Timeout**
This option sets the maximum time allowed for receiving the request body from the client. If the request body is not fully received within this timeframe, the connection will be closed.

```
    Accepted values: Integer

    Max: 1000000

    Min: 10

    Default: 300  
```


    Metric: Seconds  

##### **Client Header Timeout**
This option sets the maximum time allowed to receive the request header from the client. If the header is not completely received within this period, the connection will be terminated.

```
    Accepted values: Integer

    Max: 1000000

    Min: 10

    Default: 300  
```


    Metric: Seconds  

##### **Client Send Timeout**
This option sets the maximum time allowed to send the response to the client. If the response cannot be fully sent within this period, the connection will be terminated.

```
    Accepted values: Integer

    Max: 1000000

    Min: 10

    Default: 300  
```


    Metric: Seconds  

##### **Static Extensions**
This setting allows specifying a list of file extensions that are permitted to be served statically without undergoing security validation. Files with these extensions can be served directly without additional security checks.

```
    Accepted values: Specify the list of allowed static extensions that don't require security validation.

    Default: png, gif, ico, jpg, jpeg, js, css, wpff, woff2, ttf, svg.  
```


##### **Maximum HTTP Body Size**
This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes.

```
    Accepted values: Integer

    Max: 4073741824L

    Min: 1024

    Default: 10485760  
```


    Metric: Bytes 

:::note Note
In the case of HTTP/0.9, no headers get transmitted.
:::

##### **Maximum HTTP Header Size**
This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes.  
It comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data.

```
    Accepted values: Integer

    Max: 40960

    Min: 1024

    Default: 4096  
```


    Metric: Bytes  

##### **Proxy HTTP Version **
This setting allows specifying the HTTP version used when connecting to the upstream server. It determines which version of the HTTP protocol is utilized for communication between the proxy server and the upstream server.

```
    Accepted values: ANY, HTTP 1.0, HTTP 1.1.

    Default: ANY  
```


##### **Proxy Buffers**
This option specify the number of buffers used for reading a response from the server for a single connection. (Proxy buffers refer to memory buffers used by a proxy server to temporarily store data during the process of receiving, processing, and forwarding requests and responses between clients and backend servers.)

```
    Accepted values: Integer

    Max: 64

    Min: 8 

    Default: 8
```


    Metric: Count 

##### **Proxy Buffer Size**
This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request.

```
    Accepted values: Integer

    Max: 4096

    Min: 8

    Default: 8 
```


    Metric: KB  

##### **Log Format**
This option specify the request log format.

```
    Accepted values: String

    Default: NULL  
```


##### **Client IP Location**
This option specify the location of the client IP.

```
    Accepted values: SRC-IP / X-FORWARED-FOR / X-REAL-IP / X-PROXYUSER-IP

    Default: SRC IP   
```


- **X-FORWARDED-FOR** header contains the IP address of the client that initiated the request, allowing the destination server to identify the original client's IP address even though the request was forwarded through intermediaries.

- **X-REAL-IP** Similar to the X-Forwarded-For header, the X-Real-IP header is typically added by the proxy server or load balancer to the HTTP request before forwarding it to the destination server.

- **X-PROXYUSER-IP** header likely contains the IP address of the client that initiated the request, allowing the backend server to identify the true client IP address. However, since it's a custom header, its usage and interpretation may vary depending on the specific configuration of the proxy server or load balancer.

##### **Host Header**
This option specify the host header allowed by the backend, if it's different from the listener subdomain. This allows the incoming request to alter the host header in each request and transmit it to the backend server.

```
    Accepted values: String

    Default: Blank   
```


It's used by the client to specify the domain name of the server it's attempting to connect to and the port number if it's different from the default (80 for HTTP and 443 for HTTPS).

##### **Server Aliases**
This option specify aliases means familiar name for the listener.

```
    Accepted values: String

    Default: Blank   
```


##### **Virtual IPs**
This option specify assigned virtual IPs for accepting traffic.

```
    Accepted values: IP

    Default: Blank     
```


##### **Port**
This option helps you to add HTTP/S ports for Advance Settings. Here you can be unique port either HTTP or HTTPS enabled configuration without changing backend server port.  

**Port**
This option specify assigned virtual IPs for accepting traffic.

```
    Accepted values: Integer

    Default: Blank  
```


**Protocol**
This option used to select protocol

```
    Accepted values: HTTP

    Default: HTTP  
```


**SSL Enabled**
This option used to select whether the SSL enabled or Disabled, that is uploaded by the user in the SSL Certificate section.

```
    Accepted values: True / False

    Default: False  
```


![setting](/img/waf/v7/docs/addportinsettings.png)

:::note Note
Proxy Buffer and Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge.
:::
