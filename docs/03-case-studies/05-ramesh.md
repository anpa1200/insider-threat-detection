---
id: ramesh
title: "3.5 · Sudhish Kasaba Ramesh"
sidebar_position: 5
---

# 3.5 Sudhish Kasaba Ramesh — Cisco Engineer (2018)

<div className="case-meta">
  <strong>Category:</strong> Sabotage / post-termination access &nbsp;|&nbsp; <strong>Organisation:</strong> Cisco Systems<br/>
  <strong>Detection trigger:</strong> Service outage (WebEx Teams down for ~2 weeks)
</div>

Ramesh, a former Cisco engineer, retained access to Cisco's AWS cloud environment for approximately **five months after resignation** because his credentials were not revoked. He deployed code from his personal Google Cloud account that deleted **456 virtual machines** supporting the Cisco WebEx Teams platform, taking the service offline for approximately two weeks and affecting approximately 16,000 WebEx Teams accounts. Cisco's remediation cost approximately **$1.4 million**. **[Documented — DOJ press release, criminal complaint]**

## Signals Present in Retrospect

- Post-departure authentication to a production AWS environment using credentials that should have been revoked **[Documented — criminal complaint]**
- Access originating from a personal external cloud account
- Bulk VM deletion — 456 resources in a concentrated burst — **visible in CloudTrail management event logs**

## What Was Missed

- Credentials not revoked on resignation **[Inferred from documented facts]**
- No alerting on authentication by a departed employee's account
- No real-time alerting on mass resource deletion at that volume
- CloudTrail logs were available but **reviewed forensically after the outage** rather than monitored in real time

## What Triggered Detection

The service outage itself. **[Documented]**

## Key Detection Lesson

:::danger Detection Lesson [Inferred]
Post-termination access is among the most reliable and actionable **deterministic signals** available.

The `TerminateInstances` API call volume was a high-signal event in CloudTrail. **Neither control** — departure-credential revocation nor bulk-deletion alerting — was in place.

**Controls that would have helped (both are Tier 1):**
- Offboarding SLA: all credentials revoked within 4 hours of documented departure
- Alert on any authentication by a terminated/resigned account
- Alert on mass deletion event: >N `TerminateInstances` calls in a defined time window from a single identity

These controls require no machine learning, no baseline period, and no threshold calibration.
:::
