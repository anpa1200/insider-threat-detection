---
id: tesla
title: "3.12 · Tesla"
sidebar_position: 12
---

# 3.12 Tesla — Departing Employee Data Leak (2023)

<div className="case-meta">
  <strong>Category:</strong> Departing employee / data exfiltration &nbsp;|&nbsp; <strong>Organisation:</strong> Tesla<br/>
  <strong>Detection trigger:</strong> Handelsblatt contacted Tesla before publication
</div>

Two former Tesla employees leaked approximately **100 GB of confidential data** — including personal data on approximately **75,000 current and former employees**, customer financial information, and production details — to the German newspaper Handelsblatt. Tesla attributed the disclosure to departing employees and pursued legal action. **[Documented — Tesla legal filings; Handelsblatt reporting]**

## Signals Present in Retrospect

- Large-scale data export by employees **in the departure window** **[Documented]**
- Data included HR records and production data **outside the employees' functional scope**
- **100 GB is a high-signal volume event** in any access log

## What Triggered Detection

Handelsblatt contacted Tesla before publication. Tesla's investigation identified the former employees via **access logs**. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Documented — CERT/CMU; Inferred]
CERT data indicates that in studied IP-theft cases, the last-confirmed harmful act occurred **disproportionately in the period leading up to or shortly following departure**.

**[Inferred]** Volume monitoring on data exports should be specifically **heightened during the departure window**.

Access to data outside current role scope during this window should generate alerts **regardless of volume**.

**Controls that would have helped:**
- Auto-enroll in departure watchlist when HR flags resignation
- Alert on any single-session export >N GB by a departing employee
- Alert on access to data outside current role scope during departure window
- HR → SIEM feed latency: departure flag must reach monitoring within hours, not days
:::
