# Insider Threat Detection Engineering

A practitioner field guide for detecting malicious insider activity through documented cases, actionable detection logic, telemetry requirements, and a four-phase implementation programme.

[Read the published guide](https://1200km.com/insider-threat-detection/) · [Start with the introduction](docs/intro.md) · [Author's security research](https://medium.com/@1200km)

## What the guide provides

- A malicious-insider taxonomy and attack lifecycle
- Evidence from 14 documented incidents
- Deterministic and behavioral detection methods
- Identity, privilege, exfiltration, sabotage, and covering-tracks signals
- UEBA and anomaly-model considerations
- A prioritized detection matrix and telemetry checklist
- Legal and privacy constraints
- A four-phase implementation programme

Claims are grounded in cited sources or explicitly marked as analytic inference. The guide is a detection-engineering reference, not legal advice.

## Guide structure

- `docs/01-why-harder.md` — structural detection challenges
- `docs/02-taxonomy.md` — threat taxonomy and lifecycle
- `docs/05-priority-matrix.md` — detection priorities
- `docs/06-required-telemetry.md` — required data sources
- `docs/07-legal-privacy.md` — legal and privacy constraints
- `docs/08-implementation.md` — implementation programme
- `docs/10-references.md` — evidence base and references

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm start
```

Create and preview a production build with:

```bash
npm run build
npm run serve
```

## Related work

- [AdversaryGraph](https://1200km.com/adversarygraph/) — ATT&CK mapping and detection-backlog workflow
- [Anomaly Detection Atlas](https://1200km.com/anomaly-detection-atlas/) — anomaly methods and security telemetry
- [CTI Analyst Field Manual](https://1200km.com/cti-analyst-field-manual/) — evidence and analytic tradecraft

## Author

Andrey Pautov — [1200km.com](https://1200km.com/) · [Medium](https://medium.com/@1200km) · [GitHub](https://github.com/anpa1200)

