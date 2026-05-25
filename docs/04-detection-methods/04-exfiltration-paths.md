---
id: exfiltration-paths
title: "4.4 · Exfiltration Path Coverage"
sidebar_position: 4
---

# 4.4 Exfiltration Path Coverage

![Exfiltration paths](/img/img-13.png)

A complete programme must monitor **all meaningful exfiltration channels**. Email DLP is a common starting point, but the case evidence shows most documented exfiltrations used channels other than email as the primary path.

---

## Email to Personal Domain

**Monitor:** Exchange UAL `Send` operation where recipient domain is a consumer provider, combined with attachment size threshold or DLP classification match.

**Key signal:** Sensitive attachment to personal domain, volume spikes, departure flag.

**Primary limitation:** Steganography and encryption are undetectable by content-based DLP, as demonstrated in the [GE/Zheng case](/docs/case-studies/zheng) over an extended period.

:::info Behavioural controls are effective where content controls are not
Long-running relationship between a corporate email account and a personal webmail domain with **consistent attachment sending is a detectable pattern** even without content inspection. **[Documented — case record]**
:::

---

## USB and Removable Media

See [§4.1 Deterministic Rules](/docs/detection-methods/deterministic-rules) for log sources and logic.

**Primary limitation:** Hardware-level physical capture (photographing a screen) produces no digital artefact and has no technical detection solution.

---

## Personal Cloud Sync

Dropbox, Google Drive, personal OneDrive, iCloud Drive.

**Monitor:** CASB or web proxy for "Personal Cloud Storage" category with user identity attribution; endpoint DLP sync-client network connections.

**Key signal:** Upload to personal cloud storage from a corporate device or managed network.

**Primary limitation:** HTTPS inspection required for URL-level visibility; mobile hotspot bypasses corporate proxy entirely. **[Inferred]**

---

## SaaS Upload

Slack, GitHub, Jira, Confluence.

**Monitor:** SaaS audit logs for file upload and attachment operations; CASB file upload events; GitHub personal access token creation and clone events; OAuth grant events.

**Key signal:** Volume of uploads deviating from peer baseline; new OAuth grants to unrecognised applications; long-lived personal access token creation.

**Primary limitation:** SaaS platforms with limited or no native file-operation audit logging; abuse of existing approved integrations. **[Inferred]**

---

## Printing

See [§4.2 Behavioural Heuristics](/docs/detection-methods/behavioural-heuristics) for log sources and logic.

**Primary limitation:** Physical capture of printed output has no technical detection.

---

## Screen Capture Tools

See [§4.1 Deterministic Rules](/docs/detection-methods/deterministic-rules).

**Primary limitation:** A personal phone aimed at a monitor has no technical detection solution.

---

## Covert Channels and Low-and-Slow Exfiltration

**Monitor:**
- DNS resolver logs for high-entropy subdomain labels (DNS tunnelling)
- Zeek `dns.log` for TXT query volume and unusual query lengths
- Proxy logs for periodic low-volume outbound connections to consistent external destinations

**Key signal:** Persistent, periodic outbound connections to a fixed external destination correlated with prior sensitive data access.

**Primary limitation:** Low-entropy encoding (as used in the SUNBURST C2 channel) evades entropy-based detection. The [Desjardins case](/docs/case-studies/desjardins) shows the primary problem is **threshold blindness**: sub-threshold transfers over months are undetectable without sensitivity-aware or correlation-based controls. **[Documented — OPC findings]**

---

## Channel Coverage Matrix

| Channel | Monitor Mechanism | Primary Limitation | Tier |
|---------|-------------------|-------------------|------|
| Email → personal domain | UAL Send + DLP classification | Steganography, encryption | Tier 1 |
| USB/removable media | Event 4663 + DLP endpoint | Physical photography | Tier 1–2 |
| Personal cloud (Dropbox/Drive) | CASB + HTTPS inspection | Mobile hotspot bypass | Tier 2 |
| SaaS upload | Platform audit logs + CASB | Limited audit logging | Tier 2 |
| Print | PrintService Event 307 | Physical output | Tier 3 |
| Screen capture | Process execution correlation | Phone photography | Tier 2 |
| DNS tunnelling | Full QNAME resolver logs | Low-entropy encoding | Tier 4 |
| Steganography | Steganalysis tools | No standard DLP support | Tier 4 |
