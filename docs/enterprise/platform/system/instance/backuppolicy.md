---
sidebar_position: 3
---

# Backup Policy

Integration with FTP server and S3 for backing up

---

## Overview

Haltdos supports periodic or on-demand backup for storing logs and policies to external FTP / SFTP servers and S3 storage. The platform also supports restoring from FTP if needed.
By default, Haltdos retains logs locally on the device for a duration of 90 days. This duration can be increased to at most 550 days depending upon organization policy.

:::note Note 
It is recommended to configure periodic backup to avoid data loss and ensure log availability for compliance and forensic examination
:::

![Backup Policy1](/img/platform/v7/docs/backup1.png)

![Backup Policy2](/img/platform/v7/docs/backup2.png)

How to Use:
1. Go to **Stack** > **Instances** > **Backup Policy**
2. Configure your settings
3. Click **Save Changes**

| PARAMETERS           | ACCEPTED VALUES     | DEFAULT |
|----------------------|---------------------|---------|
| Log Retention Period | Integer             | 90 days |
| Cleanup Enabled      | Boolean             | false   |
| FTP Backup Enabled   | Boolean             | false   |
| FTP Backup Host Name | String              | Empty   |
| SFTP Enabled         | Boolean             | false   |
| FTP Authentication   | Boolean             | false   |
| FTP Username         | String              | Empty   |
| FTP Password         | String              | Empty   |
| FTP Backup Directory | String              | Empty   |
| S3 Backup Enabled    | Boolean             | false   |
| S3 Region            | String              | Empty   |
| S3 Bucket Name       | String              | Empty   |
| S3 Path              | String              | Empty   |
| S3 Access Key        | String              | Empty   |
| S3 Secret Key        | String              | Empty   |

## Description

**Log Retention Period**

This policy allows users to set the retention period for backups. This policy refers to the number of days for which logs retain locally on the device.

**Backup Enabled**

This option allows users to enable or disable the backup settings.

**Cleanup Enabled**

This option allows users to enable or disable the backup settings.

**FTP Backup Host Name**

This option allows users to specify the hostname or IP address of the backup server. 

**SFTP Enabled**

This option helps to choose if the user wants data transfer is over SFTP (Port 22), otherwise data will transfer using FTP (Port 21). Users can enable or disable the settings as per their chioce. By default, it is set to disable.

**FTP Authentication**

This option allows users to set a user authentication method to access the backup server. By default, this is set to disable.

**FTP Username**
Users can only use this option when Authentication is set to enable. This option allows users to set a username to authenticate the people

**FTP Password**
This option allows users to set the desired password to authenticate the user. This option will only be available when authentication is set to enable.

**FTP Backup Directory**
This option allows users to specify the directory on the backup server where they can use credential information to access the backup server.

**S3 Backup Enabled**
This option allows users to enable or disable if the date transfer is over S3.

**S3 Region**
This option allows users to specify the AWS region where the S3 bucket is located.

**S3 Bucket Name**
This option allows users to specify the container for storing objects in S3.

**S3 Path**
This option allows users to specify the directory path for storing logs in S3.

**S3 Access Key**
This option allows users to specify the unique identifier of the user or application making the request.

**S3 Secret Key**
This option allows users to specify the security credential to access the S3 service.