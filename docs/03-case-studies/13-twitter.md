---
id: twitter
title: "3.13 · Twitter / Saudi Arabia"
sidebar_position: 13
---

# 3.13 Twitter — Saudi Arabia State-Sponsored Insider Espionage (2015)

<div className="case-meta">
  <strong>Category:</strong> Insider espionage / state-sponsored collusion &nbsp;|&nbsp; <strong>Organisation:</strong> Twitter<br/>
  <strong>Detection trigger:</strong> Twitter management observation of one suspicious access
</div>

Ahmad Abouammo (a former media partnerships manager) and Ali Alzabarah (a former site reliability engineer) used internal Twitter user-information tools to retrieve **private account details** — including phone numbers and IP addresses — belonging to Saudi dissidents and government critics, and passed the information to Saudi intelligence officials.

Alzabarah accessed data associated with **more than 6,000 Twitter accounts on a single day**. Abouammo received a watch and monetary payments; Alzabarah received gifts and a payment. Abouammo was convicted at trial; Alzabarah fled to Saudi Arabia before arrest. **[Documented — DOJ criminal complaint; verdict in US v. Abouammo]**

## Signals Present in Retrospect

- **High-volume sensitive account lookups** with no business justification **[Documented — complaint]**
- Access to accounts belonging to individuals of political significance to a specific foreign government
- Unusual communication with individuals connected to foreign state actors

## What Was Missed

- Purpose-binding and access controls on the user-information tools **[Inferred from documented facts]**
- Alerting on **high-risk profile access** (politically sensitive accounts, journalists, activists)
- Count-based anomaly detection — accessing more than **6,000 accounts in a single day** is a high-signal volumetric event regardless of role

## What Triggered Detection

Twitter management confronted Alzabarah after observing one suspicious access. He **fled the country the following day**. The FBI investigation followed. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Documented — DOJ criminal complaint; Inferred]
The access tool existed; alerting on its abuse did not.

A **daily count threshold on user-information tool queries** would have flagged the 6,000-account single-day access pattern.

Access to sensitive data categories (journalist and activist accounts) requires **purpose-binding controls** regardless of the employee's role.

**Controls that would have helped:**
- Daily query count threshold on user-information tools: >N lookups/day triggers review
- Purpose-binding: user-information access must correlate with an open support/safety ticket
- Alert on access to accounts tagged as high-risk (journalists, activists, political figures)
- Flag unusual communication with foreign nationals in conjunction with sensitive data access
:::
