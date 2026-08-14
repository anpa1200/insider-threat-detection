// @ts-check
const {execFileSync} = require('node:child_process');

function gitLastModifiedDate(relativePath) {
  try {
    const value = execFileSync('git', ['log', '-1', '--format=%cs', '--', relativePath], {
      cwd: __dirname,
      encoding: 'utf8',
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : undefined;
  } catch {
    return undefined;
  }
}

const homepageLastmod = gitLastModifiedDate('src/pages/index.js');

const config = {
  title: '1200km',
  tagline: 'Detection logic, 14 documented cases, telemetry requirements, and a four-phase implementation programme for detecting malicious insider activity.',
  favicon: 'img/logo.png',
  url: 'https://1200km.com',
  baseUrl: '/insider-threat-detection/',
  scripts: [{src: 'https://1200km.com/assets/docusaurus-ecosystem.js?v=20260614-3', defer: true}],
  organizationName: 'anpa1200',
  projectName: 'insider-threat-detection',

  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  plugins: ['./seo-metadata-plugin.cjs'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/anpa1200/insider-threat-detection/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        sitemap: {
          lastmod: 'date',
          createSitemapItems: async ({defaultCreateSitemapItems, ...params}) => {
            const items = await defaultCreateSitemapItems(params);
            return items.map((item) => item.url === 'https://1200km.com/insider-threat-detection/' && homepageLastmod
              ? {...item, lastmod: item.lastmod || homepageLastmod}
              : item);
          },
        },
        gtag: {trackingID: 'G-TMTG21RVHM', anonymizeIP: true},
        theme: {customCss: './src/css/custom.css'}
      }
    ]
  ],
  themeConfig: {
    image: 'img/img-01-hero.png',
    metadata: [
      {
        property: 'og:site_name',
        content: '1200km — Andrey Pautov Security Research',
      },
      {
        name: 'keywords',
        content: 'insider threat detection, insider threat program, UEBA, behavioral analytics, data exfiltration detection, privileged user monitoring, SIEM detection rules, 14 insider threat cases, Manning, Snowden, detection engineering, CERT insider threat',
      },
    ],
    navbar: {
      title: 'Insider Threat Detection',
      logo: {
        alt: 'Andrey Pautov',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'guideSidebar', position: 'left', label: 'Guide'},
        {
          label: 'Projects',
          position: 'right',
          items: [
            {label: 'CTI Analyst Field Manual', href: 'https://1200km.com/cti-analyst-field-manual/'},
            {label: 'CTI as a Code', href: 'https://1200km.com/CTI_as_a_Code/'},
            {label: 'Operation Desert Hydra', href: 'https://1200km.com/operation-desert-hydra/'},
            {label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/'},
            {label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/'},
            {label: 'AI vs Defense', href: 'https://1200km.com/ai-vs-defense/'},
            {label: 'HexStrike AI (upstream project)', href: 'https://github.com/0x4m4/hexstrike-ai'},
            {label: 'AdversaryGraph Docs', href: 'https://1200km.com/adversarygraph-docs/'},
          ],
        },
        {href: 'https://medium.com/@1200km', label: 'Medium', position: 'right'},
        {href: 'https://github.com/anpa1200/insider-threat-detection', label: 'GitHub', position: 'right'},
        {href: 'https://1200km.com/', label: 'Main Page', position: 'right', className: 'navbar-portfolio-btn'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Guide', items: [
          {label: 'Introduction', to: '/docs/intro'},
          {label: 'Detection Methods', to: '/docs/detection-methods/'},
          {label: 'Priority Matrix', to: '/docs/priority-matrix'},
          {label: 'Implementation', to: '/docs/implementation'}
        ]},
        {title: 'Ecosystem', items: [
          {label: 'CTI Analyst Field Manual', href: 'https://1200km.com/cti-analyst-field-manual/'},
          {label: 'Customer-Driven AI CTI', href: 'https://1200km.com/customer-driven-ai-cti-project/'},
          {label: 'Israel Threat Actors CTI', href: 'https://1200km.com/israel-government-threat-actors-cti/'},
          {label: 'AdversaryGraph Docs', href: 'https://1200km.com/adversarygraph-docs/'}
        ]},
        {title: 'Author', items: [
          {label: 'Medium', href: 'https://medium.com/@1200km'},
          {label: 'GitHub', href: 'https://github.com/anpa1200'},
          {label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrey-pautov/'}
        ]}
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andrey Pautov. Insider Threat Detection Engineering Guide.`
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
      additionalLanguages: ['powershell', 'bash', 'yaml', 'sql']
    }
  }
};
module.exports = config;
