---
sidebar_position: 5
---
# Members

###  Permissions given to different users

----

## Overview 

Haltdos Plaform provides multi-level RBAC access control over Stack. This allows owners to assign users with respective permissions on Haltdos Plaform.

![members](/img/platform/v8/docs/member1.png)
  
![members](/img/platform/v8/docs/member2.png)

### How to Use:

1. Go to **Stack** > **Members**.
2. Click on the button  **Invite Members**.
3. Configure your settings.
4. Click **Save Changes**.

### Description

#### Name  

Enter member name	

```
    Accepted values: String

    Default: Blank 
```


#### Login Mode	

User can specify whether he wants System/ RADIUS / LDAP/ TACACS

```
    Accepted values: SYSTEM / LDAP / RADIUS / TACACS

    Default: Blank 
```


#### Username

User have to specify the username	

```
    Accepted values: String

    Default: Blank 
```


#### Email

Users mail id	

```
    Accepted values: String

    Default: Blank 
```


#### Enable Login

User have to click the enable login button to access the application

```
    Accepted values: Enable / Disable

    Default: Disable 
```


#### Stack Level Permission

User can provide stack level permission  

```
    Accepted values: Enable / Disable

    Default: Disable 
```


### Custom Permisssion

#### Resourse

List of Configured Resoruces

```
    Accepted values: Select Resourse

    Default: ALL 
```


#### Access

User can select different access permission	

```
    Accepted values: Admin / Read & Write / Read Only

    Default: Admin 
```


#### Enable Notification

User whether wants to receive the notification regarding different events of application

```
    Accepted values: Enable / Disable

    Default: Disable 
```


  
#### Different User Permissions:

Haltdos supports three types of user permissions as follows:

1.- **OWNER:** Has the privilege to perform all the operations (add, edit and delete) on the stack, app, listener, and members in the stack, app, listener i.e. Owner, Member, Observer.

2.- **MEMBER:** Has the privilege to perform operations (add, edit and delete) on the stack, app, listener, and delete self membership from the stack/app/listener wherever membership is given.

3.- **OBSERVER:** Has the privilege to only view the stack, app, listener and delete self membership from the stack/app/listener wherever membership is given.


Members have the right to accept/reject the invitation and remove membership if the invitation is already accepted.

:::info INFO
Operations allowed are specific on membership levels for different user permissions. 
If owner delete itself from the stack, and stack exists without OWNER authority. Please contact support to grant user access as OWNER. 
:::

#### Multi-stack access to a user:

Haltdos offers the feature of granting a single user access to multiple stacks.

In a clustered setup, if we include a user with the same username and emailID in another stack, whether with varying or identical permissions, the user is automatically granted access to that additional stack. In the scenario of adding a new user to a stack, they will receive a password from the default password field within the password policy.
