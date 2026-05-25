---
id: behavioural-heuristics
title: "4.2 · Behavioural Heuristics"
sidebar_position: 2
---

# 4.2 Behavioural Heuristics

![Behavioural heuristics](/img/img-11.png)

These detections require a **baseline period (typically 30–90 days)** and produce more false positives than deterministic rules. They are essential for catching "authorised but abnormal" behaviour that deterministic rules cannot reach. **Tune against your environment before enabling automated alerting.**

---

## After-Hours Access

Catches activity outside the user's established working-hours baseline.

**Log sources:**
- IdP sign-in timestamps
- File server access timestamps
- SaaS audit log timestamps
- EDR process execution timestamps
- Badge-access records (correlate with digital access where available)

**Detection logic:**
Establish a per-user working-hours baseline over a 30–90 day rolling window. Alert when activity occurs materially outside the user's normal distribution **AND** is combined with at least one identity-context signal:
- Impossible travel
- Access from an unmanaged or non-compliant device
- Conditional access policy failure
- MFA anomaly
- Sensitive resource access
- Bulk data volume
- Departure status
- Privilege use

**Time-of-day alone is a weak signal and must not be used as a standalone alert trigger.** **[Inferred]**

:::warning Note
In modern **asynchronous remote-work environments**, time-of-day has become a near-dead standalone signal. An organisation with employees across time zones, flexible work arrangements, or WFH policies will have significant legitimate after-hours activity across every cohort.

Sophisticated, planned insiders deliberately operate **within their own normal working hours** to evade temporal detection. After-hours detection has higher value for reactive and opportunistic actors.
:::

---

## Access Outside Role Scope

Catches users accessing data, systems, or applications that their peer cohort never or rarely accesses.

**Log sources:**
- File server access logs (Event 4663 with SACL — see EPS warning in §4.1)
- SharePoint site audit logs
- CRM and ticketing system audit logs
- ERP audit logs
- Database access logs

**Detection logic:**
Build access frequency profiles per resource path per role group. Alert when a user accesses a resource with **zero or near-zero access frequency** among their peer group, particularly when the access is high-volume, involves sensitive data, or lacks an open ticket or business purpose. **[Inferred]**

**Real cases:** [Snowden](/docs/case-studies/snowden) — sysadmin files outside operational assignment. [Yahoo/Ruiz](/docs/case-studies/ruiz) — user-data access with no business purpose. [Twitter](/docs/case-studies/twitter) — account lookups on politically sensitive profiles with no operational context. **[Documented]**

---

## Peer-Group Deviation

Catches users who remain within formally authorised systems but behave in ways that differ materially from colleagues in the same role.

**Detection logic:**
Cluster users by role, department, and seniority. Compute a **deviation score** comparing individual behaviour against the cluster centroid across:
- Resource access diversity
- Data volume
- Application mix
- Time-of-day distribution
- External communication volume

Alert when a user's deviation score places them in the **top 1–2% of their cluster**, particularly when combined with an HR risk or departure flag. **[Inferred]**

:::info Research Context
Academic work using the CERT Insider Threat Synthetic Dataset (CMU-CERT r4.2–r6.2) has explored peer-group approaches. No specific performance figures from that research are cited here, as those datasets are synthetic and limited in scale; **benchmark results from synthetic datasets should not be taken as production performance guarantees**.
:::

---

## Data Staging Pattern (Composite)

Catches the sequence of collection → archiving → external transfer or removable media write.

**Log sources:**
Process creation logs; file creation/rename logs; repository read logs; DLP events; removable media events; network/SaaS egress logs.

**Detection logic:**
Within a configurable time window, look for:
1. Access to monitored sensitive paths
2. Archive utility execution with a sensitive source path
3. File write to removable media, upload to personal cloud, or email to external address

Require **at least two of the three post-access steps** for alert generation. **[Inferred]**

**Real cases:** [Levandowski](/docs/case-studies/levandowski) — repository access followed by extended removable media attachment. [Desjardins](/docs/case-studies/desjardins) — shared-drive to endpoint to USB. [Manning](/docs/case-studies/manning) — SIPRNet download followed by CD-RW write. **[Documented]**

---

## Departing Employee Volume Spike

Catches bulk data staging in the departure window — consistently the highest-risk period across IP-theft cases.

**Log sources:**
HR departure date flag (must reach SIEM within hours of resignation); download event counts; DLP events; removable media events; first-time repository access events.

**Detection logic:**
When HR flags a departure:
1. Enrol the user in a departure watchlist
2. Lower anomaly thresholds for data movement alerts
3. Alert on any combination of: download volume materially above 90-day average; first-time access to data outside current role; archive creation on sensitive paths; upload to personal cloud

**[Inferred]**

**Real cases:** [Levandowski](/docs/case-studies/levandowski) — departure window data staging. [Tesla 2023](/docs/case-studies/tesla) — 100 GB export by departing employees. **[Documented]**

---

## Access Velocity Anomaly

Catches users accessing hundreds of unique files in a short period — staging behaviour inconsistent with normal reading or working speed.

**Log sources:**
File server audit Event 4663; SharePoint `FileDownloaded` and `FileAccessed` events.

**Detection logic:**
Alert when a user's unique file access count in a rolling **60-minute window** exceeds a threshold inconsistent with normal human workflow. A starting point for knowledge workers might be >200 unique files per hour, but this **must be calibrated per role and environment**. Scope to interactive sessions to reduce automation false positives. **[Inferred]**

---

## Print-Volume Spikes

Catches conversion of digital data to paper — bypassing all digital file-movement controls.

**Log sources:**
- Microsoft-Windows-PrintService/Operational Event **307** (includes user, printer, document name, page count, job size)
- DLP print channel monitor
- Network print server audit logs

:::note
PrintService/Operational log forwarding requires **deliberate configuration** in most SIEM deployments and is not present by default.

This detection is **Tier 2, not Tier 1**, despite its appearance in many reference guides. Alert when a user's daily page count from sensitive applications exceeds their 90-day rolling average by a meaningful multiple.
:::
