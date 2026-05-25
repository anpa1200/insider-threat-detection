---
id: detection-methods
title: "4 · Detection Methods"
sidebar_position: 5
---

# 4. Detection Methods

![Detection methods overview](/img/img-09.png)

The detection logic below is defender-operable guidance. Where logic is directly supported by a documented case or primary source, it is cited. Where the correlation is an engineering synthesis, it is marked **[Inferred]**.

:::caution Environment Validation Required
- Windows Event IDs listed below are standard audit policy outputs; they require correct audit policy configuration and are **not produced by default** on all systems.
- Validate all event IDs and M365 operation names in your environment — audit policy settings, licence tier, and tenant configuration affect what is actually generated.
- Specific thresholds listed are **illustrative starting points**; production values must be calibrated to your environment.
:::

## Detection Method Index

| Section | Method Class | Deployment Tier |
|---------|-------------|-----------------|
| [4.1 Deterministic Rules](./deterministic-rules) | Fire on specific artefact patterns with near-zero legitimate prevalence | **Tier 1 — Deploy first** |
| [4.2 Behavioural Heuristics](./behavioural-heuristics) | Require baseline period; catch "authorised but abnormal" behaviour | **Tier 2–3** |
| [4.3 Identity & Privilege Anomalies](./identity-privilege) | Privileged account creation, access creep, lateral movement | **Tier 1–2** |
| [4.4 Exfiltration Path Coverage](./exfiltration-paths) | All meaningful exfiltration channels | **Tier 1–3** |
| [4.5 Sabotage Signals](./sabotage-signals) | Control-plane monitoring for destructive actions | **Tier 1–2** |
| [4.6 UEBA and Anomaly Models](./ueba-anomaly) | Entity risk scoring, peer clustering, ML models | **Tier 3–4** |
| [4.7 Covering-Tracks Detection](./covering-tracks) | Phase 6 second detection opportunity | **Tier 1** |
