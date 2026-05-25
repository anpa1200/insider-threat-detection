---
id: conclusion
title: "9 · Conclusion and Coverage Gaps"
sidebar_position: 10
---

# 9. Conclusion and Coverage Gaps

![Conclusion](/img/img-26.png)

---

## What the Evidence Shows

### Human detection still leads

CERT's banking-and-finance sector study found **61% of insider incidents were detected by non-security personnel** and only **22% by auditing or monitoring procedures**. Of the 14 individual incident cases documented in §3, initial detection came from human observation, external notification, law enforcement referral, or operational failure in the large majority of cases; internal technical monitoring was the primary trigger in at most **two to three** (Kvashuk, and arguably Twitter/Alzabarah and Yahoo/Ruiz).

This is not a statistically representative sample — the pattern is directionally consistent across sectors.

### Deterministic rules deliver the best ROI

Post-termination access, audit log clearing, email forwarding rules, and privileged account creation are **high-signal, low-noise controls** that require minimal tuning. They should be the first investment, not deferred in favour of complex UEBA.

### DLP is necessary but routinely insufficient

The case evidence consistently shows DLP failing against:
- **Steganographic encoding** — [GE/Zheng](/docs/case-studies/zheng)
- **Physical exfiltration** — [Manning](/docs/case-studies/manning)
- **Sub-threshold transfers over extended periods** — [Desjardins](/docs/case-studies/desjardins)
- **Channels outside DLP scope** — personal cloud sync, SaaS uploads, physical capture

A DLP-only programme misses a majority of documented exfiltration methods.

### Dwell time is the central operational problem

- [Desjardins](/docs/case-studies/desjardins): operated for at least **26 months** undetected
- [Zheng](/docs/case-studies/zheng): conducted spanned **more than a decade** before a counterintelligence referral
- Ponemon 2023: average of **86 days to contain** an insider incident after identification

Detection programmes must account for long-dwell scenarios, require adequate log retention, and must not rely exclusively on volume thresholds.

### Privileged users are the highest-risk category

Sysadmins, DBAs, DevOps engineers, cloud admins, and security team members can operate below alert thresholds precisely because they **understand the monitoring**. This category requires:
- PAM with session recording
- A logging pipeline they cannot access or modify
- Need-to-know enforcement beyond their administrative role
- Tighter change-window controls for their actions

---

## Coverage Gaps — What Standard Enterprise Tooling Cannot Currently Detect

![Coverage gaps](/img/img-27.png)

### Steganographic Exfiltration

Files hidden in image, audio, or video payloads. **No standard DLP product detects this** without specialised statistical content analysis. The [GE/Zheng case](/docs/case-studies/zheng) ran over a decade without internal detection.

### Physical Exfiltration

Photographing a monitor with a personal device, removing printed documents, verbally memorising credentials. **No technical detection is possible.** Process controls (clear-desk policy, no-photography zones, escorted access to data rooms) are the only mitigations.

### Social Engineering of a Peer

The insider obtains sensitive data by convincing a colleague to send it on their behalf. The insider's account generates no anomalous activity. Detection requires monitoring of the **unwitting colleague's** outbound behaviour.

### Very Slow, Low-Volume Exfiltration

One document per week for 18 months stays below every standard volume threshold. The only effective detection is:
- **Sensitivity-aware** — any movement of a specific classification label triggers review
- **Graph-based** — first-ever access to a document cluster outside the user's normal community

### Insider with Knowledge of the Detection Programme

A SIEM administrator, security engineer, or detection engineer who knows which rules are deployed and operates below all thresholds. Requires a **separate, independent monitoring pipeline** and oversight from outside the security team.

### Nation-State Planted Insiders

Trained, patient actors who maintain legitimate behavioural envelopes for extended periods. The [GE/Zheng case](/docs/case-studies/zheng) required a counterintelligence referral to surface. Technical controls alone are insufficient; **counterintelligence partnership is required**.

### Personal Devices and Unmanaged Networks

BYOD environments and personal cloud accounts accessed outside corporate networks are largely outside corporate monitoring scope. Data moved to a managed corporate device and then transferred to a personal cloud account via a personal mobile hotspot generates minimal corporate telemetry.
