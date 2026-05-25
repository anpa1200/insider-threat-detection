---
id: taxonomy
title: "2 · Taxonomy and Kill Chain"
sidebar_position: 3
---

# 2. Insider Threat Taxonomy and Kill Chain

![Taxonomy overview](/img/img-04.png)

## 2.1 Threat Categories

The CERT/CMU Division classifies insider threats across three primary types, based on analysis of more than 1,500 documented cases:

### Malicious Insider

Intentional harmful action for personal gain, revenge, ideology, or coercion. Subdivided by goal:

| Sub-type | Description | Common Triggers |
|----------|-------------|-----------------|
| **Data theft / IP exfiltration** | Stealing proprietary information, source code, customer data, or trade secrets. Most common category. | Job transition, competitor recruitment, nation-state tasking |
| **Sabotage** | Deliberate destruction or disruption of systems, data, or business processes. | Termination, disciplinary action, sustained grievance |
| **Financial fraud** | Manipulation of financial systems, ghost vendors, or unauthorised transactions. | High prevalence in Finance, Accounting, IT admin |
| **Espionage** | Acting as an agent for a foreign government or corporate intelligence interest. | Often indistinguishable from IP theft until full investigation |

### Negligent Insider

Accidental harm through misuse, misconfiguration, or policy disregard. **Not covered in this guide**; detection approaches differ significantly.

### Compromised Insider

A legitimate account taken over by an external attacker. Detection overlaps with insider methods but the attacker profile and motivation differ.

### Departing Employee

The **30–90 day window** around resignation or termination is consistently the highest-risk period across CERT case data. Behaviour patterns shift:
- Unusual access hours
- Access to data outside current role
- Bulk downloads
- Data staging

---

## 2.2 The CMU SEI Insider Threat Kill Chain

The CERT Division's kill chain model identifies the following phases. **Phases are not strictly sequential** and some may be skipped:

![Kill chain phases](/img/img-05.png)

| Phase | Name | Description | Technical Observability |
|-------|------|-------------|------------------------|
| **1** | Predisposition | Pre-existing psychological, financial, or ideological factors | Not technically observable |
| **2** | Stressor | Triggering event: termination, demotion, financial crisis, coercion | Rarely leaves technical artefacts; HR signals possible |
| **3** | Planning | Identifying what to take, how, and through which channels | Early artefacts: access pattern changes, tool downloads, exfiltration path testing |
| **4** | Preparation | Acquiring tools, staging access, testing channels, creating alternative access | **Detection opportunity**: unusual process execution, sync client install, forwarding rule creation, out-of-scope access |
| **5** | Action | The primary harmful act: bulk copy, infrastructure deletion, malicious code commit, fraudulent transactions | **Primary detection window** |
| **6** | Post-incident | Covering tracks, denying involvement | **Second detection opportunity**: log clearing, timestamp modification, anti-forensic tool execution |

:::info Critical Observation
Most **technical detection opportunities** are concentrated in phases 3–6. Phases 1–2 require non-technical signals. Programmes that rely solely on technical controls miss the early warning window that CERT's data shows is often present **weeks or months before** the primary harmful act.

CERT's sabotage dataset found that **80% of cases** showed concerning behaviour beforehand visible to supervisors, and the substantial majority were detected because a system failure or operational irregularity occurred — not by pre-action monitoring.
:::

![Kill chain detection opportunities](/img/img-06.png)
