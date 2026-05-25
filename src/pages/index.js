import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
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
