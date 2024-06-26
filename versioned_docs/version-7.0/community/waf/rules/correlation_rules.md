---
sidebar_position: 6
---

# Correlation Rules
   
### Overview
Correlation rules support using compounding logic to make more advanced rules that address your security needs. For example, "(Condition 1 and Condition 2)" means that if Condition 1 and Condition 2 are met, WAF should take the action that's specified in the correlation rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses and might specify to block traffic from a certain IP address, and only if a certain browser is being used.
   
![Correlation Rule](/img/ce-waf/docs/correlation_rule.png)
   
### How to Use:
1. Log onto the Haltdos Community WAF portal.
2. Go to **WAF** > **Rules** > **Correlation Rules**.
3. Click on **Add Rule** and set relevant parameters.
4. Click on **Save changes**.
   
![correlation rule](/img/ce-waf/docs/correlation_rule22.png)
   
### Description
   
#### Rule Name
Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input.

    Accepted values: String

    Default: Blank  

#### Rule Message
Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: Description for the rule in String format

    Default: Blank  

#### Rule Priority
It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0.

    Accepted values: Integer 

    Default: 0  

#### URI
Users are allowed to specify the URI on which the tamper rule will be applied.

    Accepted values: URI 

    Default: Blank  

#### Method
Users are allowed to select the HTTP method for the rule to extract when matched with the request.

    Accepted values: Any / Get /  Post / Put / Delete / Patch / Head / Options 

    Default: Any  

#### Rule Action
The following actions are available to the User-

    Accepted values: Record-request / Drop & Record-request / Bypass Request / Redirect / No Actions

    Default: Record-request  

1. **DROP & RECORD REQUEST** - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF.
2. **RECORD REQUEST** - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos.
3. **BYPASS REQUEST** - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF.
4. **REDIRECT** - If the request satisfies the rule, then the user is redirected to another page.
5. **NO ACTION** - If the request satisfies the rule, then no action will be performed on the current request.

#### Add Rule Condition
By clicking on Add Rule Condition button, the end-user can add specify the location to be whitelisted. At least, one location is mandatory for this rule.

#### Rule ID
Users can specify the rule Id for which condition should be created.

    Accepted values: String 

    Default: Blank  

#### Match
Users can specify whether the rule should be matched or not matched.

    Accepted values: MATCH 

    Default: MATCH / NOT MATCH


