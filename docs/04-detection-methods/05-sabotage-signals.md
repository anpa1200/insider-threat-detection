---
id: sabotage-signals
title: "4.5 · Sabotage Signals"
sidebar_position: 5
---

# 4.5 Sabotage Signals

![Sabotage signals](/img/img-14.png)

Sabotage detection requires monitoring of **control-plane actions separately** from standard data access monitoring. Standard email and file-access DLP does not cover this threat category.

---

## Mass Deletion Event

Catches bulk deletion of VMs, repository contents, S3 objects, database records, or file server directories.

**Log sources:**
- AWS CloudTrail `TerminateInstances`, `DeleteBucket`, `DeleteObject` at bulk scale
- Azure Activity Log VM deletion events
- File server audit Event **4660** correlated with Event **4663** at high volume
- Database audit `DROP TABLE` / unqualified `DELETE`

**Detection logic:**
Alert when deletion operation count from a single identity exceeds a threshold within a defined window — specific values must be calibrated per role and environment. **[Inferred]**

**Real case:** [Cisco/Ramesh](/docs/case-studies/ramesh) — 456 VMs deleted in a concentrated burst visible in CloudTrail. **[Documented]**

---

## Backup Deletion and Recovery-Denial

Catches deletion of backup objects, VSS shadow copies, or disabling of backup policies.

**Log sources:**
- Backup system logs
- AWS `DeleteBackup`, `DeleteRecoveryPoint`
- Azure Backup vault deletion events
- Sysmon Event 1 with command-line: `vssadmin delete shadows`, `wmic shadowcopy delete`, `bcdedit /set recoveryenabled no`

**Detection logic:**
Alert on any backup deletion by a **non-backup-admin account outside a documented change window** — this has near-zero legitimate ad-hoc prevalence. **[Inferred]**

---

## Logic Bomb Artefacts

Catches delayed destructive code planted in scheduled tasks, WMI subscriptions, or cron jobs.

**Log sources:**
- Windows Security Event **4698** (scheduled task created)
- Microsoft-Windows-WMI-Activity/Operational Event **5861** (new permanent WMI subscription)
- Linux auditd crontab modification events

:::note
Events 4698 and 5861 are **Windows Security and WMI-Activity events** respectively — they are **NOT Sysmon events**.
:::

**Detection logic:**
Alert on any new scheduled task or WMI subscription created by a non-IT account or outside a documented change window, particularly where the consumer executes a script from a **user-writeable path**. **[Inferred]**

**Real case:** [UBS/Duronio](/docs/case-studies/duronio). **[Documented]**

---

## CI/CD Pipeline Tampering

Catches modification of build, release, or deployment pipeline configurations.

**Log sources:**
- Source-control audit for commit author, branch, and changed file paths
- Branch protection rule modification events
- Pipeline definition change events (GitHub Actions, GitLab CI, Jenkins)

**Detection logic:**
- Alert on direct commits to a protected branch by accounts that normally work on feature branches
- Alert on changes to pipeline workflow files by non-pipeline-owner accounts
- Alert on pipeline configuration changes outside approved change windows **[Inferred]**

---

## Configuration Changes Outside Change Windows

Catches sabotage preparation, firewall modification, or stealth privilege expansion.

**Log sources:**
- CMDB and change calendar integration
- Infrastructure-as-code repository commit audit
- Cloud security group and IAM policy modification events
- Firewall syslog

**Detection logic:**
Alert when a privileged user modifies production configuration — firewall rules, GPO, IAM policies, DNS records — **without an associated open change ticket**. **[Inferred]**
