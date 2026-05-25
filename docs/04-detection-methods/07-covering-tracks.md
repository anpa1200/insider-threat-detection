---
id: covering-tracks
title: "4.7 · Covering-Tracks Detection"
sidebar_position: 7
---

# 4.7 Covering-Tracks Detection

![Covering tracks](/img/img-16.png)

Covering-tracks activity typically occurs in **Phase 6**, after the primary harmful act. Detecting it provides a **second detection opportunity**, and the forensic trail preserved before covering-tracks activity completes often determines whether prosecution is viable.

---

## Windows Event Log Clearing

**Log sources:**
- Windows Security Event **1102** ("The audit log was cleared" — Security channel)
- Microsoft-Windows-Eventlog/Operational Event **104** (log cleared for System, Application, or other non-Security channels)

**Alert on any occurrence outside a documented decommission or gold-image rebuild.** There is no legitimate automated process that clears the Security Event Log on a production system.

Extend to cloud logging disablement:
- AWS `StopLogging`, `DeleteTrail`
- Azure Diagnostic Settings deletion
- GCP audit log sink deletion
- SIEM forwarding agent silence

---

## Anti-Forensic Tool Execution

**Log sources:**
Sysmon Event 1 / Event 4688 command-line:
- `sdelete.exe`
- `cipher.exe /w`
- `BleachBit.exe`
- `Eraser.exe`
- `secure-delete` or `shred` (Linux)

On endpoints that also accessed sensitive repositories. Alert on execution of known **secure-deletion tools outside a documented IT decommissioning workflow**.

**Real cases:** [Yahoo/Ruiz](/docs/case-studies/ruiz) — computer and hard drive destroyed post-detection. [Levandowski](/docs/case-studies/levandowski) — laptop reformatted during notice window. **[Documented — case records]**

---

## PowerShell History Deletion

**Log sources:**
- Sysmon Event **23** (FileDelete, available from Sysmon v7.01 onwards) targeting `%APPDATA%\Microsoft\Windows\PowerShell\PSReadline\ConsoleHost_history.txt`
- PowerShell Script Block Logging Event **4104** for execution of the `Clear-History` cmdlet (requires Script Block Logging enabled via Group Policy)

:::note
Sysmon Event 11 is FileCreate, not FileDelete — use **Event 23** for file deletion detection.
:::

Alert on deletion of the history file or execution of `Clear-History`, particularly within a short window of sensitive operations. **[Inferred]**

---

## File Timestamp Manipulation (Timestomping)

**Log sources:**
Sysmon Event **2** (FileCreateTime changed) — fires when any process programmatically modifies a file's CreationTime attribute.

Alert on any Event 2 occurrence on files in sensitive directories or on archive files. Cross-reference with **USN journal entries** where available.

---

## Linux Audit Trail Manipulation

**Log sources:**
- auditd configuration changes (`auditctl -e 0` disabling auditing)
- Deletion or truncation of `/var/log/audit/audit.log`, `/var/log/auth.log`, `/var/log/secure`

Alert on any audit configuration change that reduces logging scope.

:::danger
Forward auditd logs to SIEM via a **write-protected pipeline** that host-level root access cannot modify — if audit logs exist only on the local host, a privileged insider can destroy the evidence trail entirely.
:::
