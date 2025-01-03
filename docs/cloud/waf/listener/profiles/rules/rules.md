---
sidebar_position: 6
---

# Rules

### Configure custom rules for your website

Haltdos WAF comes with a pre-configured, platform-managed rule set that offers protection from many types of attacks. These attacks include cross-site scripting, SQL injection, and others. With these managed rules, you can quickly get started and protect your web application or APIs against common threats like the OWASP Top 10 security risks, threats specific to Content Management Systems (CMS) like WordPress or Joomla, or even emerging Common Vulnerabilities and Exposures (CVE).
However, there are instances where you might want to write your own rules to augment platform-managed rule set rules. With custom rules, you can create your own rules, which are evaluated for each request that passes through WAF. These rules hold a higher priority than the rest of the rules in the managed rule sets. The custom rules contain a rule name, a rule priority, and an array of matching conditions. If these conditions are met, the specified action will be taken on the request.

Custom rules support using compounding logic to make more advanced rules that address your security needs. For example, "Condition 1 and Condition 2 or Condition 3" means that if Condition 1 and Condition 2 are met, or if Condition 3 is met, WAF should take the action that's specified in the custom rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses 'and' might specify to block traffic from a certain IP address, and only if a certain browser is being used.

Unlike other WAFs, Haltdos WAF has multiple types of Rules designed to target specific use cases.

1. [**Error Rules**](error_rules.md)
2. [**Form Rules**](form_rules.md)
3. [**Firewall Rules**](firewall_rules.md)
4. [**Rate Limit Rules**](ratelimit_rules.md)
5. [**Whitelist Rules**](whitelist_rules.md)
6. [**Response Rules**](response_rules.md)
7. [**Behavior Rules**](behavior_rules.md)
8. [**Tamper Rules**](tamper_rules.md)
9. [**Correlation Rules**](correlation_rules.md)
10. [**Deception Rules**](deception_rules.md)
11. [**Script Rules**](script_rules.md)
12. [**Log Rules**](log_rules.md)
13. [**Defacement Rules**](defacementRule.md)
