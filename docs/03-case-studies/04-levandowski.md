---
id: levandowski
title: "3.4 · Anthony Levandowski"
sidebar_position: 4
---

# 3.4 Anthony Levandowski — Waymo Engineer (2016)

<div className="case-meta">
  <strong>Category:</strong> Departing employee / IP theft &nbsp;|&nbsp; <strong>Organisation:</strong> Waymo (Alphabet) → Otto → Uber<br/>
  <strong>Detection trigger:</strong> Civil litigation discovery (supplier subpoena)
</div>

Levandowski, a senior Waymo engineer, downloaded more than **14,000 confidential files totalling approximately 9.7 GB** from Waymo's internal systems before resigning, connected removable media for an extended period, and **reformatted his laptop** shortly before departure. He subsequently founded a competing autonomous vehicle company acquired by Uber. He pleaded guilty to trade secret theft in 2020. **[Documented — DOJ press release, criminal complaint; Waymo civil complaint]**

## Signals Present in Retrospect

- Concentrated repository access across LiDAR and hardware design systems **[Documented — criminal complaint]**
- Extended removable media attachment during the departure window
- Mass file download preceding resignation
- Anti-forensic laptop reformat

## What Was Missed

- Heightened monitoring was not triggered for a senior technical engineer in the notice window **[Inferred from documented case facts]**
- No DLP alert on the volume of the bulk download

## What Triggered Detection

During adversarial civil litigation, a Waymo subpoena served on a common LiDAR component supplier produced compelled documentation showing that Uber's LiDAR hardware design replicated Waymo's proprietary circuit board — identified through **litigation discovery**, not internal detection controls. **[Documented]**

## Key Detection Lesson

:::info Detection Lesson [Inferred]
The **departure window for senior staff** with access to crown-jewel IP requires heightened monitoring.

The mass download volume, extended removable media connection, and subsequent laptop reformat were all detectable in **endpoint and file-server logs**.

**Controls that would have helped:**
- Auto-enroll departing employees in heightened monitoring watchlist on HR departure flag
- Alert on mass file download (>threshold files) in 30-day window before departure
- Alert on extended removable media connection from sensitive system access sessions
- Correlate laptop reformat events with departure window + sensitive file access history
:::
