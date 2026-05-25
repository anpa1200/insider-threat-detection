---
id: snowden
title: "3.2 · Edward Snowden"
sidebar_position: 2
---

# 3.2 Edward Snowden — NSA Contractor (2013)

<div className="case-meta">
  <strong>Category:</strong> Espionage / data exfiltration &nbsp;|&nbsp; <strong>Organisation:</strong> NSA / Booz Allen Hamilton<br/>
  <strong>Detection trigger:</strong> Journalistic publication after Snowden left the country
</div>

Snowden, a system administrator contractor at the NSA, exfiltrated a large volume of classified files from NSA systems, primarily to removable media. He used his sysadmin access to reach files outside his operational assignment and, according to the NSA Inspector General report, **obtained credentials from colleagues** under the pretext of needing them for system administration tasks. **[Documented — NSA Office of Inspector General, 2016]**

## Signals Present in Retrospect

- Sysadmin accessing files outside his operational scope **[Documented — NSA OIG report]**
- Credential use that did not match the nominal account owners' normal access patterns **[Documented]**
- High-volume, scripted file downloads **[Documented]**
- Insider threat programme **not deployed** to the NSA facility in Hawaii where Snowden worked **[Documented — Congressional findings]**

## What Was Missed

- No continuous monitoring of sysadmin activity **[Documented — NSA OIG report]**
- No need-to-know enforcement at the document level for privileged accounts
- No anomaly detection on access scope or credential use inconsistencies

## What Triggered Detection

Snowden departed the country before any detection occurred. Discovery was via **journalistic publication** of the disclosed documents. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Inferred]
Privileged users (sysadmins, contractors with elevated access) require **monitoring separate from standard users**.

Access-based need-to-know enforcement and anomaly detection on privileged account scope are prerequisites.

The credential-sharing pattern — documented in the NSA OIG report — was a **detectable identity anomaly**.

**Controls that would have helped:**
- Privileged access monitoring (PAM) with session recording
- Need-to-know enforcement beyond administrative role scope
- Anomaly detection on credential use inconsistency (different login patterns for shared accounts)
:::
