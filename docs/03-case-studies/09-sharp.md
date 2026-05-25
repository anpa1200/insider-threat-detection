---
id: sharp
title: "3.9 · Nickolas Sharp"
sidebar_position: 9
---

# 3.9 Nickolas Sharp — Ubiquiti Developer (2020–2021)

<div className="case-meta">
  <strong>Category:</strong> Data theft / extortion / insider posing as external attacker &nbsp;|&nbsp; <strong>Organisation:</strong> Ubiquiti Networks<br/>
  <strong>Detection trigger:</strong> VPN dropped during home internet outage — residential IP logged in CloudTrail
</div>

Sharp, a senior developer with cloud admin access, cloned hundreds of GitHub repositories and exfiltrated substantial data from Ubiquiti's AWS infrastructure using his own administrative credentials. He then:

1. Posed as an anonymous external attacker
2. Sent a ransom demand for approximately **$1.9 million in Bitcoin**
3. Simultaneously acted as a **"whistleblower"** to journalists claiming the breach was more severe than Ubiquiti disclosed
4. **Participated in Ubiquiti's internal incident response** as a senior employee

He was sentenced to **six years in federal prison**. **[Documented — DOJ press release, criminal complaint]**

## Signals Present in Retrospect

- AWS CloudTrail recorded the mass repository cloning and infrastructure access **under Sharp's own credentials** **[Documented — criminal complaint]**
- A commercial VPN (Surfshark) masked the source IP during most activity
- The ransom demand and the whistleblower communications followed immediately after the data access

## What Triggered Detection

During a home internet outage, Sharp's VPN connection dropped while he continued working. His **residential IP was logged in CloudTrail** for a brief unmasked window, linking the activity to his home address. **[Documented — DOJ press release]**

## Key Detection Lesson

:::info Detection Lesson [Documented + Inferred]
CloudTrail logs **contained the full evidence trail throughout the incident**. The actor was identified not by monitoring but by an **operational security failure on his own part**.

**[Inferred]** Mass repository cloning and high-volume administrative AWS API activity under a single admin identity should trigger a **real-time alert independent of source IP**.

The case also illustrates the risk of an **insider participating in their own incident response** — require dual-control for IR team access during active investigations.

**Controls that would have helped:**
- Alert on mass repository cloning in a single session by a single admin identity
- Alert on high-volume administrative AWS API activity outside expected operational patterns
- IR protocol: exclude parties with privileged access from their own incident response
:::
