---
id: skelton
title: "3.7 · Andrew Skelton"
sidebar_position: 7
---

# 3.7 Andrew Skelton — Morrisons Internal Auditor (2014)

<div className="case-meta">
  <strong>Category:</strong> Disgruntled insider / data exfiltration &nbsp;|&nbsp; <strong>Organisation:</strong> Morrisons (UK supermarket)<br/>
  <strong>Detection trigger:</strong> Newspaper contact before publication
</div>

Skelton, a Morrisons internal auditor who held a grievance over a prior disciplinary matter, extracted payroll data for **99,998 Morrisons employees** from the PeopleSoft HR system and posted it to a file-sharing site, then mailed it on CD to three newspapers.

Skelton was convicted of fraud, computer misuse, and unlawful disclosure of personal data. In civil proceedings, the High Court and Court of Appeal initially found Morrisons vicariously liable; the **UK Supreme Court reversed** those decisions and found Morrisons was **NOT vicariously liable** for the deliberate wrongdoing of an employee acting to harm the employer — a landmark ruling narrowing vicarious liability for deliberate employee wrongdoing. **[Documented — UK Supreme Court judgment [2020] UKSC 12]**

## Signals Present in Retrospect

- Prior documented grievance and disciplinary history **[Documented — judgment]**
- **TOR network access** from a corporate laptop
- Extraction of a **complete employee dataset** from PeopleSoft by a single user account
- Copying to personal removable media

## What Was Missed

- Monitoring of privacy-sensitive bulk dataset exports **[Inferred from documented facts]**
- Detection of **network-anonymisation tooling** on corporate devices
- Alerting on full-dataset exports by individual accounts

## What Triggered Detection

A newspaper contacted Morrisons before publication. Internal controls did not detect the exfiltration. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Inferred]
**Bulk export of an entire sensitive dataset** by a single account is a high-signal event.

**TOR network tooling on a corporate device is a strong indicator of intent to evade monitoring** and should generate an alert regardless of what data is subsequently accessed.

**Controls that would have helped:**
- Alert on full-dataset exports from HR/PeopleSoft by individual user accounts
- Alert on TOR browser execution or TOR network connections on corporate endpoints
- Sensitive dataset access monitoring with role-scope validation
:::
