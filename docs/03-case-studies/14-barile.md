---
id: barile
title: "3.14 · Juliana Barile"
sidebar_position: 14
---

# 3.14 Juliana Barile — Former New York Credit Union Employee (2021)

<div className="case-meta">
  <strong>Category:</strong> Sabotage / post-termination destructive access &nbsp;|&nbsp; <strong>Organisation:</strong> New York credit union<br/>
  <strong>Detection trigger:</strong> Data loss discovered after the fact
</div>

Barile, a former employee at a New York credit union, was terminated on **19 May 2021**. Her remote access credentials were not revoked at the time of departure. Two days after termination, on **21 May 2021**, she remotely accessed the credit union's file servers without authorisation and deleted approximately **21.3 GB of data — approximately 20,000 files and 3,500 directories** — in apparent retaliation.

She was charged in June 2021 with intentional damage to a protected computer under the Computer Fraud and Abuse Act (18 U.S.C. § 1030(a)(5)(A)) and subsequently pleaded guilty. **[Documented — DOJ USAO SDNY press release, June 2021]**

## Signals Present in Retrospect

- Post-termination remote authentication using credentials that should have been revoked **[Documented — DOJ press release]**
- Bulk file deletion at scale — 20,000 files and 3,500 directories in a single session — visible in file server and VPN access logs
- Temporal pattern: access occurred **48 hours after documented termination date**

## What Was Missed

- Credentials not revoked on termination **[Inferred from documented facts]**
- No alerting on authentication by a departed employee's account
- No real-time alerting on bulk deletion volume in that session

## What Triggered Detection

The data loss itself — the credit union discovered the deletion **after the fact**. Technical controls did not detect the access in real time. **[Documented]**

## Key Detection Lesson

:::danger Detection Lesson [Inferred]
This case follows the same structural failure as [Cisco/Ramesh (§3.5)](/docs/case-studies/ramesh): **credentials not revoked at departure are an open door**.

Two independent alerting opportunities existed in real time — a **post-termination account authentication** and a **mass deletion event** in the same session — and neither was monitored.

The detection gap was **not a signal-availability problem**; it was a **programme-deployment problem**. Both signals are **Tier 1 controls** requiring no machine learning or baseline periods.

**Controls that would have helped (both Tier 1 — deploy immediately):**
1. Offboarding SLA: credentials revoked within 4 hours of documented departure
2. Alert on any successful or attempted authentication by a terminated account
3. Alert on mass deletion event: >N files deleted in a single session from any single identity
:::
