---
sidebar_position: 8
---


# Cloud Signaling

---

A faster, automated approach to comprehensive Link Load Balancing need comprehensive, integrated protection from the data center edge to the service provider cloud. For example, when data center operators discover they are under a service-disrupting DDoS attack, they should be able to quickly mitigate the attack in the cloud by triggering a signal to upstream infrastructure of their provider’s network. 

![signaling_settings](/img/llb/v8/llb_cloud_signaling.png)

### How to Use

1. Go to **Apps > LLB > Security > Cloud Signaling**
2. Add **Provider** and configure the details as per the requirement.
3. Click on **Save Changes**


| Settings                | Accepted Values  | Default |
|-------------------------|------------------|---------|
| Enabled                 | Boolean          | False   |
| Provider Name           | String           | Empty   |
| Signalling URL          | String           | Empty   |
| Authentication User     | String           | Empty   |
| Authentication Password | String           | Empty   |
| Signalling Trigger      | Integer          | 0       |
| Managed Object IDs      | Integer          | Empty   |
| IP Range                | Integer          | Empty   |

### Description

##### **Enabled**

Enable to allow the signaling to operate.

```
    Accepted values: Enabled / Disabled

    Default: Blank
```


##### **Provider Name**

Specify the name of the upstream provider.

```
    Accepted values: String

    Default: Blank
```


##### **Signaling URL**

Specify API endpoint of upstream provider for sending cloud signal

```
    Accepted values: URL

    Default: Blank
```


##### **Authentication User**

Specify password user credentials for interactive with upstream cloud signaling API

```
    Accepted values: String

    Default: Blank
```


##### **Authentication password**

Specify password credentials for interactive with upstream cloud signaling API

```
    Accepted values: String

    Default: Blank
```


##### **Signaling Trigger**

Specify the bandwidth threshold (in Mbps) beyond with a cloud signal that will be sent to the upstream provider

```
    Accepted values: Integer

    Default: Blank
```


##### **Managed Object ID**

Specify unique customer ID provided by the upstream providers for further authentication

```
    Accepted values: Integer

    Default: Blank
```


##### **IP Range**

Users can specify the IP range

```
    Accepted values: IP

    Default: Blank
```

