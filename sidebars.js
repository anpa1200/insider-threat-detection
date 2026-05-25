/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '📖 Introduction',
    },
    {
      type: 'doc',
      id: 'why-harder',
      label: '1 · Why Harder',
    },
    {
      type: 'doc',
      id: 'taxonomy',
      label: '2 · Taxonomy & Kill Chain',
    },
    {
      type: 'category',
      label: '3 · Case Studies (14)',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'case-studies/case-studies'},
      items: [
        {type: 'doc', id: 'case-studies/manning', label: '3.1 Chelsea Manning'},
        {type: 'doc', id: 'case-studies/snowden', label: '3.2 Edward Snowden'},
        {type: 'doc', id: 'case-studies/duronio', label: '3.3 Roger Duronio'},
        {type: 'doc', id: 'case-studies/levandowski', label: '3.4 Anthony Levandowski'},
        {type: 'doc', id: 'case-studies/ramesh', label: '3.5 Sudhish Ramesh'},
        {type: 'doc', id: 'case-studies/zheng', label: '3.6 Xiaoqing Zheng'},
        {type: 'doc', id: 'case-studies/skelton', label: '3.7 Andrew Skelton'},
        {type: 'doc', id: 'case-studies/ruiz', label: '3.8 Reyes Ruiz'},
        {type: 'doc', id: 'case-studies/sharp', label: '3.9 Nickolas Sharp'},
        {type: 'doc', id: 'case-studies/kvashuk', label: '3.10 Volodymyr Kvashuk'},
        {type: 'doc', id: 'case-studies/desjardins', label: '3.11 Desjardins Group'},
        {type: 'doc', id: 'case-studies/tesla', label: '3.12 Tesla'},
        {type: 'doc', id: 'case-studies/twitter', label: '3.13 Twitter / Saudi Arabia'},
        {type: 'doc', id: 'case-studies/barile', label: '3.14 Juliana Barile'},
      ],
    },
    {
      type: 'category',
      label: '4 · Detection Methods',
      collapsible: true,
      collapsed: false,
      link: {type: 'doc', id: 'detection-methods/detection-methods'},
      items: [
        {type: 'doc', id: 'detection-methods/deterministic-rules', label: '4.1 Deterministic Rules'},
        {type: 'doc', id: 'detection-methods/behavioural-heuristics', label: '4.2 Behavioural Heuristics'},
        {type: 'doc', id: 'detection-methods/identity-privilege', label: '4.3 Identity & Privilege'},
        {type: 'doc', id: 'detection-methods/exfiltration-paths', label: '4.4 Exfiltration Paths'},
        {type: 'doc', id: 'detection-methods/sabotage-signals', label: '4.5 Sabotage Signals'},
        {type: 'doc', id: 'detection-methods/ueba-anomaly', label: '4.6 UEBA & Anomaly Models'},
        {type: 'doc', id: 'detection-methods/covering-tracks', label: '4.7 Covering-Tracks Detection'},
      ],
    },
    {
      type: 'doc',
      id: 'priority-matrix',
      label: '5 · Priority Matrix',
    },
    {
      type: 'doc',
      id: 'required-telemetry',
      label: '6 · Required Telemetry',
    },
    {
      type: 'doc',
      id: 'legal-privacy',
      label: '7 · Legal & Privacy',
    },
    {
      type: 'doc',
      id: 'implementation',
      label: '8 · Implementation (4 Phases)',
    },
    {
      type: 'doc',
      id: 'conclusion',
      label: '9 · Conclusion & Gaps',
    },
    {
      type: 'doc',
      id: 'references',
      label: '10 · References',
    },
  ],
};

module.exports = sidebars;
