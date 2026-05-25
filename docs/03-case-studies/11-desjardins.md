---
id: desjardins
title: "3.11 · Desjardins Group"
sidebar_position: 11
---

# 3.11 Desjardins Group — Employee Data Theft (2017–2019)

<div className="case-meta">
  <strong>Category:</strong> Data exfiltration / downstream fraud &nbsp;|&nbsp; <strong>Organisation:</strong> Desjardins Group (Canada)<br/>
  <strong>Detection trigger:</strong> Laval police notification during separate criminal investigation
</div>

Over at least **26 months**, a malicious employee copied sensitive personal information — names, addresses, birth dates, social insurance numbers, email addresses, and financial data — from a marketing shared drive to a work computer and then to USB keys. The data was shared with criminal organisations for downstream fraud.

Approximately **4.2 million current members** and approximately **173,000 former members** and business members were affected. The Office of the Privacy Commissioner of Canada found Desjardins' controls insufficient on multiple dimensions and issued a remediation order. **[Documented — OPC PIPEDA Investigation Report 2020–001]**

## Signals Present in Retrospect

- Access to a shared drive containing data beyond the employee's normal scope **[Documented — OPC findings]**
- Repeated endpoint copies of sensitive files
- Removable media writes over an extended period
- Transfers consistently **below volume thresholds** that would have triggered automated controls

## What Was Missed

- Active monitoring was absent **[Documented — OPC remediation requirements]**
- DLP deployment was partial
- UEBA was not deployed
- Transfer controls were **threshold-based and size-based, not sensitivity-based** — sub-threshold transfers of highly sensitive regulated data were not flagged
- Role-scope controls did not prevent access to data outside the employee's function

## What Triggered Detection

The Laval police notified Desjardins during a separate criminal investigation. **Internal controls detected nothing over 26 months.** **[Documented]**

## Key Detection Lesson

:::danger Detection Lesson [Documented — OPC PIPEDA 2020–001]
The OPC findings are the most explicit regulatory documentation of **threshold-based DLP failure** in this case set.

The regulator's remediation order explicitly required controls covering transfers **below the minimum volume threshold**, as well as SIEM and UEBA deployment.

**[Inferred]** Sensitivity-aware controls — triggering review on any movement of regulated data **regardless of volume** — directly address the failure mode documented in the OPC findings.

**Controls that would have helped:**
- Sensitivity-based DLP: trigger on any movement of regulated data categories, not just volume thresholds
- UEBA: entity risk scoring for repeated sub-threshold transfers of sensitive data categories
- Role-scope enforcement: prevent access to marketing database data for employees outside that function
- Active SIEM monitoring rather than passive log retention
:::
