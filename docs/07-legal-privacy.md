---
id: legal-privacy
title: "7 · Legal and Privacy Constraints"
sidebar_position: 8
---

# 7. Legal and Privacy Constraints

![Legal and privacy](/img/img-20.png)

Insider threat monitoring operates in legally constrained territory. The following is operational guidance based on publicly available regulatory and legal materials. **It is not legal advice.** Obtain qualified legal counsel before deploying employee monitoring programmes, particularly for content monitoring, communications interception, or monitoring that extends to personal devices.

---

## United States

The Electronic Communications Privacy Act (ECPA) and the Computer Fraud and Abuse Act (CFAA) generally permit employer monitoring of employer-owned systems, networks, and devices where a legitimate business purpose exists and employees have been notified. **[Documented — ECPA 18 U.S.C. §§ 2510–2523; CFAA 18 U.S.C. § 1030]**

An employee's expectation of privacy on corporate devices is reduced — though not eliminated — when:
- A clear **Acceptable Use Policy (AUP)** has been communicated
- The monitoring is of work systems for stated business purposes
- The policy has been acknowledged in writing

**[Inferred from case law; ODNI NITTF guidance provides operational framing]**

The NLRB has issued guidance indicating that overly broad monitoring policies that could reasonably be read to prohibit or chill employees' rights to discuss working conditions may be unlawful under the National Labor Relations Act.

:::note
GC 23–02 was **explicitly rescinded in February 2025** by Acting General Counsel Cowen via GC 25–05. The memo is cited as a documented point-in-time position; it no longer reflects current NLRB GC guidance.
:::

CERT's Common Sense Guide adds an operational boundary: do not monitor privileged personal communications (e.g., employee communications with doctors or attorneys); do not target protected disclosures or whistleblower-protected reports through the insider threat programme.

---

## European Union (GDPR)

Employee monitoring requires a lawful basis under **GDPR Article 6**, most commonly **legitimate interest (Article 6(1)(f))**, supported by a documented balancing test demonstrating the security interest outweighs the employee's privacy interest.

Monitoring must be:
- **Proportionate** — not broader than necessary for the stated security purpose
- **Purpose-limited** — security monitoring data cannot be repurposed for performance management without a separate legal basis
- **Transparent** — employees must be informed

Systematic, high-risk monitoring requires a **Data Protection Impact Assessment (DPIA)** under Article 35. **[Documented — GDPR Articles 6, 13, 35]**

Covert monitoring without employee notification is permissible only in limited, documented circumstances — typically where there is specific suspicion of criminal activity and disclosure would prejudice the investigation. **Blanket covert monitoring is not supportable under GDPR.**

:::warning
**Works council or employee representative consultation is required** in many EU member states before deploying monitoring systems; failure to consult may invalidate both the programme and any evidence it produces.
:::

---

## Australia (Privacy Act 1988)

The Privacy Act 1988 currently applies to organisations with annual turnover exceeding **AUD 3 million** and to all Commonwealth agencies.

:::note
The Privacy Act Review (2022) recommended expanding coverage to smaller organisations; verify current threshold applicability against the OAIC's published guidance, as the legislative position may have changed.
:::

The **employee records exemption** means that personal information held by private-sector employers in employment records, handled for direct employment-related purposes, is exempt from the Privacy Act's requirements. Monitoring activities extending beyond HR purposes (content monitoring, communications surveillance) may fall under state and territory **workplace surveillance legislation** (e.g., New South Wales Workplace Surveillance Act 2005).

---

## Practical Guidance Across Jurisdictions

| Action | Why |
|--------|-----|
| Maintain a current, legally reviewed AUP explicitly notifying employees of monitoring scope | Legal basis foundation in all jurisdictions |
| Separate security monitoring data from performance management data | They require different legal bases in most jurisdictions |
| Restrict analyst access to monitoring outputs to a defined team (Security, HR, Legal) under documented need-to-know | Data minimisation; evidence integrity |
| Treat HR-correlated signals (disciplinary history, performance flags) as sensitive data requiring HR and Legal approval | Proportionality; employment law compliance |
| Retain records of the legal basis, proportionality assessment, and DPIA for each monitoring activity | Regulatory audit readiness |
| Ensure human review is in the loop for any adverse employment action derived from monitoring results | Automated risk scores alone are not a sufficient basis for termination or legal referral in any jurisdiction |
| Maintain an access log for who has queried monitoring outputs | Evidence chain integrity; GDPR accountability principle |
