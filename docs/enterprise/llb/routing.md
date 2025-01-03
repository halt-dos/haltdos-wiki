---
sidebar_position: 4
---


# Routing

Routing is a combination of Fixed Routing and Policy routing which helps the user to transfer data packets from the source to the destination also forwards and routes data packets based on policies or filters. Users can set fixed routing rules by specifying rule name, priority, destination IPs, Outgoing Interface, etc and can selectively apply policies based on specific parameters such as source and destination IP address, source or destination port, protocols or other criteria and then route the packets on user-defined routes.

Routing provides flexible, granular traffic-handling capabilities for forwarding packets. In this way, PBR enables users to achieve optimal bandwidth utilization for business-critical applications.


![routing_rule](/img/llb/v8/llb_routing_rules.png)

### **How to Use :**

1. Go to **Apps > LLB > Routing**

2. Click on **Add Rule**

3. Configure your settings.

4. Click **Save**.

### **Description:**

##### **Rule Enabled**

It specifies rule is enabled or disabled the rule. By default, this option is enabled.

```
    Accepted values: Enabled / Disabled

    Default: Enabled 
```


##### **Rule Name**

This option allows users to select desired rule name.

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Message**

This option allows users to use specifies the custom message for the rule.

```
    Accepted values: String

    Default: Blank 
```


##### **Rule Priority**

This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized.

```
    Accepted values: Integer

    Default: 0 
```


##### **Outgoing Group**

This option allows the user to select the outgoing group from the list of interfaces. If any data packet matches the policy mentioned above will be routed to the Outgoing group. Users can select the group from the drop-down menu.

```
    Accepted values: Select Outgoing Group

    Default: Blank 
```


##### **Gateway IP**

It species the Gateway IP address through which we want to move traffic.

```
    Accepted values: IP

    Default: Blank 
```


##### **Enabled NAT**

It species the Gateway IP address through which we want to move traffic.

```
    Accepted values: Enabled / Disabled

    Default: Enabled 
```


#### Rule Condition

##### **Incoming Group**

This option allows the user to set Incoming Group. Every data packet which enters from Incoming Group will be inspected for the policies mentioned below.

```
    Accepted values: Select Incoming Group

    Default: Blank 
```


##### **Source IP**

This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with mentioned source IP address will only be routed to the outgoing interface which is selected under the Outgoing Interface

```
    Accepted values: IP

    Default: Blank 
```


##### **Destination IP**

This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected  and  packets that match with a mentioned destination IP address will only be routed to outgoing interface which is selected under the Outgoing Interface

```
    Accepted values: IP

    Default: Blank 
```


##### **Protocol**

Slect Protocol

```
    Accepted values: ANY / TCP / UDP / SCTP / CUSTOM

    Default: Blank 
```


##### **Source Port Range**

This option allows the user to set Source Port Range for the rule. The data packets are inspected and data packets that match with mentioned Source Port Range will only be routed to the outgoing interface which is selected under the Outgoing Interface. 

```
    Accepted values: Integer

    Default: Blank 
```


##### **Destination Port Range**

This option allows the user to set Destination Port Range for the rule. The data packets are inspected and data packets that match with mentioned Destination Port Range will only be routed to an outgoing interface which is selected under Outgoing Interface. 

```
    Accepted values: Integer

    Default: Blank 
```

