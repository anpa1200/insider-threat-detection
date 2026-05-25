---
id: duronio
title: "3.3 · Roger Duronio"
sidebar_position: 3
---

# 3.3 Roger Duronio — UBS Systems Administrator (2002)

<div className="case-meta">
  <strong>Category:</strong> Sabotage (logic bomb) &nbsp;|&nbsp; <strong>Organisation:</strong> UBS PaineWebber<br/>
  <strong>Detection trigger:</strong> Destructive code execution (system failure event)
</div>

Duronio, a disgruntled UBS systems administrator who had been denied a bonus, planted malicious code on more than **1,000 computers and servers** across UBS's network, timed to execute the morning after he resigned. The code deleted files, causing more than **$3 million in damage** and disrupting brokerage operations. Duronio also shorted UBS stock in anticipation of the attack. **[Documented — DOJ press release, criminal complaint, sentencing record]**

## Signals Present in Retrospect

- Prior grievance and disciplinary history **[Documented — trial record]**
- Unusual scheduling activity on production servers
- Scripts placed outside normal change windows
- A financial position that would profit from UBS stock decline

## What Was Missed

- Admin-action auditing that would have detected unusual scheduled task or script creation outside a change window by a non-IT-automation account
- Pre-trigger behavioural monitoring
- CERT's sabotage data shows **80% of sabotage cases** displayed concerning behaviour beforehand visible to management

## What Triggered Detection

The **destructive execution** of the code — a system failure event — triggered investigation and forensic attribution. **[Documented]**

## Key Detection Lesson

:::danger Detection Lesson [Inferred]
Logic bombs are detectable **before execution** through monitoring of scheduled task creation by non-standard accounts outside change windows.

By the time the code fires, detection is **too late for prevention**.

**Controls that would have helped:**
- Alert on any scheduled task creation by a non-IT account or outside change windows (Windows Security Event 4698)
- Alert on WMI subscription creation outside change windows (Event 5861)
- Correlate admin grievance/HR flags with elevated monitoring of privileged account actions
:::
