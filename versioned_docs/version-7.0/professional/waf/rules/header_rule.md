---
sidebar_position: 2
---

# Header Rules

---

### Overview 
Header rules allow application owners to manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client.    
For more information about IP Header, please visit this link: [**IP Header**](https://en.wikipedia.org/wiki/IP_header#:~:text=An%20IP%20header%20is%20header,a%20payload%20for%20user%20data.)

![header_rules](/img/pro-waf/docs/header_rules1.png)
![header_rules](/img/pro-waf/docs/header_rules2.png)

### How to Use:
1. Log into the Haltdos WAF Professional edition web UI console.
2. Then go to **Listeners** > **Rules** > **Header Rules**.
3. Click on **Add Rule** and set relevant parameters described below.
4. Click on **Save Changes**

### Description

##### **Rule Name**

Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input.

    Accepted values: String

    Default: Blank  

##### **Message**

Specify a rule message containing a detailed description to identify the rule which is to be created.

    Accepted values: Description for the rule in String format

    Default: Blank  

##### **Rule Priority**

User can define the rule's priority among various other custom error rules.

    Accepted values: Integer

    Default: Blank  

##### **URI**

Specify the URI or regex for which rule will be applied. 

    Accepted values: Regex

    Default: Blank  

##### **Method**

Select the HTTP method for the rule to validate when matched with the request.

    Accepted values: ALL / GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS

    Default: ALL

##### **Rule Action**

The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:

    Accepted values: ADD HEADER / ADD COOKIE / OVERWRITE HEADER / OVERWRITE COOKIE / REMOVE HEADER / REMOVE COOKIE

    Default: REMOVE COOKIE 

1) **ADD:** This condition will allow adding a value at the specified location.

2) **REMOVE:** This condition will allow removing a value at the specified location.

3) **OVERWRITE:** This condition will allow overwriting a value at the specified location.

If the action is **ADD** then another field is required I.e., **Value** that will be added for the specified **Parameter**.

If the action is **REMOVE**, then the specified parameter is removed.

If the action is **OVERWRITE**, then two other fields are required first is **Search Pattern** (string/regex that should match the existing value) and **Replace** (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. 

:::note Note
 In order to escape the dollar($) character in the replace, add the dollar symbol twice.
:::

#### **Evaluation Phase**

Select the evaluation phase for the rule i.e. Request or Response.

    Accepted values: Request Phase / Response Phase

    Default: Request Phase  

For more information regarding Request and Respose Phase, please refer to this link: [**Request/Respons Phase**](/community/waf/rules/)

##### **Attribute Name**

Specify the attribute name which need to add/delete/overwrite with rule.

    Accepted values: String

    Default: Blank  

##### **Attribute Value**

Specify the attribute value which will be mentioned in the attribute.

    Accepted values: String

    Default: Blank  

##### **Parameter**

This field specifies the name of the header/cookie/ arguments on which action will be performed.


#### **Add Condition**

The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule.

To configure the parameter of the conditions please refer to the following link: [**Conditions**](/professional/waf/rules/conditions)