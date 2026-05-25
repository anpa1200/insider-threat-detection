// @ts-check
const config = {
  title: 'Insider Threat Detection',
  tagline: 'Detection logic, 14 documented cases, telemetry requirements, and a four-phase implementation programme for detecting malicious insider activity.',
  favicon: 'img/logo.png',
  url: 'https://anpa1200.github.io',
  baseUrl: '/insider-threat-detection/',
  organizationName: 'anpa1200',
  projectName: 'insider-threat-detection',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/anpa1200/insider-threat-detection/tree/main/'
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'}
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'Insider Threat Detection',
      logo: {
        alt: 'Andrey Pautov',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'guideSidebar', position: 'left', label: 'Guide'},
        {label: 'Projects', position: 'right', items: [
          {label: 'CTI Field Manual', href: 'https://anpa1200.github.io/cti-analyst-field-manual/'},
          {label: 'Customer-Driven AI CTI', href: 'https://anpa1200.github.io/customer-driven-ai-cti-project/'},
          {label: 'Israel Threat Actors CTI', href: 'https://anpa1200.github.io/israel-government-threat-actors-cti/'},
          {label: 'Insider Threat Detection', href: 'https://anpa1200.github.io/insider-threat-detection/'}
        ]},
        {href: 'https://medium.com/@1200km', label: 'Medium', position: 'right'},
        {href: 'https://github.com/anpa1200/insider-threat-detection', label: 'GitHub', position: 'right'}
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
          {label: 'CTI Field Manual', href: 'https://anpa1200.github.io/cti-analyst-field-manual/'},
          {label: 'Customer-Driven AI CTI', href: 'https://anpa1200.github.io/customer-driven-ai-cti-project/'},
          {label: 'Israel Threat Actors CTI', href: 'https://anpa1200.github.io/israel-government-threat-actors-cti/'}
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
