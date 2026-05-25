---
id: kvashuk
title: "3.10 · Volodymyr Kvashuk"
sidebar_position: 10
---

# 3.10 Volodymyr Kvashuk — Microsoft Software Engineer (2018–2019)

<div className="case-meta">
  <strong>Category:</strong> Financial fraud &nbsp;|&nbsp; <strong>Organisation:</strong> Microsoft<br/>
  <strong>Detection trigger:</strong> Microsoft detected unusual gift-card redemption activity
</div>

Kvashuk, a software engineer with access to Microsoft's testing environment, stole approximately **$10 million in digital gift cards** by abusing test-account access to generate and redeem them at scale. He used **coworkers' credentials** to mask his activity, routed proceeds through Bitcoin mixing services, and misrepresented the Bitcoin proceeds as a family gift on a mortgage application.

He was sentenced to **nine years in federal prison**. **[Documented — DOJ press release; Ninth Circuit opinion, US v. Kvashuk]**

## Signals Present in Retrospect

- Test-account misuse for **production financial operations** **[Documented]**
- Anomalous **gift-card generation and redemption velocity**
- Activity appearing under coworkers' credentials with patterns **inconsistent with those accounts' normal use**
- Bitcoin monetisation of substantial value

## What Was Missed

- Separation of duties between test-environment access and production financial workflows **[Inferred from documented facts]**
- Monitoring of gift-card generation and redemption velocity anomalies
- Identity correlation to detect activity inconsistent with the **nominal account owner's historical pattern**

## What Triggered Detection

Microsoft detected unusual gift-card redemption activity and referred the matter to law enforcement. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Inferred]
Financial fraud by a technical insider exploiting **production-adjacent test access** is a **separation-of-duties problem first** and a monitoring problem second.

**Anomalous financial operation velocity** and **cross-account identity inconsistency** are the detectable signals.

**Controls that would have helped:**
- Enforce separation between test environment access and production financial systems
- Alert on high-velocity gift-card generation/redemption from any single identity or session
- Identity correlation: flag activity appearing under Account A that behaviorally matches Account B's operator patterns
:::
