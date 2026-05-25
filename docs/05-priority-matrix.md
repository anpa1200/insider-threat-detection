---
id: priority-matrix
title: "5 · Detection Priority Matrix"
sidebar_position: 6
---

# 5. Detection Priority Matrix

![Priority matrix](/img/img-17.png)

Rated on **implementation effort** (licensing, configuration, integration complexity) and **detection coverage** (signal-to-noise ratio against the threat categories in §3), under realistic enterprise conditions.

---

## Tier 1 — Deploy Immediately

**Low effort · High signal · Very low FP rate**

These rely on events already generated or requiring minor audit policy changes. They have near-zero false-positive rates in properly maintained environments. **ROI is highest here.**

| Control | Evidence Base | Case Reference |
|---------|--------------|----------------|
| **Post-termination access alerting** | Requires HR→IdP feed. Catches departing employee and sabotage categories. | [Cisco/Ramesh](/docs/case-studies/ramesh) |
| **Audit log clearing alerting** | Security/1102 and Eventlog/Operational/104 are already generated; forward and alert. | Multiple |
| **Email forwarding rule to external domain** | M365 UAL already captures this event. | — |
| **New privileged account creation** | AD Events 4720/4728/4732/4756 already generated on domain controllers. | — |
| **Backup deletion outside change window** | Cloud backup and vault logs already generated. | — |

---

## Tier 2 — Deploy Second

**Medium effort · High value**

These require moderate configuration, baseline setup, or endpoint agent deployment.

| Control | Notes |
|---------|-------|
| **Departing employee composite rule** | Requires HR departure date integration. Highest single ROI for IP theft. FP rate: low when HR feed is timely. |
| **Mass deletion alerting** | Requires cloud and file audit configuration; threshold calibration per role. |
| **Bulk repository download anomaly** | Requires M365 UAL + 30-day per-user baseline; sync client user-agent filtering required before enablement. |
| **USB/removable media DLP** | Requires endpoint DLP agent deployment. |
| **Logic bomb artefact detection** | Windows Security Event 4698 and WMI-Activity/Operational Event 5861; scope to non-IT accounts. |

---

## Tier 3 — Deploy Third

**Medium–High effort · High analytical value**

Require baseline periods, role taxonomy, or HR metadata integration.

| Control | Notes |
|---------|-------|
| **Access outside role scope** | Requires role taxonomy and 30+ day access baseline. Medium FP rate; improves with accurate role data. |
| **Peer-group deviation scoring** | Requires role cluster definition and feature engineering. Medium FP rate during tuning. |
| **Entity risk scoring (UEBA)** | Requires 30-day baseline and ongoing tuning. Explicitly required by the Desjardins OPC remediation order. |
| **CI/CD pipeline tampering detection** | Requires source-control audit integration. Low FP rate. |
| **Data staging sequence detection** | Requires correlated process, file, and egress telemetry. |
| **After-hours access with sensitive resource correlation** | In async/remote-work/multi-timezone environments, time-of-day is a near-dead standalone signal. Must be paired with identity-context signals. |
| **Print volume monitoring** | Requires deliberate PrintService/Operational Event 307 forwarding, a mature endpoint log pipeline, and a per-user, per-application 90-day baseline. High FP rate during business cycle peaks. |

:::warning
After-hours access and print volume monitoring are **misclassified as Tier 2 in many reference guides**. Practical deployment complexity and FP burden place them in Tier 3.
:::

---

## Tier 4 — Advanced and Mature Programme

**High effort · High precision**

Appropriate only **after Tier 1–3 are operational and tuned**.

| Control | Notes |
|---------|-------|
| **Graph analytics on access patterns** | Requires graph infrastructure and edge-history tracking. Research-stage capability for most organisations. |
| **Sequence anomaly models (LSTM/transformer)** | Requires labelled training data, feature engineering, and ongoing maintenance. Not a general-availability default. |
| **DNS tunnelling detection** | Requires full QNAME capture at resolver. |
| **Steganography detection in outbound email attachments** | Requires specialised statistical content analysis. No standard DLP product covers this by default. |

---

## Summary Matrix

![Priority matrix summary](/img/img-18.png)

| Tier | Effort | Signal Quality | Baseline Required | Example Controls |
|------|--------|----------------|-------------------|-----------------|
| **1** | Low | Very high / deterministic | None | Post-termination auth, log clearing, forwarding rules |
| **2** | Medium | High | 30 days (some) | Departing employee composite, mass deletion, USB DLP |
| **3** | Medium–High | Medium–High | 30–90 days | Role-scope deviation, UEBA risk scoring, after-hours (composite) |
| **4** | High | High (when tuned) | 90+ days | Graph analytics, sequence models, DNS tunnelling, steganography |
