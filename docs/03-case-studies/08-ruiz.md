---
id: ruiz
title: "3.8 · Reyes Daniel Ruiz"
sidebar_position: 8
---

# 3.8 Reyes Daniel Ruiz — Yahoo Software Engineer (2018)

<div className="case-meta">
  <strong>Category:</strong> Privilege abuse / personal misuse &nbsp;|&nbsp; <strong>Organisation:</strong> Yahoo<br/>
  <strong>Detection trigger:</strong> Employer observation of suspicious account activity
</div>

Ruiz, a Yahoo software engineer, used his work access to compromise approximately **6,000 user accounts**, searching for intimate images and videos. He then used Yahoo credentials to pivot into **external accounts** (iCloud, Facebook, Gmail, Dropbox) belonging to the same users. Upon detection, he destroyed the laptop and external hard drive used to store the material. **[Documented — DOJ press release, criminal complaint]**

## Signals Present in Retrospect

- Repeated access to user accounts with **no associated business purpose or service ticket** **[Documented — complaint]**
- Cross-account pivoting from Yahoo credentials into external services
- High access volume across individual user accounts outside normal operational patterns

## What Was Missed

- Purpose-binding controls linking user-data access to an open service ticket **[Inferred from documented facts]**
- Alerting on unusual account lookup patterns (volume, non-sequential access, absence of operational correlation)

## What Triggered Detection

Employer observation of suspicious account activity. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Inferred]
**Privileged access to user data requires both:**
1. **Purpose-binding** — access must correlate with an open service ticket
2. **Anomaly detection** on access patterns (volume, non-sequential accounts, no operational correlation)

The cross-account pivoting into external services was an **access velocity and scope anomaly** detectable in user-data access logs.

**Controls that would have helped:**
- Require open ticket for any user account lookup; alert on lookups with no correlated ticket
- Alert on high-volume user-data access (>N accounts per day) from a single engineer identity
- Alert on first-time access pattern inconsistent with the account's operational role
:::
