---
sidebar_position : 13
---
# Defacement Rules
   
### Overview
   
Defacement rules in a Web Application Firewall (WAF) are designed to identify and block suspicious activities or payloads that could alter website content maliciously.   
  
Haltdos WAF strengthens this protection by analyzing incoming requests for attack patterns, blocking unauthorized file uploads or injections, and monitoring content integrity using methods like checksum validation. It employs behavioral analysis and pre-configured rules to prevent common defacement tactics, such as exploiting admin panels or bypassing security controls. By proactively detecting and mitigating defacement attempts, Haltdos WAF ensures websites maintain their intended appearance and functionality while safeguarding content integrity.  

![Log Rules](/img/waf/v8/docs/defacementRule.png)
   
### How to Use:
1. Follow the links: **WAF** > **Listeners** > **Profiles** > **Rules** > **Log Rules**
2. Click on Add Rule and set relevant parameters described in the table below.
3. Click on **Save Changes**.
   
### Description

##### **Rule Name**
Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

```
    Accepted values: String

    Default: Blank  
```


##### **Rule Message**
Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule.

```
    Accepted values: Description for the rule in String format

    Default: Blank  
```


##### **Rule Priority**
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. 

```
    Accepted values: Integer

    Default: 0  
```


##### **URI**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

```
    Accepted values: Regex

    Default: Blank  
```


##### **Method**
Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS.

```
    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL  
```


##### **Evaluation Phase**
Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied.

```
    Accepted values: Request Phase / Response Phase

    Default: Request phase  
```


##### **Rule Action**
Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning.

```
    Accepted values: No Action / Send Empty Response / Send Empty Response

    Default: No Action  
```

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/cloud/waf/listener/profiles/rules/ruleCond).
