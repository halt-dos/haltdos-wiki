---
sidebar_position: 5
---

# Task Management

### Scheduling repeated tasks in Haltdos Platform

---

Haltdos supports automating repeated tasks such as reports, auto-profiling, periodic learning, scanning, etc. Stack users can configure these schedules as per their choice of periodicity to get automated emails / API alerts from the solution.

![scheduler](/img/platform/v8/docs/tamanag.png)

### How to Use:

1. Go to **System > Settings > Task Management**
2. Configure your settings
3. Click **Save Changes**

### Description

**Enabled**

Enable it to make the task active

```
    Accepted values: Enable / Disable

    Default: Disable 
```


**Task Name**

Users can specify the Task Name as per scheduling task.

```
    Accepted values: String

    Default: Blank 
```


**Task Occurrence**

It specifies type of occurrence for the task like for Once, minute, hour or daily.

```
    Accepted values: Select the task occurence

    Default: Blank 
```


**Next Run**

User can specify the date & time for the task 

```
    Accepted values: Integer

    Default: Blank 
```


**Timezone**        

Select the timezone for the task scheduled.

```
    Accepted values: Select Timezone

    Default: Asia/Calcutta 
```


**Task Type**

Specify the type of task

```
    Accepted values: Generate Instance Report / Generate App Report / Generate Incident Report / Generate IOC Report / Generate False Positive Report / Generate Task Governance Report

    Default: Generate Instance Report 
```


**Resource** 

Specify the listener or  profile

```
    Accepted values: Select App/Resource

    Default: Blank 
```


**Dashboard**

Select the dashboard for the report 

```
    Accepted values: Select Dashboard

    Default: Blank 
```


**Report Duration**  

Specify the occurrence of the report

```
    Accepted values: Select Duration

    Default: Blank 
```


**Enable Reporting**  

User can Enable / Disable the reporting

```
    Accepted values: Enable / Disable

    Default: Enable 
```


**Recipients**  

Specify the Recipients

```
    Accepted values: Enable/Disable

    Default: Disable
```

