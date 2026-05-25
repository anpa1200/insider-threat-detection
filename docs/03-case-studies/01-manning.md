---
id: manning
title: "3.1 · Chelsea Manning"
sidebar_position: 1
---

# 3.1 Chelsea Manning — US Army Intelligence Analyst (2010)

<div className="case-meta">
  <strong>Category:</strong> Espionage / mass data exfiltration &nbsp;|&nbsp; <strong>Organisation:</strong> US Army<br/>
  <strong>Detection trigger:</strong> Human tip (Adrian Lamo)
</div>

![Manning case](/img/img-08.png)

Manning downloaded approximately **750,000 classified US government documents**, diplomatic cables, and battlefield reports from the Secret Internet Protocol Router Network (SIPRNet) over several months, using a rewritable CD. The data was transmitted to WikiLeaks. **[Documented — DOJ charging documents, US Army court-martial record]**

## Signals Present in Retrospect

- Anomalous download volume from SIPRNet **[Documented]**
- Repeated removable media use on a classified network **[Documented]**
- Prior reported behavioural and disciplinary concerns that were not escalated to security personnel **[Documented — US Army court-martial record]**

## What Was Missed

- No DLP on removable media **[Documented — Congressional hearing findings]**
- No volume-based anomaly detection on SIPRNet download activity
- HR and command signals were not integrated with technical monitoring
- A continuous evaluation programme was not active at Manning's unit

## What Triggered Detection

A tip from **Adrian Lamo**, to whom Manning had disclosed the activity. Technical controls did not detect the exfiltration. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Inferred]
Physical exfiltration via writable optical or portable media is **invisible to technical controls** if removable media DLP is absent.

The behavioural and command-level signals were present; the programme to act on them was not.

**Controls that would have helped:**
- Removable media DLP on classified networks
- Volume-based anomaly detection on download activity
- Integration of HR/command behavioural signals with security programme
:::
