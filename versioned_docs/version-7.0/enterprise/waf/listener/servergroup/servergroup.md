# Server Groups

User can select the Load Balancing mechanism and specify Origin Server IPs on this screen

---

## Overview 

To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the [**servers**](servers.md) page. To pass requests to a server group, use **Upstream Rules**.

This is useful for:

1. Auto-scaling, when you need to add more servers.

2. Backup Server, When all active servers breach the failure threshold then the backup server will be up and inline to handle the traffic.

3. Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts.

Monitoring, when you get the state of the server or server group with one command.

![Server Group](/img/waf/v7/docs/servergroup.png)

### How to Use:

1. Go to **WAF** > **Listeners** > **Server Groups**
2. Click **Add Server Group** and Configure details.
3. Click **Save Changes**

### Description

##### **Group Name** 
Specify a user-friendly name to identify the server group. The group name takes alphanumeric input.  

```
    Accepted values: String

    Default: Blank  
```


##### **Monitor**
This option allows user to attach any existing monitor to the server group.

```
    Accepted values: Select from existing monitors

    Default: None 
```


##### **SSL**
This option allows user to enable or disable SSL for the server group.

```
    Accepted values: Enable / Disable

    Default: Disable 
```


##### **Max Connection**
This option allows user to specify the number of maximum connections allowed to the specific server.

```
    Accepted values: Integer

    Default: 0
```


##### **Connection Timeout**
This option allows user to specify the connection timeout for the server.

```
    Accepted values: Integer

    Default: 100
```


    Metrics: Seconds

##### **Send Timeout**
This option allows user to specify to send timeout for the server. 
    
```
    Accepted values: Integer

    Default: 100 
```


    Metrics: Seconds 

##### **Read Timeout**
This option allows user to specify the read timeout for the server.

```
    Accepted values: Integer

    Default: 100 
```


    Metrics: Seconds
