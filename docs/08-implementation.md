---
id: implementation
title: "8 · Implementation Guidance"
sidebar_position: 9
---

# 8. Implementation Guidance

![Implementation guidance](/img/img-21.png)

This phased approach prioritises the **highest-value, lowest-effort controls first**. Do not skip Phase 1 to reach Phase 3 — the foundational telemetry and legal framework established in Phase 1 are prerequisites for everything that follows.

---

## Phase 1 — Foundations (Months 1–3)

**Target outcome:** Minimum viable insider detection programme. Would have provided real-time detection or materially shortened investigation time in the **Cisco, Yahoo, and Morrisons** cases.

![Phase 1 foundations](/img/img-22.png)

### Actions

1. **HR system integration with IdP**: departure dates, role changes, leave status reaching SIEM within hours of change. **This single integration has the greatest leverage over detection quality of any action in this phase.**

2. **Enable and forward to SIEM:**
   - IdP sign-in logs (full field set)
   - AD security audit events (4624, 4720, 4728, 1102)
   - AWS CloudTrail (all management events)
   - M365 UAL

3. **Implement Tier 1 deterministic rules:**
   - Post-termination access
   - Audit log clearing
   - Email forwarding to external domain
   - New privileged account creation
   - Backup deletion outside change window

4. **Legal and policy foundation**: review and update AUP; engage legal counsel for DPIA or jurisdiction-appropriate assessment; document legal basis for each monitoring activity **before enabling it**.

5. **Offboarding SLA**: define and enforce a technical offboarding SLA — all accounts disabled and credentials revoked **within 4 hours of documented departure**. The [Cisco/Ramesh](/docs/case-studies/ramesh) case demonstrates the direct cost of missing this.

---

## Phase 2 — Data Exfiltration Coverage (Months 3–6)

**Target outcome:** Coverage of the most common insider exfiltration paths. Would have provided detection in the **Tesla, Levandowski, and Desjardins** cases.

![Phase 2 exfiltration coverage](/img/img-23.png)

### Actions

1. **Endpoint DLP deployment**: prioritise removable media monitoring and sensitive file-path access logging.

2. **File server SACL configuration**: enable SACLs on sensitive directories; forward Event 4663 to SIEM. Scope carefully — broad SACLs generate unmanageable log volume.

3. **SharePoint/OneDrive download baseline and alerting**: 30-day rolling per-user baseline; count-based anomaly alert. Apply sync client user-agent filtering before enablement.

4. **CASB or proxy personal cloud category**: alerting or blocking for personal cloud storage, with user identity attribution.

5. **Sysmon deployment**: deploy with a maintained configuration (community baselines from SwiftOnSecurity or Florian Roth are commonly used starting points) across endpoints handling sensitive data. Prioritise Events 1, 2, 11, 12, 13, 23.

6. **Departing employee composite rule**: triggered by HR departure date flag + volume anomaly + destination change. Begin with **analyst review before automating alert escalation**.

7. **Mass deletion threshold alerting**: CloudTrail and Azure Activity Log deletion monitoring; file server deletion count thresholds calibrated per role.

---

## Phase 3 — Behavioural Analytics (Months 6–12)

**Target outcome:** "Authorised but anomalous" detection coverage for patterns that deterministic rules cannot reach.

![Phase 3 behavioural analytics](/img/img-24.png)

### Actions

1. **Role-based peer groups**: define user clusters using HR department, job title, and access tier. Validate cluster composition before enabling anomaly scoring.

2. **After-hours access detection**: integrate HR calendar; deploy composite alerting (after-hours + sensitive resource access, **not time-of-day alone**).

3. **Access outside role scope**: build role-to-resource-path baseline; deploy deviation alerting with a 30-day sensitivity baseline.

4. **Entity risk scoring**: select 5–8 signals and assign each an ordinal risk tier (LOW / MEDIUM / HIGH / CRITICAL); operate in **observation-only mode for 30 days** before enabling analyst queue entries. Tune false-positive rate before expanding the signal set.

5. **CI/CD pipeline tampering**: integrate source-control audit; configure protected-branch commit alerting and pipeline configuration change monitoring.

6. **Logic bomb artefact alerting**: Windows Security Event 4698 and WMI-Activity/Operational Event 5861 scoped to non-IT accounts; correlate with HR departure status.

7. **Analyst playbook**: create a written escalation process for each alert type that explicitly maps signals to kill-chain phases (planning, staging, exfiltration, sabotage, concealment).

---

## Phase 4 — Mature Programme (Year 2+)

**Target outcome:** Comprehensive coverage including sophisticated, long-dwell actors.

![Phase 4 mature programme](/img/img-25.png)

### Actions

1. **Graph analytics**: deploy access graph with first-occurrence edge tracking; apply community detection to flag novel access to sensitive resource clusters.

2. **Sequence anomaly models**: for highest-risk role classes (Finance, DBA, sysadmin, cloud engineering) only; build models on longitudinal audit data with careful validation.

3. **HR flag integration**: with Legal and HR approval, integrate disciplinary flag data into risk scoring for specifically elevated-risk accounts.

4. **Quarterly purple-team exercises**: simulate documented case scenarios against the programme; measure **time-to-detect** and coverage gaps.

5. **Insider Threat Working Group**: cross-functional group (Security + HR + Legal + IT) with defined escalation procedures, investigation protocols, and case management.

6. **Long-retention log storage**: move identity, control-plane, and network device logs to low-cost long-term storage (**minimum 3 years**). The Desjardins exfiltration lasted 26 months; the Zheng case involved conduct over more than a decade.

---

## Phase Summary

| Phase | Months | Target Cases Covered | Key Dependency |
|-------|--------|---------------------|----------------|
| **1 — Foundations** | 1–3 | Cisco, Yahoo, Morrisons | HR→SIEM integration |
| **2 — Exfiltration Coverage** | 3–6 | Tesla, Levandowski, Desjardins | Endpoint DLP + Sysmon |
| **3 — Behavioural Analytics** | 6–12 | Snowden (partial), Twitter | 30-day baseline + role taxonomy |
| **4 — Mature Programme** | 12+ | Zheng, Manning (partial) | Labelled data + cross-functional ITWG |
