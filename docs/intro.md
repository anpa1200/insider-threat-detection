---
id: intro
title: Introduction
sidebar_position: 1
---

# Detecting Malicious Insider Activity: A Technical Detection Engineering Guide

For ATT&CK mapping, coverage-gap analysis, and detection-backlog handoff across this research, use the [AdversaryGraph AI CTI workbench](https://1200km.com/adversarygraph/).

> Detection logic, case evidence from 14 documented incidents, and a four-phase implementation programme — covering deterministic rules, behavioural heuristics, UEBA, exfiltration path coverage, and the telemetry required before any of it works.

![Hero infographic](/img/img-01-hero.png)

**By Andrey Pautov · April 2026**

:::info Epistemic Labels
- **[Documented]** = a cited source explicitly states this.
- **[Inferred]** = a reasonable analytic conclusion derived from documented facts or established detection engineering practice.
- Unlabelled claims have consensus support in the cited literature.
- This guide is **not legal advice**.
:::

---

This guide is a technical detection engineering reference for analysts, security architects, and programme leads responsible for detecting malicious insider activity in enterprise environments. Its focus is **operationalisable detection**: every method described identifies a specific log source, event, or telemetry field, and every claim is either grounded in a cited primary source or explicitly labelled [Inferred].

## Scope

This guide covers **malicious insiders** — employees, contractors, and privileged users who intentionally cause harm through data theft, sabotage, financial fraud, or espionage.

Negligent insiders (accidental data loss, misconfiguration) are **not covered**; their detection posture differs substantially. Compromised insiders (external attackers operating through a taken-over account) are noted where detection overlaps.

## Evidence Base

Detection claims are grounded primarily in:
- CERT/CMU case research
- DOJ criminal records and indictments
- Regulatory findings (OPC PIPEDA, UKSC)
- Published IR data (Ponemon, Verizon DBIR, Mandiant M-Trends)

Fourteen real cases are analysed for signals present in retrospect, what was missed, and what triggered detection.

## How to Use This Guide

| Goal | Starting Point |
|------|---------------|
| **Build a new programme** | [§8 Implementation Guidance](/docs/implementation) — work backwards into relevant [§4 Detection Methods](/docs/detection-methods/) sections |
| **Triage an active investigation** | [§3 Case Studies](/docs/case-studies/) to pattern-match case type, then [§4](/docs/detection-methods/) for telemetry and logic |
| **Audit an existing programme** | [§5 Detection Priority Matrix](/docs/priority-matrix) to identify gaps |
| **Legal and compliance review** | [§7 Legal and Privacy Constraints](/docs/legal-privacy) |

## What This Guide Does Not Provide

- Specific product configuration instructions
- Vendor-specific SIEM query syntax
- Production-ready threshold values (these must be calibrated per environment)
- Legal advice

---

## Guide Structure

```
01 · Why Insider Detection Is Structurally Harder
02 · Insider Threat Taxonomy and Kill Chain
03 · Documented Case Studies (14 cases)
04 · Detection Methods
     4.1 Deterministic Rules
     4.2 Behavioural Heuristics
     4.3 Identity and Privilege Anomalies
     4.4 Exfiltration Path Coverage
     4.5 Sabotage Signals
     4.6 UEBA and Anomaly Models
     4.7 Covering-Tracks Detection
05 · Detection Priority Matrix
06 · Required Telemetry
07 · Legal and Privacy Constraints
08 · Implementation Guidance
09 · Conclusion and Coverage Gaps
10 · References
```
