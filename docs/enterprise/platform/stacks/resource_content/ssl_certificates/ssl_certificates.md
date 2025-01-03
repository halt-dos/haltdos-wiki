---
sidebar_position: 1
---

# SSL Certificates

---

## Overview

An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail.

Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention.

### How to Use:

1. Go to **Stack > Resources > SSL Certificates**
2. Configure your settings.
3. Click Save.

![ssl_certificates](/img/platform/v8/docs/ssl-cert.png)

Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:

- HTTP Validation for single domain certificate
- DNS Validation for wildcard certificate

:::note Note
Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates.
:::

### **Types of supported SSL-Certificate**

Haltdos supports various types of SSL certificates for a particular domain, which are as follows:

- **Copy-Paste** - The user needs to enter the Public Key and Private Key, then click on **Save Changes**.
- **Upload PFX** - The user can choose the PFX file to upload using the Choose File option, enter the Certificate Password, and then select **Save Changes**.
- **Upload PEM** - User can upload the respective PEM, Intermediate Certificate file, CA Bundle File, Private Key File then select **Save Changes**

![ssl_certificates](/img/platform/v8/docs/ssl-cert-2.png)

:::info Info
Supported SSL certificate Extensions by certificate manager are **PFX/P12**, **PEM**, **CRT**, **CER**. 
:::

### **Generate Certificate using Let's Encrypt**

In order to generate a certificate, it's a three-step based process i.e.

1. **Order Certificate:** Select the listener/zone for which you need to order the certificate.
2. **Verify Challenge:** Verify the challenge for generating the certificate.
3. **Issue/Renew Certificate:** Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.

**Step 1: Order Certificate**

1. Select the domain that we are aiming to issue for it.
2. Click on **Generate**.

**Step 2: Verify Certificate**
1. Select appropriate challenge option i.e. **HTTP Challenge or DNS Challenge**.
2. Click on **Verify Challenge**.
3. We have to wait at least **5 minutes** duration in order to re-verify the certificate to change the status to update status.
4. After 5 minutes, click on **Verify Challenge**.

**Step 3: Issue/Renew Certificate**
1. Click on Issue/Renew Certificate.

:::note Note
Certificate verification can fail if verification is not completed within stipulated time.  For any issues, please contact support.
:::

### **Upload Custom Certificate**

To upload custom certificates, follow the steps below:

#### Description:

**Certificate Name**

User can specify the userfriendly name for the certificate.

```
    Accepted values: String

    Default: Blank 
```


**Certificate Domain**

User can specify the userfriendly name for the certificate.

```
    Accepted values: Select Domain

    Default: Blank 
```


**Scope**

Users can defind the scope of the certificate.

```
    Accepted values: Select App / Resources

    Default: Blank
```

**Notification**

Users can enable SSL expiry notification, if configured.

```
    Accepted values: Enable / Disable

    Default: Disable
```

**Notification Duration**

Users can specify time period for expiry notification.

```
    Accepted values: Integer

    Default: 7
```

:::info
It is recommended to add certificate chaining when uploading custom SSL certificates. To add certificate chaining, append the public key and the chain when uploading Public Key
:::

:::info Info
Haltdos Console does support upload of **DV**, **OV** and **EV** type of SSL certificates. It also supports upload of **Single** and **Multi-Domain** Certificates.
:::
