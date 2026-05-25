---
id: ueba-anomaly
title: "4.6 · UEBA and Anomaly Models"
sidebar_position: 6
---

# 4.6 UEBA and Anomaly Models

![UEBA and anomaly models](/img/img-15.png)

UEBA addresses the "authorised but anomalous" problem that deterministic rules cannot reach. Its value is not in **replacing** deterministic rules but in providing a corroborating risk layer that requires **multiple weak signals to converge** before generating an analyst alert.

---

## Entity Risk Scoring

The most practical bridge between deterministic rules and full ML-based UEBA. Aggregates multiple weak signals into a **per-user risk score** over a rolling time window.

### Signal Tier Assignments (calibrate before deployment)

| Signal | Tier | Rationale |
|--------|------|-----------|
| After-hours access to sensitive resources | LOW | High organic prevalence in remote/global teams |
| Peer-group deviation in top percentile | LOW | Corroborating evidence only without HR context |
| First-time access to a high-sensitivity system | MEDIUM | Elevated but context-dependent |
| Repository download volume materially above baseline | MEDIUM | Needs role correlation |
| Removable media write from a sensitive path | HIGH | Low legitimate prevalence when scoped |
| Email forwarding rule to external domain | HIGH | Near-zero legitimate user-created prevalence |
| HR departure flag active | HIGH | Multiplier for all other signals |

:::danger
Remove **log clearing** from risk-scoring frameworks entirely. Log clearing is a deterministic incident trigger — see [§4.7](/docs/detection-methods/covering-tracks) and [§4.1](/docs/detection-methods/deterministic-rules). It must not be handled via threshold accumulation.
:::

### Score Decay

Reduce scores that are not reinforced within a defined window (e.g., 7 days). The score should reflect **current risk trajectory**, not historical events.

### Commercial Platforms

Microsoft Purview Insider Risk Management, Exabeam, Securonix, Varonis Data Security Platform, Splunk Enterprise Security. Capabilities differ across platforms; evaluate against your specific telemetry sources.

### Limitation

Risk scores require a **baseline period (typically 30 days)**. New and transferred employees generate cold-start false positives. **HR role context is essential** for suppressing noise — scores without role integration produce unacceptable false-positive rates in most environments.

:::info Regulatory Validation [Documented — OPC PIPEDA 2020–001]
The OPC's Desjardins findings explicitly identified SIEM and UEBA as active-surveillance tools that would have generated alerts on the insider's behaviour, and required both as **remediation items**.
:::

---

## Peer-Group Clustering

Calibrates anomaly scoring to realistic "normal" for each role rather than the whole organisation.

**Implementation:**
Cluster users by department, job title, seniority band, and access tier. Compute per-user deviation scores relative to the cluster centroid. Alert on users placing in the **top percentile** of their cluster by deviation score, particularly when combined with an HR or departure flag.

:::note Research Context
See the note on CERT Insider Threat Synthetic Dataset research in §4.2. Academic peer-group approaches show promise on benchmark evaluations; **real-world production results require independent validation**. Appropriate as a Tier 3–4 capability, not a day-one deployment.
:::

---

## Sequence Anomaly Models

Detect ordered action chains: authenticate → access new system → read sensitive files → create archive → exfiltrate.

**Implementation:** Model expected action sequences per role class using:
- **Markov chains** — lower implementation complexity
- **LSTM/transformer models** — higher recall potential, greater training data requirement

Flag sequences deviating from the learned model for the role class. Focus on the **access → archive → external transfer** three-step sequence. **[Inferred]**

:::warning
Real-world production deployment requires significant **feature engineering, labelled data from your own environment**, and ongoing maintenance. Treat these as a Tier 4 capability, not a general-availability default.
:::

---

## Graph Analytics on Access Patterns

Represent users, systems, and data repositories as nodes; access events as edges. **Anomalous behaviour appears as new edges** connecting a user to previously unvisited high-sensitivity parts of the graph.

**Implementation:**
- Track first-occurrence timestamps for each user-to-resource edge
- Apply community detection to identify clusters of resources accessed together as part of normal workflows
- Alert when a user accesses a resource **outside their community**, particularly when that resource is in a high-sensitivity tier **[Inferred]**

This is a **Tier 4 capability** requiring specialised infrastructure, engineering resources, and ongoing model maintenance.
