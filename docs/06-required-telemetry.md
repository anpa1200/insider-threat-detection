---
id: required-telemetry
title: "6 · Required Telemetry"
sidebar_position: 7
---

# 6. Required Telemetry

![Required telemetry](/img/img-19.png)

No detection programme compensates for missing telemetry. The analytics in §4 require the following log sources to be collected, forwarded to SIEM, and retained for the minimum periods shown.

:::danger
The **HR system integration** is the most underinvested integration in most programmes and the one with the greatest leverage over detection quality.
:::

---

## Identity and Access (Foundation)

| Source | Required Fields | Minimum Retention |
|--------|----------------|-------------------|
| IdP sign-in logs (Entra ID, Okta, ADFS, Ping) | User UPN, device ID, IP, ASN, MFA method, session ID, conditional access result | 1 year |
| Active Directory security audit events | 4624, 4625, 4720, 4728, 4732, 4756, 4740, 4767, 1102 from all domain controllers | 1 year |
| **HR system integration** | Current employment status, departure date, role, department, manager — fed to SIEM **within hours of change** | Ongoing |

---

## Endpoint

| Source | Minimum Events | Notes |
|--------|---------------|-------|
| **Sysmon** (maintained configuration) | 1 (process create + cmdline), 2 (file creation time change), 3 (network connection), 7 (image loaded), 11 (file create), 12/13 (registry create/modify), 17 (named pipe), 22 (DNS query), **23 (file delete — requires Sysmon v7.01+)** | Deploy with community-maintained config (SwiftOnSecurity or Florian Roth as baseline) |
| Windows process creation | Event 4688 + "Include command line in process creation events" policy | Required for all endpoint detection methods |
| DLP endpoint agent | Removable media events, sensitive file-path access, print operations | Required for §4.1 USB and §4.2 print |

---

## Data and SaaS

| Source | Notes | Retention |
|--------|-------|-----------|
| Microsoft 365 Unified Audit Log | All available operations. `MailItemsAccessed` requires Microsoft Purview Audit (Premium). | 1 year (standard tier) |
| File server object access (Event 4663) | SACLs on **sensitive directories only** — applying SACLs to all files generates unmanageable volume | 1 year |
| CASB or web proxy | Personal cloud storage and SaaS upload visibility; HTTPS inspection required for URL-level fidelity | 90 days minimum |
| SaaS platform audit logs | GitHub, GitLab, Slack, Jira, Confluence, Salesforce, Workday, ServiceNow — availability and depth vary by licence tier | Per-platform |

---

## Cloud Infrastructure

| Source | Scope |
|--------|-------|
| **AWS CloudTrail** | All regions, all management events; S3 data events on sensitive buckets; Lambda invocation logging on production functions |
| **Azure Activity Log** | Microsoft Defender for Cloud alerts |
| **GCP Cloud Audit Logs** | Admin Activity; Data Access for sensitive projects |

---

## Network

| Source | Notes |
|--------|-------|
| Full QNAME DNS resolver logs | Windows DNS debug logging or Zeek `dns.log` on recursive resolvers; standard Windows Event logs **do not contain full query names** |
| Web proxy logs | Full URI, user-identity attribution (not just IP), and content-type |

---

## HR Integration (Critical)

| Data | Feed Latency Requirement |
|------|-------------------------|
| Departure dates | **At least 24 hours before departure date where feasible**; within hours of same-day resignation |
| Leave calendar | Daily sync minimum |
| Role change events (transfers, promotions, department moves) | Within hours of change |
| Disciplinary and performance flags | Require HR/Legal approval framework before integration with security monitoring in most jurisdictions |

---

## Retention Guidance

| Log Category | Minimum Retention | Rationale |
|-------------|-------------------|-----------|
| Identity / IdP | 1 year | Cover 86-day average dwell time + investigation window |
| Cloud control-plane | 1 year | Cover post-termination access discovery |
| SaaS audit | 1 year | Cover departure-window investigation |
| Endpoint (Sysmon) | 90 days minimum | High volume; balance cost vs investigation window |
| **Long-retention (identity, control-plane, network device)** | **3 years** | Desjardins ran 26 months; Zheng ran over a decade |
