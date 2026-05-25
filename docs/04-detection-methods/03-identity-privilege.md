---
id: identity-privilege
title: "4.3 · Identity and Privilege Anomalies"
sidebar_position: 3
---

# 4.3 Identity and Privilege Anomalies

![Identity and privilege](/img/img-12.png)

---

## New Admin Account Creation Outside Change Windows

Catches insider creation of backdoor administrative accounts.

**Log sources:**
- Windows Security Event **4720** (user account created)
- Events **4728, 4732, 4756** (member added to security-enabled group — domain-global, local, universal respectively)
- Azure AD / Entra audit log "Add member to role"
- AWS IAM `CreateUser`, `AttachUserPolicy`, `CreateAccessKey`

**Detection logic:**
Alert on any privileged account creation — account added to Domain Admins, local Administrators, or a cloud admin role — where the **creating account is not a known IT provisioning service account** and the event time falls outside an approved change window. This event has near-zero legitimate prevalence for non-IT accounts. **[Inferred]**

**False positives:** Emergency break-glass procedures, mitigated by pre-approved emergency workflows with out-of-band notification.

---

## Access to High-Sensitivity Systems with No Prior History

Catches first-ever authentication to crown-jewel systems by a user who has never previously accessed them.

**Log sources:**
- Windows Security Event **4624** (Logon Type 3 = network, Type 10 = remote interactive) on target systems
- PAM session initiation logs
- Cloud service access logs

**Detection logic:**
Maintain a per-user access history (user → set of systems previously authenticated to). Alert on **first-ever authentication** to a high-sensitivity tier (domain controller, database server, payment processing system, backup infrastructure) when combined with data volume or an active HR risk flag. **[Inferred]**

**False positives:** New system deployments, role changes. Apply a short grace period (e.g., 72 hours) tied to documented role-change events.

---

## Access During Leave or Announced Departure

Catches an account active during a period when HR records indicate the user is on leave, suspended, or departed.

**Log sources:**
IdP sign-in logs correlated with HR calendar data; leave management system integration.

**Detection logic:**
Alert on any authentication by an account where HR records the user as inactive (on leave, suspended, or terminated). **Near-zero false positives when HR data is current.** **[Inferred]**

---

## Access Creep Detection

Catches users retaining entitlements from previous roles, creating unintended high-privilege combinations.

**Log sources:**
IAM / AD group membership audit logs; SaaS application access provisioning logs; periodic entitlement snapshot comparison.

**Detection logic:**
Weekly comparison of each user's effective permissions against their current role baseline. Alert when effective access includes resource classes **not associated with the current documented role**. Flag accounts that have changed roles without a corresponding access review. **[Inferred]**

**Real case:** [Desjardins](/docs/case-studies/desjardins) — the insider accessed data in the banking warehouse that was not required for their marketing function, enabled by weak role segmentation. **[Documented — OPC findings]**

---

## Lateral Movement with Valid Credentials

Catches an insider (or external attacker using insider credentials) pivoting between systems using real accounts.

**Log sources:**
- Windows Security Event **4624** (Type 3 network logon) across multiple target systems
- Remote execution events (WMI, WinRM, PsExec, SSH)
- PAM session logs

**Detection logic:**
Correlate a user identity appearing on **multiple new hosts in rapid succession** — more than a handful of new hosts in a short window outside a documented maintenance window — especially when paired with admin tool execution. Specific count and time window thresholds must be calibrated per environment and role. **[Inferred]**

**False positives:** IT support engineers, automation scripts. Scope to non-automation accounts and correlate with change tickets.
