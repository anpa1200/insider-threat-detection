import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const PROJECT_TITLE = 'Insider Threat Detection';
const PAGE_DESCRIPTION = 'Build a defensible insider-risk program with 14 documented cases, tiered detection logic, required telemetry, legal constraints, and phased implementation.';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{PROJECT_TITLE}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Start Reading →
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: '14 Documented Cases',
    description: 'Manning, Snowden, Duronio, Levandowski, Ramesh, Zheng, Skelton, Ruiz, Sharp, Kvashuk, Desjardins, Tesla, Twitter, Barile — signals present in retrospect, what was missed, what triggered detection.',
  },
  {
    title: 'Detection Logic by Tier',
    description: 'Deterministic rules, behavioural heuristics, identity anomalies, exfiltration path coverage, sabotage signals, UEBA models — each with log sources, detection logic, and false-positive guidance.',
  },
  {
    title: 'Four-Phase Implementation',
    description: 'Phased programme from telemetry foundations through behavioural analytics to mature graph-based detection — structured to deliver maximum ROI first.',
  },
  {
    title: 'Legal & Privacy Constraints',
    description: 'Operational monitoring boundaries under US law (ECPA, CFAA), GDPR, and the Australian Privacy Act — jurisdiction-specific guidance for each monitoring activity.',
  },
];

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {'@type': 'ListItem', position: 1, name: '1200km', item: 'https://1200km.com/'},
    {'@type': 'ListItem', position: 2, name: 'Insider Threat Detection', item: 'https://1200km.com/insider-threat-detection/'},
  ],
};

export default function Home() {
  return (
    <Layout
      title={PROJECT_TITLE}
      description={PAGE_DESCRIPTION}
    >
      <Head>
        <meta name="twitter:title" content={`${PROJECT_TITLE} | 1200km`} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbStructuredData)}</script>
      </Head>
      <HomepageHeader />
      <main>
        <section style={{padding: '48px 0'}}>
          <div className="container">
            <div className="row">
              {features.map((f, i) => (
                <div key={i} className="col col--3">
                  <div style={{padding: '16px'}}>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{textAlign: 'center', marginTop: '40px'}}>
              <p style={{fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)'}}>
                By <strong>Andrey Pautov</strong> · Threat Intelligence Research Engineer · April 2026
              </p>
              <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-500)'}}>
                <em>Epistemic labels: </em>
                <strong style={{color:'#27ae60'}}>[Documented]</strong> = cited primary source. &nbsp;
                <strong style={{color:'#2980b9'}}>[Inferred]</strong> = analytic conclusion from documented facts. &nbsp;
                Unlabelled = consensus support in cited literature. Not legal advice.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
