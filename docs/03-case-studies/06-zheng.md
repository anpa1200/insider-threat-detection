---
id: zheng
title: "3.6 · Xiaoqing Zheng"
sidebar_position: 6
---

# 3.6 Xiaoqing Zheng — GE Aviation Engineer (2019 indictment)

<div className="case-meta">
  <strong>Category:</strong> Espionage / IP theft (nation-state adjacent) &nbsp;|&nbsp; <strong>Organisation:</strong> General Electric Aviation<br/>
  <strong>Detection trigger:</strong> FBI counterintelligence referral
</div>

Zheng, a GE turbine design engineer, stole proprietary turbine design files over an extended period of employment to benefit Chinese state-affiliated interests. His primary exfiltration method was **steganography**: he embedded GE proprietary files inside ordinary-looking image files and emailed them to his personal Hotmail account. He was indicted in 2019 and convicted at trial in 2023. **[Documented — DOJ indictment; DOJ trial press release]**

## Signals Present in Retrospect

- Outbound corporate email to a personal Hotmail address containing **image attachments** **[Documented — indictment]**
- Images with **anomalously large file sizes** relative to their visual content dimensions
- Repeated sending pattern to the same external destination over months or years
- No legitimate business communication history with those external recipients

## What Was Missed

- DLP was not configured to detect steganographic content **[Inferred from documented indictment timeline]**
- Email to personal consumer domains was not consistently alerted
- The exfiltration channel operated **undetected for years**

## What Triggered Detection

FBI counterintelligence referral. **GE's internal systems did not identify the exfiltration.** **[Documented]**

## Key Detection Lesson

:::warning Detection Lesson [Inferred]
**Keyword-based DLP fails entirely** against steganographic exfiltration.

Detection requires either:
1. **Specialised steganalysis tools** — chi-square analysis of least-significant bits, RS analysis, Sample Pair Analysis, DCT coefficient histogram patterns in JPEG files — capabilities not present in standard commercial DLP products
2. **Behavioural controls** — long-running relationship between a corporate email account and a personal webmail domain with consistent attachment sending is a **detectable pattern** even without content inspection

**The detectable signals were behavioural, not content-based:**
- Recurring email from corporate account → personal Hotmail over months
- Attachment-heavy communications with no business history at that recipient
- Image files with disproportionately large file sizes for their visual dimensions
:::
